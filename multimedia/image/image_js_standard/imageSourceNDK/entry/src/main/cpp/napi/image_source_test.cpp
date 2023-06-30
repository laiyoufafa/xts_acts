/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "image_source_test.h"
#include "node_api.h"
#include "image_pixel_map_napi.h"
#include <cstdlib>
#include "hilog/log.h"

namespace {
    constexpr size_t SIZE_ZERO = 0;
    constexpr size_t SIZE_ONE = 1;
    constexpr size_t SIZE_TWO = 2;
    constexpr size_t SIZE_THREE = 3;
    constexpr size_t DEFAULT_STRING_SIZE = 64;
    constexpr uint32_t ARGS_FIRST = 0;
    constexpr uint32_t ARGS_SECOND = 1;
    constexpr uint32_t ARGS_THIRD = 2;
    constexpr uint32_t INVALID_FRAME_COUNT = 0;
    constexpr int8_t INT8_FALSE = 0;
    constexpr int8_t INT8_TRUE = 1;
    constexpr int32_t DEFAULT_INDEX = 0;
}

namespace OHOS {
namespace Media {

const unsigned int LOG_ID = 0xD002B05;
constexpr OHOS::HiviewDFX::HiLogLabel LABEL = {LOG_CORE, LOG_ID, "ImageSourceNDKTest"};
#define MY_HILOG(op, fmt, args...) \
    do {                                  \
        op(LABEL, "{%{public}s:%{public}d} " fmt, __FUNCTION__, __LINE__, ##args);  \
    } while (0)
#define DEBUG_LOG(fmt, ...) MY_HILOG(OHOS::HiviewDFX::HiLog::Info, fmt, ##__VA_ARGS__)
#define DEBUG_PTR(p) (((p) == nullptr)?"nullptr":"not nullptr")

#define STATIC_FUNCTION(n, f) { (n), nullptr, (f), nullptr, nullptr, nullptr, napi_static, nullptr }
napi_value ImageSourceNDKTest::Init(napi_env env, napi_value exports)
{
    napi_property_descriptor props[] = {
        STATIC_FUNCTION("create", Create),
        STATIC_FUNCTION("createIncremental", CreateIncremental),
        STATIC_FUNCTION("initNative", InitNative),
        STATIC_FUNCTION("createPixelMap", CreatePixelMap),
        STATIC_FUNCTION("createPixelMapList", CreatePixelMapList),
        STATIC_FUNCTION("getDelayTime", GetDelayTime),
        STATIC_FUNCTION("getFrameCount", GetFrameCount),
        STATIC_FUNCTION("getSupportedFormats", GetSupportedFormats),
        STATIC_FUNCTION("getImageInfo", GetImageInfo),
        STATIC_FUNCTION("getImageProperty", GetImageProperty),
        STATIC_FUNCTION("modifyImageProperty", ModifyImageProperty),
        STATIC_FUNCTION("updateData", UpdateData),
        STATIC_FUNCTION("release", Release),
    };
    napi_define_properties(env, exports, sizeof(props) / sizeof(props[ARGS_FIRST]), props);
    return exports;
}

static bool GetBoolProperty(napi_env env, napi_value root, const char* utf8name, int8_t* res)
{
    napi_value property = nullptr;
    auto status = napi_get_named_property(env, root, utf8name, &property);
    if (status != napi_ok || property == nullptr) {
        DEBUG_LOG("Get property error %{public}s", utf8name);
        return false;
    }
    bool tmp = false;
    status = napi_get_value_bool(env, property, &tmp);
    *res = tmp ? INT8_TRUE : INT8_FALSE;
    return (status == napi_ok);
}

static bool GetInt32Property(napi_env env, napi_value root, const char* utf8name, int32_t* res)
{
    napi_value property = nullptr;
    auto status = napi_get_named_property(env, root, utf8name, &property);
    if (status != napi_ok || property == nullptr) {
        DEBUG_LOG("Get property error %{public}s", utf8name);
        return false;
    }
    return (napi_get_value_int32(env, property, res) == napi_ok);
}

static bool GetUint32Property(napi_env env, napi_value root, const char* utf8name, uint32_t* res)
{
    napi_value property = nullptr;
    auto status = napi_get_named_property(env, root, utf8name, &property);
    if (status != napi_ok || property == nullptr) {
        DEBUG_LOG("Get property error %{public}s", utf8name);
        return false;
    }
    return (napi_get_value_uint32(env, property, res) == napi_ok);
}

static bool GetArrayBufferProperty(napi_env env, napi_value root, const char* utf8name,
    uint8_t** buffer, size_t* bufferSize)
{
    napi_value property = nullptr;
    auto status = napi_get_named_property(env, root, utf8name, &property);
    if (status != napi_ok || property == nullptr) {
        DEBUG_LOG("Get property error %{public}s", utf8name);
        return false;
    }
    void* tmp;
    status = napi_get_arraybuffer_info(env, property, &tmp, bufferSize);
    *buffer = static_cast<uint8_t*>(tmp);
    return (status == napi_ok);
}

static bool GetStringValue(napi_env env, napi_value value, char** buffer, size_t *bufferSize)
{
    if (napi_ok != napi_get_value_string_utf8(env, value, nullptr, SIZE_ZERO, bufferSize)
        && *bufferSize == SIZE_ZERO) {
        DEBUG_LOG("Get napi string length error");
        return false;
    }
    *buffer = (char*)malloc((*bufferSize) + 1);
    if (napi_ok != napi_get_value_string_utf8(env, value, *buffer, (*bufferSize) + 1, bufferSize)) {
        DEBUG_LOG("Get napi string error");
        return false;
    }
    return (*bufferSize > SIZE_ZERO);
}

static void setInt32NamedProperty(napi_env env, napi_value object, const char* utf8name, uint32_t value)
{
    napi_value tmp;
    napi_create_int32(env, value, &tmp);
    napi_set_named_property(env, object, utf8name, tmp);
}

static bool checkType(napi_env env, napi_value arg, napi_valuetype type)
{
    napi_valuetype argType = napi_undefined;
    napi_typeof(env, arg, &argType);
    return (type == argType);
}
static bool checkArgs(napi_value* argValue, size_t argCount, size_t want)
{
    if (argCount < want) {
        DEBUG_LOG("argCount %{public}zu < want %{public}zu", argCount, want);
        return false;
    }
    for (size_t i = SIZE_ZERO; i < want; i++) {
        if (argValue[i] == nullptr) {
            DEBUG_LOG("argValue[%{public}zu] is nullptr", i);
            return false;
        }
    }
    return true;
}
static bool parseImageSource(napi_env env, napi_value arg, struct OhosImageSource &src)
{
    if (env == nullptr || arg == nullptr) {
        DEBUG_LOG("env is %{public}s || arg is %{public}s", DEBUG_PTR(env), DEBUG_PTR(arg));
        return false;
    }
    bool isArrayBuffer = false;
    if (checkType(env, arg, napi_string)) {
        DEBUG_LOG("Uri arg In");
        if (!GetStringValue(env, arg, &src.uri, &src.uriSize)) {
            DEBUG_LOG("Uri arg failed");
            return false;
        }
        DEBUG_LOG("Uri arg %{public}s", src.uri);
        return true;
    } else if (checkType(env, arg, napi_number)) {
        DEBUG_LOG("Fd arg In");
        if (napi_ok != napi_get_value_int32(env, arg, &(src.fd))) {
            DEBUG_LOG("Fd arg failed");
            return false;
        }
        return true;
    } else if (napi_is_arraybuffer(env, arg, &isArrayBuffer) == napi_ok && isArrayBuffer) {
        DEBUG_LOG("Buffer arg In");
        void* buf = nullptr;
        if (napi_ok != napi_get_arraybuffer_info(env, arg, &buf, &(src.bufferSize)) || buf == nullptr ||
            src.bufferSize == SIZE_ZERO) {
            DEBUG_LOG("Fd arg failed");
            return false;
        }
        src.buffer = static_cast<uint8_t*>(buf);
        return true;
    }
    DEBUG_LOG("Invaild arg type");
    return false;
}
static void OhosImageSourceRelease(struct OhosImageSource &src)
{
    if (src.uri != nullptr) {
        free(src.uri);
        src.uri = nullptr;
    }
}
static bool parseImageSourceOpt(napi_env env, napi_value arg, struct OhosImageSourceOps &src)
{
    if (env == nullptr || arg == nullptr) {
        DEBUG_LOG("env is %{public}s || arg is %{public}s", DEBUG_PTR(env), DEBUG_PTR(arg));
        return false;
    }
    // Optional parameters, no need check error.
    GetInt32Property(env, arg, "density", &(src.density));
    GetInt32Property(env, arg, "pixelFormat", &(src.pixelFormat));
    napi_value nSize = nullptr;
    auto status = napi_get_named_property(env, arg, "size", &nSize);
    if (status == napi_ok && nSize != nullptr) {
        GetInt32Property(env, nSize, "width", &(src.size.width));
        GetInt32Property(env, nSize, "height", &(src.size.height));
    }
    return true;
}
static bool parseImageDecodingOps(napi_env env, napi_value arg, struct OhosImageDecodingOps &ops)
{
    if (env == nullptr || arg == nullptr) {
        DEBUG_LOG("env is %{public}s || arg is %{public}s", DEBUG_PTR(env), DEBUG_PTR(arg));
        return false;
    }

    // Optional parameters, no need check error.
    GetBoolProperty(env, arg, "editable", &(ops.editable));
    GetInt32Property(env, arg, "pixelFormat", &(ops.pixelFormat));
    GetInt32Property(env, arg, "fitDensity", &(ops.fitDensity));
    GetUint32Property(env, arg, "index", &(ops.index));
    GetUint32Property(env, arg, "sampleSize", &(ops.sampleSize));
    GetUint32Property(env, arg, "rotate", &(ops.rotate));
    napi_value nSize = nullptr;
    auto status = napi_get_named_property(env, arg, "size", &nSize);
    if (status == napi_ok && nSize != nullptr) {
        GetInt32Property(env, nSize, "width", &(ops.size.width));
        GetInt32Property(env, nSize, "height", &(ops.size.height));
    }
    napi_value nRegion = nullptr;
    status = napi_get_named_property(env, arg, "region", &nRegion);
    if (status == napi_ok && nRegion != nullptr) {
        GetInt32Property(env, nRegion, "x", &(ops.region.x));
        GetInt32Property(env, nRegion, "y", &(ops.region.y));
        GetInt32Property(env, nRegion, "width", &(ops.region.width));
        GetInt32Property(env, nRegion, "height", &(ops.region.height));
    }
    return true;
}
static napi_value createUndefine(napi_env env)
{
    napi_value udfVal = nullptr;
    napi_get_undefined(env, &udfVal);
    return udfVal;
}
static napi_value createResultValue(napi_env env, int32_t resCode, napi_value res = nullptr)
{
    napi_value result = nullptr;
    // JS result like
    // {code: <error code>, result: <result value>}
    napi_value nRes = nullptr;
    napi_create_int32(env, resCode, &nRes);
    napi_create_object(env, &result);
    napi_set_named_property(env, result, "code", nRes);
    if (res != nullptr) {
        napi_set_named_property(env, result, "result", res);
    }
    return result;
}
napi_value ImageSourceNDKTest::Create(napi_env env, napi_callback_info info)
{
    napi_value thisVar = nullptr;
    napi_value argValue[SIZE_TWO] = {0};
    size_t argCount = SIZE_TWO;
    if (napi_get_cb_info(env, info, &argCount, argValue, &thisVar, nullptr) != napi_ok ||
        !checkArgs(argValue, argCount, SIZE_TWO)) {
        return createUndefine(env);
    }
    struct OhosImageSource src;
    if (!parseImageSource(env, argValue[ARGS_FIRST], src)) {
        DEBUG_LOG("parseImageSource failed!!!");
        OhosImageSourceRelease(src);
        return createUndefine(env);
    }
    struct OhosImageSourceOps ops;
    if (!parseImageSourceOpt(env, argValue[ARGS_SECOND], ops)) {
        DEBUG_LOG("parseImageSourceOpt failed!!!");
        OhosImageSourceRelease(src);
        return createUndefine(env);
    }
    napi_value imageSource = nullptr;
    int32_t res = OH_ImageSource_Create(env, &src, &ops, &imageSource);
    OhosImageSourceRelease(src);
    return createResultValue(env, res, imageSource);
}

napi_value ImageSourceNDKTest::CreateIncremental(napi_env env, napi_callback_info info)
{
    napi_value thisVar = nullptr;
    napi_value argValue[SIZE_TWO] = {0};
    size_t argCount = SIZE_TWO;
    if (napi_get_cb_info(env, info, &argCount, argValue, &thisVar, nullptr) != napi_ok ||
        !checkArgs(argValue, argCount, SIZE_TWO)) {
        return createUndefine(env);
    }
    // No source check. There is no source input.
    struct OhosImageSource src;
    parseImageSource(env, argValue[ARGS_FIRST], src);
    struct OhosImageSourceOps ops;
    if (!parseImageSourceOpt(env, argValue[ARGS_SECOND], ops)) {
        DEBUG_LOG("parseImageSourceOpt failed!!!");
        OhosImageSourceRelease(src);
        return createUndefine(env);
    }
    napi_value imageSource = nullptr;
    int32_t res = OH_ImageSource_CreateIncremental(env, &src, &ops, &imageSource);
    if (res != OHOS_IMAGE_RESULT_SUCCESS || imageSource == nullptr) {
        OhosImageSourceRelease(src);
        return createUndefine(env);
    }
    OhosImageSourceRelease(src);
    return createResultValue(env, res, imageSource);
}

static ImageSourceNative* getNativeImageSource(napi_env env, napi_callback_info info,
    napi_value* argValue, size_t &argCount)
{
    napi_value thisVar = nullptr;
    if (argValue == nullptr || argCount == SIZE_ZERO) {
        DEBUG_LOG("Invaild input!");
        return nullptr;
    }
    if (napi_get_cb_info(env, info, &argCount, argValue, &thisVar, nullptr) != napi_ok) {
        return nullptr;
    }
    return OH_ImageSource_InitNative(env, argValue[ARGS_FIRST]);
}

napi_value ImageSourceNDKTest::InitNative(napi_env env, napi_callback_info info)
{
    napi_value argValue[SIZE_ONE] = {0};
    size_t argCount = SIZE_ONE;

    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr) {
        return createUndefine(env);
    }
    return createResultValue(env, OHOS_IMAGE_RESULT_SUCCESS);
}

napi_value ImageSourceNDKTest::CreatePixelMap(napi_env env, napi_callback_info info)
{
    napi_value argValue[SIZE_TWO] = {0};
    size_t argCount = SIZE_TWO;

    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr || !checkArgs(argValue, argCount, SIZE_TWO)) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }
    struct OhosImageDecodingOps ops;
    if (!parseImageDecodingOps(env, argValue[ARGS_SECOND], ops)) {
        DEBUG_LOG("parseImageDecodingOps failed");
        return createUndefine(env);
    }
    napi_value pixelmap = nullptr;
    int32_t res = OH_ImageSource_CreatePixelMap(native, &ops, &pixelmap);
    return createResultValue(env, res, pixelmap);
}

