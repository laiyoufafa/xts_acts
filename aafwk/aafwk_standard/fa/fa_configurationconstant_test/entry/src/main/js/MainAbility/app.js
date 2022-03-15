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
import commonEvent from '@ohos.commonEvent';
import abilityFeatureAbility from '@ohos.ability.featureAbility';
export default {
    onCreate() {
        commonEvent.publish("ApplicationMainAbility1_onCreate",()=>{
            console.log("ApplicationMainAbility1_onCreate publish callBack ApplicationMainAbility1_onCreate");
        });
        setTimeout(()=>{
            abilityFeatureAbility.terminateSelf().then((data)=>{
                console.log("ApplicationMainAbility2 terminateSelf data：" + JSON.stringify(data) )
            }).catch((error)=>{
                console.log("ApplicationMainAbility2 terminateSelf error：" + JSON.stringify(error) )
            })
        },3000)

        console.info("Application onCreate");
    },
    onDestroy() {
        console.info("Application onDestroy");
    },
    onForgeGround(){
        console.info("Application onForgeGround");
    }
};
