/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
#include <gtest/gtest.h>
#include <iservice_registry.h>
#include <native_window.h>
#include <securec.h>
#include "surface_type.h"
#include "buffer_log.h"
#include "external_window.h"
#include "iconsumer_surface.h"

using namespace testing;
using namespace testing::ext;

namespace OHOS::Rosen {
class BufferConsumerListener : public IBufferConsumerListener {
public:
    void OnBufferAvailable() override
    {
    }
};

static OHExtDataHandle *AllocOHExtDataHandle(uint32_t reserveInts)
{
    size_t handleSize = sizeof(OHExtDataHandle) + (sizeof(int32_t) * reserveInts);
    OHExtDataHandle *handle = static_cast<OHExtDataHandle *>(malloc(handleSize));
    if (handle == nullptr) {
        BLOGE("AllocOHExtDataHandle malloc %zu failed", handleSize);
        return nullptr;
    }
    auto ret = memset_s(handle, handleSize, 0, handleSize);
    if (ret != EOK) {
        BLOGE("AllocOHExtDataHandle memset_s failed");
        return nullptr;
    }
    handle->fd = -1;
    handle->reserveInts = reserveInts;
    for (uint32_t i = 0; i < reserveInts; i++) {
        handle->reserve[i] = -1;
    }
    return handle;
}

static void FreeOHExtDataHandle(OHExtDataHandle *handle)
{
    if (handle == nullptr) {
        BLOGW("FreeOHExtDataHandle with nullptr handle");
        return ;
    }
    if (handle->fd >= 0) {
        close(handle->fd);
        handle->fd = -1;
    }
    free(handle);
}

class NativeWindowTest : public testing::Test {
public:
    static void SetUpTestCase();
    static void TearDownTestCase();

