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
import TestRunner from '@ohos.application.testRunner';
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry';

var abilityDelegator = undefined
var abilityDelegatorArguments = undefined
var TAG = "SupportFunctionTest == "
function translateParamsToString(parameters) {
    const keySet = new Set([
        '-s class', '-s notClass', '-s suite', '-s it',
        '-s level', '-s testType', '-s size', '-s timeout'
    ])
    let targetParams = '';
    for (const key in parameters) {
        if (keySet.has(key)) {
            targetParams = `${targetParams} ${key} ${parameters[key]}`
        }
    }
    return targetParams.trim()
}

async function onAbilityCreateCallback() {
    console.log(TAG + "onAbilityCreateCallback");
}

async function addAbilityMonitorCallback(err: any) {
    console.log(TAG + "addAbilityMonitorCallback : " + JSON.stringify(err))
}

export default class OpenHarmonyTestRunner implements TestRunner {
    constructor() {
    }

    onPrepare() {
        console.log(TAG + "OpenHarmonyTestRunner OnPrepare ")
    }

    async onRun() {
        console.log(TAG + 'OpenHarmonyTestRunner onRun run')
        abilityDelegatorArguments = AbilityDelegatorRegistry.getArguments()
        abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator()
        globalThis.abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator()
        var MainAbilityName = 'MainAbility'
        let lMonitor = {
            abilityName: MainAbilityName,
            onAbilityCreate: onAbilityCreateCallback,
        };
        abilityDelegator.addAbilityMonitor(lMonitor, addAbilityMonitorCallback)
        var cmd = 'aa start -d 0 -a MainAbility' + ' -b ' + abilityDelegatorArguments.bundleName
        cmd += ' '+translateParamsToString(abilityDelegatorArguments.parameters)
        console.log(TAG + 'cmd : '+cmd)
        abilityDelegator.executeShellCommand(cmd,
            (err: any, d: any) => {
                console.log(TAG + 'executeShellCommand : err : ' + JSON.stringify(err));
                console.log(TAG + 'executeShellCommand : data : ' + d.stdResult);
                console.log(TAG + 'executeShellCommand : data : ' + d.exitCode);
            })
        console.log(TAG + 'OpenHarmonyTestRunner onRun end')
    }
};