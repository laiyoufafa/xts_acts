/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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

import image from "@ohos.multimedia.image";
import fileio from "@ohos.fileio";
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from "@ohos/hypium";
import featureAbility from "@ohos.ability.featureAbility";
export default function imageGif() {
    describe("imageGif", function () {
        const RGBA_8888 = image.PixelMapFormat.RGBA_8888;
        const EXPECTFRAMECOUNT = 3;
        let filePath;
        let fdNumber;
        async function getFd(fileName) {
            let context = await featureAbility.getContext();
            await context.getFilesDir().then((data) => {
                filePath = data + "/" + fileName;
                console.info("image case filePath is " + filePath);
            });
            await fileio
                .open(filePath, 0o2, 0o777)
                .then(
                    (data) => {
                        fdNumber = data;
                        console.info("image case open fd success " + fdNumber);
                    },
                    (err) => {
                        console.info("image case open fd fail" + err);
                    }
                )
                .catch((err) => {
                    console.info("image case open fd err " + err);
                });
        }

        beforeAll(async function () {
            console.info("beforeAll case");
        });

        beforeEach(function () {
            console.info("beforeEach case");
        });

        afterEach(async function () {
            console.info("afterEach case");
        });

        afterAll(async function () {
            console.info("afterAll case");
        });

        async function packingPromise(done, testNum, pixelmap) {
            const imagePackerApi = image.createImagePacker();
            if (imagePackerApi == undefined) {
                console.info(`${testNum} packingPromise create image packer failed`);
                expect(false).assertTrue();
                done();
            } else {
                let packOpts = { format: ["image/webp"], quality: 100 };
                console.info(
                    `${testNum} packingPromise packOpts={${JSON.stringify(packOpts)}}`
                );
                try {
                    let data = await imagePackerApi.packing(pixelmap, packOpts);
                    console.info(`${testNum} packing finished`);
                    if (data == undefined) {
                        console.info(`${testNum} packing failed`);
                        expect(false).assertTrue();
                        done();
                        return;
                    }
                    console.info(`${testNum} packing success`);
                    var dataArr = new Uint8Array(data);
                    console.info(`${testNum} packing show begin length: ${dataArr.length} `);
                    var line = 0;
                    for (var i = 0; i < dataArr.length; i++) {
                        var str = `dataArr[ ${i} ]=`;
                        for (var j = 0; j < 20 && i < dataArr.length; j++, i++) {
                            str = str + dataArr[i] + ",";
                        }
                        console.info(`${testNum} packing str: ${str}`);
                        i--;
                        line++;
                    }
                    console.info(`${testNum} packing show end line: ${line}`);
                    expect(true).assertTrue();
                    done();
                } catch (error) {
                    console.info(`${testNum} packingPromise error: ${error}`);
                    expect(false).assertTrue();
                    done();
                }
            }
        }

        async function getDelayTimePromise(done, testNum, picName) {
            await getFd(picName);
            let imageSourceApi = image.createImageSource(fdNumber);
            if (imageSourceApi == undefined) {
                console.info(`${testNum} getDelayTimePromise create imagesource failed`);
                expect(false).assertTrue();
                done();
            } else {
                try {
                    console.info(`${testNum} getDelayTimePromise create imagesource success`);
                    let delayTimes = await imageSourceApi.getDelayTime();
                    if (delayTimes != undefined) {
                        console.info(`${testNum} getDelayTimePromise getDelayTime success`);
                        expect(true).assertTrue();
                        console.info(`${testNum} delayTimes show begin length: ${delayTimes.length} `);
                        for (var i = 0; i < delayTimes.length; i++) {
                            console.info(`${testNum} delayTimes[ ${i} ]= ${delayTimes[i]}`);
                        }
                        console.info(`${testNum} delayTimes show end`);
                    } else {
                        console.info(`${testNum} getDelayTimePromise getDelayTime failed`);
                        expect(false).assertTrue();
                    }
                    done();
                } catch (error) {
                    console.log(`${testNum} getDelayTimePromise err: ${error}`);
                    expect(false).assertTrue();
                    done();
                };
            }
        }

        async function getDelayTimeCallBack(done, testNum, picName) {
            let imageSourceApi;
            await getFd(picName);
            imageSourceApi = image.createImageSource(fdNumber);
            if (imageSourceApi == undefined) {
                console.info(`${testNum} getDelayTimeCallBack create imagesource failed`);
                expect(false).assertTrue();
                done();
            } else {
                console.info(`${testNum} getDelayTimeCallBack create imagesource success`);
                imageSourceApi.getDelayTime((err, delayTimes) => {
                    if (err != undefined) {
                        console.info(`${testNum} getDelayTimeCallBack getDelayTime failed err: ${err}`);
                        expect(false).assertTrue();
                        done();
                        return;
                    }
                    expect(delayTimes != undefined).assertTrue();
                    console.info(`${testNum} getDelayTimeCallBack getDelayTime success`);
                    console.info(`${testNum} delayTimes show begin(length:` + delayTimes.length + `)`);
                    for (var i = 0; i < delayTimes.length; i++) {
                        console.info(`${testNum} delayTimes[` + i + `]=` + delayTimes[i]);
                    }
                    console.info(`${testNum} delayTimes show end`);
                    done();
                });
            }
        }

        async function getFrameCountPromise(done, testNum, picName) {
            try {
                await getFd(picName);
                let imageSourceApi = image.createImageSource(fdNumber);
                if (imageSourceApi == undefined) {
                    console.info(`${testNum} getFrameCountPromise create imagesource failed`);
                    expect(false).assertTrue();
                    done();
                } else {
                    console.info(`${testNum} getFrameCountPromise create imagesource success`);
                    let frameCount = await imageSourceApi.getFrameCount();
                    if (frameCount != undefined) {
                        console.info(`${testNum} getFrameCountPromise getFrameCount success`);
                        expect(frameCount).assertEqual(EXPECTFRAMECOUNT);
                        console.info(`${testNum} getFrameCountPromise frameCount= ${frameCount}`);
                    } else {
                        console.info(`${testNum} getFrameCountPromise getFrameCount failed`);
                        expect(false).assertTrue();
                    }
                    done();
                }
            } catch (error) {
                console.info(`${testNum} getFrameCountPromise error: ` + error);
                expect(false).assertTrue();
                done();
            }
        }

        async function getFrameCountCallBack(done, testNum, picName) {
            await getFd(picName);
            let imageSourceApi = image.createImageSource(fdNumber);
            if (imageSourceApi == undefined) {
                console.info(`${testNum} getFrameCountCallBack create imagesource failed`);
                expect(false).assertTrue();
                done();
            } else {
                console.info(`${testNum} getFrameCountCallBack create imagesource success`);
                imageSourceApi.getFrameCount((err, frameCount) => {
                    if (err != undefined) {
                        console.info(`${testNum} getFrameCountCallBack getFrameCount failed err: ${err}`);
                        expect(false).assertTrue();
                        done();
                        return;
                    }
                    expect(frameCount).assertEqual(EXPECTFRAMECOUNT);
                    console.info(`${testNum} getFrameCountCallBack getFrameCount success`);
                    console.info(`${testNum} getFrameCountCallBack frameCount= ${frameCount}`);
                    done();
                });
            }
        }

        async function createPixelMapListPromise(done, testNum, picName, decodeOpts) {
            await getFd(picName);
            let imageSourceApi = image.createImageSource(fdNumber);
            if (imageSourceApi == undefined) {
                console.info(`${testNum} createPixelMapListPromise create imagesource failed`);
                expect(false).assertTrue();
                done();
            } else {
                try {
                    console.info(`${testNum} createPixelMapListPromise create imagesource success`);
                    let pixelMapList = await imageSourceApi.createPixelMapList(decodeOpts);
                    if (pixelMapList != undefined) {
                        console.info(`${testNum} pixelMapList show begin(length: ${pixelMapList.length})`);
                        packingPromise(done, testNum, pixelMapList[0]);
                    } else {
                        console.info(`${testNum} createPixelMapListPromise createPixelMapList failed`);
                        expect(false).assertTrue();
                        done();
                    }
                } catch (error) {
                    console.info(`${testNum} createPixelMapListPromise error: ${error}`);
                    expect(false).assertTrue();
                    done();
                }
            }
        }

        async function createPixelMapListCallBack(done, testNum, picName, decodeOpts) {
            await getFd(picName);
            let imageSourceApi = image.createImageSource(fdNumber);
            if (imageSourceApi == undefined) {
                console.info(`${testNum} createPixelMapListCallBack create imagesource failed`);
                expect(false).assertTrue();
                done();
            } else {
                console.info(`${testNum} createPixelMapListCallBack create imagesource success`);
                imageSourceApi.createPixelMapList(decodeOpts, (err, pixelMapList) => {
                    if (err != undefined) {
                        console.info(`${testNum} createPixelMapListCallBack failed err: ${err}`);
                        expect(false).assertTrue();
                        done();
                        return;
                    }
                    expect(pixelMapList != undefined).assertTrue();
                    console.info(`${testNum} pixelMapList show begin length: ${pixelMapList.length}`);
                    packingPromise(done, testNum, pixelMapList[0]);
                });
            }
        }

        async function createPixelMapListErrPromise(done, testNum, picName, decodeOpts) {
            await getFd(picName);
            let imageSourceApi = image.createImageSource(fdNumber);
            if (imageSourceApi == undefined) {
                console.info(`${testNum} createPixelMapListPromise create imagesource failed`);
                expect(false).assertTrue();
                done();
            } else {
                try {
                    await imageSourceApi.createPixelMapList(decodeOpts);
                    console.info(`${testNum} failed `);
                    expect(false).assertTrue();
                    done();
                } catch (error) {
                    console.info(`${testNum} createPixelMapListPromise error: ${error}`);
                    expect(true).assertTrue();
                    done();
                }
            }
        }
        async function createPixelMapListErrCallBack(done, testNum, picName, decodeOpts) {
            await getFd(picName);
            let imageSourceApi = image.createImageSource(fdNumber);
            if (imageSourceApi == undefined) {
                console.info(`${testNum} createPixelMapListCallBack create imagesource failed`);
                expect(false).assertTrue();
                done();
            } else {
                console.info(`${testNum} createPixelMapListCallBack create imagesource success`);
                imageSourceApi.createPixelMapList(decodeOpts, (err, pixelMapList) => {
                    if (err != undefined || pixelMapList == undefined) {
                        expect(true).assertTrue();
                        console.info(`${testNum} createPixelMapList err:${err}`);
                        done();
                    } else {
                        console.info(`${testNum} failed`);
                        expect(false).assertTrue();
                        done();
                    }
                });
            }
        }

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_GETDELAYTIME_PROMISE_0100
         * @tc.name      :  getDelayTime - promise
         * @tc.desc      : 1.create imagesource
         *                 2.getDelayTime
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_GETDELAYTIME_PROMISE_0100", 0, async function (done) {
            getDelayTimePromise(done, "SUB_GRAPHIC_IMAGE_GIF_GETDELAYTIME_PROMISE_0100", "moving_test.gif");
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_GETDELAYTIME_CALLBACK_0100
         * @tc.name      :  getDelayTime - callback
         * @tc.desc      : 1.create imagesource
         *                 2.getDelayTime
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_GETDELAYTIME_CALLBACK_0100", 0, async function (done) {
            getDelayTimeCallBack(done, "SUB_GRAPHIC_IMAGE_GIF_GETDELAYTIME_CALLBACK_0100", "moving_test.gif");
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_GETFRAMECOUNT_PROMISE_0100
         * @tc.name      :  getFrameCount - promise
         * @tc.desc      : 1.create imagesource
         *                 2.getFrameCount
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_GETFRAMECOUNT_PROMISE_0100", 0, async function (done) {
            getFrameCountPromise(done, "SUB_GRAPHIC_IMAGE_GIF_GETFRAMECOUNT_PROMISE_0100", "moving_test.gif");
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_GETFRAMECOUNT_CALLBACK_0100
         * @tc.name      :  getFrameCount - callback
         * @tc.desc      : 1.create imagesource
         *                 2.getFrameCount
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_GETFRAMECOUNT_CALLBACK_0100", 0, async function (done) {
            getFrameCountCallBack(done, "SUB_GRAPHIC_IMAGE_GIF_GETFRAMECOUNT_CALLBACK_0100", "moving_test.gif");
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_PROMISE_0100
         * @tc.name      : createPixelMapList - promise
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         *                 4.packing
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_PROMISE_0100", 0, async function (done) {
            let decodeOpts = {
                sampleSize: 1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 0,
                desiredPixelFormat: RGBA_8888,
                index: 0,
            };
            createPixelMapListPromise(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_PROMISE_0100",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0100
         * @tc.name      : createPixelMapList - promise-sampleSize: -1
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0100", 0, async function (done) {
            let decodeOpts = {
                sampleSize: -1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 0,
                desiredPixelFormat: RGBA_8888,
                index: 0,
            };
            createPixelMapListErrPromise(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0100",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0200
         * @tc.name      : createPixelMapList - promise-index: -8
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0200", 0, async function (done) {
            let decodeOpts = {
                sampleSize: 1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 0,
                desiredPixelFormat: RGBA_8888,
                index: -8,
            };
            createPixelMapListErrPromise(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0200",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0300
         * @tc.name      : createPixelMapList - promise-rotate: 500
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0300", 0, async function (done) {
            let decodeOpts = {
                sampleSize: 1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 500,
                desiredPixelFormat: RGBA_8888,
                index: 0,
            };
            createPixelMapListErrPromise(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0300",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0400
         * @tc.name      : createPixelMapList - promise-desiredPixelFormat: unsupported format
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0400", 0, async function (done) {
            let decodeOpts = {
                sampleSize: 1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 0,
                desiredPixelFormat: 33,
                index: 0,
            };
            createPixelMapListErrPromise(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_PROMISE_0400",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_CALLBACK_0100
         * @tc.name      : createPixelMapList - callback
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         *                 4.packing
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_CALLBACK_0100", 0, async function (done) {
            let decodeOpts = {
                sampleSize: 1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 0,
                desiredPixelFormat: RGBA_8888,
                index: 0,
            };
            createPixelMapListCallBack(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_CALLBACK_0100",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0100
         * @tc.name      : createPixelMapList - callback-sampleSize: -1
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0100", 0, async function (done) {
            let decodeOpts = {
                sampleSize: -1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 0,
                desiredPixelFormat: RGBA_8888,
                index: 0,
            };
            createPixelMapListErrCallBack(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0100",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0200
         * @tc.name      : createPixelMapList - callback- index: -8
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0200", 0, async function (done) {
            let decodeOpts = {
                sampleSize: 1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 0,
                desiredPixelFormat: RGBA_8888,
                index: -8,
            };
            createPixelMapListErrCallBack(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0200",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0300
         * @tc.name      : createPixelMapList - callback-rotate: 500
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0300", 0, async function (done) {
            let decodeOpts = {
                sampleSize: 1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 500,
                desiredPixelFormat: RGBA_8888,
                index: 0,
            };
            createPixelMapListErrCallBack(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0300",
                "moving_test.gif", decodeOpts);
        });

        /**
         * @tc.number    : SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0400
         * @tc.name      : createPixelMapList - callback-unsupported format
         * @tc.desc      : 1.create imagesource
         *                 2.set DecodeOptions
         *                 3.createPixelMapList
         * @tc.size      : MEDIUM
         * @tc.type      : Functional
         * @tc.level     : Level 0
         */
        it("SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0400", 0, async function (done) {
            let decodeOpts = {
                sampleSize: 1,
                editable: true,
                desiredSize: { width: 198, height: 202 },
                rotate: 0,
                desiredPixelFormat: 33,
                index: 0,
            };
            createPixelMapListErrCallBack(done, "SUB_GRAPHIC_IMAGE_GIF_CREATEPIXELMAPLIST_ERR_CALLBACK_0400",
                "moving_test.gif", decodeOpts);
        });
    });
}
