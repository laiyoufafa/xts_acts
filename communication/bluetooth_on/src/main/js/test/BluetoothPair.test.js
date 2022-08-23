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

import bluetooth from '@ohos.bluetooth';
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'


export default function bluetoothhostTest2() {
describe('bluetoothhostTest2', function() {
    function sleep(delay) {
        return new Promise(resovle => setTimeout(resovle, delay))
    }

    async function tryToEnableBt() {
        let sta = bluetooth.getState();
        switch(sta){
            case 0:
                bluetooth.enableBluetooth();
                await sleep(5000);
                let sta1 = bluetooth.getState();
                console.info('[bluetooth_js] bt turn off:'+ JSON.stringify(sta1));
                break;
            case 1:
                console.info('[bluetooth_js] bt turning on:'+ JSON.stringify(sta));
                await sleep(3000);
                break;
            case 2:
                console.info('[bluetooth_js] bt turn on:'+ JSON.stringify(sta));
                break;
            case 3:
                bluetooth.enableBluetooth();
                await sleep(3000);
                let sta2 = bluetooth.getState();
                console.info('[bluetooth_js] bt turning off:'+ JSON.stringify(sta2));
                break;
            default:
                console.info('[bluetooth_js] enable success');
        }
    }
    beforeAll(function () {
        console.info('beforeAll called')
    })
    beforeEach(async function(done) {
        console.info('beforeEach called')
        await tryToEnableBt()
        done()
    })
    afterEach(function () {
        console.info('afterEach called')
    })
    afterAll(function () {
        console.info('afterAll called')
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0200
     * @tc.name testStartpair
     * @tc.desc Test pairDevice of use vailded address.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 0
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0200', 0, async function (done) {
        function PinRequiredParam(data) {
            console.info("[bluetooth_js] pinRequired on:" + JSON.stringify(data));
            bluetooth.setDevicePairingConfirmation(data.deviceId,false);
        }
        bluetooth.BLE.on('pinRequired', PinRequiredParam);
        let result = bluetooth.pairDevice("SSS");
        console.info("[bluetooth_js] onStartpair -> " + JSON.stringify(result));
        expect(result).assertFalse();
        bluetooth.BLE.off('pinRequired', PinRequiredParam);
        done();
    })
  
    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0300
     * @tc.name test getRemoteDeviceName
     * @tc.desc Test get RemoteDeviceName
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0300', 0, async function (done) {
        let ret = bluetooth.getRemoteDeviceName("00:00:00:00:00:00");
        console.info('[bluetooth_js] getRemoteDeviceName ret2:' + JSON.stringify(ret));
        expect(ret.length).assertEqual(0);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0400
     * @tc.name test getRemoteDeviceClass
     * @tc.desc Test get RemoteDeviceClass
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 1
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0400', 0, async function (done) {
        let MajorMinorClass = {
            COMPUTER_UNCATEGORIZED : 0x0100,COMPUTER_DESKTOP : 0x0104,
            COMPUTER_SERVER : 0x0108,COMPUTER_LAPTOP : 0x010C,
            COMPUTER_HANDHELD_PC_PDA : 0x0110,COMPUTER_PALM_SIZE_PC_PDA : 0x0114,
            COMPUTER_WEARABLE : 0x0118,COMPUTER_TABLET : 0x011C,
            PHONE_UNCATEGORIZED : 0x0200,PHONE_CELLULAR : 0x0204,
            PHONE_CORDLESS : 0x0208,PHONE_SMART : 0x020C,
            PHONE_MODEM_OR_GATEWAY : 0x0210,PHONE_ISDN : 0x0214,
            NETWORK_FULLY_AVAILABLE : 0x0300,NETWORK_1_TO_17_UTILIZED : 0x0320,
            NETWORK_17_TO_33_UTILIZED : 0x0340,NETWORK_33_TO_50_UTILIZED : 0x0360,
            NETWORK_60_TO_67_UTILIZED : 0x0380,NETWORK_67_TO_83_UTILIZED : 0x03A0,
            NETWORK_83_TO_99_UTILIZED : 0x03C0,NETWORK_NO_SERVICE : 0x03E0,
            AUDIO_VIDEO_UNCATEGORIZED : 0x0400,AUDIO_VIDEO_WEARABLE_HEADSET: 0x0404,
            AUDIO_VIDEO_HANDSFREE : 0x0408,AUDIO_VIDEO_MICROPHONE : 0x0410,
            AUDIO_VIDEO_LOUDSPEAKER : 0x0414,AUDIO_VIDEO_HEADPHONES : 0x0418,
            AUDIO_VIDEO_PORTABLE_AUDIO : 0x041C,AUDIO_VIDEO_CAR_AUDIO : 0x0420,
            AUDIO_VIDEO_SET_TOP_BOX : 0x0424,AUDIO_VIDEO_HIFI_AUDIO : 0x0428,
            AUDIO_VIDEO_VCR : 0x042C,AUDIO_VIDEO_VIDEO_CAMERA : 0x0430,
            AUDIO_VIDEO_CAMCORDER : 0x0434,AUDIO_VIDEO_VIDEO_MONITOR : 0x0438,
            AUDIO_VIDEO_VIDEO_DISPLAY_AND_LOUDSPEAKER : 0x043C,
            AUDIO_VIDEO_VIDEO_CONFERENCING : 0x0440,AUDIO_VIDEO_VIDEO_GAMING_TOY: 0x0448,
            PERIPHERAL_NON_KEYBOARD_NON_POINTING : 0x0500,
            PERIPHERAL_KEYBOARD : 0x0540,PERIPHERAL_POINTING_DEVICE : 0x0580,
            PERIPHERAL_KEYBOARD_POINTING : 0x05C0,PERIPHERAL_UNCATEGORIZED : 0x0500,
            PERIPHERAL_JOYSTICK : 0x0504,PERIPHERAL_GAMEPAD : 0x0508,
            PERIPHERAL_REMOTE_CONTROL : 0x05C0,PERIPHERAL_SENSING_DEVICE : 0x0510,
            PERIPHERAL_DIGITIZER_TABLET : 0x0514,
            PERIPHERAL_CARD_READER : 0x0518,PERIPHERAL_DIGITAL_PEN : 0x051C,
            PERIPHERAL_SCANNER_RFID : 0x0520,PERIPHERAL_GESTURAL_INPUT : 0x0522,
            IMAGING_UNCATEGORIZED : 0x0600,IMAGING_DISPLAY : 0x0610,
            IMAGING_CAMERA : 0x0620,IMAGING_SCANNER : 0x0640,
            IMAGING_PRINTER : 0x0680,WEARABLE_UNCATEGORIZED : 0x0700,
            WEARABLE_WRIST_WATCH : 0x0704,WEARABLE_PAGER : 0x0708,
            WEARABLE_JACKET : 0x070C,WEARABLE_HELMET : 0x0710,
            WEARABLE_GLASSES : 0x0714,TOY_UNCATEGORIZED : 0x0800,
            TOY_ROBOT : 0x0804,TOY_VEHICLE : 0x0808,
            TOY_DOLL_ACTION_FIGURE : 0x080C,TOY_CONTROLLER : 0x0810,
            TOY_GAME : 0x0814,HEALTH_UNCATEGORIZED : 0x0900,
            HEALTH_BLOOD_PRESSURE : 0x0904,HEALTH_THERMOMETER : 0x0908,
            HEALTH_WEIGHING : 0x090C,HEALTH_GLUCOSE : 0x0910,
            HEALTH_PULSE_OXIMETER : 0x0914,HEALTH_PULSE_RATE : 0x0918,
            HEALTH_DATA_DISPLAY : 0x091C,HEALTH_STEP_COUNTER : 0x0920,
            HEALTH_BODY_COMPOSITION_ANALYZER : 0x0924,
            HEALTH_PEAK_FLOW_MOITOR : 0x0928,HEALTH_MEDICATION_MONITOR : 0x092C,
            HEALTH_KNEE_PROSTHESIS : 0x0930,HEALTH_ANKLE_PROSTHESIS : 0x0934,
            HEALTH_GENERIC_HEALTH_MANAGER : 0x0938,
            HEALTH_PERSONAL_MOBILITY_DEVICE : 0x093C,
            HEALTH_PERSONAL_MOBILITY_DEVICE : 0x093C
        };
        let MajorClass = {
            MAJOR_MISC : 0x0000,MAJOR_COMPUTER : 0x0100,
            MAJOR_PHONE : 0x0200,MAJOR_NETWORKING : 0x0300,
            MAJOR_AUDIO_VIDEO: 0x0400,MAJOR_PERIPHERAL : 0x0500,
            MAJOR_IMAGING : 0x0600,MAJOR_WEARABLE : 0x0700,
            MAJOR_TOY : 0x0800,MAJOR_HEALTH : 0x0900,
            MAJOR_UNCATEGORIZED : 0x1F00
        }; 
        let DeviceClass = bluetooth.getRemoteDeviceClass("00:00:00:00:00:00");
        console.info('[bluetooth_js] getRemoteDeviceClass ret2 :' + JSON.stringify(DeviceClass) 
        + 'majorClass:' +DeviceClass.majorClass + 'majorMinorClass:'+ DeviceClass.majorMinorClass 
        + 'classOfDevice:' + DeviceClass.classOfDevice);
        expect(DeviceClass.majorClass).assertEqual(0);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0500
     * @tc.name test getRemoteDeviceClass
     * @tc.desc Test get getRemoteDeviceClass
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0500', 0, async function (done) {
        let ret = bluetooth.getRemoteDeviceName("1125445");
        console.info('[bluetooth_js] getRemoteDeviceName ret2:' + JSON.stringify(ret));
        expect(ret.length).assertEqual(0);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0600
     * @tc.name test getPairedDevices
     * @tc.desc Test get getPairedDevices
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0600', 0, async function (done) {
        let ret = bluetooth.getPairedDevices();
        console.info('[bluetooth_js] getPairedDevices ret2:' + JSON.stringify(ret));
        expect(ret.length).assertEqual(0);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0700
     * @tc.name test pinRequired
     * @tc.desc Test pinRequired and setDevicePairing false
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0700', 0, async function (done) {
        function PinRequiredParam(data) {
            console.info("[bluetooth_js] pinRequired on:" + JSON.stringify(data));
            bluetooth.setDevicePairingConfirmation(data.deviceId,false);
        }
        bluetooth.BLE.on('pinRequired', PinRequiredParam);
        let result = bluetooth.pairDevice("00:00:00:00:00:00");
        console.info("[bluetooth_js] onStartpair007 -> " + JSON.stringify(result));
        expect(result).assertTrue();
        bluetooth.BLE.off('pinRequired', PinRequiredParam);
        done()
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0800
     * @tc.name test pinRequired
     * @tc.desc Test pinRequired and setDevicePairing true
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_Pair_0800', 0, async function (done) {
        function PinRequiredParam(data) {
            console.info("[bluetooth_js] pinRequired on:" + JSON.stringify(data));
            bluetooth.setDevicePairingConfirmation(data.deviceId,true);
        }
        bluetooth.BLE.on('pinRequired', PinRequiredParam);
        let result = bluetooth.pairDevice("00:00:00:00:00:00");
        console.info("[bluetooth_js] onStartpair008 -> " + JSON.stringify(result));
        expect(result).assertTrue();
        bluetooth.BLE.off('pinRequired', PinRequiredParam);
        done()
    })

})
}
