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
import featureAbility from '@ohos.ability.featureAbility'
import abilityManager from '@ohos.app.abilityManager'
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from 'deccjsunit/index'

var WeightReasonCode = {
    REASON_UNKNOWN: 0,
    WEIGHT_FOREGROUND: 100,
    WEIGHT_FOREGROUND_SERVICE: 125,
    WEIGHT_VISIBLE: 200,
    WEIGHT_PERCEPTIBLE: 230,
    WEIGHT_SERVICE: 300,
    WEIGHT_TOP_SLEEPING: 325,
    WEIGHT_CANT_SAVE_STATE: 350,
    WEIGHT_CACHED: 400,
    WEIGHT_GONE: 1000
}

var abilityNameList = [
    "com.ohos.launcher.MainAbility",
    "com.ohos.callui.ServiceAbility",
    "com.example.SimulateFeatureAbilityFir",
    "com.example.VerifyIoThirdAbility",
    "com.example.SimulateFeatureAbilitySed",
    "com.example.actsamscallbackfifthscene.MainAbility"
]

var bundleNameList = [
    "com.ohos.launcher",
    "com.ohos.systemui",
    "com.ohos.callui",
    "com.ohos.contacts",
    "com.ohos.mms",
    "com.ohos.telephonydataability",
    "com.ohos.contactsdataability",
    "com.ix.simulate.feature",
    "com.ix.verify.io",
    "com.example.actsamscallbackfifthscene"
]

