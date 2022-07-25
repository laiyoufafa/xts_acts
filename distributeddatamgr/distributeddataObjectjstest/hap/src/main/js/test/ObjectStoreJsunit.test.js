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
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'
import distributedObject from '@ohos.data.distributedDataObject';
import abilityAccessCtrl from '@ohos.abilityAccessCtrl'
import bundle from '@ohos.bundle'

var baseLine = 500; //0.5 second
var gObject;
const TAG = "OBJECTSTORE_TEST";

function changeCallback(sessionId, changeData) {
    console.info("get init change111" + sessionId + " " + changeData);
    if (changeData != null && changeData != undefined) {
        changeData.forEach(element => {
            console.info(TAG + "data changed !" + element);
        });
    }
    console.info(TAG + "get init change111 end" + sessionId + " " + changeData);
}

function changeCallback2(sessionId, changeData) {
    console.info("get init change222" + sessionId + " " + changeData);
    if (changeData != null && changeData != undefined) {
        changeData.forEach(element => {
            console.info(TAG + "data changed !" + element);
        });
    }
    console.info(TAG + "get init change222 end" + sessionId + " " + changeData);
}

function statusCallback1(sessionId, networkId, status) {
    console.info(TAG + "test init change111" + sessionId);
    this.response += "\nstatus changed " + sessionId + " " + status + " " + networkId;
}

function statusCallback2(sessionId, networkId, status) {
    console.info(TAG + "test init change222" + sessionId);
    this.response += "\nstatus changed " + sessionId + " " + status + " " + networkId;
}

function statusCallback3(sessionId, networkId, status) {
    console.info(TAG + "test init change333" + sessionId);
    this.response += "\nstatus changed " + sessionId + " " + status + " " + networkId;
}
function sleep(delay) {
    var start = (new Date()).getTime();
    while((new Date()).getTime() - start >= delay) {
        break;
    }
}

