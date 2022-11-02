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
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'

const NAMELIMIT = 512;
const LENGTHLIMIT = 1024;
const ERR_PARAMETER_CHECK_FAILD =401
const ERR_INVALID_PARAMETER = 12300002
const ERR_ACCOUNT_EXIST = 12300008
const createAccountOptions = {customData:{age:'12'}} //k and v length 1024 ,k and v size 1024
const createAccountOptionsDiff = {customData:{sex:'male'}}
export default function ActsAccountCreateAccount() {
    describe('ActsAccountCreateAccount', function () {

        /*
        * @tc.number    : ActsAccountCreateAccount_0100
        * @tc.name      : Add account callback form
        * @tc.desc      : Add account in callback form without additional information
        */
        it('ActsAccountCreateAccount_0100', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            appAccountManager.createAccount("account_name_callback_first", (err)=>{
                console.debug("====>add account ActsAccountCreateAccount_0100 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.removeAccount("account_name_callback_first", (err)=>{
                    console.debug("====>delete Account ActsAccountCreateAccount_0100 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>ActsAccountCreateAccount_0100 end====");
                    done();
                });
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_0200
        * @tc.name      : Add account promise form
        * @tc.desc      : Add account in promise form without additional information
        */
        it('ActsAccountCreateAccount_0200', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0200 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            console.debug("====>add account start====");
            try{
                await appAccountManager.createAccount("account_name_promise_first");
            }
            catch(err){
                console.error("====>add account fail err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>delete account start====");
            await appAccountManager.removeAccount("account_name_promise_first");
            console.debug("====>ActsAccountCreateAccount_0200 end====");
            done();   
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_0300
        * @tc.name      : Add account callback form
        * @tc.desc      : Add account in callback form with additional information
        */
        it('ActsAccountCreateAccount_0300', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0300 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            appAccountManager.createAccount("account_name_callback_second", createAccountOptions, (err)=>{
                console.debug("====>add account ActsAccountCreateAccount_0300 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.removeAccount("account_name_callback_second", (err)=>{
                    console.debug("====>delete Account ActsAccountCreateAccount_0300 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>ActsAccountCreateAccount_0300 end====");
                    done();
                });
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_0400
        * @tc.name      : Add account promise form
        * @tc.desc      : Add account in promise form with additional information
        */
        it('ActsAccountCreateAccount_0400', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0400 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>creat finish====");
            console.debug("====>add account start====");
            try{
                await appAccountManager.createAccount("account_name_promise_second", createAccountOptions);
            }
            catch(err){
                console.error("====>add account fail err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>delete account start====");
            await appAccountManager.removeAccount("account_name_promise_second");
            console.debug("====>ActsAccountCreateAccount_0400 end====");
            done();
        });


        /*
        * @tc.number    : ActsAccountCreateAccount_0500
        * @tc.name      : Add account callback form
        * @tc.desc      : Repeatedly add the same name account and the same additional information
        */
        it('ActsAccountCreateAccount_0500', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0500 start====");
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount("account_name_callback_third", createAccountOptions, (err)=>{
                console.debug("====>add account first time ActsAccountCreateAccount_0500 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.createAccount("account_name_callback_third", createAccountOptions, (err)=>{
                    console.debug("====>add account second time ActsAccountCreateAccount_0500 err:" + JSON.stringify(err));
                    expect(err.code).assertEqual(ERR_ACCOUNT_EXIST);
                    appAccountManager.removeAccount("account_name_callback_third", (err)=>{
                        console.debug("====>delete Account ActsAccountCreateAccount_0500 err:" + JSON.stringify(err));
                        expect(err).assertEqual(null);
                        console.debug("====>ActsAccountCreateAccount_0500 end====");
                        done();
                    });
                });
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_0600
        * @tc.name      : Add account promise form
        * @tc.desc      : Repeatedly add the same name account and the same additional information
        */
        it('ActsAccountCreateAccount_0600', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0600 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>add account for the first time ActsAccountCreateAccount_0600====");
            await appAccountManager.createAccount("account_name_promise_third", createAccountOptions);
            console.debug("====>add account for the second time ActsAccountCreateAccount_0600 start====");
            try{
                await appAccountManager.createAccount("account_name_promise_third", createAccountOptions);
            }
            catch(err){
                console.debug("====>add account for the second time 0600 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(ERR_ACCOUNT_EXIST);
                await appAccountManager.removeAccount("account_name_promise_third");
                console.debug("====>ActsAccountCreateAccount_0600 end====");
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_0700
        * @tc.name      : Add account callback form
        * @tc.desc      : The account name exceeds the length limit of 512 characters
        */
        it('ActsAccountCreateAccount_0700', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0700 start====");
            var limitAccountName = '';
            for (var i = 0; i < NAMELIMIT + 1; i++) {
                limitAccountName += 't';
            }
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount(limitAccountName, createAccountOptions, (err)=>{
                console.debug("====>add account ActsAccountCreateAccount_0700 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(ERR_INVALID_PARAMETER);
                console.debug("====>ActsAccountCreateAccount_0700 end====");
                done();
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_0800
        * @tc.name      : Add account promise form
        * @tc.desc      : The account name exceeds the length limit of 512 characters
        */
        it('ActsAccountCreateAccount_0800', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0800 start====");
            var limitAccountName = '';
            for (var i = 0; i < NAMELIMIT + 1; i++) {
                limitAccountName += 'n';
            }
            var appAccountManager = account.createAppAccountManager();
            try{
                await appAccountManager.createAccount(limitAccountName, createAccountOptions);
                expect().assertFail();
                done();
            }
            catch(err){
                console.debug("====>add account ActsAccountCreateAccount_0800 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(ERR_INVALID_PARAMETER);
                console.debug("====>ActsAccountCreateAccount_0800 end====");
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_0900
        * @tc.name      : Add account callback form
        * @tc.desc      : Additional information exceeds the length limit of 1024 characters
        */
        it('ActsAccountCreateAccount_0900', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_0900 start====");
            var limitAccountExtra = '';
            for (var i = 0; i < LENGTHLIMIT + 1; i++) {
                limitAccountExtra += 't';
            }
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount("account_name_callback_fifth", {customData:{age:limitAccountExtra}}, (err)=>{
                console.debug("====>add account ActsAccountCreateAccount_0900 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(ERR_INVALID_PARAMETER);
                console.debug("====>ActsAccountCreateAccount_0900 end====");
                done();
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1000
        * @tc.name      : Add account promise form
        * @tc.desc      : Additional information exceeds the length limit of 1024 characters
        */
        it('ActsAccountCreateAccount_1000', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1000 start====");
            var limitAccountExtra = '';
            for (var i = 0; i < LENGTHLIMIT + 1; i++) {
                limitAccountExtra += 'e';
            }
            var appAccountManager = account.createAppAccountManager();
            try{
                await appAccountManager.createAccount("account_name_promise_fifth", {customData:{[limitAccountExtra]:'12'}});
            }
            catch(err){
                console.debug("====>add account ActsAccountCreateAccount_1000 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(ERR_INVALID_PARAMETER);
                console.debug("====>ActsAccountCreateAccount_1000 end====");
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1100
        * @tc.name      : Add account callback form
        * @tc.desc      : The account name is an empty string
        */
        it('ActsAccountCreateAccount_1100', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1100 start====");
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount("", createAccountOptions, (err)=>{
                console.debug("====>add account ActsAccountCreateAccount_1100 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(ERR_INVALID_PARAMETER);
                console.debug("====>ActsAccountCreateAccount_1100 end====");
                done();
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1200
        * @tc.name      : Add account promise form
        * @tc.desc      : The account name is an empty string
        */
        it('ActsAccountCreateAccount_1200', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1200 start====");
            console.debug("====>ActsAccountCreateAccount_1200 add account start====");
            var appAccountManager = account.createAppAccountManager();
            try{
                await appAccountManager.createAccount("", createAccountOptions);
            }
            catch(err){
                console.debug("====>add account ActsAccountCreateAccount_1200 err:"+ JSON.stringify(err));
                expect(err.code).assertEqual(ERR_INVALID_PARAMETER);
                console.debug("====>ActsAccountCreateAccount_1200 end====");
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1300
        * @tc.name      : Add account callback form
        * @tc.desc      : Additional information is an empty string
        */
        it('ActsAccountCreateAccount_1300', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1300 start====");
            var appAccountManager = account.createAppAccountManager();
            try{
                appAccountManager.createAccount("account_name_callback_seventh", "", (err)=>{
                   expect().assertFail();
                   done();
                });
            }catch(err){
                expect(err.code).assertEqual(401);
                console.debug("====>ActsAccountCreateAccount_1300 end====");
                done();
            }            
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1400
        * @tc.name      : Add account promise form
        * @tc.desc      : Additional information is an empty string
        */
        it('ActsAccountCreateAccount_1400', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1400 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>add account ActsAccountCreateAccount_1400 start====");
            try{
                await appAccountManager.createAccount("account_name_promise_seventh", "");
            }
            catch(err){
                console.error("====>add account ActsAccountCreateAccount_1400 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(401);
                done();
            }
            console.debug("====>delete account ActsAccountCreateAccount_1400 start====");
            await appAccountManager.removeAccount("account_name_promise_seventh");
            done();
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1500
        * @tc.name      : Add account callback form
        * @tc.desc      : The account name is a special character such as a space
        */
        it('ActsAccountCreateAccount_1500', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1500 start====");
            var appAccountManager = account.createAppAccountManager();
            var specialStr = " ";
            try{
                appAccountManager.createAccount(specialStr, createAccountOptions, (err)=>{
                    expect(err.code == 12300002).assertEqual(true);
                    console.debug("====>ActsAccountCreateAccount_1500 end====");
                    done();
                });
            }catch(err){
                expect().assertFail();
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1600
        * @tc.name      : Add account promise form
        * @tc.desc      : The account name is a special character such as a space
        */
        it('ActsAccountCreateAccount_1600', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1600 start====");
            var appAccountManager = account.createAppAccountManager();
            var specialStr = " ";
            try{
                await appAccountManager.createAccount(specialStr, createAccountOptions);
                expect().assertFail();                
                done();
            }
            catch(err){
                console.debug("====>add Account ActsAccountCreateAccount_1600 err:" + JSON.stringify(err));
                expect(err.code == 12300002).assertEqual(true);
                console.debug("====>ActsAccountCreateAccount_1600 end====");
                done();
            }
        });


        /*
        * @tc.number    : ActsAccountCreateAccount_1700
        * @tc.name      : Add account callback form
        * @tc.desc      : The account name is a special string
        */
        it('ActsAccountCreateAccount_1700', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1700 start====");
            var appAccountManager = account.createAppAccountManager();
            var specialStr = "#@$%^&*()_+!<>~?,./[]abcdefgABCDEFG1234567890";
            appAccountManager.createAccount(specialStr, createAccountOptions, (err)=>{
                console.debug("====>add account ActsAccountCreateAccount_1700 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.removeAccount(specialStr, (err)=>{
                    console.debug("====>delete Account ActsAccountCreateAccount_1700 err" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>ActsAccountCreateAccount_1700 end====");
                    done();
                });
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1800
        * @tc.name      : Add account promise form
        * @tc.desc      : The account name is a special string
        */
        it('ActsAccountCreateAccount_1800', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1800 start====");
            var appAccountManager = account.createAppAccountManager();
            var specialStr = "#@$%^&*()_+!<>~?,./[]abcdefgABCDEFG1234567890";
            console.debug("====>add account ActsAccountCreateAccount_1800====");
            try{
                await appAccountManager.createAccount(specialStr, createAccountOptions);
            }
            catch(err){
                console.error("====>add Account ActsAccountCreateAccount_1800 err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>delete account ActsAccountCreateAccount_1800====");
            await appAccountManager.removeAccount(specialStr);
            console.debug("====>ActsAccountCreateAccount_1800 end====");
            done();
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_1900
        * @tc.name      : Add account callback form
        * @tc.desc      : Additional information is a special character such as a space
        */
        it('ActsAccountCreateAccount_1900', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_1900 start====");
            var appAccountManager = account.createAppAccountManager();
            var specialStr = " ";
            try{
                appAccountManager.createAccount("account_name_callback_tenth", specialStr, (err)=>{
                   expect().assertFail();
                   done();
                });
            }catch(err){
                expect(err.code).assertEqual(401);
                console.debug("====>ActsAccountCreateAccount_1900 end====");
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2000
        * @tc.name      : Add account promise form
        * @tc.desc      : Additional information is a special character such as a space
        */
        it('ActsAccountCreateAccount_2000', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2000 start====");
            var appAccountManager = account.createAppAccountManager();
            var specialStr = " ";
            console.debug("====>add account ActsAccountCreateAccount_2000====");
            try{
                await appAccountManager.createAccount("account_name_promise_tenth", specialStr);
            }
            catch(err){
                console.error("====>add Account ActsAccountCreateAccount_2000 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(401);
                done();
            }
            console.debug("====>delete account ActsAccountCreateAccount_2000====");
            await appAccountManager.removeAccount("account_name_promise_tenth");
            console.debug("====>ActsAccountCreateAccount_2000 end====");
            done();
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2100
        * @tc.name      : Add account callback form
        * @tc.desc      : Additional information is a special string
        */
        it('ActsAccountCreateAccount_2100', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2100 start====");
            var appAccountManager = account.createAppAccountManager();
            var specialStr = "#@$%^&*()_+!<>~?,./[]abcdefgABCDEFG1234567890";
            try{
                appAccountManager.createAccount("account_extraInfo_callback_eleventh", specialStr, (err)=>{
                   expect().assertFail();
                   done();
                });
            }catch(err){
                expect(err.code).assertEqual(401);
                console.debug("====>ActsAccountCreateAccount_2100 end====");
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2200
        * @tc.name      : Add account promise form
        * @tc.desc      : Additional information is a special string
        */
        it('ActsAccountCreateAccount_2200', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2200 start====");
            var appAccountManager = account.createAppAccountManager();
            var specialStr = "#@$%^&*()_+!<>~?,./[]abcdefgABCDEFG1234567890";
            console.debug("====>add account ActsAccountCreateAccount_2200====");
            try{
                await appAccountManager.createAccount("account_extraInfo_promise_eleventh", specialStr);
            }
            catch(err){
                console.error("====>add Account ActsAccountCreateAccount_2200 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(401);
                done();
            }
            console.debug("====>delete account ActsAccountCreateAccount_2200====");
            await appAccountManager.removeAccount("account_extraInfo_promise_eleventh");
            console.debug("====>ActsAccountCreateAccount_2200 end====");
            done();
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2300
        * @tc.name      : Add account callback form
        * @tc.desc      : Repeatedly add accounts with the same name and different additional information
        */
        it('ActsAccountCreateAccount_2300', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2300 start====");
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount("account_name_callback_same", createAccountOptions, (err)=>{
                console.debug("====>add account first time ActsAccountCreateAccount_2300 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.createAccount("account_name_callback_same", createAccountOptionsDiff, (err)=>{
                    console.debug("====>add account second time ActsAccountCreateAccount_2300 err:" + JSON.stringify(err));
                    expect(err.code).assertEqual(12300008);
                    appAccountManager.removeAccount("account_name_callback_same", (err)=>{
                        console.debug("====>delete Account ActsAccountCreateAccount_2300 err:" + JSON.stringify(err));
                        expect(err).assertEqual(null);
                        console.debug("====>ActsAccountCreateAccount_2300 end====");
                        done();
                    });
                });
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2400
        * @tc.name      : Add account promise form
        * @tc.desc      : Repeatedly add accounts with the same name and different additional information
        */
        it('ActsAccountCreateAccount_2400', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2400 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>add account for the first time ActsAccountCreateAccount_2400====");
            await appAccountManager.createAccount("account_name_promise_same", createAccountOptions);
            console.debug("====>add account for the second time ActsAccountCreateAccount_2400====");
            try{
                await appAccountManager.createAccount("account_name_promise_same", createAccountOptionsDiff);
            }
            catch(err){
                console.debug("====>add account for the second time err:" + JSON.stringify(err));
                expect(err.code).assertEqual(12300008);
                appAccountManager.removeAccount("account_name_promise_same"); 
                console.debug("====>ActsAccountCreateAccount_2400 end====");
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2500
        * @tc.name      : Add account callback form
        * @tc.desc      : The account name reaches the limit of 512 characters
        */
        it('ActsAccountCreateAccount_2500', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2500 start====");
            var limitName = '';
            for (var i = 0; i < NAMELIMIT; i++) {
                limitName += 't';
            }
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount(limitName, createAccountOptions, (err)=>{
                console.debug("====>add account ActsAccountCreateAccount_2500 err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.removeAccount(limitName, (err)=>{
                    console.debug("====>delete Account ActsAccountCreateAccount_2500 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>ActsAccountCreateAccount_2500 end====");
                    done();
                });
            });
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2600
        * @tc.name      : Add account promise form
        * @tc.desc      : The account name reaches the limit of 512 characters
        */
        it('ActsAccountCreateAccount_2600', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2600 start====");
            var nameLimit = '';
            for (var i = 0; i < NAMELIMIT; i++) {
                nameLimit += 't';
            }
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>add account ActsAccountCreateAccount_2600 start====");
            try{
                await appAccountManager.createAccount(nameLimit, createAccountOptions);
            }
            catch(err){
                console.error("====>add account ActsAccountCreateAccount_2600 err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            }
            console.debug("====>delete account ActsAccountCreateAccount_2600 start====");
            await appAccountManager.removeAccount(nameLimit);
            console.debug("====>ActsAccountCreateAccount_2600 end====");
            done();
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2700
        * @tc.name      : Add account callback form
        * @tc.desc      : Additional information reaches the limit of 1024 characters
        */
        it('ActsAccountCreateAccount_2700', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2700 start====");
            var limitExtra = '';
            for (var i = 0; i < LENGTHLIMIT; i++) {
                limitExtra += 't';
            }
            var appAccountManager = account.createAppAccountManager();
            try{
                appAccountManager.createAccount("account_extra_callback_limit", limitExtra, (err)=>{
                   expect().assertFail();
                   done();
                });
            }catch(err){
                expect(err.code).assertEqual(401);
                console.debug("====>ActsAccountCreateAccount_2700 end====");
                done();
            }
        });

        /*
        * @tc.number    : ActsAccountCreateAccount_2800
        * @tc.name      : Add account promise form
        * @tc.desc      : Additional information reaches the limit of 1024 characters
        */
        it('ActsAccountCreateAccount_2800', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccount_2800 start====");
            var extraLimit = '';
            for (var i = 0; i < LENGTHLIMIT; i++) {
                extraLimit += 't';
            }
            var appAccountManager = account.createAppAccountManager();
            try{
                await appAccountManager.createAccount("account_extra_promise_limit", extraLimit);
            }
            catch(err){
                console.error("====>add account ActsAccountCreateAccount_2800 err:" + JSON.stringify(err));
                expect(err.code).assertEqual(401);
                done();
            }
            console.debug("====>delete account ActsAccountCreateAccount_2800 start====");
            appAccountManager.removeAccount("account_extra_promise_limit");
            console.debug("====>ActsAccountCreateAccount_2800 end====");
            done();
        });
    })
}