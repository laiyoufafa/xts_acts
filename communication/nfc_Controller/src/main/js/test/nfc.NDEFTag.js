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
import cardEmulation from '@ohos.nfc.cardEmulation';
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
    ISO_DEP	: 3,
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

let TnfType= {
    TNF_EMPTY : 0x0,
    TNF_WELL_KNOWN : 0x01,
    TNF_MEDIA	: 0x02,
    TNF_ABSOLUTE_URI : 0x03,
    TNF_EXT_APP : 0x04,
    TNF_UNKNOWN : 0x05,
    TNF_UNCHANGED : 0x06,
};

let NDEFRecordRTD= {
    RTD_TEXT : 0x54,
    RTD_URI : 0x55,
}

let NDEFTaginfo = {
    "uid": [0x01, 0x02, 0x03, 0x04],
    "technology": [1, 6],
    "extrasData": [
        {
            "Sak": 0x08, "Atqa": "B000",
        },
        {
            "NdefMsg": "D4010354787473", "NdefForumType": 1, "NdefTagLength":255, "NdefTagMode": 1,
        },
    ],
    "tagRfDiscId": 1,
};

let FeatureType = {
    HCE : 0,
    UICC : 0,
    ESE : 0,
};

let NdefFormatableTag = {
    "uid": [0x01, 0x02, 0x03, 0x04],
    "technology": [1, 10],
    "extrasData": [
        {
            "Sak": 0x08, "Atqa": "B000",
        },
        {

        },
    ],
    "tagRfDiscId": 1,
};

