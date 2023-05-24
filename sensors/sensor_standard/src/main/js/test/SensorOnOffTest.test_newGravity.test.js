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

export default function SensorJsTest_sensor_42() {
describe("SensorJsTest_sensor_42", function () {
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
    const SERVICE_EXCEPTION_CODE = 14500101
    const PARAMETER_ERROR_MSG = 'The parameter invalid.'
    const SERVICE_EXCEPTION_MSG = 'Service exception.'
	let invalid  = -1;
	
	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0010
    * @tc.name: newGravity_SensorJsTest001
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest001", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('---------newGravity_SensorJsTest001--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				sensor.on(sensor.SensorId.GRAVITY, callback);
				setTimeout(()=>{
					sensor.off(sensor.SensorId.GRAVITY);
					done();
				}, 500);
			})
		} catch (error) {
            console.info('newGravity_SensorJsTest001 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0020
    * @tc.name: newGravity_SensorJsTest002
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest002", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newGravity_SensorJsTest002--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest002 error');
				} else {
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.GRAVITY, callback);
						setTimeout(()=>{
							sensor.off(sensor.SensorId.GRAVITY);
							done();
						}, 500);
				}
			})
		} catch (error) {
            console.info('newGravity_SensorJsTest002 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0030
    * @tc.name: newGravity_SensorJsTest003
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest003", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newGravity_SensorJsTest003--------------');
        function onSensorCallback(data) {
            console.info('newGravity_SensorJsTest003 callback in');
            expect(false).assertTrue();
        }
        try {
            sensor.on(invalid, onSensorCallback);
        } catch (error) {
            console.info("newGravity_SensorJsTest003 error:" + error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0040
    * @tc.name: newGravity_SensorJsTest004
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest004", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newGravity_SensorJsTest004--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest004 error');
				} else {
					expect(typeof(data)).assertEqual("object");        
					sensor.on(sensor.SensorId.GRAVITY, callback, {'interval': 100000000});
					setTimeout(()=>{
						console.info('---------newGravity_SensorJsTest004 off in--------------');
						sensor.off(sensor.SensorId.GRAVITY);
						console.info('---------newGravity_SensorJsTest004 off end--------------');
						done();
					}, 500);
				}
			})
		} catch (error) {
            console.info('newGravity_SensorJsTest004 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0050
    * @tc.name: newGravity_SensorJsTest005
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest005", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, function (done) {
        console.info('---------newGravity_SensorJsTest005--------------');
        function onSensorCallback(data) {
            console.info('newGravity_SensorJsTest005  callback in');
            expect(typeof (data.x)).assertEqual("number");
			expect(typeof (data.y)).assertEqual("number");
			expect(typeof (data.z)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
        }
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest005 error');
				} else {
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.GRAVITY, onSensorCallback, {'interval': 100000000}, 5);
					setTimeout(()=>{
						console.info('---------newGravity_SensorJsTest005 off in--------------');
						sensor.off(sensor.SensorId.GRAVITY);
						console.info('---------newGravity_SensorJsTest005 off end--------------');
						done();
					}, 500);	
				}		
			})
        } catch (error) {
            console.info("newGravity_SensorJsTest005 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }			
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0060
    * @tc.name: newGravity_SensorJsTest006
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest006", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest006 error');
				} else {
					expect(typeof(data)).assertEqual("object");		
					sensor.once(sensor.SensorId.GRAVITY, callback);
					setTimeout(()=>{
						expect(true).assertTrue();
						done();
					}, 500);
				}
			})
        } catch (error) {
            console.info("newGravity_SensorJsTest006 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }				
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0070
    * @tc.name: newGravity_SensorJsTest007
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest007", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        function onceSensorCallback(data) {
            console.info('newGravity_SensorJsTest007 callback in');
            expect(false).assertTrue();
            done();
        }
        try {
            sensor.once(invalid, onceSensorCallback);
        } catch (error) {
            console.info("newGravity_SensorJsTest007 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0080
    * @tc.name: newGravity_SensorJsTest008
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest008", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, function (done) {
        function onceSensorCallback(data) {
            console.info('newGravity_SensorJsTest008  on error');
            expect(typeof (data.x)).assertEqual("number");
			expect(typeof (data.y)).assertEqual("number");
			expect(typeof (data.z)).assertEqual("number");
			expect(typeof (data.timestamp)).assertEqual("number");
            done();
        }
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest008 error');
				} else {
					expect(typeof(data)).assertEqual("object");	
					sensor.once(sensor.SensorId.GRAVITY, onceSensorCallback, 5);
				}
			})
	    } catch (error) {
            console.info("newGravity_SensorJsTest008 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0090
    * @tc.name: newGravity_SensorJsTest009
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest009", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        try {
            sensor.off(invalid, callback);
        } catch (error) {
            console.info('newGravity_SensorJsTest009 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE)
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG)
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0100
    * @tc.name: newGravity_SensorJsTest010
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest010", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        function onSensorCallback(data) {
            console.info('newGravity_SensorJsTest010 callback in');
            expect(false).assertTrue();
            done();
        }
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest010 error');
				} else {
					expect(typeof(data)).assertEqual("object");			
					sensor.on(sensor.SensorId.GRAVITY, onSensorCallback);
					sensor.off(sensor.SensorId.GRAVITY, onSensorCallback);
					setTimeout(()=>{
						expect(true).assertTrue();
						done();
					}, 500);
				}
			})
		} catch (error) {
            console.info("newGravity_SensorJsTest010 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0110
    * @tc.name: newGravity_SensorJsTest011
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest011", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        function onSensorCallback(data) {
            console.info('newGravity_SensorJsTest011 on error');
            expect(false).assertTrue();
        }
        try {
            sensor.off(1000000, onSensorCallback);
        } catch (error) {
            console.info("newGravity_SensorJsTest011 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE)
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG)
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0120
    * @tc.name: newGravity_SensorJsTest012
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest012", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest012 error');
				} else {   
					expect(typeof(data)).assertEqual("object");				
					sensor.on(sensor.SensorId.GRAVITY, (data)=>{
						console.info("newGravity_SensorJsTest012 callback: " + JSON.stringify(data));
						expect(typeof (data.x)).assertEqual("number");
						expect(typeof (data.y)).assertEqual("number");
						expect(typeof (data.z)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					});
					sensor.on(sensor.SensorId.GRAVITY, (data)=>{
						console.info("newGravity_SensorJsTest012 callback2: " + JSON.stringify(data));
						expect(typeof (data.x)).assertEqual("number");
						expect(typeof (data.y)).assertEqual("number");
						expect(typeof (data.z)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					});
					setTimeout(()=>{
						console.info('---------newGravity_SensorJsTest012 off in--------------');
						sensor.off(sensor.SensorId.GRAVITY);
						console.info('---------newGravity_SensorJsTest012 off end--------------');
						done();
					}, 1000);
				}
			})
		} catch (error) {
            console.info("newGravity_SensorJsTest012 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0130
    * @tc.name: newGravity_SensorJsTest013
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest013", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('---------newGravity_SensorJsTest013--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				sensor.on(sensor.SensorId.GRAVITY, callback);
				setTimeout(()=>{
					sensor.off(sensor.SensorId.GRAVITY, 5);
					done();
				}, 500);
			})
		} catch (error) {
            console.info('newGravity_SensorJsTest013 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0140
    * @tc.name: newGravity_SensorJsTest014
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest014", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newGravity_SensorJsTest014--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest012 error');
				} else {  	
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.GRAVITY, (data)=>{
						console.info("newGravity_SensorJsTest014 callback: " + JSON.stringify(data));
						expect(typeof (data.x)).assertEqual("number");
						expect(typeof (data.y)).assertEqual("number");
						expect(typeof (data.z)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					}, {'interval': 100000000});
					sensor.once(sensor.SensorId.GRAVITY, (data)=>{
						console.info("newGravity_SensorJsTest014 callback2: " + JSON.stringify(data));
						expect(typeof (data.x)).assertEqual("number");
						expect(typeof (data.y)).assertEqual("number");
						expect(typeof (data.z)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					});
					setTimeout(()=>{
						console.info('---------newGravity_SensorJsTest014 off in--------------');
						sensor.off(sensor.SensorId.GRAVITY);
						console.info('---------newGravity_SensorJsTest014 off end--------------');
						done();
					}, 1000);
				}
			})
		} catch (error) {
            console.info("newGravity_SensorJsTest014 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }	
	})		

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0150
    * @tc.name: newGravity_SensorJsTest015
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest015", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newGravity_SensorJsTest015--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest012 error');
				} else { 
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.GRAVITY, (data)=>{
						console.info("newGravity_SensorJsTest015 callback: " + JSON.stringify(data));
						expect(typeof (data.x)).assertEqual("number");
						expect(typeof (data.y)).assertEqual("number");
						expect(typeof (data.z)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					}, {'interval': 100000000});
					sensor.on(sensor.SensorId.GRAVITY, (data)=>{
						console.info("newGravity_SensorJsTest015 callback2: " + JSON.stringify(data));
						expect(typeof (data.x)).assertEqual("number");
						expect(typeof (data.y)).assertEqual("number");
						expect(typeof (data.z)).assertEqual("number");
						expect(typeof (data.timestamp)).assertEqual("number");
					}, {'interval': 100000000});
					setTimeout(()=>{
						console.info('---------newGravity_SensorJsTest015 off in--------------');
						sensor.off(sensor.SensorId.GRAVITY);
						console.info('---------newGravity_SensorJsTest015 off end--------------');
						done();
					}, 1000);
				}
		})
	} catch (error) {
        console.info("newGravity_SensorJsTest015 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})	

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0160
    * @tc.name: newGravity_SensorJsTest016
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest016", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newGravity_SensorJsTest016--------------');
        try {
            sensor.on();
        } catch (error) {
			console.info("newGravity_SensorJsTest016 error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
        try {
            sensor.once();
        } catch (error) {
			console.info("newGravity_SensorJsTest016_once error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
        try {
            sensor.off();
        } catch (error) {
			console.info("newGravity_SensorJsTest016_off error:" +error);
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })
	
	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0170
    * @tc.name: newGravity_SensorJsTest017
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest017", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------newGravity_SensorJsTest017--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest017 error');
				} else { 
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.GRAVITY, callback);
					sensor.on(sensor.SensorId.GRAVITY, callback2);
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest017 off in--------------');
						try {
						sensor.off(sensor.SensorId.GRAVITY, callback);
						} catch (error) {
						console.info("newGravity_SensorJsTest017 error:" + error);
						}
						console.info('----------------------newGravity_SensorJsTest017 off end--------------');
					}, 500);
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest017 off in--------------');
						sensor.off(sensor.SensorId.GRAVITY, callback2);
						console.info('----------------------newGravity_SensorJsTest017 off end--------------');
						done();
					}, 1000);
				}
			})
	} catch (error) {
        console.info("newGravity_SensorJsTest017 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})
	
	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0180
    * @tc.name: newGravity_SensorJsTest018
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest018", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------newGravity_SensorJsTest018--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest018 error');
				} else { 
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.GRAVITY, callback, { 'interval': 100000000 });
					sensor.on(sensor.SensorId.GRAVITY, callback2, { 'interval': 100000000 });
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest018 off in--------------');
						try {
						sensor.off(sensor.SensorId.GRAVITY, callback);
						} catch (error) {
						console.info("newGravity_SensorJsTest018 error:" + error);
						}
						console.info('----------------------newGravity_SensorJsTest018 off end--------------');
					}, 500);
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest018_2 off in--------------');
						sensor.off(sensor.SensorId.GRAVITY, callback2);
						console.info('----------------------newGravity_SensorJsTest018_2 off end--------------');
						done();
					}, 1000);
				}
			})
	} catch (error) {
        console.info("newGravity_SensorJsTest018 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})
	
	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0190
    * @tc.name: newGravity_SensorJsTest019
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest019", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------newGravity_SensorJsTest019--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest019 error');
				} else { 
					expect(typeof(data)).assertEqual("object");
					console.info('----------------------newGravity_SensorJsTest019 off in--------------');
					try{
						sensor.off(-1, callback);
						console.info('----------------------newGravity_SensorJsTest019 off end--------------');
					} catch (error) {
						console.info("newGravity_SensorJsTest019 error:" + error);
						expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
						expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
						done();
					}
				}
			})
	} catch (error) {
        console.info("newGravity_SensorJsTest019 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})
	
	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0200
    * @tc.name: newGravity_SensorJsTest020
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest020", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('----------------------newGravity_SensorJsTest020--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest020 error');
				} else { 
					try {
						sensor.on(sensor.SensorId.GRAVITY, callback, {'interval': -100000000});
						console.info('----------------------newGravity_SensorJsTest020 off in---------------------------');
						sensor.off(sensor.SensorId.GRAVITY);
						console.info('----------------------newGravity_SensorJsTest020 off end---------------------------');
						done();
					} catch (error) {
						console.info('newGravity_SensorJsTest020 On fail, errCode:' + error.code + ' ,msg:' + error.message);
						expect(error.code).assertEqual(SERVICE_EXCEPTION_CODE);
						expect(error.message).assertEqual(SERVICE_EXCEPTION_MSG);
						done();
					}
				}
			})
	} catch (error) {
        console.info("newGravity_SensorJsTest020 Device does not support! ");
        expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
        expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
        done();
    }
	})
	
	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0210
    * @tc.name: newGravity_SensorJsTest021
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest021", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('---------newGravity_SensorJsTest021--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				sensor.on(sensor.SensorId.GRAVITY, callback);
				setTimeout(()=>{
					sensor.off(sensor.SensorId.GRAVITY);
					done();
				}, 500);
			})
		} catch (error) {
            console.info('newGravity_SensorJsTest021 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0220
    * @tc.name: newGravity_SensorJsTest022
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest022", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest022 error');
				} else {
					expect(typeof(data)).assertEqual("object");        
					sensor.on(sensor.SensorId.GRAVITY, callback, undefined);
					try{
					sensor.on(sensor.SensorId.GRAVITY, callback, { 'interval': undefined });
					} catch(error){
						console.info('newGravity_SensorJsTest022 Repeat subscription'+error);
					}
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest022 off in--------------');
						try {
						sensor.off(sensor.SensorId.GRAVITY);
						} catch (error) {
						console.info("newGravity_SensorJsTest022 error:" + error);
						expect(false).assertTrue();
						}
						done();
					}, 1000);
				}
			})
		} catch (error) {
            console.info('newGravity_SensorJsTest022 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0230
    * @tc.name: newGravity_SensorJsTest023
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest023", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
        console.info('---------newGravity_SensorJsTest023--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest023 error');
				} else {
					expect(typeof(data)).assertEqual("object");        
					sensor.on(sensor.SensorId.GRAVITY, callback, null);
					try{
						sensor.on(sensor.SensorId.GRAVITY, callback, { 'interval': null });
						} catch(error){
							console.info('newGravity_SensorJsTest023 Repeat subscription'+error);
						}
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest023 off in--------------');
						try {
							sensor.off(sensor.SensorId.GRAVITY);
							} catch (error) {
						console.info("newGravity_SensorJsTest023 error:" + error);
							expect(false).assertTrue();
							}
							done();
					}, 1000);
				}
			})
		} catch (error) {
            console.info('newGravity_SensorJsTest023 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0240
    * @tc.name: newGravity_SensorJsTest024
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest024", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, function (done) {
        console.info('---------newGravity_SensorJsTest024--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest024 error');
				} else {
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.GRAVITY, callback, { 'interval': null });
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest024 off in--------------');
						try {
						sensor.off(sensor.SensorId.GRAVITY);
						} catch (error) {
						console.info("newGravity_SensorJsTest024 error:" + error);
						expect(false).assertTrue();
						}
						done();			
					}, 500);
				}		
			})
        } catch (error) {
            console.info("newGravity_SensorJsTest024 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }			
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0250
    * @tc.name: newGravity_SensorJsTest025
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest025", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL3, async function (done) {
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest025 error');
				} else {
					expect(typeof(data)).assertEqual("object");		
					sensor.on(sensor.SensorId.GRAVITY, callback, { 'interval': 100000000 });
					try{
						sensor.on(sensor.SensorId.GRAVITY, callback, { 'interval': 100000000 });
						} catch(error){
							console.info("newGravity_SensorJsTest025 catch error:" + error);
						}
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest025 off in--------------');
						try {
							sensor.off(sensor.SensorId.GRAVITY);
							} catch (error) {
						console.info("newGravity_SensorJsTest025 error:" + error);
							expect(false).assertTrue();
							}
						console.info('----------------------newGravity_SensorJsTest025 off end--------------');
							done()
					}, 1000);
				}
			})
        } catch (error) {
            console.info("newGravity_SensorJsTest025 Device does not support! ");
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }				
    })

	/*
    * @tc.number:SUB_SensorsSystem_NEWGRAVITY_JsTest_0260
    * @tc.name: newGravity_SensorJsTest026
    * @tc.desc: Functional Use Cases
    */
    it("newGravity_SensorJsTest026", TestType.FUNCTION | Size.MEDIUMTEST | Level.LEVEL0, async function (done) {
        console.info('---------newGravity_SensorJsTest026--------------');
		try{
		   sensor.getSingleSensor(sensor.SensorId.GRAVITY,(error, data) => {
				if (error) {
					console.info('newGravity_SensorJsTest026 error');
				} else {
					expect(typeof(data)).assertEqual("object");
					sensor.on(sensor.SensorId.GRAVITY, callback, { 'interval': undefined });
					sensor.on(sensor.SensorId.GRAVITY, callback2, { 'interval': undefined });
					setTimeout(() => {
						console.info('----------------------newGravity_SensorJsTest026 off in--------------');
						try {
						sensor.off(sensor.SensorId.GRAVITY, callback);
						sensor.off(sensor.SensorId.GRAVITY, callback2);
						} catch (error) {
						console.info("newGravity_SensorJsTest026 error:" + error);
						expect(false).assertTrue();
						}
						console.info('----------------------newGravity_SensorJsTest026 off end--------------');
						done()
					}, 1000);
				}
			})
		} catch (error) {
            console.info('newGravity_SensorJsTest026 Device does not support! ');
            expect(error.code).assertEqual(PARAMETER_ERROR_CODE);
            expect(error.message).assertEqual(PARAMETER_ERROR_MSG);
            done();
        }
    })		
})}
