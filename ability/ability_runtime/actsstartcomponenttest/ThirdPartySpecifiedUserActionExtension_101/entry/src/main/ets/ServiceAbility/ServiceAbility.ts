/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import ServiceExtensionAbility from '@ohos.application.ServiceExtensionAbility'
import rpc from '@ohos.rpc';
class Stub extends rpc.RemoteObject {
  constructor(des) {
    super(des);
  }
  // process client's request
  onRemoteRequest(code, data, reply, option) {
    reply.writeNoException();
    reply.writeString("success");
    return true;
  }
}
export default class ServiceAbility extends ServiceExtensionAbility {
  onCreate(want) {
    console.log('ServiceAbility onCreate');
  }
  onDestory(){
    console.log('ServiceAbility onDestory');
  }
  onRequest(want,startId) {
    console.log('ServiceAbility onRequest');
  }

  onConnect(want) {
    console.log('ServiceAbility onConnect');
    console.log('globalThis.startnum is ' + globalThis.startnum);

    switch (globalThis.startnum) {
      case 1:
        console.log('ServiceAbility case 1');
        this.context.startAbilityWithAccount(
          {
            bundleName: 'com.example.actsthirdpartyspecifieduseractionextensionzerotest',
            abilityName: 'com.example.actsthirdpartyspecifieduseractionextensionzerotest.MainAbility2'
          },100, {
          windowMode: 2,
          displayId: 1
        }).then((data) => {
          console.log("====>end ACTS_ThirdPartyStartServiceAbilityWithAccount_0200 ====>success!")
        })
        console.debug("====>case 1 end====>");
        var myStub = new Stub("com.example.actsthirdpartyspecifieduseractionextensiononetest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub;
        break;
        break;

      case 2:
        console.log('ServiceAbility case 2');
        this.context.startAbilityWithAccount(
          {
            bundleName: 'com.example.actsthirdpartyspecifieduseractionextensionzerotest',
            abilityName: 'com.example.actsthirdpartyspecifieduseractionextensionzerotest.ServiceAbility2'
          },100).then((data) => {
          console.log("====>end ACTS_ThirdPartyStartServiceAbilityWithAccount_0800====>success!"+ JSON.stringify(data))
        })
        console.debug("====>case 3 end====>");
        var myStub = new Stub("com.example.actsthirdpartyspecifieduseractionextensiononetest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub;
        break;

      case 3:
        console.log('ServiceAbility case 3');
        this.context.connectAbilityWithAccount(
          {
            bundleName: 'com.example.actsthirdpartyspecifieduseractionextensionzerotest',
            abilityName: 'com.example.actsthirdpartyspecifieduseractionextensionzerotest.ServiceAbility2'
          },100)
        console.debug("====>case 5 end====>");
        var myStub = new Stub("com.example.actsthirdpartyspecifieduseractionextensiononetest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub;
        break;
      case 4:
        console.log('ServiceAbility case 4');
        this.context.startAbilityWithAccount(
          {
            bundleName: 'com.example.actsthirdpartyspecifieduseractionextensiononetest',
            abilityName: 'com.example.actsthirdpartyspecifieduseractionextensiononetest.ServiceAbility2'
          },101,((err, data) => {
          console.log("====>end ACTS_ThirdPartyStartServiceAbilityWithAccount_1000====>fail!!!"+ JSON.stringify(err))
          console.log("====>end ACTS_ThirdPartyStartServiceAbilityWithAccount_1000====>sunccess!"+ JSON.stringify(data))
        }))
        break;
      case 5:
        console.log('ServiceAbility case 5');
        this.context.startAbilityWithAccount(
          {
            bundleName: 'com.example.actsthirdpartyspecifieduseractionextensiononetest',
            abilityName: 'com.example.actsthirdpartyspecifieduseractionextensiononetest.ServiceAbility2'
          },101,((err, data) => {
          console.log("====>end ACTS_ThirdPartyStartServiceAbilityWithAccount_0400====>fail!!!"+ JSON.stringify(err))
          console.log("====>end ACTS_ThirdPartyStartServiceAbilityWithAccount_0400====>sunccess!"+ JSON.stringify(data))
        }))
        break;
      default:
        console.log("====> ServiceAbility end default =====>")
        break;
    }
  }
  onDisconnect(want) {
    console.log('ServiceAbility onDisconnect, want:' + want.abilityName);
  }

  onDestroy() {
    console.log('ServiceAbility onDestroy');
  }
}