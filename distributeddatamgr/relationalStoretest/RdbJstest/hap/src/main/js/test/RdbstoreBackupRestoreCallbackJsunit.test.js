/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'
import dataRdb from '@ohos.data.rdb'
import abilityFeatureAbility from '@ohos.ability.featureAbility'
import fileio from '@ohos.fileio'

const TAG = "[RDB_JSKITS_TEST]"
const CREATE_TABLE_TEST = "CREATE TABLE IF NOT EXISTS backupTest (" + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
    + "name TEXT NOT NULL, " + "age INTEGER, " + "salary REAL, " + "blobType BLOB)"
const DATABASE_DIR = "/data/storage/el2/database/entry/rdb/"
var RdbStore
var context
const STORE_CONFIG = {
    name: "BackupResotreTest.db",
}
const DATABASE_BACKUP_NAME = "Backup.db"

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
        await RdbStore.insert("backupTest", valueBucket)
    }
    {
        const valueBucket = {
            "name": "lisi",
            "age": 28,
            "salary": 100.5,
            "blobType": u8,
        }
        await RdbStore.insert("backupTest", valueBucket)
    }
    {
        const valueBucket = {
            "name": "wangwu",
            "age": 38,
            "salary": 90.0,
            "blobType": u8,
        }
        await RdbStore.insert("backupTest", valueBucket)
    }
    return RdbStore
}

function BackupCallbackTest(backupName) {
    try {
        RdbStore.backup(backupName, (err, data) => {
            if(err != null){
                console.info(TAG + "Backup error: " + err)
                expect(true).assertTrue()
            }else{
                expect(false).assertTrue();
            }
        })
    } catch(errInfo){
        console.info(TAG + "BackupCallbackTest error: " + errInfo)
        expect(true).assertTrue()
    }

    RdbStore = null
}

function ReStoreCallbackTest(restoreName) {
    try {
        RdbStore.restore(restoreName, (err, data) => {
            if(err != null){
                console.info(TAG + "Restore error: " + err)
                expect(true).assertTrue()
            }else{
                expect(false).assertTrue();
            }
        })
    } catch(errInfo) {
        console.info(TAG + "ReStoreCallbackTest error: " + errInfo)
        expect(true).assertTrue()
    }

    RdbStore = null
}