napi_value ImageSourceNDKTest::CreatePixelMapList(napi_env env, napi_callback_info info)
{
    napi_value argValue[SIZE_TWO] = {0};
    size_t argCount = SIZE_TWO;

    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr || !checkArgs(argValue, argCount, SIZE_TWO)) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }
    struct OhosImageDecodingOps ops;
    if (!parseImageDecodingOps(env, argValue[ARGS_SECOND], ops)) {
        DEBUG_LOG("parseImageDecodingOps failed");
        return createUndefine(env);
    }
    napi_value pixelmapList = nullptr;
    int32_t res = OH_ImageSource_CreatePixelMapList(native, &ops, &pixelmapList);
    return createResultValue(env, res, pixelmapList);
}

static void ReleaseDelayTimeList(struct OhosImageSourceDelayTimeList &timeList)
{
    if (timeList.delayTimeList != nullptr) {
        timeList.size = SIZE_ZERO;
        free(timeList.delayTimeList);
        timeList.delayTimeList = nullptr;
    }
}

napi_value ImageSourceNDKTest::GetDelayTime(napi_env env, napi_callback_info info)  __attribute__((no_sanitize("cfi")))
{
    napi_value argValue[SIZE_ONE] = {0};
    size_t argCount = SIZE_ONE;

    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }

    struct OhosImageSourceDelayTimeList timeList;
    int32_t res = OH_ImageSource_GetDelayTime(native, &timeList);
    if (timeList.size == SIZE_ZERO) {
        DEBUG_LOG("Delay time list get failed");
        return createUndefine(env);
    }
    timeList.delayTimeList = (int32_t*)malloc(sizeof(int32_t) * timeList.size);
    res = OH_ImageSource_GetDelayTime(native, &timeList);

    napi_value result;
    napi_create_array(env, &result);
    for (size_t i = SIZE_ZERO; i < timeList.size; i++) {
        napi_value nDelayTime = nullptr;
        napi_create_int32(env, timeList.delayTimeList[i], &nDelayTime);
        napi_set_element(env, result, i, nDelayTime);
    }
    ReleaseDelayTimeList(timeList);
    return createResultValue(env, res, result);
}