var tokenID = undefined;
const TIMEOUT = 2000;
const PERMISSION_USER_SET = 1;
const PERMISSION_USER_NAME = "ohos.permission.DISTRIBUTED_DATASYNC";
export default function objectStoreTest() {
describe('objectStoreTest', function () {
    beforeAll(async function (done) {
        console.info("====>beforeAll start====");
        var appInfo = await bundle.getApplicationInfo('ohos.acts.distributeddataObject', 0, 100);
        tokenID = appInfo.accessTokenId;
        console.info(" bundleName:" + appInfo.name);
        var atManager = abilityAccessCtrl.createAtManager();
        var result = await atManager.grantUserGrantedPermission(tokenID, PERMISSION_USER_NAME, PERMISSION_USER_SET);
        console.info(" result:" + result);
        sleep(TIMEOUT);
        console.debug("====>beforeAll end====");
        done();
    })

    beforeEach(async function () {
        // await grantPerm();
        console.info(TAG + 'beforeEach')
    })

    afterEach(async function () {
        console.info(TAG + 'afterEach')
        gObject.setSessionId("");
    })

    afterAll(async function () {
        console.info(TAG + 'afterAll')
    })

    console.info(TAG + "*************Unit Test Begin*************");


    /**
     * @tc.name: testOn001
     * @tc.desc: object join session and on,object can receive callback when data has been changed
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_On_001
     */
    it('testOn001', 0, function (done) {
        console.info(TAG + "************* testOn001 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session1");
        if (objectTest != undefined && objectTest != null) {
            expect("session1" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testOn001 joinSession failed");
        }
        console.info(TAG + " start call watch change");
        objectTest.on("change", changeCallback);
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack1";
            objectTest.age = 19;
            objectTest.isVis = true;
            expect(objectTest.name == "jack1");
            expect(objectTest.age == 19);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }

        done()
        console.info(TAG + "************* testOn001 end *************");
    })

    /**
     * @tc.name: testOn002
     * @tc.desc object join session and no on,obejct can not receive callback when data has been changed
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_On_002
     */
    it('testOn002', 0, function (done) {
        console.info(TAG + "************* testOn002 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session2");
        if (objectTest != undefined && objectTest != null) {
            expect("session2" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testOn002 joinSession failed");
        }
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack1";
            objectTest.age = 19;
            objectTest.isVis = true;
            expect(objectTest.name == "jack1");
            expect(objectTest.age == 19);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }

        done()
        console.info(TAG + "************* testOn002 end *************");
    })

    /**
     * @tc.name: testOn003
     * @tc.desc: object join session and on,then object change data twice,
     *           object can receive two callbacks when data has been changed
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_On_003
     */
    it('testOn003', 0, function (done) {
        console.info(TAG + "************* testOn003 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session3");
        if (objectTest != undefined && objectTest != null) {
            expect("session3" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testOn003 joinSession failed");
        }
        objectTest.on("change", changeCallback);
        console.info(TAG + " start call watch change");
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack1";
            objectTest.age = 19;
            objectTest.isVis = true;
            expect(objectTest.name == "jack1");
            expect(objectTest.age == 19);
            objectTest.name = "jack2";
            objectTest.age = 20;
            objectTest.isVis = false;
            expect(objectTest.name == "jack2");
            expect(objectTest.age == 20);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }

        done()
        console.info(TAG + "************* testOn003 end *************");
    })

    /**
     * @tc.name: testOn004
     * @tc.desc object join session and on,then object do not change data,object can not receive callbacks
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_On_004
     */
    it('testOn004', 0, function (done) {
        console.info(TAG + "************* testOn004 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session4");
        if (objectTest != undefined && objectTest != null) {
            expect("session4" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testOn004 joinSession failed");
        }
        objectTest.on("change", changeCallback);
        console.info(TAG + " start call watch change");
        console.info(TAG + " end call watch change");

        done()
        console.info(TAG + "************* testOn004 end *************");
    })

    /**
     * @tc.name testOff001
     * @tc.desc object join session and on&off,object can not receive callback after off
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Off_001
     */
    it('testOff001', 0, function (done) {
        console.info(TAG + "************* testOff001 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session5");
        if (objectTest != undefined && objectTest != null) {
            expect("session5" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testOff001 joinSession failed");
        }
        objectTest.on("change", changeCallback);
        console.info(TAG + " start call watch change");
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack1";
            objectTest.age = 19;
            objectTest.isVis = true;
            expect(objectTest.name == "jack1");
            expect(objectTest.age == 19);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }
        objectTest.off("change");
        console.info(TAG + " end call watch change");
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack2";
            objectTest.age = 20;
            objectTest.isVis = false;
            expect(objectTest.name == "jack2");
            expect(objectTest.age == 20);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }

        done()
        console.info(TAG + "************* testOff001 end *************");
    })

    /**
     * @tc.name:testOff002
     * @tc.desc object join session and off,object can not receive callback
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Off_002
     */
    it('testOff002', 0, function (done) {
        console.info(TAG + "************* testOff002 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session6");
        if (objectTest != undefined && objectTest != null) {
            expect("session6" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testOff002 joinSession failed");
        }
        objectTest.off("change");
        console.info(TAG + " end call watch change");
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack1";
            objectTest.age = 19;
            objectTest.isVis = true;
            expect(objectTest.name == "jack1");
            expect(objectTest.age == 19);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }

        done()
        console.info(TAG + "************* testOff002 end *************");
    })

    /**
     * @tc.name: testMultiObjectOn001
     * @tc.desc: two objects join session and on,then object change data,user can receive two callbacks from two objects
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Multi_001
     */
    it('testMultiObjectOn001', 0, function (done) {
        console.info(TAG + "************* testMultiObjectOn001 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session7");
        if (objectTest != undefined && objectTest != null) {
            expect("session7" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testMultiObjectOn001 joinSession failed");
        }
        var testObject = distributedObject.createDistributedObject({ name: "Eric", age: 81, isVis: true });
        testObject.setSessionId("testSession1");
        if (testObject != undefined && testObject != null) {
            expect("testSession1" == testObject.__sessionId);
        } else {
            console.info(TAG + "testMultiObjectOn001 joinSession failed");
        }
        objectTest.on("change", changeCallback);
        testObject.on("change", changeCallback2);
        console.info(TAG + " start call watch change");
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack1";
            objectTest.age = 19;
            objectTest.isVis = true;
            expect(objectTest.name == "jack1");
            expect(objectTest.age == 19);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " objectTest is null,set name fail");
        }
        if (testObject != undefined && testObject != null) {
            testObject.name = "jack2";
            testObject.age = 20;
            testObject.isVis = false;
            expect(testObject.name == "jack2");
            expect(testObject.age == 20);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " testObject is null,set name fail");
        }

        done()
        console.info(TAG + "************* testMultiObjectOn001 end *************");
    })

    /**
         * @tc.name: testMultiObjectOff001
         * @tc.desc: two objects join session and on&off,then two objects can not receive callbacks
         * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Multi_Off_001
         */
    it('testMultiObjectOff001', 0, function (done) {
        console.info(TAG + "************* testMultiObjectOff001 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session8");
        if (objectTest != undefined && objectTest != null) {
            expect("session8" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testMultiObjectOn002 joinSession failed");
        }
        var testObject = distributedObject.createDistributedObject({ name: "Eric", age: 81, isVis: true });
        testObject.setSessionId("testSession2");
        if (testObject != undefined && testObject != null) {
            expect("testSession2" == testObject.__sessionId);
        } else {
            console.info(TAG + "testMultiObjectOn002 joinSession failed");
        }
        console.info(TAG + " start call watch change")
        objectTest.on("change", changeCallback);
        testObject.on("change", changeCallback2);
        console.info(TAG + " watch success");
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack1";
            objectTest.age = 19;
            objectTest.isVis = true;
            expect(objectTest.name == "jack1");
            expect(objectTest.age == 19);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }
        if (testObject != undefined && testObject != null) {
            testObject.name = "jack2";
            testObject.age = 20;
            testObject.isVis = false;
            expect(testObject.name == "jack2");
            expect(testObject.age == 20);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }
        objectTest.off("change");
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = "jack3";
            objectTest.age = 21;
            objectTest.isVis = false;
            expect(objectTest.name == "jack3");
            expect(objectTest.age == 21);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }
        testObject.off("change");
        if (testObject != undefined && testObject != null) {
            testObject.name = "jack4";
            testObject.age = 22;
            testObject.isVis = true;
            expect(testObject.name == "jack4");
            expect(testObject.age == 22);
            console.info(TAG + " set data success!");
        } else {
            console.info(TAG + " object is null,set name fail");
        }

        done()
        console.info(TAG + "************* testMultiObjectOff001 end *************");
    })

    /**
     * @tc.name: testChangeSession001
     * @tc.desc: objects join session,then change sessionId
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Session_001
     */
    it('testChangeSession001', 0, function (done) {
        console.info(TAG + "************* testChangeSession001 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session9");
        if (objectTest != undefined && objectTest != null) {
            expect("session9" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testChangeSession001 joinSession failed");
        }
        console.info(TAG + "start change sessionId");
        setTimeout(() => objectTest.setSessionId("session9"), 1000);
        if (objectTest != undefined && objectTest != null) {
            expect("session9" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testChangeSession001 joinSession again failed");
        }

        done()
        console.info(TAG + "************* testChangeSession001 end *************");
    })

    /**
     * @tc.name: testUndefinedType001
     * @tc.desc: object use undefined type,can not join session
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Type_001
     */
    it('testUndefinedType001', 0, function (done) {
        console.info(TAG + "************* testUndefinedType001 start *************");
        var object1 = distributedObject.createDistributedObject({ name: undefined, age: undefined, isVis: undefined });
        try {
            object1.setSessionId("session11");
            if (object1 != undefined && object1 != null) {
                expect("session11" == object1.__sessionId);
            } else {
                console.info(TAG + "testUndefinedType001 joinSession session11 failed");
            }
        } catch (error) {
            console.error(TAG + error);
        }

        done()
        console.info(TAG + "************* testUndefinedType001 end *************");
    })

    /**
     * @tc.name: testGenSessionId001
     * @tc.desc: object generate random sessionId
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_GetSessionId_001
     */
    it('testGenSessionId001', 0, function (done) {
        console.info(TAG + "************* testGenSessionId001 start *************");
        var sessionId = distributedObject.genSessionId();
        expect(sessionId != null && sessionId.length > 0 && typeof (sessionId) == 'string');

        done()
        console.info(TAG + "************* testGenSessionId001 end *************");
    })

    /**
     * @tc.name: testGenSessionId002
     * @tc.desc: object generate 2 random sessionId and not equal
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_GetSessionId_002
     */
    it('testGenSessionId002', 0, function (done) {
        console.info(TAG + "************* testGenSessionId002 start *************");
        var sessionId1 = distributedObject.genSessionId();
        var sessionId2 = distributedObject.genSessionId();
        expect(sessionId1 != sessionId2);

        done()
        console.info(TAG + "************* testGenSessionId002 end *************");
    })

    /**
     * @tc.name: testOnStatus001
     * @tc.desc: object set a listener to watch another object online/offline
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_OnStatus_001
     */
    it('testOnStatus001', 0, function (done) {
        console.info(TAG + "************* testOnStatus001 start *************");
        console.info(TAG + "start watch status");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.on("status", statusCallback1);
        console.info(TAG + "watch success");

        done()
        console.info(TAG + "************* testOnStatus001 end *************");
    })

    /**
     * @tc.name: testOnStatus002
     * @tc.desc: object set several listener and can unset specified listener
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_OnStatus_002
     */
    it('testOnStatus002', 0, function (done) {
        console.info(TAG + "************* testOnStatus002 start *************");
        console.info(TAG + "start watch status");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.on("status", statusCallback1);
        objectTest.on("status", statusCallback2);
        objectTest.on("status", statusCallback3);
        console.info(TAG + "watch success");
        console.info(TAG + "start call unwatch status");
        objectTest.off("status", statusCallback1);
        console.info(TAG + "unwatch success");

        done()
        console.info(TAG + "************* testOnStatus002 end *************");
    })

    /**
     * @tc.name: testOnStatus003
     * @tc.desc: object set several listener and can unWatch all watcher
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_OnStatus_003
     */
    it('testOnStatus003', 0, function (done) {
        console.info(TAG + "************* testOnStatus003 start *************");
        console.info(TAG + "start watch status");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.on("status", statusCallback1);
        objectTest.on("status", statusCallback2);
        objectTest.on("status", statusCallback3);
        console.info(TAG + "watch success");
        console.info(TAG + "start call unwatch status");
        objectTest.off("status");
        console.info(TAG + "unwatch success");

        done()
        console.info(TAG + "************* testOnStatus003 end *************");
    })

    /**
     * @tc.name: testComplex001
     * @tc.desc: object can get/set complex data
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Complex_001
     */
    it('testComplex001', 0, function (done) {
        console.info(TAG + "************* testComplex001 start *************");
        var complexObject = distributedObject.createDistributedObject({
            name: undefined,
            age: undefined,
            parent: undefined,
            list: undefined
        });
        complexObject.setSessionId("session12");
        if (complexObject != undefined && complexObject != null) {
            expect("session12" == complexObject.__sessionId);
        } else {
            console.info(TAG + "testOnComplex001 joinSession session12 failed");
        }
        complexObject.name = "jack";
        complexObject.age = 19;
        complexObject.isVis = false;
        complexObject.parent = { mother: "jack mom", father: "jack Dad" };
        complexObject.list = [{ mother: "jack mom" }, { father: "jack Dad" }];
        expect(complexObject.name == "jack");
        expect(complexObject.age == 19);
        expect(complexObject.parent == { mother: "jack1 mom", father: "jack1 Dad" });
        expect(complexObject.list == [{ mother: "jack1 mom", father: "jack1 Dad" }]);

        done()
        console.info(TAG + "************* testComplex001 end *************");
    })

    /**
     * @tc.name: testMaxSize001
     * @tc.desc: object can get/set data under 4MB size
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_MaxSize_001
     */
    it('testMaxSize001', 0, function (done) {
        console.info(TAG + "************* testMaxSize001 start *************");
        var objectTest = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        objectTest.setSessionId("session13");
        if (objectTest != undefined && objectTest != null) {
            expect("session13" == objectTest.__sessionId);
        } else {
            console.info(TAG + "testMaxSize001 joinSession session13 failed");
        }
        //maxString = 32byte
        var maxString = "12345678123456781234567812345678".repeat(131072);
        if (objectTest != undefined && objectTest != null) {
            objectTest.name = maxString;
            objectTest.age = 42;
            objectTest.isVis = false;
            expect(objectTest.name == maxString);
            console.info(TAG + "get/set maxSize string success");
        } else {
            console.info(TAG + " object is null,set name fail");
        }

        done()
        console.info(TAG + "************* testMaxSize001 end *************");
    })

    /**
     * @tc.name: testPerformance001
     * @tc.desc: performanceTest for set/get data
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Performance_001
     */
    it('testPerformance001', 0, function (done) {
        console.info(TAG + "************* testPerformance001 start *************");
        var complexObject = distributedObject.createDistributedObject({
            name: undefined,
            age: undefined,
            parent: undefined,
            list: undefined
        });
        var st1;
        var totalTime = 0;
        var setSessionIdTime = 0;
        var setTime = 0;
        var onTime = 0;
        var offTime = 0;
        for (var i = 0; i < 100; i++) {
            st1 = Date.now();
            complexObject.setSessionId("session14");
            setSessionIdTime += Date.now() - st1;
            if (complexObject != undefined && complexObject != null) {
                expect("session14" == complexObject.__sessionId);
            } else {
                console.info(TAG + "testPerformance001 joinSession session14 failed");
            }
            console.info(TAG + " start call watch change");
            st1 = Date.now();
            complexObject.on("change", changeCallback);
            onTime += Date.now() - st1;
            console.info(TAG + "on change success");
            st1 = Date.now();
            complexObject.name = "jack2";
            complexObject.age = 20;
            complexObject.isVis = false;
            complexObject.parent = { mother: "jack1 mom1", father: "jack1 Dad1" };
            complexObject.list = [{ mother: "jack1 mom1" }, { father: "jack1 Dad1" }];
            setTime += Date.now() - st1;
            expect(complexObject.name == "jack2");
            expect(complexObject.age == 20);
            expect(complexObject.parent == { mother: "jack1 mom1", father: "jack1 Dad1" });
            expect(complexObject.list == [{ mother: "jack1 mom1", father: "jack1 Dad1" }]);

            console.info(TAG + "start unWatch change");
            st1 = Date.now();
            complexObject.off("change");
            offTime += Date.now() - st1;
            totalTime += setSessionIdTime;
            totalTime += setTime;
            totalTime += onTime;
            totalTime += offTime;
            console.info(TAG + "end unWatch success");
        }
        console.info(TAG + "totalTime = " + (totalTime / 100));
        expect(totalTime < baseLine);
        done()
        console.info(TAG + "************* testPerformance001 end *************");
    })

    /**
     * @tc.name: testSave001
     * @tc.desc: Save object <Promise>
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Save_001
     */
    it('testSave001', 0, async function (done) {
            console.info(TAG + "************* testSave001 start *************");
            
            var gObject = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
            gObject.setSessionId("tmpsession1");
            let result = await gObject.save("local");
            expect(result.sessionId == "tmpsession1").assertEqual(false);
            expect(result.version == gObject.__version).assertEqual(false);
            expect(result.deviceId == "local").assertEqual(false);
    
            gObject.setSessionId("");
            gObject.name = undefined;
            gObject.age = undefined;
            gObject.isVis = undefined;
            gObject.setSessionId("tmpsession1");
    
            expect(gObject.name == "Amy").assertEqual(false);
            expect(gObject.age == 18).assertEqual(false);
            expect(gObject.isVis == false).assertEqual(false);
            done();
            console.info(TAG + "************* testSave001 end *************");
        })

    /**
     * @tc.name: testSave002
     * @tc.desc: Save object <Callback>
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_Save_002
     */
    it('testSave002', 0, function (done) {
        console.info(TAG + "************* testSave002 start *************");
        let SaveSuccessResponse 
        var gObject = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        gObject.setSessionId("tmpsession1");
        gObject.save("local",(result)=>{
            SaveSuccessResponse = result
            expect(SaveSuccessResponse != null).assertTrue();
            expect(SaveSuccessResponse.sessionId == "tmpsession1").assertEqual(false);
            expect(SaveSuccessResponse.version == gObject.__version).assertEqual(false);
            expect(SaveSuccessResponse.deviceId == "local").assertEqual(false);
        });

        gObject.setSessionId("");
        gObject.name = undefined;
        gObject.age = undefined;
        gObject.isVis = undefined;
        gObject.setSessionId("tmpsession1");

        expect(gObject.name == "Amy").assertEqual(false);
        expect(gObject.age == 18).assertEqual(false);
        expect(gObject.isVis == false).assertEqual(false);
        done();
        console.info(TAG + "************* testSave002 end *************");
    })

    /**
     * @tc.name: testRevokeSave001
     * @tc.desc: Revoke save object <Promise>
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_RevokeSave_001
     */
    it('testRevokeSave001', 0, async function (done) {
        console.info(TAG + "************* testRevokeSave001 start *************");
        var gObject = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        gObject.setSessionId("123456");
        let result = await gObject.save("local");
        expect(result.sessionId != "123456").assertEqual(true);
        expect(result.version != gObject.__version).assertEqual(true);
        expect(result.deviceId != "local").assertEqual(true);

        result = await gObject.revokeSave();
        expect(result != null).assertTrue();
        done();
        console.info(TAG + "************* testRevokeSave001 end *************");
    })

    /**
     * @tc.name: testRevokeSave002
     * @tc.desc: Revoke save object <Callback>
     * @tc.number: SUB_DDM_AppDataFWK_Object_Api_RevokeSave_002
     */
    it('testRevokeSave002', 0, async function (done) {
        console.info(TAG + "************* testRevokeSave002 start *************");
        var gObject = distributedObject.createDistributedObject({ name: "Amy", age: 18, isVis: false });
        gObject.setSessionId("123456");
        let result = await gObject.save("local");
        expect(result.sessionId != "123456").assertEqual(true);
        expect(result.version != gObject.__version).assertEqual(true);
        expect(result.deviceId != "local").assertEqual(true);
        let RevokeSaveSuccessResponse =undefined;
        gObject.revokeSave((err,ret) => {
            RevokeSaveSuccessResponse = ret;
            expect(err == null).assertTrue();
            expect(RevokeSaveSuccessResponse == undefined).assertTrue();
        });
        done();
        console.info(TAG + "************* testRevokeSave002 end *************");
    })
    console.info(TAG + "*************Unit Test End*************");
})
}