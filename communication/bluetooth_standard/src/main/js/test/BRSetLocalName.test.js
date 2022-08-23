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
let Btname = {
    NUM_TEST :'012345678901234567890123456789012345678901234567890123'+
    '45678901234567890123456789012345678901234567890123456789012345678901234567',
    NUM_TEST1 :'0123456789012345678901234567890123456789012345678901'
    +'23456789012345678901234567890123456789012345678901234567890123456789012345678012'
    +'345678901234567890123456789012345678901234567890123456789012367890123456789012345568'
    +'01234567890123456789012345678912',
    LETTERS_TEST :'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    CHINESES_TEST :'测试蓝牙名称是否正常测试蓝牙名称是否试蓝牙',
    SYMBOL_TEST:'*^_^* 、。·ˉˇ¨〃々—～‖·‘’“”「『』〖❂【±×'
    +'÷∶∧∨∑∏∪∩∈∷√⊥‖∠⌒⊙∫∮≡≌≈∽∝≠♂♀°℃＄¤￠￡‰§№☆★○●◎◇□■△※→←↑↓〓',
    MIXES:'测试蓝牙名称是否正试蓝牙\'名称是否[666]aaw',
    MIXES2:'——◎◇◆□■△▲测试蓝牙',
    MIXES3:'78453-、、。。◎◇◆□■△▲',
    MIXES4:'hhhfdf-、、。。◎◇◆□■△▲',
    MIXES5:'#01-5@<?;:!@$%^&*(1[]{【+-；：‘’“”测试=》《\'[6]',
    MIXES6:'#01-567890@<>?/;:5675ASDF012345678!@'
    +'$%^&*()9012378901[]{}【】566~·67890blue',
    MIXES7:'0123456789012345678901234567890123456789012345678901'
    +'23456789012345678901234567890123456789012345678901234567890123456789012345678012'
    +'345678901234567890123456789012345678901234567890123456789012367890123456789012345568'
    +'012345678901234567890123456789123'
}
export default function bluetoothhostTest1() {
describe('bluetoothhostTest1', function() {
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
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0100
     * @tc.name setLocalName
     * @tc.desc Test setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0100', 0, async function (done) {
        let localName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0600 localName = '+ JSON.stringify(localName));
        expect(true).assertEqual(localName!=null);
        let newName = 'bluetoothtest';
        let result = bluetooth.setLocalName(newName);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0100 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(newName == getNewName);
        let result1=bluetooth.setLocalName(localName);
        expect(result1).assertTrue();
        let getLocalName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0100 localName = '+ JSON.stringify(getLocalName));
        expect(true).assertEqual(localName == getLocalName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0200
     * @tc.name setLocalName
     * @tc.desc Test setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 1 
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0200', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.LETTERS_TEST);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0200 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.LETTERS_TEST == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0300
     * @tc.name setLocalName
     * @tc.desc Test setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0300', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.CHINESES_TEST);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0300 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.CHINESES_TEST == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0400
     * @tc.name setLocalName
     * @tc.desc Test setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 2
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0400', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.NUM_TEST);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0400 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.NUM_TEST == getNewName);
        done();
    })

   /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0500
     * @tc.name setLocalName
     * @tc.desc Test setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 1
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0500', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.SYMBOL_TEST);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0500 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.SYMBOL_TEST == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0600
     * @tc.name setLocalName
     * @tc.desc Test setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 2
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0600', 0, async function (done) {
        let newName = 'my bluetooth';
        let result = bluetooth.setLocalName(newName);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0600 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(newName == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0700
     * @tc.name setLocalName
     * @tc.desc Test setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0700', 0, async function (done) {
        let newName = 'bluetooth1234ABCDEFGH';
        let result = bluetooth.setLocalName(newName);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0700 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(newName == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0800
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0800', 0, async function (done) {
        let newName = '蓝牙设备bluetooth';
        let result = bluetooth.setLocalName(newName);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0800 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(newName == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0900
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
     it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_0900', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.MIXES4);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_0900 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.MIXES4 == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1000
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1000', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.MIXES2);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1000 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.MIXES2 == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1100
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1100', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.MIXES3);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1100 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.MIXES3 == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1200
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 2
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1200', 0, async function (done) {
        let newName = '蓝牙设备123';
        let result = bluetooth.setLocalName(newName);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1200 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(newName == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1300
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1300', 0, async function (done) {
        let newName = '蓝牙设备bluetooth12';
        let result = bluetooth.setLocalName(newName);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1300 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(newName == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1400
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
      it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1400', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.MIXES6);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1400 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.MIXES6 == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1500
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1500', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.MIXES);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1500 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.MIXES == getNewName);
        
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1600
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1600', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.MIXES5);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1600 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.MIXES5 == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1700
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1700', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.NUM_TEST1);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1700 NewName = '+ JSON.stringify(getNewName));
        expect(true).assertEqual(Btname.NUM_TEST1 == getNewName);
        done();
    })

    /**
     * @tc.number SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1800
     * @tc.name TEST setLocalName
     * @tc.desc TEST setLocalName api by promise.
     * @tc.size MEDIUM
     * @ since 8
     * @tc.type Function
     * @tc.level Level 3
     */
    it('SUB_COMMUNICATION_BLUETOOTH_BR_LocalName_1800', 0, async function (done) {
        let result = bluetooth.setLocalName(Btname.MIXES7);
        expect(result).assertTrue();
        let getNewName = bluetooth.getLocalName();
        console.info('[bluetooth_js] LocalName_1800 NewName = '+ JSON.stringify(getNewName));
        expect(false).assertEqual(Btname.MIXES7 == getNewName);
        done();
    })

})
}
