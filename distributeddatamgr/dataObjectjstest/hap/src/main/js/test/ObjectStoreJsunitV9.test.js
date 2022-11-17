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
import {afterAll, afterEach, beforeAll, beforeEach, describe, expect, it} from 'deccjsunit/index';
import distributedObject from '@ohos.data.distributedDataObject';
import abilityAccessCtrl from '@ohos.abilityAccessCtrl';
import featureAbility from '@ohos.ability.featureAbility';
import bundle from '@ohos.bundle';
var context;
const TAG = "OBJECTSTORE_TEST";
function changeCallback(sessionId, changeData) {
    console.info("changeCallback start");
    console.info(TAG + "sessionId:" + " " + sessionId);
    if (changeData != null && changeData != undefined) {
        changeData.forEach(element => {
            console.info(TAG + "data changed !" + element);
        });
    }
    console.info("changeCallback end");
}

function statusCallback1(sessionId, networkId, status) {
    console.info(TAG + "statusCallback1" + " " + sessionId);
    this.response += "\nstatus changed " + sessionId + " " + status + " " + networkId;
}

function statusCallback2(sessionId, networkId, status) {
    console.info(TAG + "statusCallback2" + " " + sessionId);
    this.response += "\nstatus changed " + sessionId + " " + status + " " + networkId;
}

const PERMISSION_USER_SET = 1;
const PERMISSION_USER_NAME = "ohos.permission.DISTRIBUTED_DATASYNC";
var tokenID = undefined;
async function grantPerm() {
    console.info("====grant Permission start====");
    var appInfo = await bundle.getApplicationInfo('ohos.acts.dataObject', 0, 100);
    tokenID = appInfo.accessTokenId;
    console.info("accessTokenId" + appInfo.accessTokenId + " bundleName:" + appInfo.bundleName);
    var atManager = abilityAccessCtrl.createAtManager();
    var result = await atManager.grantUserGrantedPermission(tokenID, PERMISSION_USER_NAME, PERMISSION_USER_SET);
    console.info("tokenId" + tokenID + " result:" + result);
    console.info("====grant Permission end====");
}

