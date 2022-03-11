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

import router from '@system.router'
import commonEvent from '@ohos.commonEvent';

export default {
  data: {
    title: "",
    text: ""
  },
  onInit() {
    this.title = this.$t('strings.world');
    this.text = "This is entry MainAbility2"
  },
  onShow() {
    console.info("EntryAbility2 onShow");
    commonEvent.publish("EntryAbility2_onShow", () => {
      console.log("EntryAbility2 Publish CallBack EntryAbility2_onShow")
    });
  },

  onHide() {
    console.info("EntryAbility2 onHide");
    commonEvent.publish("EntryAbility2_onHide", () => {
      console.log("EntryAbility2 Publish CallBack EntryAbility2_onHide")
    });
  },

  onActive() {
    console.info("EntryAbility2 onActive");
    commonEvent.publish("EntryAbility2_onActive", () => {
      console.log("EntryAbility2 Publish CallBack EntryAbility2_onActive")
    });
  },

  onInactive() {
    console.info("EntryAbility2 onInactive");
    commonEvent.publish("EntryAbility2_onInactive", () => {
      console.log("EntryAbility2 Publish CallBack EntryAbility2_onInactive")
    });
  },
  onclick: function () {
    router.replace({
      uri: "pages/second/second"
    })
  }
}



