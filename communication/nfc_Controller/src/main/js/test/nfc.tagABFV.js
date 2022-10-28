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


import tag from '@ohos.nfc.tag';
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'

function sleep(delay) { // delay x ms
    let start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}

let NdefRecord = {
    NFC_A : 1,
    NFC_B : 2,
    ISO_DEP	 : 3,
    NFC_F : 4,
    NFC_V : 5,
    NDEF : 6,
    MIFARE_CLASSIC : 8,
    MIFARE_ULTRALIGHT : 9,
    NDEF_FORMATABLE : 10,
};

let NfcForumType = {
    NFC_FORUM_TYPE_1 : 1,
    NFC_FORUM_TYPE_2 : 2,
    NFC_FORUM_TYPE_3 : 3,
    NFC_FORUM_TYPE_4 : 4,
    MIFARE_CLASSIC : 101,
};

let aTag = {
    "uid": [0x01, 0x02, 0x03, 0x04],
    "technology": [1],
    "extrasData": [
        {
            "Sak": 0x08, "Atqa": "B000",
        },
    ],
    "tagRfDiscId": 1,
};

let bTag = {
    "uid": [0x01, 0x02, 0x03, 0x04],
    "technology": [2],
    "extrasData": [
        {
            "AppData": "A0C0", "ProtocolInfo": "131F",
        }
    ],
    "tagRfDiscId": 1,
};

let fTag = {
    "uid": [0x01, 0x02, 0x03, 0x04],
    "technology": [4],
    "extrasData": [
        {
            "SystemCode": "A0C0", "Pmm": "131F",
        }
    ],
    "tagRfDiscId": 1,
};

let vTag = {
    "uid": [0x01, 0x02, 0x03, 0x04],
    "technology": [ 5 ],
    "extrasData": [
        {
            "ResponseFlags": 0x09, "DsfId": 0x13,
        }
    ],
    "tagRfDiscId": 1,
};

