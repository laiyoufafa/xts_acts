/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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

import media from '@ohos.multimedia.media'
import mediademo from '@ohos.multimedia.mediademo'
import fileio from '@ohos.fileio'
import abilityAccessCtrl from '@ohos.abilityAccessCtrl'
import bundle from '@ohos.bundle'
import featureAbility from '@ohos.ability.featureAbility'
import mediaLibrary from '@ohos.multimedia.mediaLibrary'
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'

describe('videoEncoderSoftwareMultiInstances', function () {
    const events = require('events');
    const eventEmitter = new events.EventEmitter();
    const ROOT = '/data/app/el1/bundle/results/';
    const BASIC_PATH = 'video_multiinstances_';
    let videoEncodeProcessor;
    let mediaTest;
    let surfaceID = '';
    let outputQueue = [];
    let outputCnt = 0;
    let frameTotal = 100;
    let stopAtEOS = false;
    let resetAtEOS = false;
    let flushAtEOS = false;
    let sawOutputEOS = false;
    let needGetMediaDes = false;
    let fdWrite;
    let fileAsset;
    const context = featureAbility.getContext();
    const mediaLibraryTest = mediaLibrary.getMediaLibrary(context);
    let fileKeyObj = mediaLibrary.FileKey;
    
    beforeAll(async function() {
        console.info('beforeAll case 1');
        await applyPermission();
        console.info('beforeAll case after get permission');
    })

    beforeEach(function() {
        console.info('beforeEach case');
        videoEncodeProcessor = null;
        mediaTest = null;
        surfaceID = '';
        outputQueue = [];
        outputCnt = 0;
        frameTotal = 100;
        stopAtEOS = false;
        resetAtEOS = false;
        flushAtEOS = false;
        sawOutputEOS = false;
        needGetMediaDes = false;
    })

    afterEach(async function() {
        console.info('afterEach case');
        await closeFdWrite();
    })

    afterAll(function() {
        console.info('afterAll case');
    })

    let failCallback = function(err) {
        console.info('case callback err : ' + err);
        expect(err).assertUndefined();
    }

    let failCatch = function(err) {
        console.info('case catch err : ' + err);
        expect(err).assertUndefined();
    }

    function resetParam() {
        outputQueue = [];
        outputCnt = 0;
        frameTotal = 100;
        stopAtEOS = false;
        resetAtEOS = false;
        flushAtEOS = false;
        sawOutputEOS = false;
        needGetMediaDes = false;
    }

    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    } 

    function wait(time) {
        for(let t = Date.now(); Date.now() - t <= time;);
    }

    async function applyPermission() {
        let appInfo = await bundle.getApplicationInfo('ohos.acts.multimedia.video.videoencoder', 0, 100);
        let atManager = abilityAccessCtrl.createAtManager();
        if (atManager != null) {
            let tokenID = appInfo.accessTokenId;
            console.info('[permission] case accessTokenID is ' + tokenID);
            let permissionName1 = 'ohos.permission.MEDIA_LOCATION';
            let permissionName2 = 'ohos.permission.READ_MEDIA';
            let permissionName3 = 'ohos.permission.WRITE_MEDIA';
            await atManager.grantUserGrantedPermission(tokenID, permissionName1, 1).then((result) => {
                console.info('[permission] case grantUserGrantedPermission success :' + result);
            }).catch((err) => {
                console.info('[permission] case grantUserGrantedPermission failed :' + err);
            });
            await atManager.grantUserGrantedPermission(tokenID, permissionName2, 1).then((result) => {
                console.info('[permission] case grantUserGrantedPermission success :' + result);
            }).catch((err) => {
                console.info('[permission] case grantUserGrantedPermission failed :' + err);
            });
            await atManager.grantUserGrantedPermission(tokenID, permissionName3, 1).then((result) => {
                console.info('[permission] case grantUserGrantedPermission success :' + result);
            }).catch((err) => {
                console.info('[permission] case grantUserGrantedPermission failed :' + err);
            });
        } else {
            console.info('[permission] case apply permission failed, createAtManager failed');
        }
    }

    async function getFdWrite(pathName) {
        console.info('[mediaLibrary] case start getFdWrite');
        console.info('[mediaLibrary] case getFdWrite pathName is ' + pathName);
        let mediaType = mediaLibrary.MediaType.VIDEO;
        console.info('[mediaLibrary] case mediaType is ' + mediaType);
        let publicPath = await mediaLibraryTest.getPublicDirectory(mediaLibrary.DirectoryType.DIR_VIDEO);
        console.info('[mediaLibrary] case getFdWrite publicPath is ' + publicPath);
        let dataUri = await mediaLibraryTest.createAsset(mediaType, pathName, publicPath);
        if (dataUri != undefined) {
            let args = dataUri.id.toString();
            let fetchOp = {
                selections : fileKeyObj.ID + "=?",
                selectionArgs : [args],
            }
            let fetchWriteFileResult = await mediaLibraryTest.getFileAssets(fetchOp);
            console.info('[mediaLibrary] case getFdWrite getFileAssets() success');
            fileAsset = await fetchWriteFileResult.getAllObject();
            console.info('[mediaLibrary] case getFdWrite getAllObject() success');
            fdWrite = await fileAsset[0].open('Rw');
            console.info('[mediaLibrary] case getFdWrite fdWrite is ' + fdWrite);
        }
    }

    async function closeFdWrite() {
        if (fileAsset != null) {
            await fileAsset[0].close(fdWrite).then(() => {
                console.info('[mediaLibrary] case close fdWrite success, fd is ' + fdWrite);
            }).catch((err) => {
                console.info('[mediaLibrary] case close fdWrite failed');
            });
        } else {
            console.info('[mediaLibrary] case fileAsset is null');
        }
    }

    function writeFile(buf, len) {
        try{
            let res = fileio.write(fdWrite, buf, {length: len});
            console.info('case fileio.write buffer success');
        } catch(e) {
            console.info('case fileio.write buffer error is ' + e);
        }
    }

    async function dequeueOutputs(nextStep) {
        while (outputQueue.length > 0) {
            let outputObject = outputQueue.shift();
            outputCnt += 1;
            if (outputObject.flags == 1) {
                console.info("case last frame");
                mediaTest.closeStream(surfaceID);
                await toRelease();
                nextStep();
                return;
            } else {
                console.info('not last frame, write data to file');
                writeFile(outputObject.data, outputObject.length);
                console.info("write to file success");
                videoEncodeProcessor.freeOutputBuffer(outputObject).then(() => {
                    console.info('release output success');
                });
            }
        } 
    }

    function setCallback(path, nextStep) {
        console.info('case callback');
        videoEncodeProcessor.on('newOutputData', async(outBuffer) => {
            console.info('outputBufferAvailable');
            console.info('outBuffer.flags: ' + outBuffer.flags);
            if (needGetMediaDes) {
                videoEncodeProcessor.getOutputMediaDescription().then((MediaDescription) => {
                    console.info("get OutputMediaDescription success");
                    console.info('get outputMediaDescription : ' + MediaDescription);
                    needGetMediaDes = false;
                }, failCallback).catch(failCatch);
            }
            outputQueue.push(outBuffer);
            dequeueOutputs(nextStep);
        });

        videoEncodeProcessor.on('error',(err) => {
            console.info('case error called,errName is' + err);
        });
        videoEncodeProcessor.on('streamChanged',(format) => {
            console.info('Output format changed: ' + format);
        });
    }

    async function toCreateByMime(mime, done) {
        await media.createVideoEncoderByMime(mime).then((processor) => {
            if (typeof (processor) != 'undefined') {
                videoEncodeProcessor = processor;
                console.info('in case : createVideoEncoderByMime success');
            } else {
                console.info('in case : createVideoEncoderByMime fail');
                expect().assertFail();
                done();
            }
        })
    }

    async function toCreateByName(name, done) {
        await media.createVideoEncoderByName(name).then((processor) => {
            if (typeof (processor) != 'undefined') {
                videoEncodeProcessor = processor;
                console.info('in case : createVideoEncoderByName success');
            } else {
                console.info('in case : createVideoEncoderByName fail');
                expect().assertFail();
                done();
            }
        })
    }

    async function toGetVideoEncoderCaps() {
        await videoEncodeProcessor.getVideoEncoderCaps().then((videoCaps) => {
            console.info("case get getVideoEncoderCaps success");
            console.info("print videoCaps: " + videoCaps)
        }, failCallback).catch(failCatch);
    }

    function toCreateStream() {
        mediaTest = mediademo.createMediaTest();
    }

    function toSetStreamParam(width, height, framerate, frameTotal) {
        console.info('case set stream parameter');
        mediaTest.setResolution(width, height);
        mediaTest.setFrameRate(framerate);
        mediaTest.setFrameCount(frameTotal);
    }

    async function toGetInputSurface() {
        await videoEncodeProcessor.getInputSurface().then((inputSurface) => {
            expect(inputSurface != undefined).assertTrue();
            console.info('case getInputSurface success');
            surfaceID = inputSurface;
        }, failCallback).catch(failCatch);
    }

    function toStartStream() {
        console.info('case start stream');
        mediaTest.startStream(surfaceID);
    }

    function toStopStream() {
        console.info('case stop stream');
        mediaTest.closeStream(surfaceID);
    }

    async function toConfigure(mediaDescription) {
        await videoEncodeProcessor.configure(mediaDescription).then(() => {
            console.info("case configure success"); 
        }, failCallback).catch(failCatch);
    }

    async function toPrepare() {
        await videoEncodeProcessor.prepare().then(() => {
            console.info("case prepare success"); 
        }, failCallback).catch(failCatch);
    }

    async function toStart() {
        await videoEncodeProcessor.start().then(() => {
            console.info("case start success"); 
        }, failCallback).catch(failCatch);
    }

    async function toFlush() {
        outputQueue = [];
        await videoEncodeProcessor.flush().then(() => {
            console.info("case flush success"); 
        }, failCallback).catch(failCatch);
    }

    async function toStop() {
        await videoEncodeProcessor.stop().then(() => {
            console.info("case stop success"); 
        }, failCallback).catch(failCatch);
    }

    async function toReset() {
        await videoEncodeProcessor.reset().then(() => {
            console.info("case reset success"); 
        }, failCallback).catch(failCatch);
    }

    async function toRelease() {
        await videoEncodeProcessor.release().then(() => {
            console.info("case release success"); 
        }, failCallback).catch(failCatch);
    }


    /* *
        * @tc.number    : SUB_MEDIA_VIDEO_SOFTWARE_ENCODER_MULTIINSTANCE_0100
        * @tc.name      : 001.create multiple encoders
        * @tc.desc      : basic encode function
        * @tc.size      : MediumTest
        * @tc.type      : Function test
        * @tc.level     : Level2
    */
    it('SUB_MEDIA_VIDEO_SOFTWARE_ENCODER_MULTIINSTANCE_0100', 0, async function (done) {
        console.info("case test multiple encoder instances");
        let savepath = BASIC_PATH + '0100.es';
        let mime = 'video/mp4v-es';
        let width = 320;
        let height = 240;
        let framerate = 30;
        let mediaDescription = {
            "width": width, 
            "height": height,
            "pixel_format": 3,
            "frame_rate" : framerate,
        }
        let array = new Array();

        eventEmitter.once('nextStep', async () => {
            for (let j = 1; j < 3; j++) {
                await array[j].release().then(() => {
                    console.info("case release encoder " + j);
                }, failCallback).catch(failCatch);
                array[j] = null;
            }
            console.info('release encoders success');
            done();
        });
        async function runCase() {
            toCreateStream();
            toSetStreamParam(width, height, framerate, frameTotal);
            await toConfigure(mediaDescription);
            await getFdWrite(savepath);
            setCallback(savepath, function(){eventEmitter.emit('nextStep')});
            await toGetInputSurface();
            await toPrepare();
            toStartStream();
            await toStart();
        }
        for (let i = 1; i <= 3; i += 1) {
            await media.createVideoEncoderByMime(mime).then((processor) => {
                if (typeof(processor) != 'undefined') {
                    console.info("case create createVideoEncoder success: " + i);
                    if (i == 3) {
                        videoEncodeProcessor = processor;
                        runCase();
                    } else {
                    array[i] = processor;
                    }
                } else {
                    console.info("case create createVideoEncoder failed: " + i);
                    expect().assertFail();
                    done();
                }
            }, failCallback).catch(failCatch);
        }
    })
})

  