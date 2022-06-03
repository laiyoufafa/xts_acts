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
function PublishCallBackOne1() {
  console.debug("====>Publish CallBack ACTS_ThirdPartyAbilityPermission_0100_CommonEvent====>");
  globalThis.ability2Context.terminateSelf();
  console.debug("====>close this context====>")
}


export default class MainAbility2 extends Ability {

  onCreate(want, launchParam) {
    console.log("MainAbility2 onCreate")
  }

  onDestroy() {
    // Ability is destroying, release resources for this ability
    console.log("MainAbility2 onDestroy")
  }

  onWindowStageCreate(windowStage) {
    // Main window is created, set main page for this ability
    console.log("MainAbility2 onWindowStageCreate")
    windowStage.setUIContent(this.context, "pages/index/index2", null)
    globalThis.ability2Context = this.context;
    commonEvent.publish("ACTS_AbilityPermission_0100_Start_CommonEvent", PublishCallBackOne1);
  }

  onWindowStageDestroy() {
    // Main window is destroyed, release UI related resources
    console.log("MainAbility2 onWindowStageDestroy")
  }

  onForeground() {
    // Ability has brought to foreground
    console.log("MainAbility2 onForeground")
  }

  onBackground() {
    // Ability has back to background
    console.log("MainAbility2 onBackground")
  }
};