export default function nfcTagABFVTest() {
    describe('nfcTagABFVTest', function () {
        beforeAll(function () {
            console.info('[NFC_test]beforeAll called')
        })
        beforeEach(function() {
            console.info('[NFC_test]beforeEach called')
        })
        afterEach(function () {
            console.info('[NFC_test]afterEach called')
        })
        afterAll(function () {
            console.info('[NFC_test]afterAll called')
        })
            
        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test on_off_openNfcapi
         * @tc.desc Test for getSak
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfctage_js_0100', 0, function ()  {
            let nfcA ;
            try{
                nfcA = tag.getNfcATag(aTag);
                console.info('SUB_Communication_NFC_nfctage_js_0100 pass' )
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0100 error' + error)
            }
            expect(nfcA != null).assertTrue();
            expect(nfcA instanceof Object).assertTrue();
            console.info('aTag is--<-!!!->' + JSON.stringify(nfcA));
        }) 

        it('SUB_Communication_NFC_nfctage_js_0200', 0, function ()  {
            let nfcB ;
            try{
                nfcB = tag.getNfcBTag(bTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0200 error' + error)
            }
            expect(nfcB != null).assertTrue();
            expect(nfcB instanceof Object).assertTrue();
            console.info('bTag is--<-!!!->' + JSON.stringify(nfcB));
        }) 

        it('SUB_Communication_NFC_nfctage_js_0300', 0, function ()  {
            let nfcF ;
            try{
                nfcF = tag.getNfcFTag(fTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0300 error' + error)
            }
            expect(nfcF != null).assertTrue();
            expect(nfcF instanceof Object).assertTrue();
            console.info('fTag is--<-!!!->' + JSON.stringify(nfcF));
        }) 

        it('SUB_Communication_NFC_nfctage_js_0400', 0, function ()  {
            let nfcV ;
            try{
                nfcV = tag.getNfcVTag(vTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0300 error' + error)
            }
            expect(nfcV != null).assertTrue();
            expect(nfcV instanceof Object).assertTrue();
            console.info('vTag is--<-!!!->' + JSON.stringify(nfcV));
        }) 

        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test getsak_taga
         * @tc.desc Obtains the SAK value of the NFC-A tag.
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfctage_js_0500', 0, function ()  {
            let nfcA ;
            try{
                nfcA = tag.getNfcATag(aTag);
                console.info('SUB_Communication_NFC_nfctage_js_0100 pass' )
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0100 error' + error)
            }
            let sak = nfcA.getSak(); 
            expect(sak).assertInstanceOf('Number');
            console.info('[nfc_js] test sak data>:' + sak);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test getAtqa_taga
         * @tc.desc Obtains the Atqa value of the NFC-A tag.
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfctage_js_0600', 0, function ()  {
            let nfcA ;
            try{
                nfcA = tag.getNfcATag(aTag);
                console.info('SUB_Communication_NFC_nfctage_js_0100 pass' )
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0100 error' + error)
            }
            let Atqa = nfcA.getAtqa(); 
            expect(Atqa).assertInstanceOf('Array');
            console.info('[nfc_js] test Atqa data>:' + Atqa);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test getAppData_tagB
         * @tc.desc Obtains the AppData value of the NFC-B tag.
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfctage_js_0700', 0, function ()  {
            let nfcB ;
            try{
                nfcB = tag.getNfcBTag(bTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0200 error' + error)
            }
            let AppData = nfcB.getRespAppData(); 
            expect(AppData).assertInstanceOf('Array');
            console.info('[nfc_js] test AppData data>:' + AppData);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test getRespProtocol_tagB
         * @tc.desc Obtains the Protocol value of the NFC-B tag.
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
         it('SUB_Communication_NFC_nfctage_js_0800', 0, function ()  {
            let nfcB ;
            try{
                nfcB = tag.getNfcBTag(bTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0200 error' + error)
            }
            let Protocol = nfcB.getRespProtocol(); 
            expect(Protocol).assertInstanceOf('Array');
            console.info('[nfc_js] test Protocol data>:' + Protocol);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test getSystemCode_tagF
         * @tc.desc Obtains the SystemCode value of the NFC-F tag.
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
         it('SUB_Communication_NFC_nfctage_js_0900', 0, function ()  {
            let nfcF ;
            try{
                nfcF = tag.getNfcFTag(fTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0300 error' + error)
            }
            let SystemCode = nfcF.getSystemCode(); 
            expect(SystemCode).assertInstanceOf('Array');
            console.info('[nfc_js] test SystemCode data>:' + SystemCode);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test getPmm_tagF
         * @tc.desc Obtains the getPmm value of the NFC-F tag.
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfctage_js_1000', 0, function ()  {
            let nfcF ;
            try{
                nfcF = tag.getNfcFTag(fTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0300 error' + error)
            }
            let Pmm = nfcF.getPmm(); 
            expect(Pmm).assertInstanceOf('Array');
            console.info('[nfc_js] test Pmm data>:' + Pmm);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test getResponseFlags_tagV
         * @tc.desc Obtains the ResponseFlags value of the NFC-V tag.
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfctage_js_1100', 0, function ()  {
            let nfcV ;
            try{
                nfcV = tag.getNfcVTag(vTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0300 error' + error)
            }
            let ResponseFlags = nfcV.getResponseFlags(); 
            expect(ResponseFlags).assertInstanceOf('Number');
            console.info('[nfc_js] test ResponseFlags data>:' + ResponseFlags);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfctage_js_0010
         * @tc.name Test getDsfId_tagV
         * @tc.desc Obtains the DsfId value of the NFC-V tag.
         * @tc.size since 7
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfctage_js_1200', 0, function ()  {
            let nfcV ;
            try{
                nfcV = tag.getNfcVTag(vTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfctage_js_0300 error' + error)
            }
            let DsfId = nfcV.getDsfId(); 
            expect(DsfId).assertInstanceOf('Number');
            console.info('[nfc_js] test DsfId data>:' + DsfId);
        })

        console.info("*************[nfc_test] start nfc js unit test end*************");
    })
}

