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

export default class MainAbility12 extends Ability {
    onCreate(want, launchParam) {
        console.log("[Demo] MainAbility12 onCreate")
        globalThis.abilityWant = want;
        var listKey12 = [];
        let AbilityLifecycleCallback = {
            onAbilityCreate(ability) {
                console.log("[Demo] AbilityLifecycleCallback12 onAbilityCreate ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] " + abilityname + " onAbilityCreate");
                listKey12.push(abilityname + " onAbilityCreate");
            },
            onAbilityWindowStageCreate(ability) {
                console.log("[Demo] AbilityLifecycleCallback12 onAbilityWindowStageCreate ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] " + abilityname + " onAbilityWindowStageCreate");
                listKey12.push(abilityname + " onAbilityWindowStageCreate");
            },
            onAbilityWindowStageDestroy(ability) {
                console.log("[Demo] AbilityLifecycleCallback12 onAbilityWindowStageDestroy ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] " + abilityname + " onAbilityWindowStageDestroy");
                listKey12.push(abilityname + " onAbilityWindowStageDestroy");
            },
            onAbilityDestroy(ability) {
                console.log("[Demo] AbilityLifecycleCallback12 onAbilityDestroy ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] " + abilityname + " onAbilityDestroy");
                listKey12.push(abilityname + " onAbilityDestroy");
            },
            onAbilityForeground(ability) {
                console.log("[Demo] AbilityLifecycleCallback12 onAbilityForeground ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] " + abilityname + " onAbilityForeground");
                listKey12.push(abilityname + " onAbilityForeground");
            },
            onAbilityBackground(ability) {
                console.log("[Demo] AbilityLifecycleCallback12 onAbilityBackground ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] " + abilityname + " onAbilityBackground");
                listKey12.push(abilityname + " onAbilityBackground");
            },
            onAbilityContinue(ability) {
                console.log("[Demo] AbilityLifecycleCallback12 onAbilityContinue ability:"
                + JSON.stringify(ability));
                let abilityname = ability.context.abilityInfo.name;
                console.log("[Demo] " + abilityname + " onAbilityContinue");
                listKey12.push(abilityname + " onAbilityContinue");
            }
        }
        let applicationContext = this.context.getApplicationContext();
        console.log("[Demo] MainAbility12 applicationContext: " + JSON.stringify(applicationContext));
        let lifecycleid = applicationContext.registerAbilityLifecycleCallback(AbilityLifecycleCallback);
        console.log("[Demo] registerAbilityLifecycleCallback12 number: " + JSON.stringify(lifecycleid));
        setTimeout(function () {
            console.log("[Demo] registerAbilityLifecycleCallback12 listKey: " + JSON.stringify(listKey12));
            globalThis.list12 = listKey12;
            globalThis.callbackid12 = lifecycleid;
        }, 1700);
    }

    onDestroy() {
        console.log("[Demo] MainAbility12 onDestroy")
    }

    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability
        console.log("[Demo] MainAbility12 onWindowStageCreate")
        globalThis.ability12 = this.context;
        windowStage.setUIContent(this.context, "pages/index12", null)
    }

    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        console.log("[Demo] MainAbility12 onWindowStageDestroy")
    }

    onForeground() {
        // Ability has brought to foreground
        console.log("[Demo] MainAbility12 onForeground")
    }

    onBackground() {
        // Ability has back to background
        console.log("[Demo] MainAbility12 onBackground")
    }
};
