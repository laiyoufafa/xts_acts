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
import ServiceExtensionAbility from '@ohos.application.ServiceExtensionAbility';
import wantConstant from '@ohos.ability.wantConstant';
import commonEvent from '@ohos.commonEvent';

var publishConnectOptions = {
    parameters: {
        "assertData": "onConnect"
    }
};
var publishDisconnectOptions = {
    parameters: {
        "assertData": "onDisconnect"
    }
};
var publishFailedOptions = {
    parameters: {
        "assertData": "onFailed"
    }
};

function PublishCallBack(err) {
    if (err.code) {
        console.error("ConnectAbilityTest_Ext service4 publish failed " + JSON.stringify(err));
    } else {
        console.info("ConnectAbilityTest_Ext service4 publish success!!!");
    }
}

export default class ServiceAbility4 extends ServiceExtensionAbility {
    onCreate(want) {
        console.info('onCreate, want:' + want.abilityName);
        console.info('ConnectAbilityTest_Ext service4 onCreate');
    }

    onRequest(want, startId) {
        console.info('onRequest, want: ' + want.abilityName);
        console.info('onRequest, startId: ' + startId);
        console.info('ConnectAbilityTest_Ext service4 onRequest');
        let request = {
            'deviceId': 'XXXXX',
            'bundleName': 'com.example.myapplication.hmservice',
            'abilityName': 'ServiceAbility7',
            'moduleName': 'myapplication7',
            'flags': wantConstant.Flags.FLAG_INSTALL_ON_DEMAND,
        }
        let options = {
            onConnect: async function (element: any, proxy: any) {
                console.info('ConnectAbilityTest_Ext service4 onConnect success!!!');
                commonEvent.publish("service4_event",publishConnectOptions,PublishCallBack);
                console.info('ConnectAbilityTest_Ext service4 onConnect element : ' + JSON.stringify(element));
                console.info('ConnectAbilityTest_Ext service4 onConnect proxy : ' + JSON.stringify(proxy));
            },
            onDisconnect: async function (element1: any) {
                console.info('ConnectAbilityTest_Ext service4 onDisconnect success!!!');
                commonEvent.publish("service4_event",publishDisconnectOptions,PublishCallBack);
                console.info('ConnectAbilityTest_Ext service4 onDisconnect element : ' + JSON.stringify(element1));
            },
            onFailed: async function (code: any) {
                console.info('ConnectAbilityTest_Ext service4 onFailed!!!');
                commonEvent.publish("service4_event",publishFailedOptions,PublishCallBack);
                console.info('ConnectAbilityTest_Ext service4 onFailed errCode : ' + JSON.stringify(code));
            },
        }
        console.info('ConnectAbilityTest_Ext sevice connect start ');
        var connection = this.context.connectAbility(request, options);
        console.info('ConnectAbilityTest_Ext service4  request is:' + JSON.stringify(request));
        console.info('ConnectAbilityTest_Ext service4 options is:' + JSON.stringify(options));
        console.info('ConnectAbilityTest_Ext service4 connection=: ' + connection);
    }
    onDestroy() {
        console.info('ConnectAbilityTest_Ext service4 onDestroy');
    }
};