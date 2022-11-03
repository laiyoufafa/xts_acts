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
import hiTraceMeter from "@ohos.hiTraceMeter"
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'
export default function HitraceMeterTest() {
describe("HitraceMeterTest", function () {

    async function msleep(time) {
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), time);
        });
        var result = await promise;
    }

    it("DFX_DFR_HitraceMeter_0100", 0, async function (done) {
        console.info("-------DFX_DFR_HitraceMeter_0100 start--------");
        await msleep(3000);
        for (var i = 0; i < 3; i++) {
            console.info("DFX_DFR_HitraceMeter_0100 i = " + i)
            console.info("DFX_DFR_HitraceMeter_0100 " + i.toString() + " startTrace start");
            hiTraceMeter.startTrace("test-" + i.toString(), 111 + i, 5000);
            console.info("DFX_DFR_HitraceMeter_0100 " + i.toString() + "startTrace end");
            console.info("DFX_DFR_HitraceMeter_0100 " + i.toString() + " finishTrace start");
            hiTraceMeter.finishTrace("test-" + i.toString(), 111 + i);
            console.info("DFX_DFR_HitraceMeter_0100 " + i.toString() + "finishTrace end");
        }

        console.info("DFX_DFR_HitraceMeter_0100 end");
        done();
    })

    it("DFX_DFR_HitraceMeter_0200", 0, async function (done) {
        console.info("------DFX_DFR_HitraceMeter_0200 start------");
        // Normal condition
        let flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0200 1 start");
            hiTraceMeter.startTrace("test2", 222);
            expect(true).assertTrue();
            console.info("DFX_DFR_HitraceMeter_0200 1 success");
        } catch (err) {
            console.info("DFX_DFR_HitraceMeter_0200 1 fail!");
            console.info("DFX_DFR_HitraceMeter_0200 1 err = " + err);
            expect(false).assertTrue();
        }
        // Abnormal condition, Pass only one parameter
        try {
            console.info("DFX_DFR_HitraceMeter_0200 2 start");
            hiTraceMeter.startTrace("test2");
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0200 2 fail!");
            console.info("DFX_DFR_HitraceMeter_0200 2 err = " + err);
            expect(flag).assertTrue();
        }
        // Abnormal condition, Pass multiple parameters
        flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0200 3 start");
            hiTraceMeter.startTrace("test2", 222, 2000, 2);
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0200 3 fail!");
            console.info("DFX_DFR_HitraceMeter_0200 3 err = " + err);
            expect(flag).assertTrue();
        }
        // Abnormal condition, Parameter format mismatch
        flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0200 4 start");
            hiTraceMeter.startTrace(2, "222", "2000");
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0200 4 fail!");
            console.info("DFX_DFR_HitraceMeter_0200 4 err = " + err);
            expect(flag).assertTrue();
        }
        console.info("------DFX_DFR_HitraceMeter_0200 end------");
        done();
    })

    it("DFX_DFR_HitraceMeter_0300", 0, async function (done) {
        console.info("------DFX_DFR_HitraceMeter_0300 start------");
        // Normal condition
        let flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0300 1 start")
            hiTraceMeter.finishTrace("test3", 111);
            expect(true).assertTrue();
            console.info("DFX_DFR_HitraceMeter_0300 1 success");
        } catch (err) {
            console.info("DFX_DFR_HitraceMeter_0300 1 fail!");
            console.info("DFX_DFR_HitraceMeter_0300 1 err = " + err);
            expect(false).assertTrue();
        }
        // Abnormal condition, Pass only one parameter
        try {
            console.info("DFX_DFR_HitraceMeter_0300 2 start")
            hiTraceMeter.finishTrace("test3");
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0300 2 fail!");
            console.info("DFX_DFR_HitraceMeter_0300 2 err = " + err);
            expect(flag).assertTrue();
        }
        // Abnormal condition, Pass multiple parameters
        flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0300 3 start")
            hiTraceMeter.finishTrace("test3", 1, 1);
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0300 3 fail!");
            console.info("DFX_DFR_HitraceMeter_0300 3 err = " + err);
            expect(flag).assertTrue();
        }
        // Abnormal condition, Parameter format mismatch
        flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0300 4 start")
            hiTraceMeter.finishTrace(1, "123");
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0300 4 fail!");
            console.info("DFX_DFR_HitraceMeter_0300 4 err = " + err);
            expect(flag).assertTrue();
        }
        console.info("------DFX_DFR_HitraceMeter_0300 end------");
        done();
    })

    it("DFX_DFR_HitraceMeter_0400", 0, async function (done) {
        console.info("-------DFX_DFR_HitraceMeter_0400 start--------");
        for (var i = 0; i < 3; i++) {
            console.info("DFX_DFR_HitraceMeter_0400 :" + i);
            hiTraceMeter.traceByValue("test4-" + i.toString(), 3 + i);
            await msleep(1000);
        }
        console.info("DFX_DFR_HitraceMeter_0400 end");
        done();
    })

    it("DFX_DFR_HitraceMeter_0500", 0, async function (done) {
        console.info("-------DFX_DFR_HitraceMeter_0500 start--------");
        // Normal condition
        let flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0500 1 start")
            hiTraceMeter.traceByValue("test5", 5);
            expect(true).assertTrue();
            console.info("DFX_DFR_HitraceMeter_0500 1 success")
        } catch (err) {
            console.info("DFX_DFR_HitraceMeter_0500 1 fail!");
            console.info("DFX_DFR_HitraceMeter_0500 1 err = " + err);
            expect(false).assertTrue();
        }
        // Abnormal condition, Pass only one parameter
        try {
            console.info("DFX_DFR_HitraceMeter_0500 2 start")
            hiTraceMeter.traceByValue("test5");
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0500 2 fail!");
            console.info("DFX_DFR_HitraceMeter_0500 2 err = " + err);
            expect(flag).assertTrue();
        }
        // Abnormal condition, Pass multiple parameters
        flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0500 3 start")
            hiTraceMeter.traceByValue("test5", 3, 1);
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0500 3 fail!");
            console.info("DFX_DFR_HitraceMeter_0500 3 err = " + err);
            expect(flag).assertTrue();
        }
        // Abnormal condition, Parameter format mismatch
        flag = false;
        try {
            console.info("DFX_DFR_HitraceMeter_0500 4 start")
            hiTraceMeter.traceByValue(1, "123");
            expect(flag).assertFalse();
        } catch (err) {
            flag = true;
            console.info("DFX_DFR_HitraceMeter_0500 4 fail!");
            console.info("DFX_DFR_HitraceMeter_0500 4 err = " + err);
            expect(flag).assertTrue();
        }
        console.info("------DFX_DFR_HitraceMeter_0500 end------");
        done();
    })

})
}