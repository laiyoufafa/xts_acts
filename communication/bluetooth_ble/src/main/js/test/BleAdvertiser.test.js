
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


export default function bluetoothBLETest2() {
describe('bluetoothBLETest2', function() {
    let gattServer = null;
    let gattClient = null;
    function sleep(delay) {
        return new Promise(resovle => setTimeout(resovle, delay))
    }

    async function tryToEnableBt() {
        let sta = bluetooth.getState();
        switch(sta){
            case 0:
                console.info('[bluetooth_js] bt turn off:'+ JSON.stringify(sta));
                bluetooth.enableBluetooth();
                await sleep(3000);
                break;
            case 1:
                console.info('[bluetooth_js] bt turning on:'+ JSON.stringify(sta));
                await sleep(3000);
                break;
            case 2:
                console.info('[bluetooth_js] bt turn on:'+ JSON.stringify(sta));
                break;
            case 3:
                console.info('[bluetooth_js] bt turning off:'+ JSON.stringify(sta));
                bluetooth.enableBluetooth();
                await sleep(3000);
                break;
            default:
                console.info('[bluetooth_js] enable success');
        }
    }
    beforeAll(function () {
        console.info('beforeAll called')
        gattServer = bluetooth.BLE.createGattServer();
        gattClient = bluetooth.BLE.createGattClientDevice("00:00:00:00:00:00");
    })
    beforeEach(async function (done) {
        console.info('beforeEach called')
        await tryToEnableBt()
        done()

    })
    afterEach(function () {
        console.info('afterEach called')
    })
    afterAll(function () {
        console.info('afterAll called')
        gattServer.close();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0100
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 0
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0100', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:150,
            txPower:60,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0200
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0200', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:20,
            txPower:60,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0300
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0300', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:16385,
            txPower:60,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0400
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0400', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:16400,
            txPower:60,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0500
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0500', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:19,
            txPower:60,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

     /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0800
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0800', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:1000,
            txPower:-10,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0900
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_0900', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:1000,
            txPower:-127,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1000
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1000', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:1000,
            txPower:1,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1100
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1100', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:1000,
            txPower:10,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1200
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1200', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:1000,
            txPower:-130,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1400
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1400', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:1000,
            txPower:1,
            connectable:false,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1500
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1500', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:1000,
            txPower:70,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1600
     * @tc.name testStartAdvertising
     * @tc.desc Test StartAdvertising api.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 1
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_1600', 0, async function (done) {
        let gattServer =bluetooth.BLE.createGattServer();
        let manufactureValueBuffer = new Uint8Array(4);
        manufactureValueBuffer[0] = 1;
        manufactureValueBuffer[1] = 2;
        manufactureValueBuffer[2] = 3;
        manufactureValueBuffer[3] = 4;
        let serviceValueBuffer = new Uint8Array(4);
        serviceValueBuffer[0] = 4;
        serviceValueBuffer[1] = 6;
        serviceValueBuffer[2] = 7;
        serviceValueBuffer[3] = 8;
        gattServer.startAdvertising({
            interval:1000,
            txPower:-70,
            connectable:true,
            },{
            serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:4567,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
          },{
            serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
            manufactureData:[{
                 manufactureId:1789,
                 manufactureValue:manufactureValueBuffer.buffer
            }],
            serviceData:[{
                 serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                 serviceValue:serviceValueBuffer.buffer
            }],
        });
        gattServer.stopAdvertising();
        done();
    }) 

})

}
