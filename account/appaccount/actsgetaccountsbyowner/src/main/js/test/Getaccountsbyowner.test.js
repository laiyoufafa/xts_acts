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
import account from '@ohos.account.appAccount'
import featureAbility from '@ohos.ability.featureAbility'
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'

const TIMEOUT = 2000;
const LENGTHLIMIT = 1024;
const SELFBUNDLE = 'com.example.actsgetaccountsbyowner'
const createAccountOptions = {customData:{age:'12'}}
export default function GetAccountsByOwner() {
    describe('GetAccountsByOwner', function () {

        /*
        * @tc.number    : GetAccountsByOwner_0100
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : This application gets its own application information after adding an account
        */
        it('GetAccountsByOwner_0100', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            appAccountManager.createAccount("Account_this_application_callback", (err)=>{
                console.debug("====>add account 0100 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.getAccountsByOwner(SELFBUNDLE, (err, data)=>{
                    console.debug("====>getAccountsByOwner 0100 err:" + JSON.stringify(err));
                    console.debug("====>getAccountsByOwner 0100 data:" + JSON.stringify(data));
                    expect(err).assertEqual(null);
                    try{
                        expect(data[0].name).assertEqual("Account_this_application_callback");
                        expect(data[0].owner).assertEqual("com.example.actsgetaccountsbyowner");
                    }
                    catch(err){
                        console.error("====>getAccountsByOwner 0100 fail err:" + JSON.stringify(err));
                        expect().assertFail();
                        done();
                    }
                    appAccountManager.removeAccount("Account_this_application_callback", (err)=>{
                        console.debug("====>delete account 0100 err:" + JSON.stringify(err));
                        expect(err).assertEqual(null);
                        console.debug("====>GetAccountsByOwner_0100 end====");
                        done();
                    });
                })
            });
        });

        /*
        * @tc.number    : GetAccountsByOwner_0200
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : This application gets its own application information after adding an account
        */
        it('GetAccountsByOwner_0200', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0200 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            console.debug("====>getAccountsByOwner for clean====");
            try{
                var acclist = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>getAccountsByOwner err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>account list length: " + acclist.length);
            if(acclist.length > 0){
                for(var i = 0;i < acclist.length; i++){
                    await appAccountManager.removeAccount(acclist[i].name);
                }
            }
            console.debug("====>add account 0200 start====");
            await appAccountManager.createAccount("Account_this_application_promise");
            console.debug("====>getAccountsByOwner 0200 start====");
            try{
                var data = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>getAccountsByOwner 0200 fail err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }       
            try{
                expect(data[0].name).assertEqual("Account_this_application_promise");
                expect(data[0].owner).assertEqual("com.example.actsgetaccountsbyowner");
            }
            catch(err){
                console.error("====>check data 0200 fail err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>delete account 0200 start====");
            await appAccountManager.removeAccount("Account_this_application_promise");      
            console.debug("====>GetAccountsByOwner_0200 end====");
            done();
        });

        /*
        * @tc.number    : GetAccountsByOwner_0300
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : No account has been added to this application and it is not authorized by other applications to
        *                 obtain account information for this application
        */
        it('GetAccountsByOwner_0300', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0300 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            appAccountManager.getAccountsByOwner(SELFBUNDLE, (err, data)=>{
                console.debug("====>getAccountsByOwner 0300 err:" + JSON.stringify(err));
                console.debug("====>getAccountsByOwner 0300 data:" + JSON.stringify(data));
                expect(err).assertEqual(null);
                expect(data.length).assertEqual(0);
                console.debug("====>GetAccountsByOwner_0300 end====");
                done();
            })
        });

        /*
        * @tc.number    : GetAccountsByOwner_0400
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : No account has been added to this application and it is not authorized by other applications to
        *                 obtain account information for this application
        */
        it('GetAccountsByOwner_0400', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0400 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            console.debug("====>getAccountsByOwner for clean====");
            try{
                var acclist = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>getAccountsByOwner err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>account list length: " + acclist.length);
            if(acclist.length > 0){
                for(var i = 0;i < acclist.length; i++){
                    await appAccountManager.removeAccount(acclist[i].name);
                }
            }
            var data = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            console.debug("====>getAccountsByOwner 0400 data:" + JSON.stringify(data));   
            expect(data.length).assertEqual(0);
            console.debug("====>GetAccountsByOwner_0400 end====");
            done();
        });

        /*
        * @tc.number    : GetAccountsByOwner_0500
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : The parameter owner is an empty string
        */
        it('GetAccountsByOwner_0500', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0500 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            var emptyBundle = "";
            appAccountManager.getAccountsByOwner(emptyBundle, (err, data)=>{
                console.debug("====>getAccountsByOwner 0500 err:" + JSON.stringify(err));
                expect(err.code == 12300002).assertEqual(true);
                console.debug("====>GetAccountsByOwner_0500 end====");
                done();
            })
        });

        /*
        * @tc.number    : GetAccountsByOwner_0600
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : The parameter owner is an empty string
        */
        it('GetAccountsByOwner_0600', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0600 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            var emptyBundle = "";
            try{
                var data = await appAccountManager.getAccountsByOwner(emptyBundle);
            }
            catch(err){
                console.debug("====>getAccountsByOwner 0600 err:" + JSON.stringify(err));   
                expect(err.code == 12300002).assertEqual(true);
                console.debug("====>GetAccountsByOwner_0600 end====");
                done();
            }
        });

        /*
        * @tc.number    : GetAccountsByOwner_0700
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : The parameter owner is a string that exceeds the length limit
        */
        it('GetAccountsByOwner_0700', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0700 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            var limitBundle = '';
            for (var i = 0; i < LENGTHLIMIT + 1; i++) {
                limitBundle += 't';
            }
            appAccountManager.getAccountsByOwner(limitBundle, (err, data)=>{
                console.debug("====>getAccountsByOwner 0700 err:" + JSON.stringify(err));
                expect(err.code == 12300002).assertEqual(true);
                console.debug("====>GetAccountsByOwner_0700 end====");
                done();
            })
        });

        /*
        * @tc.number    : GetAccountsByOwner_0800
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : The parameter owner is a string that exceeds the length limit
        */
        it('GetAccountsByOwner_0800', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0800 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            var limitBundle = '';
            for (var i = 0; i < LENGTHLIMIT + 1; i++) {
                limitBundle += 'n';
            }
            try{
                var data = await appAccountManager.getAccountsByOwner(limitBundle);
            }
            catch(err){
                console.debug("====>getAccountsByOwner 0800 err:" + JSON.stringify(err));   
                expect(err.code == 12300002).assertEqual(true);
                console.debug("====>GetAccountsByOwner_0800 end====");
                done();
            }
        });

        /*
        * @tc.number    : GetAccountsByOwner_0900
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : This application adds an account, and after other applications authorize an account to this
        *                 application, this application obtains the information of its own application
        */
        it('GetAccountsByOwner_0900', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_0900 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            console.debug("====>add account 0900 start====");
            await appAccountManager.createAccount("Account_application_callback");
            console.debug("====>startAbility 0900 start====");
            await featureAbility.startAbility(
                {
                    want:
                    {
                        deviceId: "",
                        bundleName: "com.example.actsscenegetallaccounts",
                        abilityName: "com.example.actsscenegetallaccounts.MainAbility",
                        action: "action1",
                        parameters:
                        {},
                    },
                },
            );
            function getAllCallback(err, data){
                console.debug("====>getAccountsByOwner 0900 err:" + JSON.stringify(err));
                console.debug("====>getAccountsByOwner 0900 data:" + JSON.stringify(data));
                expect(err).assertEqual(null);
                expect(data[0].name).assertEqual("Account_application_callback");
                expect(data[0].owner).assertEqual("com.example.actsgetaccountsbyowner");
                appAccountManager.removeAccount("Account_application_callback", (err)=>{
                    console.debug("====>delete account 0900 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>GetAccountsByOwner_0900 end====");
                    done();
                });
            }
            setTimeout(async function(){
                console.debug("====>getAccountsByOwner 0900 start====");
                appAccountManager.getAccountsByOwner(SELFBUNDLE, getAllCallback); 
            }, TIMEOUT); 
        });

        /*
        * @tc.number    : GetAccountsByOwner_1000
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : This application adds an account, and after other applications authorize an account to this
        *                 application, this application obtains the information of its own application
        */
        it('GetAccountsByOwner_1000', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1000 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            console.debug("====>add account 1000 start====");
            await appAccountManager.createAccount("Account_application_promise");
            console.debug("====>startAbility 1000 start====");
            await featureAbility.startAbility(
                {
                    want:
                    {
                        deviceId: "",
                        bundleName: "com.example.actsscenegetallaccounts",
                        abilityName: "com.example.actsscenegetallaccounts.MainAbility",
                        action: "action1",
                        parameters:
                        {},
                    },
                },
            );
            setTimeout(async function(){
                console.debug("====>getAccountsByOwner 1000 start====");
                try{
                    var data = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
                }
                catch(err){
                    console.error("====>getAccountsByOwner 1000 fail err:" + JSON.stringify(err));
                    expect().assertFail();
                    done();
                }
                console.debug("====>getAccountsByOwner 1000 data:" + JSON.stringify(data));
                try{
                    expect(data[0].name).assertEqual("Account_application_promise");
                    expect(data[0].owner).assertEqual("com.example.actsgetaccountsbyowner");
                }
                catch(err){
                    console.error("====>check data 1000 fail err:" + JSON.stringify(err));
                    expect().assertFail();
                    done();
                }
                console.debug("====>delete account 1000 start====");
                await appAccountManager.removeAccount("Account_application_promise");
                console.debug("====>GetAccountsByOwner_1000 end====");
                done();
            }, TIMEOUT); 
        });

        /*
        * @tc.number    : GetAccountsByOwner_1100
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : This application adds an account, and after other applications authorize an account to this
        *                 application, this application obtains the information of its own application
        */
        it('GetAccountsByOwner_1100', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1100 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            var specifiedBundle = "com.example.actsscenegetallaccounts";
            console.debug("====>startAbility 1100 start====");
            await featureAbility.startAbility(
                {
                    want:
                    {
                        deviceId: "",
                        bundleName: "com.example.actsscenegetallaccounts",
                        abilityName: "com.example.actsscenegetallaccounts.MainAbility",
                        action: "action1",
                        parameters:
                        {},
                    },
                },
            );
            function getAllCallback(err, data){
                console.debug("====>getAccountsByOwner 1100 err:" + JSON.stringify(err));
                console.debug("====>getAccountsByOwner 1100 data:" + JSON.stringify(data));
                expect(err).assertEqual(null);
                expect(data[0].name).assertEqual("account_name_scene_single");
                expect(data[0].owner).assertEqual("com.example.actsscenegetallaccounts");
                console.debug("====>GetAccountsByOwner_1100 end====");
                done();
            }
            setTimeout(async function(){
                console.debug("====>getAccountsByOwner 1100 start====");
                appAccountManager.getAccountsByOwner(specifiedBundle, getAllCallback); 
            }, TIMEOUT); 
        });

        /*
        * @tc.number    : GetAccountsByOwner_1200
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : This application adds an account, and after other applications authorize an account to this
        *                 application, this application obtains the information of its own application
        */
        it('GetAccountsByOwner_1200', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1200 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            var specifiedBundle = "com.example.actsscenegetallaccounts";
            console.debug("====>startAbility 1200 start====");
            await featureAbility.startAbility(
                {
                    want:
                    {
                        deviceId: "",
                        bundleName: "com.example.actsscenegetallaccounts",
                        abilityName: "com.example.actsscenegetallaccounts.MainAbility",
                        action: "action1",
                        parameters:
                        {},
                    },
                },
            );
            setTimeout(async function(){
                console.debug("====>getAccountsByOwner 1200 start====");
                try{
                    var data = await appAccountManager.getAccountsByOwner(specifiedBundle);
                }
                catch(err){
                    console.error("====>getAccountsByOwner 1200 fail err:" + JSON.stringify(err));
                    expect().assertFail();
                    done();
                }
                console.debug("====>getAccountsByOwner 1200 data:" + JSON.stringify(data));
                expect(data[0].name).assertEqual("account_name_scene_single");
                expect(data[0].owner).assertEqual("com.example.actsscenegetallaccounts");
                console.debug("====>GetAccountsByOwner_1200 end====");
                done();
            }, TIMEOUT);
        });

        /*
        * @tc.number    : GetAccountsByOwner_1300
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : The parameter owner is a bundlename that does not exist
        */
        it('GetAccountsByOwner_1300', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1300 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            var nonexistentBundle = "com.example.actsgetallaccountsnonexistent";
            appAccountManager.getAccountsByOwner(nonexistentBundle, (err, data)=>{
                console.debug("====>getAccountsByOwner 1300 err:" + JSON.stringify(err));
                expect(err.code == 12400001).assertEqual(true);
                console.debug("====>GetAccountsByOwner_1300 end====");
                done();
            })
        });

        /*
        * @tc.number    : GetAccountsByOwner_1400
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : The parameter owner is a bundlename that does not exist
        */
        it('GetAccountsByOwner_1400', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1400 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            var nonexistentBundle = "com.example.actsgetallaccountsnonexistent";
            try{
                var data = await appAccountManager.getAccountsByOwner(nonexistentBundle);
                expect().assertFail();
                done();
            }
            catch(err){
                console.debug("====>getAccountsByOwner 1400 err:" + JSON.stringify(err));   
                expect(err.code == 12400001).assertEqual(true);
                console.debug("====>GetAccountsByOwner_1400 end====");
                done();
            }
        });

        /*
        * @tc.number    : GetAccountsByOwner_1500
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : Get account information after adding and deleting account
        */
        it('GetAccountsByOwner_1500', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1500 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            appAccountManager.createAccount("account_callback_delete", (err)=>{
                console.debug("====>add account 1500 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.getAccountsByOwner(SELFBUNDLE, (err, data)=>{
                    console.debug("====>getAccountsByOwner 1500 err:" + JSON.stringify(err));
                    console.debug("====>getAccountsByOwner 1500 data:" + JSON.stringify(data));
                    expect(err).assertEqual(null);
                    expect(data[0].name).assertEqual("account_callback_delete");
                    expect(data[0].owner).assertEqual("com.example.actsgetaccountsbyowner");
                    appAccountManager.removeAccount("account_callback_delete", (err)=>{
                        console.debug("====>delete account 1500 err:" + JSON.stringify(err));
                        expect(err).assertEqual(null);
                        appAccountManager.getAccountsByOwner(SELFBUNDLE, (err, data)=>{
                            console.debug("====>getAccountsByOwner 1500 err:" + JSON.stringify(err));
                            console.debug("====>getAccountsByOwner 1500 data:" + JSON.stringify(data));
                            expect(err).assertEqual(null);
                            expect(data.length).assertEqual(0);
                            console.debug("====>GetAccountsByOwner_1500 end====");
                            done();
                        })
                    });
                })
            });
        });

        /*
        * @tc.number    : GetAccountsByOwner_1600
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : Get account information after adding and deleting account
        */
        it('GetAccountsByOwner_1600', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1600 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            console.debug("====>getAccountsByOwner for clean====");
            try{
                var acclist = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>getAccountsByOwner err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>account list length: " + acclist.length);
            if(acclist.length > 0){
                for(var i = 0;i < acclist.length; i++){
                    await appAccountManager.removeAccount(acclist[i].name);
                }
            }
            console.debug("====>add account 1600 start====");
            await appAccountManager.createAccount("account_promise_delete");
            console.debug("====>first getAccountsByOwner 1600 start====");
            try{
                var data = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>getAccountsByOwner 1600 fail err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }       
            expect(data[0].name).assertEqual("account_promise_delete");
            expect(data[0].owner).assertEqual("com.example.actsgetaccountsbyowner");
            console.debug("====>delete account 1600 start====");
            await appAccountManager.removeAccount("account_promise_delete");  
            console.debug("====>second getAccountsByOwner 1600 start====");
            try{
                var dataDelete = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>second getAccountsByOwner 1600 fail err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }       
            expect(dataDelete.length).assertEqual(0);
            console.debug("====>GetAccountsByOwner_1600 end====");
            done();
        });

        /*
        * @tc.number    : GetAccountsByOwner_1700
        * @tc.name      : getAccountsByOwner callback
        * @tc.desc      : Get account information after adding an account with additional information and deleting an
        *                 account
        */
        it('GetAccountsByOwner_1700', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1700 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            appAccountManager.createAccount("account_callback_additional", createAccountOptions, (err)=>{
                console.debug("====>add account 1700 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.getAccountsByOwner(SELFBUNDLE, (err, data)=>{
                    console.debug("====>getAccountsByOwner 1700 err:" + JSON.stringify(err));
                    console.debug("====>getAccountsByOwner 1700 data:" + JSON.stringify(data));
                    expect(err).assertEqual(null);
                    expect(data[0].name).assertEqual("account_callback_additional");
                    expect(data[0].owner).assertEqual("com.example.actsgetaccountsbyowner");
                    appAccountManager.removeAccount("account_callback_additional", (err)=>{
                        console.debug("====>delete account 1700 err:" + JSON.stringify(err));
                        expect(err).assertEqual(null);
                        appAccountManager.getAccountsByOwner(SELFBUNDLE, (err, data)=>{
                            console.debug("====>getAccountsByOwner 1700 err:" + JSON.stringify(err));
                            console.debug("====>getAccountsByOwner 1700 data:" + JSON.stringify(data));
                            expect(err).assertEqual(null);
                            expect(data.length).assertEqual(0);
                            console.debug("====>GetAccountsByOwner_1700 end====");
                            done();
                        })
                    });
                })
            });
        });

        /*
        * @tc.number    : GetAccountsByOwner_1800
        * @tc.name      : getAccountsByOwner promise
        * @tc.desc      : Get account information after adding an account with additional information and deleting an
        *                 account
        */
        it('GetAccountsByOwner_1800', 0, async function (done) {
            console.debug("====>GetAccountsByOwner_1800 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            console.debug("====>getAccountsByOwner for clean====");
            try{
                var acclist = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>getAccountsByOwner err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>account list length: " + acclist.length);
            if(acclist.length > 0){
                for(var i = 0;i < acclist.length; i++){
                    await appAccountManager.removeAccount(acclist[i].name);
                }
            }
            console.debug("====>add account 1800 start====");
            await appAccountManager.createAccount("account_promise_additional", createAccountOptions);
            console.debug("====>first getAccountsByOwner 1800 start====");
            try{
                var data = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>getAccountsByOwner 1800 fail err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>first getAccountsByOwner 1800 data:" + JSON.stringify(data)); 
            expect(data[0].name).assertEqual("account_promise_additional");
            expect(data[0].owner).assertEqual("com.example.actsgetaccountsbyowner");
            console.debug("====>delete account 1800 start====");
            await appAccountManager.removeAccount("account_promise_additional");  
            console.debug("====>second getAccountsByOwner 1800 start====");
            try{
                var dataDelete = await appAccountManager.getAccountsByOwner(SELFBUNDLE);
            }
            catch(err){
                console.error("====>second getAccountsByOwner 1800 fail err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>second getAccountsByOwner 1800 data:" + JSON.stringify(data));
            expect(dataDelete.length).assertEqual(0);
            console.debug("====>GetAccountsByOwner_1800 end====");
            done();
        });
    })
}