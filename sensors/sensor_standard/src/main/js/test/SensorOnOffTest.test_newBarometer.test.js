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

export default function SensorJsTest_sensor_53() {
describe("SensorJsTest_sensor_53", function () {
    function callback(data) {
        console.info("callback" + JSON.stringify(data));
		expect(typeof (data.pressure)).assertEqual("number");
		expect(typeof (data.timestamp)).assertEqual("number");
    }

    function callback2(data) {
        console.info("callback2" + JSON.stringify(data));
		expect(typeof (data.pressure)).assertEqual("number");
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
	
     /*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0140
     * @tc.name: newBarometer_SensorJsTest014
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest014", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('---------newBarometer_SensorJsTest014--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest014 error');
				} else {
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.BAROMETER, callback);
						setTimeout(()=>{
							sensor.off(sensor.SensorId.BAROMETER);
							done();
						}, 500);
				}
			})
		} catch (error) {
            console.info('newBarometer_SensorJsTest014 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0150
     * @tc.name: newBarometer_SensorJsTest015
     * @tc.desc: Illegal ID passed in
     */
    it("newBarometer_SensorJsTest015", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newBarometer_SensorJsTest015--------------');
        function onSensorCallback(data) {
            console.info('newBarometer_SensorJsTest015 callback in');
            expect(false).assertTrue();
        }
        try {
            sensor.on(invalid, onSensorCallback);
        } catch (error) {
            console.info("newBarometer_SensorJsTest015 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0160
     * @tc.name: newBarometer_SensorJsTest016
     * @tc.desc: For normal scenarios
     */
    it("newBarometer_SensorJsTest016", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newBarometer_SensorJsTest016--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest016 error');
				} else {
					expect(typeof(data)).assertEqual("object");        
					sensor.on(sensor.SensorId.BAROMETER, callback, {'interval': 100000000});
					setTimeout(()=>{
						console.info('---------newBarometer_SensorJsTest016 off in--------------');
						sensor.off(sensor.SensorId.BAROMETER);
						console.info('---------newBarometer_SensorJsTest016 off end--------------');
						done();
					}, 500);
				}
			})
		} catch (error) {
            console.info('newBarometer_SensorJsTest016 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0170
     * @tc.name: newBarometer_SensorJsTest017
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest017", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, function (done) {
        console.info('---------newBarometer_SensorJsTest017--------------');
        function onSensorCallback(data) {
            console.info('newBarometer_SensorJsTest017  callback in');
			expect(typeof (data.pressure)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
        }
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest017 error');
				} else {
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.BAROMETER, onSensorCallback, {'interval': 100000000}, 5);
					setTimeout(()=>{
						console.info('---------newBarometer_SensorJsTest017 off in--------------');
						sensor.off(sensor.SensorId.BAROMETER);
						console.info('---------newBarometer_SensorJsTest017 off end--------------');
						done();
					}, 500);	
				}		
			})
        } catch (error) {
            console.info("newBarometer_SensorJsTest017 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }			
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0180
     * @tc.name: newBarometer_SensorJsTest018
     * @tc.desc: Once Normal Subscription Scenario Use Case
     */
    it("newBarometer_SensorJsTest018", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest018 error');
				} else {
					expect(typeof(data)).assertEqual("object");		
					sensor.once(sensor.SensorId.BAROMETER, callback);
					setTimeout(()=>{
						expect(true).assertTrue();
						done();
					}, 500);
				}
			})
        } catch (error) {
            console.info("newBarometer_SensorJsTest018 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }				
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0190
     * @tc.name: newBarometer_SensorJsTest019
     * @tc.desc: Use case of illegal parameter passed into once interface
     */
    it("newBarometer_SensorJsTest019", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        function onceSensorCallback(data) {
            console.info('newBarometer_SensorJsTest019 callback in');
            expect(false).assertTrue();
            done();
        }
        try {
            sensor.once(invalid, onceSensorCallback);
        } catch (error) {
            console.info("newBarometer_SensorJsTest019 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0200
     * @tc.name: newBarometer_SensorJsTest020
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest020", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, function (done) {
        function onceSensorCallback(data) {
            console.info('newBarometer_SensorJsTest020  on error');
			expect(typeof (data.pressure)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
            done();
        }
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest020 error');
				} else {
					expect(typeof(data)).assertEqual("object");	
					sensor.once(sensor.SensorId.BAROMETER, onceSensorCallback, 5);
				}
			})
	    } catch (error) {
            console.info("newBarometer_SensorJsTest020 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0210
     * @tc.name: newBarometer_SensorJsTest021
     * @tc.desc: Use case of illegal parameter passed into off interface
     */
    it("newBarometer_SensorJsTest021", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        try {
            sensor.off(invalid, callback);
        } catch (error) {
            console.info('newBarometer_SensorJsTest021 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE)
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG)
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0220
     * @tc.name: newBarometer_SensorJsTest022
     * @tc.desc: Unsubscribe directly without waiting after starting subscription
     */
    it("newBarometer_SensorJsTest022", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        function onSensorCallback(data) {
            console.info('newBarometer_SensorJsTest022 callback in');
            expect(false).assertTrue();
            done();
        }
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest022 error');
				} else {
					expect(typeof(data)).assertEqual("object");			
					sensor.on(sensor.SensorId.BAROMETER, onSensorCallback);
					sensor.off(sensor.SensorId.BAROMETER, onSensorCallback);
					setTimeout(()=>{
						expect(true).assertTrue();
						done();
					}, 500);
				}
			})
		} catch (error) {
            console.info("newBarometer_SensorJsTest022 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0230
     * @tc.name: newBarometer_SensorJsTest023
     * @tc.desc:SensorId1000000 of incoming exception
     */
    it("newBarometer_SensorJsTest023", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        function onSensorCallback(data) {
            console.info('newBarometer_SensorJsTest023 on error');
            expect(false).assertTrue();
        }
        try {
            sensor.off(1000000, onSensorCallback);
        } catch (error) {
            console.info("newBarometer_SensorJsTest023 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE)
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG)
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0240
     * @tc.name: newBarometer_SensorJsTest024
     * @tc.desc:Call interface multiple times
     */
    it("newBarometer_SensorJsTest024", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest024 error');
				} else {   
					expect(typeof(data)).assertEqual("object");				
					sensor.on(sensor.SensorId.BAROMETER, (data)=>{
						console.info("newBarometer_SensorJsTest024 callback: " + JSON.stringify(data));
						expect(typeof (data.pressure)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					});
					sensor.on(sensor.SensorId.BAROMETER, (data)=>{
						console.info("newBarometer_SensorJsTest024 callback2: " + JSON.stringify(data));
						expect(typeof (data.pressure)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					});
					setTimeout(()=>{
						console.info('---------newBarometer_SensorJsTest024 off in--------------');
						sensor.off(sensor.SensorId.BAROMETER);
						console.info('---------newBarometer_SensorJsTest024 off end--------------');
						done();
					}, 1000);
				}
			})
		} catch (error) {
            console.info("newBarometer_SensorJsTest024 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0250
     * @tc.name: newBarometer_SensorJsTest025
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest025", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        try {
            sensor.off(sensor.SensorId.BAROMETER, 5);
        } catch (error) {
            console.info('newBarometer_SensorJsTest025 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE)
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG)
            done();
        }
    })

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0260
     * @tc.name: newBarometer_SensorJsTest026
     * @tc.desc:Call on interface and once interface respectively, and use an off interface to close
     */
    it("newBarometer_SensorJsTest026", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newBarometer_SensorJsTest026--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest024 error');
				} else {  	
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.BAROMETER, (data)=>{
						console.info("newBarometer_SensorJsTest026 callback: " + JSON.stringify(data));
						expect(typeof (data.pressure)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					}, {'interval': 100000000});
					sensor.once(sensor.SensorId.BAROMETER, (data)=>{
						console.info("newBarometer_SensorJsTest026 callback2: " + JSON.stringify(data));
						expect(typeof (data.pressure)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					});
					setTimeout(()=>{
						console.info('---------newBarometer_SensorJsTest026 off in--------------');
						sensor.off(sensor.SensorId.BAROMETER);
						console.info('---------newBarometer_SensorJsTest026 off end--------------');
						done();
					}, 1000);
				}
			})
		} catch (error) {
            console.info("newBarometer_SensorJsTest026 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }	
	})		

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0270
     * @tc.name: newBarometer_SensorJsTest027
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest027", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newBarometer_SensorJsTest027--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest024 error');
				} else { 
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.BAROMETER, (data)=>{
						console.info("newBarometer_SensorJsTest027 callback: " + JSON.stringify(data));
						expect(typeof (data.pressure)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					}, {'interval': 100000000});
					sensor.on(sensor.SensorId.BAROMETER, (data)=>{
						console.info("newBarometer_SensorJsTest027 callback2: " + JSON.stringify(data));
						expect(typeof (data.pressure)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					}, {'interval': 100000000});
					setTimeout(()=>{
						console.info('---------newBarometer_SensorJsTest027 off in--------------');
						sensor.off(sensor.SensorId.BAROMETER);
						console.info('---------newBarometer_SensorJsTest027 off end--------------');
						done();
					}, 1000);
				}
		})
	} catch (error) {
        console.info("newBarometer_SensorJsTest027 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})	

	/*
     * @tc.number:SUB_SensorsSystem_BAROMETER_JSTest_0280
     * @tc.name: newBarometer_SensorJsTest028
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest028", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newBarometer_SensorJsTest028--------------');
        try {
            sensor.on();
        } catch (error) {
			console.info("newBarometer_SensorJsTest028_on error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
        try {
            sensor.once();
        } catch (error) {
			console.info("newBarometer_SensorJsTest028_once error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
        try {
            sensor.off();
        } catch (error) {
			console.info("newBarometer_SensorJsTest028_off error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
	 /*
     * @tc.number: SUB_SensorsSystem_BAROMETER_JSTest_0290
     * @tc.name: newBarometer_SensorJsTest029
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest029", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------newBarometer_SensorJsTest029--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest029 error');
				} else { 
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.BAROMETER, callback);
					sensor.on(sensor.SensorId.BAROMETER, callback2);
					setTimeout(() => {
						console.info('----------------------newBarometer_SensorJsTest029 off in--------------');
						try {
						sensor.off(sensor.SensorId.BAROMETER, callback);
						} catch (error) {
						console.info("newBarometer_SensorJsTest029 error:" + error);
						}
						console.info('----------------------newBarometer_SensorJsTest029 off end--------------');
					}, 500);
					setTimeout(() => {
						console.info('----------------------newBarometer_SensorJsTest029 off in--------------');
						sensor.off(sensor.SensorId.BAROMETER, callback2);
						console.info('----------------------newBarometer_SensorJsTest029 off end--------------');
						done();
					}, 1000);
				}
			})
	} catch (error) {
        console.info("newBarometer_SensorJsTest029 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})
	
	 /*
     * @tc.number: SUB_SensorsSystem_BAROMETER_JSTest_0300
     * @tc.name: newBarometer_SensorJsTest030
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest030", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------newBarometer_SensorJsTest030--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest029 error');
				} else { 
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.BAROMETER, callback, { 'interval': 100000000 });
					sensor.on(sensor.SensorId.BAROMETER, callback2, { 'interval': 100000000 });
					setTimeout(() => {
						console.info('----------------------newBarometer_SensorJsTest030 off in--------------');
						try {
						sensor.off(sensor.SensorId.BAROMETER, callback);
						} catch (error) {
						console.info("newBarometer_SensorJsTest030 error:" + error);
						}
						console
						console.info('----------------------newBarometer_SensorJsTest030 off end--------------');
					}, 500);
					setTimeout(() => {
						console.info('----------------------newBarometer_SensorJsTest030_2 off in--------------');
						sensor.off(sensor.SensorId.BAROMETER, callback2);
						console.info('----------------------newBarometer_SensorJsTest030_2 off end--------------');
						done();
					}, 1000);
				}
			})
	} catch (error) {
        console.info("newBarometer_SensorJsTest030 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})
	
	 /*
     * @tc.number: SUB_SensorsSystem_BAROMETER_JSTest_0310
     * @tc.name: newBarometer_SensorJsTest031
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest031", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------newBarometer_SensorJsTest031--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest031 error');
				} else { 
					expect(typeof(data)).assertEqual("object");
					console.info('----------------------newBarometer_SensorJsTest031 off in--------------');
					try{
						sensor.off(-1, callback);
						console.info('----------------------newBarometer_SensorJsTest031 off end--------------');
					} catch (error) {
						console.info("newBarometer_SensorJsTest031 error:" + error);
						expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
						expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
						done();
					}
				}
			})
	} catch (error) {
        console.info("newBarometer_SensorJsTest031 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})
	
	 /*
     * @tc.number: SUB_SensorsSystem_BAROMETER_JSTest_0320
     * @tc.name: newBarometer_SensorJsTest032
     * @tc.desc:Verification results of the incorrect parameters of the test interface
     */
    it("newBarometer_SensorJsTest032", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------newBarometer_SensorJsTest032--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.BAROMETER,(error, data) => {
				if (error) {
					console.info('newBarometer_SensorJsTest032 error');
				} else { 
					try {
						sensor.on(sensor.SensorId.BAROMETER, callback, {'interval': -100000000});
						console.info('----------------------newBarometer_SensorJsTest032 off in---------------------------');
						sensor.off(sensor.SensorId.BAROMETER);
						console.info('----------------------newBarometer_SensorJsTest032 off end---------------------------');
						done();
					} catch (error) {
						console.info('newBarometer_SensorJsTest032 On fail, errCode:' + error.code + ' ,msg:' + error.message);
						expect(error.code).assertEqual(SERVICE_EXCEPTION_CODE);
						expect(error.message).assertEqual(SERVICE_EXCEPTION_MSG);
						done();
					}
				}
			})
	} catch (error) {
        console.info("newBarometer_SensorJsTest032 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})
})}
