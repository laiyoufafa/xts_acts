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

import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'
import distributedData from '@ohos.data.distributedKVStore';
import abilityFeatureAbility from '@ohos.ability.featureAbility'

var context = abilityFeatureAbility.getContext();
let BUNDLE_NAME = 'ohos.acts.distributedKvStore';
var kvManager = null;
var kvStore = null;
var delresult = null;
let STORE_ID = 'kvstoreBackupPromise';

let mKVMgrConfig = {
    bundleName: BUNDLE_NAME,
    context : context
};

function publicgetKvStore(optionsp){
    console.log(`Test getKvStore `)
    return new Promise(function(resolve, reject) {
        kvManager = distributedData.createKVManager(mKVMgrConfig);
        kvManager.getKVStore(STORE_ID, optionsp, (err, data) => {
            console.info('Test getKVStore begin')
            if (err) {
                console.info('Test getKVStore err = ' + err);
                reject(err);
            }
            console.info('Test getKVStore data = ' + data);
            kvStore = data;
            resolve(data);
        });
    })
}

function publiccloseKvStore() {
    console.log(`Test closeKvStore `)
    return new Promise(function (resolve, reject) {
        kvManager.closeKVStore(BUNDLE_NAME, STORE_ID, kvStore, (err, data) => {
            console.info('Test closeKvStore begin')
            if (err) {
                console.info('Test closeKvStore err = ' + err);
                reject(err);
            }
            console.info('Test closeKvStore data = ' + data);
            kvManager.deleteKVStore(BUNDLE_NAME, STORE_ID, (err, data) => {
                console.info('Test deleteKVStore begin')
                if (err) {
                    console.info('Test deleteKVStore err = ' + err);
                    reject(err);
                }
                console.info('Test deleteKVStore data = ' + data);
            });
        });
    })
}