napi_value ImageSourceNDKTest::GetFrameCount(napi_env env, napi_callback_info info)
{
    napi_value argValue[SIZE_ONE] = {0};
    size_t argCount = SIZE_ONE;

    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }
    uint32_t frameCount = INVALID_FRAME_COUNT;
    int32_t res = OH_ImageSource_GetFrameCount(native, &frameCount);

    napi_value nFrameCount = nullptr;
    napi_create_int32(env, frameCount, &nFrameCount);
    return createResultValue(env, res, nFrameCount);
}
static void ReleaseSupportedFormatList(struct OhosImageSourceSupportedFormatList &formatList)
{
    if (formatList.supportedFormatList == nullptr) {
        return;
    }
    for (size_t i = SIZE_ZERO; i < formatList.size; i++) {
        auto format = formatList.supportedFormatList[i];
        if (format != nullptr) {
            if (format->format != nullptr) {
                free(format->format);
                format->format = nullptr;
            }
            free(format);
        }
    }
    free(formatList.supportedFormatList);
    formatList.supportedFormatList = nullptr;
}
napi_value ImageSourceNDKTest::GetSupportedFormats(napi_env env, napi_callback_info info)  __attribute__((no_sanitize("cfi")))
{
    struct OhosImageSourceSupportedFormatList formatList;
    int32_t res = OH_ImageSource_GetSupportedFormats(&formatList);
    if (formatList.size == SIZE_ZERO) {
        DEBUG_LOG("Supported format list get failed");
        return createUndefine(env);
    }
    formatList.supportedFormatList = (struct OhosImageSourceSupportedFormat**)malloc(
        sizeof(struct OhosImageSourceSupportedFormat*) * formatList.size);
    for (size_t i = 0; i < formatList.size; i++) {
        formatList.supportedFormatList[i] = (struct OhosImageSourceSupportedFormat*)malloc(
            sizeof(struct OhosImageSourceSupportedFormat));
        formatList.supportedFormatList[i]->format = (char*)malloc(DEFAULT_STRING_SIZE);
        formatList.supportedFormatList[i]->size = DEFAULT_STRING_SIZE;
    }

    res = OH_ImageSource_GetSupportedFormats(&formatList);
    napi_value result;
    napi_create_array(env, &result);
    for (size_t i = SIZE_ZERO; i < formatList.size; i++) {
        napi_value nFormat = nullptr;
        auto format = formatList.supportedFormatList[i];
        napi_create_string_utf8(env, format->format, format->size, &nFormat);
        napi_set_element(env, result, i, nFormat);
    }
    ReleaseSupportedFormatList(formatList);
    return createResultValue(env, res, result);
}