export default function objectStoreTestV9() {
describe('objectStoreTest', function () {
    beforeAll(async function (done) {
        await grantPerm();
        done();
    })

    beforeEach(function () {
        console.info(TAG + 'beforeEach');
        context = featureAbility.getContext();
    })

    afterEach(function () {
        console.info(TAG + 'afterEach')
    })

    afterAll(function () {
        console.info(TAG + 'afterAll')
    })

    console.log(TAG + "*************Unit Test Begin*************");


    /**
     * @tc.name: V9testsetSessionId001
     * @tc.desc: object join session and on,object can receive callback when data has been changed
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_001
     * @tc.type: FUNC
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_001', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_001 start *************");
        var g_object;
        try {
            g_object = distributedObject.create(123, {name: "Amy", age: 18, isVis: false});
        } catch (error) {
            console.info(error.code + error.message);
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'context' must be 'Context'.").assertEqual(true);
        }
        try {
            g_object = distributedObject.create(context, 123);
        } catch (error) {
            console.info(error.code + error.message);
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'source' must be 'object'.").assertEqual(true);
        }
        g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("123456").then((data) => {
            console.info(TAG + "SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_001");
            console.info(TAG + data);
        }).catch((error) => {
            console.info(TAG + error);
        });
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_001 end *************");
        g_object.setSessionId((error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name: V9testsetSessionId002
     * @tc.desc: object join session and on,object can receive callback when data has been changed
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_002
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_002', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_002 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        try {
            g_object.setSessionId(123).then((data) => {
                console.info(TAG + "setSessionId test");
                console.info(TAG + data);
            }).catch((err) => {
                console.info(TAG + err.code + err.message);
            });
        } catch (error) {
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'sessionId' must be 'string'.").assertEqual(true);
        }
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_002 end *************");
        g_object.setSessionId((error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name: V9testsetSessionId003
     * @tc.desc: object join session and on,object can receive callback when data has been changed
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_003
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_003', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_003 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("session1");
        expect("session1" == g_object.__sessionId).assertEqual(true);
        g_object.setSessionId("session1").then(() => {
            console.info(TAG + "setSessionId test");
        }).catch((error) => {
            expect(error.code == 15400001).assertEqual(true);
            expect(error.message == "create table failed").assertEqual(true);
        });
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_003 end *************");
        g_object.setSessionId((error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name: V9testsetSessionId004
     * @tc.desc: object join session and on,object can receive callback when data has been changed
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_004
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_004', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_004 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("123456").then((data) => {
            console.info(TAG + "setSessionId test");
            console.info(TAG + data);
        }).catch((err) => {
            console.info(TAG + err.code + err.message);
        });
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_004 end *************");
        g_object.setSessionId((error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name: V9testsetSessionId005
     * @tc.desc: object join session and on,object can receive callback when data has been changed
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_005
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_005', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_005 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("123456", (error, data) => {
            console.info(TAG + error + "," + data);
            console.info(TAG + "setSessionId test");
        });
        g_object.setSessionId("", (error, data) => {
            console.info(TAG + error + "," + data);
        });
        try {
            g_object.setSessionId(1234, (error, data) => {
                console.info(TAG + error + "," + data);
                console.info(TAG + "setSessionId test");
            });
        } catch (error) {
            console.log(error.code + error.message);
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'sessionId' must be 'string'.").assertEqual(true);
        }
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_SetSessionId_005 end *************");
        g_object.setSessionId("", (error, data) => {
            console.info(TAG + error + "," + data);
        });
    })


    /**
     * @tc.name: V9testOn001
     * @tc.desc: object join session and on,object can receive callback when data has been changed
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_On_001
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_On_001', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_On_001 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("session1").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
        expect("session1" == g_object.__sessionId).assertEqual(true);
        console.info(TAG + " start call watch change");
        g_object.on("change", function (sessionId, changeData) {
            console.info("SUB_DDM_AppDataFWK_Object_Api9_On_001 callback start.");
            if (changeData != null && changeData != undefined) {
                changeData.forEach(element => {
                    console.info(TAG + "data changed !" + element);
                });
            }
            console.info("SUB_DDM_AppDataFWK_Object_Api9_On_001 callback end.");
        });

        if (g_object != undefined && g_object != null) {
            g_object.name = "jack1";
            g_object.age = 19;
            g_object.isVis = true;
            expect(g_object.name == "jack1").assertEqual(true);
            expect(g_object.age == 19).assertEqual(true);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }

        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_On_001 end *************");
        g_object.setSessionId("", (error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name: V9testOn002
     * @tc.desc: object join session and on,then object change data twice,object can receive two callbacks when data has been changed
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_On_002
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_On_002', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_On_002 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("session1");
        expect("session1" == g_object.__sessionId).assertEqual(true);
        console.info(TAG + " start call watch change");
        try {
            g_object.on(123, function (sessionId, changeData) {
                console.info("SUB_DDM_AppDataFWK_Object_Api9_On_002 callback start.");
                console.info(TAG + sessionId);
                if (changeData != null && changeData != undefined) {
                    changeData.forEach(element => {
                        console.info(TAG + "data changed !" + element);
                    });
                }
                console.info("SUB_DDM_AppDataFWK_Object_Api9_On_002 callback end.");
            });

        } catch (error) {
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'type' must be 'string'.").assertEqual(true);
        }
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_On_002 end *************");
        g_object.setSessionId("", (error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name: testOn003
     * @tc.desc object join session and on,then object do not change data,object can not receive callbacks
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_On_003
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_On_003', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_On_003 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("session1").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
        expect("session1" == g_object.__sessionId).assertEqual(true);
        console.info(TAG + " start call watch change");
        try {
            g_object.on("error", function (sessionId, changeData) {
                console.info("SUB_DDM_AppDataFWK_Object_Api9_On_003 callback start.");
                if (changeData != null && changeData != undefined) {
                    changeData.forEach(element => {
                        console.info(TAG + "data changed !" + element);
                    });
                }
                console.info("SUB_DDM_AppDataFWK_Object_Api9_On_003 callback end.");
            });
        } catch (error) {
            expect(error != undefined).assertEqual(true);
        }
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_On_003 end *************");
        g_object.setSessionId("", (error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name V9testOff001
     * @tc.desc object join session and on&off,object can not receive callback after off
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_Off_001
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_Off_001', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_Off_001 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("session5").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
        expect("session5" == g_object.__sessionId).assertEqual(true);

        g_object.on("change", changeCallback);
        console.info(TAG + " start call watch change");
        if (g_object != undefined && g_object != null) {
            g_object.name = "jack1";
            g_object.age = 19;
            g_object.isVis = true;
            expect(g_object.name == "jack1").assertEqual(true);
            expect(g_object.age == 19).assertEqual(true);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }
        g_object.off("change", changeCallback);
        console.info(TAG + " end call watch change");
        if (g_object != undefined && g_object != null) {
            g_object.name = "jack2";
            g_object.age = 20;
            g_object.isVis = false;
            expect(g_object.name == "jack2").assertEqual(true);
            expect(g_object.age == 20).assertEqual(true);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_Off_001 end *************");
        g_object.setSessionId((error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name:V9testOff002
     * @tc.desc object join session and off,object can not receive callback
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_Off_002
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_Off_002', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_Off_002 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("session6").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
        expect("session6" == g_object.__sessionId).assertEqual(true);
        try {
            g_object.off(123);
        } catch (error) {
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'type' must be 'string'.").assertEqual(true);
        }
        console.info(TAG + " end call watch change");
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_Off_002 end *************");
        g_object.setSessionId().then((data) => {
            console.info(TAG + data);
            console.info(TAG + "setSessionId test");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
    })

    /**
     * @tc.name: V9testOnStatus001
     * @tc.desc: object set a listener to watch another object online/offline
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_OnStatus_001
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_OnStatus_001', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_OnStatus_001 start *************");
        console.log(TAG + "start watch status");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        try {
            g_object.on("status", null);
        } catch (error) {
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'callback' must be 'function'.").assertEqual(true);
        }
        console.log(TAG + "watch success");
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_OnStatus_001 end *************");
        g_object.setSessionId("").then((data) => {
            console.info(TAG + data);
            console.info(TAG + "setSessionId test");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
    })

    /**
     * @tc.name: V9testOnStatus002
     * @tc.desc: object set several listener and can unWatch all watcher
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_OnStatus_002
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_OnStatus_002', 0, function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_OnStatus_002 start *************");
        console.log(TAG + "start watch status");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        expect(g_object.name == "Amy").assertEqual(true);
        g_object.on("status", statusCallback1);
        console.log(TAG + "watch success");
        console.log(TAG + "start call unwatch status");
        g_object.off("status");
        console.log(TAG + "unwatch success");
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_OnStatus_002 end *************");
        g_object.setSessionId().then(() => {
            console.info("leave session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
    })

    /**
     * @tc.name: V9testSave001
     * @tc.desc: test save local
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_Save_001
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_Save_001', 0, async function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_Save_001 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);

        g_object.setSessionId("tmpsession1").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
        expect("tmpsession1" == g_object.__sessionId).assertEqual(true);

        let result = await g_object.save("local");
        expect(result.sessionId == "tmpsession1").assertEqual(true);
        expect(result.version == g_object.__version).assertEqual(true);
        expect(result.deviceId == "local").assertEqual(true);

        g_object.setSessionId((error, data) => {
            console.info(TAG + error + "," + data);
        });
        g_object.name = undefined;
        g_object.age = undefined;
        g_object.isVis = undefined;
        g_object.setSessionId("tmpsession1").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });

        expect(g_object.name == "Amy").assertEqual(true);
        expect(g_object.age == 18).assertEqual(true);
        expect(g_object.isVis == false).assertEqual(true);
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_Save_001 end *************");
        g_object.setSessionId().then(() => {
            console.info("leave session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
    })

    /**
     * @tc.name: V9testSave002
     * @tc.desc: test save local
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_Save_002
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_Save_002', 0, async function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_Save_002 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);

        g_object.setSessionId("tmpsession1").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
        expect("tmpsession1" == g_object.__sessionId).assertEqual(true);
        try {
            g_object.save(1234).then((result) => {
                expect(result.sessionId == "tmpsession1").assertEqual(true);
                expect(result.version == g_object.__version).assertEqual(true);
                expect(result.deviceId == "local").assertEqual(true);
            })
        } catch (error) {
            expect(error.message == "Parameter error. The type of 'deviceId' must be 'string'.").assertEqual(true);
        }
        g_object.save("errorDeviceId").then((result) => {
            expect(result.sessionId == "tmpsession1").assertEqual(true);
            expect(result.version == g_object.__version).assertEqual(true);
            expect(result.deviceId == "local").assertEqual(true);
        }).catch((error) => {
            expect(error != undefined).assertEqual(true);
        });
        
        try {
            g_object.save("local", 123);
        } catch (error) {
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'callback' must be 'function'.").assertEqual(true);
        }
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_Save_002 end *************");
        g_object.setSessionId().then(() => {
            console.info("leave session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
    })

    /**
     * @tc.name: V9testRevokeSave001
     * @tc.desc: test RevokeSave
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_RevokeSave_001
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_RevokeSave_001', 0, async function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_RevokeSave_001 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);

        g_object.setSessionId("123456").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
        expect("123456" == g_object.__sessionId).assertEqual(true);

        let result = await g_object.save("local");
        expect(result.sessionId == "123456").assertEqual(true);
        expect(result.version == g_object.__version).assertEqual(true);
        expect(result.deviceId == "local").assertEqual(true);
        result = await g_object.revokeSave();

        g_object.setSessionId((error, data) => {
            console.info(TAG + error + "," + data);
        });
        g_object.name = undefined;
        g_object.age = undefined;
        g_object.isVis = undefined;
        g_object.setSessionId("123456").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });

        expect(g_object.name == undefined).assertEqual(true);
        expect(g_object.age == undefined).assertEqual(true);
        expect(g_object.isVis == undefined).assertEqual(true);
        expect(result.sessionId == "123456").assertEqual(true);
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_RevokeSave_001 end *************");
        g_object.setSessionId("", (error, data) => {
            console.info(TAG + error + "," + data);
        });
    })

    /**
     * @tc.name: V9testRevokeSave002
     * @tc.desc: test RevokeSave
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api9_RevokeSave_002
     */
    it('SUB_DDM_AppDataFWK_Object_Api9_RevokeSave_002', 0, async function () {
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_RevokeSave_002 start *************");
        var g_object = distributedObject.create(context, {name: "Amy", age: 18, isVis: false});
        expect(g_object == undefined).assertEqual(false);
        g_object.setSessionId("123456").then(() => {
            console.info("join session");
        }).catch((error) => {
            console.info(TAG + error.code + error.message);
        });
        expect("123456" == g_object.__sessionId).assertEqual(true);
        let result = await g_object.save("local");
        expect(result.sessionId == "123456").assertEqual(true);
        expect(result.version == g_object.__version).assertEqual(true);
        expect(result.deviceId == "local").assertEqual(true);
        try {
            g_object.revokeSave(123).then((result) => {
                expect(result.sessionId == "tmpsession1").assertEqual(true)
            }).catch((err) => {
                console.log(err.code + err.message);
            });
        } catch (error) {
            console.info(error.code + error.message);
            expect(error.code == 401).assertEqual(true);
            expect(error.message == "Parameter error. The type of 'callback' must be 'function'.").assertEqual(true);
        }
        console.log(TAG + "************* SUB_DDM_AppDataFWK_Object_Api9_RevokeSave_002 end *************");
        g_object.setSessionId("", (error, data) => {
            console.info(TAG + error + "," + data);
        });
    })
    
    console.log(TAG + "*************Unit Test End*************");
})
}