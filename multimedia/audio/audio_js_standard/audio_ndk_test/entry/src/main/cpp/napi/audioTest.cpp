/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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

#include "napi/native_api.h"
#include "native_audiocapturer.h"
#include "native_audiorenderer.h"
#include "native_audiostream_base.h"
#include "native_audiostreambuilder.h"

static napi_value CreateAudioCapture(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_Create(&builder, type);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
OH_AudioStreamBuilder *CreateCapturerBuilder()
{
    OH_AudioStreamBuilder *builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);
    return builder;
}

// OH_Audio_Capture_Generate_001

static napi_value AudioCaptureGenerate(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();

    OH_AudioCapturer *audioCapturer;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_Generate_002
static napi_value AudioCaptureGenerateErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_RENDERER;
    OH_AudioStreamBuilder_Create(&builder, type);

    OH_AudioCapturer *audioCapturer;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// Audio_Capturer_Start_001
static napi_value AudioCaptureStart(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    OH_AudioStream_Result result = OH_AudioCapturer_Start(audioCapturer);

    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// Audio_Capturer_Start_002
static napi_value AudioCaptureStartErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioCapturer_Start(audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Start(audioCapturer);

    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_Pause_001
static napi_value AudioCapturePause(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioCapturer_Start(audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Pause(audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// OH_Audio_Capture_Pause_002
static napi_value AudioCapturePauseErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Pause(audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_Stop_001
static napi_value AudioCaptureStop(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioCapturer_Start(audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Stop(audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_Stop_002
static napi_value AudioCaptureStopErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Stop(audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// OH_Audio_Capture_Flush_001
static napi_value AudioCaptureFlush(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioCapturer_Start(audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Flush(audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// OH_Audio_Capture_Flush_002
static napi_value AudioCaptureFlushErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Flush(audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_Release_001
static napi_value AudioCaptureRelease(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioCapturer_Start(audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Release(audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// OH_Audio_Capture_Release_002
static napi_value AudioCaptureReleaseErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStream_Result result = OH_AudioCapturer_Release(audioCapturer);
    OH_AudioCapturer_Release(audioCapturer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_GetParameter_001
static napi_value AudioCaptureGetParameter(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    OH_AudioStream_LatencyMode latencyMode = AUDIOSTREAM_LATENCY_MODE_NORMAL;
    OH_AudioStream_Result result = OH_AudioCapturer_GetLatencyMode(audioCapturer, &latencyMode);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioCapturer_GetCurrentState_001
static napi_value AudioCaptureGetCurrentState(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    OH_AudioStream_State state;
    OH_AudioStream_Result result = OH_AudioCapturer_GetCurrentState(audioCapturer, &state);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_GetStreamId
static napi_value AudioCaptureGetStreamId(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    uint32_t streamId;
    OH_AudioStream_Result result = OH_AudioCapturer_GetStreamId(audioCapturer, &streamId);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_GetSamplingRate_001
static napi_value AudioCaptureGetSamplingRate(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    int32_t rate;
    OH_AudioStream_Result result = OH_AudioCapturer_GetSamplingRate(audioCapturer, &rate);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_GetSampleFormat_001
static napi_value AudioCaptureGetSampleFormat(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    OH_AudioStream_SampleFormat sampleFormat;
    OH_AudioStream_Result result = OH_AudioCapturer_GetSampleFormat(audioCapturer, &sampleFormat);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_GetEncodingType_001
static napi_value AudioCaptureGetEncodingType(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    OH_AudioStream_EncodingType encodingType;
    OH_AudioStream_Result result = OH_AudioCapturer_GetEncodingType(audioCapturer, &encodingType);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Capture_GetCapturerInfo_001
static napi_value AudioCaptureGetCapturerInfo(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    OH_AudioStream_SourceType sourceType;
    OH_AudioStream_Result result = OH_AudioCapturer_GetCapturerInfo(audioCapturer, &sourceType);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// -----------------------

OH_AudioStreamBuilder *CreateRenderBuilder()
{
    OH_AudioStreamBuilder *builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_RENDERER;
    OH_AudioStreamBuilder_Create(&builder, type);
    return builder;
}

// OH_Audio_Render_Generate_001
static napi_value AudioRenderGenerate(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);

    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_Generate_002
static napi_value AudioRenderGenerateErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);

    OH_AudioRenderer *audioRenderer;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);

    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// Audio_Render_Start_001
static napi_value AudioRenderStart(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Start(audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// Audio_Render_Start_002
static napi_value AudioRenderStartErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioRenderer_Start(audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Start(audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_Pause_001
static napi_value AudioRenderPause(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioRenderer_Start(audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Pause(audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_Pause_002
static napi_value AudioRenderPauseErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Pause(audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_Stop_001
static napi_value AudioRenderStop(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioRenderer_Start(audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Stop(audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_Stop_002
static napi_value AudioRenderStopErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Stop(audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_Flush_001
static napi_value AudioRenderFlush(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioRenderer_Start(audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Flush(audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// OH_Audio_Render_Flush_002
static napi_value AudioRenderFlushErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Flush(audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_Release_001
static napi_value AudioRenderRelease(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioRenderer_Start(audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// OH_Audio_Render_Release_002
static napi_value AudioRenderReleaseErr(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStream_Result result = OH_AudioRenderer_Release(audioRenderer);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioRenderer_GetCurrentState_001
static napi_value AudioRenderGetCurrentState(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_State state;
    OH_AudioStream_Result result = OH_AudioRenderer_GetCurrentState(audioRenderer, &state);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_GetParameter_001

static napi_value AudioRenderGetParameter(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_LatencyMode latencyMode = AUDIOSTREAM_LATENCY_MODE_NORMAL;
    OH_AudioStream_Result result = OH_AudioRenderer_GetLatencyMode(audioRenderer, &latencyMode);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_GetParameter_002

static napi_value AudioRenderGetStreamId(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);

    uint32_t streamId;
    OH_AudioStream_Result result = OH_AudioRenderer_GetStreamId(audioRenderer, &streamId);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_GetSamplingRate_001
static napi_value AudioRenderGetSamplingRate(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    int32_t rate;
    OH_AudioStream_Result result = OH_AudioRenderer_GetSamplingRate(audioRenderer, &rate);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_GetSampleFormat_001

static napi_value AudioRenderGetSampleFormat(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_SampleFormat sampleFormat;
    OH_AudioStream_Result result = OH_AudioRenderer_GetSampleFormat(audioRenderer, &sampleFormat);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}

// OH_Audio_Render_GetEncodingType_001
static napi_value AudioRenderGetEncodingType(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_EncodingType encodingType;
    OH_AudioStream_Result result = OH_AudioRenderer_GetEncodingType(audioRenderer, &encodingType);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_Audio_Render_GetRendererInfo_001
static napi_value AudioRenderGetRendererInfo(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);
    OH_AudioStream_Usage usage;
    OH_AudioStream_Content content;
    OH_AudioStream_Result result = OH_AudioRenderer_GetRendererInfo(audioRenderer, &usage, &content);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetSamplingRate_001

static napi_value AudioStreamBuilderSetSamplingRate(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);
    int32_t samplingRate = 48000;
    OH_AudioStreamBuilder_SetSamplingRate(builder, samplingRate);
    OH_AudioStream_Result result = OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetChannelCount_001
static napi_value AudioStreamBuilderSetChannelCount(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);
    int32_t channelCount = 1;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_SetChannelCount(builder, channelCount);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetSampleFormat

static napi_value AudioStreamBuilderSetSampleFormat(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);
    OH_AudioStream_SampleFormat format = AUDIOSTREAM_SAMPLE_U8;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_SetSampleFormat(builder, format);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetEncodingType

static napi_value AudioStreamBuilderSetEncodingType(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);
    OH_AudioStream_EncodingType encodingType = AUDIOSTREAM_ENCODING_TYPE_RAW;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_SetEncodingType(builder, encodingType);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetLatencyMode

static napi_value AudioStreamBuilderSetLatencyMode(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);

    OH_AudioStream_LatencyMode latencyMode = AUDIOSTREAM_LATENCY_MODE_NORMAL;
    OH_AudioStreamBuilder_SetLatencyMode(builder, latencyMode);

    OH_AudioStream_Result result = OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetRendererInfo

static napi_value AudioStreamBuilderSetRendererInfo(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_RENDERER;
    OH_AudioStreamBuilder_Create(&builder, type);
    OH_AudioStream_Usage usage = AUDIOSTREAM_USAGE_MEDIA;
    OH_AudioStream_Content content = AUDIOSTREAM_CONTENT_TYPE_MOVIE;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_SetRendererInfo(builder, usage, content);

    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetCapturerInfo

static napi_value AudioStreamBuilderSetCapturerInfo(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);
    OH_AudioStream_SourceType sourceType = AUDIOSTREAM_SOURCE_TYPE_MIC;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_SetCapturerInfo(builder, sourceType);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetRendererCallback
static int32_t AudioRendererOnWriteData(OH_AudioRenderer* capturer,
    void* userData,
    void* buffer,
    int32_t bufferLen)
{
    return 0;
}
static napi_value AudioStreamBuilderSetRendererCallback(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_RENDERER;
    OH_AudioStreamBuilder_Create(&builder, type);
    OH_AudioRenderer_Callbacks callbacks;
    callbacks.OH_AudioRenderer_OnWriteData = AudioRendererOnWriteData;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_SetRendererCallback(builder, callbacks, NULL);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioStreamBuilder_SetCapturerCallback
static int32_t AudioCapturerOnReadData(
    OH_AudioCapturer* capturer,
    void* userData,
    void* buffer,
    int32_t bufferLen)
{
    return 0;
}
static napi_value AudioStreamBuilderSetCapturerCallback(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder* builder;
    OH_AudioStream_Type type = AUDIOSTREAM_TYPE_CAPTURER;
    OH_AudioStreamBuilder_Create(&builder, type);

    OH_AudioCapturer_Callbacks callbacks;
    callbacks.OH_AudioCapturer_OnReadData = AudioCapturerOnReadData;
    OH_AudioStream_Result result = OH_AudioStreamBuilder_SetCapturerCallback(builder, callbacks, NULL);

    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioCapturer_GetChannelCount
static napi_value AudioCaptureGetChannelCount(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateCapturerBuilder();
    OH_AudioCapturer *audioCapturer;
    OH_AudioStreamBuilder_GenerateCapturer(builder, &audioCapturer);

    int32_t ChannelCount;
    OH_AudioStream_Result result = OH_AudioCapturer_GetChannelCount(audioCapturer, &ChannelCount);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
// OH_AudioRenderer_GetChannelCount
static napi_value AudioRenderGetChannelCount(napi_env env, napi_callback_info info)
{
    OH_AudioStreamBuilder *builder = CreateRenderBuilder();

    OH_AudioRenderer *audioRenderer;
    OH_AudioStreamBuilder_GenerateRenderer(builder, &audioRenderer);

    int32_t ChannelCount;
    OH_AudioStream_Result result = OH_AudioRenderer_GetChannelCount(audioRenderer, &ChannelCount);
    OH_AudioStreamBuilder_Destroy(builder);
    napi_value res;
    napi_create_int32(env, result, &res);
    return res;
}
EXTERN_C_START
static napi_value Init(napi_env env, napi_value exports)
{
    napi_property_descriptor desc[] = {
        {"createAudioCapture", nullptr, CreateAudioCapture, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGenerate", nullptr, AudioCaptureGenerate, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGenerateErr", nullptr, AudioCaptureGenerateErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureStart", nullptr, AudioCaptureStart, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureStartErr", nullptr, AudioCaptureStartErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCapturePause", nullptr, AudioCapturePause, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCapturePauseErr", nullptr, AudioCapturePauseErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureStop", nullptr, AudioCaptureStop, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureStopErr", nullptr, AudioCaptureStopErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureFlush", nullptr, AudioCaptureFlush, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureFlushErr", nullptr, AudioCaptureFlushErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureRelease", nullptr, AudioCaptureRelease, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureReleaseErr", nullptr, AudioCaptureReleaseErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGetParameter", nullptr, AudioCaptureGetParameter, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGetCurrentState", nullptr, AudioCaptureGetCurrentState, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGetStreamId", nullptr, AudioCaptureGetStreamId, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGetSamplingRate", nullptr, AudioCaptureGetSamplingRate, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGetSampleFormat", nullptr, AudioCaptureGetSampleFormat, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGetEncodingType", nullptr, AudioCaptureGetEncodingType, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGetCapturerInfo", nullptr, AudioCaptureGetCapturerInfo, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGenerate", nullptr, AudioRenderGenerate, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGenerateErr", nullptr, AudioRenderGenerateErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderStart", nullptr, AudioRenderStart, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderStartErr", nullptr, AudioRenderStartErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderPause", nullptr, AudioRenderPause, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderPauseErr", nullptr, AudioRenderPauseErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderStop", nullptr, AudioRenderStop, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderStopErr", nullptr, AudioRenderStopErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderFlush", nullptr, AudioRenderFlush, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderFlushErr", nullptr, AudioRenderFlushErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderRelease", nullptr, AudioRenderRelease, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderReleaseErr", nullptr, AudioRenderReleaseErr, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGetCurrentState", nullptr, AudioRenderGetCurrentState, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGetParameter", nullptr, AudioRenderGetParameter, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGetStreamId", nullptr, AudioRenderGetStreamId, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGetSamplingRate", nullptr, AudioRenderGetSamplingRate, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGetSampleFormat", nullptr, AudioRenderGetSampleFormat, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGetEncodingType", nullptr, AudioRenderGetEncodingType, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGetRendererInfo", nullptr, AudioRenderGetRendererInfo, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetSamplingRate", nullptr, AudioStreamBuilderSetSamplingRate, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetChannelCount", nullptr, AudioStreamBuilderSetChannelCount, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetSampleFormat", nullptr, AudioStreamBuilderSetSampleFormat, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetEncodingType", nullptr, AudioStreamBuilderSetEncodingType, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetLatencyMode", nullptr, AudioStreamBuilderSetLatencyMode, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetRendererInfo", nullptr, AudioStreamBuilderSetRendererInfo, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetCapturerInfo", nullptr, AudioStreamBuilderSetCapturerInfo, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetRendererCallback", nullptr, AudioStreamBuilderSetRendererCallback, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioStreamBuilderSetCapturerCallback", nullptr, AudioStreamBuilderSetCapturerCallback, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioCaptureGetChannelCount", nullptr, AudioCaptureGetChannelCount, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"audioRenderGetChannelCount", nullptr, AudioRenderGetChannelCount, nullptr, nullptr, nullptr, napi_default, nullptr},

    };
    napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
    return exports;
}
EXTERN_C_END

/*
 * module define
 */
static napi_module g_module = {
    .nm_version = 1,
    .nm_flags = 0,
    .nm_filename = nullptr,
    .nm_register_func = Init,
    .nm_modname = "audioNdkTest",
    .nm_priv = ((void *)0),
    .reserved = {0}};

/*
 * module register
 */
extern "C" __attribute__((constructor)) void MyPixelMapRegisterModule(void)
{
    napi_module_register(&g_module);
}