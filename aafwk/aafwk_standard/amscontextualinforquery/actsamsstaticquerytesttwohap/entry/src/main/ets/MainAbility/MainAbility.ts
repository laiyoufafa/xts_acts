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
import commonEvent from '@ohos.commonevent'

export default class MainAbility extends Ability {

    onCreate(want, launchParam) {
        // Ability is creating, initialize resources for this ability
        console.log("MainAbility onCreate")
        globalThis.abilityWant = want;
    }

    onDestroy() {
        // Ability is destroying, release resources for this ability
        console.log("MainAbility onDestroy")
    }

    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability
        console.log("MainAbility onWindowStageCreate")
        globalThis.abilityContext = this.context
        windowStage.setUIContent(this.context, "pages/index/index", null)
    }

    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        console.log("MainAbility onWindowStageDestroy")
    }

    onForeground() {
        // Ability has brought to foreground
        if (globalThis.abilityWant.action == 'getAbilityContext') {
            commonEvent.publish("MainAbility_Start_CommonEvent_ability", {
                parameters: {
                    hapModuleInfo: JSON.stringify(globalThis.abilityContext.currentHapModuleInfo),
                    applicationInfo: JSON.stringify(globalThis.abilityContext.applicationInfo),
                    abilityInfo: JSON.stringify(globalThis.abilityContext.abilityInfo)
                }
            } ,(err) => {
                console.log("MainAbility Publish CallBack MainAbility_Start_CommonEvent")
            });
            globalThis.abilityContext.startAbility({
                bundleName: "com.example.staticquerytesttwo",
                abilityName: "com.example.staticquerytesttwo.SecondAbility",
                action:"getAbilityContext2"
            }, (error, data) => {
                console.log('ACTS_getAbilityInfo_0200_startSecondAbility: ' + JSON.stringify(error) +
                ", " + JSON.stringify(data))
            })
            console.log('stub SerivceAbilityServer OnConnect start 2');
        }
        console.log("MainAbility onForeground")

        if (globalThis.abilityWant.action == 'startmultiple') {
                globalThis.abilityContext.startAbility({
                    bundleName: "com.example.staticinformationmultihappackage",
                    abilityName: "com.example.staticinformationmultihappackage.MainAbility",
                    action: "multiple"
                }, (err, data) => {
                    console.log('ACTS_getAbilityInfo_0500 MainAbility onForeground - startAbility restart singleton: '
                    + JSON.stringify(err) + ", " + JSON.stringify(data))
                })
                commonEvent.publish("MainAbility_Start_CommonEvent_multi_hap_entryB", {
                    parameters: {
                        hapModuleInfo: JSON.stringify(globalThis.abilityContext.currentHapModuleInfo),
                        applicationInfo: JSON.stringify(globalThis.abilityContext.applicationInfo),
                        abilityInfo: JSON.stringify(globalThis.abilityContext.abilityInfo)
                    }
                }, (err) => {
                    console.log("ACTS_getAbilityInfo_0500 MainAbility Publish CallBack onForeground")
                });
        }
    }

    onBackground() {
        // Ability has back to background
        console.log("MainAbility onBackground")
    }
};