static napi_value createImageInfoNVal(napi_env env, struct OhosImageSourceInfo &imageInfo)
{
    napi_value result = nullptr;
    napi_create_object(env, &result);
    setInt32NamedProperty(env, result, "pixelFormat", imageInfo.pixelFormat);
    setInt32NamedProperty(env, result, "colorSpace", imageInfo.colorSpace);
    setInt32NamedProperty(env, result, "alphaType", imageInfo.alphaType);
    setInt32NamedProperty(env, result, "density", imageInfo.density);
    napi_value nSize = nullptr;
    napi_create_object(env, &nSize);
    setInt32NamedProperty(env, nSize, "width", imageInfo.size.width);
    setInt32NamedProperty(env, nSize, "height", imageInfo.size.height);
    napi_set_named_property(env, result, "size", nSize);
    return result;
}

napi_value ImageSourceNDKTest::GetImageInfo(napi_env env, napi_callback_info info)
{
    napi_value argValue[SIZE_TWO] = {0};
    size_t argCount = SIZE_TWO;
    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr || !checkArgs(argValue, argCount, SIZE_TWO)) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }
    int32_t index = DEFAULT_INDEX;
    napi_get_value_int32(env, argValue[ARGS_SECOND], &index);
    struct OhosImageSourceInfo imageInfo;
    int32_t res = OH_ImageSource_GetImageInfo(native, index, &imageInfo);
    napi_value nImageInfo = createImageInfoNVal(env, imageInfo);
    return createResultValue(env, res, nImageInfo);
}

