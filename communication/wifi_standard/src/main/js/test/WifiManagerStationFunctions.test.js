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

import wifiMg from '@ohos.wifiManager'
import osaccount from '@ohos.account.osAccount'
import bundle from '@ohos.bundle'
import abilityAccessCtrl from '@ohos.abilityAccessCtrl'

function sleep(delay) {
    return new Promise(resovle => setTimeout(resovle, delay))
}

function checkWifiPowerOn(){
    console.info("[wifi_test]wifi status:" + wifiMg.isWifiActive());
}

function resolveIP(ip) {
    return (ip>>24 & 0xFF) + "." + (ip>>16 & 0xFF) + "." + (ip>>8 & 0xFF) + "." + (ip & 0xFF);
}

async function applyPermission() {
    let osAccountManager = osaccount.getAccountManager();
    console.info("=== getAccountManager finish");
    let localId = await osAccountManager.getOsAccountLocalIdFromProcess();
    console.info("LocalId is :" + localId);
    let appInfo = await bundle.getApplicationInfo('ohos.acts.communication.wifi.wifidevice', 0, localId);
    let atManager = abilityAccessCtrl.createAtManager();
    if (atManager != null) {
        let tokenID = appInfo.accessTokenId;
        console.info('[permission] case accessTokenID is ' + tokenID);
        let permissionName1 = 'ohos.permission.LOCATION';
        await atManager.grantUserGrantedPermission(tokenID, permissionName1, 1).then((result) => {
            console.info('[permission] case grantUserGrantedPermission success :' + JSON.stringify(result));
        }).catch((err) => {
            console.info('[permission] case grantUserGrantedPermission failed :' + JSON.stringify(err));
        });
    } else {
        console.info('[permission] case apply permission failed, createAtManager failed');
    }
}

let wifiChannelWidth = {
    WIDTH_20MHZ : 0,
    WIDTH_40MHZ : 1,
    WIDTH_80MHZ : 2,
    WIDTH_160MHZ : 3,
    WIDTH_80MHZ_PLUS : 4,
    WIDTH_INVALID:null,
}

