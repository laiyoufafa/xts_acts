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

export default function SensorJsTest_sensor_7() {
describe("SensorJsTest_sensor_7", function () {
    function callback(data) {
        console.info("old callback" + JSON.stringify(data));
        expect(typeof (data.status)).assertEqual("number");
		expect(typeof (data.timestamp)).assertEqual("number");
    }

    function callback2(data) {
        console.info("old callback2" + JSON.stringify(data));
        expect(typeof (data.status)).assertEqual("number");
		expect(typeof (data.timestamp)).assertEqual("number");
    }

    beforeAll(function () {

        /*
         * @tc.setup: setup invoked before all testcases
         */
        console.info('beforeAll called')
    })

    afterAll(function () {

        /*
         * @tc.teardown: teardown invoked after all testcases
         */
        console.info('afterAll called')
    })

    beforeEach(function () {

        /*
         * @tc.setup: setup invoked before each testcases
         */
        console.info('beforeEach called')
    })

    afterEach(function () {

        /*
         * @tc.teardown: teardown invoked after each testcases
         */
        console.info('afterEach called')
    })
	
    const PARAMETER_ERROR_CODE = 401
	const PARAMETER_ERROR_MSG = 'The parameter invalid.'
    const SERVICE_EXCEPTION_CODE = 14500101
    const SERVICE_EXCEPTION_MSG = 'Service exception.'
    let errMessages = ['string is not defined','The parameter invalid'];
    let errMessage;

    /*
     * @tc.number:SUB_SensorsSystem_HALL_JSTest_0010
     * @tc.name: Hall_SensorJsTest001
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest001", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('----------------------Hall_SensorJsTest001---------------------------');
		try{
		   sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback);
				setTimeout(() => {
					sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
					done();
				}, 500);
				})
		} catch (error) {
            console.info('Hall_SensorJsTest001 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0020
     * @tc.name: Hall_SensorJsTest002
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest002", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest002---------------------------');
		try{
		   sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {        
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': 100000000 });
				setTimeout(() => {
					console.info('----------------------Hall_SensorJsTest002 off in---------------------------');
					sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
					console.info('----------------------Hall_SensorJsTest002 off end---------------------------');
					done();
				}, 500);
			})
		} catch (error) {
            console.info('Hall_SensorJsTest002 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0030
     * @tc.name: Hall_SensorJsTest003
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest003", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest003---------------------------');
        function onSensorCallback(data) {
            console.info('Hall_SensorJsTest003  on error');
			expect(typeof (data.status)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
            done();
        }
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {   
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, onSensorCallback, { 'interval': 100000000 }, 5);
			})
		} catch (error) {
            console.info('Hall_SensorJsTest003 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0040
     * @tc.name: Hall_SensorJsTest004
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest004", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest004---------------------------');
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {           
				sensor.once(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback);
				setTimeout(() => {
					expect(true).assertTrue();
					done();
				}, 500);
				})
		} catch (error) {
            console.info('Hall_SensorJsTest004 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0050
     * @tc.name: Hall_SensorJsTest005
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest005", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest005---------------------------');
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {    		
				try {
					sensor.once(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, 5);
					setTimeout(() => {
					expect(true).assertTrue();
					done();
				}, 500);
				} catch (error) {
					console.info("Hall_SensorJsTest005 error:" + error);
					expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
					expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
				}
			})
		} catch (error) {
            console.info('Hall_SensorJsTest005 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
   /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0060
     * @tc.name: Hall_SensorJsTest006
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest006", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest006---------------------------');
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {    	       
				   try {
						sensor.off(string, "");
					} catch (error) {
						console.info("Hall_SensorJsTest006 error:" + error);
						errMessage = error.toString().slice(16, 40);
						expect(errMessage).assertEqual(errMessages[0]);
						done();
					}
				})
		} catch (error) {
            console.info('Hall_SensorJsTest006 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
	/*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0070
     * @tc.name: Hall_SensorJsTest007
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest007", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest007---------------------------');
        function onSensorCallback(data) {
            console.info('Hall_SensorJsTest007  on error');
            expect(false).assertTrue();
            done();
        }
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {    	
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, onSensorCallback);
				sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL, onSensorCallback);
				setTimeout(() => {
					expect(true).assertTrue();
					done();
				}, 500);
			})
		} catch (error) {
            console.info('Hall_SensorJsTest007 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0080
     * @tc.name: Hall_SensorJsTest008
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest008", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest008---------------------------');
        function onSensorCallback(data) {
            console.info('Hall_SensorJsTest008  on error');
            expect(false).assertTrue();
        }
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {   
				try {
					sensor.off(1000000, onSensorCallback);
				} catch (error) {
					console.info("Hall_SensorJsTest008 error:" + error);
					errMessage = error.toString().slice(7, 28);
					expect(errMessage).assertEqual(errMessages[1]);
					done();
				}
			})
		} catch (error) {
            console.info('Hall_SensorJsTest008 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0090
     * @tc.name: Hall_SensorJsTest009
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest009", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest009---------------------------');
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {   		
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback);
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2);
				setTimeout(() => {
					console.info('----------------------Hall_SensorJsTest009 off in---------------------------');
					sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
					console.info('----------------------Hall_SensorJsTest009 off end---------------------------');
					done();
				}, 1000);
			})
		} catch (error) {
            console.info('Hall_SensorJsTest009 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0100
     * @tc.name: Hall_SensorJsTest010
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest010", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest010---------------------------');
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {  		
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback);
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2);
				setTimeout(() => {
					console.info('----------------------Hall_SensorJsTest010 off in---------------------------');
					try {
					sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback);
					} catch (error) {
					console.info("Hall_SensorJsTest010 error:" + error);
					}
					console.info('----------------------Hall_SensorJsTest010 off end---------------------------');
				}, 500);
				setTimeout(() => {
					console.info('----------------------Hall_SensorJsTest010 off in---------------------------');
					sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2);
					console.info('----------------------Hall_SensorJsTest010 off end---------------------------');
					done();
				}, 1000);
			})
		} catch (error) {
            console.info('Hall_SensorJsTest010 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0110
     * @tc.name: Hall_SensorJsTest011
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest011", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest011---------------------------');
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {  	       
			   sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': 100000000 });
				sensor.once(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2);
				setTimeout(() => {
					console.info('----------------------Hall_SensorJsTest011 off in---------------------------');
					sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
					console.info('----------------------Hall_SensorJsTest011 off end---------------------------');
					done();
				}, 1000);
			})
		} catch (error) {
            console.info('Hall_SensorJsTest011 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0120
     * @tc.name:Hall_SensorJsTest012
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest012", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest012---------------------------');
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {  	    
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': 100000000 });
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2, { 'interval': 100000000 });
					setTimeout(() => {
						console.info('----------------------Hall_SensorJsTest012 off in---------------------------');
						try {
						sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback);
						} catch (error) {
						console.info("Hall_SensorJsTest012 error:" + error);
						}
						console.info('----------------------Hall_SensorJsTest012 off end---------------------------');
					}, 500);
					setTimeout(() => {
						console.info('----------------------Hall_SensorJsTest012 off in---------------------------');
						sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2);
						console.info('----------------------Hall_SensorJsTest012 off end---------------------------');
						done();
					}, 1000);
				})
		} catch (error) {
            console.info('Hall_SensorJsTest012 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

    /*
     * @tc.number: SUB_SensorsSystem_HALL_JSTest_0130
     * @tc.name:Hall_SensorJsTest013
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest013", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------Hall_SensorJsTest013---------------------------');
		try{
		    sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {  	        
			   sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': 100000000 });
				sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2, { 'interval': 100000000 });
				setTimeout(() => {
					console.info('----------------------Hall_SensorJsTest013 off in---------------------------');
					sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
					console.info('----------------------Hall_SensorJsTest013 off end---------------------------');
					done();
				}, 1000);
			})
		} catch (error) {
            console.info('Hall_SensorJsTest013 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
	/*
     * @tc.number:SUB_SensorsSystem_HALL_JSTest_0140
     * @tc.name: Hall_SensorJsTest014
     * @tc.desc: Functional Use Cases
     */
    it("Hall_SensorJsTest014", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('---------Hall_SensorJsTest014--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {
				if (error) {
					console.info('Hall_SensorJsTest014 error');
				} else {
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': undefined });
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2, { 'interval': undefined });
					setTimeout(() => {
						console.info('----------------------Hall_SensorJsTest014 off in--------------');
						try {
						sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback);
						sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback2);
						} catch (error) {
						console.info("Hall_SensorJsTest014 error:" + error);
						expect(false).assertTrue();
						}
						console.info('----------------------Hall_SensorJsTest014 off end--------------');
						done()
					}, 1000);
				}
			})
		} catch (error) {
            console.info('Hall_SensorJsTest014 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_HALL_JSTest_0150
     * @tc.name: Hall_SensorJsTest015
     * @tc.desc: Illegal ID passed in
     */
    it("Hall_SensorJsTest015", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
		try{
		   sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {
				if (error) {
					console.info('Hall_SensorJsTest015 error');
				} else {
					expect(typeof(data)).assertEqual("object");        
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, undefined);
					try{
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': undefined });
					} catch(error){
						console.info('Hall_SensorJsTest015 Repeat subscription'+error);
					}
					setTimeout(() => {
						console.info('----------------------Hall_SensorJsTest015 off in--------------');
						try {
						sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
						} catch (error) {
						console.info("Hall_SensorJsTest015 error:" + error);
						expect(false).assertTrue();
						}
						done();
					}, 1000);
				}
			})
		} catch (error) {
            console.info('Hall_SensorJsTest015 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_HALL_JSTest_0160
     * @tc.name: Hall_SensorJsTest016
     * @tc.desc: For normal scenarios
     */
    it("Hall_SensorJsTest016", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------Hall_SensorJsTest016--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {
				if (error) {
					console.info('Hall_SensorJsTest016 error');
				} else {
					expect(typeof(data)).assertEqual("object");        
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, null);
					try{
						sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': null });
						} catch(error){
							console.info('Hall_SensorJsTest016 Repeat subscription'+error);
						}
					setTimeout(() => {
						console.info('----------------------Hall_SensorJsTest016 off in--------------');
						try {
							sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
							} catch (error) {
						console.info("Hall_SensorJsTest016 error:" + error);
							expect(false).assertTrue();
							}
							done();
					}, 1000);
				}
			})
		} catch (error) {
            console.info('Hall_SensorJsTest016 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_HALL_JSTest_0170
     * @tc.name: Hall_SensorJsTest017
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("Hall_SensorJsTest017", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, function (done) {
        console.info('---------Hall_SensorJsTest017--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {
				if (error) {
					console.info('Hall_SensorJsTest017 error');
				} else {
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': null });
					setTimeout(() => {
						console.info('----------------------Hall_SensorJsTest017 off in--------------');
						try {
						sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
						} catch (error) {
						console.info("Hall_SensorJsTest017 error:" + error);
						expect(false).assertTrue();
						}
						done();			
					}, 500);
				}		
			})
        } catch (error) {
            console.info("Hall_SensorJsTest017 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }			
    })

	/*
     * @tc.number:SUB_SensorsSystem_HALL_JSTest_0180
     * @tc.name: Hall_SensorJsTest018
     * @tc.desc: Once Normal Subscription Scenario Use Case
     */
    it("Hall_SensorJsTest018", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
		try{
		   sensor.getSingleSensor(sensor.SensorType.SENSOR_TYPE_ID_HALL,(error, data) => {
				if (error) {
					console.info('Hall_SensorJsTest018 error');
				} else {
					expect(typeof(data)).assertEqual("object");		
					sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': 100000000 });
					try{
						sensor.on(sensor.SensorType.SENSOR_TYPE_ID_HALL, callback, { 'interval': 100000000 });
						} catch(error){
							console.info("Hall_SensorJsTest018 catch error:" + error);
						}
					setTimeout(() => {
						console.info('----------------------Hall_SensorJsTest018 off in--------------');
						try {
							sensor.off(sensor.SensorType.SENSOR_TYPE_ID_HALL);
							} catch (error) {
						console.info("Hall_SensorJsTest018 error:" + error);
							expect(false).assertTrue();
							}
						console.info('----------------------Hall_SensorJsTest018 off end--------------');
							done()
					}, 1000);
				}
			})
        } catch (error) {
            console.info("Hall_SensorJsTest018 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }				
    })	
})}
