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
 
import { expect } from "@ohos/hypium";
import cryptoFramework from "@ohos.security.cryptoFramework";
import { stringTouInt8Array, uInt8ArrayToShowStr, uInt8ArrayToString} from "../common/publicDoString";

async function testMDDigestCallback(MDAlgoName) {
    var globalMd;
    var globalText = "my test data";

    globalMd = cryptoFramework.createMd(MDAlgoName);
    expect(globalMd != null).assertTrue();
    console.warn("md= " + globalMd);
    console.warn("MD algName is: " + globalMd.algName);
    // test input data
    let inBlob = {
        data: stringTouInt8Array(globalText)
    }
    globalMd.update(inBlob, (err,) => {
        if (err) {
            console.error("[callback]catch err:" + err);
            expect(err == null).assertFail();
        }
        console.warn("[callback]: update finished");
        globalMd.digest((err1, digestBlob) => {
            if (err1) {
                console.error("[callback]catch err:" + err1);
                expect(err == null).assertFail();
            }
            console.warn("[callback]: digest result1: " + uInt8ArrayToShowStr(digestBlob.data));
            console.warn("[callback]: digest result2: " + digestBlob.data);
            let mdLen = globalMd.getMdLength();
            console.warn("Md len: " + mdLen);
            expect(digestBlob != null && mdLen == 16).assertTrue();
        });
    })
}

async function testHMACDigestCallback(HMACAlgoName, keyAlgoName) {
    var globalHMAC;
    var globalText = "my test data";
    var globalsymKeyGenerator;
    var ginBlob = {
        data: stringTouInt8Array(globalText)
    };

    globalHMAC = cryptoFramework.createMac(HMACAlgoName);
    expect(globalHMAC != null).assertTrue();
    console.warn("mac= " + globalHMAC);
    console.warn("HMAC algName is: " + globalHMAC.algName);
    // create sym key generator
    console.log("start to call createSymKeyGenerator()");
    globalsymKeyGenerator = cryptoFramework.createSymKeyGenerator(keyAlgoName);
    expect(globalsymKeyGenerator != null).assertTrue();
    console.log("createSymKeyGenerator ok");
    console.warn("symKeyGenerator algName:" + globalsymKeyGenerator.algName);
    globalsymKeyGenerator.generateSymKey((err, key) => {
        if (err) {
            console.error("[callback]catch err:" + err.code);
            expect(err == null).assertFail();
        }
        expect(key != null).assertTrue();
        console.warn("generateSymKey ok");
        console.warn("key algName:" + key.algName);
        console.warn("key format:" + key.format);
        var encodedKey = key.getEncoded();
        console.warn("key getEncoded hex: " + uInt8ArrayToShowStr(encodedKey.data));
        globalHMAC.init(key, (err1,) => {
            if (err1) {
                console.error("[callback]catch err:" + err1.code);
                expect(err1 == null).assertFail();
            }
            globalHMAC.update(ginBlob, (err2,) => {
                if (err2) {
                    console.error("[callback]catch err:" + err2.code);
                    expect(err2 == null).assertFail();
                }
                globalHMAC.doFinal((err3, macOutput) => {
                    if (err3) {
                        console.error("[callback]catch err:" + err3.code);
                        expect(err3 == null).assertFail();
                    }
                    console.warn("HMAC result:" + macOutput.data);
                    let macLen = globalHMAC.getMacLength();
                    console.warn("MAC len:" + macLen);
                    expect(macOutput != null && macLen == 20).assertTrue();
                })
            })
        })
    })
}

export { testMDDigestCallback, testHMACDigestCallback };
