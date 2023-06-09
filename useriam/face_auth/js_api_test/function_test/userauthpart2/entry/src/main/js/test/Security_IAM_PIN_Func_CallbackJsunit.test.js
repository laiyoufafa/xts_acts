/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import {describe, it, expect} from 'deccjsunit/index'
import userAuth from '@ohos.userauth'
import userIDM from '@ohos.useridm'
import pinAuth from '@ohos.pinauth'
import * as publicFC from './Publicfunction-n'

let UserIDM = userIDM.constructor()
let PinAuth = pinAuth.constructor()
let UserAuth = userAuth.constructor()

let AuthType = {
    PIN: 1,
    FACE: 2
}
let AuthSubType = {
    PIN_SIX: 10000,
    PIN_NUMBER: 10001,
    PIN_MIXED: 10002,
    FACE_2D: 20000,
    FACE_3D: 20001
}
let AuthTurstLevel = {
    ATL1: 10000,
    ATL2: 20000,
    ATL3: 30000,
    ATL4: 40000
}

let SetPropertyType = {
    PROCESS_ALGORITHM: 1,
}

let userID = {
    User1: 100,
    User2: 2,
    User3: 3,
    User4: 4,
    User5: 5
}

let ResultCode = {
    SUCCESS: 0,
    FAIL: 1,
    GENERAL_ERROR: 2,
    CANCELED: 3,
    TIMEOUT: 4,
    TYPE_NOT_SUPPORT: 5,
    TRUST_LEVEL_NOT_SUPPORT: 6,
    BUSY: 7,
    INVALID_PARAMETERS: 8,
    LOCKED: 9,
    NOT_ENROLLED: 10,
    Authfail: 14
}

let GetPropertyType = {
    AUTH_SUB_TYPE: 1,
    REMAIN_TIMES: 2,
    FREEZING_TIME: 3
}

let Inputerdata = new Uint8Array([1, 2, 3, 4, 5, 6]);
let Inputerdatan = new Uint8Array([1, 1, 1, 1, 1, 1]);
let Inputerdatanum = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);
let Inputerdatanumn = new Uint8Array([1, 1, 1, 1, 1, 1, 1, 1]);
let Inputerdatamix = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let Inputerdatamixn = new Uint8Array([1, 1, 1, 1, 1, 1, 1, 1, 1]);

let GetPropertyTypearray = new Array();
GetPropertyTypearray[0] = GetPropertyType.AUTH_SUB_TYPE;
GetPropertyTypearray[1] = GetPropertyType.FREEZING_TIME;
GetPropertyTypearray[2] = GetPropertyType.REMAIN_TIMES;

let GetPropertyRequestpin = {
    authType: AuthType.PIN,
    keys: GetPropertyTypearray
}

let GetPropertyRequestface = {
    authType: AuthType.FACE,
    keys: GetPropertyTypearray
}

let CredentialInfopinsix = {
    credType: AuthType.PIN,
    credSubType: AuthSubType.PIN_SIX,
    token: null
}

let CredentialInfopinnum = {
    credType: AuthType.PIN,
    credSubType: AuthSubType.PIN_NUMBER,
    token: null
}

let CredentialInfopinmix = {
    credType: AuthType.PIN,
    credSubType: AuthSubType.PIN_MIXED,
    token: null
}

