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

describe("SensorJsTest_sensor_16", function () {
    function callback(data) {
        console.info("callback" + JSON.stringify(data));
        expect(typeof (data.beta)).assertEqual("number");
        expect(typeof (data.gamma)).assertEqual("number");
        expect(typeof (data.alpha)).assertEqual("number");
    }

    function callback2(data) {
        console.info("callback2" + JSON.stringify(data));
        expect(typeof (data.beta)).assertEqual("number");
        expect(typeof (data.gamma)).assertEqual("number");
        expect(typeof (data.alpha)).assertEqual("number");
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
     * @tc.name:orientating_SensorJsTest001
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0010
     */
    it("orientating_SensorJsTest001", FUNCTION | MEDIUMTEST | LEVEL0, async function (done) {
        console.info('----------------------orientating_SensorJsTest001---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback);
        setTimeout(() => {
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION);
            done();
        }, 500);
    })

    /*
     * @tc.name:orientating_SensorJsTest002
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0020
     */
    it("orientating_SensorJsTest002", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        console.info('----------------------orientating_SensorJsTest002---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------orientating_SensorJsTest002 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION);
            console.info('----------------------orientating_SensorJsTest002 off end---------------------------');
            done();
        }, 500);
    })

    /*
     * @tc.name:orientating_SensorJsTest003
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0030
     */
    it("orientating_SensorJsTest003", FUNCTION | MEDIUMTEST | LEVEL3, function (done) {
        console.info('----------------------orientating_SensorJsTest003---------------------------');
        function onSensorCallback(data) {
            console.info('orientating_SensorJsTest003  on error');
            expect(false).assertTrue();
            done();
        }
        try {
            sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, onSensorCallback, { 'interval': 100000000 }, 5);
        } catch (error) {
            console.info('orientating_SensorJsTest005 error' + error);
            errMessage = error.toString().slice(12, 49);
            expect(errMessage).assertEqual(errMessages[0]);
            done();
        }
    })

    /*
     * @tc.name:orientating_SensorJsTest004
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0040
     */
    it("orientating_SensorJsTest004", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback);
        setTimeout(() => {
            expect(true).assertTrue();
            done();
        }, 500);
    })

    /*
     * @tc.name:orientating_SensorJsTest005
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0050
     */
    it("orientating_SensorJsTest005", FUNCTION | MEDIUMTEST | LEVEL3, function (done) {
        function onceSensorCallback(data) {
            console.info('orientating_SensorJsTest005  on error');
            expect(false).assertTrue();
            done();
        }
        try {
            sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, onceSensorCallback, 5);
        } catch (error) {
            console.info('orientating_SensorJsTest005 error' + error);
            errMessage = error.toString().slice(14, 51);
            expect(errMessage).assertEqual(errMessages[0]);
            done();
        }
    })

    /*
     * @tc.name:orientating_SensorJsTest006
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0060
     */
    it("orientating_SensorJsTest006", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        try {
            sensor.off(string, "");
        } catch (error) {
            console.info('orientating_SensorJsTest006 error' + error);
            errMessage = error.toString().slice(16, 40);
            expect(errMessage).assertEqual(errMessages[2]);
            done();
        }
    })

    /*
     * @tc.name:orientating_SensorJsTest007
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0070
     */
    it("orientating_SensorJsTest007", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        function onSensorCallback(data) {
            console.info('orientating_SensorJsTest007  on error');
            expect(false).assertTrue();
            done();
        }
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, onSensorCallback);
        sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, onSensorCallback);
        setTimeout(() => {
            expect(true).assertTrue();
            done();
        }, 500);
    })

    /*
     * @tc.name:orientating_SensorJsTest008
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0080
     */
    it("orientating_SensorJsTest008", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        function onSensorCallback(data) {
            console.info('orientating_SensorJsTest008  on error');
            expect(false).assertTrue();
            done();
        }
        try {
            sensor.off(1000000, onSensorCallback);
        } catch (error) {
            console.info('orientating_SensorJsTest008 error' + error);
            errMessage = error.toString().slice(13, 35);
            expect(errMessage).assertEqual(errMessages[1]);
            done();
        }
    })

    /*
     * @tc.name:orientating_SensorJsTest009
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0090
     */
    it("orientating_SensorJsTest009", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback);
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback2);
        setTimeout(() => {
            console.info('----------------------orientating_SensorJsTest009 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION);
            console.info('----------------------orientating_SensorJsTest009 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.name:orientating_SensorJsTest010
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0100
     */
    it("orientating_SensorJsTest010", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback);
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback2);
        setTimeout(() => {
            console.info('----------------------orientating_SensorJsTest010 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback);
            console.info('----------------------orientating_SensorJsTest010 off end---------------------------');
        }, 500);
        setTimeout(() => {
            console.info('----------------------SensorJsTest010 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback2);
            console.info('----------------------SensorJsTest010 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.name:orientating_SensorJsTest011
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0110
     */
    it("orientating_SensorJsTest011", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        console.info('----------------------orientating_SensorJsTest011---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback, { 'interval': 100000000 });
        sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback2);
        setTimeout(() => {
            console.info('----------------------orientating_SensorJsTest011 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION);
            console.info('----------------------orientating_SensorJsTest011 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.name:orientating_SensorJsTest012
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0120
     */
    it("orientating_SensorJsTest012", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        console.info('----------------------orientating_SensorJsTest012---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback, { 'interval': 100000000 });
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback2, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------orientating_SensorJsTest012 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback);
            console.info('----------------------orientating_SensorJsTest012 off end---------------------------');
        }, 500);
        setTimeout(() => {
            console.info('----------------------orientating_SensorJsTest012 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback2);
            console.info('----------------------orientating_SensorJsTest012 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.name:orientating_SensorJsTest013
     * @tc.desc:verify app info is not null
     * @tc.number:SUB_SensorSystem_ORIENTATION_JsTest_0130
     */
    it("orientating_SensorJsTest013", FUNCTION | MEDIUMTEST | LEVEL3, async function (done) {
        console.info('----------------------orientating_SensorJsTest013---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback, { 'interval': 100000000 });
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION, callback2, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------orientating_SensorJsTest013 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ORIENTATION);
            console.info('----------------------orientating_SensorJsTest013 off end---------------------------');
            done();
        }, 1000);
    })
})