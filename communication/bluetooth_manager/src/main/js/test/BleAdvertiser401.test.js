
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

//import bluetooth from '@ohos.bluetooth';
import bluetooth from '@ohos.bluetoothManager';
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'


export default function bluetoothBLETest5() {
describe('bluetoothBLETest5', function() {
    let gattServer = null;
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
    beforeAll(async function (done) {
        console.info('beforeAll called')
        await tryToEnableBt()
        gattServer = bluetooth.BLE.createGattServer();
        done()
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
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3000
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - parameters setting is null.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 0
     */
    it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3000', 0, async function (done) {
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
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:4567,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          let advResponse ={
               serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:1789,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(advData,advResponse);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error('[bluetooth_js]startAdvertising30 error.code:'+JSON.stringify(error.code)+
                   'error.message:'+JSON.stringify(error.message));
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3100
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - parameters setting is error type.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
    it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3100', 0, async function (done) {
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
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:4567,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          let advResponse ={
               serviceUuids:["00001889-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:1789,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001889-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(null,advData,advResponse);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error('[bluetooth_js]startAdvertising31 error.code:'+JSON.stringify(error.code)+
                   'error.message:'+JSON.stringify(error.message));
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3200
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - interval of setting is error type.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
    it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3200', 0, async function (done) {
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
          let setting={
               interval:'sss',
               txPower:-10,
               connectable:true,
          }
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:4567,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(setting,advData);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising32 failed, code is ${error.code},
                   message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3300
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - txPower of setting is error type.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
     it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3300', 0, async function (done) {
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
          let setting={
               interval:10385,
               txPower:'ttt',
               connectable:true,
          }
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:4567,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(setting,advData);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising33 failed, code is ${error.code},
                   message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3400
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - connectable of setting is error type.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 2
     */
     it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3400', 0, async function (done) {
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
          let setting={
               interval:10385,
               txPower:-10,
               connectable:123123,
          }
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:4567,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(setting,advData);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising34 failed, code is ${error.code},
                   message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3500
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - parameters advData is null.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3500', 0, async function (done) { 
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
          let setting={
               interval:10385,
               txPower:-10,
               connectable:true,
          }
          try {
               gattServer.startAdvertising(setting);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising35 failed, code is ${error.code},
                  message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3600
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - serviceUuids of advData is null.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3600', 0, async function (done) {
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
          let setting={
               interval:10385,
               txPower:-10,
               connectable:true,
          }
          let advData={
               manufactureData:[{
                    manufactureId:4567,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(setting,advData);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising36 failed, code is ${error.code},
                  message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3700
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - manufactureData of advData is null.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3700', 0, async function (done) {
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
          let setting={
               interval:10385,
               txPower:-10,
               connectable:true,
          }
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(setting,advData);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising37 failed, code is ${error.code},
                  message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3800
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - serviceData of advData is null.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
    it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3800', 0, async function (done) {
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
          let setting={
               interval:10385,
               txPower:-10,
               connectable:true,
          }
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:1789,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(setting,advData);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising38 failed, code is ${error.code},
                  message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3900
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - manufactureValue of advData is error type.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
     it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_3900', 0, async function (done) {
          let serviceValueBuffer = new Uint8Array(4);
          serviceValueBuffer[0] = 4;
          serviceValueBuffer[1] = 6;
          serviceValueBuffer[2] = 7;
          serviceValueBuffer[3] = 8;
          let setting={
               interval:10385,
               txPower:-10,
               connectable:true,
          }
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:1789,
                    manufactureValue:123
               }],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:serviceValueBuffer.buffer
               }],
          }
          try {
               gattServer.startAdvertising(setting,advData);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising39 failed, code is ${error.code},
                  message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })

    /**
     * @tc.number COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_4000
     * @tc.name testStartAdvertising
     * @tc.desc Test api 401 - serviceValue of advData is error type.
     * @tc.size MEDIUM
     * @ since 7
     * @tc.type Function
     * @tc.level Level 3
     */
     it('COMMUNICATION_BLUETOOTH_BLE_AdvertiseData_4000', 0, async function (done) {
          let manufactureValueBuffer = new Uint8Array(4);
          manufactureValueBuffer[0] = 1;
          manufactureValueBuffer[1] = 2;
          manufactureValueBuffer[2] = 3;
          manufactureValueBuffer[3] = 4;
          let setting={
               interval:10385,
               txPower:-10,
               connectable:true,
          }
          let advData={
               serviceUuids:["00001888-0000-1000-8000-00805f9b34fb"],
               manufactureData:[{
                    manufactureId:1789,
                    manufactureValue:manufactureValueBuffer.buffer
               }],
               serviceData:[{
                    serviceUuid:"00001888-0000-1000-8000-00805f9b34fb",
                    serviceValue:123123
               }],
          }
          try {
               gattServer.startAdvertising(setting,advData);
               gattServer.stopAdvertising();
               expect(true).assertFalse();
          }catch(error) {
               console.error(`[bluetooth_js]startAdvertising40 failed, code is ${error.code},
                  message is ${error.message}`);
               expect(error.code).assertEqual('401');
          }
          done();
     })



  

})

}
