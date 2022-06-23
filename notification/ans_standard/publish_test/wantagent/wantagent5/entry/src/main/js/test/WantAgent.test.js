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

import wantAgent from '@ohos.wantAgent';
//import { OperationType, WantAgentFlags } from '@ohos.wantagent';
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index';
var time = 1000
var WantAgent;
describe('ActsAnsWantAgentFiveTest', function () {

    /*
     * @tc.number: ACTS_SetWant_0900
     * @tc.name: getWantAgent()
     * @tc.desc: verify the function of getWantAgent()
     */
    it('ACTS_SetWant_0900', 0, async function (done) {
        var agentInfo = {
            wants: [
                    {
                        bundleName: "com.example.WantAgentTest1",
                        abilityName: "com.example.WantAgentTest1.MainAbility",
                        action: "action1",
                        entities: ["entity1"],
                        type: "MIMETYPE",
                        uri: "key={true,true,false}",
                        parameters:
                        {
                            mykey0: 2222,
                            mykey1: [1, 2, 3],
                            mykey2: "[1, 2, 3]",
                            mykey3: "ssssssssssssssssssssssssss",
                            mykey4: [false, true, false],
                            mykey5: ["qqqqq", "wwwwww", "aaaaaaaaaaaaaaaaa"],
                            mykey6: true,
                        }
                    },
            ],
//            operationType: wantAgent.OperationType.START_ABILITY,
            requestCode: 0,
            wantAgentFlags:[wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
        }
        console.info('----getWantAgent before----');
        wantAgent.getWantAgent(agentInfo,
            (err, data) => {
                if (err.code == 0) {
                    WantAgent = data;
                    console.info('----getWantAgent success!----');
                    console.info(data);
                    expect(typeof(data)).assertEqual("object");
                    var triggerInfo = {
                        code:0
                    }
                    wantAgent.trigger(WantAgent, triggerInfo,
                        (err, data) => {
                            if (err.code == 0) {
                                console.info('----trigger success!----');
                                console.info('== trigger data  ' + JSON.stringify(data) );
                            } else {
                                console.info('----trigger failed!----');
                                console.info('== trigger data  ' + JSON.stringify(data) );
                            }
                            done();
                        }
                    );
                } else {
                    console.info('----getWantAgent failed!----');
                    console.info(data);
                    expect(typeof(data)).assertEqual("object");
                }
                done();
                
            }
        );
	setTimeout(function(){
                    console.debug("====>time out ACTS_SetWant_0900====>");
                }, time);
        console.info('----getWantAgent after----');
    })
})

