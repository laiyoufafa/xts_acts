/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

export default class MainAbility6 extends Ability {
    onCreate(want, launchParam) {
        console.log("[Demo] MainAbility6 onCreate")
        globalThis.abilityWant = want;
    }

    onDestroy() {
        console.log("[Demo] MainAbility6 onDestroy")
    }

    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability
        console.log("[Demo] MainAbility6 onWindowStageCreate")
        globalThis.ability6 = this.context;
        windowStage.setUIContent(this.context, "pages/index6", null)
    }

    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        console.log("[Demo] MainAbility6 onWindowStageDestroy")
    }

    onForeground() {
        // Ability has brought to foreground
        console.log("[Demo] MainAbility6 onForeground")

        var listKey6 = [];
        let AbilityLifecycleCallback = {
            onAbilityCreate(ability) {
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityCreate ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityCreate abilityname:"
                + JSON.stringify(abilityname));
                console.log("[Demo] " + abilityname + " onAbilityCreate");
                listKey6.push(abilityname + " onAbilityCreate");
                console.log("[Demo] 1listKey6:" + JSON.stringify(listKey6));
            },
            onAbilityWindowStageCreate(ability) {
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityWindowStageCreate ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityWindowStageCreate abilityname:"
                + JSON.stringify(abilityname));
                console.log("[Demo] " + abilityname + " onAbilityWindowStageCreate");
                listKey6.push(abilityname + " onAbilityWindowStageCreate");
                console.log("[Demo] 2listKey6:" + JSON.stringify(listKey6));
            },
            onAbilityWindowStageDestroy(ability) {
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityWindowStageDestroy ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityWindowStageDestroy abilityname:"
                + JSON.stringify(abilityname));
                console.log("[Demo] " + abilityname + " onAbilityWindowStageDestroy");
                listKey6.push(abilityname + " onAbilityWindowStageDestroy");
                console.log("[Demo] 3listKey6:" + JSON.stringify(listKey6));
            },
            onAbilityDestroy(ability) {
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityDestroy ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityDestroy abilityname:"
                + JSON.stringify(abilityname));
                console.log("[Demo] " + abilityname + " onAbilityDestroy");
                listKey6.push(abilityname + " onAbilityDestroy");
                console.log("[Demo] 4listKey6:" + JSON.stringify(listKey6));
            },
            onAbilityForeground(ability) {
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityForeground ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityForeground abilityname:"
                + JSON.stringify(abilityname));
                console.log("[Demo] " + abilityname + " onAbilityForeground");
                listKey6.push(abilityname + " onAbilityForeground");
                console.log("[Demo] 5listKey6:" + JSON.stringify(listKey6));
            },
            onAbilityBackground(ability) {
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityBackground ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityBackground abilityname:"
                + JSON.stringify(abilityname));
                console.log("[Demo] " + abilityname + " onAbilityBackground");
                listKey6.push(abilityname + " onAbilityBackground");
                console.log("[Demo] 6listKey6:" + JSON.stringify(listKey6));
            },
            onAbilityContinue(ability) {
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityContinue ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] AbilityLifecycleCallback6 onAbilityContinue abilityname:"
                + JSON.stringify(abilityname));
                console.log("[Demo] " + abilityname + " onAbilityContinue");
                listKey6.push(abilityname + " onAbilityContinue");
                console.log("[Demo] 7listKey6:" + JSON.stringify(listKey6));
            }
        }
        let applicationContext = globalThis.ability6.getApplicationContext();
        let lifecycleid = applicationContext.registerAbilityLifecycleCallback(AbilityLifecycleCallback);
        console.log("[Demo] registerAbilityLifecycleCallback6 number: " + JSON.stringify(lifecycleid));
        setTimeout(function () {
            console.log("[Demo] registerAbilityLifecycleCallback6 listKey: " + JSON.stringify(listKey6));
            globalThis.list6 = listKey6;
            globalThis.callbackid6 = lifecycleid;
        }, 1500);
    }

    onBackground() {
        // Ability has back to background
        console.log("[Demo] MainAbility6 onBackground")
    }
};
