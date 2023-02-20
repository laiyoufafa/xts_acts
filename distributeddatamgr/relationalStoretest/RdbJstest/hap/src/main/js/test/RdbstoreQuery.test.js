/*
 * Copyright (C) 2021-2022 Huawei Device Co., Ltd.
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
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium';
import dataRdb from '@ohos.data.rdb';
import factory from '@ohos.data.distributedData';
import abilityFeatureAbility from '@ohos.ability.featureAbility';

const TAG = "[RDB_JSKITS_TEST]"
const CREATE_TABLE_TEST = "CREATE TABLE IF NOT EXISTS test (" + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
    + "name TEXT NOT NULL, " + "age INTEGER, " + "salary REAL, " + "blobType BLOB)"
const STORE_CONFIG = {
    name: "Query.db",
}
const TEST_BUNDLE_NAME="ohos.acts.rdbjstest"

var kvManager = null
var kvStore = null
var localDeviceId = null
var rdbStore
let context = abilityFeatureAbility.getContext()

async function CreatRdbStore(context, STORE_CONFIG) {
    let RdbStore = await dataRdb.getRdbStore(context, STORE_CONFIG, 1)
    await RdbStore.executeSql(CREATE_TABLE_TEST, null)
    let u8 = new Uint8Array([1, 2, 3])
    {
        const valueBucket = {
            "name": "zhangsan",
            "age": 18,
            "salary": 100.5,
            "blobType": u8,
        }
        await RdbStore.insert("test", valueBucket)
    }
    {
        const valueBucket = {
            "name": "lisi",
            "age": 28,
            "salary": 100.5,
            "blobType": u8,
        }
        await RdbStore.insert("test", valueBucket)
    }
    {
        const valueBucket = {
            "name": "wangwu",
            "age": 38,
            "salary": 90.0,
            "blobType": u8,
        }
        await RdbStore.insert("test", valueBucket)
    }
    return RdbStore
}

async function getLocalDeviceId(){
    
}
export default function rdbstoreQueryTest(){
    describe("rdbstoreQueryTest", function() {
        beforeAll(async function (done){
            const config = {
                bundleName : TEST_BUNDLE_NAME,
                userInfo : {
                    userId : '0',
                    userType : factory.UserType.SAME_USER_ID,
                    context:context
                }
            }
        
            const options = {
                createIfMissing : true,
                encrypt : false,
                backup : false,
                autoSync : true,
                kvStoreType : factory.KVStoreType.DEVICE_COLLABORATION,
                schema : '',
                securityLevel : factory.SecurityLevel.S2,
            }
        
            console.info('getLocalDeviceId config:'+ JSON.stringify(config));
                await factory.createKVManager(config).then((manager) => {
                    kvManager = manager;
                    console.info('getLocalDeviceId createKVManager success');
                }).catch((err) => {
                    console.info('getLocalDeviceId createKVManager err ' + err);
                });
                await kvManager.getKVStore(TEST_STORE_ID, options).then((store) => {
                    kvStore = store;
                    console.info('getLocalDeviceId getKVStore for getDeviceId success');
                }).catch((err) => {
                    console.info('getLocalDeviceId getKVStore err ' + err);
                });
                var getDeviceId = new Promise((resolve, reject) => {
                    kvStore.on('dataChange', 0, function (data) {
                        console.info('getLocalDeviceId on data change: ' + JSON.stringify(data));
                        resolve(data.deviceId);
                    });
                    kvStore.put("getDeviceId", "byPut").then((data) => {
                        console.info('getLocalDeviceId put success');
                        expect(data == undefined).assertTrue();
                    });
                    setTimeout(() => {
                        reject(new Error('not resolved in 2 second, reject it.'))
                    }, 2000);
                });
                await getDeviceId.then(function(deviceId) {
                    console.info('getLocalDeviceId getDeviceId ' + JSON.stringify(deviceId));
                    localDeviceId = deviceId;
                }).catch((error) => {
                    console.info('getLocalDeviceId can NOT getDeviceId, fail: ' + error);
                    expect(null).assertFail();
                });
                await kvManager.closeKVStore(TEST_BUNDLE_NAME, TEST_STORE_ID, kvStore);
                await kvManager.deleteKVStore(TEST_BUNDLE_NAME, TEST_STORE_ID);
                kvStore = null;
                console.info('getLocalDeviceId end');
            getLocalDeviceId()
            console.info(TAG + 'beforeAll')
            done();
        })

        beforeEach(async function () {
            console.info(TAG + 'beforeEach')
            
            rdbStore = await CreatRdbStore(context, STORE_CONFIG)
        })

        afterEach(async function () {
            console.info(TAG + 'afterEach')
            await dataRdb.deleteRdbStore(context, STORE_CONFIG.name)
        })

        afterAll(async function () {
            console.info(TAG + 'afterAll')
        })

        /**
        * @tc.name RDB remotequery test
        * @tc.number SUB_DDM_RDB_JS_RemoteQueryTest_Promise_0010
        * @tc.desc RDB remotequery function test
        */
        it('RdbRemoteQueryPromiseTest0010', 0, async function (done){  
            console.info(TAG + "RdbRemoteQueryPromiseTest0010 start")
            let errInfo = undefined
            let predicates = new dataRdb.RdbPredicates("test");
            predicates.equalTo("name", "zhangsan")
            try{
                rdbStore.remoteQuery(localDeviceId,"test",predicates,["name","age","salary"])
            }catch(err){
                errInfo = err
            }
            expect(errInfo.code).assertEqual("401")
            done();
            console.info(TAG + "RdbRemoteQueryPromiseTest0010 end")
        })

        /**
        * @tc.name RDB remotequery test
        * @tc.number SUB_DDM_RDB_JS_RemoteQueryTest_Promise_0020
        * @tc.desc RDB remotequery function test
        */
         it('RdbRemoteQueryPromiseTest0020', 0, async function (done){  
            console.info(TAG + "RdbRemoteQueryPromiseTest0020 start")
            let predicates = new dataRdb.RdbPredicates("test");
            predicates.equalTo("name", "zhangsan")
            try{
                await rdbStore.remoteQuery([localDeviceId],"test",predicates,["name","age","salary"]).then((resultSet) => {
                    console.info(TAG + "Remote query success")
                    expect(false).assertTrue();
                }).catch((err) => {
                    console.info(TAG + "Remote query error" + err)
                })
            }catch(err){
                console.info(TAG + "RdbRemoteQueryPromiseTest0020 error:" + err)
            }
            
            done();
            console.info(TAG + "RdbRemoteQueryPromiseTest0020 end")
        })

        /**
        * @tc.name RDB remotequery test
        * @tc.number SUB_DDM_RDB_JS_RemoteQueryTest_Promise_0030
        * @tc.desc RDB remotequery function test
        */
         it('RdbRemoteQueryPromiseTest0030', 0, async function (done){  
            console.info(TAG + "RdbRemoteQueryPromiseTest0030 start")
            let predicates = new dataRdb.RdbPredicates("test");
            predicates.equalTo("name", "zhangsan")
            try{
                await rdbStore.remoteQuery(localDeviceId,["test"],predicates,["name","age","salary"]).then((resultSet) => {
                    console.info(TAG + "Remote query success")
                    expect(false).assertTrue();
                }).catch((err) => {
                    console.info(TAG + "Remote query error" + err)
                })
            }catch(err){
                console.info(TAG + "RdbRemoteQueryPromiseTest0030 error:" + err)
            }
            
            done();
            console.info(TAG + "RdbRemoteQueryPromiseTest0030 end")
        })

        /**
        * @tc.name RDB remotequery test
        * @tc.number SUB_DDM_RDB_JS_RemoteQueryTest_Promise_0040
        * @tc.desc RDB remotequery function test
        */
         it('RdbRemoteQueryPromiseTest0040', 0, async function (done){  
            console.info(TAG + "RdbRemoteQueryPromiseTest0040 start")
            let predicates = new dataRdb.RdbPredicates("test");
            predicates.equalTo("name", "zhangsan")
            try{
                await rdbStore.remoteQuery(localDeviceId,"test",predicates,"age").then((resultSet) => {
                    console.info(TAG + "Remote query success")
                    expect(false).assertTrue();
                }).catch((err) => {
                    console.info(TAG + "Remote query error" + err)
                })
            }catch(err){
                console.info(TAG + "RdbRemoteQueryPromiseTest0040 error:" + err)
            }
            
            done();
            console.info(TAG + "RdbRemoteQueryPromiseTest0040 end")
        })

        /**
        * @tc.name RDB remotequery test
        * @tc.number SUB_DDM_RDB_JS_RemoteQueryTest_Callback_0010
        * @tc.desc RDB remotequery function test
        */
         it('RdbRemoteQueryCallbackTest0010', 0, async function (done){  
            console.info(TAG + "RdbRemoteQueryCallbackTest0010 start")
            let predicates = new dataRdb.RdbPredicates("test");
            predicates.equalTo("name", "zhangsan")
            try{
                await rdbStore.remoteQuery(localDeviceId, "test", predicates,["name","age","salary"], (err, data) => {
                    if(err != null){
                        console.info(TAG + "Remote query error" + err)
                    }else{
                        console.info(TAG + "Remote query success")
                    expect(false).assertTrue();
                    }
                })
            }catch(err){
                console.info(TAG + "RdbRemoteQueryCallbackTest0010 error:" + err)
            }
            
            done();
            console.info(TAG + "RdbRemoteQueryCallbackTest0010 end")
        })

        /**
        * @tc.name RDB remotequery test
        * @tc.number SUB_DDM_RDB_JS_RemoteQueryTest_Callback_0020
        * @tc.desc RDB remotequery function test
        */
         it('RdbRemoteQueryCallbackTest0020', 0, async function (done){  
            console.info(TAG + "RdbRemoteQueryCallbackTest0020 start")
            let predicates = new dataRdb.RdbPredicates("test");
            predicates.equalTo("name", "zhangsan")
            try{
                await rdbStore.remoteQuery([localDeviceId], "test", predicates,["name","age","salary"], (err, data) => {
                    if(err != null){
                        console.info(TAG + "Remote query error" + err)
                    }else{
                        console.info(TAG + "Remote query success")
                    expect(false).assertTrue();
                    }
                })
            }catch(err){
                console.info(TAG + "RdbRemoteQueryCallbackTest0020 error:" + err)
            }
            
            done();
            console.info(TAG + "RdbRemoteQueryCallbackTest0020 end")
        })

        /**
        * @tc.name RDB remotequery test
        * @tc.number SUB_DDM_RDB_JS_RemoteQueryTest_Callback_0030
        * @tc.desc RDB remotequery function test
        */
         it('RdbRemoteQueryCallbackTest0030', 0, async function (done){  
            console.info(TAG + "RdbRemoteQueryCallbackTest0020 start")
            let predicates = new dataRdb.RdbPredicates("test");
            predicates.equalTo("name", "zhangsan")
            try{
                await rdbStore.remoteQuery(localDeviceId, ["test"], predicates,["name","age","salary"], (err, data) => {
                    if(err != null){
                        console.info(TAG + "Remote query error" + err)
                    }else{
                        console.info(TAG + "Remote query success")
                    expect(false).assertTrue();
                    }
                })
            }catch(err){
                console.info(TAG + "RdbRemoteQueryCallbackTest0030 error:" + err)
            }
            
            done();
            console.info(TAG + "RdbRemoteQueryCallbackTest0030 end")
        })

        /**
        * @tc.name RDB remotequery test
        * @tc.number SUB_DDM_RDB_JS_RemoteQueryTest_Callback_0040
        * @tc.desc RDB remotequery function test
        */
         it('RdbRemoteQueryCallbackTest0040', 0, async function (done){  
            console.info(TAG + "RdbRemoteQueryCallbackTest0040 start")
            let predicates = new dataRdb.RdbPredicates("test");
            predicates.equalTo("name", "zhangsan")
            try{
                await rdbStore.remoteQuery(localDeviceId, "test", predicates,"name", (err, data) => {
                    if(err != null){
                        console.info(TAG + "Remote query error" + err)
                    }else{
                        console.info(TAG + "Remote query success")
                    expect(false).assertTrue();
                    }
                })
            }catch(err){
                console.info(TAG + "RdbRemoteQueryCallbackTest0040 error:" + err)
            }
            
            done();
            console.info(TAG + "RdbRemoteQueryCallbackTest0040 end")
        })

    })
}