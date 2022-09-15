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
import AbilityDelegatorRegistry from '@ohos.application.abilityDelegatorRegistry'
import { Hypium } from '@ohos/hypium'
import testsuite from '../test/List.test'

export default class MainAbility extends Ability {
    async onCreate(want, launchParam) {
        globalThis.abilityContext = this.context;
        console.log('MainAbility onCreate')
        let cmd: any
        let abilityDelegatorArguments: any
        let abilityDelegator: any
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        abilityDelegator = AbilityDelegatorRegistry.getAbilityDelegator()
        abilityDelegatorArguments = AbilityDelegatorRegistry.getArguments()

        cmd = 'aa test -b com.example.aacommandrelyhap -m entry_test  -s class ACTS_AACommand_01_3#ACTS_AACo' +
            'mmand_print_01_0100 -s unittest OpenHarmonyTestRunner'
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            console.log('ACTS_AACommand_print_01_0100 - executeShellCommand: start ')
            console.log('ACTS_AACommand_print_01_0100 start err: ' + JSON.stringify(err))
            console.log('ACTS_AACommand_print_01_0100 stdResult = ' + data.stdResult)
            globalThis.stdResult3 = data.stdResult;
            console.log('ACTS_AACommand_print_01_0100 - executeShellCommand: end')
        })

        await sleep(4000)

        cmd = 'aa test -m entry_test -b com.example.aacommandrelyhap -s class ACTS_AACommand_01_3#ACTS_AAComm' +
            'and_print_01_0200 -s unittest OpenHarmonyTestRunner'
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            console.log('ACTS_AACommand_print_01_0200 - executeShellCommand: start ')
            console.log('ACTS_AACommand_print_01_0200 start err: ' + JSON.stringify(err))
            console.log('ACTS_AACommand_print_01_0200 stdResult = ' + data.stdResult)
            globalThis.stdResult4 = data.stdResult;
            console.log('ACTS_AACommand_print_01_0200 - executeShellCommand: end')
        })

        await sleep(4000)

        cmd = 'aa test -m entry_test -b com.example.aacommandrelyhap -s class ACTS_AACommand_01_3#ACTS_' +
            'AACommand_print_01_0300 -s unittest OpenHarmonyTestRunner'
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            console.log('ACTS_AACommand_print_01_0300 - executeShellCommand: start ')
            console.log('ACTS_AACommand_print_01_0300 start err: ' + JSON.stringify(err))
            console.log('ACTS_AACommand_print_01_0300 stdResult = ' + data.stdResult)
            globalThis.stdResult5 = data.stdResult;
            console.log('ACTS_AACommand_print_01_0300 - executeShellCommand: end')
        })

        await sleep(4000)

        cmd = 'aa test -m entry_test -b com.example.aacommandrelyhap -s class ACTS_AACommand_01_3#ACTS_AAComma' +
            'nd_print_01_0400 -s unittest OpenHarmonyTestRunner'
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            console.log('ACTS_AACommand_print_01_0400 - executeShellCommand: start ')
            console.log('ACTS_AACommand_print_01_0400 start err: ' + JSON.stringify(err))
            console.log('ACTS_AACommand_print_01_0400 stdResult = ' + data.stdResult)
            globalThis.stdResult6 = data.stdResult;
            console.log('ACTS_AACommand_print_01_0400 - executeShellCommand: end')
        })

        await sleep(4000)

        cmd = 'aa test -m entry_test -b com.example.aacommandrelyhap -s class ACTS_AACommand_01_3#ACTS_AAComm' +
            'and_print_01_0500 -s unittest OpenHarmonyTestRunner'
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            console.log('ACTS_AACommand_print_01_0500 - executeShellCommand: start ')
            console.log('ACTS_AACommand_print_01_0500 start err: ' + JSON.stringify(err))
            console.log('ACTS_AACommand_print_01_0500 stdResult = ' + data.stdResult)
            globalThis.stdResult7 = data.stdResult;
            console.log('ACTS_AACommand_print_01_0500 - executeShellCommand: end')
        })

        await sleep(4000)

        cmd = 'aa test -m entry_test -b com.example.aacommandrelyhap -s class ACTS_AACommand_01_3#ACTS_AA' +
            'Command_print_01_0600 -s unittest OpenHarmonyTestRunner'
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            console.log('ACTS_AACommand_print_01_0600 - executeShellCommand: start ')
            console.log('ACTS_AACommand_print_01_0600 start err: ' + JSON.stringify(err))
            console.log('ACTS_AACommand_print_01_0600 stdResult = ' + data.stdResult)
            globalThis.stdResult8 = data.stdResult;
            console.log('ACTS_AACommand_print_01_0600 - executeShellCommand: end')
        })

        await sleep(4000)

        cmd = 'aa test -m entry_test -b com.example.aacommandrelyhap -s class ' +
            'ACTS_AACommand_01_3#ACTS_AACommand_print_01_0700 -s unittest OpenHarmonyTestRunner'
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            console.log('ACTS_AACommand_print_01_0700 - executeShellCommand: start ')
            console.log('ACTS_AACommand_print_01_0700 start err: ' + JSON.stringify(err))
            console.log('ACTS_AACommand_print_01_0700 stdResult = ' + data.stdResult)
            globalThis.stdResult9 = data.stdResult;
            console.log('ACTS_AACommand_print_01_0700 - executeShellCommand: end')
        })

        await sleep(4000)

        cmd = 'aa test -m entry_test -b com.example.aacommandrelyhap -s ' +
            'class ACTS_AACommand_01_3#ACTS_AACommand_print_01_0800 -s unittest OpenHarmonyTestRunner'
        abilityDelegator.executeShellCommand(cmd, (err, data) => {
            console.log('ACTS_AACommand_print_01_0800 - executeShellCommand: start ')
            console.log('ACTS_AACommand_print_01_0800 start err: ' + JSON.stringify(err))
            console.log('ACTS_AACommand_print_01_0800 stdResult = ' + data.stdResult)
            globalThis.stdResult10 = data.stdResult;
            console.log('ACTS_AACommand_print_01_0800 - executeShellCommand: end')
        })

        setTimeout(() => {
            Hypium.hypiumTest(abilityDelegator, abilityDelegatorArguments, testsuite)

        }, 5000)
    }

    onDestroy() {
        console.log('MainAbility onDestroy')
    }

    onWindowStageCreate(windowStage) {
        console.log('MainAbility onWindowStageCreate')
        windowStage.setUIContent(this.context, 'pages/index', null)

    }

    onWindowStageDestroy() {
        console.log('MainAbility onWindowStageDestroy')
    }

    onForeground() {
        console.log('MainAbility onForeground')
    }

    onBackground() {
        console.log('MainAbility onBackground')
    }
};