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

import commonEvent from '@ohos.commonevent'
import featureAbility from '@ohos.ability.featureAbility'

const injectRef = Object.getPrototypeOf(global) || global
injectRef.regeneratorRuntime = require('@babel/runtime/regenerator')

function PublishCallBack() {
    console.debug("====>Publish CallBack ACTS_FinishWithResult_0200_CommonEvent====>");
}
export default {
    data: {
        title: ""
    },
    onInit() {
        this.title = this.$t('strings.world');
    },
    async onShow() {
        commonEvent.publish("ACTS_FinishWithResult_0200_CommonEvent", PublishCallBack);
        var promise = await featureAbility.terminateSelfWithResult(
            {
                resultCode: 1,
                want:
                {
                    bundleName: "com.example.finishwithresulttest",
                    abilityName: "com.example.finishwithresulttest.MainAbility",
                },
            }
        );
        featureAbility.terminateSelf(
            (err, data)=>{
            console.debug('==========Terminate Ability Success==========');
        });
    },
    onReady() {
    },
}
