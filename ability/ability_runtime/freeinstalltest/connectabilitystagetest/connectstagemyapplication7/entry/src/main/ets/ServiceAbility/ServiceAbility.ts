/**
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
import ServiceExtensionAbility from "@ohos.application.ServiceExtensionAbility"
import rpc from '@ohos.rpc';

class StubTest extends rpc.RemoteObject {
    constructor(des) {
        super(des)
    }

    onRemoteRequest(code, data, reply, option) {
        console.info('ServiceAbility myapp7 onRemoteRequest');
        if (code === 1) {
            let op1 = data.readInt();
            let op2 = data.readInt();
            reply.writeInt(op1 + op2);
            console.info('ServiceAbility myapp7 op1:' + op1 + ' op2:' + op2);
        }
        return true;
    }
}
export default class ServiceAbility extends ServiceExtensionAbility {
    onCreate(want) {
        console.info('onCreate, want:' + want.abilityName);
        console.info('ServiceAbility myapp7 onCreate');
    }
    onRequest(want, startId) {
        console.info('onRequest, want: ' + want.abilityName);
        console.info('onRequest, startId: ' + startId);
        console.info('ServiceAbility myapp7 onRequest');
    }
    onConnect(want) {
        console.info('onConnect, want:' + want.abilityName);
        console.info('ServiceAbility myapp7 onConnect');
        console.info('ConnectAbilityTest connect myapp7 Servcie success');
        return new StubTest("test");
    }
    onDisconnect(want) {
        console.info('onDisconnect, want:' + want.abilityName);
        console.info('ServiceAbility myapp7 onDisconnect');
    }
    onReconnect(want) {
        console.info('onReconnect, want:' + want.abilityName);
        console.info('ServiceAbility myapp7 onReconnect');
    }
    onDestroy() {
        console.info('ServiceAbility myapp7 onDestroy');
    }
};