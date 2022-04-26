/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
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

import bundle from '@ohos.bundle'
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from 'deccjsunit/index'

const BUNDLE_NAME1 = 'com.example.bmsmainabilityfirstscene';
const BUNDLE_NAME2 = 'com.example.third2';
const BUNDLE_NAME3 = 'com.example.third5';
const BUNDLE_NAME5 = 'com.example.system1';
const BUNDLE_NAME6 = "com.example.bmsmainabilitysecondscene";
const FIRSTMAINABILITY = 'com.example.bmsmainabilityfirstscene.MainAbility';
const SECONDMAINABILITY = 'com.example.bmsmainabilitysecondscene.MainAbility';

describe('ActsBmsHapModuleTest', function () {

    /*
     * @tc.number: bms_getHapModuleInfo_0100
     * @tc.name: get hapModuleInfo from one app by getBundleInfo
     * @tc.desc: get the module information of the hap with type of entry
     */
    it('bms_getHapModuleInfo_0100', 0, async function (done) {
        let dataInfo = await bundle.getBundleInfo(BUNDLE_NAME1, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES);
        bundle.getBundleInfo(BUNDLE_NAME1, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES, callback);
        async function callback(err, result) {
            expect(JSON.stringify(result)).assertEqual(JSON.stringify(dataInfo));
            expect(result.hapModuleInfos.length).assertEqual(2);
            if (result.hapModuleInfos.length > 0) {
                let hapModuleInfo = result.hapModuleInfos[0];
                expect(hapModuleInfo.name).assertEqual(BUNDLE_NAME1);
                expect(hapModuleInfo.moduleName).assertEqual('entry');
                expect(hapModuleInfo.description).assertEqual('');
                expect(hapModuleInfo.descriptionId).assertEqual(0);
                expect(hapModuleInfo.iconPath).assertEqual("$media:icon");
                expect(hapModuleInfo.icon).assertEqual('');
                expect(hapModuleInfo.label).assertEqual('$string:app_name');
                expect(hapModuleInfo.labelId).assertEqual(0);
                expect(hapModuleInfo.iconId).assertEqual(0);
                expect(hapModuleInfo.backgroundImg).assertEqual("");
                expect(hapModuleInfo.supportedModes).assertEqual(0);
                expect(hapModuleInfo.reqCapabilities.length).assertEqual(0);
                expect(hapModuleInfo.deviceTypes[0]).assertEqual('phone');
                expect(hapModuleInfo.mainAbilityName).assertEqual(FIRSTMAINABILITY);
                expect(hapModuleInfo.mainElementName).assertEqual(FIRSTMAINABILITY);
                expect(hapModuleInfo.abilityInfo.length).assertLarger(0);
                expect(hapModuleInfo.colorMode).assertEqual(-1);
                expect(hapModuleInfo.extensionAbilityInfo.length).assertEqual(0);
                expect(hapModuleInfo.metadata.length).assertEqual(0);
                expect(hapModuleInfo.installationFree).assertEqual(false);
                done();
            }
        }
    });

    /*
     * @tc.number: bms_getHapModuleInfo_0200
     * @tc.name: get hapModuleInfo from two modules by getBundleInfo
     * @tc.desc: get the module information of the hap with type of feature
     */
    it('bms_getHapModuleInfo_0200', 0, async function (done) {
        let dataInfo = await bundle.getBundleInfo(BUNDLE_NAME1, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES);
        bundle.getBundleInfo(BUNDLE_NAME1, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES, async (err, result) => {
            expect(JSON.stringify(result)).assertEqual(JSON.stringify(dataInfo));
            expect(result.hapModuleInfos.length).assertEqual(2);
            if (result.hapModuleInfos.length == 2) {
                let hapModuleInfo = result.hapModuleInfos[0];
                let hapModuleInfo1 = result.hapModuleInfos[1];
                checkHapMoudleInfos(hapModuleInfo);
                checkHapMoudleInfos(hapModuleInfo1);
                expect(hapModuleInfo.label).assertEqual('$string:app_name');
                expect(hapModuleInfo.name).assertEqual(BUNDLE_NAME1);
                expect(hapModuleInfo1.name).assertEqual(BUNDLE_NAME6);
                expect(hapModuleInfo.moduleName).assertEqual('entry');
                expect(hapModuleInfo.mainAbilityName).assertEqual(FIRSTMAINABILITY);
                expect(hapModuleInfo.mainElementName).assertEqual(FIRSTMAINABILITY);
                expect(hapModuleInfo1.moduleName).assertEqual('bmsmainabilitysecondscene');
                expect(hapModuleInfo1.mainAbilityName).assertEqual(SECONDMAINABILITY);
                expect(hapModuleInfo1.mainElementName).assertEqual(SECONDMAINABILITY);
                done();
            }
        });
    });

    /*
     * @tc.number: bms_getHapModuleInfo_0300
     * @tc.name: get hapModuleInfo one app without mainAbility by getBundleInfo
     * @tc.desc: get the module information of the hap without mainAbility
     */
    it('bms_getHapModuleInfo_0300', 0, async function (done) {
        let result = await bundle.getBundleInfo(BUNDLE_NAME2, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES);
        bundle.getBundleInfo(BUNDLE_NAME2, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES, (err, data) => {
            expect(JSON.stringify(result)).assertEqual(JSON.stringify(data));
            expect(result.hapModuleInfos.length).assertEqual(1);
            if (result.hapModuleInfos.length > 0) {
                let hapModuleInfo = result.hapModuleInfos[0];
                expect(hapModuleInfo.name).assertEqual(BUNDLE_NAME2);
                expect(hapModuleInfo.moduleName).assertEqual('entry');
                expect(hapModuleInfo.description).assertEqual('');
                expect(hapModuleInfo.descriptionId).assertEqual(0);
                expect(hapModuleInfo.iconPath).assertEqual("$media:icon");
                expect(hapModuleInfo.icon).assertEqual('');
                expect(hapModuleInfo.label).assertEqual('$string:app_name');
                expect(hapModuleInfo.labelId).assertEqual(0);
                expect(hapModuleInfo.iconId).assertEqual(0);
                expect(hapModuleInfo.backgroundImg).assertEqual("");
                expect(hapModuleInfo.supportedModes).assertEqual(0);
                expect(hapModuleInfo.reqCapabilities.length).assertEqual(0);
                expect(hapModuleInfo.deviceTypes[0]).assertEqual('phone');
                expect(hapModuleInfo.mainAbilityName).assertEqual("");
                expect(hapModuleInfo.mainElementName).assertEqual("");
                expect(hapModuleInfo.abilityInfo.length).assertLarger(0);
                expect(hapModuleInfo.colorMode).assertEqual(-1);
                expect(hapModuleInfo.extensionAbilityInfo.length).assertEqual(0);
                expect(hapModuleInfo.metadata.length).assertEqual(0);
                expect(hapModuleInfo.installationFree).assertEqual(false);
                done();
            }
        });
    });

    /*
     * @tc.number: bms_getHapModuleInfo_0400
     * @tc.name: get hapModuleInfo through getBundleInfo, an application that adds mainAbility
     * @tc.desc: get the module information of the hap with the added field mainAbility
     */
    it('bms_getHapModuleInfo_0400', 0, async function (done) {
        let dataInfo = await bundle.getBundleInfo(BUNDLE_NAME3, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES);
        bundle.getBundleInfo(BUNDLE_NAME3, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES, async (err, result) => {
            expect(JSON.stringify(result)).assertEqual(JSON.stringify(dataInfo));
            expect(result.hapModuleInfos.length).assertEqual(1);
            if (result.hapModuleInfos.length == 1) {
                let hapModuleInfo = result.hapModuleInfos[0];
                expect(hapModuleInfo.name).assertEqual(BUNDLE_NAME3);
                expect(hapModuleInfo.moduleName).assertEqual('entry');
                expect(hapModuleInfo.description).assertEqual('');
                expect(hapModuleInfo.descriptionId).assertEqual(0);
                expect(hapModuleInfo.iconPath).assertEqual("$media:icon");
                expect(hapModuleInfo.icon).assertEqual('');
                expect(hapModuleInfo.label).assertEqual('$string:app_name');
                expect(hapModuleInfo.labelId).assertEqual(0);
                expect(hapModuleInfo.iconId).assertEqual(0);
                expect(hapModuleInfo.backgroundImg).assertEqual("");
                expect(hapModuleInfo.supportedModes).assertEqual(0);
                expect(hapModuleInfo.reqCapabilities.length).assertEqual(0);
                expect(hapModuleInfo.deviceTypes[0]).assertEqual('phone');
                expect(hapModuleInfo.mainAbilityName).assertEqual("com.example.third5.AMainAbility");
                expect(hapModuleInfo.mainElementName).assertEqual("com.example.third5.AMainAbility");
                expect(hapModuleInfo.abilityInfo.length).assertLarger(0);
                expect(hapModuleInfo.colorMode).assertEqual(-1);
                expect(hapModuleInfo.extensionAbilityInfo.length).assertEqual(0);
                expect(hapModuleInfo.metadata.length).assertEqual(0);
                expect(hapModuleInfo.installationFree).assertEqual(false);
                done();
            }
        });
    });

    /*
     * @tc.number: bms_getHapModuleInfo_0600
     * @tc.name: get hapModuleInfo from the system through getBundleInfo 
     * @tc.desc: get module information of mainAbility system application 
     */
    it('bms_getHapModuleInfo_0600', 0, async function (done) {
        let dataInfo = await bundle.getBundleInfo(BUNDLE_NAME5, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES);
        bundle.getBundleInfo(BUNDLE_NAME5, bundle.BundleFlag.GET_BUNDLE_WITH_ABILITIES, callback);
        function callback(err, data) {
            expect(JSON.stringify(data)).assertEqual(JSON.stringify(dataInfo));
            expect(data.hapModuleInfos.length).assertEqual(1);
            if (data.hapModuleInfos.length == 1) {
                let hapModuleInfo = data.hapModuleInfos[0];
                expect(hapModuleInfo.name).assertEqual(BUNDLE_NAME5);
                expect(hapModuleInfo.moduleName).assertEqual('entry');
                expect(hapModuleInfo.description).assertEqual('');
                expect(hapModuleInfo.descriptionId).assertEqual(0);
                expect(hapModuleInfo.iconPath).assertEqual("$media:icon");
                expect(hapModuleInfo.icon).assertEqual('');
                expect(hapModuleInfo.label).assertEqual('$string:app_name');
                expect(hapModuleInfo.labelId).assertEqual(0);
                expect(hapModuleInfo.iconId).assertEqual(0);
                expect(hapModuleInfo.backgroundImg).assertEqual("");
                expect(hapModuleInfo.supportedModes).assertEqual(0);
                expect(hapModuleInfo.reqCapabilities.length).assertEqual(0);
                expect(hapModuleInfo.deviceTypes[0]).assertEqual('phone');
                expect(hapModuleInfo.mainAbilityName).assertEqual("com.example.system1.MainAbility");
                expect(hapModuleInfo.mainElementName).assertEqual("com.example.system1.MainAbility");
                expect(hapModuleInfo.abilityInfo.length).assertLarger(0);
                expect(hapModuleInfo.colorMode).assertEqual(-1);
                expect(hapModuleInfo.extensionAbilityInfo.length).assertEqual(0);
                expect(hapModuleInfo.metadata.length).assertEqual(0);
                expect(hapModuleInfo.installationFree).assertEqual(false);
            }
            done();
        }
    });

    function checkHapMoudleInfos(info) {
        expect(info.description).assertEqual('');
        expect(info.descriptionId).assertEqual(0);
        expect(info.iconPath).assertEqual("$media:icon");
        expect(info.icon).assertEqual('');
        expect(info.labelId).assertEqual(0);
        expect(info.iconId).assertEqual(0);
        expect(info.backgroundImg).assertEqual("");
        expect(info.supportedModes).assertEqual(0);
        expect(info.reqCapabilities.length).assertEqual(0);
        expect(info.deviceTypes[0]).assertEqual('phone');
        expect(info.abilityInfo.length).assertLarger(0);
        expect(info.colorMode).assertEqual(-1);
        expect(info.extensionAbilityInfo.length).assertEqual(0);
        expect(info.metadata.length).assertEqual(0);
        expect(info.installationFree).assertEqual(false);
    }
})