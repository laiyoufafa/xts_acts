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
    console.info("wifi_test/wifi status:" + wifi.isWifiActive());
}

let GroupOwnerBand = {
    GO_BAND_AUTO : 0,
    GO_BAND_2GHZ : 1,
    GO_BAND_5GHZ : 2,
}

export default function actsWifiFunctionTest() {
    describe('actsWifiFunctionTest', function () {
        beforeEach(function () {
            console.info("beforeEach start" );
            checkWifiPowerOn();
        })
        afterEach(async function () {
            console.info("afterEach start" );
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0003
        * @tc.name testcreateGroup
        * @tc.desc Test createGroup and getCurrentGroup  infos
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_P2P_0003', 0, async function(done) {
            let WifiP2PConfig = {
                deviceAddress : "00:00:00:00:00:00",
                netId : -1,
                passphrase : "12345678",
                groupName : "AAAZZZ123",
                goBand : 0
            };
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let addConfig = wifi.createGroup(WifiP2PConfig);
            console.log("[wifi_test]  check the state of wifi: " + JSON.stringify(addConfig));
            await sleep(2000);
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    expect(true).assertEqual(resultLength!=0);
                });
            wifi.getCurrentGroup(
                (err, result) => {
                    if (err) {
                        console.error('wifi_test / failed to get getCurrentGroup: ' + JSON.stringify(err));
                        expect().assertFail();
                    }else{
                        console.info("[wifi_test] getCurrentGroup [callback] -> " + JSON.stringify(result));
                        console.info("isP2pGo: " + result.isP2pGo +
                        "deviceName: " + result.ownerInfo.deviceName +
                        "deviceAddress: " + result.ownerInfo.deviceAddress +
                        "primaryDeviceType: " + result.ownerInfo.primaryDeviceType +
                        "deviceStatus: " + result.ownerInfo.deviceStatus +
                        "groupCapabilitys: " + result.ownerInfo.groupCapabilitys +
                        "passphrase: " + result.passphrase + "interface: "+ result.interface
                        + "groupName: " + result.groupName +
                        "frequency: " + result.frequency + "goIpAddress: " + result.goIpAddress);
                    }
                });
            let removeConfig = wifi.removeGroup();
            expect(removeConfig).assertTrue();
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0004
        * @tc.name testcreateGroup
        * @tc.desc Test set password createGroup API Function.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_P2P_0004', 0, async function (done) {
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let WifiP2PConfig = {
                deviceAddress: "00:00:00:00:00:00",
                netId: -1,
                passphrase: "1234567",
                groupName: "test_pass",
                goBand: 0,
            };
            let addConfig = wifi.createGroup(WifiP2PConfig);
            console.info("[wifi_test] test createGroup end." + JSON.stringify(addConfig));
            await sleep(2000);
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0104
        * @tc.name testcreateGroup
        * @tc.desc Test set password createGroup API Function.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_P2P_0104', 0, async function (done) {
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let WifiP2PConfig1 = {
                deviceAddress: "00:00:00:00:00:00",
                netId: -1,
                passphrase: "123@%abcD",
                groupName: "test_pass1",
                goBand: 0,
            };
            let addConfig1 = wifi.createGroup(WifiP2PConfig1);
            console.info("[wifi_test] test createGroup end." + JSON.stringify(addConfig1));
            await sleep(2000);
            expect(addConfig1).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done()
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0204
        * @tc.name testcreateGroup
        * @tc.desc Test set password createGroup API Function.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_P2P_0204', 0, async function (done) {
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let WifiP2PConfig2 = {
                deviceAddress: "00:00:00:00:00:00",
                netId: -1,
                passphrase: "abc3456789012345678901234567890123456789012345678901234567890123",
                groupName: "test_pass2",
                goBand: 0,
            };
            let addConfig2 = wifi.createGroup(WifiP2PConfig2);
            console.info("[wifi_test] test createGroup end." + JSON.stringify(addConfig2));
            await sleep(2000);
            expect(addConfig2).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done()
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0304
        * @tc.name testcreateGroup
        * @tc.desc Test set password createGroup API Function.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_P2P_0304', 0, async function (done) {
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let WifiP2PConfig3 = {
                deviceAddress: "00:00:00:00:00:00",
                netId: -1,
                passphrase: "abc34567890123456789012345678901234567890123456789012345678901234",
                groupName: "test_pass3",
                goBand: 0,
            };
            let addConfig3 = wifi.createGroup(WifiP2PConfig3);
            console.info("[wifi_test] test createGroup end." + JSON.stringify(addConfig3));
            await sleep(2000);
            expect(addConfig3).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0007
        * @tc.name testsethotspot
        * @tc.desc Test createGroup  band setting infos
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_P2P_0007', 0, async function(done) {
            let WifiP2PConfig2 = {
                deviceAddress : "00:00:00:00:00:00",
                netId : -1,
                passphrase : "12345678",
                groupName : "AAAZZZ123",
                goBand : 1,
            };
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let addConfig = wifi.createGroup(WifiP2PConfig2);
            await sleep(2000);
            console.info("[wifi_test] test createGroup3 result." + addConfig)
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    expect(true).assertEqual(resultLength!=0);
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0107
        * @tc.name testsethotspot
        * @tc.desc Test createGroup  band setting infos
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_P2P_0107', 0, async function(done) {
            let WifiP2PConfig2 = {
                deviceAddress : "00:00:00:00:00:00",
                netId : -1,
                passphrase : "12345678",
                groupName : "AAAZZZ123",
                goBand : 2,
            };
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let addConfig = wifi.createGroup(WifiP2PConfig2);
            await (2000);
            console.info("[wifi_test] test createGroup3 result." + addConfig)
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    expect(true).assertEqual(resultLength!=0);
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0207
        * @tc.name testsethotspot
        * @tc.desc Test createGroup  band setting infos
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_P2P_0207', 0, async function(done) {
            let WifiP2PConfig2 = {
                deviceAddress : "00:00:00:00:00:00",
                netId : -1,
                passphrase : "12345678",
                groupName : "AAAZZZ123",
                goBand : 0,
            };
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let addConfig = wifi.createGroup(WifiP2PConfig2);
            await sleep(2000);
            console.info("[wifi_test] test createGroup3 result." + addConfig)
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    expect(true).assertEqual(resultLength!=0);
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0307
        * @tc.name testsethotspot
        * @tc.desc Test createGroup  band setting infos
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_P2P_0307', 0, async function(done) {
            let WifiP2PConfig2 = {
                deviceAddress : "00:00:00:00:00:00",
                netId : -1,
                passphrase : "12345678",
                groupName : "AAAZZZ123",
                goBand : 3,
            };
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let addConfig = wifi.createGroup(WifiP2PConfig2);
            await sleep(2000);
            console.info("[wifi_test] test createGroup3 result." + addConfig)
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    expect(true).assertEqual(resultLength!=0);
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0008
        * @tc.name testsethotspot
        * @tc.desc Test create P2P error SSID Group  functionality.
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_P2P_0008', 0, async function (done) {
            let GroupOwnerBand = {
                GO_BAND_AUTO: 0,
                GO_BAND_2GHZ: 1,
                GO_BAND_5GHZ: 2,
            }
            let WifiP2PConfig = {
                deviceAddress: "00:00:00:00:00:00",
                netId: -1,
                passphrase: "12345678",
                groupName: "",
                goBand: 0,
            };
            let addConfig = wifi.createGroup(WifiP2PConfig);
            console.info("[wifi_test] test createGroup result:" + JSON.stringify(addConfig));
            await sleep(2000);
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0108
        * @tc.name testsethotspot
        * @tc.desc Test create P2P error SSID Group  functionality.
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_P2P_0108', 0, async function (done) {
            let GroupOwnerBand = {
                GO_BAND_AUTO: 0,
                GO_BAND_2GHZ: 1,
                GO_BAND_5GHZ: 2,
            }
            let WifiP2PConfig = {
                deviceAddress: "00:00:00:00:00:00",
                netId: -1,
                passphrase: "12345678",
                groupName: " ",
                goBand: 0,
            };
            let addConfig = wifi.createGroup(WifiP2PConfig);
            console.info("[wifi_test] test createGroup result:" + JSON.stringify(addConfig));
            await sleep(2000);
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
       * @tc.number SUB_Communication_WiFi_XTS_P2P_0308
       * @tc.name testsethotspot
       * @tc.desc Test create P2P error SSID Group  functionality.
       * @tc.type Function
       * @tc.level Level 0
       */
        it('SUB_Communication_WiFi_XTS_P2P_0308', 0, async function (done) {
            let GroupOwnerBand = {
                GO_BAND_AUTO: 0,
                GO_BAND_2GHZ: 1,
                GO_BAND_5GHZ: 2,
            }
            let WifiP2PConfig = {
                deviceAddress: "00:00:00:00:00:00",
                netId: -1,
                passphrase: " ",
                groupName: "testpassword",
                goBand: 0,
            };
            let addConfig = wifi.createGroup(WifiP2PConfig);
            console.info("[wifi_test] test createGroup result:" + JSON.stringify(addConfig));
            await sleep(2000);
            expect(addConfig).assertTrue();
            await wifi.getCurrentGroup()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getCurrentGroup  [promise] result -> " + JSON.stringify(data));
                    let removeConfig = wifi.removeGroup();
                    expect(removeConfig).assertTrue();
                });
            done();
        })

        /**
    * @tc.number SUB_Communication_WiFi_XTS_P2P_0009
    * @tc.name testp2pCancelConnect
    * @tc.desc Test p2pCancelConnect Group  API functionality.
    * @tc.type Function
    * @tc.level Level 3
    */
        it('SUB_Communication_WiFi_XTS_P2P_0009', 0, async function (done) {
            let WifiP2PConfig = {
                deviceAddress : "00:00:00:00:00:00",
                netId : -1,
                passphrase : "12345678",
                groupName : "AAAZZZ456",
                goBand : 0
            };
            let addConfig = wifi.createGroup(WifiP2PConfig);
            console.info("[wifi_test] test p2pConnect result." + addConfig);
            let disConn = wifi.p2pCancelConnect();
            await sleep(2000);
            console.info("[wifi_test] test p2pCancelConnect result." + disConn);
            expect(disConn).assertTrue();
            let removeConfig = wifi.removeGroup();
            console.info("[wifi_test] test start removeGroup:" + removeConfig);
            expect(removeConfig).assertTrue();
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0011
        * @tc.name testremoveGroup
        * @tc.desc Test remove error Group functionality.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_P2P_0011', 0, async function (done) {
            let isRemoved = wifi.removeGroup(10000);
            console.info("[wifi_test]removeGroup(10000) result : " + JSON.stringify(isRemoved));
            expect(isRemoved).assertTrue();
            done();
        })

        /**
        * @tc.number     SUB_Communication_WiFi_XTS_P2P_0002
        * @tc.name       testP2pLocalDevice
        * @tc.desc       Test get TO P2pLocalDevice API functionality.
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_XTS_P2P_0002', 0, async function (done) {
            await wifi.getP2pLocalDevice()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getP2pLocalDevice  [promise] result :" + JSON.stringify(data));
                    expect(true).assertEqual(resultLength >= 0);
                }).catch((error) => {
                    console.info("[wifi_test]getP2pLocalDevice promise error." + JSON.stringify(error));
                    expect().assertFail();
                });
            function getP2pLocal(){
                return new Promise((resolve, reject) => {
                    wifi.getP2pLocalDevice(
                        (err, ret) => {
                            if(err) {
                                console.info("[wifi_test]getP2pLocalDevice callback failed : " + JSON.stringify(err));
                                return;
                            }
                            console.info("[wifi_test] getP2pLocalDevice callback result: " + JSON.stringify(ret));
                            console.info("deviceName: " + ret.deviceName + "deviceAddress: " +
                            ret.deviceAddress + "primaryDeviceType: " + ret.primaryDeviceType +
                            "deviceStatus: " + ret.deviceStatus + "groupCapabilitys: " +
                            ret.groupCapabilitys );
                            resolve();
                        });
                });
            }
            await getP2pLocal();
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0010
        * @tc.name testgetP2pLinkedInfo
        * @tc.desc Test Test getP2pLinkedInfo  infos
        * @tc.type Function
        * @tc.level Level 2
        */
        it('SUB_Communication_WiFi_XTS_P2P_0010', 0, async function(done) {
            let P2pConnectState = {
                DISCONNECTED :0,
                CONNECTED : 1,
            };
            await wifi.getP2pLinkedInfo()
                .then(data => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getP2pLinkedInfo  [promise] result -> " + JSON.stringify(data));
                    expect(true).assertEqual(resultLength!=0);
                    done()
                });
            function getP2pInfo(){
                return new Promise((resolve, reject) => {
                    wifi.getP2pLinkedInfo(
                        (err, result) => {
                            if(err) {
                                console.info("[wifi_test]failed to getP2pLinkedInfo callback" + JSON.stringify(err));
                                return;
                            }
                            let resultLength = Object.keys(result).length;
                            console.info("[wifi_test] getP2pLinkedInfo [callback] -> " + JSON.stringify(resultLength));
                            console.info("connectState: " + result.connectState +
                            "isGroupOwner: " + result.isGroupOwner +
                            "groupOwnerAddr: " + result.groupOwnerAddr);
                            expect(true).assertEqual(resultLength!=0);
                            resolve();
                        });
                });
            }
            await getP2pInfo();
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0001
        * @tc.name testgetP2pPeerDevices
        * @tc.desc Test getP2pPeerDevices promise infos
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_P2P_0001', 0, async function(done){
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let scanConfig = wifi.startDiscoverDevices();
            await sleep(2000);
            expect(scanConfig).assertTrue();
            await wifi.getP2pPeerDevices()
                .then((data)  => {
                    let resultLength = Object.keys(data).length;
                    console.info("[wifi_test] getP2pPeerDevices  [promise] result -> " + JSON.stringify(data));
                    expect(true).assertEqual(resultLength >= 0);
                }).catch((error) => {
                    console.info("[wifi_test]getP2pPeerDevices promise then error." + JSON.stringify(error));
                    expect().assertFail();
                });
            let stopScan = wifi.stopDiscoverDevices();
            console.info("[wifi_test] test stopDiscoverDevices result." + stopScan);
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_XTS_P2P_0101
        * @tc.name testgetP2pPeerDevices
        * @tc.desc Test getP2pPeerDevices callback infos
        * @tc.type Function
        * @tc.level Level 0
        */
        it('SUB_Communication_WiFi_XTS_P2P_0101', 0, async function(done){
            let P2pDeviceStatus = {
                CONNECTED : 0,
                INVITED : 1,
                FAILED : 2,
                AVAILABLE : 3,
                UNAVAILABLE : 4,
            };
            console.log("[wifi_test]  check the state of wifi: " + wifi.isWifiActive());
            expect(wifi.isWifiActive()).assertTrue();
            let scanConfig = wifi.startDiscoverDevices();
            await sleep(2000);
            expect(scanConfig).assertTrue();
            await wifi.getP2pPeerDevices((err, result) => {
                if (err) {
                    console.error('failed to getP2pPeerDevices infos callback because ' + JSON.stringify(err));
                }else{
                    console.info("[wifi_test] getP2pPeerDevices [callback] -> " + JSON.stringify(result));
                    let len = Object.keys(result).length;
                    for (let j = 0; j < len; ++j) {
                        console.info("deviceName: " + result[j].deviceName +
                        "deviceAddress: " + result[j].deviceAddress +
                        "primaryDeviceType: " + result[j].primaryDeviceType +
                        "deviceStatus: " + result[j].deviceStatus +
                        "groupCapabilitys: " + result[j].groupCapabilitys );
                        if(result[j].deviceStatus ==P2pDeviceStatus.UNAVAILABLE){
                            console.info("deviceStatus: " + result[j].deviceStatus);
                        }
                        if(result[j].deviceStatus ==P2pDeviceStatus.CONNECTED){
                            console.info("deviceStatus: " + result[j].deviceStatus);
                        }
                        if(result[j].deviceStatus ==P2pDeviceStatus.INVITED){
                            console.info("deviceStatus: " + result[j].deviceStatus);
                        }
                        if(result[j].deviceStatus ==P2pDeviceStatus.FAILED){
                            console.info("deviceStatus: " + result[j].deviceStatus);
                        }
                        if(result[j].deviceStatus ==P2pDeviceStatus.AVAILABLE){
                            console.info("deviceStatus: " + result[j].deviceStatus);
                        }
                    }
                    let stopScan = wifi.stopDiscoverDevices();
                    expect(stopScan).assertTrue();
                }
                done();
            });
        })

        /**
        * @tc.number SUB_Communication_WiFi_Event_Test_0008
        * @tc.name testp2pStateChange
        * @tc.desc Test p2pStateChange callback
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_Event_Test_0008', 0, async function (done) {
            await wifi.on('p2pStateChange', result => {
                console.info("onP2pStateChange callback, result:" + JSON.stringify(result));
                expect(true).assertEqual(result !=null);
                done();
            });
            setTimeout(function() {
                wifi.off('p2pStateChange', result => {
                    console.info("offP2pStateChange callback, result:  " + JSON.stringify(result));
                    expect(true).assertEqual(result !=null);
                });
            }, 1 * 1000);
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_Event_Test_0009
        * @tc.name testp2pConnectionChange
        * @tc.desc Test p2pConnectionChange callback
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_Event_Test_0009', 0, async function (done) {
            await wifi.on('p2pConnectionChange', recvP2pConnectionChangeFunc =>  {
                console.info("[wifi_test] p2pConnectionChange result -> " + recvP2pConnectionChangeFunc);
                expect(true).assertEqual(recvP2pConnectionChangeFunc !=null);
                done();
            });
            setTimeout(function() {
                console.info('[wifi_test] offP2pStateChange test start ...');
                wifi.off('p2pConnectionChange', recvP2pConnectionChangeFunc => {
                    console.info("p2pConnectionChange callback" + JSON.stringify(recvP2pConnectionChangeFunc));
                    expect(true).assertEqual(recvP2pConnectionChangeFunc !=null);
                });
            }, 1 * 1000);
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_Event_Test_0012
        * @tc.name testp2pDeviceChange
        * @tc.desc Test p2pDeviceChange callback
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_Event_Test_0012', 0, async function (done) {
            console.info('[wifi_test] Onp2pDeviceChange test start ...');
            await wifi.on('p2pDeviceChange', result => {
                console.info("onP2pDeviceChange callback, result:" + JSON.stringify(result));
                expect(true).assertEqual(result !=null);
                done();
            });
            setTimeout(function() {
                console.info('[wifi_test] offP2pDeviceChange test start ...');
                wifi.off('p2pDeviceChange', result => {
                    console.info("offP2pStateChange callback, result:  " + JSON.stringify(result));
                    expect(true).assertEqual(result !=null);
                });
            }, 1 * 1000);
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_Event_Test_0010
        * @tc.name testp2pDeviceChange
        * @tc.desc Test p2pDeviceChange callback
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_Event_Test_0010', 0, async function (done) {
            let recvP2pPeerDeviceChangeFunc = result => {
                console.info("wifi_test / p2p peer device change receive event: " + JSON.stringify(result));
                wifi.getP2pDevices((err, data) => {
                    if (err) {
                        console.error('wifi_test / failed to get getP2pDevices: ' + JSON.stringify(err));
                        return;
                    }
                    console.info("wifi_test / getP2pDevices [callback] -> " + JSON.stringify(data));
                    let len = Object.keys(data).length;
                    console.log("getP2pDevices number: " + len);
                    for (let i = 0; i < len; ++i) {
                        if (data[i].deviceName === "GRE") {
                            console.info("wifi_test / p2pConnect: -> " + data[i].deviceAddress);
                            let config = {
                                "deviceAddress":data[i].deviceAddress,
                                "netId":-1,
                                "passphrase":"",
                                "groupName":"",
                                "goBand":0,
                            }
                            wifi.p2pConnect(config);
                        }
                    }
                });
            }
            await wifi.on('p2pPeerDeviceChange', result => {
                console.info("onP2pPeerDeviceChange callback, result:" + JSON.stringify(result));
                expect(true).assertEqual(result !=null);
                done();
            });
            setTimeout(function() {
                wifi.off('p2pPeerDeviceChange', result => {
                    console.info("offP2pPeerDeviceChange callback, result:  " + JSON.stringify(result));
                    expect(true).assertEqual(result !=null);
                });
            }, 1 * 1000);
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_Event_Test_0013
        * @tc.name testp2pPersistentGroupChange
        * @tc.desc Test p2pPersistentGroupChange callback
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_Event_Test_0013', 0, async function (done) {
            let recvP2pPersistentGroupChangeFunc = () => {
                console.info("wifi_test / p2p persistent group change receive event");
                let config = {
                    "deviceAddress" : "02:11:65:f2:0d:6e",
                    "netId":-2,
                    "passphrase":"",
                    "groupName":"",
                    "goBand":0,
                };
                let addConfig = wifi.createGroup(config);
                expect(addConfig).assertTrue();
                wifi.getCurrentGroup((err, data) => {
                    if (err) {
                        console.error('wifi_test / failed to get getCurrentGroup: ' + JSON.stringify(err));
                        return;
                    }
                    console.info("wifi_test / get getCurrentGroup [callback] -> " + JSON.stringify(data));
                });
            };
            wifi.on("p2pPersistentGroupChange",recvP2pPersistentGroupChangeFunc);
            setTimeout(async function() {
                wifi.off('p2pPersistentGroupChange', result => {
                    console.info("offP2pPersistentGroupChange callback, result:  " + JSON.stringify(result));
                    expect(true).assertEqual(result !=null);
                });
            }, 1 * 1000);
            done();
        })

        /**
        * @tc.number SUB_Communication_WiFi_Event_Test_0011
        * @tc.name testpp2pDiscoveryChange
        * @tc.desc Test p2pDiscoveryChange callback
        * @tc.type Function
        * @tc.level Level 3
        */
        it('SUB_Communication_WiFi_Event_Test_0011', 0, async function (done) {
            await wifi.on('p2pDiscoveryChange', result => {
                console.info("onp2pDiscoveryChange callback, result:" + JSON.stringify(result));
                expect(true).assertEqual((result !=null));
                done();
            });
            setTimeout(function() {
                wifi.off('p2pDiscoveryChange', result => {
                    console.info("offp2pDiscoveryChange callback, result:  " + JSON.stringify(result));
                    expect(true).assertEqual(result !=null);
                });
            }, 1 * 1000);
            done();
        })
        console.log("*************[wifi_test] start wifi js unit test end*************");
    })
}