export default function rdbStoreBackupRestoreCallbackTest() {
    describe('rdbStoreBackupRestoreCallbackTest', function () {
        
    
        beforeAll(async function () {
            console.info(TAG + 'beforeAll')
        })
    
        beforeEach(async function () {
            console.info(TAG + 'beforeEach')
            context = abilityFeatureAbility.getContext()
            RdbStore = await CreatRdbStore(context, STORE_CONFIG)
        })
    
        afterEach(async function () {
            console.info(TAG + 'afterEach')
            await dataRdb.deleteRdbStore(context, STORE_CONFIG.name)
            await dataRdb.deleteRdbStore(context, DATABASE_BACKUP_NAME)
            await dataRdb.deleteRdbStore(context, "BackupTest003.db")
        })
    
        afterAll(async function () {
            console.info(TAG + 'afterAll')
        })
    
        console.info(TAG + "*************Unit Test Begin*************")
    
        /**
         * @tc.name RDB Backup Restore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_0100
         * @tc.desc RDB backup and restore function test
         */
        it('RdbBackupRestoreCallbackTest_0100', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0100 start *************")
    
            // RDB backup function test
            await RdbStore.backup(DATABASE_BACKUP_NAME,async (err, data) => {
                if(err != null){
                    expect(false).assertTrue()
                }else{
                    try {
                        fileio.accessSync(DATABASE_DIR + DATABASE_BACKUP_NAME)
                        fileio.accessSync(DATABASE_DIR + STORE_CONFIG.name)
                    } catch (err) {
                        expect(false).assertTrue()
                    }
                }
            
                // RDB before restored, delete data
                let deleteData = new dataRdb.RdbPredicates("backupTest")
                deleteData.equalTo("name", "zhangsan")
                RdbStore.delete(deleteData).then(()=> {
                    RdbStore.restore(DATABASE_BACKUP_NAME, async (err, data) => {
                        if(err != null){
                            expect(false).assertTrue()
                        }else{
                            try {
                                fileio.accessSync(DATABASE_DIR + DATABASE_BACKUP_NAME)
                                expect(false).assertTrue()
                            } catch (err) {
                                console.info(TAG + "rdb restore1 done")
                            }
            
                            try {
                                fileio.accessSync(DATABASE_DIR + STORE_CONFIG.name)
                            } catch (err) {
                                expect(false).assertTrue()
                            }
                            let predicates = new dataRdb.RdbPredicates("backupTest")
                            predicates.equalTo("name", "zhangsan")
                            let resultSet = await RdbStore.query(predicates)
                            try {
                                console.info(TAG + "After restore resultSet query done")
                                expect(true).assertEqual(resultSet.goToFirstRow())
                                const id = resultSet.getLong(resultSet.getColumnIndex("id"))
                                const name = resultSet.getString(resultSet.getColumnIndex("name"))
                                const blobType = resultSet.getBlob(resultSet.getColumnIndex("blobType"))
                                expect(1).assertEqual(id)
                                expect("zhangsan").assertEqual(name)
                                expect(1).assertEqual(blobType[0])
                            } catch (err) {
                                console.info(TAG + 'RdbBackupRestoreTest_0010 accessSync err4:  ' + err)
                                expect(false).assertTrue()
                            }
                            resultSet = null
                            RdbStore = null
                        }
                        done()
                        console.info(TAG + "************* RdbBackupRestoreCallbackTest_0100 end *************")
                    })
                })            
            })
        })
    
        /**
         * @tc.name RDB Backup test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_0200
         * @tc.desc RDB backup function test
         */
        it('RdbBackupRestoreCallbackTest_0200', 0, function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0200 start *************")
            // RDB backup function test, backup file name empty
            BackupCallbackTest("")
    
            // RDB backup function test, backup file name already exists
            BackupCallbackTest(STORE_CONFIG.name)
    
            done()
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0200 end *************")
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreTest_0300
         * @tc.desc RDB restore function test
         */
        it('RdbBackupRestoreCallbackTest_0300', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0300 start *************")
            let backupName = "BackupTest003.db"
            await RdbStore.backup(backupName)
    
            // RDB restore function test, backup file name empty
            ReStoreCallbackTest("")
    
            // RDB restore function test, backup file is specified to database name
            ReStoreCallbackTest(STORE_CONFIG.name)
    
            done()
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0300 end *************")
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_0400
         * @tc.desc RDB restore function test
         */
        it('RdbBackupRestoreCallbackTest_0400', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0400 start *************")
            let dbName = "notExistName.db"
    
            // RDB restore function test, backup file does not exists
            try {
                fileio.accessSync(DATABASE_DIR + dbName)
                expect(false).assertTrue()
            } catch {
                ReStoreCallbackTest(dbName)
            }
    
            done()
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0400 end *************")
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_0500
         * @tc.desc RDB restore function test
         */
            it('RdbBackupRestoreCallbackTest_0500', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0500 start *************")
    
            // RDB restore function test, backup file
            RdbStore.backup(DATABASE_BACKUP_NAME, (err, data) => {
                if(err != null){
                    expect(false).assertTrue()
                }else{
                    try{
                        console.info(TAG + 'Backup database success')
                        fileio.accessSync(DATABASE_DIR + DATABASE_BACKUP_NAME)
                    }catch(err){
                        expect(false).assertTrue();
                    }
                    dataRdb.deleteRdbStore(context, DATABASE_BACKUP_NAME).then(() => {
                        try{
                            fileio.accessSync(DATABASE_DIR + DATABASE_BACKUP_NAME)
                        }catch(err){
                            console.info(TAG + 'error2  ' + err)
                        }
                        RdbStore.backup(DATABASE_BACKUP_NAME, (err, data) => {
                            if(err != null){
                                console.info(`${TAG} Backup database second failed`)
                            }else{
                                try{
                                    console.info(TAG + 'Backup database second success')
                                    fileio.accessSync(DATABASE_DIR + DATABASE_BACKUP_NAME)
                                }catch(err){
                                    expect(false).assertTrue();
                                }
                            }
                            done();
                            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0500 end *************")
                        })
                    })
                }
            })
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_0600
         * @tc.desc RDB restore function test
         */
         it('RdbBackupRestoreCallbackTest_0600', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0600 start *************")

            // Backup file is specified to database name
            RdbStore.backup(STORE_CONFIG.name, (err, data) => {
                expect(err != null).assertTrue()
                console.info(TAG + "RdbBackupRestoreCallbackTest_0600 backup1 done")

                RdbStore.backup(STORE_CONFIG.name, (err, data) => {
                    expect(err != null).assertTrue()
                    console.info(TAG + "RdbBackupRestoreCallbackTest_0600 backup2 done")
                    done();
                    console.info(TAG + "************* RdbBackupRestoreCallbackTest_0600 end *************")
                })
            })
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_0700
         * @tc.desc RDB restore function test
         */
        it('RdbBackupRestoreCallbackTest_0700', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0700 start *************")
            let DATABASE_BACKUP_TEST_NAME = "BackupTest.db"
            RdbStore.backup(DATABASE_BACKUP_TEST_NAME, async (err, data) => {
                expect(err == null).assertTrue()
                console.info(TAG + "RdbBackupRestoreCallbackTest_0700 backup done")

                dataRdb.deleteRdbStore(context, DATABASE_BACKUP_TEST_NAME, () => {
                    try {
                        fileio.accessSync(DATABASE_DIR + DATABASE_BACKUP_TEST_NAME)
                    } catch (err) {
                        console.info(TAG + "RdbBackupRestoreCallbackTest_0700 deleteRdbStore done")
                    }
                    RdbStore.restore(DATABASE_BACKUP_TEST_NAME, (err, data) => {
                        expect(err != null).assertTrue()
                        console.info(TAG + "RdbBackupRestoreCallbackTest_0700 restore done")
                        done();
                    })
                })
            })
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0700 end *************")
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_0800
         * @tc.desc RDB restore function test
         */
        it('RdbBackupRestoreCallbackTest_0800', 0, async function (done) {
        console.info(TAG + "************* RdbBackupRestoreCallbackTest_0800 start *************")
        BackupCallbackTest()
        done();
        console.info(TAG + "************* RdbBackupRestoreCallbackTest_0800 end *************")
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_0900
         * @tc.desc RDB restore function test
         */
            it('RdbBackupRestoreCallbackTest_0900', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0900 start *************")
            BackupCallbackTest([DATABASE_BACKUP_NAME])
            done();
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_0900 end *************")
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_1000
         * @tc.desc RDB restore function test
         */
            it('RdbBackupRestoreCallbackTest_1000', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_1000 start *************")
            RdbStore.backup(DATABASE_BACKUP_NAME, (err, data) => {
                if(err != null){
                    expect(false).assertTrue()
                }
                ReStoreCallbackTest([DATABASE_BACKUP_NAME])
                 done();
            })
            
           
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_1000 end *************")
        })
    
        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_1100
         * @tc.desc RDB restore function test
         */
            it('RdbBackupRestoreCallbackTest_1100', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_1100 start *************")
            RdbStore.backup(DATABASE_BACKUP_NAME, (err, data) => {
                if(err != null){
                    expect(false).assertTrue()
                }
                   ReStoreCallbackTest()
                   done();
            })
         
            
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_1100 end *************")
        })

        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_1200
         * @tc.desc RDB restore function test
         */
         it('RdbBackupRestoreCallbackTest_1200', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_1200 start *************")
            RdbStore.backup(DATABASE_BACKUP_NAME, (err, data) => {
                if(err != null){
                    expect(false).assertTrue()
                }
            BackupCallbackTest(DATABASE_BACKUP_NAME)
            done();
            })
    
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_1200 end *************")
        })

        /**
         * @tc.name RDB BackupRestore test
         * @tc.number SUB_DDM_RDB_JS_RdbBackupRestoreCallbackTest_1300
         * @tc.desc RDB restore function test
         */
         it('RdbBackupRestoreCallbackTest_1300', 0, async function (done) {
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_1300 start *************")
            RdbStore.backup(DATABASE_BACKUP_NAME, (err, data) => {
                if(err != null){
                    expect(false).assertTrue()
                }else{
                    RdbStore.restore(DATABASE_BACKUP_NAME, (err, data) => {
                        if(err != null){
                            expect(false).assertTrue()
                        }else{
                            ReStoreCallbackTest(DATABASE_BACKUP_NAME)
                        }
                    })
                }
            done();
            console.info(TAG + "************* RdbBackupRestoreCallbackTest_1300 end *************")
            })
        })
        console.info(TAG + "*************Unit Test End*************")
    })
}