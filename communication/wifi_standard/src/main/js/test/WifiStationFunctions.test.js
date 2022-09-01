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

import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'

import wifi from '@ohos.wifi'

function sleep(delay) { // delay x ms
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start > delay) {
        break;
    }
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

let connState = {
    SCANNING: 0,
    CONNECTING: 1,
    AUTHENTICATING: 2,
    OBTAINING_IPADDR: 3,
    CONNECTED: 4,
    DISCONNECTING: 5,
    DISCONNECTED: 6,
    UNKNOWN: 7,
}

let untrustedDeviceConfig = {
    "ssid": "untrusted_ssid",
    "bssid": "",
    "preSharedKey": "12345678",
    "isHiddenSsid": false,
    "securityType": wifiSecurityType.WIFI_SEC_TYPE_PSK
}

let wifiChannelWidth = {
    WIDTH_20MHZ : 0,
    WIDTH_40MHZ : 1,
    WIDTH_80MHZ : 2,
    WIDTH_160MHZ : 3,
    WIDTH_80MHZ_PLUS : 4,
    WIDTH_INVALID:null,
}

export default function actsWifiFunctionsTest() {
    describe('actsWifiFunctionsTest', function() {
        beforeEach(function () {
            checkWifiPowerOn();
        })
        afterEach(function () {
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0002
        * @tc.name testgetScanInfos
        * @tc.desc Test get to ScanInfos promise and callback API functionality.
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_Sta_0002', 0, async function (done) {
            let scan = wifi.scan();
            await sleep(3000);
            await wifi.getScanInfos()
                .then(result => {
                    let clen = Object.keys(result).length;
                    expect(clen).assertLarger(0);
                    console.info("[wifi_test]getScanInfos promise result:" + JSON.stringify(result));
                });
            function getScanInfos() {
                return new Promise((resolve, reject) => {
                    wifi.getScanInfos(
                        (err, result) => {
                            if (err) {
                                console.log("[wifi_test] wifi getScanInfos failed:" + err);
                            }
                            let clen = Object.keys(result).length;
                            if (!(clen == 0)) {
                                expect(clen).assertLarger(0);
                                console.info("[wifi_test] getScanInfos callback result: " + JSON.stringify(result));
                                for (let j = 0; j < clen; ++j) {
                                    console.info("ssid: " + result[j].ssid + "bssid: " + result[j].bssid +
                                    "securityType: " + result[j].securityType +
                                    "rssi: " + result[j].rssi + "band: " + result[j].band +
                                    "frequency: " + result[j].frequency + "channelWidth: " + result[j].channelWidth +
                                    "timestamp" + result[j].timestamp + "capabilities" + result[j].capabilities
                                    + "centerFrequency0: " + result[j].centerFrequency0
                                    + "centerFrequency1: " + result[j].centerFrequency1
                                    + "infoElems: " + result[j].infoElems);
                                }
                            }
                            resolve();
                        });
                });
            }
            await getScanInfos();
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0021
        * @tc.name testgetSignalLevel
        * @tc.desc Test get SignalLevel  API functionality..
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_Sta_0021', 0, function () {
            console.info("[wifi_test] check the 2.4G rssi assgined to level test.");
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-65, 1));
            expect(wifi.getSignalLevel(-65, 1)).assertEqual(4);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-66, 1));
            expect(wifi.getSignalLevel(-66, 1)).assertEqual(3);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-75, 1));
            expect(wifi.getSignalLevel(-75, 1)).assertEqual(3);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-76, 1));
            expect(wifi.getSignalLevel(-76, 1)).assertEqual(2);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-82, 1));
            expect(wifi.getSignalLevel(-82, 1)).assertEqual(2);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-83, 1));
            expect(wifi.getSignalLevel(-83, 1)).assertEqual(1);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-88, 1));
            expect(wifi.getSignalLevel(-88, 1)).assertEqual(1);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-89, 1));
            expect(wifi.getSignalLevel(-89, 1)).assertEqual(0);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-127, 1));
            expect(wifi.getSignalLevel(-127, 1)).assertEqual(0);

            console.info("[wifi_test] check the 5G rssi assgined to level test.");
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-65, 2));
            expect(wifi.getSignalLevel(-65, 2)).assertEqual(4);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-66, 2));
            expect(wifi.getSignalLevel(-66, 2)).assertEqual(3);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-72, 2));
            expect(wifi.getSignalLevel(-72, 2)).assertEqual(3);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-73, 2));
            expect(wifi.getSignalLevel(-73, 2)).assertEqual(2);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-79, 2));
            expect(wifi.getSignalLevel(-79, 2)).assertEqual(2);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-80, 2));
            expect(wifi.getSignalLevel(-80, 2)).assertEqual(1);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-85, 2));
            expect(wifi.getSignalLevel(-85, 2)).assertEqual(1);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-86, 2));
            expect(wifi.getSignalLevel(-86, 2)).assertEqual(0);
            console.info("[wifi_test] getSignalLevel " + wifi.getSignalLevel(-127, 2));
            expect(wifi.getSignalLevel(-127, 2)).assertEqual(0);
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0017
        * @tc.name testgetCountryCode
        * @tc.desc Test getCountryCode API function.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_Sta_0017', 0, function () {
            expect(wifi.isWifiActive()).assertTrue();
            let getCountryCodeResult = wifi.getCountryCode();
            console.info("[wifi_test]getCountryCode :" + JSON.stringify(getCountryCodeResult));
            let countrylenth = getCountryCodeResult.length;
            console.info("[wifi_test]getCountryCode.length :" + JSON.stringify(countrylenth));
            expect(true).assertEqual(countrylenth == 2);
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0020
        * @tc.name testFeatureSupported
        * @tc.desc Test FeatureSupported API function.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_Sta_0020', 0, function () {
            expect(wifi.isWifiActive()).assertTrue();
            let wifiUtils = {
                WIFI_FEATURE_INFRA: 0x0001,
                WIFI_FEATURE_INFRA_5G: 0x0002,
                WIFI_GAS_ANQP: 0x0004,
                WIFI_WIFI_DIRECT: 0x0008,
                WIFI_FEATURE_MOBILE_HOTSPOT: 0x0010,
                WIFI_FEATURE_AWARE: 0x0040,
                WIFI_FEATURE_AP_STA: 0x8000,
                WIFI_FEATURE_WPA3_SAE: 0x8000000,
                WIFI_FEATURE_WPA3_SUITE_B: 0x10000000,
                WIFI_FEATURE_OWE: 0x20000000
            }
            let isSupport1 = wifi.isFeatureSupported(wifiUtils.WIFI_FEATURE_INFRA);
            console.info("[wifi_test] isFeatureSupported -> " + isSupport1);
            let isSupport2 = wifi.isFeatureSupported(wifiUtils.WIFI_FEATURE_INFRA_5G);
            console.info("[wifi_test] isFeatureSupported2 -> " + isSupport2);
            let isSupport3 = wifi.isFeatureSupported(wifiUtils.WIFI_GAS_ANQP);
            console.info("[wifi_test] isFeatureSupported3 -> " + isSupport3);
            let isSupport4 = wifi.isFeatureSupported(wifiUtils.WIFI_WIFI_DIRECT);
            console.info("[wifi_test] isFeatureSupported4 -> " + isSupport4);
            let isSupport5 = wifi.isFeatureSupported(wifiUtils.WIFI_FEATURE_MOBILE_HOTSPOT);
            console.info("[wifi_test] isFeatureSupported5 -> " + isSupport5);
            let isSupport6 = wifi.isFeatureSupported(wifiUtils.WIFI_FEATURE_AWARE);
            console.info("[wifi_test] isFeatureSupported6 -> " + isSupport6);
            let isSupport7 = wifi.isFeatureSupported(wifiUtils.WIFI_FEATURE_AP_STA);
            console.info("[wifi_test] isFeatureSupported7 -> " + isSupport7);
            let isSupport8 = wifi.isFeatureSupported(wifiUtils.WIFI_FEATURE_WPA3_SAE);
            console.info("[wifi_test] isFeatureSupported8 -> " + isSupport8);
            let isSupport9 = wifi.isFeatureSupported(wifiUtils.WIFI_FEATURE_WPA3_SUITE_B);
            console.info("[wifi_test] isFeatureSupported9 -> " + isSupport9);
            let isSupport = wifi.isFeatureSupported(wifiUtils.WIFI_FEATURE_OWE);
            console.info("[wifi_test] isFeatureSupported -> " + isSupport);
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0004
        * @tc.name testgetLinkedInfo
        * @tc.desc Test Test getLinkedInfo and getIpInfo  information.
        * @tc.type Function
        * @tc.level Level 1
        */
        it('SUB_Communication_WiFi_XTS_Sta_0004', 0, async function (done) {
            let isConnectedResult = wifi.isConnected();
            expect(isConnectedResult).assertFalse();
            let ipInfoResult = wifi.getIpInfo();
            expect(JSON.stringify(ipInfoResult)).assertContain("gateway");
            let ipAddress = resolveIP(ipInfoResult.ipAddress);
            console.info("[wifi_test]ipAddress result: " + ipAddress);
            console.info("gateway: " + ipInfoResult.gateway + "ipAddress: " + ipInfoResult.ipAddress
            + "leaseDuration: " + ipInfoResult.leaseDuration +
            "leaseDuration: " + ipInfoResult.leaseDuration +
            "netmask: " + ipInfoResult.netmask + "primaryDns:" + ipInfoResult.primaryDns +
            "secondDns: " + ipInfoResult.secondDns + "serverIp: " + ipInfoResult.serverIp);
            await wifi.getLinkedInfo()
                .then((result) => {
                    console.info("[wifi_test]get wifi link promise:" + JSON.stringify(result));
                    expect(JSON.stringify(result)).assertContain('band');
                    done();
                }).catch((error) => {
                    console.info("[wifi_test]promise then error." + JSON.stringify(error));
                    expect().assertFail();
                });
            wifi.getLinkedInfo(
                (err, result) => {
                    if (err) {
                        console.log("[wifi_test]wifi getLinkedInfo failed " + err);
                    }
                    let clen = Object.keys(result).length;
                    expect(clen).assertLarger(0);
                    console.info("[wifi_test]getLinkedInfo callback result: " + JSON.stringify(result));
                    console.info("ssid: " + result.ssid + "bssid:" + result.bssid + "band: " + result.band +
                    "isHidden: " + result.isHidden + "isRestricted: " + result.isRestricted +
                    "chload: " + result.chload + "rssi " + result.rssi + "netWorkId: " + result.netWorkId +
                    "linkSpeed: " + result.linkSpeed + "frequency:"
                    + result.frequency + "snr:" + result.snr +
                    "macAddress: " + result.macAddress + "ipAddress: " + result.ipAddress +
                    "suppState: " + result.suppState + "connState: " + result.connState
                    + "macType: " + result.macType);
                    let state = wifi.getLinkedInfo().ConnState;
                    if (state == connState.SCANNING) {
                        expect(true).assertEqual(state == 0);
                    }
                    if (state == connState.CONNECTING) {
                        expect(true).assertEqual(state == 1);
                    }
                    if (state == connState.AUTHENTICATING) {
                        expect(true).assertEqual(state == 2);
                    }
                    if (state == connState.OBTAINING_IPADDR) {
                        expect(true).assertEqual(state == 3);
                    }
                    if (state == connState.CONNECTED) {
                        expect(true).assertEqual(state == 4);
                    }
                    if (state == connState.DISCONNECTING) {
                        expect(true).assertEqual(state == 5);
                    }
                    if (state == connState.DISCONNECTED) {
                        expect(true).assertEqual(state == 6);
                    }
                    if (state == connState.UNKNOWN) {
                        expect(true).assertEqual(state == 7);
                    }
                    done();
                });
            })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0034
        * @tc.name testgetScanInfosSync
        * @tc.desc Test getScanInfos Sync API functionality.
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_Sta_0034', 0, async function (done) {
            let getScanInfosResult = wifi.getScanInfosSync();
            console.info("[wifi_test]wifi get to ScanInfosSync  result : " + JSON.stringify(getScanInfosResult));
            let scanInfolenth = Object.keys(getScanInfosResult).length;
            console.info("[wifi_test]wifi ScanInfosSync length  result : " + JSON.stringify(scanInfolenth));
            expect(scanInfolenth).assertLarger(0);
            done();
        })
        console.log("*************[wifi_test] start wifi js unit test end*************");
        })
}
