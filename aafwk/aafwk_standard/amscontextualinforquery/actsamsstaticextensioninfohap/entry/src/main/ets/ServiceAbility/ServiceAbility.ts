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

import ServiceExtension from '@ohos.application.ServiceExtensionAbility'
import commonEvent from "@ohos.commonEvent";
import Want from '@ohos.application.Want';
import rpc from '@ohos.rpc';

export default class ServiceAbility extends ServiceExtension {
    onCreate(want:Want) {
        globalThis.abilityWant = want;
        console.log('ServiceAbility onCreate, want: ' + want.abilityName);
    }

    onRequest(want, startId) {
        console.log('ServiceAbility onRequest, want: ' + want.abilityName + ', startId: ' + startId);
    }

    onConnect(want) {
        console.log('ServiceAbility2 onConnect, abilityName:' + want.abilityName);
        console.log('ServiceAbility2 onConnect, action:' + want.action);
        globalThis.extensionContext = this.context
        if (want.action == 'getExtensionInfoTest') {
            commonEvent.publish("ACTS_ConnectAbility_0200_CommonEvent", {
                parameters: {
                    hapModuleInfo2: JSON.stringify(this.context.currentHapModuleInfo),
                    applicationInfo2: JSON.stringify(this.context.applicationInfo)
                }
            } ,(err) => {
                console.log("MainAbility Publish CallBack MainAbility_Start_CommonEvent")
            });
            console.log('stub SerivceAbilityServer OnConnect start 2');
      
        }
        return new rpc.RemoteObject('connect');
    }

    onDisconnect(want) {
        console.log('ServiceAbility onDisconnect, want:' + want.abilityName);
    }

    onDestroy() {
        console.log('ServiceAbility onDestroy');
    }
}