napi_value ImageSourceNDKTest::GetImageProperty(napi_env env, napi_callback_info info)  __attribute__((no_sanitize("cfi")))
{
    napi_value argValue[SIZE_TWO] = {0};
    size_t argCount = SIZE_TWO;
    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr || !checkArgs(argValue, argCount, SIZE_TWO)) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }
    struct OhosImageSourceProperty key;
    if (!GetStringValue(env, argValue[ARGS_SECOND], &key.value, &key.size) ||
        key.value == nullptr || key.size == SIZE_ZERO) {
        DEBUG_LOG("Get key failed");
        return createUndefine(env);
    }
    struct OhosImageSourceProperty val;
    int32_t res = OH_ImageSource_GetImageProperty(native, &key, &val);
    if (val.size == SIZE_ZERO) {
        DEBUG_LOG("Get val size failed");
        return createResultValue(env, res, createUndefine(env));
    }
    val.value = (char*)malloc(val.size);

    res = OH_ImageSource_GetImageProperty(native, &key, &val);
    napi_value nValue = nullptr;
    if (val.value != nullptr && val.size != SIZE_ZERO) {
        napi_create_string_utf8(env, val.value, val.size, &nValue);
    } else {
        DEBUG_LOG("Get val is empty");
    }
    if (val.value != nullptr) {
        free(val.value);
    }
    return createResultValue(env, res, nValue);
}