export default function nfcNDEFTagTest() {
    describe('nfcNDEFTagTest', function () {
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
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0100
         * @tc.name Test createNdefMessage NDEF
         * @tc.desc Creates an ndef message using the original bytes.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0100', 0, function ()  {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
                console.info("[NFC_test]NdefTag001 ->: "+ JSON.stringify(NdefTag));
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_0100 error' + error)
            }
            let rawData = [
                0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43
            ];
            let ndefMessage ;
            if (NdefTag!= undefined){
                console.info("ndefRecords is object1 " );
                try{
                    ndefMessage = NdefTag.createNdefMessage(rawData);
                    expect(ndefMessage !=null).assertTrue();
                    expect(ndefMessage instanceof Object).assertTrue();
                    console.info("[NFC_test]ndef ndefMessage1: " + ndefMessage);
                }catch(error){
                    console.info("[NFC_test]ndef ndefMessage1 error: " + error);
                }
            }else{
                console.info("[NFC_test]ndef typeof1 ->: "+ typeof(NdefTag));
            }
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0200
         * @tc.name Test getNdefRecords NDEF
         * @tc.desc Obtains all records of ndef messages.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0200', 0, function ()  {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_0200 error' + error)
            }
            let rawData = [
                0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43
            ];
            if (NdefTag!= undefined){
                console.info("ndefRecords is object2" );
                try{
                    let ndefMessage = NdefTag.createNdefMessage(rawData);
                    console.info("[NFC_test]ndefMessage result: ");
                    if (ndefMessage != null && ndefMessage != undefined) {
                        console.info("[NFC_test]ndef 1111111111: " );
                        let ndefRecords = ndefMessage.getNdefRecords();
                        console.info("[NFC_test]ndef ndefRecords number: " + JSON.stringify(ndefRecords));
                        expect(ndefRecords).assertInstanceOf('Array')
                    }
                    else{
                        console.info("[NFC_test]ndef 1222222222: " + error);
                    }
                }catch(error){
                    console.info("ndef ndefMessage2 error: " + error);
                }
            }else{
                console.info("[NFC_test]ndef typeof2 ->: "+ typeof(NdefTag) );
            }
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0300
         * @tc.name Test createNdefMessage NDEF
         * @tc.desc Creates an ndef message using the original bytes.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0300', 0, function ()  {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_03001 error' + error)
            }
            let ndefRecords = [
                {tnf: 0x01, rtdType: [0x54], id: [0x01, 0x02], payload: [0x00, 0xa4, 0x04]},
                {tnf: 0x02, rtdType: [0x55], id: [0x03, 0x04], payload: [0x00, 0xa4, 0x04]},
            ];
            let ndefMessage;
            if (NdefTag != undefined){
                console.info("ndefRecords is object3 " );
                try{
                    ndefMessage = NdefTag.createNdefMessage(ndefRecords);
                    if (ndefMessage != null && ndefMessage != undefined) {
                        console.info("[NFC_test]ndef ndefMessage1113: " + ndefMessage);
                        expect(ndefMessage != null).assertTrue();
                        expect(ndefMessage instanceof Object).assertTrue();
                    }
                    else{
                        console.info("[NFC_test]ndef ndefMessage111: " + error);
                    }

                }catch(error){
                    console.info('SUB_Communication_NFC_nfcNDEF_js_03002 error' + error)
                }
            }else{
                console.info("[NFC_test]ndef typeof3 ->: "+ typeof(NdefTag) );
            }
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0400
         * @tc.name Test getNdefTagType NDEF
         * @tc.desc Obtains the type of the Ndef tag.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0400', 0, function ()  {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_0400 error' + error)
            }
            let ndefTagType = NdefTag.getNdefTagType();
            expect(NfcForumType.NFC_FORUM_TYPE_1).assertEqual(ndefTagType);
            console.info("[NFC_test]ndef ndefTagType: " + ndefTagType);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0500
         * @tc.name Test getNdefMessage NDEF
         * @tc.desc Obtains the message read from the NDEF tag when the tag is discovered.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0500', 0, function ()  {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_05001 error' + error)
            }
            try{
                let getMessage = NdefTag.getNdefMessage();
                expect(ndefMessage != null).assertTrue();
                console.info('SUB_Communication_NFC_nfcNDEF_js_05004' + getMessage)
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_05001 error' + error)
            }
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0600
         * @tc.name Test isNdefWritable NDEF
         * @tc.desc Check whether the NDEF label is writable,promise
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0600', 0, async function (done) {
            let NdefTag;
            let NDEFTaginfo = {
                  "uid": [0x01, 0x02, 0x03, 0x04],
                  "technology": [1, 6],
                  "extrasData": [
                     {
                          "Sak": 0x08, "Atqa": "B000",
                     },
                     {
                           "NdefMsg": "D4010354787473", "NdefForumType": 1, 
                            "NdefTagLength":255, "NdefTagMode": 2,
                      },
                    ],
                    "tagRfDiscId": 1,
            };
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_0600 error' + error)
            }
            let data = NdefTag.isNdefWritable();
            console.info("[NFC_test]ndef isNdefWritable data: " + data);
            expect(data).assertTrue();
            done();
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0700
         * @tc.name Test readNdef NDEF
         * @tc.desc Read the ndef message on the tag,promise
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0700', 0, async function (done) {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_0800 error' + error)
            }
            await NdefTag.readNdef().then((data) => {
                console.info("[NFC_test]ndef readNdef1 data: " + data);
                done();
            }).catch((err)=> {
                console.info("ndef readNdef1 err: " + err);
                expect(true).assertEqual(true);
                done();
            });
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0800
         * @tc.name Test readNdef NDEF
         * @tc.desc Read the ndef message on the tag,callback
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0800', 0, async function (done) {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_0800 error' + error)
            }
            NdefTag.readNdef((err, data)=> {
                if (err) {
                    expect(true).assertEqual(true);
                    console.info("[NFC_test]ndef readNdef2 err: " + err);
                } else {
                    expect(data!=true).assertTrue();
                    console.info("[NFC_test]ndef readNdef2 data: " + data);
                }
            });
            done();
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_0900
         * @tc.name Test writeNdef NDEF
         * @tc.desc Write ndef messages to this tag.promise
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_0900', 0, async function (done) {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_0900 error' + error)
            }
            let ndefMessage = NdefTag.createNdefMessage([0x01, 0x02]);
            await NdefTag.writeNdef(ndefMessage).then((data) => {
                expect(data).assertInstanceOf('Number')
                console.info("[NFC_test]ndef writeNdef1 data: " + data);
                done();
            }).catch((err)=> {
                console.info("[NFC_test]ndef writeNdef1 err: " + err);
                expect(true).assertEqual(true);
                done();
            });
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1000
         * @tc.name Test writeNdef NDEF
         * @tc.desc Write ndef messages to this tag.callback
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1000', 0, async function (done) {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1000 error' + error)
            }
            let ndefMessage = NdefTag.createNdefMessage([0x01, 0x02]);
            NdefTag.writeNdef(ndefMessage, (err, data)=> {
                if (err) {
                    console.info("[NFC_test]ndef writeNdef2 err: " + err);
                    expect(true).assertEqual(true);
                } else {
                    expect(data).assertInstanceOf('Number')
                    console.info("[NFC_test]ndef writeNdef2 data: " + data);
                }
            });
            done();
            sleep(3000);
        })
        
        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1100
         * @tc.name Test canSetReadOnly NDEF
         * @tc.desc Check whether the NDEF tag can be set to read-only.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1100', 0, function ()  {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
                console.info("[NFC_test]get NdefTag: " + NdefTag);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1100 error' + error)
            }
            let canSetReadOnly = NdefTag.canSetReadOnly();
            console.info("[NFC_test]ndef canSetReadOnly: " + canSetReadOnly);
            expect(canSetReadOnly).assertTrue();
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1200
         * @tc.name Test setReadOnly NDEF
         * @tc.desc Set the Ndef label to read-only.Promise
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1200', 0, async function (done) {
            let NdefTag;
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1200 error' + error)
            }
            await NdefTag.setReadOnly().then((data) => {
                expect(data).assertInstanceOf('Number')
                console.info("[NFC_test]ndef setReadOnly1 data: " + data);
                done();
            }).catch((err)=> {
                console.info("[NFC_test]ndef setReadOnly1 err: " + err);
                expect(true).assertEqual(true);
                done();
            });
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1300
         * @tc.name Test setReadOnly NDEF
         * @tc.desc Set the Ndef label to read-only.callback
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1300', 0, async function (done) {
            let NdefTag;
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1300 error' + error)
            }
            NdefTag.setReadOnly((err, data)=> {
                if (err) {
                    expect(true).assertEqual(true);
                    console.info("[NFC_test]ndef setReadOnly2 err: " + err);
                } else {
                    expect(data).assertInstanceOf('Number')
                    console.info("[NFC_test]ndef setReadOnly2 data: " + data);
                }
            });
            done();
            sleep(3000);
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1400
         * @tc.name Test getNdefTagTypeString NDEF
         * @tc.desc Converts the Nfc forum type to the byte array defined in the Nfc forum.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1400', 0, function ()  {
            let NdefTag;
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1400 error' + error)
            }
            let ndefTypeString = NdefTag.getNdefTagTypeString(NfcForumType.NFC_FORUM_TYPE_1);
            console.info("[NFC_test]ndef ndefTypeString: " + JSON.stringify(ndefTypeString));
            expect(ndefTypeString.length >= 0).assertTrue();
            
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1500
         * @tc.name Test createNdefMessage NDEF
         * @tc.desc Formats the tag as an NDEF tag and writes the NDEF message to the NDEF tag.Promise
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1500', 0, async function () {
            let NdefTag;
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1600 error' + error)
            }
            let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43]; 
            let ndefmessage = NdefTag.createNdefMessage(rawData);
            let NdefFormatable = tag.getNdefFormatable(NdefFormatableTag);
            await NdefFormatable.format(ndefmessage).then(() => {
                console.info("[NFC_test]ndefFormatable format1 ");
            }).catch((err)=> {
                console.info("[NFC_test]ndefFormatable format1 err: " + err);
                expect(true).assertEqual(true);
            });
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1600
         * @tc.name Test createNdefMessage NDEF
         * @tc.desc Formats the tag as an NDEF tag and writes the NDEF message to the NDEF tag.callback
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1600', 0, async function (done) {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1700 error' + error)
            }
            let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43]; 
            let ndefmessage = NdefTag.createNdefMessage(rawData);
            let NdefFormatable = tag.getNdefFormatable(NdefFormatableTag);
            NdefFormatable.format(ndefmessage, (err, data)=> {
                if (err) {
                    console.log("ndefFormatable format err: " + err);
                    expect(true).assertTrue();
                } else {
                    console.info("[NFC_test]ndefFormatable formatReadOnly2" );
                }
            });
            done();
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1700
         * @tc.name Test formatReadOnly NDEF
         * @tc.desc Format as NDEF and set the NDEF message write label to read-only.Promise
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1700', 0, async function () {
            let NdefTag;
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1800 error' + error)
            }
            let rawData = [
                0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43
            ];
            let ndefmessage = NdefTag.createNdefMessage(rawData);
            let NdefFormatable = tag.getNdefFormatable(NdefFormatableTag);
            await NdefFormatable.formatReadOnly(ndefmessage).then(() => {
                console.info("[NFC_test]ndefFormatable formatReadOnly1 " + data);
            }).catch((err)=> {
                console.info("[NFC_test]ndefFormatable formatReadOnly1 err: " + err);
                expect(true).assertTrue();
            });
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1800
         * @tc.name Test formatReadOnly NDEF
         * @tc.desc Format as NDEF and set the NDEF message write label to read-only.callback
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_1800', 0, async function (done) {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_1900 error' + error)
            }
            let rawData = [
                0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43
            ];
            let ndefmessage = NdefTag.createNdefMessage(rawData);
            let NdefFormatable = tag.getNdefFormatable(NdefFormatableTag);
            NdefFormatable.formatReadOnly(ndefmessage, (err, data)=> {
                if (err) {
                    console.log("ndefFormatable format err: " + err);
                    expect(true).assertTrue();
                } else {
                    console.info("[NFC_test]ndefFormatable formatReadOnly2" );
                }
            });
            done();
        })


        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_1900
         * @tc.name Test makeUriRecord NDEF
         * @tc.desc Obtains all records of ndef makeUriRecord.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
         it('SUB_Communication_NFC_nfcNDEF_js_1900', 0, function () {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_0300 error' + error)
            }
            let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43];
            if (NdefTag!= undefined){
                console.info("makeUriRecord is object3" );
                try{
                    let ndefMessage = NdefTag.createNdefMessage(rawData);
                    console.info("[NFC_test]ndefMessage result: " + JSON.stringify(ndefMessage));
                    let makeRecords = ndefMessage.makeUriRecord("D4010354787473");
                    console.info("[NFC_test]makeUriRecord result: " + JSON.stringify(makeRecords));
                    expect(JSON.stringify(makeRecords)!=null).assertTrue();
             
                }catch(error){
                    console.info("ndef ndefMessage error: " + error);
                }
            }else{
                console.info("[NFC_test]ndef typeof2 ->: "+ typeof(NdefTag) );
            }
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_2000
         * @tc.name Test createNdefMessage NDEF
         * @tc.desc Obtains all records of createNdefMessage NDEF
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_2000', 0, function () {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_2000 error' + error)
            }
            let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43];
            if (NdefTag!= undefined){
                console.info("makeTextRecord is object4" );
                try{
                    let ndefMessage = NdefTag.createNdefMessage(rawData);
                    console.info("[NFC_test]ndefMessage result1: " + JSON.stringify(ndefMessage));
                    let makeTRecords = ndefMessage.makeTextRecord("test112HW","test");
                    console.info("[NFC_test]makeTextRecord result1: " + JSON.stringify(makeTRecords));
                    expect(JSON.stringify(makeTRecords)!=null).assertTrue();
            
                }catch(error){
                    console.info("ndef ndefMessage1 error: " + error);
                }
            }else{
                console.info("[NFC_test]ndef typeof1 ->: "+ typeof(NdefTag) );
            }
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_2100
         * @tc.name Test makeMimeRecord NDEF
         * @tc.desc Obtains all records of ndef makeMimeRecord.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_2100', 0, function () {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_2100 error' + error)
            }
            let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43];
            if (NdefTag!= undefined){
                console.info("makeMimeRecord is object5" );
                try{
                    let ndefMessage = NdefTag.createNdefMessage(rawData);
                    console.info("[NFC_test]ndefMessage result2: " + JSON.stringify(ndefMessage));
                    let makeMRecords = ndefMessage.makeMimeRecord("BYTE" , "0112");
                    console.info("[NFC_test]makeMimeRecord result2: " + JSON.stringify(makeMRecords));
                    expect(JSON.stringify(makeMRecords)!=null).assertTrue();
            
                }catch(error){
                    console.info("ndef ndefMessage2 error: " + error);
                }
            }else{
                console.info("[NFC_test]ndef typeof2 ->: "+ typeof(NdefTag) );
            }
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_2200
         * @tc.name Test makeExternalRecord NDEF
         * @tc.desc Obtains all records of ndef makeExternalRecord.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_2200', 0, function () {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_2200 error' + error)
            }
            let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43];
            if (NdefTag!= undefined){
                console.info("makeExternalRecord is object6" );
                try{
                    let ndefMessage = NdefTag.createNdefMessage(rawData);
                    console.info("[NFC_test]ndefMessage result3: " + JSON.stringify(ndefMessage));
                    let makeERecords = ndefMessage.makeExternalRecord("NFC","NFCtest",[0x01, 0x02]);
                    console.info("[NFC_test]makeExternalRecord result13: " + JSON.stringify(makeERecords));
                    expect(makeERecords instanceof Object).assertTrue();
                }catch(error){
                    console.info("ndef ndefMessage3 error: " + error);
                }
            }else{
                console.info("[NFC_test]ndef typeof3 ->: "+ typeof(NdefTag) );
            }
        })

        /**
         * @tc.number SUB_Communication_NFC_nfcNDEF_js_2300
         * @tc.name Test messageToBytes NDEF
         * @tc.desc Obtains all records of ndef messageToBytes.
         * @tc.size since 9
         * @tc.type Function
         * @tc.level Level 2
         */
        it('SUB_Communication_NFC_nfcNDEF_js_2300', 0, function () {
            let NdefTag
            try{
                NdefTag= tag.getNdef(NDEFTaginfo);
            }catch(error){
                console.info('SUB_Communication_NFC_nfcNDEF_js_2300 error' + error)
            }
            let rawData = [0xD1, 0x01, 0x03, 0x54, 0x4E, 0x46, 0x43];
            if (NdefTag!= undefined){
                console.info("messageToBytes is object7" );
                try{
                    let ndefMessage = NdefTag.createNdefMessage(rawData);
                    console.info("[NFC_test]ndefMessage result4: " + JSON.stringify(ndefMessage));
                    let makeERecords = ndefMessage.messageToBytes(ndefMessage);
                    console.info("[NFC_test]messageToBytes result4: " + JSON.stringify(makeERecords));
                    expect(makeERecords).assertInstanceOf('Array')
                }catch(error){
                    console.info("ndef ndefMessage4 error: " + error);
                }
            }else{
                console.info("[NFC_test]ndef typeof4 ->: "+ typeof(NdefTag) );
            }
        })

        console.info("*************[nfc_test] start nfc js unit test end*************");
    })
}