function publicput(kvStore,key,value){
    console.log(`Test put ${JSON.stringify(key,value)}`)
    return new Promise(function(resolve, reject) {
        kvStore.put(key,value, function(err, data){
            console.log("Test put task =" + JSON.stringify(data));
            if (err != undefined) {
                console.log("Test put err information: " + err );
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function publicget(kvStore,key){
    console.log(`Test get ${JSON.stringify(key)}`)
    return new Promise(function(resolve, reject) {
        kvStore.get(key, function(err, data){
            console.log("Test get task =" + JSON.stringify(data));
            if (err != undefined) {
                console.log("Test get err information: " + err );
                reject(err);
            }else{
                resolve(data);
            }
        })
    })
}

function publicbackup(kvStore,file){
    console.log(`Test backup ${JSON.stringify(file)}`)
    return new Promise(function(resolve, reject) {
        kvStore.backup(file).then((data) => {
            console.log("Test backup task =" + data);
            resolve(data);
        }).catch((err) => {
            console.log("Test backup err information: " + err);
            reject(err);
        })
    })
}

function publicdeleteBackup(kvStore,files) {
    console.log(`Test deleteBackup ${JSON.stringify(files)}`)
    return new Promise(function (resolve, reject) {
        kvStore.deleteBackup(files).then((data) => {
            console.log("Test deleteBackup BackUpInfo =" + data);
            var devices = new Array();
            devices = data;
            delresult = devices;
            console.log("Test deleteBackup pass ");
            resolve(data);
        }).catch((err) => {
            console.log("test deleteBackup err information: " + err);
            reject(err);
        })
    })
}

function publicrestoresp(kvStore,file){
    console.log(`Test restoresp ${JSON.stringify(file)}`)
    return new Promise(function(resolve, reject) {
        kvStore.restore(file).then((data) => {
            console.log("Test restoresp backupinfo information: " + JSON.stringify(data));
            resolve(data);
        }).catch((err) => {
            console.log("Test restoresp err information: " + err  );
            reject(err);
        })
    })
}

function publicrestore(kvStore){
    console.log(`Test restore `)
    return new Promise(function(resolve, reject) {
        kvStore.restore.then((data) => {
            console.log("Test restore backupinfo information: " + JSON.stringify(data) );
            resolve(data);
        }).catch((err) => {
            console.log("Test restore err information: " + err );
            reject(err);
        })
    })
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const optionLock = {
    createIfMissing: true,
    encrypt: true,
    backup: true,
    autoSync: false,
    kvStoreType: distributedData.KVStoreType.SINGLE_VERSION,
    securityLevel: distributedData.SecurityLevel.S1,
}

var file = '';

var files =new Array();
export default function kvStoreBackupPromiseJsunittest(){
describe('kvStoreBackupPromiseJsunittest', function () {
    beforeAll( async function () {
        console.info('Test beforeAll: Prerequisites at the test suite level, ' +
        'which are executed before the test suite is executed.');
        await publicgetKvStore(optionLock);
        await sleep(5000);
        console.info("Test kvstore = " + kvStore)
    })
    beforeEach(function () {
        console.info('beforeEach: Prerequisites at the test case level,' +
        ' which are executed before each test case is executed.');
    })
    afterEach( async function () {
        console.info('afterEach: Test case-level clearance conditions, ' +
        'which are executed after each test case is executed.');
        publicdeleteBackup(kvStore,files);
        await sleep(5000);
    })
    afterAll( async function () {
        console.info('afterAll: Test suite-level cleanup condition, ' +
        'which is executed after the test suite is executed');
        publiccloseKvStore();
        await kvManager.getAllKVStoreId(TEST_BUNDLE_NAME).then((data) => {
            console.info(data.length);
        })
        kvManager = null;
        console.info("Test kvstore = " + kvStore)
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0100
     * @tc.desc Test Js Api SingleKvStore.restore() manal testcase 001
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0100
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0100', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0100 before restore");
            await publicrestore(kvStore).then((data) => {
                console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0100 going restore = " + JSON.stringify(data));
                expect(true).assertEqual(data == 'code数字');
                done();
            }).catch((err) => {
                console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0100 Manualrestore fail 1" + err);
                expect(true).assertEqual(JSON.stringify(err) == '{}');
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0100 Manualrestore fail 2" + JSON.stringify(e));
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200
     * @tc.desc Test Js Api SingleKvStore.restore() manal testcase 002
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200 before getname");
            file  = '123' ;
            files[0] = file ;
            publicbackup(kvStore,file) ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200 before restore");
            await sleep(1000);
            publicrestore(kvStore);
            console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200 going restore ");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[0];
                console.info("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALRESTORE_PROMISE_0200 Manualrestore fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100
     * @tc.desc Test Js Api SingleKvStore.backup() manal testcase 001
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100 before getname");
            file = 'legal' ;
            files[0] = "legal" ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100 before backup");
            publicbackup(kvStore,file) ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100 going backup");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[0];
                console.info("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0100 export fail 2 " + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200
     * @tc.desc Test Js Api SingleKvStore.backup() manal testcase 002
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200 before getname");
            file  = 'true' ;
            files[0] = file ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200 before backup");
            publicbackup(kvStore,file) ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200 going backup");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[0];
                console.info("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0200 fail 2 " + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300
     * @tc.desc Test Js Api SingleKvStore.backup() manal testcase 003
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300 before getname");
            file  = '1' ;
            files[0] = file ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300 before backup");
            publicbackup(kvStore,file) ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300 going backup");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[0];
                console.info("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0300 fail 2 " + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400
     * @tc.desc Test Js Api SingleKvStore.backup() manal testcase 004
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400 before getname");
            file  = '1.0' ;
            files[0] = file ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400 before backup");
            publicbackup(kvStore,file) ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400 going backup");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[0];
                console.info("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0400 fail 2 " + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0500
     * @tc.desc Test Js Api SingleKvStore.backup() manal testcase 005
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0500
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0500', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0500 before getname");
            file  = '' ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0500 before backup");
            await publicbackup(kvStore,file).then((data) => {
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0500 going backup");
                expect(true).assertEqual(data == "code数字");
                done();
            }).catch((err) => {
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0500 fail1 " + err);
                console.log(JSON.stringify(err));
                expect(true).assertEqual(err.code == 401)
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0500 fail 2 " + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0600
     * @tc.desc Test Js Api SingleKvStore.backup() manal testcase 006
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0600
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0600', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0600 before getname");
            file  = '1' ;
            var file1 = '2';
            var file2 = '3';
            var file3 = '4';
            var file4 = '5';
            files[0] = file ;
            files[1] = file1 ;
            files[2] = file2 ;
            files[3] = file3 ;
            files[4] = file4 ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0600 before backup");
            publicbackup(kvStore,file);
            await sleep(500);
            publicbackup(kvStore,file1);
            await sleep(500);
            publicbackup(kvStore,file2);
            await sleep(500);
            publicbackup(kvStore,file3);
            await sleep(500);
            publicbackup(kvStore,file4);
            await sleep(500);
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0600 before publicdeleteBackup");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {

                expect("1").assertEqual(delresult[0][0])
                expect(0).assertEqual(delresult[0][1]);

                expect("2").assertEqual(delresult[1][0])
                expect(0).assertEqual(delresult[1][1])

                expect("3").assertEqual(delresult[2][0])
                expect(0).assertEqual(delresult[2][1])

                expect("4").assertEqual(delresult[3][0])
                expect(0).assertEqual(delresult[3][1])

                expect("5").assertEqual(delresult[4][0])
                expect(27459591).assertEqual(delresult[4][1])

                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0600 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0600 fail 2 " + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700
     * @tc.desc Test Js Api SingleKvStore.backup() manal testcase 007
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700
     */
    it('SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700 before getname");
            files = [];
            var file  = '1';
            var file1 = '2';
            var file2 = '3';
            var file3 = '4';
            var file4 = '5';
            var file5 = '6';
            files[0] = file ;
            files[1] = file1 ;
            files[2] = file2 ;
            files[3] = file3 ;
            files[4] = file4 ;
            files[5] = file5 ;
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700 before backup");
            publicbackup(kvStore,file);
            await sleep(500);
            publicbackup(kvStore,file1);
            await sleep(500);
            publicbackup(kvStore,file2);
            await sleep(500);
            publicbackup(kvStore,file3);
            await sleep(500);
            publicbackup(kvStore,file4);
            await sleep(500);
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700 before Sixth backup");
            await publicbackup(kvStore,file5).then((data) => {
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700 going backup");
                expect(true).assertEqual(data == "code数字");
                done();
            }).catch((err) => {
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700  fail1 " + err);
                console.log("err is " + JSON.stringify(err) + "code is " + err.code);
                expect(true).assertEqual(JSON.stringify(err) == "{\"code\":\"\"}");
                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700 Sixth backup err");
            })
            await sleep(1000);
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700 before publicdeleteBackup");
            await publicdeleteBackup(kvStore,files).then((data) => {

                expect("1").assertEqual(delresult[0][0])
                console.log(delresult[0][0]);
                console.log(delresult[0][1]);
                expect(0).assertEqual(delresult[0][1]);

                expect("5").assertEqual(delresult[4][0])
                expect(27459591).assertEqual(delresult[4][1]);

                expect("6").assertEqual(delresult[5][0])
                expect(27459591).assertEqual(delresult[5][1]);

                console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_MANALBACKUP_PROMISE_0700 fail 2 " + e);
            expect(e).assertFail();
            done();
        }
    })
    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100
     * @tc.desc Test Js Api SingleKvStore.restore() SpecifiedVerision testcase 001
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100
     */
    it('SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100 before getname");
            file  = 'legal' ;
            files[0] = file ;
            publicbackup(kvStore,file);
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100 before restoresp");
            await sleep(1000);
            publicrestoresp(kvStore,file);
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100 going restoresp");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[5];
                console.info("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0100 Manualrestoresp fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200
     * @tc.desc Test Js Api SingleKvStore.restore() SpecifiedVerision testcase 002
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200
     */
    it('SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200 before getname");
            file  = 'true' ;
            files[0] = file ;
            publicbackup(kvStore,file);
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200 before restoresp");
            await sleep(1000);
            publicrestoresp(kvStore,file);
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200 going restoresp");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[5];
                console.info("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0200 fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300
     * @tc.desc Test Js Api SingleKvStore.restore() SpecifiedVerision testcase 003
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300
     */
    it('SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300 before getname");
            file  = '1' ;
            files[0] = file ;
            publicbackup(kvStore,file);
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300 before restoresp");
            await sleep(1000);
            publicrestoresp(kvStore,file);
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300 going restoresp");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[0];
                console.info("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0300 fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400
     * @tc.desc Test Js Api SingleKvStore.restore() SpecifiedVerision testcase 004
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400
     */
    it('SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400 before getname");
            file  = '1.0' ;
            files[0] = file ;
            publicbackup(kvStore,file);
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400 before restoresp");
            await sleep(1000);
            publicrestoresp(kvStore,file);
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400 going restoresp");
            await sleep(1000);
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[0];
                console.info("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400 delResult[1] = " + delResult[1]);
                expect(0).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0400 Manualrestoresp fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0500
     * @tc.desc Test Js Api SingleKvStore.restore() SpecifiedVerision testcase 005
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0500
     */
    it('SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0500', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0500 before getname");
            file  = '' ;
            publicbackup(kvStore,file) ;
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0500 before restoresp");
            await sleep(1000);
            await publicrestoresp(kvStore,file).then((data) => {
                console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0500 going restoresp = " + JSON.stringify(data));
                expect(true).assertEqual(false);
                done();
            }).catch((err) => {
                console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0500 Manualrestoresp fail 1" + err);
                expect(true).assertEqual(err.code == 401);
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0500 Manualrestoresp fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0600
     * @tc.desc Test Js Api SingleKvStore.restore() SpecifiedVerision testcase 006
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0600
     */
    it('SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0600', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0600 before getname");
            file  = 'legal' ;
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0600 before restoresp");
            await publicrestoresp(kvStore,file).then((data) => {
                console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0600 going restoresp = " + JSON.stringify(data));
                expect(true).assertEqual(false);
                done();
            }).catch((err) => {
                console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0600 Manualrestoresp fail 1" + err);
                expect(true).assertEqual(err.code == 401);
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_RESTORESPECIFIEDVERSION_PROMISE_0600 Manualrestoresp fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })



    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100
     * @tc.desc Test Js Api SingleKvStore.deleteBackup() testcase 001
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100
     */
    it('SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100 before deleteBackup");
            file  = '123' ;
            files[0] = file ;
            await publicdeleteBackup(kvStore,files).then((data) => {
                let delResult = delresult[0];
                console.info("SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100 delResult = " + delResult);
                console.info("SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100 delResult[1] = " + delResult[1]);
                expect(27459591).assertEqual(delResult[1]);
                console.log("SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100 publicdeleteBackup" + JSON.stringify(data));
                done();
            })
            console.log("SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100 going deleteBackup");
        } catch (err) {
            console.log("SUB_DDM_DKV_KVBACKUP_DELETEBACKUP_PROMISE_0100 deleteBackup fail 2" + err);
            expect(err).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0100
     * @tc.desc Test Js Api SingleKvStore.put() db testcase 001
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0100
     */
    it('SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0100', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0100 before putdata");
            publicput(kvStore,"key1","value1") ;
            console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0100 going putdata");
            done();
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0100 Backupinfo fail" + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0200
     * @tc.desc Test Js Api SingleKvStore.put() db testcase 002
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0200
     */
    it('SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0200', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0200 before putdata");
            publicput(kvStore,"PutPromise0002","value") ;
            console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0200 going putdata");
            await publicget(kvStore,"PutPromise0002").then((data) => {
                console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0200 going getdata" + JSON.stringify(data));
                expect(true).assertEqual(data == "value");
                done();
            }).catch((err) => {
                console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0200 Get fail 1 " + err);
                expect(err).assertFail();
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0200 Get fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })

    /**
     * @tc.name SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0300
     * @tc.desc Test Js Api SingleKvStore.put() db testcase 003
     * @tc.type: FUNC
     * @tc.number: SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0300
     */
    it('SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0300', 0, async function (done) {
        try {
            console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0300 before putdata");
            publicput(kvStore,"PutPromise0004","value1") ;
            console.log("KvStoreBackupestDbBuckupPutPromiseTest004t going putdata");
            await publicget(kvStore,"PutPromise").then((data) => {
                console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0300 going getdata" + JSON.stringify(data));
                expect(true).assertEqual(JSON.stringify(data) == '{}');
                done();
            }).catch((err) => {
                console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0300 Get fail 1 " + err);
                console.log(JSON.stringify(err));
                expect(true).assertEqual(err.code == 15100004);
                done();
            })
        } catch (e) {
            console.log("SUB_DDM_DKV_KVBACKUP_PUT_PROMISE_0300 Get fail 2" + e);
            expect(e).assertFail();
            done();
        }
    })
})
}