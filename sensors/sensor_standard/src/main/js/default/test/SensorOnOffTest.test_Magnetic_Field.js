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

describe("SensorJsTest_sensor19", function () {
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

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0010
     * @tc.name: SensorMagneticFieldJSTest001
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0010", 0, async function (done) {
        console.info('----------------------SUB_SensorsSystem_Magnetic_Field_JSTest_0010---------------------------');
        function offPromise() {
            return new Promise((resolve, reject) => {
                sensor.off(sensor.SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, (error) => {
                    if (error) {
                        console.info('SensorMagneticFieldJSTest001  off error');
                        expect(false).assertTrue();
                        console.info('setTimeout ..start')
                        setTimeout((err) => {
                            reject(err);
                        }, 500);
                    } else {
                        console.info('SensorMagneticFieldJSTest001  off success');
                        expect(true).assertTrue();
                        setTimeout(() => {
                            resolve();
                        }, 500);
                    }
                }, 1000)
            })
        }

        let promise = new Promise((resolve, reject) => {
            sensor.on(sensor.SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, function (error, data) {
                if (error) {
                    console.info('SensorMagneticFieldJSTest001  on error');
                    expect(false).assertTrue();
                    setTimeout((err) => {
                        reject(err);
                    }, 500);
                } else {
                    console.info('SensorMagneticFieldJSTest001  on success, x: ' + data.x + "y: " 
                        + data.y + "z: " + data.z);
                    expect(typeof (data.x)).assertEqual("number");
                    expect(typeof (data.y)).assertEqual("number");
                    expect(typeof (data.z)).assertEqual("number");
                    setTimeout(() => {
                        resolve();
                    }, 500);
                }
            });
        })

        await promise.then(() => {
            return offPromise();
        }, () => {
            console.info("SensorMagneticFieldJSTest001 reject");
        })
        done();
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0020
     * @tc.name: SensorMagneticFieldJSTest002
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0020", 0, async function (done) {
        console.info('----------------------SUB_SensorsSystem_Magnetic_Field_JSTest_0020---------------------------');
        function onSensorCallback(error, data) {
            if (error) {
                console.info('SensorMagneticFieldJSTest002  on success');
                expect(true).assertTrue();
            } else {
                console.info('SensorMagneticFieldJSTest002  on error');
                expect(false).assertTrue();
            }
            setTimeout(() => {
                done();
            }, 500);
        }
        sensor.on(-1, onSensorCallback);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0030
     * @tc.name: SensorMagneticFieldJSTest003
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0030", 0, async function (done) {
        console.info('----------------------SUB_SensorsSystem_Magnetic_Field_JSTest_0030---------------------------');
        function offPromise() {
            return new Promise((resolve, reject) => {
                sensor.off(6, (error) => {
                    if (error) {
                        console.info('SensorMagneticFieldJSTest003  off error');
                        expect(false).assertTrue();
                        setTimeout((err) => {
                            done();
                            reject(err);
                        }, 500);
                    } else {
                        console.info('SensorMagneticFieldJSTest003  off success');
                        expect(true).assertTrue();
                        setTimeout(() => {
                            done();
                            resolve();
                        }, 500);
                    }
                }, 1000)
            })
        }

        let promise = new Promise((resolve, reject) => {
            sensor.on(6, function (error, data) {
                if (error) {
                    console.info('SensorMagneticFieldJSTest003  on error');
                    expect(false).assertTrue();
                    setTimeout((err) => {
                        reject(err);
                    }, 500);
                } else {
                    console.info('SensorMagneticFieldJSTest003  on success x: ' + data.x + "y: " 
                        + data.y + "z: " + data.z);
                    expect(typeof (data.x)).assertEqual("number");
                    expect(typeof (data.y)).assertEqual("number");
                    expect(typeof (data.z)).assertEqual("number");
                    setTimeout(() => {
                        resolve();
                    }, 500);
                }
            }, { 'interval': 200000000 });
        })

        await promise.then(() => {
            return offPromise();
        }, () => {
            console.info("SensorMagneticFieldJSTest003 reject");
        })
        done();
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0040
     * @tc.name: SensorMagneticFieldJSTest004
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0040", 0, function () {
        console.info('----------------------SensorMagneticFieldJSTest004---------------------------');
        sensor.on(6, function () { }, { 'interval': 100000000 }, 5);
        expect(true).assertTrue();
        console.info('----------------------SensorMagneticFieldJSTest004--------------------------- end');
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0050
     * @tc.name: SensorMagneticFieldJSTest005
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0050", 0, async function (done) {
        function onceSensorCallback(error, data) {
            if (error) {
                console.info('SensorMagneticFieldJSTest005  once error');
                expect(false).assertTrue();
            } else {
                console.info('SensorMagneticFieldJSTest005  once success x: ' + data.x + "y: " 
                    + data.y + "z: " + data.z);
                expect(typeof (data.x)).assertEqual("number");
                expect(typeof (data.y)).assertEqual("number");
                expect(typeof (data.z)).assertEqual("number");
            }
            setTimeout(() => {
                done();
            }, 500);
        }
        sensor.once(sensor.SensorType.SENSOR_TYPE_ID_MAGNETIC_FIELD, onceSensorCallback);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0060
     * @tc.name: SensorMagneticFieldJSTest006
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0060", 0, async function (done) {
        function onceSensorCallback(error, data) {
            if (error) {
                console.info('SensorMagneticFieldJSTest006  on success');
                expect(true).assertTrue();
            } else {
                console.info('SensorMagneticFieldJSTest006  on error');
                expect(false).assertTrue();
            }
            setTimeout(() => {
                done();
            }, 500);
        }
        sensor.once(-1, onceSensorCallback);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0070
     * @tc.name: SensorMagneticFieldJSTest007
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0070", 0, function () {
        sensor.once(6, function () { }, 5);
        expect(true).assertTrue();
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0080
     * @tc.name: SensorMagneticFieldJSTest008
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0080", 0, async function (done) {
        function offCallback(error) {
            if (error) {
                console.info('SensorMagneticFieldJSTest008  off success');
                expect(true).assertTrue();
            } else {
                console.info('SensorMagneticFieldJSTest008  off error');
                expect(false).assertTrue();
            }
            setTimeout(() => {
                done();
            }, 500);
        }
        sensor.off(-1, offCallback);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0090
     * @tc.name: SensorMagneticFieldJSTest009
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0090", 0, async function (done) {
        function offCallback(error) {
            if (error) {
                console.info('SensorMagneticFieldJSTest009  off success');
                expect(true).assertTrue();
            } else {
                console.info('SensorMagneticFieldJSTest009  off error');
                expect(false).assertTrue();
            }
            setTimeout(() => {
                done();
            }, 500);
        }
        sensor.off(6, offCallback);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0100
     * @tc.name: SensorMagneticFieldJSTest010
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0100", 0, async function (done) {
        function offCallback(error) {
            if (error) {
                console.info('SensorMagneticFieldJSTest010  off success');
                expect(true).assertTrue();
            } else {
                console.info('SensorMagneticFieldJSTest010  off error');
                expect(false).assertTrue();
            }
            setTimeout(() => {
                done();
            }, 500);
        }
        sensor.off(1000000, offCallback);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0110
     * @tc.name: SensorMagneticFieldJSTest011
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0110", 0, async function (done) {
        function onceSensorCallback(error, data) {
            if (error) {
                console.info('SensorMagneticFieldJSTest011  once success');
                expect(true).assertTrue();
            } else {
                console.info('SensorMagneticFieldJSTest011  once error');
                expect(false).assertTrue();
            }
            setTimeout(() => {
                done();
            }, 500);
        }
        sensor.once(1000000, onceSensorCallback);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0120
     * @tc.name: SensorMagneticFieldJSTest012
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0120", 0, async function (done) {
        function onCallback(error) {
            if (error) {
                console.info('SensorMagneticFieldJSTest012  on success');
                expect(true).assertTrue();
            } else {
                console.info('SensorMagneticFieldJSTest012  on error');
                expect(false).assertTrue();
            }
            setTimeout(() => {
                done();
            }, 500);
        }
        sensor.on(1000000, onCallback);
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0130
     * @tc.name: SensorMagneticFieldJSTest013
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0130", 0, function () {
        sensor.off(6, 5);
        expect(true).assertTrue();
    })


    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0140
     * @tc.name: SensorMagneticFieldJSTest014
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0140", 0, async function (done) {
        console.info('----------------------SUB_SensorsSystem_Magnetic_Field_JSTest_0140---------------------------');
        function offPromise2() {
            return new Promise((resolve, reject) => {
                sensor.off(6, (error) => {
                    if (error) {
                        console.info('SensorMagneticFieldJSTest014  off2 success');
                        expect(true).assertTrue();
                        setTimeout((err) => {
                            done();
                            reject(err)
                        }, 500);
                    } else {
                        console.info('SensorMagneticFieldJSTest014  off2 error');
                        expect(false).assertTrue();
                        setTimeout(() => {
                            done();
                            resolve()
                        }, 500);
                    }
                });
            })
        }

        function offPromise1() {
            return new Promise((resolve, reject) => {
                sensor.off(6, (error) => {
                    if (error) {
                        console.info('SensorMagneticFieldJSTest014  off1  error');
                        expect(false).assertTrue();
                        setTimeout((err) => {
                            reject(err);
                        }, 500);
                    } else {
                        console.info('SensorMagneticFieldJSTest014  off1  success');
                        expect(true).assertTrue();
                        setTimeout(() => {
                            resolve();
                        }, 500);
                    }
                });
            })
        }

        let promise = new Promise((resolve, reject) => {
            sensor.on(6, function (error, data) {
                if (error) {
                    console.info('SensorMagneticFieldJSTest014  on error');
                    expect(false).assertTrue();
                    setTimeout((err) => {
                        reject(err);
                    }, 500);
                } else {
                    console.info('SensorMagneticFieldJSTest014  on success x: ' + data.x + "y: " 
                        + data.y + "z: " + data.z);
                    expect(typeof (data.x)).assertEqual("number");
                    expect(typeof (data.y)).assertEqual("number");
                    expect(typeof (data.z)).assertEqual("number");
                    setTimeout(() => {
                        resolve();
                    }, 500);
                }
            });
        })

        await promise.then(() => {
            return offPromise1();
        }).then(() => {
            return offPromise2();
        });
        done();
    })

    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0150
     * @tc.name: SensorMagneticFieldJSTest015
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0150", 0, async function (done) {
        console.info('----------------------SUB_SensorsSystem_Magnetic_Field_JSTest_0150---------------------------');
        function offPromise() {
            return new Promise((resolve, reject) => {
                sensor.off(6, (error) => {
                    if (error) {
                        console.info('SensorMagneticFieldJSTest015  off error');
                        expect(false).assertTrue();
                        setTimeout((err) => {
                            done();
                            reject(err);
                        }, 500);
                    } else {
                        console.info('SensorMagneticFieldJSTest015  off success');
                        expect(true).assertTrue();
                        setTimeout(() => {
                            done();
                            resolve();
                        }, 500);
                    }
                });
            })
        }
        function onPromise2() {
            return new Promise((resolve, reject) => {
                sensor.on(6, function (error, data) {
                    if (error) {
                        console.info('SensorMagneticFieldJSTest015  on2 error');
                        expect(false).assertTrue();
                        setTimeout((err) => {
                            reject(err);
                        }, 500);
                    } else {
                        console.info('SensorMagneticFieldJSTest015  on2 success x: ' + data.x + "y: " 
                            + data.y + "z: " + data.z);
                        expect(typeof (data.x)).assertEqual("number");
                        expect(typeof (data.y)).assertEqual("number");
                        expect(typeof (data.z)).assertEqual("number");
                        setTimeout(() => {
                            resolve();
                        }, 500);
                    }
                });
            })
        }

        let onPromise1 = new Promise((resolve, reject) => {
            sensor.on(6, function (error, data) {
                if (error) {
                    console.info('SensorMagneticFieldJSTest015  on1 error');
                    expect(false).assertTrue();
                    setTimeout((err) => {
                        reject(err);
                    }, 500);
                } else {
                    console.info('SensorMagneticFieldJSTest015  on1 success x: ' + data.x + "y: " 
                        + data.y + "z: " + data.z);
                    expect(typeof (data.x)).assertEqual("number");
                    expect(typeof (data.y)).assertEqual("number");
                    expect(typeof (data.z)).assertEqual("number");
                    setTimeout(() => {
                        resolve();
                    }, 500);
                }
            });
        })

        await onPromise1.then(() => {
            return onPromise2();
        }).then(() => {
            return offPromise();
        });
        done();
    })


    /*
     * @tc.number: SUB_SensorsSystem_Magnetic_Field_JSTest_0160
     * @tc.name: SensorMagneticFieldJSTest016
     * @tc.desc:verify app info is not null
     */
    it("SUB_SensorsSystem_Magnetic_Field_JSTest_0160", 0, async function (done) {
        console.info('----------------------SUB_SensorsSystem_Magnetic_Field_JSTest_0160---------------------------');
        function offPromise() {
            return new Promise((resolve, reject) => {
                sensor.off(6, (error) => {
                    if (error) {
                        console.info('SensorMagneticFieldJSTest016  off error');
                        expect(false).assertTrue();
                        setTimeout((err) => {
                            done();
                            reject(err);
                        }, 500);
                    } else {
                        console.info('SensorMagneticFieldJSTest016  off success');
                        expect(true).assertTrue();
                        setTimeout(() => {
                            done();
                            resolve();
                        }, 500);
                    }
                });
            })
        }
        function oncePromise() {
            return new Promise((resolve, reject) => {
                sensor.once(6, function (error, data) {
                    if (error) {
                        console.info('SensorMagneticFieldJSTest016  once error');
                        expect(false).assertTrue();
                        setTimeout((err) => {
                            reject(err);
                        }, 500);
                    } else {
                        console.info('SensorMagneticFieldJSTest016  once success x: ' + data.x + "y: " 
                            + data.y + "z: " + data.z);
                        expect(typeof (data.x)).assertEqual("number");
                        expect(typeof (data.y)).assertEqual("number");
                        expect(typeof (data.z)).assertEqual("number");
                        setTimeout(() => {
                            resolve();
                        }, 500);
                    }
                });
            })
        }

        let onPromise1 = new Promise((resolve, reject) => {
            sensor.on(6, function (error, data) {
                if (error) {
                    console.info('SensorMagneticFieldJSTest016  on1 error');
                    expect(false).assertTrue();
                    setTimeout((err) => {
                        reject(err);
                    }, 500);
                } else {
                    console.info('SensorMagneticFieldJSTest016  on1 success x: ' + data.x + "y: " 
                        + data.y + "z: " + data.z);
                    expect(typeof (data.x)).assertEqual("number");
                    expect(typeof (data.y)).assertEqual("number");
                    expect(typeof (data.z)).assertEqual("number");
                    setTimeout(() => {
                        resolve();
                    }, 500);
                }
            });
        })

        await onPromise1.then(() => {
            return oncePromise();
        }).then(() => {
            return offPromise();
        });
        done();
    })
})
