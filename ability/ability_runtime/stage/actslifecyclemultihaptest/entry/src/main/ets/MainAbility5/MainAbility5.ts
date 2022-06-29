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

import Ability from '@ohos.application.Ability'

export default class MainAbility5 extends Ability {
    onCreate(want, launchParam) {
        console.log("[Demo] MainAbility5 onCreate")
        globalThis.abilityWant = want;

        var listKey = [];
        var abilityName = "";
        let AbilityLifecycleCallback = {
            onAbilityCreate(ability) {
                abilityName = ability.context.abilityInfo.name;
                console.log(abilityName+" onAbilityCreate")
                listKey.push(abilityName+" onAbilityCreate");
            },
            onAbilityWindowStageCreate(ability) {
                abilityName = ability.context.abilityInfo.name;
                console.log(abilityName+" onAbilityWindowStageCreate")
                listKey.push(abilityName+" onAbilityWindowStageCreate");
            },
            onAbilityForeground(ability) {
                abilityName = ability.context.abilityInfo.name;
                console.log(abilityName+" onAbilityForeground")
                listKey.push(abilityName+" onAbilityForeground");
            },
            onAbilityBackground(ability) {
                abilityName = ability.context.abilityInfo.name;
                console.log(abilityName+" onAbilityBackground")
                listKey.push(abilityName+" onAbilityBackground");
            },
            onAbilityWindowStageDestroy(ability) {
                abilityName = ability.context.abilityInfo.name;
                console.log(abilityName+" onAbilityWindowStageDestroy")
                listKey.push(abilityName+" onAbilityWindowStageDestroy");
            },
            onAbilityDestroy(ability) {
                abilityName = ability.context.abilityInfo.name;
                console.log(abilityName+" onAbilityDestroy")
                listKey.push(abilityName+" onAbilityDestroy");
            },
            onAbilityContinue(ability) {
                abilityName = ability.context.abilityInfo.name;
                console.log(abilityName+" onAbilityContinue")
                listKey.push(abilityName+" onAbilityContinue");
            }
        }
        var callBackId = this.context.getApplicationContext().registerAbilityLifecycleCallback(AbilityLifecycleCallback);
        console.log("callBackId is aaa :" + callBackId);

        setTimeout(() => {
            this.context.terminateSelf().then((data) => {
                console.log("Hap2MainAbility6 EventTest terminateSelf data: " + JSON.stringify(data));
                globalThis.mainAbility5ListKey = listKey
                globalThis.mainAbility5CallBackId = callBackId
                console.log("listKey is :" + listKey);
                console.log("callBackId is :" + callBackId);
            }).catch((error) => {
                console.log("Hap2MainAbility6 EventTest terminateSelf error: " + JSON.stringify(error));
            })
        }, 1000)
    }

    onDestroy() {
        console.log("[Demo] MainAbility5 onDestroy")
    }

    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability
        console.log("[Demo] MainAbility5 onWindowStageCreate")

        windowStage.setUIContent(this.context, "pages/MainAbility5_pages", null)
    }

    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        console.log("[Demo] MainAbility5 onWindowStageDestroy")
    }

    onForeground() {
        // Ability has brought to foreground
        console.log("[Demo] MainAbility5 onForeground")

    }

    onBackground() {
        // Ability has back to background
        console.log("[Demo] MainAbility5 onBackground")
    }
};
