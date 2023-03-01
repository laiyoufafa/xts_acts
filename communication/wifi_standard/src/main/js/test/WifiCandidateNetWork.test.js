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

import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'

import wifi from '@ohos.wifi'

function sleep(delay) {
    return new Promise(resovle => setTimeout(resovle, delay))
}

function checkWifiPowerOn(){
    console.info("[wifi_test]wifi status:" + wifi.isWifiActive());
}

function resolveIP(ip) {
    return (ip>>24 & 0xFF) + "." + (ip>>16 & 0xFF) + "." + (ip>>8 & 0xFF) + "." + (ip & 0xFF);
}

let wifiSecurityType = {
    WIFI_SEC_TYPE_INVALID: 0,
    WIFI_SEC_TYPE_OPEN: 1,
    WIFI_SEC_TYPE_WEP: 2,
    WIFI_SEC_TYPE_PSK: 3,
    WIFI_SEC_TYPE_SAE: 4,
}

export default function actsWifiCandidateNetWorkTest() {
    describe('actsWifiCandidateNetWorkTest', function () {
        beforeEach(function () {
            checkWifiPowerOn();
        })
        afterEach(function () {
        })

        /**
        * @tc.number Communication_WiFi_XTS_UntrustedConfig_0001
        * @tc.name testaddUntrustedConfig
        * @tc.desc Test add UntrustedConfig and removeUntrustedConfig Promise API functionality.
        * @tc.type Function
        * @tc.level Level 2
        */
        it('Communication_WiFi_XTS_UntrustedConfig_0001', 0, async function (done) {
            let wifiDeviceConfig = {
                "ssid": "TEST_PSK",
                "bssid": "",
                "preSharedKey": "12345678",
                "isHiddenSsid": false,
                "securityType": wifiSecurityType.WIFI_SEC_TYPE_PSK,
            };
            await wifi.addUntrustedConfig(wifiDeviceConfig)
                .then(ret => {
                    console.info("[wifi_test]addUntrustedConfig promise : " + JSON.stringify(ret));
                    expect(ret).assertTrue();
                }).catch((error) => {
                    console.error('[wifi_test]addUntrustedConfig promise failed -> ' + JSON.stringify(error));
                });
            await wifi.removeUntrustedConfig(wifiDeviceConfig)
                .then(ret => {
                    console.info("[wifi_test]removeUntrustedConfig promise:" + JSON.stringify(ret));
                    expect(ret).assertTrue();
                }).catch((error) => {
                    console.error('[wifi_test]removeUntrustedConfig promise failed -> ' + JSON.stringify(error));
                });
            done();
        })

        /**
        * @tc.number Communication_WiFi_XTS_UntrustedConfig_0002
        * @tc.name testaddUntrustedConfig
        * @tc.desc Test add UntrustedConfig and removeUntrustedConfig callback API functionality.
        * @tc.type Function
        * @tc.level Level 2
        */
        it('Communication_WiFi_XTS_UntrustedConfig_0002', 0, async function (done) {
            let wifiDeviceConfig = {
                "ssid": "TYPE_PSK1",
                "bssid": "",
                "preSharedKey": "12345678",
                "isHiddenSsid": false,
                "securityType": wifiSecurityType.WIFI_SEC_TYPE_PSK,
            }
            function addCandidate() {
                return new Promise((resolve, reject) => {
                    wifi.addUntrustedConfig(wifiDeviceConfig,
                        (err, ret) => {
                            if (err) {
                                console.info("[wifi_test]addUntrustedConfig callback failed : " + JSON.stringify(err));
                            }
                            console.info("[wifi_test]addUntrustedConfig callback result: " + JSON.stringify(ret));
                            expect(ret).assertTrue();
                            resolve();
                        });
                });
            }
            await addCandidate();
            function removeCandidate() {
                return new Promise((resolve, reject) => {
                    wifi.removeUntrustedConfig(wifiDeviceConfig,
                        (err, ret) => {
                            if (err) {
                                console.info("[wifi_test]removeUntrustedConfig callback failed" + JSON.stringify(err));
                            }
                            console.info("[wifi_test]removeUntrustedConfig callback result:" + JSON.stringify(ret));
                            expect(ret).assertTrue();
                            resolve();
                        });
                });
            }
            await removeCandidate();
            done();
        })
    })
}