    static inline BufferRequestConfig requestConfig = {};
    static inline BufferFlushConfig flushConfig = {};
    static inline sptr<OHOS::IConsumerSurface> cSurface = nullptr;
    static inline sptr<OHOS::IBufferProducer> producer = nullptr;
    static inline sptr<OHOS::Surface> pSurface = nullptr;
    static inline sptr<OHOS::SurfaceBuffer> sBuffer = nullptr;
    static inline NativeWindow* nativeWindow = nullptr;
    static inline NativeWindowBuffer* nativeWindowBuffer = nullptr;
    static inline uint32_t sequence = 0;
};

void NativeWindowTest::SetUpTestCase()
{
    requestConfig = {
        .width = 0x100,  // small
        .height = 0x100, // small
        .strideAlignment = 0x8,
        .format = GRAPHIC_PIXEL_FMT_RGBA_8888,
        .usage = BUFFER_USAGE_CPU_READ | BUFFER_USAGE_CPU_WRITE | BUFFER_USAGE_MEM_DMA,
        .timeout = 0,
    };

    cSurface = IConsumerSurface::Create();
    sptr<IBufferConsumerListener> listener = new BufferConsumerListener();
    cSurface->RegisterConsumerListener(listener);
    producer = cSurface->GetProducer();
    pSurface = Surface::CreateSurfaceAsProducer(producer);
    int32_t fence;
    pSurface->RequestBuffer(sBuffer, fence, requestConfig);
    sequence = sBuffer->GetSeqNum();
}

void NativeWindowTest::TearDownTestCase()
{
    flushConfig = { .damage = {
        .w = 0x100,
        .h = 0x100,
    } };
    pSurface->FlushBuffer(sBuffer, -1, flushConfig);
    sBuffer = nullptr;
    cSurface = nullptr;
    producer = nullptr;
    pSurface = nullptr;
    nativeWindow = nullptr;
    nativeWindowBuffer = nullptr;
}

/*
 * @tc.name  CreateNativeWindow001
 * @tc.desc  test for call OH_NativeWindow_CreateNativeWindow by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, CreateNativeWindow001, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_CreateNativeWindow(nullptr), nullptr);
}

/*
 * @tc.name  CreateNativeWindow002
 * @tc.desc  test for call OH_NativeWindow_CreateNativeWindow and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, CreateNativeWindow002, Function | MediumTest | Level2)
{
    nativeWindow = OH_NativeWindow_CreateNativeWindow(&pSurface);
    ASSERT_NE(nativeWindow, nullptr);
}

/*
 * @tc.name  OH_NativeWindow_GetNativeObjectMagic
 * @tc.desc  test for call OH_NativeWindow_GetNativeObjectMagic and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, GetNativeObjectMagic001, Function | MediumTest | Level2)
{
    int32_t ret = OH_NativeWindow_GetNativeObjectMagic(nativeWindow);
    ASSERT_EQ(ret, NATIVE_OBJECT_MAGIC_WINDOW);
}

/*
 * @tc.name  HandleOpt001
 * @tc.desc  test for call OH_NativeWindow_NativeWindowHandleOpt by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, HandleOpt001, Function | MediumTest | Level2)
{
    int code = SET_USAGE;
    uint64_t usage = BUFFER_USAGE_CPU_READ;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nullptr, code, usage), OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  HandleOpt002
 * @tc.desc  test for call OH_NativeWindow_NativeWindowHandleOpt by different param and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, HandleOpt002, Function | MediumTest | Level2)
{
    int code = SET_USAGE;
    uint64_t usageSet = BUFFER_USAGE_CPU_READ;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, usageSet), OHOS::GSERROR_OK);

    code = GET_USAGE;
    uint64_t usageGet = BUFFER_USAGE_CPU_WRITE;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, &usageGet), OHOS::GSERROR_OK);
    ASSERT_EQ(usageSet, usageGet);
}

/*
 * @tc.name  HandleOpt003
 * @tc.desc  test for call OH_NativeWindow_NativeWindowHandleOpt by different param and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, HandleOpt003, Function | MediumTest | Level2)
{
    int code = SET_BUFFER_GEOMETRY;
    int32_t heightSet = 0x100;
    int32_t widthSet = 0x100;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, heightSet, widthSet), OHOS::GSERROR_OK);

    code = GET_BUFFER_GEOMETRY;
    int32_t heightGet = 0;
    int32_t widthGet = 0;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, &heightGet, &widthGet), OHOS::GSERROR_OK);
    ASSERT_EQ(heightSet, heightGet);
    ASSERT_EQ(widthSet, widthGet);
}

/*
 * @tc.name  HandleOpt004
 * @tc.desc  test for call OH_NativeWindow_NativeWindowHandleOpt by different param and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, HandleOpt004, Function | MediumTest | Level2)
{
    int code = SET_FORMAT;
    int32_t formatSet = GRAPHIC_PIXEL_FMT_RGBA_8888;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, formatSet), OHOS::GSERROR_OK);

    code = GET_FORMAT;
    int32_t formatGet = GRAPHIC_PIXEL_FMT_CLUT8;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, &formatGet), OHOS::GSERROR_OK);
    ASSERT_EQ(formatSet, formatGet);
}

/*
 * @tc.name  HandleOpt005
 * @tc.desc  test for call OH_NativeWindow_NativeWindowHandleOpt by different param and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, HandleOpt005, Function | MediumTest | Level2)
{
    int code = SET_STRIDE;
    int32_t strideSet = 0x8;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, strideSet), OHOS::GSERROR_OK);

    code = GET_STRIDE;
    int32_t strideGet = 0;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, &strideGet), OHOS::GSERROR_OK);
    ASSERT_EQ(strideSet, strideGet);
}

/*
 * @tc.name  HandleOpt006
 * @tc.desc  test for call OH_NativeWindow_NativeWindowHandleOpt by different param and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, HandleOpt006, Function | MediumTest | Level2)
{
    int code = SET_COLOR_GAMUT;
    int32_t colorGamutSet = static_cast<int32_t>(GraphicColorGamut::GRAPHIC_COLOR_GAMUT_DCI_P3);
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, colorGamutSet), OHOS::GSERROR_OK);

    code = GET_COLOR_GAMUT;
    int32_t colorGamutGet = 0;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, &colorGamutGet), OHOS::GSERROR_OK);
    ASSERT_EQ(colorGamutSet, colorGamutGet);
}

/*
 * @tc.name  HandleOpt007
 * @tc.desc  test for call OH_NativeWindow_NativeWindowHandleOpt by different param and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, HandleOpt007, Function | MediumTest | Level2)
{
    int code = SET_TIMEOUT;
    int32_t timeoutSet = 10;  // 10: for test
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, timeoutSet), OHOS::GSERROR_OK);

    code = GET_TIMEOUT;
    int32_t timeoutGet = 0;
    ASSERT_EQ(OH_NativeWindow_NativeWindowHandleOpt(nativeWindow, code, &timeoutGet), OHOS::GSERROR_OK);
    ASSERT_EQ(timeoutSet, timeoutGet);
}

/*
 * @tc.name  CreateNativeWindowBuffer001
 * @tc.desc  test for call OH_NativeWindow_CreateNativeWindowBufferFromSurfaceBuffer by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, CreateNativeWindowBuffer001, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_CreateNativeWindowBufferFromSurfaceBuffer(nullptr), nullptr);
}

/*
 * @tc.name  CreateNativeWindowBuffer002
 * @tc.desc  test for call OH_NativeWindow_CreateNativeWindowBufferFromSurfaceBuffer and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, CreateNativeWindowBuffer002, Function | MediumTest | Level2)
{
    nativeWindowBuffer = OH_NativeWindow_CreateNativeWindowBufferFromSurfaceBuffer(&sBuffer);
    ASSERT_NE(nativeWindowBuffer, nullptr);
}

/*
 * @tc.name  RequestBuffer001
 * @tc.desc  test for call OH_NativeWindow_NativeWindowRequestBuffer by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, RequestBuffer001, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowRequestBuffer(nullptr, &nativeWindowBuffer, nullptr),
              OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  RequestBuffer002
 * @tc.desc  test for call OH_NativeWindow_NativeWindowRequestBuffer by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, RequestBuffer002, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowRequestBuffer(nativeWindow, nullptr, nullptr),
              OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  GetBufferHandle001
 * @tc.desc  test for call OH_NativeWindow_GetBufferHandleFromNative by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, GetBufferHandle001, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_GetBufferHandleFromNative(nullptr), nullptr);
}

/*
 * @tc.name  GetBufferHandle002
 * @tc.desc  test for call OH_NativeWindow_GetBufferHandleFromNative and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, GetBufferHandle002, Function | MediumTest | Level2)
{
    struct NativeWindowBuffer *buffer = new NativeWindowBuffer();
    buffer->sfbuffer = sBuffer;
    ASSERT_NE(OH_NativeWindow_GetBufferHandleFromNative(nativeWindowBuffer), nullptr);
    delete buffer;
}

/*
 * @tc.name  FlushBuffer001
 * @tc.desc  test for call OH_NativeWindow_NativeWindowFlushBuffer by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, FlushBuffer001, Function | MediumTest | Level2)
{
    int fenceFd = -1;
    struct Region *region = new Region();
    struct Region::Rect * rect = new Region::Rect();
    rect->x = 0x100;
    rect->y = 0x100;
    rect->w = 0x100;
    rect->h = 0x100;
    region->rects = rect;

    ASSERT_EQ(OH_NativeWindow_NativeWindowFlushBuffer(nullptr, nullptr, fenceFd, *region),
              OHOS::GSERROR_INVALID_ARGUMENTS);
    delete region;
}

/*
 * @tc.name  FlushBuffer002
 * @tc.desc  test for call OH_NativeWindow_NativeWindowFlushBuffer by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, FlushBuffer002, Function | MediumTest | Level2)
{
    int fenceFd = -1;
    struct Region *region = new Region();
    struct Region::Rect * rect = new Region::Rect();
    rect->x = 0x100;
    rect->y = 0x100;
    rect->w = 0x100;
    rect->h = 0x100;
    region->rects = rect;

    ASSERT_EQ(OH_NativeWindow_NativeWindowFlushBuffer(nativeWindow, nullptr, fenceFd, *region),
              OHOS::GSERROR_INVALID_ARGUMENTS);
    delete region;
}

/*
 * @tc.name  FlushBuffer003
 * @tc.desc  test for call OH_NativeWindow_NativeWindowFlushBuffer and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, FlushBuffer003, Function | MediumTest | Level2)
{
    int fenceFd = -1;
    struct Region *region = new Region();
    struct Region::Rect * rect = new Region::Rect();
    rect->x = 0x100;
    rect->y = 0x100;
    rect->w = 0x100;
    rect->h = 0x100;
    region->rects = rect;

    ASSERT_EQ(OH_NativeWindow_NativeWindowFlushBuffer(nativeWindow, nativeWindowBuffer, fenceFd, *region),
              OHOS::GSERROR_OK);
    delete region;
}

/*
 * @tc.name  CancelBuffer001
 * @tc.desc  test for call OH_NativeWindow_NativeWindowAbortBuffer by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, CancelBuffer001, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowAbortBuffer(nullptr, nullptr), OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  CancelBuffer002
 * @tc.desc  test for call OH_NativeWindow_NativeWindowAbortBuffer by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, CancelBuffer002, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowAbortBuffer(nativeWindow, nullptr), OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  CancelBuffer003
 * @tc.desc  test for call OH_NativeWindow_NativeWindowAbortBuffer and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, CancelBuffer003, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowAbortBuffer(nativeWindow, nativeWindowBuffer), OHOS::GSERROR_OK);
}

/*
 * @tc.name  Reference001
 * @tc.desc  test for call OH_NativeWindow_NativeObjectReference and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, Reference001, Function | MediumTest | Level2)
{
    struct NativeWindowBuffer *buffer = new NativeWindowBuffer();
    buffer->sfbuffer = sBuffer;
    ASSERT_EQ(OH_NativeWindow_NativeObjectReference(reinterpret_cast<void *>(buffer)), OHOS::GSERROR_OK);
    delete buffer;
}

/*
 * @tc.name  Unreference001
 * @tc.desc  test for call OH_NativeWindow_NativeObjectUnreference and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, Unreference001, Function | MediumTest | Level2)
{
    struct NativeWindowBuffer *buffer = new NativeWindowBuffer();
    buffer->sfbuffer = sBuffer;
    ASSERT_EQ(OH_NativeWindow_NativeObjectUnreference(reinterpret_cast<void *>(buffer)), OHOS::GSERROR_OK);
    delete buffer;
}

/*
 * @tc.name  DestroyNativeWindow001
 * @tc.desc  test for call OH_NativeWindow_DestroyNativeWindow by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, DestroyNativeWindow001, Function | MediumTest | Level2)
{
    OH_NativeWindow_DestroyNativeWindow(nullptr);
}

/*
 * @tc.name  DestroyNativeWindow002
 * @tc.desc  test for call OH_NativeWindow_DestroyNativeWindow and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, DestroyNativeWindow002, Function | MediumTest | Level2)
{
    OH_NativeWindow_DestroyNativeWindow(nativeWindow);
}

/*
 * @tc.name  OH_NativeWindow_DestroyNativeWindowBuffer001
 * @tc.desc  test for call OH_NativeWindow_DestroyNativeWindowBuffer by abnormal input and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, OH_NativeWindow_DestroyNativeWindowBuffer001, Function | MediumTest | Level2)
{
    OH_NativeWindow_DestroyNativeWindowBuffer(nullptr);
}

/*
 * @tc.name  OH_NativeWindow_DestroyNativeWindowBuffer002
 * @tc.desc  test for call OH_NativeWindow_DestroyNativeWindowBuffer again and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, OH_NativeWindow_DestroyNativeWindowBuffer002, Function | MediumTest | Level2)
{
    OH_NativeWindow_DestroyNativeWindowBuffer(nativeWindowBuffer);
}

/*
 * @tc.name  SetScalingMode001
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetScalingMode with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetScalingMode001, Function | MediumTest | Level2)
{
    OHScalingMode scalingMode = OHScalingMode::OH_SCALING_MODE_SCALE_TO_WINDOW;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetScalingMode(nullptr, -1, scalingMode), OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetScalingMode002
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetScalingMode with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetScalingMode002, Function | MediumTest | Level2)
{
    OHScalingMode scalingMode = OHScalingMode::OH_SCALING_MODE_SCALE_TO_WINDOW;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetScalingMode(nativeWindow, -1, scalingMode), OHOS::GSERROR_NO_ENTRY);
}

/*
 * @tc.name  SetScalingMode003
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetScalingMode with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetScalingMode003, Function | MediumTest | Level2)
{
    int32_t sequence = 0;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetScalingMode(nativeWindow, sequence,
                                         static_cast<OHScalingMode>(OHScalingMode::OH_SCALING_MODE_NO_SCALE_CROP + 1)),
                                         OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetScalingMode004
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetScalingMode and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetScalingMode004, Function | MediumTest | Level1)
{
    OHScalingMode scalingMode = OHScalingMode::OH_SCALING_MODE_SCALE_TO_WINDOW;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetScalingMode(nativeWindow, sequence, scalingMode), OHOS::GSERROR_OK);
}

/*
 * @tc.name  SetMetaData001
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaData with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaData001, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaData(nullptr, -1, 0, nullptr), OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetMetaData002
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaData with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaData002, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaData(nativeWindow, -1, 0, nullptr), OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetMetaData003
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaData and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaData003, Function | MediumTest | Level2)
{
    int32_t sequence = 0;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaData(nativeWindow, sequence, 0, nullptr),
              OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetMetaData004
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaData with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaData004, Function | MediumTest | Level2)
{
    int32_t sequence = 0;
    int32_t size = 1;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaData(nativeWindow, sequence, size, nullptr),
              OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetMetaData005
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaData with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaData005, Function | MediumTest | Level2)
{
    int32_t size = 1;
    const OHHDRMetaData metaData[] = {{OH_METAKEY_RED_PRIMARY_X, 0}};
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaData(nativeWindow, -1, size, metaData), OHOS::GSERROR_NO_ENTRY);
}

/*
 * @tc.name  SetMetaData006
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaData with normal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaData006, Function | MediumTest | Level1)
{
    int32_t size = 1;
    const OHHDRMetaData metaData[] = {{OH_METAKEY_RED_PRIMARY_X, 0}};
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaData(nativeWindow, sequence, size, metaData), OHOS::GSERROR_OK);
}

/*
 * @tc.name  SetMetaDataSet001
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaDataSet with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaDataSet001, Function | MediumTest | Level2)
{
    OHHDRMetadataKey key = OHHDRMetadataKey::OH_METAKEY_HDR10_PLUS;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaDataSet(nullptr, -1, key, 0, nullptr),
              OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetMetaDataSet002
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaDataSet with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaDataSet002, Function | MediumTest | Level2)
{
    OHHDRMetadataKey key = OHHDRMetadataKey::OH_METAKEY_HDR10_PLUS;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaDataSet(nativeWindow, -1, key, 0, nullptr),
              OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetMetaDataSet003
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaDataSet with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaDataSet003, Function | MediumTest | Level2)
{
    int32_t sequence = 0;
    OHHDRMetadataKey key = OHHDRMetadataKey::OH_METAKEY_HDR10_PLUS;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaDataSet(nativeWindow, sequence, key, 0, nullptr),
              OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetMetaDataSet004
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaDataSet with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaDataSet004, Function | MediumTest | Level2)
{
    int32_t sequence = 0;
    int32_t size = 1;
    OHHDRMetadataKey key = OHHDRMetadataKey::OH_METAKEY_HDR10_PLUS;
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaDataSet(nativeWindow, sequence, key, size, nullptr),
              OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetMetaDataSet005
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaDataSet with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaDataSet005, Function | MediumTest | Level2)
{
    int32_t size = 1;
    OHHDRMetadataKey key = OHHDRMetadataKey::OH_METAKEY_HDR10_PLUS;
    const uint8_t metaData[] = {0};
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaDataSet(nativeWindow, -1, key, size, metaData),
              OHOS::GSERROR_NO_ENTRY);
}

/*
 * @tc.name  SetMetaDataSet006
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetMetaDataSet with normal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetMetaDataSet006, Function | MediumTest | Level1)
{
    int32_t size = 1;
    OHHDRMetadataKey key = OHHDRMetadataKey::OH_METAKEY_HDR10_PLUS;
    const uint8_t metaData[] = {0};
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetMetaDataSet(nativeWindow, sequence, key, size, metaData),
              OHOS::GSERROR_OK);
}

/*
 * @tc.name  SetTunnelHandle001
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetTunnelHandle with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetTunnelHandle001, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetTunnelHandle(nullptr, nullptr), OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetTunnelHandle002
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetTunnelHandle with abnormal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetTunnelHandle002, Function | MediumTest | Level2)
{
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetTunnelHandle(nativeWindow, nullptr), OHOS::GSERROR_INVALID_ARGUMENTS);
}

/*
 * @tc.name  SetTunnelHandle003
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetTunnelHandle with normal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetTunnelHandle003, Function | MediumTest | Level2)
{
    uint32_t reserveInts = 1;
    OHExtDataHandle *handle = AllocOHExtDataHandle(reserveInts);
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetTunnelHandle(nativeWindow, handle), OHOS::GSERROR_OK);
    FreeOHExtDataHandle(handle);
}

/*
 * @tc.name  SetTunnelHandle004
 * @tc.desc  test for call OH_NativeWindow_NativeWindowSetTunnelHandle with normal parameters and check ret
 * @tc.type  FUNC
 */
HWTEST_F(NativeWindowTest, SetTunnelHandle004, Function | MediumTest | Level1)
{
    uint32_t reserveInts = 2;
    OHExtDataHandle *handle = AllocOHExtDataHandle(reserveInts);
    nativeWindow = OH_NativeWindow_CreateNativeWindow(&pSurface);
    ASSERT_NE(nativeWindow, nullptr);
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetTunnelHandle(nativeWindow, handle), OHOS::GSERROR_OK);
    ASSERT_EQ(OH_NativeWindow_NativeWindowSetTunnelHandle(nativeWindow, handle), OHOS::GSERROR_NO_ENTRY);
    FreeOHExtDataHandle(handle);
}
}
