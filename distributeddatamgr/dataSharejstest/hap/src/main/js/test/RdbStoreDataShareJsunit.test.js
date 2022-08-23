/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License")
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
import dataSharePredicates from '@ohos.data.dataSharePredicates'

const TAG = "[RDB_JSKITS_TEST]"
const CREATE_TABLE_TEST = "CREATE TABLE IF NOT EXISTS test (" + "id INTEGER PRIMARY KEY AUTOINCREMENT, "
    + "name TEXT NOT NULL, " + "age INTEGER, " + "salary REAL, " + "blobType BLOB)"
const DROP_TABLE_TEST = "drop table test"

const STORE_CONFIG = {
    name: "DataShareTest.db",
}
var rdbStore = undefined
var context = abilityFeatureAbility.getContext()

export default function rdbStoreDataSharePredicatesTest() {
describe('rdbStoreDataSharePredicatesTest', function () {
    beforeAll(async function () {
        console.info(TAG + 'beforeAll')
        rdbStore = await dataRdb.getRdbStore(context, STORE_CONFIG, 1)
    })

    beforeEach(async function () {
        console.info(TAG + 'beforeEach')
        await rdbStore.executeSql(CREATE_TABLE_TEST, null)
    })

    afterEach(async function () {
        console.info(TAG + 'afterEach')
        await rdbStore.executeSql(DROP_TABLE_TEST, null)
    })

    afterAll(async function () {
        console.info(TAG + 'afterAll')
        rdbStore = null
        await dataRdb.deleteRdbStore(context, "DataShareTest.db")
    })

    console.info(TAG + "*************Unit Test Begin*************")


    /**
     * @tc.name rdb DataShare insert test
     * @tc.number SUB_DataShare_Rdb_Func0001
     * @tc.desc rdb DataShare Func insert test
     */
    it('testRdbStoreDataShareFunc0001', 0, async function (done) {
        console.info(TAG + "************* testRdbStoreDataShareFunc0001 start *************")
        let u8 = new Uint8Array([1, 2, 3])
        const valueBucket = {
            "name": "zhangsan",
            "age": 18,
            "salary": 100.5,
            "blobType": u8,
        }
        let insertPromise = rdbStore.insert("test", valueBucket)
        insertPromise.then(async (ret) => {
            expect(1).assertEqual(ret)
            console.info(TAG + "Insert done: " + ret)
        }).catch((err) => {
            console.info(TAG + "Insert err: " + err)
            expect(false).assertTrue()
        })
        await insertPromise
        console.info("insert end")

        let predicates = new dataRdb.RdbPredicates("test")
        predicates.equalTo("name", "zhangsan")
        let resultSet = await rdbStore.query(predicates)
        try {
            console.info(TAG + "resultSet query done")
            expect(true).assertEqual(resultSet.goToFirstRow())
            const name = resultSet.getString(resultSet.getColumnIndex("name"))
            const age = resultSet.getLong(resultSet.getColumnIndex("age"))
            const salary = resultSet.getDouble(resultSet.getColumnIndex("salary"))
            const blobType = resultSet.getBlob(resultSet.getColumnIndex("blobType"))
            expect("zhangsan").assertEqual(name)
            expect(18).assertEqual(age)
            expect(100.5).assertEqual(salary)
            expect(1).assertEqual(blobType[0])
            expect(2).assertEqual(blobType[1])
            expect(3).assertEqual(blobType[2])
        } catch (err) {
            expect(false).assertTrue()
        }
        resultSet = null

        done()
        console.info(TAG + "************* testRdbStoreDataShareFunc0001 end *************")
    })


    /**
     * @tc.name rdb DataShare update test
     * @tc.number SUB_DataShare_Rdb_Func0002
     * @tc.desc rdb DataShare update promise Func test
     */
    it('testRdbStoreDataShareFunc0002', 0, async function (done) {
        console.info(TAG + "************* testRdbStoreDataShareFunc0002 start *************")
        let u8 = new Uint8Array([1, 2, 3])
        let valueBucket = {
            "name": "zhangsan",
            "age": 18,
            "salary": 100.5,
            "blobType": u8,
        }
        await rdbStore.insert("test", valueBucket)

        u8 = new Uint8Array([4, 5, 6])
        valueBucket = {
            "name": "lisi",
            "age": 28,
            "salary": 200.5,
            "blobType": u8,
        }

        let predicates = new dataSharePredicates.DataSharePredicates()
        predicates.equalTo("name", "zhangsan")
        let promiseUpdate = rdbStore.update("test", valueBucket, predicates)
        promiseUpdate.then(async (ret) => {
            expect(1).assertEqual(ret)
            console.info(TAG + "Update done: " + ret)
        }).catch((err) => {
            console.info(TAG + "Update err: " + err)
            expect(false).assertTrue()
        })
        await promiseUpdate

        let rdbPredicates = await new dataRdb.RdbPredicates("test")
        rdbPredicates.equalTo("name", "lisi")
        let resultSet = await rdbStore.query(rdbPredicates)
        expect(true).assertEqual(resultSet.goToFirstRow())
        const id = resultSet.getLong(resultSet.getColumnIndex("id"))
        const name = resultSet.getString(resultSet.getColumnIndex("name"))
        const age = resultSet.getLong(resultSet.getColumnIndex("age"))
        const salary = resultSet.getDouble(resultSet.getColumnIndex("salary"))
        const blobType = resultSet.getBlob(resultSet.getColumnIndex("blobType"))

        expect("lisi").assertEqual(name)
        expect(28).assertEqual(age)
        expect(200.5).assertEqual(salary)
        expect(4).assertEqual(blobType[0])
        expect(5).assertEqual(blobType[1])
        expect(6).assertEqual(blobType[2])

        console.info(TAG + "dataShare update: {id=" + id + ", name=" + name + ", " +
            "age=" + age + ", salary=" + salary + ", blobType=" + blobType)
        resultSet = null

        done()
        console.info(TAG + "************* testRdbStoreDataShareFunc0002 end *************")
    })

    /**
     * @tc.name rdb DataShare update test
     * @tc.number SUB_DataShare_Rdb_Func0003
     * @tc.desc rdb DataShare update callback Func test
     */
    it('testRdbStoreDataShareFunc0003', 0, async function (done) {
        console.info(TAG + "************* testRdbStoreDataShareFunc0003 start *************")
        let u8 = new Uint8Array([1, 2, 3])
        let valueBucket = {
            "name": "zhangsan",
            "age": 18,
            "salary": 100.5,
            "blobType": u8,
        }
        await rdbStore.insert("test", valueBucket)

        u8 = new Uint8Array([4, 5, 6])
        valueBucket = {
            "name": "lisi",
            "age": 28,
            "salary": 200.5,
            "blobType": u8,
        }

        let predicates = new dataSharePredicates.DataSharePredicates()
        predicates.equalTo("name", "zhangsan")

        await rdbStore.update("test", valueBucket, predicates, async function (err, ret) {
            if (err) {
                console.info("Update err: " + err)
                expect(false).assertTrue()
            }
            expect(1).assertEqual(ret)
            console.info("Update done: " + ret)
            let rdbPredicates = await new dataRdb.RdbPredicates("test")
            rdbPredicates.equalTo("name", "lisi")
            let resultSet = await rdbStore.query(rdbPredicates)
            expect(1).assertEqual(resultSet.rowCount)
            expect(true).assertEqual(resultSet.goToFirstRow())
            const id = resultSet.getLong(resultSet.getColumnIndex("id"))
            const name = resultSet.getString(resultSet.getColumnIndex("name"))
            const age = resultSet.getLong(resultSet.getColumnIndex("age"))
            const salary = resultSet.getDouble(resultSet.getColumnIndex("salary"))
            const blobType = resultSet.getBlob(resultSet.getColumnIndex("blobType"))

            expect("lisi").assertEqual(name)
            expect(28).assertEqual(age)
            expect(200.5).assertEqual(salary)
            expect(4).assertEqual(blobType[0])
            expect(5).assertEqual(blobType[1])
            expect(6).assertEqual(blobType[2])
            console.info(TAG + "dataShare update: {id=" + id + ", name=" + name + ", " +
                "age=" + age + ", salary=" + salary + ", blobType=" + blobType)
            resultSet = null
        })

        done()
        console.info(TAG + "************* testRdbStoreDataShareFunc0003 end *************")
    })

    /**
     * @tc.name rdb DataShare query test
     * @tc.number SUB_DataShare_Rdb_Func0004
     * @tc.desc rdb DataShare query promise Func test
     */
    it('testRdbStoreDataShareFunc0004', 0, async function (done) {
        console.info(TAG + "************* testRdbStoreDataShareFunc0004 start *************")
        let u8 = new Uint8Array([4, 5, 6])
        let valueBucket = {
            "name": "zhangsan",
            "age": 18,
            "salary": 100.5,
            "blobType": u8,
        }
        await rdbStore.insert("test", valueBucket)

        let predicates = new dataSharePredicates.DataSharePredicates()
        predicates.equalTo("name", "zhangsan")
        let queryPromise = rdbStore.query("test", predicates)
        queryPromise.then((resultSet) => {
            console.info(TAG + "DataShare Query done: ")
            expect(true).assertEqual(resultSet.goToFirstRow())
            const name = resultSet.getString(resultSet.getColumnIndex("name"))
            const age = resultSet.getLong(resultSet.getColumnIndex("age"))
            const salary = resultSet.getDouble(resultSet.getColumnIndex("salary"))
            const blobType = resultSet.getBlob(resultSet.getColumnIndex("blobType"))

            expect("zhangsan").assertEqual(name)
            expect(18).assertEqual(age)
            expect(100.5).assertEqual(salary)
            expect(4).assertEqual(blobType[0])
            expect(5).assertEqual(blobType[1])
            expect(6).assertEqual(blobType[2])

        }).catch((err) => {
            console.info(TAG + "Query err: " + err)
            expect(false).assertTrue()
        })
        await queryPromise

        done()
        console.info(TAG + "************* testRdbStoreDataShareFunc0004 end *************")
    })

    /**
     * @tc.name rdb DataShare query test
     * @tc.number SUB_DataShare_Rdb_Func0005
     * @tc.desc rdb DataShare query callback Func test
     */
    it('testRdbStoreDataShareFunc0005', 0, async function (done) {
        console.info(TAG + "************* testRdbStoreDataShareFunc0005 start *************")
        let u8 = new Uint8Array([4, 5, 6])
        let valueBucket = {
            "name": "zhangsan",
            "age": 18,
            "salary": 100.5,
            "blobType": u8,
        }
        await rdbStore.insert("test", valueBucket)

        let predicates = new dataSharePredicates.DataSharePredicates()
        predicates.equalTo("name", "zhangsan")

        await rdbStore.query("test", predicates, ["ID", "NAME", "AGE", "SALARY", "blobType"],
            function (err, resultSet) {
                if (err) {
                    console.info("Query err: " + err)
                    expect(false).assertTrue()
                }
                expect(true).assertEqual(resultSet.goToFirstRow())
                const name = resultSet.getString(resultSet.getColumnIndex("name"))
                const age = resultSet.getLong(resultSet.getColumnIndex("age"))
                const salary = resultSet.getDouble(resultSet.getColumnIndex("salary"))
                const blobType = resultSet.getBlob(resultSet.getColumnIndex("blobType"))

                expect("zhangsan").assertEqual(name)
                expect(18).assertEqual(age)
                expect(100.5).assertEqual(salary)
                expect(4).assertEqual(blobType[0])
                expect(5).assertEqual(blobType[1])
                expect(6).assertEqual(blobType[2])
            })

        done()
        console.info(TAG + "************* testRdbStoreDataShareFunc0005 end *************")
    })

    /**
     * @tc.name rdb DataShare delete test
     * @tc.number SUB_DataShare_Rdb_Func0006
     * @tc.desc rdb DataShare delete Func test
     */
    it('testRdbStoreDataShareFunc0006', 0, async function (done) {
        console.info(TAG + "************* testRdbStoreDataShareFunc0006 start *************")
        let u8 = new Uint8Array([1, 2, 3])
        let valueBucket = {
            "name": "zhangsan",
            "age": 18,
            "salary": 100.5,
            "blobType": u8,
        }

        await rdbStore.insert("test", valueBucket)
        let predicates = new dataSharePredicates.DataSharePredicates()
        predicates.equalTo("name", "zhangsan")
        let deletePromise = rdbStore.delete("test", predicates)
        deletePromise.then(async (ret) => {
            expect(1).assertEqual(ret)
            console.info(TAG + "Delete done: " + ret)
        }).catch((err) => {
            console.info(TAG + "Delete err: " + err)
            expect(false).assertTrue()
        })
        await deletePromise

        let rdbPredicates = await new dataRdb.RdbPredicates("test")
        rdbPredicates.equalTo("name", "zhangsan")
        let resultSet = await rdbStore.query(rdbPredicates)
        expect(false).assertEqual(resultSet.goToFirstRow())
        resultSet = null

        done()
        console.info(TAG + "************* testRdbStoreDataShareFunc0006 end *************")
    })

    /**
     * @tc.name rdb DataShare delete test
     * @tc.number SUB_DataShare_Rdb_Func0007
     * @tc.desc rdb DataShare delete Func test
     */
    it('testRdbStoreDataShareFunc0007', 0, async function (done) {
        console.info(TAG + "************* testRdbStoreDataShareFunc0007 start *************")
        let u8 = new Uint8Array([1, 2, 3])
        let valueBucket = {
            "name": "zhangsan",
            "age": 18,
            "salary": 100.5,
            "blobType": u8,
        }
        await rdbStore.insert("test", valueBucket)

        let predicates = new dataSharePredicates.DataSharePredicates()
        predicates.equalTo("name", "zhangsan")

        await rdbStore.delete("test", predicates, async function (err, ret) {
            if (err) {
                console.info("Delete err: " + err)
                expect(false).assertTrue()
            }
            expect(1).assertEqual(ret)
            console.info("Delete done: " + ret)
            let rdbPredicates = await new dataRdb.RdbPredicates("test")
            rdbPredicates.equalTo("name", "zhangsan")
            let resultSet = await rdbStore.query(rdbPredicates)
            expect(false).assertEqual(resultSet.goToFirstRow())
            resultSet = null
        })

        done()
        console.info(TAG + "************* testRdbStoreDataShareFunc0007 end *************")
    })
    console.info(TAG + "*************Unit Test End*************")
})}