let CredentialInfoface2d = {
    credType: AuthType.FACE,
    credSubType: AuthSubType.FACE_2D,
    token: null
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

describe('userauthTest', function () {

    it('Security_IAM_PIN_AddCred_Func_0101', 0, async function (done) {
        try {
            let registerresult = publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
            expect(true).assertEqual(registerresult);
            registerresult = publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
            expect(false).assertEqual(registerresult);
            publicFC.publicunRegisterInputer(PinAuth, function (data) {
                console.info("testFace Security_IAM_PIN_AddCred_Func_0101 publicunRegisterInputer unRegist = " + data)
            })
            done();
        } catch (e) {
            console.log("testFace Security_IAM_PIN_AddCred_Func_0101 fail " + e);
            expect(null).assertFail();
        }
    })

    it('Security_IAM_PIN_AddCred_Func_0102', 1, async function (done) {
        console.info('testFace Security_IAM_PIN_AddCred_Func_0102 start');
        try {
            let challenge;
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata);
            publicFC.publicOpenSession(UserIDM, function (data) {
                console.info('testFace Security_IAM_PIN_AddCred_Func_0102 publicOpenSession data = ' + data);
                challenge = data;
                publicFC.publicaddCredential(UserIDM, CredentialInfopinsix, function (data) {
                    console.info('testFace PIN_AddCred_Func_0102 callback data = ' + JSON.stringify(data));
                    let addcredresult101 = data.addCredresult;
                    console.info("testFace PIN_AddCred_Func_0102 addcredresult101 = " + addcredresult101);
                    expect(ResultCode.SUCCESS).assertEqual(addcredresult101);
                    let token;
                    console.info('testFace Security_IAM_PIN_AddCred_Func_0102 addSuccess');
                    publicFC.publicauthUser(UserAuth, userID.User1, challenge, AuthType.PIN, AuthTurstLevel.ATL1,
					function (data) {
                        let auth101 = data.authresult
                        console.info("testFace Security_IAM_PIN_AddCred_Func_0102 auth101 = " + auth101);
                        expect(ResultCode.SUCCESS).assertEqual(auth101);
                        publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                            console.info('testFace Security_IAM_PIN_AddCred_Func_0102 publicauth');
                            token = data.authextr.token;
                            expect(ResultCode.SUCCESS).assertEqual(data.authresult);
                            console.info("testFace Security_IAM_PIN_AddCred_Func_0102 token = " + token);
                            publicFC.publicdelUser(UserIDM, token, function (data) {
                                console.info("testFace PIN_AddCred_Func_0102 publicdelUser callback success");
                                let deluserresult = data.delUserresult;
                                console.info("testFace PIN_AddCred_Func_0102 deluserresult = " + deluserresult);
                                expect(ResultCode.SUCCESS).assertEqual(deluserresult);
                                publicFC.publicCloseSession(UserIDM, function (data) {
                                    console.info("testFace PIN_AddCred_Func_0102 CloseSession success data =" + data);
                                    publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                        console.info("testFace PIN_AddCred_Func_0102 unRegisterInputer = " + data);
                                        done();
                                    })
                                })
                            }, function (data) {
                            })
                        }, function (data) {
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("testaddCredential101 fail " + e);
            expect(null).assertFail();
        }
    })

    it('Security_IAM_PIN_AddCred_Func_0103', 1, async function (done) {
        console.info('testFace Security_IAM_PIN_AddCred_Func_0103 start');
        try {
            let challenge;
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_NUMBER, Inputerdatanum);
            publicFC.publicOpenSession(UserIDM, function (data) {
                console.info('testFace Security_IAM_PIN_AddCred_Func_0103 publicOpenSession data = ' + data);
                challenge = data;
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    console.info('testFace PIN_AddCred_Func_0103 callback data = ' + JSON.stringify(data));
                    let addcredresult101 = data.addCredresult;
                    console.info("testFace PIN_AddCred_Func_0103 addcredresult101 = " + addcredresult101);
                    expect(ResultCode.SUCCESS).assertEqual(addcredresult101);
                    let token;
                    console.info('testFace Security_IAM_PIN_AddCred_Func_0103 addSuccess');
                    publicFC.publicauthUser(UserAuth, userID.User1, challenge, AuthType.PIN, AuthTurstLevel.ATL1,
					function (data) {
                        let auth101 = data.authresult
                        console.info("testFace Security_IAM_PIN_AddCred_Func_0103 auth101 = " + auth101);
                        expect(ResultCode.SUCCESS).assertEqual(auth101);
                        publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                            console.info('testFace Security_IAM_PIN_AddCred_Func_0103 publicauth');
                            token = data.authextr.token;
                            expect(ResultCode.SUCCESS).assertEqual(data.authresult);
                            console.info("testFace Security_IAM_PIN_AddCred_Func_0103 token = " + token);
                            publicFC.publicdelUser(UserIDM, token, function (data) {
                                console.info("testFace Security_IAM_PIN_AddCred_Func_0103 publicdelUser");
                                let deluserresult = data.delUserresult;
                                console.info("testFace PIN_AddCred_Func_0103 deluserresult = " + deluserresult);
                                expect(ResultCode.SUCCESS).assertEqual(deluserresult);
                                publicFC.publicCloseSession(UserIDM, function (data) {
                                    console.info("testFace PIN_AddCred_Func_0103 publicCloseSession = " + data);
                                    publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                        console.info("testFace  PIN_AddCred_Func_0103 unRegister success = " + data);
                                        done();
                                    })
                                })
                            }, function (data) {
                            })
                        }, function (data) {
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("testaddCredential101 fail " + e);
            expect(null).assertFail();
        }
    })

    it('Security_IAM_PIN_AddCred_Func_0104', 1, async function (done) {
        console.info('testFace Security_IAM_PIN_AddCred_Func_0104 start');
        try {
            let challenge;
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdatamix);
            publicFC.publicOpenSession(UserIDM, function (data) {
                console.info('testFace Security_IAM_PIN_AddCred_Func_0104 publicOpenSession data = ' + data);
                challenge = data;
                publicFC.publicaddCredential(UserIDM, CredentialInfopinmix, function (data) {
                    console.info('testFace Security_IAM_PIN_AddCred_Func_0104 callback = ' + JSON.stringify(data));
                    let addcredresult101 = data.addCredresult;
                    console.info("testFace PIN_AddCred_Func_0104 addcredresult101 = " + addcredresult101);
                    expect(ResultCode.SUCCESS).assertEqual(addcredresult101);
                    let token;
                    console.info('testFace Security_IAM_PIN_AddCred_Func_0104 addSuccess');
                    publicFC.publicauthUser(UserAuth, userID.User1, challenge, AuthType.PIN, AuthTurstLevel.ATL1,
					function (data) {
                        let auth101 = data.authresult
                        console.info("testFace Security_IAM_PIN_AddCred_Func_0104 auth101 = " + auth101);
                        expect(ResultCode.SUCCESS).assertEqual(auth101);
                        publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1,
						function (data) {
                            console.info('testFace Security_IAM_PIN_AddCred_Func_0104 publicauth');
                            token = data.authextr.token;
                            expect(ResultCode.SUCCESS).assertEqual(data.authresult);
                            console.info("testFace Security_IAM_PIN_AddCred_Func_0104 token = " + token);
                            publicFC.publicdelUser(UserIDM, token, function (data) {
                                console.info("testFace Security_IAM_PIN_AddCred_Func_0104 publicdelUser callback");
                                let deluserresult = data.delUserresult;
                                console.info("testFace PIN_AddCred_Func_0104 publicdeluserresult = " + deluserresult);
                                expect(ResultCode.SUCCESS).assertEqual(deluserresult);
                                publicFC.publicCloseSession(UserIDM, function (data) {
                                    console.info("testFace PIN_AddCred_Func_0104 publicCloseSession = " + data);
                                    publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                        console.info("testFace PIN_AddCred_Func_0104 unRegister success = " + data);
                                        done();
                                    })
                                })
                            }, function (data) {
                            })
                        }, function (data) {
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("testaddCredential101 fail " + e);
            expect(null).assertFail();
        }j
    })

        it('Security_IAM_PIN_AddCred_Func_0105', 0, async function (done) {
            console.info('testFace Security_IAM_PIN_AddCred_Func_0105 start');
            try {
                publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdata);
                let challenge;
                let cancelresult;
                let token;
                cancelresult = publicFC.publiccancel(UserIDM, challenge);
                console.info("testFace Security_IAM_PIN_AddCred_Func_0105 cancelresult" + cancelresult);
                publicFC.publicOpenSession(UserIDM, function (data) {
                    challenge = data;
                    console.info("testFace Security_IAM_PIN_AddCred_Func_0105 challenge" + challenge);
                    let result1 = null;
                    publicFC.publicaddCredential(UserIDM, CredentialInfopinmix, async function (data) {
                        result1 = data.addCredresult;
                        console.info("testFace Security_IAM_PIN_AddCred_Func_0105 result1" + result1);
                        if(cancelresult == 0){
                            expect(ResultCode.CANCELED).assertEqual(result1);
                            publicFC.publicCloseSession(UserIDM, function (data) {
                                console.info("testFace Security_IAM_PIN_AddCred_Func_0105 closesession = " + data);
                                publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                    console.info("testFace Security_IAM_PIN_AddCred_Func_0105 unRegist = " + data);
                                    done();
                                })
                            })
                        }else if(cancelresult == 1){
                            expect(ResultCode.SUCCESS).assertEqual(result1);
                            publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1,
                                function (data) {
                                    console.info('testFace PIN_AddCred_Func_0105 publicauth'+ JSON.stringify(data));
                                    token = data.authextr.token;
                                    console.info("testFace Security_IAM_PIN_AddCred_Func_0105 token = " + token);
                                    publicFC.publicdelUser(UserIDM, token, function (data) {
                                        console.info("testFace Security_IAM_PIN_AddCred_Func_0105 publicdelUser");
                                        let deluserresult = data.delUserresult;
                                        console.info("testFace PIN_AddCred_Func_0105 deluserresult="+ deluserresult);
                                        publicFC.publicCloseSession(UserIDM, function (data) {
                                            console.info("testFace PIN_AddCred_Func_0105 CloseSession = " + data);
                                            publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                                console.info("testFace PIN_AddCred_Func_0105 unRegister= " + data);
                                                done();
                                            })
                                        })
                                    }, function (data) {
                                    })
                                }, function (data) {
                                })
                        }
                    }, function (data) {
                    });
                    console.info("testFace Security_IAM_PIN_AddCred_Func_0105 publiccancel = " + cancelresult);
                })
            } catch (e) {
                console.log("Security_IAM_PIN_AddCred_Func_0105 fail " + e);
                expect(null).assertFail();
            }
        })

    //    it('Security_IAM_PIN_AddCred_Func_0106', 0, async function (done) {
    //        try {
    //            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdata)
    //            let challenge;
    //            publicFC.publicOpenSession(UserIDM, function (data) {
    //                challenge = data;
    //                console.info("testFace Security_IAM_PIN_AddCred_Func_0106 challenge" + challenge);
    //                let result2 = null;
    //                publicFC.publicaddCredential(UserIDM, CredentialInfopinmix, async function (data) {
    //                    result2 = data.addCredresult;
    //                    console.info("testFace Security_IAM_PIN_AddCred_Func_0106 result2" + result2);
    //                    await sleep(8000);
    //                    let cancelresult = publicFC.publiccancel(UserIDM, challenge);
    //                    expect(ResultCode.SUCCESS).assertEqual(cancelresult);
    //                    expect(ResultCode.CANCELED).assertEqual(result2);
    //                    publicFC.publicCloseSession(UserIDM, function (data) {
    //                        console.info("testFace Security_IAM_PIN_AddCred_Func_0106 closesession = " + data);
    //                        publicFC.publicunRegisterInputer(PinAuth, function (data) {
    //                            console.info("testFace Security_IAM_PIN_AddCred_Func_0106 unRegist = " + data);
    //                            done();
    //                        })
    //                    })
    //                }, function (data) {
    //                })
    //            })
    //        } catch (e) {
    //            console.log("testFace Security_IAM_PIN_AddCred_Func_0106 fail " + e);
    //            expect(null).assertFail();
    //        }
    //    })

    //    it('Security_IAM_PIN_AddCred_Func_0107', 0, async function (done) {
    //        console.info('testFace testaddCredentialcancel101 start');
    //        try {
    //
    //            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdata)
    //            let challenge
    //            publicFC.publicOpenSession(UserIDM, function (data) {
    //                challenge = data;
    //                console.info("Security_IAM_PIN_AddCred_Func_0107 challenge" + challenge);
    //                let result3 = null;
    //                publicFC.publicaddCredential(UserIDM, CredentialInfopinmix,async function (data) {
    //                    result3 = data.addCredresult;
    //                    console.info("Security_IAM_PIN_AddCred_Func_0107 result3" + result3);
    //                    await sleep(11000);
    //                    let cancelresult = publicFC.publiccancel(UserIDM, challenge);
    //                    expect(ResultCode.SUCCESS).assertEqual(cancelresult);
    //                    expect(ResultCode.CANCELED).assertEqual(result3);
    //                    publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1,function (data) {
    //                        let token = data.authextr.token;
    //                        console.info("Security_IAM_PIN_AddCred_Func_0107 token" + token);
    //                        publicFC.publicdelUser(UserIDM, token, function (data) {
    //                            let deluserresult = data.delUserresult;
    //                            console.info("Security_IAM_PIN_AddCred_Func_0107 deluserresult" + deluserresult);
    //                            publicFC.publicCloseSession(UserIDM, function (data) {
    //                                console.info("Security_IAM_PIN_AddCred_Func_0107 closesession = " + data);
    //                                publicFC.publicunRegisterInputer(PinAuth, function (data) {
    //                                    console.info("Security_IAM_PIN_AddCred_Func_0107 unRegist = " + data);
    //                                    done();
    //                                })
    //                            })
    //                        }, function (data) {
    //                        })
    //                    }, function (data) {
    //                    })
    //                }, function (data) {
    //                })
    //            })
    //        } catch (e) {
    //            console.log("Security_IAM_PIN_AddCred_Func_0107 fail " + e);
    //            expect(null).assertFail();
    //        }
    //    })


    it('Security_IAM_PIN_Auth_Func_0101', 3, async function (done) {
        console.info('testFace Security_IAM_PIN_Auth_Func_0101 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge1 = data;
                console.info("Security_IAM_PIN_Auth_Func_0101 challenge1 = " + challenge1);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    let addcredresult101 = data.addcredresult;
                    publicFC.publicauth(UserAuth, challenge1, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                        let auth101 = data
                        console.info("Security_IAM_PIN_Auth_Func_0101 auth1 = " + auth101.authresult);
                        let token = auth101.authextr.token
                        console.info("Security_IAM_PIN_Auth_Func_0101 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Auth_Func_0101 unRegist = " + data);
                            setTimeout(publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdatan), 500)
                            console.info("Security_IAM_PIN_Auth_Func_0101 challenge2 = " + challenge1);
                            await publicFC.publicauth(UserAuth, challenge1, AuthType.PIN, AuthTurstLevel.ATL1,
							function (data) {
                                let authresult = data.authresult
                                expect(ResultCode.Authfail).assertEqual(authresult);
                                publicFC.publicdelUser(UserIDM, token, function (data) {
                                    let delresult = data.delUserresult
                                    console.info("Security_IAM_PIN_Auth_Func_0101 delresult = " + delresult);
                                    publicFC.publicCloseSession(UserIDM, function (data) {
                                        console.info("Security_IAM_PIN_Auth_Func_0101 closesession = " + data);
                                        publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                            console.info("Security_IAM_PIN_Auth_Func_0101 unRegist = " + data);
                                            done();
                                        })
                                    })
                                }, function (data) {
                                })
                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("Security_IAM_PIN_Auth_Func_0101 fail " + e);
            expect(null).assertFail();
        }
    })


    it('Security_IAM_PIN_Auth_Func_0102', 3, async function (done) {
        console.info('testFace Security_IAM_PIN_Auth_Func_0102 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdatamix)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge1 = data;
                console.info("Security_IAM_PIN_Auth_Func_0102 challenge1 = " + challenge1);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    let addcredresult102 = data.addcredresult;
                    publicFC.publicauth(UserAuth, challenge1, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                        let auth102 = data
                        console.info("Security_IAM_PIN_Auth_Func_0102 auth102 = " + auth102);
                        let token = auth102.authextr.token
                        console.info("Security_IAM_PIN_Auth_Func_0102 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Auth_Func_0102 unRegist = " + data);
                            setTimeout(
							publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdatamixn), 500)
                            await publicFC.publicauth(UserAuth, challenge1, AuthType.PIN, AuthTurstLevel.ATL1,
							function (data) {
                                let authresult = data.authresult
                                expect(ResultCode.Authfail).assertEqual(authresult);
                                let deluserresult = publicFC.publicdelUser(UserIDM, token, function (data) {
                                    let delresult = data.delUserresult
                                    console.info("Security_IAM_PIN_Auth_Func_0102 delresult = " + delresult);
                                    publicFC.publicCloseSession(UserIDM, function (data) {
                                        console.info("Security_IAM_PIN_Auth_Func_0102 closesession = " + data);
                                        publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                            console.info("Security_IAM_PIN_Auth_Func_0102 unRegist = " + data);
                                            done();
                                        })
                                    })
                                }, function (data) {
                                })
                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("Security_IAM_PIN_Auth_Func_0102 fail " + e);
            expect(null).assertFail();
        }
    })


    it('Security_IAM_PIN_Auth_Func_0103', 3, async function (done) {
        console.info('testFace Security_IAM_PIN_Auth_Func_0103 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_NUMBER, Inputerdatanum)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge1 = data;
                console.info("Security_IAM_PIN_Auth_Func_0103 challenge1 = " + challenge1);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    let addcredresult103 = data.addcredresult;
                    publicFC.publicauth(UserAuth, challenge1, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                        let auth103 = data
                        console.info("Security_IAM_PIN_Auth_Func_0103 auth103 = " + auth103);
                        let token = auth103.authextr.token
                        console.info("Security_IAM_PIN_Auth_Func_0103 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Auth_Func_0103 unRegist = " + data);
                            setTimeout(
							publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_NUMBER, Inputerdatanumn), 500)
                            await publicFC.publicauth(UserAuth, challenge1, AuthType.PIN, AuthTurstLevel.ATL1,
							function (data) {
                                let authresult = data.authresult
                                expect(ResultCode.Authfail).assertEqual(authresult);
                                let deluserresult = publicFC.publicdelUser(UserIDM, token, function (data) {
                                    let delresult = data.delUserresult
                                    console.info("Security_IAM_PIN_Auth_Func_0103 delresult = " + delresult);
                                    publicFC.publicCloseSession(UserIDM, function (data) {
                                        console.info("Security_IAM_PIN_Auth_Func_0103 closesession = " + data);
                                        publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                            console.info("Security_IAM_PIN_Auth_Func_0103 unRegist = " + data);
                                            done();
                                        })
                                    })
                                }, function (data) {
                                })
                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("Security_IAM_PIN_Auth_Func_0103 fail " + e);
            expect(null).assertFail();
        }
    })


    it('Security_IAM_PIN_Auth_Func_0104', 3, async function (done) {
        console.info('testFace Security_IAM_PIN_Auth_Func_0104 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge1 = data;
                console.info("Security_IAM_PIN_Auth_Func_0104 challenge1 = " + challenge1);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    let addcredresult101 = data.addcredresult;
                    publicFC.publicauthUser(UserAuth, userID.User1, challenge1, AuthType.PIN, AuthTurstLevel.ATL1,
					function (data) {
                        let auth101 = data
                        console.info("Security_IAM_PIN_Auth_Func_0104 auth1 = " + auth101.authresult);
                        let token = auth101.authextr.token
                        console.info("Security_IAM_PIN_Auth_Func_0104 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Auth_Func_0104 unRegist = " + data);
                            setTimeout(publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdatan),500)
                            console.info("Security_IAM_PIN_Auth_Func_0104 challenge2 = " + challenge1);
                            await publicFC.publicauthUser(
							UserAuth, userID.User1, challenge1, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                                let authresult = data.authresult
                                expect(ResultCode.Authfail).assertEqual(authresult);
                                let deluserresult = publicFC.publicdelUser(UserIDM, token, function (data) {
                                    let delresult = data.delUserresult
                                    console.info("Security_IAM_PIN_Auth_Func_0104 delresult = " + delresult);
                                    publicFC.publicCloseSession(UserIDM, function (data) {
                                        console.info("Security_IAM_PIN_Auth_Func_0104 closesession = " + data);
                                        publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                            console.info("Security_IAM_PIN_Auth_Func_0104 unRegist = " + data);
                                            done();
                                        })
                                    })
                                }, function (data) {
                                })
                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("Security_IAM_PIN_Auth_Func_0104 fail " + e);
            expect(null).assertFail();
        }
    })


    it('Security_IAM_PIN_Auth_Func_0105', 3, async function (done) {
        console.info('testFace Security_IAM_PIN_Auth_Func_0105 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdatamix)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge1 = data;
                console.info("Security_IAM_PIN_Auth_Func_0105 challenge1 = " + challenge1);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    let addcredresult102 = data.addcredresult;
                    publicFC.publicauthUser(UserAuth, userID.User1, challenge1, AuthType.PIN, AuthTurstLevel.ATL1,
					function (data) {
                        let auth102 = data
                        console.info("Security_IAM_PIN_Auth_Func_0105 auth102 = " + auth102);
                        let token = auth102.authextr.token
                        console.info("Security_IAM_PIN_Auth_Func_0105 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Auth_Func_0105 unRegist = " + data);
                            setTimeout(
							publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdatamixn), 500)
                            await publicFC.publicauthUser(
							UserAuth, userID.User1, challenge1, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                                let authresult = data.authresult
                                expect(ResultCode.Authfail).assertEqual(authresult);
                                let deluserresult = publicFC.publicdelUser(UserIDM, token, function (data) {
                                    let delresult = data.delUserresult
                                    console.info("Security_IAM_PIN_Auth_Func_0105 delresult = " + delresult);
                                    publicFC.publicCloseSession(UserIDM, function (data) {
                                        console.info("Security_IAM_PIN_Auth_Func_0105 closesession = " + data);
                                        publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                            console.info("Security_IAM_PIN_Auth_Func_0105 unRegist = " + data);
                                            done();
                                        })
                                    })
                                }, function (data) {
                                })
                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("Security_IAM_PIN_Auth_Func_0105 fail " + e);
            expect(null).assertFail();
        }
    })


    it('Security_IAM_PIN_Auth_Func_0106', 3, async function (done) {
        console.info('testFace Security_IAM_PIN_Auth_Func_0106 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_NUMBER, Inputerdatanum)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge1 = data;
                console.info("Security_IAM_PIN_Auth_Func_0106 challenge1 = " + challenge1);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    let addcredresult103 = data.addcredresult;
                    publicFC.publicauthUser(
					UserAuth, userID.User1, challenge1, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                        let auth103 = data
                        console.info("Security_IAM_PIN_Auth_Func_0106 auth103 = " + auth103);
                        let token = auth103.authextr.token
                        console.info("Security_IAM_PIN_Auth_Func_0106 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Auth_Func_0106 unRegist = " + data);
                            setTimeout(
							publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_NUMBER, Inputerdatanumn), 500)
                            await publicFC.publicauthUser(
							UserAuth, userID.User1, challenge1, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                                let authresult = data.authresult
                                expect(ResultCode.Authfail).assertEqual(authresult);
                                let deluserresult = publicFC.publicdelUser(UserIDM, token, function (data) {
                                    let delresult = data.delUserresult
                                    console.info("Security_IAM_PIN_Auth_Func_0106 delresult = " + delresult);
                                    publicFC.publicCloseSession(UserIDM, function (data) {
                                        console.info("Security_IAM_PIN_Auth_Func_0106 closesession = " + data);
                                        publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                            console.info("Security_IAM_PIN_Auth_Func_0106 unRegist = " + data);
                                            done();
                                        })
                                    })
                                }, function (data) {
                                })
                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("Security_IAM_PIN_Auth_Func_0103 fail " + e);
            expect(null).assertFail();
        }
    })


    //    it('Security_IAM_PIN_Auth_Func_0107', 0, async function (done) {
    //        try {
    //            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
    //            publicFC.publicOpenSession(UserIDM, function (data) {
    //                let challenge = data;
    //                console.info("Security_IAM_PIN_Auth_Func_0107 challenge = " + challenge);
    //                publicFC.publicaddCredential(UserIDM, CredentialInfopinsix, function (data) {
    //                    let addcredresult101 = data.addCredresult;
    //                    console.info("Security_IAM_PIN_Auth_Func_0107 addcredresult101 = " + addcredresult101);
    //                    let result1 = null;
    //                    let contextID1 = null;
    //                    contextID1 = publicFC.publicauth(challenge, AuthType.PIN, AuthTurstLevel.ATL1,
    //                    async function (data) {
    //                        console.info("Security_IAM_PIN_Auth_Func_0107 contextID1 = " + contextID1);
    //                        result1 = data.authresult;
    //                        console.info("Security_IAM_PIN_Auth_Func_0107 result1 = " + result1);
    //                        await sleep(3000);
    //                        let cancelAuthresult = publicFC.publicgecancelAuth(UserAuth, contextID1)
    //                        console.info("Security_IAM_PIN_Auth_Func_0107 cancelAuthresult = " + cancelAuthresult);
    //                        expect(ResultCode.SUCCESS).assertEqual(cancelAuthresult);
    //                        expect(ResultCode.CANCELED).assertEqual(result1);
    //                        publicFC.publicCloseSession(UserIDM, function (data) {
    //                            console.info("Security_IAM_PIN_Auth_Func_0107 closesession = " + data);
    //                            publicFC.publicunRegisterInputer(PinAuth, function (data) {
    //                                console.info("Security_IAM_PIN_Auth_Func_0107 unRegist = " + data);
    //                                done();
    //                            })
    //                        })
    //                    }, function (data) {
    //                    })
    //                }, function (data) {
    //                })
    //            })
    //        } catch (e) {
    //            console.log("Security_IAM_PIN_Auth_Func_0107 fail " + e);
    //            expect(null).assertFail();
    //        }
    //    })

    //    it('Security_IAM_PIN_Auth_Func_0108', 0, async function (done) {
    //        try {
    //            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
    //            publicFC.publicOpenSession(UserIDM, function (data) {
    //                let challenge = data;
    //                console.info("Security_IAM_PIN_Auth_Func_0108 challenge = " + challenge);
    //                publicFC.publicaddCredential(UserIDM, CredentialInfopinsix, function (data) {
    //                    let addcredresult102 = data.addCredresult;
    //                    console.info("Security_IAM_PIN_Auth_Func_0108 addcredresult102 = " + addcredresult102);
    //                    let result2 = null;
    //                    let contextID2 = null;
    //                    contextID2 = publicFC.publicauth(challenge, AuthType.PIN, AuthTurstLevel.ATL1,
    //                    async function (data) {
    //                        console.info("Security_IAM_PIN_Auth_Func_0108 contextID2 = " + contextID2);
    //                        result2 = data.authresult;
    //                        console.info("Security_IAM_PIN_Auth_Func_0108 result2 = " + result2);
    //                        await sleep(8000);
    //                        let cancelAuthresult = publicFC.publicgecancelAuth(UserAuth, contextID2)
    //                        console.info("Security_IAM_PIN_Auth_Func_0108 cancelAuthresult = " + cancelAuthresult);
    //                        expect(ResultCode.SUCCESS).assertEqual(cancelAuthresult);
    //                        expect(ResultCode.CANCELED).assertEqual(result2);
    //                        publicFC.publicCloseSession(UserIDM, function (data) {
    //                            console.info("Security_IAM_PIN_Auth_Func_0108 closesession = " + data);
    //                            publicFC.publicunRegisterInputer(PinAuth, function (data) {
    //                                console.info("Security_IAM_PIN_Auth_Func_0108 unRegist = " + data);
    //                                done();
    //                            })
    //                        })
    //                    }, function (data) {
    //                    })
    //                }, function (data) {
    //                })
    //            })
    //        } catch (e) {
    //            console.log("Security_IAM_PIN_Auth_Func_0108 fail " + e);
    //            expect(null).assertFail();
    //        }
    //    })

    //    it('Security_IAM_PIN_Auth_Func_0109', 0, async function (done) {
    //        try {
    //
    //            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
    //            publicFC.publicOpenSession(UserIDM, function (data) {
    //                let challenge = data;
    //                console.info("Security_IAM_PIN_Auth_Func_0109 challenge = " + challenge);
    //                publicFC.publicaddCredential(UserIDM, CredentialInfopinsix, function (data) {
    //                    let addcredresult103 = data.addCredresult;
    //                    console.info("Security_IAM_PIN_Auth_Func_0109 addcredresult103 = " + addcredresult103);
    //                    let result3 = null;
    //                    let contextID3 = null;
    //                    contextID3 = publicFC.publicauth(challenge, AuthType.PIN, AuthTurstLevel.ATL1,
    //                    async function (data) {
    //                        console.info("Security_IAM_PIN_Auth_Func_0109 contextID3 = " + contextID3);
    //                        result3 = data.authresult;
    //                        console.info("Security_IAM_PIN_Auth_Func_0109 result3 = " + result3);
    //                        let token = data.authextr.token;
    //                        await sleep(11000);
    //                        let cancelAuthresult = publicFC.publicgecancelAuth(UserAuth, contextID3)
    //                        console.info("Security_IAM_PIN_Auth_Func_0109 cancelAuthresult = " + cancelAuthresult);
    //                        expect(ResultCode.SUCCESS).assertEqual(cancelAuthresult);
    //                        expect(ResultCode.CANCELED).assertEqual(result3);
    //                        publicFC.publicdelUser(UserIDM, token, function (data) {
    //                            let deluserresult = data.delUserresult
    //                            console.info("Security_IAM_PIN_Auth_Func_0109 deluserresult = " + deluserresult);
    //                            publicFC.publicCloseSession(UserIDM, function (data) {
    //                                console.info("Security_IAM_PIN_Auth_Func_0109 closesession = " + data);
    //                                publicFC.publicunRegisterInputer(PinAuth, function (data) {
    //                                    console.info("Security_IAM_PIN_Auth_Func_0109 unRegist = " + data);
    //                                    done();
    //                                })
    //                            })
    //                        }, function (data) {
    //                        })
    //                    }, function (data) {
    //                    })
    //                }, function (data) {
    //                })
    //            })
    //
    //        } catch (e) {
    //            console.log("testcancelauth103 fail " + e);
    //            expect(null).assertFail();
    //        }
    //    })

    //    it('Security_IAM_PIN_Auth_Func_0110', 0, async function (done) {
    //        try {
    //            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
    //            publicFC.publicOpenSession(UserIDM, function (data) {
    //                let challenge = data;
    //                console.info("testFace Security_IAM_PIN_Auth_Func_0110 challenge = " + challenge);
    //                publicFC.publicaddCredential(UserIDM, CredentialInfopinsix, function (data) {
    //                    let addcredresult101 = data.addCredresult;
    //                    console.info("testFace PIN_Auth_Func_0110 addcredresult101 = " + addcredresult101);
    //                    let result1 = null;
    //                    let contextID1 = null;
    //                    contextID1 = publicFC.publicauthUser(challenge, AuthType.PIN, AuthTurstLevel.ATL1,
    //                    async function (data) {
    //                        console.info("testFace Security_IAM_PIN_Auth_Func_0110 contextID1 = " + contextID1);
    //                        result1 = data.authresult;
    //                        console.info("testFace Security_IAM_PIN_Auth_Func_0110 result2 = " + result1);
    //                        await sleep(3000);
    //                        let cancelAuthresult = publicFC.publicgecancelAuth(UserAuth, contextID1)
    //                        console.info("testFace PIN_Auth_Func_0110 cancelAuthresult = " + cancelAuthresult);
    //                        expect(ResultCode.SUCCESS).assertEqual(cancelAuthresult);
    //                        expect(ResultCode.CANCELED).assertEqual(result1);
    //                        publicFC.publicCloseSession(UserIDM, function (data) {
    //                            console.info("testFace Security_IAM_PIN_Auth_Func_0110 closesession = " + data);
    //                            publicFC.publicunRegisterInputer(PinAuth, function (data) {
    //                                console.info("testFace Security_IAM_PIN_Auth_Func_0110 unRegist = " + data);
    //                                done();
    //                            })
    //                        })
    //                    }, function (data) {
    //                    })
    //                }, function (data) {
    //                })
    //            })
    //        } catch (e) {
    //            console.log("testFace Security_IAM_PIN_Auth_Func_0110 fail " + e);
    //            expect(null).assertFail();
    //        }
    //    })

    //    it('Security_IAM_PIN_Auth_Func_0111', 0, async function (done) {
    //        try {
    //            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
    //            publicFC.publicOpenSession(UserIDM, function (data) {
    //                let challenge = data;
    //                console.info("testFace Security_IAM_PIN_Auth_Func_0111 challenge = " + challenge);
    //                publicFC.publicaddCredential(UserIDM, CredentialInfopinsix, function (data) {
    //                    let addcredresult102 = data.addCredresult;
    //                    console.info("testFace PIN_Auth_Func_0111 addcredresult102 = " + addcredresult102);
    //                    let result2 = null;
    //                    let contextID2 = null;
    //                    contextID2 = publicFC.publicauthUser(challenge, AuthType.PIN, AuthTurstLevel.ATL1,
    //                    async function (data) {
    //                        console.info("testFace Security_IAM_PIN_Auth_Func_0111 contextID2 = " + contextID2);
    //                        result2 = data.authresult;
    //                        console.info("testFace Security_IAM_PIN_Auth_Func_0111 result2 = " + result2);
    //                        await sleep(8000);
    //                        let cancelAuthresult = publicFC.publicgecancelAuth(UserAuth, contextID2)
    //                        console.info("testFace PIN_Auth_Func_0111 cancelAuthresult = " + cancelAuthresult);
    //                        expect(ResultCode.SUCCESS).assertEqual(cancelAuthresult);
    //                        expect(ResultCode.CANCELED).assertEqual(result2);
    //                        publicFC.publicCloseSession(UserIDM, function (data) {
    //                            console.info("testFace Security_IAM_PIN_Auth_Func_0111 closesession = " + data);
    //                            publicFC.publicunRegisterInputer(PinAuth, function (data) {
    //                                console.info("testFace Security_IAM_PIN_Auth_Func_0111 unRegist = " + data);
    //                                done();
    //                            })
    //                        })
    //                    }, function (data) {
    //                    })
    //                }, function (data) {
    //                })
    //            })
    //        } catch (e) {
    //            console.log("testFace Security_IAM_PIN_Auth_Func_0111 fail " + e);
    //            expect(null).assertFail();
    //        }
    //    })

    //    it('Security_IAM_PIN_Auth_Func_0112', 0, async function (done) {
    //        try {
    //            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
    //            publicFC.publicOpenSession(UserIDM, function (data) {
    //                let challenge = data;
    //                console.info("testFace Security_IAM_PIN_Auth_Func_0112 challenge = " + challenge);
    //                publicFC.publicaddCredential(UserIDM, CredentialInfopinsix, function (data) {
    //                    let addcredresult103 = data.addCredresult;
    //                    console.info("testFace PIN_Auth_Func_0112 addcredresult103 = " + addcredresult103);
    //                    let result3 = null;
    //                    let contextID3 = null;
    //                    contextID3 = publicFC.publicauthUser(challenge, AuthType.PIN, AuthTurstLevel.ATL1,
    //                    async function (data) {
    //                        console.info("testFace Security_IAM_PIN_Auth_Func_0112 contextID3 = " + contextID3);
    //                        result3 = data.authresult;
    //                        console.info("testFace Security_IAM_PIN_Auth_Func_0112 result3 = " + result3);
    //                        let token = data.authextr.token;
    //                        await sleep(11000);
    //                        let cancelAuthresult = publicFC.publicgecancelAuth(UserAuth, contextID3)
    //                        console.info("testFace PIN_Auth_Func_0112 cancelAuthresult = " + cancelAuthresult);
    //                        expect(ResultCode.SUCCESS).assertEqual(cancelAuthresult);
    //                        expect(ResultCode.CANCELED).assertEqual(result3);
    //                        publicFC.publicdelUser(UserIDM, token, function (data) {
    //                            let deluserresult = data.delUserresult
    //                            console.info("testFace PIN_Auth_Func_0112 deluserresult = " + deluserresult);
    //                            publicFC.publicCloseSession(UserIDM, function (data) {
    //                                console.info("testFace Security_IAM_PIN_Auth_Func_0112 closesession = " + data);
    //                                publicFC.publicunRegisterInputer(PinAuth, function (data) {
    //                                    console.info("testFace Security_IAM_PIN_Auth_Func_0112 unRegist = " + data);
    //                                    done();
    //                                })
    //                            })
    //                        }, function (data) {
    //                        })
    //                    }, function (data) {
    //                    })
    //                }, function (data) {
    //                })
    //            })
    //        } catch (e) {
    //            console.log("testFace Security_IAM_PIN_Auth_Func_0112 fail " + e);
    //            expect(null).assertFail();
    //        }
    //    })

    it('Security_IAM_PIN_Update_Func_0101', 0, async function (done) {
        console.info('testFace Security_IAM_PIN_Update_Func_0101 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge = data;
                console.info("Security_IAM_PIN_Update_Func_0101 challenge = " + challenge);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinsix, function (data) {
                    let addcredresult101 = data.addcredresult;
                    console.info("Security_IAM_PIN_Update_Func_0101 addcredresult101 = " + addcredresult101);
                    publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                        let auth101 = data
                        console.info("Security_IAM_PIN_Update_Func_0101 auth101 = " + auth101);
                        let token = auth101.authextr.token
                        console.info("Security_IAM_PIN_Update_Func_0101 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Update_Func_0101 unRegist = " + data);
                            await setTimeout(
							publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_NUMBER, Inputerdatanum), 500)
                            CredentialInfopinnum.token = token
                            console.info("PIN_Update_Func_0101 Infopinnum.token = " + CredentialInfopinnum.token);
                            await publicFC.publicupdateCred(UserIDM, CredentialInfopinnum, function (data) {
                                let updateresult = data.updateCredresult;
                                console.info("Security_IAM_PIN_Update_Func_0101 updateresult = " + updateresult);
                                expect(ResultCode.SUCCESS).assertEqual(updateresult);
                                publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1,
								function (data) {
                                    auth101 = data
                                    console.info("Security_IAM_PIN_Update_Func_0101 auth101 = " + auth101);
                                    let token1 = auth101.authextr.token
                                    console.info("Security_IAM_PIN_Update_Func_0101 token1 = " + token1);
                                    publicFC.publicdelUser(UserIDM, token1, function (data) {
                                        console.info("PIN_Update_Func_0101 delUser result  = " + data.delUserresult);
                                        publicFC.publicCloseSession(UserIDM, function (data) {
                                            console.info("Security_IAM_PIN_Update_Func_0101 closesession = " + data);
                                            publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                                console.info("Security_IAM_PIN_Update_Func_0101 unRegist = " + data);
                                                done();
                                            })
                                        })
                                    }, function (data) {
                                    })
                                }, function (data) {
                                })

                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("testupdateCredential101 fail " + e);
            expect(null).assertFail();
        }
    })

    it('Security_IAM_PIN_Update_Func_0102', 3, async function (done) {
        console.info('testFace Security_IAM_PIN_Update_Func_0102 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_NUMBER, Inputerdatanum)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge = data;
                console.info("Security_IAM_PIN_Update_Func_0102 challenge = " + challenge);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    let addcredresult102 = data.addcredresult;
                    console.info("Security_IAM_PIN_Update_Func_0102 addcredresult102 = " + addcredresult102);
                    publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                        let auth102 = data
                        console.info("Security_IAM_PIN_Update_Func_0102 auth102 = " + auth102);
                        let token = auth102.authextr.token
                        console.info("Security_IAM_PIN_Update_Func_0102 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Update_Func_0102 unRegist = " + data);
                            await setTimeout(
							publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdatamix), 500)
                            console.info("Security_IAM_PIN_Update_Func_0102 challenge = " + challenge);
                            CredentialInfopinnum.token = token
                            console.info("PIN_Update_Func_0102 Infopinnum.token = " + CredentialInfopinnum.token);
                            await publicFC.publicupdateCred(UserIDM, CredentialInfopinnum, function (data) {
                                let updateresult = data.updateCredresult;
                                console.info("Security_IAM_PIN_Update_Func_0102 updateresult = " + updateresult);
                                expect(ResultCode.SUCCESS).assertEqual(updateresult);
                                publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1,
								function (data) {
                                    auth102 = data
                                    console.info("Security_IAM_PIN_Update_Func_0102 auth102 = " + auth102);
                                    let token2 = auth102.authextr.token
                                    console.info("Security_IAM_PIN_Update_Func_0102 token2 = " + token2);
                                    let deluserresult = publicFC.publicdelUser(UserIDM, token2, function (data) {
                                        publicFC.publicCloseSession(UserIDM, function (data) {
                                            console.info("Security_IAM_PIN_Update_Func_0102 closesession = " + data);
                                            publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                                console.info("Security_IAM_PIN_Update_Func_0102 unRegist = " + data);
                                                done();
                                            })
                                        })
                                    }, function (data) {
                                    })
                                }, function (data) {
                                })
                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })

                }, function (data) {
                })
            })
        } catch (e) {
            console.log("Security_IAM_PIN_Update_Func_0102 fail " + e);
            expect(null).assertFail();
        }
    })

    it('Security_IAM_PIN_Update_Func_0103', 3, async function (done) {
        console.info('testFace Security_IAM_PIN_Update_Func_0103 start');
        try {
            publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_MIXED, Inputerdatamix)
            publicFC.publicOpenSession(UserIDM, function (data) {
                let challenge = data;
                console.info("Security_IAM_PIN_Update_Func_0103 challenge = " + challenge);
                publicFC.publicaddCredential(UserIDM, CredentialInfopinnum, function (data) {
                    let addcredresult103 = data.addcredresult;
                    console.info("Security_IAM_PIN_Update_Func_0103 addcredresult103 = " + addcredresult103);
                    publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1, function (data) {
                        let auth103 = data
                        console.info("Security_IAM_PIN_Update_Func_0103 auth103 = " + auth103);
                        let token = auth103.authextr.token
                        console.info("Security_IAM_PIN_Update_Func_0103 token = " + token);
                        publicFC.publicunRegisterInputer(PinAuth, async function (data) {
                            console.info("Security_IAM_PIN_Update_Func_0103 unRegist = " + data);
                            await setTimeout(
							publicFC.publicRegisterInputer(PinAuth, AuthSubType.PIN_SIX, Inputerdata), 500)
                            console.info("Security_IAM_PIN_Update_Func_0103 challenge = " + challenge);
                            CredentialInfopinnum.token = token
                            console.info("PIN_Update_Func_0103 Infopinnum.token = " + CredentialInfopinnum.token);
                            await publicFC.publicupdateCred(UserIDM, CredentialInfopinnum, function (data) {
                                let updateresult = data.updateCredresult;
                                console.info("Security_IAM_PIN_Update_Func_0103 updateresult = " + updateresult);
                                expect(ResultCode.SUCCESS).assertEqual(updateresult);
                                publicFC.publicauth(UserAuth, challenge, AuthType.PIN, AuthTurstLevel.ATL1,
								function (data) {
                                    auth103 = data
                                    console.info("Security_IAM_PIN_Update_Func_0103 auth103 = " + auth103);
                                    let token3 = auth103.authextr.token
                                    console.info("Security_IAM_PIN_Update_Func_0103 token3 = " + token3);
                                    publicFC.publicdelUser(UserIDM, token3, function (data) {
                                        publicFC.publicCloseSession(UserIDM, function (data) {
                                            console.info("Security_IAM_PIN_Update_Func_0103 closesession = " + data);
                                            publicFC.publicunRegisterInputer(PinAuth, function (data) {
                                                console.info("Security_IAM_PIN_Update_Func_0103 unRegist = " + data);
                                                done();
                                            })
                                        })
                                    }, function (data) {
                                    })
                                }, function (data) {
                                })
                            }, function (data) {
                            })
                        })
                    }, function (data) {
                    })
                }, function (data) {
                })
            })
        } catch (e) {
            console.log("testupdateCredential103 fail " + e);
            expect(null).assertFail();
        }
    })
})