export default function actsWifiManagerFunctionsTest() {
    describe('actsWifiManagerFunctionsTest', function() {
        beforeAll(async function (done) {
            console.info('beforeAll case');
            await applyPermission();
            done();
        })

        beforeEach(function () {
            checkWifiPowerOn();
        })
        afterEach(function () {
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0002
        * @tc.name testgetScanResults
        * @tc.desc Test getScanResults promise and callback API functionality.
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_Sta_0002', 0, async function (done) {
            let scanResult = wifiMg.scan();
            await sleep(3000);
            await wifiMg.getScanResults()
                .then(result => {
                    let clen = Object.keys(result).length;
                    expect(true).assertEqual(clen >= 0);
                    console.info("[wifi_test]getScanInfos promise result:" + JSON.stringify(result));
                });
            function getScan() {
                return new Promise((resolve, reject) => {
                    wifiMg.getScanResults(
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
                                    + "eid: " + result[j].infoElems.eid + "content: " + result[j].infoElems.content);
                                }
                            }
                            resolve();
                        });
                });
            }
            await getScan();
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0021
        * @tc.name testGetSignalLevel
        * @tc.desc Test getSignalLevel API functionality..
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_Sta_0021', 0, function () {
            console.info("[wifi_test] check the 2.4G rssi assgined to level test.");
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-65, 1));
            expect(wifiMg.getSignalLevel(-65, 1)).assertEqual(4);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-66, 1));
            expect(wifiMg.getSignalLevel(-66, 1)).assertEqual(3);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-75, 1));
            expect(wifiMg.getSignalLevel(-75, 1)).assertEqual(3);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-76, 1));
            expect(wifiMg.getSignalLevel(-76, 1)).assertEqual(2);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-82, 1));
            expect(wifiMg.getSignalLevel(-82, 1)).assertEqual(2);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-83, 1));
            expect(wifiMg.getSignalLevel(-83, 1)).assertEqual(1);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-88, 1));
            expect(wifiMg.getSignalLevel(-88, 1)).assertEqual(1);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-89, 1));
            expect(wifiMg.getSignalLevel(-89, 1)).assertEqual(0);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-127, 1));
            expect(wifiMg.getSignalLevel(-127, 1)).assertEqual(0);

            console.info("[wifi_test] check the 5G rssi assgined to level test.");
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-65, 2));
            expect(wifiMg.getSignalLevel(-65, 2)).assertEqual(4);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-66, 2));
            expect(wifiMg.getSignalLevel(-66, 2)).assertEqual(3);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-72, 2));
            expect(wifiMg.getSignalLevel(-72, 2)).assertEqual(3);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-73, 2));
            expect(wifiMg.getSignalLevel(-73, 2)).assertEqual(2);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-79, 2));
            expect(wifiMg.getSignalLevel(-79, 2)).assertEqual(2);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-80, 2));
            expect(wifiMg.getSignalLevel(-80, 2)).assertEqual(1);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-85, 2));
            expect(wifiMg.getSignalLevel(-85, 2)).assertEqual(1);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-86, 2));
            expect(wifiMg.getSignalLevel(-86, 2)).assertEqual(0);
            console.info("[wifi_test] getSignalLevel " + wifiMg.getSignalLevel(-127, 2));
            expect(wifiMg.getSignalLevel(-127, 2)).assertEqual(0);
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0017
        * @tc.name testgetCountryCode
        * @tc.desc Test getCountryCode API function.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_Sta_0017', 0, function () {
            expect(wifiMg.isWifiActive()).assertTrue();
            let getCountryCodeResult = wifiMg.getCountryCode();
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
            expect(wifiMg.isWifiActive()).assertTrue();
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
            let isSupport1 = wifiMg.isFeatureSupported(wifiUtils.WIFI_FEATURE_INFRA);
            console.info("[wifi_test] isFeatureSupported -> " + isSupport1);
            let isSupport2 = wifiMg.isFeatureSupported(wifiUtils.WIFI_FEATURE_INFRA_5G);
            console.info("[wifi_test] isFeatureSupported2 -> " + isSupport2);
            let isSupport3 = wifiMg.isFeatureSupported(wifiUtils.WIFI_GAS_ANQP);
            console.info("[wifi_test] isFeatureSupported3 -> " + isSupport3);
            let isSupport4 = wifiMg.isFeatureSupported(wifiUtils.WIFI_WIFI_DIRECT);
            console.info("[wifi_test] isFeatureSupported4 -> " + isSupport4);
            let isSupport5 = wifiMg.isFeatureSupported(wifiUtils.WIFI_FEATURE_MOBILE_HOTSPOT);
            console.info("[wifi_test] isFeatureSupported5 -> " + isSupport5);
            let isSupport6 = wifiMg.isFeatureSupported(wifiUtils.WIFI_FEATURE_AWARE);
            console.info("[wifi_test] isFeatureSupported6 -> " + isSupport6);
            let isSupport7 = wifiMg.isFeatureSupported(wifiUtils.WIFI_FEATURE_AP_STA);
            console.info("[wifi_test] isFeatureSupported7 -> " + isSupport7);
            let isSupport8 = wifiMg.isFeatureSupported(wifiUtils.WIFI_FEATURE_WPA3_SAE);
            console.info("[wifi_test] isFeatureSupported8 -> " + isSupport8);
            let isSupport9 = wifiMg.isFeatureSupported(wifiUtils.WIFI_FEATURE_WPA3_SUITE_B);
            console.info("[wifi_test] isFeatureSupported9 -> " + isSupport9);
            let isSupport = wifiMg.isFeatureSupported(wifiUtils.WIFI_FEATURE_OWE);
            console.info("[wifi_test] isFeatureSupported -> " + isSupport);
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0004
        * @tc.name testGetLinkedInfo
        * @tc.desc Test Test getLinkedInfo and getIpInfo  information.
        * @tc.type Function
        * @tc.level Level 1
        */
        it('SUB_Communication_WiFi_XTS_Sta_0004', 0, async function (done) {
            let isConnectedResult = wifiMg.isConnected();
            let ipInfoResult = wifiMg.getIpInfo();
            expect(JSON.stringify(ipInfoResult)).assertContain("gateway");
            let ipAddress = resolveIP(ipInfoResult.ipAddress);
            console.info("[wifi_test]ipAddress result: " + ipAddress);
            console.info("gateway: " + ipInfoResult.gateway + "ipAddress: " + ipInfoResult.ipAddress
            + "leaseDuration: " + ipInfoResult.leaseDuration +
            "leaseDuration: " + ipInfoResult.leaseDuration +
            "netmask: " + ipInfoResult.netmask + "primaryDns:" + ipInfoResult.primaryDns +
            "secondDns: " + ipInfoResult.secondDns + "serverIp: " + ipInfoResult.serverIp);
            await wifiMg.getLinkedInfo()
                .then((result) => {
                    console.info("[wifi_test]get wifi link promise:" + JSON.stringify(result));
                    done();
                }).catch((error) => {
                    console.info("[wifi_test]promise then error." + JSON.stringify(error));
                    expect().assertFail();
                });

            function getLinked(){
                return new Promise((resolve, reject) => {
                    wifiMg.getLinkedInfo(
                        (err, result) => {
                            if(err) {
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
                            let state = wifiMg.getLinkedInfo().ConnState;
                            if (state == wifiMg.ConnState.SCANNING) {
                                expect(true).assertEqual(state == 0);
                            }
                            if (state == wifiMg.ConnState.CONNECTING) {
                                expect(true).assertEqual(state == 1);
                            }
                            if (state == wifiMg.ConnState.AUTHENTICATING) {
                                expect(true).assertEqual(state == 2);
                            }
                            if (state == wifiMg.ConnState.OBTAINING_IPADDR) {
                                expect(true).assertEqual(state == 3);
                            }
                            if (state == wifiMg.ConnState.CONNECTED) {
                                expect(true).assertEqual(state == 4);
                            }
                            if (state == wifiMg.ConnState.DISCONNECTING) {
                                expect(true).assertEqual(state == 5);
                            }
                            if (state == wifiMg.ConnState.DISCONNECTED) {
                                expect(true).assertEqual(state == 6);
                            }
                            if (state == wifiMg.ConnState.UNKNOWN) {
                                expect(true).assertEqual(state == 7);
                            }
                            resolve();
                        });
                });
            }
            await getLinked();
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_Sta_0034
        * @tc.name testgetScanResultsSync
        * @tc.desc Test getScanResults Sync API functionality.
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_Sta_0034', 0, async function (done) {
            let getScanResultsResult = wifiMg.getScanResultsSync();
            console.info("[wifi_test]wifi getScanResultsSync  result : " + JSON.stringify(getScanResultsResult));
            let scanInfolenth = Object.keys(getScanResultsResult).length;
            console.info("[wifi_test]wifi ScanInfosSync length  result : " + JSON.stringify(scanInfolenth));
            expect(true).assertEqual(scanInfolenth >= 0);
            done();
        })
        console.log("*************[wifi_test] start wifi js unit test end*************");
    })
}


