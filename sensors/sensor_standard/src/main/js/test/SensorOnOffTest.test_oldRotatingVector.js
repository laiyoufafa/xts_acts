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
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect, TestType, Size, Level } from '@ohos/hypium'

export default function SensorJsTest_sensor_20() {
describe("SensorJsTest_sensor_20", function () {
    function callback(data) {
        console.info("callback" + JSON.stringify(data));
        expect(typeof (data.x)).assertEqual("number");
        expect(typeof (data.y)).assertEqual("number");
        expect(typeof (data.z)).assertEqual("number");
        expect(typeof (data.timestamp)).assertEqual("number");
    }

    function callback2(data) {
        console.info("callback2" + JSON.stringify(data));
        expect(typeof (data.x)).assertEqual("number");
        expect(typeof (data.y)).assertEqual("number");
        expect(typeof (data.z)).assertEqual("number");
        expect(typeof (data.timestamp)).assertEqual("number");
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

    let errMessages = ['string is not defined','The parameter invalid'];

    let errMessage;

     /*
     * @tc.number:SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0010
     * @tc.name: RotatingVector_SensorJsTest001
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest001", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest001---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback);
        setTimeout(() => {
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR);
            done();
        }, 500);
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0020
     * @tc.name: RotatingVector_SensorJsTest002
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest002", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest002---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------RotatingVector_SensorJsTest002 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR);
            console.info('----------------------RotatingVector_SensorJsTest002 off end---------------------------');
            done();
        }, 500);
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0030
     * @tc.name: RotatingVector_SensorJsTest003
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest003", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest003---------------------------');
        function onSensorCallback(data) {
            console.info('RotatingVector_SensorJsTest003  on error');
			expect(typeof (data.x)).assertEqual("number");
			expect(typeof (data.y)).assertEqual("number");
			expect(typeof (data.z)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
            done();
        }
        try {
            sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, onSensorCallback, { 'interval': 100000000 }, 5);
        } catch (error) {
            console.info("RotatingVector_SensorJsTest003 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0040
     * @tc.name: RotatingVector_SensorJsTest004
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest004", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest004---------------------------');
        sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback);
        setTimeout(() => {
            expect(true).assertTrue();
            done();
        }, 500);
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0050
     * @tc.name: RotatingVector_SensorJsTest005
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest005", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest005---------------------------');
        function onceSensorCallback(data) {
            console.info('RotatingVector_SensorJsTest005  on error');
            expect(typeof (data.x)).assertEqual("number");
			expect(typeof (data.y)).assertEqual("number");
			expect(typeof (data.z)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
            done();
        }
        try {
            sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, onceSensorCallback, 5);
        } catch (error) {
            console.info("RotatingVector_SensorJsTest005 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
		    done();
        }
    })

   /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0060
     * @tc.name: RotatingVector_SensorJsTest006
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest006", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest006---------------------------');
        try {
            sensor.off(string, "");
        } catch (error) {
            console.info("RotatingVector_SensorJsTest006 error:" + error);
            errMessage = error.toString().slice(16, 40);
            expect(errMessage).assertEqual(errMessages[0]);
            done();
        }
    })

   /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0070
     * @tc.name: RotatingVector_SensorJsTest007
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest007", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest007---------------------------');
        function onSensorCallback(data) {
            console.info('RotatingVector_SensorJsTest007  on error');
            expect(false).assertTrue();
            done();
        }
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, onSensorCallback);
        sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, onSensorCallback);
        setTimeout(() => {
            expect(true).assertTrue();
            done();
        }, 500);
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0080
     * @tc.name: RotatingVector_SensorJsTest008
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest008", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest008---------------------------');
        function onSensorCallback(data) {
            console.info('RotatingVector_SensorJsTest008  on error');
            expect(false).assertTrue();
        }
        try {
            sensor.off(1000000, onSensorCallback);
        } catch (error) {
            console.info("RotatingVector_SensorJsTest008 error:" + error);
            errMessage = error.toString().slice(7, 28);
            expect(errMessage).assertEqual(errMessages[1]);
            done();
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0090
     * @tc.name: RotatingVector_SensorJsTest009
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest009", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest009---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback);
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback2);
        setTimeout(() => {
            console.info('----------------------RotatingVector_SensorJsTest009 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR);
            console.info('----------------------RotatingVector_SensorJsTest009 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0100
     * @tc.name: RotatingVector_SensorJsTest010
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest010", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest010---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback);
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback2);
        setTimeout(() => {
            console.info('----------------------RotatingVector_SensorJsTest010 off in---------------------------');
            try {
			sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback);
			} catch (error) {
            console.info("RotatingVector_SensorJsTest010 error:" + error);
			}
            console.info('----------------------RotatingVector_SensorJsTest010 off end---------------------------');
        }, 500);
        setTimeout(() => {
            console.info('----------------------RotatingVector_SensorJsTest010 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback2);
            console.info('----------------------RotatingVector_SensorJsTest010 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0110
     * @tc.name: RotatingVector_SensorJsTest011
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest011", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest011---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback, { 'interval': 100000000 });
        sensor.once(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback2);
        setTimeout(() => {
            console.info('----------------------RotatingVector_SensorJsTest011 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR);
            console.info('----------------------RotatingVector_SensorJsTest011 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0120
     * @tc.name: RotatingVector_SensorJsTest012
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest012", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest012---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback, { 'interval': 100000000 });
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback2, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------RotatingVector_SensorJsTest012 off in---------------------------');
            try {
			sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback);
			} catch (error) {
            console.info("RotatingVector_SensorJsTest012 error:" + error);
			}
            console
            console.info('----------------------RotatingVector_SensorJsTest012 off end---------------------------');
        }, 500);
        setTimeout(() => {
            console.info('----------------------RotatingVector_SensorJsTest012 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback2);
            console.info('----------------------RotatingVector_SensorJsTest012 off end---------------------------');
            done();
        }, 1000);
    })

    /*
     * @tc.number: SUB_SensorsSystem_ROTATION_VECTOR_JSTest_0130
     * @tc.name: RotatingVector_SensorJsTest013
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("RotatingVector_SensorJsTest013", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------RotatingVector_SensorJsTest013---------------------------');
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback, { 'interval': 100000000 });
        sensor.on(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR, callback2, { 'interval': 100000000 });
        setTimeout(() => {
            console.info('----------------------RotatingVector_SensorJsTest013 off in---------------------------');
            sensor.off(sensor.SensorType.SENSOR_TYPE_ID_ROTATION_VECTOR);
            console.info('----------------------RotatingVector_SensorJsTest013 off end---------------------------');
            done();
        }, 1000);
    })
})}
