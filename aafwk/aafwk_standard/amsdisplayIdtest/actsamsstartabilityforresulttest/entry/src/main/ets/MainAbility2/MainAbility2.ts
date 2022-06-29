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
import commonEvent from '@ohos.commonevent'

async function onShowProcess() {
    var abilityWant = globalThis.abilityWant;

    var commonEventPublishData = {
        parameters: {
            displayId: globalThis.abilityWant.parameters['ohos.aafwk.param.displayId'],
            windowMode: globalThis.abilityWant.parameters['ohos.aafwk.param.windowMode'],
        }
    };
   
    console.log("AbilityMultiInstanceAppA abilityWant = " + JSON.stringify(abilityWant));
  
    commonEvent.publish("ACTS_TerminateSelf_CommonEvent", commonEventPublishData, () => {
        console.log('============>querytestsecond success==========>>')
        globalThis.abilityContext.terminateSelf();
    });
    
}
export default class MainAbility extends Ability {

    onCreate(want, launchParam) {
        // Ability is creating, initialize resources for this ability
        console.log("MainAbility2 onCreate")
        globalThis.abilityWant = want;
        console.log("AbilityMultiInstanceAppA abilityWant = " + JSON.stringify( globalThis.abilityWant));
    }

    onDestroy() {
        // Ability is destroying, release resources for this ability
        console.log("MainAbility2 onDestroy")
    }

    onWindowStageCreate(windowStage) {
        // Main window is created, set main page for this ability
        console.log("MainAbility2 onWindowStageCreate")
        globalThis.abilityContext = this.context
        windowStage.setUIContent(this.context, "pages/second/second", null)
    }

    onWindowStageDestroy() {
        // Main window is destroyed, release UI related resources
        console.log("MainAbility onWindowStageDestroy")
    }

    onForeground() {
        // Ability has brought to foreground
        console.log("MainAbility onForeground")
        onShowProcess();
    }

    onBackground() {
        // Ability has back to background
        console.log("MainAbility onBackground")
    }
};
