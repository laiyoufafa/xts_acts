/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http:// www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import audio from '@ohos.multimedia.audio';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from 'deccjsunit/index';

describe('audioRendererChange', function () {

    var audioStreamManager;
    var audioStreamManagerCB;
    var Tag = "AFRenLog : ";
    const audioManager = audio.getAudioManager();
    console.info(Tag + 'Create AudioManger Object JS Framework');

    beforeAll(async function () {
        await audioManager.getStreamManager().then(async function (data) {
            audioStreamManager = data;
            console.info(Tag + 'Get AudioStream Manager : Success ');
        }).catch((err) => {
            console.info(Tag + 'Get AudioStream Manager : ERROR : ' + err.message);
        });

        audioManager.getStreamManager((err, data) => {
            if (err) {
                console.error(Tag + 'Get AudioStream Manager : ERROR : ' + err.message);
            }
            else {
                audioStreamManagerCB = data;
                console.info(Tag + 'Get AudioStream Manager : Success ');
            }
        });
        await sleep(1000);

        console.info(Tag + 'beforeAll: Prerequisites at the test suite level');
    })

    beforeEach(async function () {
        console.info(Tag + 'beforeEach: Prerequisites at the test case level');
        await sleep(1000);
    })

    afterEach(function () {
        console.info(Tag + 'afterEach: Test case-level clearance conditions');
    })

    afterAll(async function () {
        console.info(Tag + 'afterAll: Test suite-level cleanup condition');
    })

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0100
     * @tc.name      : AudioRendererChange - ON_STATE_PREPARED
     * @tc.desc      : AudioRendererChange - ON_STATE_PREPARED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0100', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManagerCB.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererState == 1 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-001] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManagerCB.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-001] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0200
     * @tc.name      : AudioRendererChange - ON_STATE_RUNNING
     * @tc.desc      : AudioRendererChange - ON_STATE_RUNNING
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0200', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_1,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_UNKNOWN,
            usage: audio.StreamUsage.STREAM_USAGE_MEDIA,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererState == 2 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-002] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });

        await sleep(100);

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-002] ######### RendererChange Off is called #########');


        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });
        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0300
     * @tc.name      : AudioRendererChange - ON_STATE_STOPPED
     * @tc.desc      : AudioRendererChange - ON_STATE_STOPPED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0300', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_24000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S24LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_SPEECH,
            usage: audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererState == 3 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-003] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });

        await sleep(100);

        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-003] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0400
     * @tc.name      : AudioRendererChange - ON_STATE_RELEASED
     * @tc.desc      : AudioRendererChange - ON_STATE_RELEASED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0400', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererState == 4 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-004] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });

        await sleep(100);

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-004] ######### RendererChange Off is called #########');

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0500
     * @tc.name      : AudioRendererChange - ON_STATE_PAUSED
     * @tc.desc      : AudioRendererChange - ON_STATE_PAUSED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0500', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererState == 5 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-005] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });

        await sleep(100);

        await audioRen.pause().then(async function () {
            console.info(Tag + 'renderInstant Pause :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant Pause :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-005] ######### RendererChange Off is called #########');

        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0600
     * @tc.name      : AudioRendererChange - ON_CONTENT_TYPE_RINGTONE
     * @tc.desc      : AudioRendererChange - ON_CONTENT_TYPE_RINGTONE
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0600', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManagerCB.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.content == 5 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-006] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);
        audioStreamManagerCB.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-006] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0700
     * @tc.name      : AudioRendererChange - ON_CONTENT_TYPE_UNKNOWN
     * @tc.desc      : AudioRendererChange - ON_CONTENT_TYPE_UNKNOWN
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0700', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_UNKNOWN,
            usage: audio.StreamUsage.STREAM_USAGE_MEDIA,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.content == 0 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-007] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);
        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-007] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0800
     * @tc.name      : AudioRendererChange - ON_CONTENT_TYPE_SPEECH
     * @tc.desc      : AudioRendererChange - ON_CONTENT_TYPE_SPEECH
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0800', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_SPEECH,
            usage: audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.content == 1 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-008] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);
        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-008] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0900
     * @tc.name      : AudioRendererChange - ON_CONTENT_TYPE_MUSIC
     * @tc.desc      : AudioRendererChange - ON_CONTENT_TYPE_MUSIC
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_0900', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_MUSIC,
            usage: audio.StreamUsage.STREAM_USAGE_UNKNOWN,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.content == 2 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-009] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);
        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-009] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1000
     * @tc.name      : AudioRendererChange - ON_CONTENT_TYPE_MOVIES
     * @tc.desc      : AudioRendererChange - ON_CONTENT_TYPE_MOVIES
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1000', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_MOVIE,
            usage: audio.StreamUsage.STREAM_USAGE_MEDIA,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.content == 3 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-010] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-010] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1100
     * @tc.name      : AudioRendererChange - ON_CONTENT_TYPE_SONIFICATION
     * @tc.desc      : AudioRendererChange - ON_CONTENT_TYPE_SONIFICATION
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1100', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_SONIFICATION,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.content == 4 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-011] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-011] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1200
     * @tc.name      : AudioRendererChange - ON_STREAM_USAGE_UNKNOWN
     * @tc.desc      : AudioRendererChange - ON_STREAM_USAGE_UNKNOWN
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1200', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_SPEECH,
            usage: audio.StreamUsage.STREAM_USAGE_UNKNOWN,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManagerCB.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.usage == 0 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-012] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManagerCB.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-012] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1300
     * @tc.name      : AudioRendererChange - ON_STREAM_USAGE_MEDIA
     * @tc.desc      : AudioRendererChange - ON_STREAM_USAGE_MEDIA
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1300', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_MUSIC,
            usage: audio.StreamUsage.STREAM_USAGE_MEDIA,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.usage == 1 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-013] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-013] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1400
     * @tc.name      : AudioRendererChange - ON_STREAM_USAGE_MEDIA
     * @tc.desc      : AudioRendererChange - ON_STREAM_USAGE_MEDIA
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1400', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_MOVIE,
            usage: audio.StreamUsage.STREAM_USAGE_VOICE_COMMUNICATION,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.usage == 2 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-014] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-014] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1500
     * @tc.name      : AudioRendererChange - ON_STREAM_USAGE_MEDIA
     * @tc.desc      : AudioRendererChange - ON_STREAM_USAGE_MEDIA
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1500', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_SONIFICATION,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].rendererInfo.usage == 6 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-015] ResultFlag for ' + i + ' is:' + resultFlag);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);
        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-015] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1600
     * @tc.name      : AudioRendererChange - STREAMID
     * @tc.desc      : AudioRendererChange - STREAMID
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1600', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_SONIFICATION,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (AudioRendererChangeInfoArray[i].streamId != undefined && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-016] StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);
        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-015] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1700
     * @tc.name      : AudioRendererChange - CLIENTUID & RENDERERFLAG
     * @tc.desc      : AudioRendererChange - CLIENTUID & RENDERERFLAG
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1700', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_SONIFICATION,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                var clientUid = AudioRendererChangeInfoArray[i].clientUid;
                var renFlags = AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags;
                var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                if (clientUid != undefined && renFlags == 0 && devDescriptor != null) {
                    resultFlag = true;
                    console.info(Tag + '[RENDERER-CHANGE-ON-017] ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                    console.info(Tag + '[RENDERER-CHANGE-ON-017] Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);
        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-015] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1800
     * @tc.name      : AudioRendererChange - DEVICE DESCRIPTOR
     * @tc.desc      : AudioRendererChange - DEVICE DESCRIPTOR
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_ON_RENDERER_CHANGE_1800', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = false;

        var audioRen;

        audioStreamManagerCB.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    var Id = AudioRendererChangeInfoArray[i].deviceDescriptors[j].id;
                    var dType = AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType;
                    var dRole = AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole;
                    var sRate = AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0];
                    var cCount = AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0];
                    var cMask = AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks;
                    console.info(Tag + 'Id:' + i + ':' + Id);
                    console.info(Tag + 'Type:' + i + ':' + dType);
                    console.info(Tag + 'Role:' + i + ':' + dRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + sRate);
                    console.info(Tag + 'CC:' + i + ':' + cCount);
                    console.info(Tag + 'CM:' + i + ':' + cMask);
                    if (Id > 0 && dType == 2 && dRole == 2 && sRate != null && cCount != null && cMask != null) {
                        resultFlag = true;
                    }
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManagerCB.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-ON-018] ######### RendererChange Off is called #########');

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0100
     * @tc.name      : AudioRendererChange - OFF_STATE_PREPARED
     * @tc.desc      : AudioRendererChange - OFF_STATE_PREPARED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0100', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_32000,
            channels: audio.AudioChannel.CHANNEL_1,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_U8,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = true;
        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                resultFlag = false;
            }
        });
        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-OFF-001] ######### RendererChange Off is called #########');
        console.info(Tag + '[RENDERER-CHANGE-OFF-001] ResultFlag is:' + resultFlag);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0200
     * @tc.name      : AudioRendererChange - OFF_STATE_RUNNING
     * @tc.desc      : AudioRendererChange - OFF_STATE_RUNNING
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0200', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_96000,
            channels: audio.AudioChannel.CHANNEL_1,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_SPEECH,
            usage: audio.StreamUsage.STREAM_USAGE_VOICE_ASSISTANT,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = true;
        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                resultFlag = false;
            }
        });
        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-OFF-002] ######### RendererChange Off is called #########');
        console.info(Tag + '[RENDERER-CHANGE-OFF-002] ResultFlag is:' + resultFlag);

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0300
     * @tc.name      : AudioRenderer - OFF_STATE_STOPPED
     * @tc.desc      : AudioRenderer - OFF_STATE_STOPPED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0300', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }
        var resultFlag = true;
        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                resultFlag = false;
            }
        });
        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-OFF-003] ######### RendererChange Off is called #########');
        console.info(Tag + '[RENDERER-CHANGE-OFF-003] ResultFlag is:' + resultFlag);

        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0400
     * @tc.name      : AudioRendererChange - OFF_STATE_RELEASED
     * @tc.desc      : AudioRendererChange - OFF_STATE_RELEASED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0400', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_8000,
            channels: audio.AudioChannel.CHANNEL_1,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_UNKNOWN,
            usage: audio.StreamUsage.STREAM_USAGE_MEDIA,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = true;
        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '[RENDERER-CHANGE-OFF-004] ######### RendererChange on is called for ' + i + ' ##########');
                console.info(Tag + '[RENDERER-CHANGE-OFF-004] StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + '[RENDERER-CHANGE-OFF-004] ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + '[RENDERER-CHANGE-OFF-004] Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + '[RENDERER-CHANGE-OFF-004] Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + '[RENDERER-CHANGE-OFF-004] Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + '[RENDERER-CHANGE-OFF-004] State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                resultFlag = false;
            }
        });
        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-OFF-004] ######### RendererChange Off is called #########');
        console.info(Tag + '[RENDERER-CHANGE-OFF-004] ResultFlag is:' + resultFlag);

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0500
     * @tc.name      : AudioRendererChange - OFF_STATE_PAUSED
     * @tc.desc      : AudioRendererChange - OFF_STATE_PAUSED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0500', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_8000,
            channels: audio.AudioChannel.CHANNEL_1,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_UNKNOWN,
            usage: audio.StreamUsage.STREAM_USAGE_MEDIA,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = true;
        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManagerCB.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
                resultFlag = false;
            }
        });
        await sleep(100);

        audioStreamManagerCB.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-OFF-005] ######### RendererChange Off is called #########');
        console.info(Tag + '[RENDERER-CHANGE-OFF-005] ResultFlag is:' + resultFlag);

        await audioRen.pause().then(async function () {
            console.info(Tag + 'renderInstant Pause :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant Pause :ERROR : ' + err.message);
        });

        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0600
     * @tc.name      : AudioRendererChange - DEVICE DESCRIPTOR
     * @tc.desc      : AudioRendererChange - DEVICE DESCRIPTOR
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_OFF_RENDERER_CHANGE_0600', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_32000,
            channels: audio.AudioChannel.CHANNEL_1,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_U8,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = true;
        var audioRen;

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    var Id = AudioRendererChangeInfoArray[i].deviceDescriptors[j].id;
                    var dType = AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType;
                    var dRole = AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole;
                    var sRate = AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0];
                    var cCount = AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0];
                    var cMask = AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks;
                    console.info(Tag + 'Id:' + i + ':' + Id);
                    console.info(Tag + 'Type:' + i + ':' + dType);
                    console.info(Tag + 'Role:' + i + ':' + dRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + sRate);
                    console.info(Tag + 'CC:' + i + ':' + cCount);
                    console.info(Tag + 'CM:' + i + ':' + cMask);
                    if (Id > 0 && dType == 2 && dRole == 2 && sRate != null && cCount != null && cMask != null) {
                        resultFlag = false;
                    }
                }
            }
        });
        await sleep(100);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[RENDERER-CHANGE-OFF-006] ######### RendererChange Off is called #########');
        console.info(Tag + '[RENDERER-CHANGE-OFF-006] ResultFlag is:' + resultFlag);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0100
     * @tc.name      : AudioRendererChange - GET_STATE_PREPARED
     * @tc.desc      : AudioRendererChange - GET_STATE_PREPARED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0100', 2, async function (done) {
        var audioCap;
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;
        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioCap = data;
            console.info(Tag + 'AudioRenderer Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRenderer Created : ERROR : ' + err.message);
        });

        await sleep(100);

        await audioStreamManager.getCurrentAudioRendererInfoArray().then(function (AudioRendererChangeInfoArray) {
            console.info(Tag + '[GET_RENDERER_STATE_1_PROMISE] ######### Get Promise is called ##########');
            if (AudioRendererChangeInfoArray != null) {
                for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                    console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                    console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                    console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                    console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                    console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                    console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                    var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                    for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                        console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                        console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                        console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                        console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                        console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                        console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                        console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                        console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                    }
                    if (AudioRendererChangeInfoArray[i].rendererState == 1 && devDescriptor != null) {
                        resultFlag = true;
                        console.info(Tag + 'State : ' + AudioRendererChangeInfoArray[i].rendererState);
                    }
                }
            }
        }).catch((err) => {
            console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
            resultFlag = false;
        });

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_STATE_1_PROMISE] ######### RendererChange Off is called #########');

        await audioCap.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0200
     * @tc.name      : AudioRendererChange - GET_STATE_RUNNING
     * @tc.desc      : AudioRendererChange - GET_STATE_RUNNING
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0200', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioCap;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioCap = data;
            console.info(Tag + 'AudioRenderer Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRenderer Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManagerCB.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });

        await sleep(100);
        await audioCap.start().then(async function () {
            console.info(Tag + 'Renderer started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'Renderer start :ERROR : ' + err.message);
        });

        await sleep(100);

        await audioStreamManagerCB.getCurrentAudioRendererInfoArray().then(function (AudioRendererChangeInfoArray) {
            console.info(Tag + '[GET_RENDERER_STATE_2_PROMISE] ######### Get Promise is called ##########');
            if (AudioRendererChangeInfoArray != null) {
                for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                    console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                    console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                    console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                    console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                    console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                    console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                    var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                    for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                        console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                        console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                        console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                        console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                        console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                        console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                        console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                        console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                    }
                    if (AudioRendererChangeInfoArray[i].rendererState == 2 && devDescriptor != null) {
                        resultFlag = true;
                        console.info(Tag + 'State : ' + AudioRendererChangeInfoArray[i].rendererState);
                    }
                }
            }
        }).catch((err) => {
            console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
            resultFlag = false;
        });

        audioStreamManagerCB.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_STATE_2_PROMISE] ######### RendererChange Off is called #########');

        await audioCap.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0300
     * @tc.name      : AudioRendererChange - GET_STATE_STOPPED
     * @tc.desc      : AudioRendererChange - GET_STATE_STOPPED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0300', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioCap;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioCap = data;
            console.info(Tag + 'AudioRenderer Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRenderer Created : ERROR : ' + err.message);
        });

        await audioCap.start().then(async function () {
            console.info(Tag + 'Renderer started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'Renderer start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });

        await sleep(100);

        await audioCap.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await sleep(100);

        await audioStreamManager.getCurrentAudioRendererInfoArray().then(function (AudioRendererChangeInfoArray) {
            console.info(Tag + '[GET_RENDERER_STATE_3_PROMISE] ######### Get Promise is called ##########');
            if (AudioRendererChangeInfoArray != null) {
                for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                    console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                    console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                    console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                    console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                    console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                    console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                    var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                    for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                        console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                        console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                        console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                        console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                        console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                        console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                        console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                        console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                    }
                    if (AudioRendererChangeInfoArray[i].rendererState == 3 && devDescriptor != null) {
                        resultFlag = true;
                        console.info(Tag + 'State : ' + AudioRendererChangeInfoArray[i].rendererState);
                    }
                }
            }
        }).catch((err) => {
            console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
            resultFlag = false;
        });

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_STATE_3_PROMISE] ######### RendererChange Off is called #########');

        await audioCap.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0400
     * @tc.name      : AudioRendererChange - GET_STATE_PAUSED
     * @tc.desc      : AudioRendererChange - GET_STATE_PAUSED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0400', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });

        await sleep(100);

        await audioRen.pause().then(async function () {
            console.info(Tag + 'renderInstant Pause :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant Pause :ERROR : ' + err.message);
        });

        await sleep(100);

        await audioStreamManager.getCurrentAudioRendererInfoArray().then(function (AudioRendererChangeInfoArray) {
            console.info(Tag + '[GET_RENDERER_STATE_5_PROMISE] ######### Get Promise is called ##########');
            if (AudioRendererChangeInfoArray != null) {
                for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                    console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                    console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                    console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                    console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                    console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                    console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                    var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                    for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                        console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                        console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                        console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                        console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                        console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                        console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                        console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                        console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                    }
                    if (AudioRendererChangeInfoArray[i].rendererState == 5 && devDescriptor != null) {
                        resultFlag = true;
                        console.info(Tag + 'State : ' + AudioRendererChangeInfoArray[i].rendererState);
                    }
                }
            }
        }).catch((err) => {
            console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
            resultFlag = false;
        });

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_STATE_5_PROMISE] ######### RendererChange Off is called #########');

        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0500
     * @tc.name      : AudioRendererChange - DEVICE DESCRIPTOR
     * @tc.desc      : AudioRendererChange - DEVICE DESCRIPTOR
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_PROMISE_0500', 2, async function (done) {
        var audioCap;
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;
        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioCap = data;
            console.info(Tag + 'AudioRenderer Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRenderer Created : ERROR : ' + err.message);
        });

        await sleep(100);

        await audioStreamManager.getCurrentAudioRendererInfoArray().then(function (AudioRendererChangeInfoArray) {
            console.info(Tag + '[GET_RENDERER_DD_PROMISE] ######### Get Promise is called ##########');
            if (AudioRendererChangeInfoArray != null) {
                for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                    console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                    console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                    console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                    console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                    console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                    console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                    for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                        var Id = AudioRendererChangeInfoArray[i].deviceDescriptors[j].id;
                        var dType = AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType;
                        var dRole = AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole;
                        var sRate = AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0];
                        var cCount = AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0];
                        var cMask = AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks;
                        console.info(Tag + 'Id:' + i + ':' + Id);
                        console.info(Tag + 'Type:' + i + ':' + dType);
                        console.info(Tag + 'Role:' + i + ':' + dRole);
                        console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                        console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                        console.info(Tag + 'SR:' + i + ':' + sRate);
                        console.info(Tag + 'CC:' + i + ':' + cCount);
                        console.info(Tag + 'CM:' + i + ':' + cMask);
                        if (Id > 0 && dType == 2 && dRole == 2 && sRate != null && cCount != null && cMask != null) {
                            resultFlag = true;
                        }
                    }
                }
            }
        }).catch((err) => {
            console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
            resultFlag = false;
        });

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_DD_PROMISE] ######### RendererChange Off is called #########');

        await audioCap.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0100
     * @tc.name      : AudioRendererChange - GET_STATE_PREPARED
     * @tc.desc      : AudioRendererChange - GET_STATE_PREPARED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0100', 2, async function (done) {
        var audioCap;
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;
        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioCap = data;
            console.info(Tag + 'AudioRenderer Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRenderer Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.getCurrentAudioRendererInfoArray(async (err, AudioRendererChangeInfoArray) => {
            console.info(Tag + '[GET_RENDERER_STATE_1_CALLBACK] **** Get Callback Called ****');
            await sleep(100);
            if (err) {
                console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
                resultFlag = false;
            }
            else {
                if (AudioRendererChangeInfoArray != null) {
                    for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                        console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                        console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                        console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                        console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                        console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                        console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                        var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                        for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                            console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                            console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                            console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                            console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                            console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                            console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                            console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                            console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                        }
                        if (AudioRendererChangeInfoArray[i].rendererState == 1 && devDescriptor != null) {
                            resultFlag = true;
                            console.info(Tag + 'State : ' + AudioRendererChangeInfoArray[i].rendererState);
                        }
                    }
                }
            }
        });

        await sleep(1000);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_STATE_1_CALLBACK] ######### RendererChange Off is called #########');

        await audioCap.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0200
     * @tc.name      : AudioRendererChange - GET_STATE_RUNNING
     * @tc.desc      : AudioRendererChange - GET_STATE_RUNNING
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0200', 2, async function (done) {

        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioCap;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioCap = data;
            console.info(Tag + 'AudioRenderer Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRenderer Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManagerCB.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });

        await sleep(100);
        await audioCap.start().then(async function () {
            console.info(Tag + 'Renderer started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'Renderer start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManagerCB.getCurrentAudioRendererInfoArray(async (err, AudioRendererChangeInfoArray) => {
            console.info(Tag + '[GET_RENDERER_STATE_2_CALLBACK] **** Get Callback Called ****');
            await sleep(100);
            if (err) {
                console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
                resultFlag = false;
            }
            else {
                if (AudioRendererChangeInfoArray != null) {
                    for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                        console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                        console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                        console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                        console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                        console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                        console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                        var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                        for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                            console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                            console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                            console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                            console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                            console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                            console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                            console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                            console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                        }
                        if (AudioRendererChangeInfoArray[i].rendererState == 2 && devDescriptor != null) {
                            resultFlag = true;
                            console.info(Tag + 'State : ' + AudioRendererChangeInfoArray[i].rendererState);
                        }
                    }
                }
            }
        });

        await sleep(1000);

        audioStreamManagerCB.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_STATE_2_CALLBACK] ######### RendererChange Off is called #########');

        await audioCap.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0300
     * @tc.name      : AudioRendererChange - GET_STATE_STOPPED
     * @tc.desc      : AudioRendererChange - GET_STATE_STOPPED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0300', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioCap;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioCap = data;
            console.info(Tag + 'AudioRenderer Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRenderer Created : ERROR : ' + err.message);
        });

        await audioCap.start().then(async function () {
            console.info(Tag + 'Renderer started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'Renderer start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });

        await sleep(100);

        await audioCap.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.getCurrentAudioRendererInfoArray(async (err, AudioRendererChangeInfoArray) => {
            console.info(Tag + '[GET_RENDERER_STATE_3_CALLBACK] **** Get Callback Called ****');
            await sleep(100);
            if (err) {
                console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
                resultFlag = false;
            }
            else {
                if (AudioRendererChangeInfoArray != null) {
                    for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                        console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                        console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                        console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                        console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                        console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                        console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                        var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                        for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                            console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                            console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                            console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                            console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                            console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                            console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                            console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                            console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                        }
                        if (AudioRendererChangeInfoArray[i].rendererState == 3 && devDescriptor != null) {
                            resultFlag = true;
                            console.info(Tag + 'State : ' + AudioRendererChangeInfoArray[i].rendererState);
                        }
                    }
                }
            }
        });

        await sleep(1000);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_STATE_3_CALLBACK] ######### RendererChange Off is called #########');

        await audioCap.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();

    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0400
     * @tc.name      : AudioRendererChange - GET_STATE_PAUSED
     * @tc.desc      : AudioRendererChange - GET_STATE_PAUSED
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0400', 2, async function (done) {
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_48000,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S32LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;

        var audioRen;

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioRen = data;
            console.info(Tag + 'AudioRender Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRender Created : ERROR : ' + err.message);
        });

        await audioRen.start().then(async function () {
            console.info(Tag + 'renderInstant started :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant start :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });

        await sleep(100);

        await audioRen.pause().then(async function () {
            console.info(Tag + 'renderInstant Pause :SUCCESS ');
        }).catch((err) => {
            console.info(Tag + 'renderInstant Pause :ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.getCurrentAudioRendererInfoArray(async (err, AudioRendererChangeInfoArray) => {
            console.info(Tag + '[GET_RENDERER_STATE_5_CALLBACK] **** Get Callback Called ****');
            await sleep(100);
            if (err) {
                console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
                resultFlag = false;
            }
            else {
                if (AudioRendererChangeInfoArray != null) {
                    for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                        console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                        console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                        console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                        console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                        console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                        console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                        var devDescriptor = AudioRendererChangeInfoArray[i].deviceDescriptors;
                        for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                            console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                            console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                            console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                            console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                            console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                            console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                            console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                            console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                        }
                        if (AudioRendererChangeInfoArray[i].rendererState == 5 && devDescriptor != null) {
                            resultFlag = true;
                            console.info('AFRenLog: RenSta : ' + AudioRendererChangeInfoArray[i].rendererState);
                        }
                    }
                }
            }
        });

        await sleep(1000);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info('AFRendLog: [GET_REN_STA_5_CB] ## RenCh Off is called ##');

        await audioRen.stop().then(async function () {
            console.info(Tag + 'Renderer stopped : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer stop:ERROR : ' + err.message);
        });

        await audioRen.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })

    /**
     * @tc.number    : SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0500
     * @tc.name      : AudioRendererChange - DEVICE DESCRIPTOR
     * @tc.desc      : AudioRendererChange - DEVICE DESCRIPTOR
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 2
     */
    it('SUB_MULTIMEDIA_GET_RENDERER_CHANGE_CALLBACK_0500', 2, async function (done) {
        var audioCap;
        var AudioStreamInfo = {
            samplingRate: audio.AudioSamplingRate.SAMPLE_RATE_44100,
            channels: audio.AudioChannel.CHANNEL_2,
            sampleFormat: audio.AudioSampleFormat.SAMPLE_FORMAT_S16LE,
            encodingType: audio.AudioEncodingType.ENCODING_TYPE_RAW
        }

        var AudioRendererInfo = {
            content: audio.ContentType.CONTENT_TYPE_RINGTONE,
            usage: audio.StreamUsage.STREAM_USAGE_NOTIFICATION_RINGTONE,
            rendererFlags: 0
        }

        var AudioRendererOptions = {
            streamInfo: AudioStreamInfo,
            rendererInfo: AudioRendererInfo
        }

        var resultFlag = false;
        audioStreamManager.on('audioRendererChange', (AudioRendererChangeInfoArray) => {
            for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                console.info(Tag + '## RendererChange on is called for ' + i + ' ##');
                console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                console.info(Tag + 'Content for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                console.info(Tag + 'Stream for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                console.info(Tag + 'Flag ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                    console.info(Tag + 'Id:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].id);
                    console.info(Tag + 'Type:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType);
                    console.info(Tag + 'Role:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole);
                    console.info(Tag + 'Name:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                    console.info(Tag + 'Addr:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                    console.info(Tag + 'SR:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0]);
                    console.info(Tag + 'C' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0]);
                    console.info(Tag + 'CM:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks);
                }
            }
        });
        await sleep(100);

        await audio.createAudioRenderer(AudioRendererOptions).then(async function (data) {
            audioCap = data;
            console.info(Tag + 'AudioRenderer Created : Success : Stream Type: SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'AudioRenderer Created : ERROR : ' + err.message);
        });

        await sleep(100);

        audioStreamManager.getCurrentAudioRendererInfoArray(async (err, AudioRendererChangeInfoArray) => {
            console.info(Tag + '[GET_RENDERER_DD_CALLBACK] **** Get Callback Called ****');
            await sleep(100);
            if (err) {
                console.log(Tag + 'getCurrentAudioRendererInfoArray :ERROR: ' + err.message);
                resultFlag = false;
            }
            else {
                if (AudioRendererChangeInfoArray != null) {
                    for (let i = 0; i < AudioRendererChangeInfoArray.length; i++) {
                        console.info(Tag + 'StreamId for ' + i + ' is:' + AudioRendererChangeInfoArray[i].streamId);
                        console.info(Tag + 'ClientUid for ' + i + ' is:' + AudioRendererChangeInfoArray[i].clientUid);
                        console.info(Tag + 'Con ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.content);
                        console.info(Tag + 'Stream' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.usage);
                        console.info(Tag + '' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererInfo.rendererFlags);
                        console.info(Tag + 'State for ' + i + ' is:' + AudioRendererChangeInfoArray[i].rendererState);
                        for (let j = 0; j < AudioRendererChangeInfoArray[i].deviceDescriptors.length; j++) {
                            var Id = AudioRendererChangeInfoArray[i].deviceDescriptors[j].id;
                            var dType = AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceType;
                            var dRole = AudioRendererChangeInfoArray[i].deviceDescriptors[j].deviceRole;
                            var sRate = AudioRendererChangeInfoArray[i].deviceDescriptors[j].sampleRates[0];
                            var cCount = AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelCounts[0];
                            var cMask = AudioRendererChangeInfoArray[i].deviceDescriptors[j].channelMasks;
                            console.info(Tag + 'Id:' + i + ':' + Id);
                            console.info(Tag + 'Type:' + i + ':' + dType);
                            console.info(Tag + 'Role:' + i + ':' + dRole);
                            console.info(Tag + 'Nam:' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].name);
                            console.info(Tag + '' + i + ':' + AudioRendererChangeInfoArray[i].deviceDescriptors[j].address);
                            console.info(Tag + 'SR:' + i + ':' + sRate);
                            console.info(Tag + 'CC:' + i + ':' + cCount);
                            console.info(Tag + 'CM:' + i + ':' + cMask);
                            if (Id > 0 && dType == 2 && dRole == 2 && sRate != null && cCount != null && cMask != null) {
                                resultFlag = true;
                            }
                        }
                    }
                }
            }
        });

        await sleep(1000);

        audioStreamManager.off('audioRendererChange');
        await sleep(100);
        console.info(Tag + '[GET_RENDERER_DD_CALLBACK] ######### RendererChange Off is called #########');

        await audioCap.release().then(async function () {
            console.info(Tag + 'Renderer release : SUCCESS');
        }).catch((err) => {
            console.info(Tag + 'Renderer release :ERROR : ' + err.message);
        });

        expect(resultFlag).assertTrue();
        done();
    })


})