napi_value ImageSourceNDKTest::ModifyImageProperty(napi_env env, napi_callback_info info)
{
    napi_value argValue[SIZE_THREE] = {0};
    size_t argCount = SIZE_THREE;
    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr || !checkArgs(argValue, argCount, SIZE_THREE)) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }
    struct OhosImageSourceProperty key;
    if (!GetStringValue(env, argValue[ARGS_SECOND], &key.value, &key.size) ||
        key.value == nullptr || key.size == SIZE_ZERO) {
        DEBUG_LOG("Get key failed");
        return createUndefine(env);
    }
    struct OhosImageSourceProperty val;
    if (!GetStringValue(env, argValue[ARGS_THIRD], &val.value, &val.size) ||
        val.value == nullptr || val.size == SIZE_ZERO) {
        DEBUG_LOG("Get val failed");
        return createUndefine(env);
    }
    int32_t res = OH_ImageSource_ModifyImageProperty(native, &key, &val);
    return createResultValue(env, res);
}
static bool parseImageSourceUpdateData(napi_env env, napi_value arg, struct OhosImageSourceUpdateData &data)
{
    if (env == nullptr || arg == nullptr) {
        DEBUG_LOG("env is %{public}s || arg is %{public}s", DEBUG_PTR(env), DEBUG_PTR(arg));
        return false;
    }
    GetArrayBufferProperty(env, arg, "buffer", &(data.buffer), &(data.bufferSize));
    GetUint32Property(env, arg, "offset", &(data.offset));
    GetUint32Property(env, arg, "updateLength", &(data.updateLength));
    GetBoolProperty(env, arg, "isCompleted", &(data.isCompleted));
    return true;
}
napi_value ImageSourceNDKTest::UpdateData(napi_env env, napi_callback_info info)
{
    napi_value argValue[SIZE_TWO] = {0};
    size_t argCount = SIZE_TWO;
    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr || !checkArgs(argValue, argCount, SIZE_TWO)) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }
    struct OhosImageSourceUpdateData data;
    parseImageSourceUpdateData(env, argValue[ARGS_SECOND], data);
    int32_t res = OH_ImageSource_UpdateData(native, &data);
    return createResultValue(env, res);
}

napi_value ImageSourceNDKTest::Release(napi_env env, napi_callback_info info)
{
    napi_value argValue[SIZE_ONE] = {0};
    size_t argCount = SIZE_ONE;
    ImageSourceNative* native = getNativeImageSource(env, info, argValue, argCount);
    if (native == nullptr) {
        DEBUG_LOG("argValue check failed");
        return createUndefine(env);
    }
    int32_t res = OH_ImageSource_Release(native);
    return createResultValue(env, res);
}

EXTERN_C_START
static napi_value ModuleRegister(napi_env env, napi_value exports)
{
    ImageSourceNDKTest::Init(env, exports);
    return exports;
}

static napi_module demoModule = {
    .nm_version =1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = ModuleRegister,
    .nm_modname = "ImageSourceNDKTest",
    .nm_priv = nullptr,
    .reserved = { 0 },
};

__attribute__((constructor)) void RegisterModule(void)
{
    napi_module_register(&demoModule);
}
EXTERN_C_END
}
}