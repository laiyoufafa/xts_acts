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
import Want from '@ohos.application.Want';
import rpc from '@ohos.rpc';
class Stub extends rpc.RemoteObject {
  constructor(des) {
    super(des);
  }
  onRemoteRequest(code, data, reply, option) {
    reply.writeNoException();
    reply.writeString("success");
    return true;
  }
}
export default class ServiceAbility extends ServiceExtensionAbility {
  onCreate(want:Want) {
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
    console.log('globalThis.startnum is' + globalThis.startnum);
    switch (globalThis.startnum) {
      case 1:
        this.context.startAbility(
          {
            bundleName: 'com.acts.actsinterfacemultiusersextensionthirdtest',
            abilityName: 'com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility2'
          },{
          windowMode:0
        }
        ).then((data) => {
          console.debug("====>startAbility end====>");
          console.debug("====>data is====>" + JSON.stringify(data));
        })
        break;
      case 2:
        this.context.startAbility(
          {
            bundleName: 'com.acts.error',
            abilityName: 'com.acts.error.MainAbility2'
          },{
          windowMode:0
        }).then(()=>{
          console.debug("====>startAbility end====>");
        })
        console.debug("====>case 2 end====>");
        var myStub1 = new Stub("com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub1;
        break;
      case 3:
        this.context.startAbility(
          {
            bundleName: 'com.acts.actsinterfacemultiusersextensionthirdtest',
            abilityName: 'com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility2'
          },{
          windowMode:0
        },(err,data) => {
          console.debug("====>err is====>" + JSON.stringify(err));
          console.debug("====>startAbility end====>" );
        })
        var myStub7 = new Stub("com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub7;
        break;
      case 4:
        this.context.startAbility(
          {
            bundleName: 'com.acts.error',
            abilityName: 'com.acts.error.MainAbility2'
          },{
          windowMode:0
        },(err,data) => {
          console.debug("====>err is====>" + JSON.stringify(err));
          console.debug("====>startAbility end====>" );
        })
        var myStub2 = new Stub("com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub2;
        break;
      case 5:
        this.context.startAbility(
          {
            bundleName: 'com.acts.actsinterfacemultiusersextensionthirdtest',
            abilityName: 'com.acts.actsinterfacemultiusersextensionthirdtest.ServiceAbility2'
          }).then((data)=>{
          console.debug("====>startAbility end====>");
          console.debug("====>data is====>" + JSON.stringify(data));
        })
        break;
      case 6:
        this.context.startAbility(
          {
            bundleName: 'com.acts.error',
            abilityName: 'com.acts.error.ServiceAbility2'
          }).then(()=>{
          console.debug("====>startAbility end====>");
        })
        var myStub3 = new Stub("com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub3;
        break;
      case 7:
        this.context.startAbility(
          {
            bundleName: 'com.acts.actsinterfacemultiusersextensionthirdtest',
            abilityName: 'com.acts.actsinterfacemultiusersextensionthirdtest.ServiceAbility2'
          },(err,data) => {
            console.debug("====>err is====>" + JSON.stringify(err));
            console.debug("====>startAbility end====>" );
          })
        var myStub8 = new Stub("com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub8;
        break;
      case 8:
        this.context.startAbility(
          {
            bundleName: 'com.acts.error',
            abilityName: 'com.acts.error.ServiceAbility2'
          },(err,data) => {
            console.debug("====>err is====>" + JSON.stringify(err));
            console.debug("====>startAbility end====>" );
          })
        var myStub4 = new Stub("com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub4;
        break;
      case 9:
        this.context.startAbility(
          {
            bundleName: 'com.acts.actsinterfacemultiusersextensionthirdtest',
            abilityName: 'com.acts.actsinterfacemultiusersextensionthirdtest.ServiceAbility2'
          }).then(()=>{
          console.debug("====>startAbility end====>");
        })
        break;
      case 10:
        this.context.startAbility(
          {
            bundleName: 'com.acts.error',
            abilityName: 'com.acts.error.ServiceAbility2'
          }).then(()=>{
          console.debug("====>startAbility end====>");
        })
        var myStub5 = new Stub("com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub5;
        break;
      case 11:
        this.context.startAbility(
          {
            bundleName: 'com.acts.actsinterfacemultiusersextensionthirdtest',
            abilityName: 'com.acts.actsinterfacemultiusersextensionthirdtest.ServiceAbility2'
          }).then(()=>{
          console.debug("====>startAbility end====>");
        })
        break;
      case 12:
        this.context.startAbility(
          {
            bundleName: 'com.acts.error',
            abilityName: 'com.acts.error.ServiceAbility2'
          },(err,data) => {
            console.debug("====>err is====>" + JSON.stringify(err));
            console.debug("====>startAbility end====>" );
          })
        var myStub6 = new Stub("com.acts.actsinterfacemultiusersextensionthirdtest.MainAbility");
        console.log('ThirdAbility onConnect before return:')
        return myStub6;
        break;
      default:
        break;
    }
    return new rpc.RemoteObject('connect');
  }

  onDisconnect(want) {
    console.log('ServiceAbility onDisconnect');
  }

  onDestroy() {
    console.log('ServiceAbility onDestroy');
  }
}