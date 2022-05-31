/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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
import sensor from '@ohos.sensor'
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from 'deccjsunit/index'

describe("SensorJsTest", function () {
    function callback(data) {
        console.info("callback" + JSON.stringify(data));
        expect(typeof (data.intensity)).assertEqual("number");
    }

    function callback2(data) {
        console.info("callback2" + JSON.stringify(data));
        expect(typeof (data.intensity)).assertEqual("number");
    }

    beforeAll(function () {

        /*
         * @tc.setup: setup invoked before all testcases
         */
        console.info('beforeAll caled')
    })

    afterAll(function () {

        /*
         * @tc.teardown: teardown invoked after all testcases
         */
        console.info('afterAll caled')
    })

    beforeEach(function () {

        /*
         * @tc.setup: setup invoked before each testcases
         */
        console.info('beforeEach caled')
    })

    afterEach(function () {

        /*
         * @tc.teardown: teardown invoked after each testcases
         */
        console.info('afterEach caled')
    })

    let errMessages = ['The number of parameters is not valid', 'Should subscribe first',
    'string is not defined'];

    let errMessage;

    /*
     * @tc.name:Ambient_Light_SensorJsTest001
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest001", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest001---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback);
        setTimeout(() => {
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT);
            done();
        }, 1500);
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest002
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest002", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest002---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------Ambient_Light_SensorJsTest002 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT);
            console.info('----------------------Ambient_Light_SensorJsTest002 off end---------------------------');
            done();
        }, 1500);
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest003
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest003", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest003---------------------------');
        function onSensorCallback(data) {
            console.info('Ambient_Light_SensorJsTest003  on error');
            expect(false).assertTrue();
            done();
        }
        try {
            sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, onSensorCallback, { 'interval': 100000000 }, 5);
        } catch (error) {
            console.info("Ambient_Light_SensorJsTest003 error:" + error);
            errMessage = error.toString().slice(12, 49);
            console.info('Ambient_Light_SensorJsTest003 errMessage:' + errMessage);
            expect(errMessage).assertEqual(errMessages[0]);
            done();
        }
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest004
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest004", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest004---------------------------');
        sensor.once(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback);
        setTimeout(() => {
            expect(true).assertTrue();
            done();
        }, 500);
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest005
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest005", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest005---------------------------');
        function onceSensorCallback(data) {
            console.info('Ambient_Light_SensorJsTest005  on error');
            expect(false).assertTrue();
            done();
        }
        try {
            sensor.once(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, onceSensorCallback, 5);
        } catch (error) {
            console.info("Ambient_Light_SensorJsTest005 error:" + error);
            errMessage = error.toString().slice(14, 51);
            console.info('Ambient_Light_SensorJsTest005 errMessage:' + errMessage);
            expect(errMessage).assertEqual(errMessages[0]);
            done();
        }
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest006
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest006", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest006---------------------------');
        try {
            sensor.off(string, "");
        } catch (error) {
            console.info("Ambient_Light_SensorJsTest006 error:" + error);
            errMessage = error.toString().slice(16, 40);
            console.info('Ambient_Light_SensorJsTest006 errMessage:' + errMessage);
            expect(errMessage).assertEqual(errMessages[2]);
            done();
        }
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest007
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest007", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest007---------------------------');
        function onSensorCallback(data) {
            console.info('Ambient_Light_SensorJsTest007  on error');
            expect(false).assertTrue();
            done();
        }
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, onSensorCallback);
        sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, onSensorCallback);
        setTimeout(() => {
            expect(true).assertTrue();
            done();
        }, 500);
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest008
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest008", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest008---------------------------');
        function onSensorCallback(data) {
            console.info('Ambient_Light_SensorJsTest008  on error');
            expect(false).assertTrue();
            done();
        }
        try {
            sensor.off(1000000, onSensorCallback);
        } catch (error) {
            console.info("Ambient_Light_SensorJsTest008 error:" + error);
            errMessage = error.toString().slice(13, 35);
            console.info('Ambient_Light_SensorJsTest008 errMessage:' + errMessage);
            expect(errMessage).assertEqual(errMessages[1]);
            done();
        }
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest009
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest009", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest009---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback);
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback2);
        setTimeout(() => {
            console.info('----------------------Ambient_Light_SensorJsTest009 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT);
            console.info('----------------------Ambient_Light_SensorJsTest009 off end---------------------------');
            done();
        }, 2000);
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest010
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest010", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest010---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback);
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback2);
        setTimeout(() => {
            console.info('----------------------Ambient_Light_SensorJsTest010 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback);
            console.info('----------------------Ambient_Light_SensorJsTest010 off end---------------------------');
        }, 1000);
        setTimeout(() => {
            console.info('----------------------Ambient_Light_SensorJsTest010 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback2);
            console.info('----------------------Ambient_Light_SensorJsTest010 off end---------------------------');
            done();
        }, 2000);
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest011
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest011", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest011---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback, { 'interval': 100000000 });
        sensor.once(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback2);
        setTimeout(() => {
            console.info('----------------------Ambient_Light_SensorJsTest011 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT);
            console.info('----------------------Ambient_Light_SensorJsTest011 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest012
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest012", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest012---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback, { 'interval': 100000000 });
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback2, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------Ambient_Light_SensorJsTest012 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback);
            console.info('----------------------Ambient_Light_SensorJsTest012 off end---------------------------');
        }, 500);
        setTimeout(() => {
            console.info('----------------------Ambient_Light_SensorJsTest012 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback2);
            console.info('----------------------Ambient_Light_SensorJsTest012 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.name:Ambient_Light_SensorJsTest013
     * @tc.desc:verify app info is not null
     * @tc.type: FUNC
     * @tc.require: Issue Number
     */
    it("Ambient_Light_SensorJsTest013", 0, async function (done) {
        console.info('----------------------Ambient_Light_SensorJsTest013---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback, { 'interval': 100000000 });
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT, callback2, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------Ambient_Light_SensorJsTest013 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_LIGHT);
            console.info('----------------------Ambient_Light_SensorJsTest013 off end---------------------------');
            done();
        }, 1000);
    })
})