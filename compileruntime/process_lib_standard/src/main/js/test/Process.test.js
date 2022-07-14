/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'
import process from '@ohos.process'
export default function ChildProcessTest() {
describe('ChildProcessTest', function () {

    /**
     * @tc.name: testGetUid001
     * @tc.desc: returns the digital user id of the process.
     * @tc.author: wangben
     */
    it('testGetUid001', 0, function () {
        let result = process.uid
        if(result > 0) {
            var flag = true
        }
        expect(flag).assertEqual(true)
    })

    /**
     * @tc.name: testGetUid002
     * @tc.desc: returns the digital user id of the process.
     * @tc.author: wangben
     */
    it('testGetUid002', 0, function () {
        for(let i = 0; i < 3; i++){
            let result = process.uid
            if(result != null) {
                if(result > 0) {
                    var flag = true
                }
                expect(flag).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: testGetUid003
     * @tc.desc: returns the digital user id of the process.
     * @tc.author: wangben
     */
    it('testGetUid003', 0, function () {
        for(let i = 0; i < 6; i++){
            let result = process.uid
            if (result != null) {
                if(result > 0) {
                    var flag = true
                }
                expect(flag).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: testGetUid004
     * @tc.desc: returns the digital user id of the process.
     * @tc.author: wangben
     */
    it('testGetUid004', 0, function () {
        for (let i = 0; i < 8; i++){
            let result = process.uid
            if (result != null) {
                if (result > 0) {
                    var flag = true
                }
                expect(flag).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: testGetUid005
     * @tc.desc: returns the digital user id of the process.
     * @tc.author: wangben
     */
    it('testGetUid005', 0, function () {
        for (let i = 0; i < 5; i++){
            let result = process.uid
            if (result != null) {
                if (result > 0) {
                    var flag = true
                }
                expect(flag).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: testKill001
     * @tc.desc: Return whether the signal was sent successfully.
     * @tc.author: wangben
     */
    it('testKill001', 0, function () {
        let result = process.kill(3, 123)
        expect(result).assertEqual(false)
    })

    /**
     * @tc.name: testKill002
     * @tc.desc: Return whether the signal was sent successfully.
     * @tc.author: wangben
     */
    it('testKill002', 0, function () {
        let pres = process.pid
        let result = process.kill(23, pres)
        expect(result).assertEqual(true)
    })

    /**
     * @tc.name: testKill003
     * @tc.desc: Return whether the signal was sent successfully.
     * @tc.author: wangben
     */
    it('testKill003', 0, function () {
        let pres = process.pid
        let result = process.kill(28, pres)
        expect(result).assertEqual(true)
    })

    /**
     * @tc.name: testKill004
     * @tc.desc: Return whether the signal was sent successfully.
     * @tc.author: wangben
     */
    it('testKill004', 0, function () {
        let pres = process.pid
        let result = process.kill(17, pres)
        expect(result).assertEqual(true)
    })

    /**
     * @tc.name: testKill005
     * @tc.desc: Return whether the signal was sent successfully.
     * @tc.author: wangben
     */
    it('testKill005', 0, function () {
        let result = process.kill(3, 113)
        expect(result).assertEqual(false)
    })

    /**
     * @tc.name: testUptime001
     * @tc.desc: Returns the running time of the system.
     * @tc.author: wangben
     */
    it('testUptime001', 0, function () {
        let result1 = process.uptime()
        function sleep(d){
            while(process.uptime() - result1 <= d);
        }
        sleep(6);
        let result2 = process.uptime()
        var flag = false
        if ((result2 - result1) >= 6) {
            flag = true
        }
        expect(flag).assertEqual(true)
    })

    /**
     * @tc.name: testUptime002
     * @tc.desc: Returns the running time of the system.
     * @tc.author: wangben
     */
    it('testUptime002', 0, function () {
        let result1 = process.uptime()
        function sleep(d){
            while (process.uptime() - result1 <= d);
        }
        sleep(8);
        let result2 = process.uptime()
        var flag = false
        if ((result2 - result1) >= 8) {
            flag = true
        }
        expect(flag).assertEqual(true)
    })

    /**
     * @tc.name: testUptime003
     * @tc.desc: Returns the running time of the system.
     * @tc.author: wangben
     */
    it('testUptime003', 0, function () {
        let result1 = process.uptime()
        function sleep(d){
            while (process.uptime() - result1 <= d);
        }
        sleep(10);
        let result2 = process.uptime()
        var flag = false
        if ((result2 - result1) >= 10) {
            flag = true
        }
        expect(flag).assertEqual(true)
    })

    /**
     * @tc.name: testUptime004
     * @tc.desc: Returns the running time of the system.
     * @tc.author: wangben
     */
    it('testUptime004', 0, function () {
        let result1 = process.uptime()
        function sleep(d){
            while (process.uptime() - result1 <= d);
        }
        sleep(7);
        let result2 = process.uptime()
        var flag = false
        if ((result2 - result1) >= 7) {
            flag = true
        }
        expect(flag).assertEqual(true)
    })

    /**
     * @tc.name: testUptime005
     * @tc.desc: Returns the running time of the system.
     * @tc.author: wangben
     */
    it('testUptime005', 0, function () {
        let result1 = process.uptime()
        function sleep(d){
            while (process.uptime() - result1 <= d);
        }
        sleep(11);
        let result2 = process.uptime()
        var flag = false
        if ((result2 - result1) >= 11) {
            flag = true
        }
        expect(flag).assertEqual(true)
    })

    /**
     * @tc.name: testPid001
     * @tc.desc: Return pid is the pid of the current process.
     * @tc.author: wangben
     */
    it('testPid001', 0, function () {
        let result = process.pid
        if (result > 0) {
            var flag = true
        }
        expect(flag).assertEqual(true)
    })

    /**
     * @tc.name: testPid002
     * @tc.desc: Return pid is the pid of the current process.
     * @tc.author: wangben
     */
    it('testPid002', 0, function () {
        for (let i = 0; i < 3; i++) {
            let result = process.pid
            if (result > 0) {
                var flag = true
            }
            expect(flag).assertEqual(true)
        }
    })

    /**
     * @tc.name: testPid003
     * @tc.desc: Return pid is the pid of the current process.
     * @tc.author: wangben
     */
    it('testPid003', 0, function () {
        for (let i = 0; i < 5; i++) {
            let result = process.pid
            if (result > 0) {
                var flag = true
            }
            expect(flag).assertEqual(true)
        }
    })

    /**
     * @tc.name: testPid004
     * @tc.desc: Return pid is the pid of the current process.
     * @tc.author: wangben
     */
    it('testPid004', 0, function () {
        for (let i = 0; i < 6; i++) {
            let result = process.pid
            if (result > 0) {
                var flag = true
            }
            expect(flag).assertEqual(true)
        }
    })

    /**
     * @tc.name: testPid005
     * @tc.desc: Return pid is the pid of the current process.
     * @tc.author: wangben
     */
    it('testPid005', 0, function () {
        for (let i = 0; i < 8; i++) {
            let result = process.pid
            if (result > 0) {
                var flag = true
            }
            expect(flag).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns the tid of the current thread.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001', 0, function () {
        let pres = process.tid
        if (pres > 0) {
            var flag = new Boolean(true)
        }
        expect(Boolean(flag)).assertEqual(true)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns the tid of the current thread.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        for (let i=0; i < 5; i++) {
            let pres = process.tid
            if (pres > 0) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_003
     * @tc.desc: Returns the tid of the current thread.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_003', 0, function () {
        for (let i=0; i < 3; i++) {
            let pres = process.tid
            if (pres > 0) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })


    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns a boolean whether the process is isolated.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001', 0, function () {
        let pres = process.isIsolatedProcess()
        expect(pres).assertEqual(true)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns a boolean whether the process is isolated.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        for (let i=0; i < 3; i++) {
            let pres = process.isIsolatedProcess()
            expect(pres).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_003
     * @tc.desc: Returns a boolean whether the process is isolated.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_003', 0, function () {
        for (let i=0; i < 5; i++) {
            let pres = process.isIsolatedProcess()
            expect(pres).assertEqual(true)
        }
    })


    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns a boolean whether the specified uid belongs to a particular application.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001', 0, function () {
        let isorno = process.isAppUid(167)
        expect(isorno).assertEqual(false)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns a boolean whether the specified uid belongs to a particular application.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        let isorno = process.isAppUid(123)
        expect(isorno).assertEqual(false)
    })

    /**
     * @tc.name: testIsappuid003
     * @tc.desc: Returns a boolean whether the specified uid belongs to a particular application.
     * @tc.author: liwenqiang
     */
    it('testIsappuid003', 0, function () {
        let isorno = process.isAppUid(80000)
        expect(isorno).assertEqual(false)
    })

    /**
     * @tc.name: testIsappuid004
     * @tc.desc: Returns a boolean whether the specified uid belongs to a particular application.
     * @tc.author: liwenqiang
     */
    it('testIsappuid004', 0, function () {
        let isorno = process.isAppUid(789)
        expect(isorno).assertEqual(false)
    })

    /**
     * @tc.name: testIsappuid005
     * @tc.desc: Returns a boolean whether the specified uid belongs to a particular application.
     * @tc.author: liwenqiang
     */
    it('testIsappuid005', 0, function () {
        let isorno = process.isAppUid(8569)
        expect(isorno).assertEqual(false)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns a boolean whether the process is running in a 64-bit environment.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001', 0, function () {
        let isorno = process.is64Bit()
        if (isorno) {
            expect(isorno).assertEqual(true)
        } else {
            expect(isorno).assertEqual(false)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns a boolean whether the process is running in a 64-bit environment.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        for (let i=0; i<3; i++) {
            let isorno = process.is64Bit()
            if (isorno) {
                expect(isorno).assertEqual(true)
            } else {
            expect(isorno).assertEqual(false)
         }
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_003
     * @tc.desc: Returns a boolean whether the process is running in a 64-bit environment.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_003', 0, function () {
        for (let i=0; i<5; i++) {
            let isorno = process.is64Bit()
            if (isorno) {
                expect(isorno).assertEqual(true)
            } else {
            expect(isorno).assertEqual(false)
            }
        }
    })


    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns the uid based on the specified user name.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001',0, function () {
        let pres = process.getUidForName("root")
        if (pres != -1) {
            let flag = new Boolean(true)
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns the uid based on the specified user name.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        for (let i=0; i<3; i++) {
            let pres = process.getUidForName("12356")
            expect(pres).assertEqual(-1)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_003
     * @tc.desc: Returns the uid based on the specified user name.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_003', 0, function () {
        for (let i=0; i<5; i++) {
            let pres = process.getUidForName("12356")
            expect(pres).assertEqual(-1)
        }
    })


    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns the thread priority based on the specified tid.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001', 0, function () {
        let pres = process.tid
        let pri = process.getThreadPriority(pres)
        if (pri) {
            let flag = new Boolean(true)
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns the thread priority based on the specified tid.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        let pres = process.tid
        for (let i=0; i<3; i++) {
            let pri = process.getThreadPriority(pres)
            if (pri > 0) {
                let flag = new Boolean(true)
                expect(Boolean(flag)).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_003
     * @tc.desc: Returns the thread priority based on the specified tid.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_003', 0, function () {
        let pres = process.tid
        for (let i=0; i<5; i++) {
            let pri = process.getThreadPriority(pres)
            if (pri > 0) {
                let flag = new Boolean(true)
                expect(Boolean(flag)).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns the elapsed real time (in milliseconds) taken from the start of
     * @the system to the start of the process.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001', 0, function () {
        for (let i=0; i<3; i++) {
            let pri = process.getStartRealtime()
            if (pri !== null) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns the elapsed real time (in milliseconds) taken from the start of
     * @the system to the start of the process.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        let pri = process.getStartRealtime()
        if (pri !== null) {
            var flag = new Boolean(true)
        }
        expect(Boolean(flag)).assertEqual(true)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_003
     * @tc.desc: Returns the elapsed real time (in milliseconds) taken from the start of
     * @the system to the start of the process.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_003', 0, function () {
        for (let i=0; i<5; i++) {
            let pri = process.getStartRealtime()
            if (pri !== null) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_004
     * @tc.desc: Returns the elapsed real time (in milliseconds)
     * @taken from the start of the system to the start of the process.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_004', 0, function () {
        for (let i=0; i<8; i++) {
            let pri = process.getStartRealtime()
            if (pri !== null) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }  
    })

    /**
     * @tc.name: testGetstartrealtime005
     * @tc.desc: Returns the elapsed real time (in milliseconds) taken from the start of
     * @the system to the start of the process.
     * @tc.author: liwenqiang
     */
    it('testGetstartrealtime005', 0, function () {
        for (let i=0; i<6; i++) {
            let pri = process.getStartRealtime()
            if (pri !== null) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: testGetpastCpuTime001
     * @tc.desc: Returns the cpu time (in milliseconds) from the time when the process starts to the current time.
     * @tc.author: liwenqiang
     */
    it('testGetpastCpuTime001', 0, function () {
        for (let i=0; i<3; i++) {
            let pri = process.getPastCpuTime()
            if (pri > 0) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns the cpu time (in milliseconds) from the time when the process starts to the current time.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        let pri = process.getPastCpuTime()
        if (pri > 0) {
            var flag = new Boolean(true)
        }
        expect(Boolean(flag)).assertEqual(true)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_003
     * @tc.desc: Returns the cpu time (in milliseconds) from the time when the process starts to the current time.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_003', 0, function () {
        for (let i=0; i<5; i++) {
            let pri = process.getPastCpuTime()
            if (pri > 0) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_004
     * @tc.desc: Returns the cpu time (in milliseconds) from the time when the process starts to the current time.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_004', 0, function () {
        for (let i=0; i<8; i++) {
            let pri = process.getPastCpuTime()
            if (pri > 0) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns the system configuration at runtime.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001', 0, function () {
        let _SC_ARG_MAX = 0
        let pri = process.getSystemConfig(_SC_ARG_MAX)
        if (pri > 0) {
            var flag = new Boolean(true)
        }
        expect(Boolean(flag)).assertEqual(true)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns the system configuration at runtime.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        let _SC_ARG_MAX = 0
        for (let i=0; i<3; i++) {
            let pri = process.getSystemConfig(_SC_ARG_MAX)
            if (pri > 0) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_003
     * @tc.desc: Returns the system configuration at runtime.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_003', 0, function () {
        let _SC_ARG_MAX = 0
        for (let i=0; i<5; i++) {
            let pri = process.getSystemConfig(_SC_ARG_MAX)
            if (pri > 0) {
                var flag = new Boolean(true)
            }
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_004
     * @tc.desc: Returns the system configuration at runtime.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_004', 0, function () {
        let _SC_OPEN_MAX = 4
        let pri = process.getSystemConfig(_SC_OPEN_MAX)
        if (pri > 0) {
            var flag = new Boolean(true)
        }
        expect(Boolean(flag)).assertEqual(true)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_005
     * @tc.desc: Returns the system configuration at runtime.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_005', 0, function () {
        let _SC_PAGESIZE = 8
        let pri = process.getSystemConfig(_SC_PAGESIZE)
        if (pri > 0) {
            var flag = new Boolean(true)
        }
        expect(Boolean(flag)).assertEqual(true)
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_001
     * @tc.desc: Returns the system value for environment variables.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_001', 0, function () {
        let pri = process.getEnvironmentVar("USER")
        if (pri != null) {
            var flag = new Boolean(true)
            expect(Boolean(flag)).assertEqual(true)
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_002
     * @tc.desc: Returns the system value for environment variables.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_002', 0, function () {
        for (let i=0; i<3; i++) {
            let pri = process.getEnvironmentVar("PATH")
            if (pri != null) {
                var flag = new Boolean(true)
                expect(Boolean(flag)).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: testGetEnvironmentVar003
     * @tc.desc: Returns the system value for environment variables.
     * @tc.author: liwenqiang
     */
    it('testGetEnvironmentVar003', 0, function () {
        for (let i=0; i<5; i++) {
            let pri = process.getEnvironmentVar("PATH")
            if (pri != null) {
                var flag = new Boolean(true)
                expect(Boolean(flag)).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_004
     * @tc.desc: Returns the system value for environment variables.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_004', 0, function () {
        for (let i=0; i<6; i++) {
            let pri = process.getEnvironmentVar("USER")
            if (pri != null) {
                var flag = new Boolean(true)
                expect(Boolean(flag)).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_005
     * @tc.desc: Returns the system value for environment variables.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_005', 0, function () {
        for (let i=0; i<8; i++) {
            let pri = process.getEnvironmentVar("USER")
            if (pri != null) {
                var flag = new Boolean(true)
                expect(Boolean(flag)).assertEqual(true)
            }
        }
    })

    /**
     * @tc.name: SUB_Runtime_JSAPI_006
     * @tc.desc: Returns the system value for environment variables.
     * @tc.author: liwenqiang
     */
    it('SUB_Runtime_JSAPI_006', 0, function () {
        for (let i=0; i<100; i++) {
            let pri = process.getEnvironmentVar("i123")
            if (pri == null) {
                var flag = new Boolean(true)
                expect(Boolean(flag)).assertEqual(true)
            }
        }
    })
})}
