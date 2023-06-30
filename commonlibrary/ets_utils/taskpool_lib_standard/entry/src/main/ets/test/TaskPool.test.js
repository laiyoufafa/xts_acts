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
import taskpool from '@ohos.taskpool'
import worker from '@ohos.worker'
export default function TaskPoolTest() {
describe('ActsAbilityTest', function () {
    // Defines a test suite. Two parameters are supported: test suite name and test suite function.

    function promiseCase() {
        let p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 100)
        }).then(undefined, (error) => {
        })
        return p
    }

    /**
     * @tc.number    : TaskPoolTestClass001
     * @tc.name      : Async Function use taskpool and worker
     * @tc.desc      : Test Simultaneous use taskpool and worker
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass001', 0, async function (done) {
        function testTaskPool() {
            function addition(arg) {
              "use concurrent"
              return arg + 1;
            }
            function additionDelay(arg) {
              "use concurrent"
              let start = new Date().getTime();
              while (new Date().getTime() - start < 3000) {
                continue;
              }
              return arg + 1;
            }

            try {
              let task1 = new taskpool.Task(additionDelay, 100);
              let task2 = new taskpool.Task(additionDelay, 200);
              let task3 = new taskpool.Task(addition, 300);

              taskpool.execute(task1)
              taskpool.execute(task2)
              taskpool.execute(task3)

              let start = new Date().getTime();
              while (new Date().getTime() - start < 1000) {
                continue;
              }
              for (let i = 1; i <= 10; i++) {
                taskpool.cancel(task1);
              }
            }
            catch (e) {
              console.info("taskpoolXTS061 catch error: " + e);
            }
        }
        function promiseCase() {
            let p = new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve(0)
              }, 100)
            }).then(undefined, (error) => {
            })
            return p
        }

        let ss = new worker.ThreadWorker("entry/ets/workers/worker.js")
        let res = 0
        let flag = false
        ss.onexit = function () {
          flag = true
          res++
        }
        testTaskPool();
        for (let i = 0; i < 10; i++) {
          ss.terminate();
        }
        while (!flag) {
          await promiseCase()
        }
        expect(res).assertEqual(1)
        done();
    })

    it('TaskPoolTestClass002', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result = await taskpool.execute(Sum, 10, 20);
        expect(result).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass003', 0,  async function (done) {
        function Add(value1, value2) {
            "use concurrent"
            if (value1 & value2)
                return true;
            else
                return false;
        }
        let result = await taskpool.execute(Add, true, true);
        expect(result).assertEqual(true);
        done();
    })

    it('TaskPoolTestClass004', 0,  async function (done) {
        function StrCat(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result = await taskpool.execute(StrCat, "abc", "def");
        expect(result).assertEqual("abcdef");
        done();
    })

    it('TaskPoolTestClass005', 0,  async function (done) {
        function StrCat(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result = await taskpool.execute(StrCat, "abc", "def");
        result = await taskpool.execute(StrCat, "abc", "def");
        expect(result).assertEqual("abcdef");
        done();
    })

    it('TaskPoolTestClass006', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            function StrCat(value1, value2) {
                return value1 + value2;
            }
            return value1+StrCat(value2,"hello");
        }
        let result = await taskpool.execute(Sum, "abc", "def");
        expect(result).assertEqual("abcdefhello");
        done();
    })

    it('TaskPoolTestClass007', 0,  async function (done) {
        function Sum(arg1, arg2) {
            "use concurrent"
            let value = [];
            value[0] = arg1[0] + arg2[0];
            value[1] = arg1[1] + arg2[1];
            return value;
        }
        let result = await taskpool.execute(Sum, [1,2], [3,4]);
        expect(result[0]).assertEqual(4);
        expect(result[1]).assertEqual(6);
        done();
    })

    it('TaskPoolTestClass008', 0,  async function (done) {
        function Sum(arg1, arg2) {
            "use concurrent"
            let value = arg1;
            value.a = arg1.a + arg2.a;
            value.b = arg1.b + arg2.b;
            return value;
        }
        let result = await taskpool.execute(Sum, {"a": 1, "b" : 2}, {"a": 3, "b" : 4});
        expect(JSON.stringify(result)).assertEqual("{\"a\":4,\"b\":6}");
        done();
    })

    it('TaskPoolTestClass009', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result = await taskpool.execute(Sum, 10);
        expect(result.toString()).assertEqual("NaN");
        done();
    })

    it('TaskPoolTestClass010', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result = await taskpool.execute(Sum, 10, 20, 30);
        expect(result).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass011', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result1 = await taskpool.execute(Sum, 10, 20);
        let result2 = await taskpool.execute(Sum, 30, 40);
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(70);
        done();
    })

    it('TaskPoolTestClass012', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result1 = await taskpool.execute(Sum, 10, 20);
        let result2 = await taskpool.execute(Sum, 10, 20);
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass013', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        function Multi(value1, value2) {
            "use concurrent"
            return value1 * value2;
        }
        let result1 = await taskpool.execute(Sum, 10, 20);
        let result2 = await taskpool.execute(Multi, 10, 20);
        let result3 = await taskpool.execute(Sum, 10, 30);
        let result4 = await taskpool.execute(Multi, 20, 20);
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(200);
        expect(result3).assertEqual(40);
        expect(result4).assertEqual(400);
        done();
    })

    it('TaskPoolTestClass014', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task = new taskpool.Task(Sum, 10, 20);
        let result = await taskpool.execute(task);
        expect(result).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass015', 0, async function (done) {
        function Add(value1, value2) {
            "use concurrent"
            if (value1 & value2)
                return true;
            else
                return false;
        }
        let task = new taskpool.Task(Add, true, true);
        let result = await taskpool.execute(task);
        expect(result).assertEqual(true);
        done();
    })

    it('TaskPoolTestClass016', 0,  async function (done) {
        function StrCat(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task = new taskpool.Task(StrCat, "abc", "def");
        let result = await taskpool.execute(task);
        expect(result).assertEqual("abcdef");
        done();
    })

    it('TaskPoolTestClass017', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            function StrCat(value1, value2) {
                return value1 + value2;
            }
            return value1+StrCat(value2,"hello");
        }
        let task = new taskpool.Task(Sum, "abc", "def");
        let result = await taskpool.execute(task);
        expect(result).assertEqual("abcdefhello");
        done();
    })

    it('TaskPoolTestClass018', 0, async function (done) {
        function Sum(arg1, arg2) {
            "use concurrent"
            let value = [];
            value[0] = arg1[0] + arg2[0];
            value[1] = arg1[1] + arg2[1];
            return value;
        }
        let task = new taskpool.Task(Sum, [1,2], [3,4]);
        let result = await taskpool.execute(task);
        expect(result[0]).assertEqual(4);
        expect(result[1]).assertEqual(6);
        done();
    })

    it('TaskPoolTestClass019', 0, async function (done) {
        function Sum(arg1, arg2) {
            "use concurrent"
            let value = arg1;
            value.a = arg1.a + arg2.a;
            value.b = arg1.b + arg2.b;
            return value;
        }
        let task = new taskpool.Task(Sum, {"a": 1, "b" : 2}, {"a": 3, "b" : 4});
        let result = await taskpool.execute(task);
        expect(JSON.stringify(result)).assertEqual("{\"a\":4,\"b\":6}");
        done();
    })

    it('TaskPoolTestClass020', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task = new taskpool.Task(Sum, 10);
        let result = await taskpool.execute(task);
        expect(result.toString()).assertEqual("NaN");
        done();
    })

    it('TaskPoolTestClass021', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task = new taskpool.Task(Sum, 10, 20, 30);
        let result = await taskpool.execute(task);
        expect(result).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass022', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task = new taskpool.Task(Sum, 10, 20);
        let result1 = await taskpool.execute(task);
        let result2 = await taskpool.execute(task);
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass023', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task1 = new taskpool.Task(Sum, 10, 20);
        let task2 = new taskpool.Task(Sum, 30, 40);
        let result1 = await taskpool.execute(task1);
        let result2 = await taskpool.execute(task2);
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(70);
        done();
    })

    it('TaskPoolTestClass024', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task1 = new taskpool.Task(Sum, 10, 20);
        let task2 = new taskpool.Task(Sum, 10, 20);
        let result1 = await taskpool.execute(task1);
        let result2 = await taskpool.execute(task2);
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass025', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        function Multi(value1, value2) {
            "use concurrent"
            return value1 * value2;
        }
        let task1 = new taskpool.Task(Sum, 10, 20);
        let result1 = await taskpool.execute(task1);
        let task2 = new taskpool.Task(Multi, 10, 20);
        let result2 = await taskpool.execute(task2);
        let task3 = new taskpool.Task(Sum, 10, 30);
        let result3 = await taskpool.execute(task3);
        let task4 = new taskpool.Task(Multi, 20, 20);
        let result4 = await taskpool.execute(task4);
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(200);
        expect(result3).assertEqual(40);
        expect(result4).assertEqual(400);
        done();
    })

    it('TaskPoolTestClass026', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result;
        let isTerminate = false;
        let task = new taskpool.Task(Sum, 10, 20)
        taskpool.execute(task).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass027', 0, async function (done) {
        function Add(value1, value2) {
            "use concurrent"
            if (value1 & value2)
                return true;
            else
                return false;
        }
        let task = new taskpool.Task(Add, true, true)
        let result;
        let isTerminate = false;
        taskpool.execute(task).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual(true);
        done();
    })

    it('TaskPoolTestClass028', 0, async function (done) {
        function StrCat(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task = new taskpool.Task(StrCat, "abc", "def")
        let result;
        let isTerminate = false;
        taskpool.execute(task).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual("abcdef");
        done();
    })

    it('TaskPoolTestClass029', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            function StrCat(value1, value2) {
                return value1 + value2;
            }
            return value1+StrCat(value2,"hello");
        }
        let task = new taskpool.Task(Sum, "abc", "def");
        let result;
        let isTerminate = false;
        taskpool.execute(task).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual("abcdefhello");
        done();
    })

    it('TaskPoolTestClass030', 0, async function (done) {
        function Sum(arg1, arg2) {
            "use concurrent"
            let value = [];
            value[0] = arg1[0] + arg2[0];
            value[1] = arg1[1] + arg2[1];
            return value;
        }
        let task = new taskpool.Task(Sum, [1,2], [3,4]);
        let result;
        let isTerminate = false;
        taskpool.execute(task).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result[0]).assertEqual(4);
        expect(result[1]).assertEqual(6);
        done();
    })

    it('TaskPoolTestClass031', 0, async function (done) {
        function Sum(arg1, arg2) {
            "use concurrent"
            let value = arg1;
            value.a = arg1.a + arg2.a;
            value.b = arg1.b + arg2.b;
            return value;
        }
        let task = new taskpool.Task(Sum, {"a": 1, "b" : 2}, {"a": 3, "b" : 4});
        let result;
        let isTerminate = false;
        taskpool.execute(task).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(JSON.stringify(result)).assertEqual("{\"a\":4,\"b\":6}");
        done();
    })

    it('TaskPoolTestClass032', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task = new taskpool.Task(Sum, 10);
        let result;
        let isTerminate = false;
        taskpool.execute(task).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result.toString()).assertEqual("NaN");
        done();
    })

    it('TaskPoolTestClass033', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let task = new taskpool.Task(Sum, 10, 20, 30);
        let result;
        let isTerminate = false;
        taskpool.execute(task).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass034', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result1;
        let result2;
        let isTerminate1 = false;
        let isTerminate2 = false;

        let task1 = new taskpool.Task(Sum, 10, 20);
        taskpool.execute(task1).then((ret1) => {
            result1 = ret1;
            isTerminate1 = true;
        })

        let task2 = new taskpool.Task(Sum, 30, 40);
        taskpool.execute(task2).then((ret2) => {
            result2 = ret2;
            isTerminate2 = true;
        })
        while (!isTerminate1 || !isTerminate2) {
            await promiseCase()
        }
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(70);
        done();
    })

    it('TaskPoolTestClass035', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result1;
        let result2;
        let isTerminate1 = false;
        let isTerminate2 = false;

        let task1 = new taskpool.Task(Sum, 10, 20)
        taskpool.execute(task1).then((ret1) => {
            result1 = ret1;
            isTerminate1 = true;
        })
        let task2 = new taskpool.Task(Sum, 10, 20)
        taskpool.execute(task2).then((ret2) => {
            result2 = ret2;
            isTerminate2 = true;
        })
        while (!isTerminate1 || !isTerminate2) {
            await promiseCase()
        }
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass036', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result1;
        let result2;
        let isTerminate1 = false;
        let isTerminate2 = false;

        let task = new taskpool.Task(Sum, 10, 20)
        taskpool.execute(task).then((ret1) => {
            result1 = ret1;
            isTerminate1 = true;
        })
        taskpool.execute(task).then((ret2) => {
            result2 = ret2;
            isTerminate2 = true;
        })
        while (!isTerminate1 || !isTerminate2) {
            await promiseCase()
        }
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass037', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        function Multi(value1, value2) {
            "use concurrent"
            return value1 * value2;
        }

        let result1;
        let result2;
        let result3;
        let result4;
        let isTerminate1 = false;
        let isTerminate2 = false;
        let isTerminate3 = false;
        let isTerminate4 = false;

        let task1 = new taskpool.Task(Sum, 10, 20)
        taskpool.execute(task1).then((ret1) => {
            result1 = ret1;
            isTerminate1 = true;
        })
        let task2 = new taskpool.Task(Multi, 10, 20)
        taskpool.execute(task2).then((ret2) => {
            result2 = ret2;
            isTerminate2 = true;
        })
        let task3 = new taskpool.Task(Sum, 10, 30)
        taskpool.execute(task3).then((ret3) => {
            result3 = ret3;
            isTerminate3 = true;
        })
        let task4 = new taskpool.Task(Multi, 20, 20)
        taskpool.execute(task4).then((ret4) => {
            result4 = ret4;
            isTerminate4 = true;
        })

        while (!isTerminate1 || !isTerminate2 || !isTerminate3 || !isTerminate4) {
            await promiseCase()
        }
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(200);
        expect(result3).assertEqual(40);
        expect(result4).assertEqual(400);
        done();
    })

    it('TaskPoolTestClass038', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result;
        let isTerminate = false;
        taskpool.execute(Sum, 10, 20).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass039', 0, async function (done) {
        function Add(value1, value2) {
            "use concurrent"
            if (value1 & value2)
                return true;
            else
                return false;
        }
        let result;
        let isTerminate = false;
        taskpool.execute(Add, true, false).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual(false);
        done();
    })

    it('TaskPoolTestClass040', 0, async function (done) {
        function StrCat(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result;
        let isTerminate = false;
        taskpool.execute(StrCat, "abc", "def").then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual("abcdef");
        done();
    })

    it('TaskPoolTestClass041', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            function StrCat(value1, value2) {
                return value1 + value2;
            }
            return value1+StrCat(value2,"hello");
        }
        let result;
        let isTerminate = false;
        taskpool.execute(Sum, "abc", "def").then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual("abcdefhello");
        done();
    })

    it('TaskPoolTestClass042', 0, async function (done) {
        function Sum(arg1, arg2) {
            "use concurrent"
            let value = [];
            value[0] = arg1[0] + arg2[0];
            value[1] = arg1[1] + arg2[1];
            return value;
        }
        let result;
        let isTerminate = false;
        taskpool.execute(Sum, [1,2], [3,4]).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result[0]).assertEqual(4);
        expect(result[1]).assertEqual(6);
        done();
    })

    it('TaskPoolTestClass043', 0, async function (done) {
        function Sum(arg1, arg2) {
            "use concurrent"
            let value = arg1;
            value.a = arg1.a + arg2.a;
            value.b = arg1.b + arg2.b;
            return value;
        }
        let result;
        let isTerminate = false;
        taskpool.execute(Sum, {"a": 1, "b" : 2}, {"a": 3, "b" : 4}).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(JSON.stringify(result)).assertEqual("{\"a\":4,\"b\":6}");
        done();
    })

    it('TaskPoolTestClass044', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result;
        let isTerminate = false;
        taskpool.execute(Sum, 10).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result.toString()).assertEqual("NaN");
        done();
    })

    it('TaskPoolTestClass045', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result;
        let isTerminate = false;
        taskpool.execute(Sum, 10, 20, 30).then((ret) => {
            result = ret;
            isTerminate = true;
        })
        while (!isTerminate) {
            await promiseCase()
        }
        expect(result).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass046', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result1;
        let result2;
        let isTerminate1 = false;
        let isTerminate2 = false;

        taskpool.execute(Sum, 10, 20).then((ret1) => {
            result1 = ret1;
            isTerminate1 = true;
        })
        taskpool.execute(Sum, 30, 40).then((ret2) => {
            result2 = ret2;
            isTerminate2 = true;
        })
        while (!isTerminate1 || !isTerminate2) {
            await promiseCase()
        }
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(70);
        done();
    })

    it('TaskPoolTestClass047', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        let result1;
        let result2;
        let isTerminate1 = false;
        let isTerminate2 = false;

        taskpool.execute(Sum, 10, 20).then((ret1) => {
            result1 = ret1;
            isTerminate1 = true;
        })
        taskpool.execute(Sum, 10, 20).then((ret2) => {
            result2 = ret2;
            isTerminate2 = true;
        })
        while (!isTerminate1 || !isTerminate2) {
            await promiseCase()
        }
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(30);
        done();
    })

    it('TaskPoolTestClass048', 0, async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        function Multi(value1, value2) {
            "use concurrent"
            return value1 * value2;
        }

        let result1;
        let result2;
        let result3;
        let result4;
        let isTerminate1 = false;
        let isTerminate2 = false;
        let isTerminate3 = false;
        let isTerminate4 = false;

        taskpool.execute(Sum, 10, 20).then((ret1) => {
            result1 = ret1;
            isTerminate1 = true;
        })
        taskpool.execute(Multi, 10, 20).then((ret2) => {
            result2 = ret2;
            isTerminate2 = true;
        })
        taskpool.execute(Sum, 10, 30).then((ret3) => {
            result3 = ret3;
            isTerminate3 = true;
        })
        taskpool.execute(Multi, 20, 20).then((ret4) => {
            result4 = ret4;
            isTerminate4 = true;
        })
        while (!isTerminate1 || !isTerminate2 || !isTerminate3 || !isTerminate4) {
            await promiseCase()
        }
        expect(result1).assertEqual(30);
        expect(result2).assertEqual(200);
        expect(result3).assertEqual(40);
        expect(result4).assertEqual(400);
        done();
    })

    it('TaskPoolTestClass049', 0,  async function (done) {
        function Sum(value1, value2) {
            "use concurrent"
            return value1 + value2;
        }
        try {
            let result = await taskpool.execute(Sum);
        } catch(e) {
            expect(e.toString()).assertEqual("BusinessError: taskpool:: first param must be object when argc is one");
        }
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass049
     * @tc.name      : Async Function about priority task
     * @tc.desc      : Execute priority tasks
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass050', 0,  async function (done) {
        function testTime() {
            "use concurrent";
            return Date.now();
        }

        let task = new taskpool.Task(testTime);

        let isEnd = false;
        let begin = Date.now();
        let highTime = 0;
        let mediumTime = 0;
        let lowTime = 0;
        let lowCount = 0;
        let allCount = 100;
        for (let i = 0; i < allCount; i++) {
            taskpool.execute(task, taskpool.Priority.LOW).then((res) => {
                lowCount++;
                lowTime += (res - begin);
                if (lowCount == allCount) {
                    isEnd = true;
                }
            }).catch((e) => {
                console.error("all low find error: " + e)
            })

            taskpool.execute(task, taskpool.Priority.MEDIUM).then((res) => {
                mediumTime += (res - begin);
            }).catch((e) => {
                console.error("all medium find error: " + e)
            })

            taskpool.execute(task, taskpool.Priority.HIGH).then((res) => {
                highTime += (res - begin);
            }).catch((e) => {
                console.error("all high find error: " + e)
            })
        }

        while (!isEnd) {
            await promiseCase()
        }
        expect(lowTime > mediumTime && mediumTime > highTime);
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass051
     * @tc.name      : Async function execute task
     * @tc.desc      : Execute async function
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass051', 0,  async function (done) {
        async function func(value1, value2) {
            "use concurrent"
            let result = await new Promise((resolve, reject) => {
                let value = value1 + value2;
                resolve(value);
            })
            return result;
        }
        let result = await taskpool.execute(func, 10, 20);
        expect(result).assertEqual(30);
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass052
     * @tc.name      : Async function execute task
     * @tc.desc      : Execute async function task
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass052', 0,  async function (done) {
        async function func(value1, value2) {
            "use concurrent"
            let result = await new Promise((resolve, reject) => {
                let value = value1 + value2;
                resolve(value);
            })
            return result;
        }
        let task = new taskpool.Task(func, 10, 20);
        let result = await taskpool.execute(task);
        expect(result).assertEqual(30);
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass053
     * @tc.name      : Async function execute taskGroup
     * @tc.desc      : Execute async function
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass053', 0,  async function (done) {
        function printArgs(args) {
            "use concurrent"
            return args;
        }

        let taskGroup = new taskpool.TaskGroup();
        taskGroup.addTask(printArgs, 10);
        taskGroup.addTask(printArgs, 20);
        taskGroup.addTask(printArgs, 30);

        taskpool.execute(taskGroup).then((res) => {
            expect(res[0]).assertEqual(10);
            expect(res[1]).assertEqual(20);
            expect(res[2]).assertEqual(30);
        });
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass054
     * @tc.name      : Async function execute taskGroup
     * @tc.desc      : Execute async function
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass054', 0,  async function (done) {
        function printArgs(args) {
            "use concurrent"
            return args;
        }

        let taskGroup = new taskpool.TaskGroup();
        let task1 = new taskpool.Task(printArgs, 100);
        let task2 = new taskpool.Task(printArgs, 200);
        let task3 = new taskpool.Task(printArgs, 300);
        taskGroup.addTask(task1);
        taskGroup.addTask(task2);
        taskGroup.addTask(task3);
        taskpool.execute(taskGroup).then((res) => {
            expect(res[0]).assertEqual(10);
            expect(res[1]).assertEqual(20);
            expect(res[2]).assertEqual(30);
        });
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass055
     * @tc.name      : SetTransferList for task
     * @tc.desc      : Set transfer list for the task
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass055', 0,  async function (done) {
        let buffer = new ArrayBuffer(8);
        let view = new Uint8Array(buffer);
        let buffer1 = new ArrayBuffer(16);
        let view1 = new Uint8Array(buffer1);

        function testTransfer(arg1, arg2) {
            "use concurrent"
            return arg1.byteLength + arg2.byteLength;
        }
        let task = new taskpool.Task(testTransfer, view, view1);
        task.setTransferList([view.buffer, view1.buffer]);
        taskpool.execute(task).then((res)=>{
            expect(res).assertEqual(24);
        });
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass056
     * @tc.name      : Async Function Cancel task
     * @tc.desc      : Cancel tasks that have not been executed
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass056', 0, async function (done) {
        function inspectStatus(arg) {
            "use concurrent"
            return arg;
        }

        let task = new taskpool.Task(inspectStatus, 100);
        taskpool.execute(task);
        taskpool.cancel(task);
        expect(taskpool.Task.isCanceled() == false);
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass057
     * @tc.name      : Async Function Cancel task
     * @tc.desc      : Cancel the task in progress
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass057', 0, async function (done) {
        function inspectStatus(arg) {
            "use concurrent"
            return arg;
        }

        try {
            let task1 = new taskpool.Task(inspectStatus, 100);
            let task2 = new taskpool.Task(inspectStatus, 200);
            let task3 = new taskpool.Task(inspectStatus, 300);
            let task4 = new taskpool.Task(inspectStatus, 400);
            let task5 = new taskpool.Task(inspectStatus, 500);
            let task6 = new taskpool.Task(inspectStatus, 600);
            let res1 = taskpool.execute(task1);
            let res2 = taskpool.execute(task2);
            let res3 = taskpool.execute(task3);
            let res4 = taskpool.execute(task4);
            let res5 = taskpool.execute(task5);
            let res6 = taskpool.execute(task6);

            taskpool.execute(task1);
            taskpool.cancel(task1);
        } catch(e) {
            expect(e.toString()).assertEqual(
                "BusinessError: The task does not exist when it is canceled, taskpool:: can not find the task");
        }
        expect(taskpool.Task.isCanceled() == false);
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass058
     * @tc.name      : Async Function Cancel task
     * @tc.desc      : Cancel the executed task
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass058', 0, async function (done) {
        function addition(arg) {
            "use concurrent"
            return arg + 1;
        }
        try {
            let task1 = new taskpool.Task(addition, 100);
            let task2 = new taskpool.Task(addition, 200);
            let task3 = new taskpool.Task(addition, 300);

            let result1 = taskpool.execute(task1);
            let result2 = taskpool.execute(task2);
            let result3 = taskpool.execute(task3);

            let start = new Date().getTime();
            while (new Date().getTime() - start < 1000) {
              continue;
            }

            taskpool.cancel(task1);
        }
        catch (e) {
            expect(e.toString()).assertEqual(
                "BusinessError: The task does not exist when it is canceled, taskpool:: can not find the task");
        }
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass059
     * @tc.name      : Async Function Cancel task
     * @tc.desc      : Cancel nonexistent task
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass059', 0, async function (done) {
        function addition(arg) {
            "use concurrent"
            return arg + 1;
        }
        try {
            let task1 = new taskpool.Task(addition, 100);
            let task2 = new taskpool.Task(addition, 200);
            let task3 = new taskpool.Task(addition, 300);

            let result1 = taskpool.execute(task1);
            let result2 = taskpool.execute(task2);

            taskpool.cancel(task3);
        }
        catch (e) {
            expect(e.toString()).assertEqual(
                "BusinessError: The task does not exist when it is canceled, taskpool:: can not find the task");
        }
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass060
     * @tc.name      : Async Function Cancel task
     * @tc.desc      : Canceling unexecuted tasks multiple times
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass060', 0, async function (done) {
        function addition(arg) {
            "use concurrent"
            return arg + 1;
        }
        function additionDelay(arg) {
            "use concurrent"
            let start = new Date().getTime();
            while (new Date().getTime() - start < 3000) {
                continue;
            }
            return arg + 1;
        }
        try {
            let task1 = new taskpool.Task(additionDelay, 100);
            let task2 = new taskpool.Task(additionDelay, 200);
            let task3 = new taskpool.Task(addition, 300);

            let result1 = taskpool.execute(task1);
            let result2 = taskpool.execute(task2);
            let result3 = taskpool.execute(task3);

            let start = new Date().getTime();
            while (new Date().getTime() - start < 1000) {
              continue;
            }

            taskpool.cancel(task3);
            taskpool.cancel(task3);
        }
        catch (e) {
            expect(e.toString()).assertEqual(
                "BusinessError: The task does not exist when it is canceled, taskpool:: can not find the task");
        }
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass061
     * @tc.name      : Async Function Cancel task
     * @tc.desc      : Cancel all tasks in sequence
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass061', 0, async function (done) {
        function addition(arg) {
            "use concurrent"
            return arg + 1;
        }
        try {
            let task1 = new taskpool.Task(addition, 100);
            let task2 = new taskpool.Task(addition, 200);
            let task3 = new taskpool.Task(addition, 300);
            let task4 = new taskpool.Task(addition, 400);
            let task5 = new taskpool.Task(addition, 500);
            let task6 = new taskpool.Task(addition, 600);

            let result1 = taskpool.execute(task1);
            let result2 = taskpool.execute(task2);
            let result3 = taskpool.execute(task3);
            let result4 = taskpool.execute(task4);
            let result5 = taskpool.execute(task5);
            let result6 = taskpool.execute(task6);

            let start = new Date().getTime();
            while (new Date().getTime() - start < 100) {
              continue;
            }

            taskpool.cancel(task6);
            taskpool.cancel(task5);
            taskpool.cancel(task4);
            taskpool.cancel(task3);
            taskpool.cancel(task2);
        }
        catch (e) {
            expect(e.toString()).assertEqual(
                "BusinessError: The task does not exist when it is canceled, taskpool:: can not find the task");
        }
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass062
     * @tc.name      : Async Function Cancel taskGroup
     * @tc.desc      : Cancel the taskGroup in progress
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass062', 0, async function (done) {
        function addition(arg) {
            "use concurrent"
            let start = new Date().getTime();
            while (new Date().getTime() - start < 2000) {
              continue;
            }
            return arg + 1;
        }
        let i = 10;
        let taskGroup1 = new taskpool.TaskGroup();
        taskGroup1.addTask(addition, 10);
        taskGroup1.addTask(addition, 20);
        taskGroup1.addTask(addition, 30);

        let taskGroup2 = new taskpool.TaskGroup();
        let task1 = new taskpool.Task(addition, 100);
        let task2 = new taskpool.Task(addition, 200);
        let task3 = new taskpool.Task(addition, 300);
        taskGroup2.addTask(task1);
        taskGroup2.addTask(task2);
        taskGroup2.addTask(task3);
        taskpool.execute(taskGroup1).then(() => {
            ++i;
        });
        taskpool.execute(taskGroup2);

        taskpool.cancel(taskGroup1);
        expect(i).assertEqual(10)
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass063
     * @tc.name      : Async Function Cancel taskGroup
     * @tc.desc      : Cancel the taskGroup that have not been executed
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass063', 0, async function (done) {
        function addition(arg) {
            "use concurrent"
            let start = new Date().getTime();
            while (new Date().getTime() - start < 2000) {
              continue;
            }
            return arg + 1;
        }
        let i = 10;
        let taskGroup1 = new taskpool.TaskGroup();
        taskGroup1.addTask(addition, 10);
        taskGroup1.addTask(addition, 20);
        taskGroup1.addTask(addition, 30);

        let taskGroup2 = new taskpool.TaskGroup();
        let task1 = new taskpool.Task(addition, 100);
        let task2 = new taskpool.Task(addition, 200);
        let task3 = new taskpool.Task(addition, 300);
        taskGroup2.addTask(task1);
        taskGroup2.addTask(task2);
        taskGroup2.addTask(task3);
        taskpool.execute(taskGroup1);
        taskpool.execute(taskGroup2).then(() => {
            ++i;
        });

        taskpool.cancel(taskGroup2);
        expect(i).assertEqual(10)
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass064
     * @tc.name      : Async Function Cancel taskGroup
     * @tc.desc      : Cancel the non-existent taskGroup
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass064', 0, async function (done) {
        try {
            let taskGroup = new taskpool.TaskGroup();

            taskpool.cancel(taskGroup);
        } catch (e) {
            expect(e.toString()).assertEqual(
                "BusinessError: The task group does not exist when it is canceled, taskpool:: can not find the taskGroup");
        }
        done();
    })

    /**
     * @tc.number    : TaskPoolTestClass065
     * @tc.name      : Async Function Cancel taskGroup
     * @tc.desc      : Cancel the executed taskGroup
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */
    it('TaskPoolTestClass065', 0, async function (done) {
        function printArgs(args) {
            "use concurrent"
            return args;
        }

        let taskGroup1 = new taskpool.TaskGroup();
        taskGroup1.addTask(printArgs, 10);
        taskGroup1.addTask(printArgs, 20);
        taskGroup1.addTask(printArgs, 30);

        let taskGroup2 = new taskpool.TaskGroup();
        let task1 = new taskpool.Task(printArgs, 100);
        let task2 = new taskpool.Task(printArgs, 200);
        let task3 = new taskpool.Task(printArgs, 300);

        taskGroup2.addTask(task1);
        taskGroup2.addTask(task2);
        taskGroup2.addTask(task3);

        taskpool.execute(taskGroup1);
        taskpool.execute(taskGroup2);

        setTimeout(()=>{
          try {
            taskpool.cancel(taskGroup1);
          } catch (e) {
              expect(e.toString()).assertEqual(
                  "BusinessError: The task group does not exist when it is canceled, taskpool:: can not find the taskGroup");
          }
        }, 3000);
        done();
    })
})
}