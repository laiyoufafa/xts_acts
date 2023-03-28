/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
import appManager from "@ohos.application.appManager"
import { describe, it, expect } from '@ohos/hypium'
export default function ActsAmsTestFourthScene() {
    describe('ActsAmsTestFourthScene', function () {
        console.info('----ActsAmsTestFourthScene----');

        function sleep(delay) {
            var start = new Date().getTime();
            while (true) {
                if (new Date().getTime() - start > delay) {
                    break;
                }
            }
        }

        /*
        * @tc.number    : Acts_Ams_test_1700
        * @tc.name      : getProcessRunningInfos : Get All Running Processes Info
        * @tc.desc      : Get All Running Processes Info(by Promise)
        */
        it('Acts_Ams_test_1700', 0, async function (done) {
            console.info("sleep begin");
            sleep(2000);
            console.info("sleep end");
            var info = await appManager.getProcessRunningInfos();
            expect(Array.isArray(info)).assertEqual(true);
            expect(info.length).assertLarger(0);
            for (var i = 0; i < info.length; i++) {
                console.info('Acts_Ams_test_1700 getProcessRunningInfo[' + i + "]: " + JSON.stringify(info[i]));
                expect(typeof (info[i].pid)).assertEqual("number");
                expect(info[i].pid).assertLarger(0);

                expect(typeof (info[i].processName)).assertEqual("string");
                expect(info[i].processName.length).assertLarger(0);
                expect(Array.isArray(info[i].bundleNames)).assertEqual(true);
                expect(info[i].bundleNames.length).assertLarger(0);

                expect(typeof (info[i].uid)).assertEqual("number");
                expect(info[i].uid).assertLarger(0);
            }
            done();
        })
    })
}