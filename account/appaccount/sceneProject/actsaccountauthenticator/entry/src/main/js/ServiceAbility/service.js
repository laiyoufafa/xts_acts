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

var TAG = "[AccountTest]"
var authenticator = null
var accountLabels = {
    "zhangsan": ["male", "30-40", "level4"],
    "lisi": ["female"]
}
var accountCredentials = {
    "zhangsan": {
        "PIN": "123456",
        "NUMBER": "12356789"
    },
    "lisi": {
        "FACE": "X00001"
    }
}
var accountRemovability = {
    "zhangsan": false,
    "lisi": true
}
var properties = {}

class MyAuthenticator extends account_appAccount.Authenticator {
    
    addAccountImplicitly(authType, callerBundleName, options, callback) {
        console.log(TAG + "authType: " + authType + "callerBundleName: " + callerBundleName + ", options: " + JSON.stringify(options)) 
        let appAccountMgr = account_appAccount.createAppAccountManager();
        let newAccountName = "addNewAccountName"
        appAccountMgr.createAccount(newAccountName, (err) => {
            let authResult = {
                name: newAccountName,
                owner: "com.example.accountauthenticator"
            }
            callback.onResult(0, authResult);
        });
    }

    authenticate(name, authType, callerBundleName, options, callback) {
        console.log(TAG + "name: " + name + "authType: " + authType + "callerBundleName: " + callerBundleName + ", options: " + JSON.stringify(options))
        let appAccountMgr = account_appAccount.createAppAccountManager();
        appAccountMgr.createAccount(name, (err) => {
            callback.onResult(0, {
                name: name,
                authType: authType,
                token: "123456"
            });
        })
    }

    createAccountImplicitly(options, callback) {
        console.log(TAG + "options: " + JSON.stringify(options))
        let appAccountMgr = account_appAccount.createAppAccountManager();
        let newAccountName = "createNewAccountName"
        appAccountMgr.createAccount(newAccountName, (err) => {
            let authResult = {
                account: {
                    name: newAccountName,
                    owner: "com.example.accountauthenticator"
                }
            }
            callback.onResult(0, authResult);
        });
    }

    auth(name, authType, options, callback) {
        console.log(TAG + "name: " + name + "authType: " + authType + ", options: " + JSON.stringify(options))
        let authResult = {
            account: {
                name: name,
                owner: "com.example.accountauthenticator"
            },
            tokenInfo: {
                authType: "getSocialData",
                token: "xxxxxxxxx"
            }
        }
        callback.onResult(0, authResult);
    }

    verifyCredential(name, options, callback) {
        console.log(TAG + "name: " + name + ", options: " + JSON.stringify(options))
        if (name == "xiaoming") {
            callback.onRequestContinued()
            return
        }
        var credentialInfo = undefined
        try {
            credentialInfo = accountCredentials[name]
        } catch (err) {
            console.log(TAG + " no credential")
            callback.onResult(0, {"booleanResult": false})
            return
        }
        if (options.credentialType == undefined || options.credential == undefined) {
            callback.onRequestRedirected({
                bundleName: "com.example.accountauthenticator",
                abilityName: "VerifyAbility",
                parameters: {
                    credentialType: options.credentialType, credential: options.credential
                }
            })
            return
        }
        try {
            var credential = credentialInfo[options.credentialType.toUpperCase()]
            if (credential == options.credential) {
                callback.onResult(0, {"booleanResult": true})
            } else {
                callback.onResult(0, {"booleanResult": false})
            }
        } catch(err) {
            console.log(TAG + " check credential error");
            callback.onResult(0, {"booleanResult": false});
        }
    }

    checkAccountLabels(name, labels, callback) {
        console.log(TAG + "name: " + name + ", labels: " + JSON.stringify(labels) + ", callback: " + callback)
        if (labels.length == 0) {
            callback.onResult(0, {"booleanResult": true})
            return
        }
        var allLabels = []
        try {
            allLabels = accountLabels[name]
        } catch (err) {
            console.log("no labels")
            allLabels == undefined
        }
        if (allLabels == undefined || allLabels.length == 0) {
            callback.onResult(0, {"booleanResult": false})
            return
        }
        for (var i = 0; i < labels.length; ++i) {
            if (allLabels.indexOf(labels[i]) == -1) {
                callback.onResult(0, {"booleanResult": false})
                return
            }
        }
        callback.onResult(0, {"booleanResult": true})
    }

    setProperties(options, callback) {
        console.log(TAG + "options: " + JSON.stringify(options))
        callback.onResult(10016, {})
    }

    isAccountRemovable(name, callback) {
        console.log(TAG + "name: " + name)
        var isRemovable = false;
        try {
            isRemovable = accountRemovability[name]
        } catch (err) {
            console.log(TAG + "error: " + JSON.stringify(err))
        }
        callback.onResult(0, {"booleanResult": isRemovable})
    }
}

export default {
    onStart(want) {
        console.info('ServiceAbility onStart');
    },
    async onStop() {
        console.info('ServiceAbility onStop');
    },
    onConnect(want) {
        console.info('ServiceAbility onConnect');
        authenticator = new MyAuthenticator();
        return authenticator.getRemoteObject();
    },
    onReconnect(want) {
        console.info('ServiceAbility onReconnect');
    },
    onDisconnect() {
        console.info('ServiceAbility onDisconnect');
    },
    onCommand(want, restart, startId) {
        console.info('ServiceAbility onCommand');
    }
};