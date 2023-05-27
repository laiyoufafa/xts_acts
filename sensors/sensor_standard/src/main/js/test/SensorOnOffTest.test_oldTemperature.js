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

export default function SensorJsTest_sensor_22() {
describe("SensorJsTest_sensor_22", function () {
    function callback(data) {
        console.info("callback" + JSON.stringify(data));
		expect(typeof (data.humidity)).assertEqual("number");
		expect(typeof (data.timestamp)).assertEqual("number");
    }

    function callback2(data) {
        console.info("callback2" + JSON.stringify(data));
		expect(typeof (data.humidity)).assertEqual("number");
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

    const PARAMETER_ERROR_CODE = 401
	const PARAMETER_ERROR_MSG = 'The parameter invalid.'
    const SERVICE_EXCEPTION_CODE = 14500101
    const SERVICE_EXCEPTION_MSG = 'Service exception.'
	let invalid  = -1;
	let errMessages = ['ReferenceError: string is not defined','TypeError: is not callable','ReferenceError: xxx is not defined']
	let errMessage
	
     /*
     * @tc.number:SUB_SensorsSystem_Ambient_Temperature_JSTest_0010
     * @tc.name: AmbientTemperature_SensorJsTest001
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest001", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest001--------');
		try {
            sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback);
        } catch (error) {
            console.info("AmbientTemperature_SensorJsTest001 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
		 setTimeout(() => {
            expect(true).assertTrue();
            done();
        }, 500);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0020
     * @tc.name: AmbientTemperature_SensorJsTest002
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest002", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest002--------');
		try {
            sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE ,callback, { 'interval': 100000000 });
        } catch (error) {
            console.info("AmbientTemperature_SensorJsTest002 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0030
     * @tc.name: AmbientTemperature_SensorJsTest003
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest003", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest003--------');
        function onSensorCallback(data) {
            console.info('AmbientTemperature_SensorJsTest003  on error');
			expect(typeof (data.humidity)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
        }
        try {
            sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, 
			onSensorCallback, { 'interval': 100000000 }, 5);
        } catch (error) {
            console.info("AmbientTemperature_SensorJsTest003 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0040
     * @tc.name: AmbientTemperature_SensorJsTest004
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest004", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest004--------');
        try{
		sensor.once(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, callback);
		} catch (error) {
            console.info("AmbientTemperature_SensorJsTest004 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
			done();
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0050
     * @tc.name: AmbientTemperature_SensorJsTest005
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest005", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest005--------');
        function onceSensorCallback(data) {
            console.info('AmbientTemperature_SensorJsTest005 on error');
			expect(typeof (data.humidity)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
        }
        try {
            sensor.once(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, onceSensorCallback, 5);
        } catch (error) {
            console.info("AmbientTemperature_SensorJsTest005 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

   /*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0060
     * @tc.name: AmbientTemperature_SensorJsTest006
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest006", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest006--------');
        try {
            sensor.off(string, "");
        } catch (error) {
			errMessage 
            console.info("AmbientTemperature_SensorJsTest006 error:" + error);
			errMessage = error.toString();
			expect(errMessage).assertEqual(errMessages[0]);
            done();
        }
    })

   /*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0070
     * @tc.name: AmbientTemperature_SensorJsTest007
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest007", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest007--------');
        function onSensorCallback(data) {
            console.info('AmbientTemperature_SensorJsTest007 on error');
 			expect(typeof (data.humidity)).assertEqual("number");
        }
       try {
		   sensor.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, onSensorCallback);
           sensor.off(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE);
            } catch (error) {
            console.info("AmbientTemperature_SensorJsTest007 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0080
     * @tc.name: AmbientTemperature_SensorJsTest008
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest008", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest008--------');
        function onSensorCallback(data) {
            console.info('AmbientTemperature_SensorJsTest008  on error');
			expect(typeof (data.humidity)).assertEqual("number");
        }
        try {
            sensor.off(1000000, onSensorCallback);
        } catch (error) {
            console.info("AmbientTemperature_SensorJsTest008 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
	 /*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0090
     * @tc.name: AmbientTemperature_SensorJsTest009
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest009", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest009--------');
        function onSensorCallback(data) {
            console.info('AmbientTemperature_SensorJsTest009  on error');
			expect(typeof (data.humidity)).assertEqual("number");
        }
        try {
            sensor.off(invalid, onSensorCallback);
        } catch (error) {
            console.info("AmbientTemperature_SensorJsTest009 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
	/*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0100
     * @tc.name: AmbientTemperature_SensorJsTest010
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest010", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest010--------');
        function onSensorCallback(data) {
            console.info('AmbientTemperature_SensorJsTest010  on error');
			expect(typeof (data.humidity)).assertEqual("number");
        }
        try {
            sensor.xxx(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, onSensorCallback);
        } catch (error) {
            console.info("AmbientTemperature_SensorJsTest010 error:" + error);
            errMessage = error.toString();
            expect(errMessage).assertEqual(errMessages[1]);
            done();
        }
    })
	
	/*
     * @tc.number: SUB_SensorsSystem_Ambient_Temperature_JSTest_0110
     * @tc.name: AmbientTemperature_SensorJsTest011
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("AmbientTemperature_SensorJsTest011", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('--------AmbientTemperature_SensorJsTest011--------');
        function onSensorCallback(data) {
            console.info('AmbientTemperature_SensorJsTest011  on error');
			expect(typeof (data.humidity)).assertEqual("number");
        }
        try {
            xxx.on(sensor.SensorType.SENSOR_TYPE_ID_AMBIENT_TEMPERATURE, onSensorCallback);
        } catch (error) {
            console.info("AmbientTemperature_SensorJsTest011 error:" + error);
            errMessage = error.toString();
            expect(errMessage).assertEqual(errMessages[2]);
            done();
        }
    })
})
}