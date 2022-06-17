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
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from 'deccjsunit/index'
import bundle from '@ohos.bundle'
import enterpriseDeviceManager from '@ohos.enterpriseDeviceManager'

const WANT1 = {
    bundleName: "com.example.myapplication1",
    abilityName: "com.example.myapplication1.MainAbility"
};

const SELFWANT = {
    bundleName: "ohos.edm.test",
    abilityName: "ohos.edm.test.MainAbility"
};
const SELFHAPNAME = "ohos.edm.test"
const COMPANYNAME2 = "company2"
const DESCRIPTION2 = "edm demo2"
const ENTINFO1 = {
    name: "company",
    description: "edm demo"
};

const ENTINFO2 = {
    name: "company2",
    description: "edm demo2"
};

const DEFAULT_USER_ID = 100;
const TEST_USER_ID = 101;
const ERR_USER_ID = 102;

describe('EnterpriseDeviceManagerTest', function () {
    console.log('*************start EnterpriseDeviceManagerTest*************');

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0001
     * @tc.name test enableAdmin method in promise mode without user id
     * @tc.desc enable admin in promise mode
     */
    it('enableAdmin_test_001', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL);
        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL : ' + retValue);
        expect(retValue).assertTrue();

        var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertTrue();

        retValue = await enterpriseDeviceManager.disableAdmin(WANT1);
        console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
        expect(retValue).assertTrue();

        isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertFalse();
        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0001
     * @tc.name test enableAdmin method in callback mode without user id
     * @tc.desc enable admin in callback mode
     */
    it('enableAdmin_test_002', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL :' + datainfo);
            expect(datainfo).assertTrue();

            var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertTrue();

            retValue = await enterpriseDeviceManager.disableAdmin(WANT1);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })


    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0003
     * @tc.name test enableAdmin method in promise mode with ADMIN_TYPE_SUPER param without user id
     * @tc.desc enable super admin in promise mode
     */
    it('enableAdmin_test_003', 0, async function (done) {
        await bundle.getBundleInfo(SELFHAPNAME,
            bundle.BundleFlag.GET_BUNDLE_WITH_REQUESTED_PERMISSION).then(datainfo => {
                console.info("getBundleInfo success:" + JSON.stringify(datainfo));
            });

        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_SUPER');
        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_SUPER);
        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_SUPER : ' + retValue);
        expect(retValue).assertTrue();

        var isEnabled = await enterpriseDeviceManager.isSuperAdmin(SELFHAPNAME);
        console.log('enterpriseDeviceManager.isSuperAdmin :' + isEnabled);
        expect(isEnabled).assertTrue();

        retValue = await enterpriseDeviceManager.disableSuperAdmin(SELFHAPNAME);
        console.log('enterpriseDeviceManager.disableSuperAdmin : ' + retValue);
        expect(retValue).assertTrue();

        isEnabled = await enterpriseDeviceManager.isSuperAdmin(SELFHAPNAME);
        console.log('enterpriseDeviceManager.isSuperAdmin : ' + isEnabled);
        expect(isEnabled).assertFalse();
        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0004
     * @tc.name test enableAdmin method in callback mode with ADMIN_TYPE_SUPER param without user id
     * @tc.desc enable super admin in callback mode
     */
    it('enableAdmin_test_004', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_SUPER, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.enableAdmin : ' + retValue);
            expect(datainfo).assertTrue();

            var isEnabled = await enterpriseDeviceManager.isSuperAdmin(SELFHAPNAME);
            console.log('enterpriseDeviceManager.isSuperAdmin :' + isEnabled);
            expect(isEnabled).assertTrue();

            retValue = await enterpriseDeviceManager.disableSuperAdmin(SELFHAPNAME);
            console.log('enterpriseDeviceManager.disableSuperAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isSuperAdmin(SELFHAPNAME);
            console.log('enterpriseDeviceManager.isSuperAdmin : ' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0005
     * @tc.name test enableAdmin method in promise mode without user id
     * @tc.desc enable admin in promise mode
     */
    it('enableAdmin_test_005', 0, async function (done) {

        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL);
        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL : ' + retValue);
        expect(retValue).assertTrue();

        var isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertTrue();

        retValue = await enterpriseDeviceManager.disableAdmin(SELFWANT);
        console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
        expect(retValue).assertTrue();

        isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertFalse();

        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0006
     * @tc.name test enableAdmin method in callback mode without user id
     * @tc.desc enable admin in callback mode
     */
    it('enableAdmin_test_006', 0, async function (done) {

        console.log(' enableAdmin()');
        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL :' + datainfo);
            expect(datainfo).assertTrue();

            var isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertTrue();

            retValue = await enterpriseDeviceManager.disableAdmin(SELFWANT);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0007
     * @tc.name test enableAdmin method in promise mode with default user id
     * @tc.desc enable admin in multi-user
     */
    it('enableAdmin_test_007', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, DEFAULT_USER_ID);
        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL : ' + retValue);
        expect(retValue).assertTrue();

        var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, DEFAULT_USER_ID);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertTrue();


        retValue = await enterpriseDeviceManager.disableAdmin(WANT1, DEFAULT_USER_ID);
        console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
        expect(retValue).assertTrue();

        isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, DEFAULT_USER_ID);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertFalse();
        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0008
     * @tc.name test enableAdmin method with user id in callback mode with default user id
     * @tc.desc enable admin in multi-user
     */
    it('enableAdmin_test_008', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, DEFAULT_USER_ID, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL :' + datainfo);
            expect(datainfo).assertTrue();

            var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, DEFAULT_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertTrue();

            retValue = await enterpriseDeviceManager.disableAdmin(WANT1, DEFAULT_USER_ID);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, DEFAULT_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0009
     * @tc.name test enableAdmin method with user id in callback mode with error user id
     * @tc.desc enable admin in multi-user
     */
    it('enableAdmin_test_009', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_SUPER, TEST_USER_ID, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            expect(err != null).assertTrue();
            if (err) {
                // user exsit but super admin can only be enabled in user 100
                console.log("enableAdmin_test_009 throw error code : " + err.code + "message :" + err.message);
            }
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0010
     * @tc.name test enableAdmin method with user id in callback mode with error user id
     * @tc.desc enable admin in multi-user
     */
    it('enableAdmin_test_010', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_SUPER, ERR_USER_ID, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            expect(err != null).assertTrue();
            if (err) {
                // user does not exsit
                console.log("enableAdmin_test_010 throw error code : " + err.code + "message :" + err.message);
            }
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0011
     * @tc.name test enableAdmin method in promise mode with test user id
     * @tc.desc enable admin in multi-user
     */
    it('enableAdmin_test_011', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, TEST_USER_ID);
        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL : ' + retValue);
        expect(retValue).assertTrue();

        var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertTrue();


        retValue = await enterpriseDeviceManager.disableAdmin(WANT1, TEST_USER_ID);
        console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
        expect(retValue).assertTrue();

        isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertFalse();
        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0012
     * @tc.name test enableAdmin method in callback mode with test user id
     * @tc.desc enable admin in multi-user
     */
    it('enableAdmin_test_012', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, TEST_USER_ID, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL :' + datainfo);
            expect(datainfo).assertTrue();

            var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertTrue();

            retValue = await enterpriseDeviceManager.disableAdmin(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0013
     * @tc.name test enableAdmin method in promise mode and query with error user id
     * @tc.desc enable admin in multi-user
     */
    it('enableAdmin_test_013', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, DEFAULT_USER_ID, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL :' + datainfo);
            expect(datainfo).assertTrue();

            var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertFalse();

            retValue = await enterpriseDeviceManager.disableAdmin(WANT1, DEFAULT_USER_ID);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, DEFAULT_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0014
     * @tc.name test enableAdmin method in callback mode and disable with error user id
     * @tc.desc enable and disable admin in multi-user
     */
    it('enableAdmin_test_014', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, TEST_USER_ID, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL :' + datainfo);
            expect(datainfo).assertTrue();

            var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertTrue();

            try {
                retValue = await enterpriseDeviceManager.disableAdmin(WANT1, DEFAULT_USER_ID);
                console.log('enterpriseDeviceManager.disableAdmin over');
            } catch (error) {
                expect(error != null).assertTrue();
                console.log("enableAdmin_test_014 throw error code : " + error.code + "message :" + error.message);
            }

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertTrue();

            retValue = await enterpriseDeviceManager.disableAdmin(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0015
     * @tc.name test enableAdmin method in promise mode and disable with test user id
     * @tc.desc enable admin in multi-user
     */
    it('enableAdmin_test_015', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, DEFAULT_USER_ID);
        var retValue = await enterpriseDeviceManager.enableAdmin(WANT1, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, TEST_USER_ID, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL :' + datainfo);
            expect(datainfo).assertTrue();

            var isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, DEFAULT_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertTrue();

            retValue = await enterpriseDeviceManager.disableAdmin(WANT1, DEFAULT_USER_ID);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, DEFAULT_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertFalse();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertTrue();

            retValue = await enterpriseDeviceManager.disableAdmin(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(WANT1, TEST_USER_ID);
            console.log('enterpriseDeviceManager.isAdminEnabled :' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0022
     * @tc.name test enable super admin method in callback mode and enable twice with test user id
     * @tc.desc enable and disable admin in multi-user
     */
    it('enableAdmin_test_0016', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_SUPER);
        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_SUPER : ' + retValue);
        expect(retValue).assertTrue();

        var isEnabled = await enterpriseDeviceManager.isSuperAdmin(SELFHAPNAME);
        console.log('enterpriseDeviceManager.isSuperAdmin :' + isEnabled);
        expect(isEnabled).assertTrue();

        try {
            retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
                enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL, TEST_USER_ID);
        } catch (error) {
            expect(error != null).assertTrue();
            console.log("enableAdmin_test_016 throw error code : " + error.code + "message :" + error.message);
        }

        isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT, TEST_USER_ID);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertFalse();

        retValue = await enterpriseDeviceManager.disableSuperAdmin(SELFHAPNAME);
        console.log('enterpriseDeviceManager.disableSuperAdmin : ' + retValue);
        expect(retValue).assertTrue();

        isEnabled = await enterpriseDeviceManager.isSuperAdmin(SELFHAPNAME);
        console.log('enterpriseDeviceManager.isSuperAdmin : ' + isEnabled);
        expect(isEnabled).assertFalse();
        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0016
     * @tc.name test setEnterpriseInfo method in promise mode
     * @tc.desc set enterprise info in promise mode
     */
    it('setEnterpriseInfo_test_001', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL);
        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL : ' + retValue);
        expect(retValue).assertTrue();

        var isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT);
        expect(isEnabled).assertTrue();
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);

        retValue = await enterpriseDeviceManager.setEnterpriseInfo(SELFWANT, ENTINFO2);
        console.log('enterpriseDeviceManager.setEnterpriseInfo : ' + retValue);
        expect(retValue).assertTrue();

        var entInfo = await enterpriseDeviceManager.getEnterpriseInfo(SELFWANT);
        expect(entInfo.name).assertEqual(COMPANYNAME2);
        expect(entInfo.description).assertEqual(DESCRIPTION2);

        retValue = await enterpriseDeviceManager.disableAdmin(SELFWANT);
        console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
        expect(retValue).assertTrue();

        isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT);
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
        expect(isEnabled).assertFalse();
        done();

    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0017
     * @tc.name test setEnterpriseInfo method in callback mode
     * @tc.desc set enterprise info in callback mode
     */
    it('setEnterpriseInfo_test_002', 0, async function (done) {
        var retValue = await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_NORMAL);
        console.log('enterpriseDeviceManager.enableAdmin ADMIN_TYPE_NORMAL : ' + retValue);
        expect(retValue).assertTrue();
        var isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT);
        expect(isEnabled).assertTrue();
        console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);

        retValue = await enterpriseDeviceManager.setEnterpriseInfo(SELFWANT, ENTINFO2, OnReceiveEvent);
        async function OnReceiveEvent(err, datainfo) {
            console.log('enterpriseDeviceManager.setEnterpriseInfo : ' + datainfo);
            expect(datainfo).assertTrue();

            var entInfo = await enterpriseDeviceManager.getEnterpriseInfo(SELFWANT);
            expect(entInfo.name).assertEqual(COMPANYNAME2);
            expect(entInfo.description).assertEqual(DESCRIPTION2);

            retValue = await enterpriseDeviceManager.disableAdmin(SELFWANT);
            console.log('enterpriseDeviceManager.disableAdmin : ' + retValue);
            expect(retValue).assertTrue();

            isEnabled = await enterpriseDeviceManager.isAdminEnabled(SELFWANT);
            console.log('enterpriseDeviceManager.isAdminEnabled : ' + isEnabled);
            expect(isEnabled).assertFalse();
            done();
        }
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0018
     * @tc.name test getDeviceSettingsManager method in callback mode
     * @tc.desc get the device settings manager in callback mode
     */
    it('getDeviceSettingsManager_test_001', 0, async function (done) {
        enterpriseDeviceManager.getDeviceSettingsManager((error, mgr) => {
            expect(mgr !== null).assertTrue();
        })
        console.log('getDeviceSettingsManager_test_001 done');
        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0019
     * @tc.name test getDeviceSettingsManager method in promise mode
     * @tc.desc get the device settings manager in promise mode
     */
    it('getDeviceSettingsManager_test_002', 0, async function (done) {
        enterpriseDeviceManager.getDeviceSettingsManager().then(mgr => {
            expect(mgr !== null).assertTrue();
        })
        console.log('getDeviceSettingsManager_test_002 done');
        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0020
     * @tc.name test setDateTime method in promise mode
     * @tc.desc set system date time in promise mode
     */
    it('setDateTime_test_001', 0, async function (done) {
        await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_SUPER);
        let dsmgr = await enterpriseDeviceManager.getDeviceSettingsManager();
        expect(dsmgr !== null).assertTrue();
        console.log('before setDateTime');
        var setSuccess = await dsmgr.setDateTime(SELFWANT, 1526003846000);
        expect(setSuccess).assertTrue();
        await enterpriseDeviceManager.disableSuperAdmin(SELFHAPNAME);
        done();
    })

    /**
     * @tc.number SUB_CUSTOMIZATION_ENTERPRISE_DEVICE_MANAGER_JS_0021
     * @tc.name test setDateTime method in callback mode
     * @tc.desc set system date time in callback mode
     */
    it('setDateTime_test_002', 0, async function (done) {
        await enterpriseDeviceManager.enableAdmin(SELFWANT, ENTINFO1,
            enterpriseDeviceManager.AdminType.ADMIN_TYPE_SUPER);
        let dsmgr = await enterpriseDeviceManager.getDeviceSettingsManager();
        expect(dsmgr !== null).assertTrue();
        console.log('before setDateTime');
        await dsmgr.setDateTime(SELFWANT, 1526003846000, (error, data) => {
            console.log("setDateTime ===data: " + data);
            console.log("setDateTime ===error: " + error);
        });
        await enterpriseDeviceManager.disableSuperAdmin(SELFHAPNAME);
        done();
    })

    console.log('*************end EnterpriseDeviceManagerTest*************');
}) 