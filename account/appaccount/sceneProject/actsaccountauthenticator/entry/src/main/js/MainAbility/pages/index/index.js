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
import account_appAccount from '@ohos.account.appAccount';
import featureAbility from '@ohos.ability.featureAbility'

export default {
    data: {
        title: "Hello World"
    },
    onShow() {
        this.title = this.$t('strings.world');
    },
    onInit() {
        console.info('====>ServiceAbility onStart');
        var accountMgr = account_appAccount.createAppAccountManager();        
        accountMgr.createAccount("zhangsan", async(data)=>{
            console.info('====>ServiceAbility addAccount 01 onStart');
            console.info('====>ServiceAbility setAppAccess actsaccounttest zhangsan');
            await accountMgr.setAppAccess("zhangsan", "com.example.actsaccounttest", true);
            console.info('====>ServiceAbility setAppAccess actsaccountoperatetest zhangsan');
            await accountMgr.setAppAccess("zhangsan", "com.example.actsaccountoperatetest", true);
            console.info('====>ServiceAbility addAccount 02 onStart');
            accountMgr.createAccount("lisi", async (err)=>{
                console.info('====>ServiceAbility setAppAccess actsaccounttest lisi');
                await accountMgr.setAppAccess("lisi", "com.example.actsaccounttest", true);
                console.info('====>ServiceAbility setAppAccess actsaccountoperatetest lisi');
                await accountMgr.setAppAccess("lisi", "com.example.actsaccountoperatetest", true);
                console.info('====>ServiceAbility addAccount 03 onStart');
                accountMgr.createAccount("wangwu", async (err)=>{
                    console.info('====>ServiceAbility enableAppAccess 03 onStart');
                    console.info('====>ServiceAbility setAppAccess actsaccounttest wangwu');
                    await accountMgr.setAppAccess("wangwu", "com.example.actsaccounttest", true)
                    console.info('====>ServiceAbility setAppAccess actsaccountoperatetest wangwu');
                    accountMgr.setAppAccess("wangwu", "com.example.actsaccountoperatetest", true, (err)=>{
                        featureAbility.terminateSelf();
                        console.info('====>ServiceAbility add end');
                    });
                });
            });
        });
        console.info('====>ServiceAbility onStart end');
    },
    onReady() {
    },
}