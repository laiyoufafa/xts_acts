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
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'

const NAMELIMIT = 512;
const LENGTHLIMIT = 1024;
const name = 'zhangsan'
const owner = 'com.example.accountauthenticator'
const createAccountOptions = {customData:{age:'12'}}
export default function ActsAccountAppAccess() {
    describe('ActsAccountAuthenticator', function () {

        function sleep(delay) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, delay)
            }).then(() => {
                console.info(`sleep #{time} over ...`)
            })
        }
        beforeAll(async function (done) {       
            await featureAbility.startAbility(
                {
                    want:
                    {
                        deviceId: "",
                        bundleName: "com.example.accountauthenticator",
                        abilityName: "com.example.accountauthenticator.MainAbility",
                        action: "action1",
                        parameters:
                        {},
                    },
                },
            )          
            await sleep(1500)     
            done();
        });
        beforeEach(async (done)=>{
            console.debug("====>afterEach start====");
            var appAccountManager = account.getAccountManager();
            var accounts = await appAccountManager.getAllAccountByOwner(owner)
            for (i=0;i<accounts.length;i++){
                var localName = accounts[i].name
                if(localName == 'zhangsan'){
                    await appAccountManager.removeAccount(localName)
                }
            }
            done();
        })
        /*
        * @tc.number    : ActsAccountCheckAccountLabels_0100
        * @tc.name      : Check Account Labels callback form
        * @tc.desc      : 
        */
        it('ActsAccountCheckAccountLabels_0100', 0, async function (done) {
            console.debug("====>ActsAccountCheckAccountLabels_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, createAccountOptions, (err)=>{
                console.debug("====>ActsAccountCheckAccountLabels_0100 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.checkAccountLabels(name, owner, ['level4'], (err, data)=>{
                    console.debug("====>ActsAccountCheckAccountLabels_0100 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>ActsAccountCheckAccountLabels_0100 data:" + JSON.stringify(data));                
                    appAccountManager.removeAccount(name, (err) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0100 removeAccount_err:" + JSON.stringify(err))
                        expect(err).assertEqual(null);
                        console.debug("====>ActsAccountCheckAccountLabels_0100 end====");
                        done();
                    })                
                });
            });
        });


        /*
        * @tc.number    : ActsAccountCheckAccountLabels_0200
        * @tc.name      : Check Account Labels callback form
        * @tc.desc      : 
        */

        it('ActsAccountCheckAccountLabels_0200', 0, async function (done) {
            console.debug("====>ActsAccountCheckAccountLabels_0200 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, (err)=>{
                console.debug("====>ActsAccountCheckAccountLabels_0200 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.checkAccountLabels(name, owner, ['20-30'], (err, data)=>{
                    console.debug("====>ActsAccountCheckAccountLabels_0200 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>ActsAccountCheckAccountLabels_0200 data:" + JSON.stringify(data));                
                    appAccountManager.removeAccount(name, (err) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0200 removeAccount_err:" + JSON.stringify(err))
                        expect(err).assertEqual(null);
                        console.debug("====>ActsAccountCheckAccountLabels_0200 end====");
                        done();
                    })
                });
            });
        });

        /*
        * @tc.number    : ActsAccountCheckAccountLabels_0300
        * @tc.name      : Check Account Labels callback form
        * @tc.desc      : 
        */

        it('ActsAccountCheckAccountLabels_0300', 0, async function (done) {
            console.debug("====>ActsAccountCheckAccountLabels_0300 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>start finish====");
            appAccountManager.createAccount('CheckAccountLabels_0300', (err)=>{
                console.debug("====>ActsAccountCheckAccountLabels_0300 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.checkAccountLabels('CheckAccountLabels_0300', owner, ['male'], (err, data)=>{
                    console.debug("====>ActsAccountCheckAccountLabels_0300 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>ActsAccountCheckAccountLabels_0300 data:" + JSON.stringify(data));    
                    expect(data).assertEqual(false)   
                    appAccountManager.removeAccount("CheckAccountLabels_0300", (err) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0300 removeAccount_err:" + JSON.stringify(err))
                        expect(err).assertEqual(null);
                        console.debug("====>ActsAccountCheckAccountLabels_0300 end====");
                        done();                     
                    })
                    
                });
            });
                
        }); 

        /*
        * @tc.number    : ActsAccountCheckAccountLabels_0400
        * @tc.name      : Check Account Labels promise form
        * @tc.desc      : 
        */

        it('ActsAccountCheckAccountLabels_0400', 0, async function (done) {
            console.debug("====>ActsAccountCheckAccountLabels_0400 start====");
            var appAccountManager = account.createAppAccountManager();
            await appAccountManager.createAccount(name, createAccountOptions).then((data) =>{
                console.debug("====>ActsAccountCheckAccountLabels_0400 add_account_success");
                appAccountManager.checkAccountLabels(name, owner, ['level4']).then((data) =>{
                    console.debug("====>ActsAccountCheckAccountLabels_0400 data:" + JSON.stringify(data));
                    appAccountManager.removeAccount(name).then((data) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0400 delete_account_success");
                        done();
                    }).catch((err) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0400 delete_account_err");
                    });                    
                }).catch((err) =>{
                    console.debug("====>ActsAccountCheckAccountLabels_0400 err:" + JSON.stringify(err))
                    expect().assertFail();
                    done();
                })
            }).catch((err) => {
                console.debug("====>ActsAccountCheckAccountLabels_0400 add_account_err:" + JSON.stringify(err))
                expect().assertFail();
                done();
            })
        });

        /*
        * @tc.number    : ActsAccountCheckAccountLabels_0500
        * @tc.name      : Check Account Labels promise form
        * @tc.desc      : 
        */

        it('ActsAccountCheckAccountLabels_0500', 0, async function (done) {
            console.debug("====>ActsAccountCheckAccountLabels_0500 start====");
            var appAccountManager = account.createAppAccountManager();
            await appAccountManager.createAccount(name, createAccountOptions).then((data) =>{
                console.debug("====>ActsAccountCheckAccountLabels_0500 add_account_success");
                appAccountManager.checkAccountLabels(name, owner, ['20-30']).then((data) =>{
                    console.debug("====>ActsAccountCheckAccountLabels_0500 data:" + JSON.stringify(data));
                    expect(account.Constants.KEY_REQUIRED_LABELS).assertEqual('requiredLabels')
                    expect(account.Constants.KEY_BOOLEAN_RESULT).assertEqual('booleanResult')
                    appAccountManager.removeAccount(name).then((data) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0500 delete_account_success");
                    }).catch((err) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0500 delete_account_err");
                    });
                    done()
                }).catch((err) =>{
                    console.debug("====>ActsAccountCheckAccountLabels_0500 err:" + JSON.stringify(err))
                    expect(typeof(err) != undefined).assertTrue();
                    done();
                })
            }).catch((err) => {
                console.debug("====>ActsAccountCheckAccountLabels_0500 add_account_err:" + JSON.stringify(err))
                expect().assertFail();
                done();
            })
        });

        /*
        * @tc.number    : ActsAccountCheckAccountLabels_0600
        * @tc.name      : Check Account Labels promise form
        * @tc.desc      : 
        */

        it('ActsAccountCheckAccountLabels_0600', 0, async function (done) {
            console.debug("====>ActsAccountCheckAccountLabels_0600 start====");
            var appAccountManager = account.createAppAccountManager();
            await appAccountManager.createAccount('CheckAccountLabels_0600', createAccountOptions).then((data) =>{
                console.debug("====>ActsAccountCheckAccountLabels_0600 add_account_success:" + JSON.stringify(data));
                appAccountManager.checkAccountLabels('CheckAccountLabels_0600', owner, ['male']).then((data) =>{
                    console.debug("====>ActsAccountCheckAccountLabels_0600 data:" + JSON.stringify(data));
                    appAccountManager.removeAccount('CheckAccountLabels_0600').then((data) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0600 delete_account_success");
                    }).catch((err) =>{
                        console.debug("====>ActsAccountCheckAccountLabels_0600 delete_account_err");
                    });
                    done()
                }).catch((err) =>{
                    console.debug("====>ActsAccountCheckAccountLabels_0600 err:" + JSON.stringify(err))
                    expect().assertFail();
                    done();
                })
            }).catch((err) => {
                console.debug("====>ActsAccountCheckAccountLabels_0600 add_account_err:" + JSON.stringify(err))
                expect().assertFail();
                done();
            })
        });

        /*
        * @tc.number    : ActsAccountCheckAppAccess_0100
        * @tc.name      : Check App Access callback form
        * @tc.desc      : 
        */

        it('ActsAccountCheckAppAccess_0100', 0, async function (done) {
            console.debug("====>ActsAccountCheckAppAccess_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount(name, (err)=>{
                console.debug("====>ActsAccountCheckAppAccess_0100 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.checkAppAccess(name, owner, (err, data)=>{
                    console.debug("====>ActsAccountCheckAppAccess_0100 first_err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    console.debug("====>ActsAccountCheckAppAccess_0100 first_data:" + JSON.stringify(data));
                    expect(data).assertEqual(false)
                    appAccountManager.setAppAccess(name, owner, true, (err, data) =>{
                        console.debug("====>ActsAccountCheckAppAccess_0100 enableAppAccess_err:" + JSON.stringify(err));
                        expect(err).assertEqual(null);
                        appAccountManager.checkAppAccess(name, owner, (err, data) =>{
                            console.debug("====>ActsAccountCheckAppAccess_0100 second_err:" + JSON.stringify(err));
                            expect(err).assertEqual(null);
                            expect(data).assertEqual(true)
                            appAccountManager.setAppAccess(name, owner, false, (err, data) =>{
                                console.debug("====>ActsAccountCheckAppAccess_0100 disableAppAccount_err:" + JSON.stringify(err));
                                expect(err).assertEqual(null);  
                                appAccountManager.checkAppAccess(name, owner,(err, data)=>{
                                    console.debug("====>ActsAccountCheckAppAccess_0100 third_err:" + JSON.stringify(err))
                                    expect(err).assertEqual(null)
                                    expect(data).assertEqual(false)
                                    try {
                                        appAccountManager.removeAccount(name)     
                                        console.debug('====>ActsAccountCheckAppAccess_0100 removeAccount_success')                  
                                        done();
                                    }
                                    catch{
                                        console.debug('====>ActsAccountCheckAppAccess_0100 removeAccount_err')
                                        expect().assertFail()
                                    }    
                                })
                                
                            })
                        })
                    })
                });
            }); 
        }); 


        /*
        * @tc.number    : ActsAccountCheckAppAccess_0200
        * @tc.name      : Check App Access promise form
        * @tc.desc      : 
        */

        it('ActsAccountCheckAppAccess_0200', 0, async function (done) {
            console.debug("====>ActsAccountCheckAppAccess_0200 start====");
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount(name, createAccountOptions).then((data) =>{
                console.debug("====>ActsAccountCheckAppAccess_0200 add_account_success:");
                appAccountManager.checkAppAccess(name, owner).then((data) =>{
                    console.debug("====>ActsAccountCheckAppAccess_0200 first_data:" + JSON.stringify(data));
                    expect(data).assertEqual(false);
                    appAccountManager.setAppAccess(name, owner, true).then((data) =>{
                        console.debug("====>ActsAccountCheckAppAccess_0200 enableAppAccess_success");
                        appAccountManager.checkAppAccess(name, owner).then((data) =>{
                            console.debug("====>ActsAccountCheckAppAccess_0200 second_data:" + JSON.stringify(data));
                            expect(data).assertEqual(true);
                            appAccountManager.setAppAccess(name, owner, false).then((data)=>{
                                console.debug("====>ActsAccountCheckAppAccess_0200 disabAppAccess_data:" + JSON.stringify(data));
                                appAccountManager.checkAppAccess(name, owner).then((data) =>{
                                    console.debug("====>ActsAccountCheckAppAccess_0200 third_data:" + JSON.stringify(data));
                                    expect(data).assertEqual(false);     
                                    try{
                                        appAccountManager.removeAccount(name)
                                        console.debug('====>ActsAccountCheckAppAccess_0200 removeAccount_success')
                                        done();
                                    }                               
                                    catch{
                                        console.debug('====>ActsAccountCheckAppAccess_0100 removeAccount_err')
                                        expect().assertFail()
                                    }                                
                                }).catch((err)=>{
                                    console.debug("====>ActsAccountCheckAppAccess_0200 third_err:" + JSON.stringify(err));
                                    expect().assertFail();
                                    done();
                                })
                            }).catch((err) =>{
                                console.debug("====>ActsAccountCheckAppAccess_0200 disableAppAccess_err:" + JSON.stringify(err));
                                expect().assertFail();
                                done();
                            })
                        }).catch((err) =>{
                            console.debug("====>ActsAccountCheckAppAccess_0200 second_err:" + JSON.stringify(err));
                            expect().assertFail();
                            done();
                        })
                    }).catch((err)=>{
                        console.debug("====>ActsAccountCheckAppAccess_0200 enableAppAccess_err:" + JSON.stringify(err));
                        expect().assertFail();
                        done();
                    })
                }).catch((err) =>{
                    console.debug("====>ActsAccountCheckAppAccess_0200 first_err:" + JSON.stringify(err));
                    expect().assertFail();
                    done();
                })
            }).catch((err) => {
                console.debug("====>ActsAccountCheckAppAccess_0200 createAccount_err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            })
                
        });


        /*
        * @tc.number    : ActsAccountDeleteCredential_0100
        * @tc.name      : Delete Account Credential callback form
        * @tc.desc      : 
        */

        it('ActsAccountDeleteCredential_0100', 0, async function (done) {
            console.debug("====>ActsAccountDeleteCredential_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, (err)=>{
                console.debug("====>ActsAccountDeleteCredential_0100 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.setCredential(name, "PIN", "credential1", (err)=>{
                    console.debug("====>ActsAccountDeleteCredential_0100 setAccountCredential_err:" + JSON.stringify(err));
                    expect(err).assertEqual(null);
                    appAccountManager.getCredential(name, "PIN", (err, data) =>{
                        console.debug("====>ActsAccountDeleteCredential_0100 getAccountCredential_err:" + JSON.stringify(err))
                        expect(err).assertEqual(null);
                        console.debug("====>ActsAccountDeleteCredential_0100 getAccountCredential_success:" + JSON.stringify(data));
                        appAccountManager.deleteCredential(name, "PIN", (err, data)=>{
                            console.debug("====>ActsAccountDeleteCredential_0100 deleteCredential_err:" + JSON.stringify(err));
                            expect(err).assertEqual(null);
                            console.debug("====>ActsAccountDeleteCredential_0100 deleteCredential_data:" + JSON.stringify(data));                             
                            expect(data).assertEqual(null);  
                            try{
                                appAccountManager.removeAccount(name)  
                                console.debug('====>ActsAccountDeleteCredential_0100 removeAccount_success')                          
                                done(); 
                            }
                            catch{
                                console.debug('====>ActsAccountDeleteCredential_0100 removeAccount_err')
                                expect().assertFail()
                                done();
                            }
                        })                   
                    })                
                });
            });            
        });

        /*
        * @tc.number    : ActsAccountDeleteCredential_0200
        * @tc.name      : Delete Account Credential promise form
        * @tc.desc      : 
        */

        it('ActsAccountDeleteCredential_0200', 0, async function (done) {
            console.debug("====>ActsAccountDeleteCredential_0200 start====");
            var appAccountManager = account.createAppAccountManager();
            appAccountManager.createAccount(name, createAccountOptions).then((data) =>{
                console.debug("====>ActsAccountDeleteCredential_0200 add_account_success");
                appAccountManager.setCredential(name, "PIN", "credential2").then(() =>{
                    console.debug("====>ActsAccountDeleteCredential_0200 setAccountCredential_success");
                    appAccountManager.getCredential(name,  "PIN").then((data) =>{
                        console.debug("====>ActsAccountDeleteCredential_0200 getAccountCredential_data:" + JSON.stringify(data));
                        appAccountManager.deleteCredential(name,  "PIN").then((data) =>{
                            console.debug("====>ActsAccountDeleteCredential_0200 data:" + JSON.stringify(data));                
                            try{
                                appAccountManager.removeAccount(name)
                                console.debug('====>ActsAccountDeleteCredential_0200 removeAccount_success')
                                done();
                            }                               
                            catch{
                                console.debug('====>ActsAccountDeleteCredential_0200 removeAccount_err')
                                expect().assertFail()
                            }                          
                        }).catch((err) =>{
                            console.debug("====>ActsAccountDeleteCredential_0200 err:" + JSON.stringify(err));
                            expect().assertFail();
                            done();
                        })
                    }).catch((err)=>{
                        console.debug("====>ActsAccountDeleteCredential_0200 getAccountCredential_err:" + JSON.stringify(err));
                        expect().assertFail();
                        done();
                    })
                }).catch((err) =>{
                    console.debug("====>ActsAccountDeleteCredential_0200 setAccountCredential_err:" + JSON.stringify(err));
                    expect().assertFail();
                    done();
                })
            }).catch((err) => {
                console.debug("====>ActsAccountDeleteCredential_0200 createAccount_err:" + JSON.stringify(err));
                expect().assertFail();
                done();
            })            
        });

        /*
        * @tc.number    : ActsAccountVerifyCredential_0100
        * @tc.name      : Verify Credential callback form, options
        * @tc.desc      : 
        */

        it('ActsAccountVerifyCredential_0100', 0, async function (done) {
            console.debug("====>ActsAccountVerifyCredential_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            var options = {credentialType: "PIN", credential: "123456"}
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, (err)=>{
                console.debug("====>ActsAccountVerifyCredential_0100 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.verifyCredential(name, owner, options, {
                onResult: async (resultCode, resultData)=>{
                    console.debug("====>ActsAccountVerifyCredential_0100 verifyCredential_resultcode:" + JSON.stringify(resultCode));
                    expect(resultCode).assertEqual(0)
                    console.debug("====>ActsAccountVerifyCredential_0100 verifyCredential_resultData:" + JSON.stringify(resultData));
                    expect(resultData.booleanResult).assertEqual(true) 
                    try{
                        await appAccountManager.removeAccount(name)
                        console.debug('====>ActsAccountVerifyCredential_0100 removeAccount_success')
                        done();
                    }                               
                    catch{
                        console.debug('====>ActsAccountVerifyCredential_0100 removeAccount_err')
                        expect().assertFail()
                    }    
                    done(); 
                    },
                onRequestRedirected:null,
                onRequestContinued: function(){ 
                    console.debug("====>ActsAccountVerifyCredential_0100 verifyCredential_onRequestContinued")
                    }   
                });
            });            
        });

        /*
        * @tc.number    : ActsAccountVerifyCredential_0200
        * @tc.name      : Verify Credential callback form
        * @tc.desc      : 
        */

        it('ActsAccountVerifyCredential_0200', 0, async function (done) {
            console.debug("====>ActsAccountVerifyCredential_0200 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, (err)=>{
                console.debug("====>ActsAccountVerifyCredential_0200 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.verifyCredential(name, owner, {
                    onResult: async (resultCode, resultData)=>{
                        console.debug("====>ActsAccountVerifyCredential_0200 verifyCredential_resultcode:" + JSON.stringify(resultCode));
                        expect(resultCode).assertEqual(0)
                        console.debug("====>ActsAccountVerifyCredential_0200 verifyCredential_resultData:" + JSON.stringify(resultData));
                        expect(resultData.booleanResult).assertEqual(false) 
                        try{
                            await appAccountManager.removeAccount(name)
                            console.debug('====>ActsAccountVerifyCredential_0200 removeAccount_success')
                            done();
                        }                               
                        catch{
                            console.debug('====>ActsAccountVerifyCredential_0200 removeAccount_err')
                            expect().assertFail()
                        }    
                        done(); 
                        },
                    onRequestRedirected:null,
                    onRequestContinued: function(){ 
                        console.debug("====>ActsAccountVerifyCredential_0200 verifyCredential_onRequestContinued")
                    }   
                });
            });            
        });

        /*
        * @tc.number    : ActsAccountSetAuthenticatorProperties_0100
        * @tc.name      : Verify Credential callback form, options
        * @tc.desc      : 
        */

        it('ActsAccountSetAuthenticatorProperties_0100', 0, async function (done) {
            console.debug("====>ActsAccountSetAuthenticatorProperties_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            var options = {credentialType: "PIN", credential: "123456"}
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, (err)=>{
                console.debug("====>ActsAccountSetAuthenticatorProperties_0100 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.setAuthenticatorProperties(owner, options, {
                onResult: async (resultCode, resultData)=>{
                    console.debug("====>ActsAccountSetAuthenticatorProperties_0100 setAuthenticatorProperties_resultcode:" + JSON.stringify(resultCode));
                    expect(resultCode).assertEqual(10016)
                    console.debug("====>ActsAccountSetAuthenticatorProperties_0100 setAuthenticatorProperties_resultData:" + JSON.stringify(resultData));
                    try{
                        await appAccountManager.removeAccount(name)
                        console.debug('====>ActsAccountSetAuthenticatorProperties_0100 removeAccount_success')
                        done();
                    }                               
                    catch{
                        console.debug('====>ActsAccountSetAuthenticatorProperties_0100 removeAccount_err')
                        expect().assertFail()
                    }    
                    done(); 
                    },
                    onRequestRedirected:null,
                    onRequestContinued: function(){ 
                        console.debug("====>ActsAccountSetAuthenticatorProperties_0100 verifyCredential_onRequestContinued")
                    }   
                });
            });            
        });

        /*
        * @tc.number    : ActsAccountSetAuthenticatorProperties_0200
        * @tc.name      : Verify Credential callback form
        * @tc.desc      : 
        */

        it('ActsAccountSetAuthenticatorProperties_0200', 0, async function (done) {
            console.debug("====>ActsAccountSetAuthenticatorProperties_0200 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, (err)=>{
                console.debug("====>ActsAccountSetAuthenticatorProperties_0200 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                appAccountManager.setAuthenticatorProperties(owner, {
                onResult: async (resultCode, resultData)=>{
                    console.debug("====>ActsAccountSetAuthenticatorProperties_0200 setAuthenticatorProperties_resultcode:" + JSON.stringify(resultCode));
                    expect(resultCode).assertEqual(10016)
                    console.debug("====>ActsAccountSetAuthenticatorProperties_0200 setAuthenticatorProperties_resultData:" + JSON.stringify(resultData));
                    try{
                        await appAccountManager.removeAccount(name)
                        console.debug('====>ActsAccountSetAuthenticatorProperties_0200 removeAccount_success')
                        done();
                    }                               
                    catch{
                        console.debug('====>ActsAccountSetAuthenticatorProperties_0200 removeAccount_err')
                        expect().assertFail()
                    }    
                    done(); 
                    },
                    onRequestRedirected:null,
                    onRequestContinued: function(){ 
                        console.debug("====>ActsAccountSetAuthenticatorProperties_0200 verifyCredential_onRequestContinued")
                    }   
                });
            });            
        });

        /*
        * @tc.number    : ActsAccountSelectAccountByOptions_0100
        * @tc.name      : selectAccountsByOptions callback form
        * @tc.desc      : 
        */

        it('ActsAccountSelectAccountByOptions_0100', 0, async function (done) {  
            console.debug("====>ActsAccountSelectAccountByOptions_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            var select_options = {allowedAccounts:[{"name":name,"owner":owner}]}
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, async (err)=>{
                console.debug("====>ActsAccountSelectAccountByOptions_0100 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                try {
                    var data = await appAccountManager.selectAccountsByOptions(select_options)
                    console.debug("====>ActsAccountSelectAccountByOptions_0100 data:" + JSON.stringify(data));
                    expect(data.length).assertEqual(1) 
                } catch(err) {
                    console.debug("====>ActsAccountSelectAccountByOptions_0100 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null)
                }
                try{
                    await appAccountManager.removeAccount(name)
                    console.debug('====>ActsAccountSelectAccountByOptions_0100 removeAccount_success')
                    done();
                }                               
                catch{
                    console.debug('====>ActsAccountSelectAccountByOptions_0100 removeAccount_err')
                    expect().assertFail()
                    done();
                }  
            });        
        });

        /*
        * @tc.number    : ActsAccountSelectAccountByOptions_0100
        * @tc.name      : selectAccountsByOptions callback form
        * @tc.desc      : 
        */

        it('ActsAccountSelectAccountByOptions_0200', 0, async function (done) {
            console.debug("====>ActsAccountSelectAccountByOptions_0200 start====");
            var appAccountManager = account.createAppAccountManager();
            var select_options = {allowedOwners: [owner]}
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, async (err)=>{
                console.debug("====>ActsAccountSelectAccountByOptions_0200 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                try {
                    var data = await appAccountManager.selectAccountsByOptions(select_options)
                    console.debug("====>ActsAccountSelectAccountByOptions_0200 data:" + JSON.stringify(data));
                    expect(data.length).assertEqual(3)                
                } catch(err) {
                    console.debug("====>ActsAccountSelectAccountByOptions_0200 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null)
                }
                try{
                    await appAccountManager.removeAccount(name)
                    console.debug('====>ActsAccountSelectAccountByOptions_0200 removeAccount_success')
                    done();
                }                               
                catch{
                    console.debug('====>ActsAccountSelectAccountByOptions_0200 removeAccount_err')
                    expect().assertFail()
                    done();
                }    
            });        
        });


        /*
        * @tc.number    : ActsAccountSelectAccountByOptions_0100
        * @tc.name      : selectAccountsByOptions callback form
        * @tc.desc      : 
        */

        it('ActsAccountSelectAccountByOptions_0300', 0, async function (done) {
            console.debug("====>ActsAccountSelectAccountByOptions_0300 start====");
            var appAccountManager = account.createAppAccountManager();
            var options = {requiredLabels: ["male", "30-40"]}
            console.debug("====>start finish====");
            appAccountManager.createAccount(name, async (err)=>{
                console.debug("====>ActsAccountSelectAccountByOptions_0300 add_account_err:" + JSON.stringify(err));
                expect(err).assertEqual(null);
                try {
                    var data = await appAccountManager.selectAccountsByOptions(options)
                    console.debug("====>ActsAccountSelectAccountByOptions_0300 data:" + JSON.stringify(data));
                    expect(data.length).assertEqual(1)                
                } catch(err) {
                    console.debug("====>ActsAccountSelectAccountByOptions_0300 err:" + JSON.stringify(err));
                    expect(err).assertEqual(null)
                }
                try{
                    await appAccountManager.removeAccount(name)
                    console.debug('====>ActsAccountSelectAccountByOptions_0300 removeAccount_success')
                    done();
                }                               
                catch{
                    console.debug('====>ActsAccountSelectAccountByOptions_0300 removeAccount_err')
                    expect().assertFail()
                    done();
                }    
            });        
        }); 
        
        /*
        * @tc.number    : ActsAccountCreateAccountImplicitly_0100
        * @tc.name      : createAccountImplicitly callback form, options
        * @tc.desc      : 
        */

        it('ActsAccountCreateAccountImplicitly_0100', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccountImplicitly_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            var options = {authType: "PIN", requiredLabels:['male', '30-40'], parameters: ['sex', 'age']}
            console.debug("====>start finish====");
            appAccountManager.createAccountImplicitly("com.example.accountauthenticator", options, {
                onResult: async (resultCode, resultData)=>{
                    console.debug("====>ActsAccountCreateAccountImplicitly_0100 resultcode:" + JSON.stringify(resultCode));
                    expect(resultCode).assertEqual(0)
                    console.debug("====>ActsAccountCreateAccountImplicitly_0100 resultData:" + JSON.stringify(resultData));
                    expect(resultData.account.name).assertEqual("createNewAccountName") 
                    expect(resultData.account.owner).assertEqual("com.example.accountauthenticator")
                    done();
                    },
                onRequestRedirected:null,
                onRequestContinued: function(){ 
                    console.debug("====>ActsAccountCreateAccountImplicitly_0100 onRequestContinued")
                    }  
            });            
        });

        /*
        * @tc.number    : ActsAccountCreateAccountImplicitly_0200
        * @tc.name      : createAccountImplicitly callback form, options
        * @tc.desc      : 
        */

        it('ActsAccountCreateAccountImplicitly_0200', 0, async function (done) {
            console.debug("====>ActsAccountCreateAccountImplicitly_0100 start====");
            var appAccountManager = account.createAppAccountManager();
            console.debug("====>start finish====");
            appAccountManager.createAccountImplicitly("com.example.accountauthenticator", {
                onResult: async (resultCode, resultData)=>{
                    console.debug("====>ActsAccountCreateAccountImplicitly_0200 resultcode:" + JSON.stringify(resultCode));
                    expect(resultCode).assertEqual(0)
                    console.debug("====>ActsAccountCreateAccountImplicitly_0200 resultData:" + JSON.stringify(resultData));
                    expect(resultData.account.name).assertEqual("createNewAccountName") 
                    expect(resultData.account.owner).assertEqual("com.example.accountauthenticator")
                    done();
                    },
                onRequestRedirected:null,
                onRequestContinued: function(){ 
                    console.debug("====>ActsAccountCreateAccountImplicitly_0200 onRequestContinued")
                    }  
            });            
        });
    })
}