describe('ActsAmsCallBackFifthScene', function () {
    console.info('----ActsAmsCallBackFifthScene----');
    beforeAll(async function (done) {
        var maxnum = 10;
	    var flag = 1;
        var data = await abilityManager.queryRecentAbilityMissionInfos(maxnum, flag);
        console.log('queryRecentAbilityMissionInfos data  ' + JSON.stringify(data));
        for (var i = 0; i < data.length; i++) {
            if (data[i].baseAbility.bundleName != 'com.example.actsamscallbackfifthscene' &&
                data[i].topAbility.bundleName != 'com.example.actsamscallbackfifthscene') {
                var info = abilityManager.removeMission(data[i].id);
                console.log(' removeMission data  [' + info + ']');
            }
        }
        await featureAbility.startAbility(
            {
                want:
                {
                    deviceId: "",
                    bundleName: "com.ix.simulate.feature",
                    abilityName: "com.example.SimulateFeatureAbilityFir",
                    action: "action1",
                    parameters:
                        {},
                },
            },
        );
        await featureAbility.startAbility(
            {
                want:
                {
                    deviceId: "",
                    bundleName: "com.ix.verify.io",
                    abilityName: "com.example.VerifyIoThirdAbility",
                    action: "action1",
                    parameters:
                        {},
                },
            },
        );
        await featureAbility.startAbility(
            {
                want:
                {
                    deviceId: "",
                    bundleName: "com.ix.simulate.feature",
                    abilityName: "com.example.SimulateFeatureAbilitySed",
                    action: "action1",
                    parameters:
                        {},
                },
            },
        );
        setTimeout(done(), 5000);
    });

    function timeout(done) {
        expect().assertFail();
        console.debug('Acts_Ams_test=========timeout========');
        done();
    }

    function sleep(delay) {
        var start = (new Date()).getTime();
        var endTime = (new Date()).getTime();
        for (let index = 1; index > 0; index++) {
	        if (endTime - startTime > delay) {
		        break;
	        } else {
		        endTime = (new Date()).getTime();
        	}
        }
    }

    /*
     * @tc.number    : Acts_Ams_test_6600
     * @tc.name      : getAllRunningProcesses : Get All Running Processes Info
     * @tc.desc      : Get All Running Processes Info(by CallBack)
     */
    it('Acts_Ams_test_6600', 0, async function (done) {
        console.info("sleep begin");
        sleep(5000);
        console.info("sleep end");
        abilityManager.getAllRunningProcesses(
            (error, info) => {
                console.info('getAllRunningProcesses error.code \
                ' + error.code + ', data length [' + info.length + ']');
                console.info('Acts_Ams_test_6600 getAllRunningProcesses JSON String: ' + JSON.stringify(info));
                expect(Array.isArray(info)).assertEqual(true);
                expect(info.length).assertLarger(0);
                for (var i = 0; i < info.length; i++) {
                    expect(typeof (info[i].pid)).assertEqual("number");
                    expect(info[i].pid).assertLarger(0);

                    expect(typeof (info[i].processName)).assertEqual("string");
                    expect(info[i].processName.length).assertLarger(0);
                    expect(Array.isArray(info[i].pkgList)).assertEqual(true);
                    expect(info[i].pkgList.length).assertEqual(0);

                    expect(typeof (info[i].uid)).assertEqual("number");
                    expect(info[i].uid).assertLarger(0);

                    expect(typeof (info[i].lastMemoryLevel)).assertEqual("number");
                    expect(info[i].lastMemoryLevel).assertEqual(1);

                    expect(typeof (info[i].weight)).assertEqual("number");
                    expect(info[i].weight).assertEqual(-1);

                    expect(typeof (info[i].weightReasonCode)).assertEqual("number");
                    expect(info[i].weightReasonCode).assertEqual(WeightReasonCode.REASON_UNKNOWN);
                }
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
     * @tc.number    : Acts_Ams_test_7000
     * @tc.name      : queryRecentAbilityMissionInfos : Query Recent Ability Mission Infos
     * @tc.desc      : Query Recent Ability Mission Infos(by CallBack)
     */
    it('Acts_Ams_test_7000', 0, async function (done) {
        var maxnum = 10;
	 var flag = 1;
        abilityManager.queryRecentAbilityMissionInfos(maxnum, flag,
            (error, data) => {
                console.info('queryRecentAbilityMissionInfos error.code : \
                ' + error.code + ',data length [' + data.length + ']');
                console.info('Acts_Ams_test_7000 queryRecentAbilityMissionInfos data ' + JSON.stringify(data));
                expect(Array.isArray(data)).assertEqual(true);
                expect(data.length).assertEqual(3);
                for (var i = 0; i < data.length; i++) {
                    expect(typeof (data[i].id)).assertEqual("number");
                    expect(data[i].id).assertLarger(0);

                    expect(typeof (data[i].baseAbility)).assertEqual("object");
                    expect(typeof (data[i].baseAbility.deviceId)).assertEqual("string");
                    expect(data[i].baseAbility.deviceId.length).assertEqual(0);
                    expect(typeof (data[i].baseAbility.bundleName)).assertEqual("string");
                    expect(data[i].baseAbility.bundleName.length).assertLarger(0);
                    expect(bundleNameList.indexOf(data[i].baseAbility.bundleName)).assertLarger(-1);
                    expect(typeof (data[i].baseAbility.abilityName)).assertEqual("string");
                    expect(data[i].baseAbility.abilityName.length).assertLarger(0);
                    expect(abilityNameList.indexOf(data[i].baseAbility.abilityName)).assertLarger(-1);

                    expect(typeof (data[i].topAbility)).assertEqual("object");
                    expect(typeof (data[i].topAbility.deviceId)).assertEqual("string");
                    expect(data[i].topAbility.deviceId.length).assertEqual(0);
                    expect(typeof (data[i].topAbility.bundleName)).assertEqual("string");
                    expect(data[i].topAbility.bundleName.length).assertLarger(0);
                    expect(bundleNameList.indexOf(data[i].topAbility.bundleName)).assertLarger(-1);
                    expect(typeof (data[i].topAbility.abilityName)).assertEqual("string");
                    expect(data[i].topAbility.abilityName.length).assertLarger(0);
                    expect(abilityNameList.indexOf(data[i].topAbility.abilityName)).assertLarger(-1);

                    expect(typeof (data[i].missionDescription)).assertEqual("object");
                    expect(typeof (data[i].missionDescription.label)).assertEqual("string");
                    expect(typeof (data[i].missionDescription.iconPath)).assertEqual("string");
                }
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
     * @tc.number    : Acts_Ams_test_6800
     * @tc.name      : queryRunningAbilityMissionInfos : Query Running Ability Mission Infos
     * @tc.desc      : Query Running Ability Mission Infos(by CallBack)
     */
    it('Acts_Ams_test_6800', 0, async function (done) {
        var maxnum = 10;
        abilityManager.queryRunningAbilityMissionInfos(maxnum,
            (error, data) => {
                console.info('queryRunningAbilityMissionInfos error.code : \
                ' + error.code + ',data length [' + data.length + ']');
                console.info('Acts_Ams_test_6800 queryRunningAbilityMissionInfos data ' + JSON.stringify(data));
                expect(Array.isArray(data)).assertEqual(true);
                expect(data.length).assertEqual(3);
                for (var i = 0; i < data.length; i++) {
                    expect(typeof (data[i].id)).assertEqual("number");
                    expect(data[i].id).assertLarger(0);

                    expect(typeof (data[i].baseAbility)).assertEqual("object");
                    expect(typeof (data[i].baseAbility.deviceId)).assertEqual("string");
                    expect(data[i].baseAbility.deviceId.length).assertEqual(0);
                    expect(typeof (data[i].baseAbility.bundleName)).assertEqual("string");
                    expect(data[i].baseAbility.bundleName.length).assertLarger(0);
                    expect(bundleNameList.indexOf(data[i].baseAbility.bundleName)).assertLarger(-1);
                    expect(typeof (data[i].baseAbility.abilityName)).assertEqual("string");
                    expect(data[i].baseAbility.abilityName.length).assertLarger(0);
                    expect(abilityNameList.indexOf(data[i].baseAbility.abilityName)).assertLarger(-1);

                    expect(typeof (data[i].topAbility)).assertEqual("object");
                    expect(typeof (data[i].topAbility.deviceId)).assertEqual("string");
                    expect(data[i].topAbility.deviceId.length).assertEqual(0);
                    expect(typeof (data[i].topAbility.bundleName)).assertEqual("string");
                    expect(data[i].topAbility.bundleName.length).assertLarger(0);
                    expect(bundleNameList.indexOf(data[i].topAbility.bundleName)).assertLarger(-1);
                    expect(typeof (data[i].topAbility.abilityName)).assertEqual("string");
                    expect(data[i].topAbility.abilityName.length).assertLarger(0);
                    expect(abilityNameList.indexOf(data[i].topAbility.abilityName)).assertLarger(-1);

                    expect(typeof (data[i].missionDescription)).assertEqual("object");
                    expect(typeof (data[i].missionDescription.label)).assertEqual("string");
                    expect(typeof (data[i].missionDescription.iconPath)).assertEqual("string");
                }
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
     * @tc.number    : Acts_Ams_test_9000
     * @tc.name      : getActiveProcessInfos : Get All Active Processes Info
     * @tc.desc      : Get All Active Processes Info(by CallBack)
     */
    it('Acts_Ams_test_9000', 0, async function (done) {
        abilityManager.getActiveProcessInfos(
            (error, info) => {
                console.info('getActiveProcessInfos error.code \
                ' + error.code + ', data length [' + info.length + ']');
                console.info('Acts_Ams_test_9000 getActiveProcessInfos data ' + JSON.stringify(info));
                expect(Array.isArray(info)).assertEqual(true);
                expect(info.length).assertLarger(0);
                for (var i = 0; i < info.length; i++) {
                    expect(typeof (info[i].pid)).assertEqual("number");
                    expect(info[i].pid).assertLarger(0);

                    expect(typeof (info[i].processName)).assertEqual("string");
                    expect(info[i].processName.length).assertLarger(0);
                    expect(Array.isArray(info[i].bundleNames)).assertEqual(true);
                    expect(info[i].bundleNames.length).assertEqual(0);

                    expect(typeof (info[i].uid)).assertEqual("number");
                    expect(info[i].uid).assertLarger(0);
                }
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
    * @tc.number    : Acts_Ams_test_10000
    * @tc.name      : getActiveAbilityMissionInfos : Get Active Ability Mission Infos
    * @tc.desc      : Get Active Ability Mission Infos(by CallBack)
    */
    it('Acts_Ams_test_10000', 0, async function (done) {
        var maxnum = 10;
        abilityManager.getActiveAbilityMissionInfos(maxnum,
            (error, info) => {
                console.info('queryRecentAbilityMissionInfos error.code : \
                ' + error.code + ',data length [' + info.length + ']');
                console.info('Acts_Ams_test_10000 getActiveAbilityMissionInfos info ' + JSON.stringify(info));
                expect(Array.isArray(info)).assertEqual(true);
                expect(info.length).assertEqual(3);
                for (var i = 0; i < info.length; i++) {
                    expect(typeof (info[i].missionId)).assertEqual("number");
                    expect(info[i].missionId).assertLarger(0);

                    expect(typeof (info[i].bottomAbility)).assertEqual("object");
                    expect(typeof (info[i].bottomAbility.deviceId)).assertEqual("string");
                    expect(info[i].bottomAbility.deviceId.length).assertEqual(0);
                    expect(typeof (info[i].bottomAbility.bundleName)).assertEqual("string");
                    expect(info[i].bottomAbility.bundleName.length).assertLarger(0);
                    expect(bundleNameList.indexOf(info[i].bottomAbility.bundleName)).assertLarger(-1);
                    expect(typeof (info[i].bottomAbility.abilityName)).assertEqual("string");
                    expect(info[i].bottomAbility.abilityName.length).assertLarger(0);
                    expect(abilityNameList.indexOf(info[i].bottomAbility.abilityName)).assertLarger(-1);
                    expect(typeof (info[i].bottomAbility.uri)).assertEqual("string");
                    expect(info[i].bottomAbility.uri.length).assertEqual(0);
                    expect(typeof (info[i].bottomAbility.shortName)).assertEqual("string");
                    expect(info[i].bottomAbility.shortName.length).assertEqual(0);

                    expect(typeof (info[i].topAbility)).assertEqual("object");
                    expect(typeof (info[i].topAbility.deviceId)).assertEqual("string");
                    expect(info[i].topAbility.deviceId.length).assertEqual(0);
                    expect(typeof (info[i].topAbility.bundleName)).assertEqual("string");
                    expect(info[i].topAbility.bundleName.length).assertLarger(0);
                    expect(bundleNameList.indexOf(info[i].topAbility.bundleName)).assertLarger(-1);
                    expect(typeof (info[i].topAbility.abilityName)).assertEqual("string");
                    expect(info[i].topAbility.abilityName.length).assertLarger(0);
                    expect(abilityNameList.indexOf(info[i].topAbility.abilityName)).assertLarger(-1);
                    expect(typeof (info[i].topAbility.uri)).assertEqual("string");
                    expect(info[i].topAbility.uri.length).assertEqual(0);
                    expect(typeof (info[i].topAbility.shortName)).assertEqual("string");
                    expect(info[i].topAbility.shortName.length).assertEqual(0);

                    expect(typeof (info[i].windowMode)).assertEqual("number");
                    expect(info[i].windowMode).assertEqual(0);
                }
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
    * @tc.number    : Acts_Ams_test_11000
    * @tc.name      : getPreviousAbilityMissionInfos : Get Previous Ability Mission Infos
    * @tc.desc      : Get Previous Ability Mission Infos(by CallBack)
    */
    it('Acts_Ams_test_11000', 0, async function (done) {
        var maxnum = 10;
        abilityManager.getPreviousAbilityMissionInfos(maxnum,
            (error, info) => {
                console.info('queryRecentAbilityMissionInfos error.code : \
                ' + error.code + ',data length [' + info.length + ']');
                console.info('Acts_Ams_test_11000 getPreviousAbilityMissionInfos info ' + JSON.stringify(info));
                expect(Array.isArray(info)).assertEqual(true);
                expect(info.length).assertEqual(3);
                for (var i = 0; i < info.length; i++) {
                    expect(typeof (info[i].missionId)).assertEqual("number");
                    expect(info[i].missionId).assertLarger(0);

                    expect(typeof (info[i].bottomAbility)).assertEqual("object");
                    expect(typeof (info[i].bottomAbility.deviceId)).assertEqual("string");
                    expect(info[i].bottomAbility.deviceId.length).assertEqual(0);
                    expect(typeof (info[i].bottomAbility.bundleName)).assertEqual("string");
                    expect(info[i].bottomAbility.bundleName.length).assertLarger(0);
                    expect(bundleNameList.indexOf(info[i].bottomAbility.bundleName)).assertLarger(-1);
                    expect(typeof (info[i].bottomAbility.abilityName)).assertEqual("string");
                    expect(info[i].bottomAbility.abilityName.length).assertLarger(0);
                    expect(abilityNameList.indexOf(info[i].bottomAbility.abilityName)).assertLarger(-1);
                    expect(typeof (info[i].bottomAbility.uri)).assertEqual("string");
                    expect(info[i].bottomAbility.uri.length).assertEqual(0);
                    expect(typeof (info[i].bottomAbility.shortName)).assertEqual("string");
                    expect(info[i].bottomAbility.shortName.length).assertEqual(0);

                    expect(typeof (info[i].topAbility)).assertEqual("object");
                    expect(typeof (info[i].topAbility.deviceId)).assertEqual("string");
                    expect(info[i].topAbility.deviceId.length).assertEqual(0);
                    expect(typeof (info[i].topAbility.bundleName)).assertEqual("string");
                    expect(info[i].topAbility.bundleName.length).assertLarger(0);
                    expect(bundleNameList.indexOf(info[i].topAbility.bundleName)).assertLarger(-1);
                    expect(typeof (info[i].topAbility.abilityName)).assertEqual("string");
                    expect(info[i].topAbility.abilityName.length).assertLarger(0);
                    expect(abilityNameList.indexOf(info[i].topAbility.abilityName)).assertLarger(-1);
                    expect(typeof (info[i].topAbility.uri)).assertEqual("string");
                    expect(info[i].topAbility.uri.length).assertEqual(0);
                    expect(typeof (info[i].topAbility.shortName)).assertEqual("string");
                    expect(info[i].topAbility.shortName.length).assertEqual(0);

                    expect(typeof (info[i].windowMode)).assertEqual("number");
                    expect(info[i].windowMode).assertEqual(0);
                }
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
     * @tc.number    : Acts_Ams_test_7200
     * @tc.name      : removeMission : Remove Mission
     * @tc.desc      : Remove Mission(by CallBack)
     */
    it('Acts_Ams_test_7200', 0, async function (done) {
        var maxnum = 10;
        var result = await abilityManager.queryRunningAbilityMissionInfos(maxnum);
        abilityManager.removeMission(result[1].id,
            (error, info) => {
                console.info('Acts_Ams_test_7200 removeMission error.code \
                ' + error.code + ',data  [' + info + ']');
                expect(typeof (info)).assertEqual("number");
                expect(info).assertEqual(0);
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
     * @tc.number    : Acts_Ams_test_7600
     * @tc.name      : moveMissionToTop : Move Mission To Top
     * @tc.desc      : Move Mission To Top(by CallBack)
     */
    it('Acts_Ams_test_7600', 0, async function (done) {
        var maxnum = 10;
        var result = await abilityManager.queryRunningAbilityMissionInfos(maxnum);
        abilityManager.moveMissionToTop(result[0].id,
            (error, info) => {
                console.info('Acts_Ams_test_7600 moveMissionToTop error.code \
                ' + error.code + ',data  [' + info + ']');
                expect(typeof (info)).assertEqual("number");
                expect(info).assertEqual(0);
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
     * @tc.number    : Acts_Ams_test_12000
     * @tc.name      : deleteMissions : Remove Missions
     * @tc.desc      : Remove Missions(by CallBack)
     */
    it('Acts_Ams_test_12000', 0, async function (done) {
        var maxnum = 10;
        var result = await abilityManager.queryRunningAbilityMissionInfos(maxnum);
        abilityManager.deleteMissions([result[0].id],
            (error, info) => {
                console.info('Acts_Ams_test_12000 deleteMissions error.code \
                ' + error.code + ',data  [' + info + ']');
                expect(typeof (info)).assertEqual("number");
                expect(info).assertEqual(0);
                done();
            });
        setTimeout(timeout, 5000);
    })

    /*
     * @tc.number    : Acts_Ams_test_8000
     * @tc.name      : killProcessesByBundleName : Kill Processes By BundleName
     * @tc.desc      : Kill Processes By BundleName(by CallBack)
     */
    it('Acts_Ams_test_8000', 0, async function (done) {
        abilityManager.killProcessesByBundleName('com.ix.verify.io',
            (error, info) => {
                console.info('Acts_Ams_test_8000 killProcessesByBundleName error.code: \
                ' + error.code + ',data  [' + info + ']');
                expect(typeof (info)).assertEqual("number");
                expect(info).assertEqual(0);
                done();
            });
        setTimeout(timeout, 5000);
    })
})
