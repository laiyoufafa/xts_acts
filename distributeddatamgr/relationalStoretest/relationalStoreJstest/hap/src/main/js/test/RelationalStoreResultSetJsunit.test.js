/*
 * Copyright (C) 2021-2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'
import data_Rdb from '@ohos.data.relationalStore'
import ability_featureAbility from '@ohos.ability.featureAbility';
var context = ability_featureAbility.getContext();

const TAG = '[RelationalStore_JSKITS_TEST]'
const CREATE_TABLE_TEST = 'CREATE TABLE IF NOT EXISTS test (' + 'id INTEGER PRIMARY KEY AUTOINCREMENT, ' + 'data1 text,' + 'data2 long, ' + 'data3 double,' + 'data4 blob)';

const STORE_CONFIG = {
    name: 'Resultset.db',
    securityLevel: data_Rdb.SecurityLevel.S1
}
const COLOUNM_NAMES = ["id","data1","data2","data3","data4"];
var rdbStore = undefined;

function createUint8Array(length) {
    let i = 0
    let index = 0
    let temp = null
    let u8 = new Uint8Array(length)
    length = typeof (length) === 'undefined' ? 9 : length
    for (i = 1; i <= length; i++) {
        u8[i - 1] = i
    }
    for (i = 1; i <= length; i++) {
        index = parseInt(Math.random() * (length - i)) + i
        if (index != i) {
            temp = u8[i - 1]
            u8[i - 1] = u8[index - 1]
            u8[index - 1] = temp
        }
    }
    return u8;
}

async function createBigData(size) {
    await rdbStore.executeSql("DELETE FROM test");
    let u8 = createUint8Array(32768);
    let valueBucketArray = new Array();
    for (let i = 0; i < size; i++) {
        valueBucketArray.push({
            "data1": "test" + i,
            "data2": 18,
            "data3": 100.5,
            "data4": u8,
        });
    }
    await rdbStore.batchInsert("test", valueBucketArray);
}

export default function relationalStoreResultSetTest() {
describe('relationalStoreResultSetTest', function () {
    beforeAll(async function () {
        console.info(TAG + 'beforeAll')
        rdbStore = await data_Rdb.getRdbStore(context, STORE_CONFIG);
        await rdbStore.executeSql(CREATE_TABLE_TEST, null);
        await createTest();
    })

    beforeEach(async function () {
        console.info(TAG + 'beforeEach')
    })

    afterEach(function () {
        console.info(TAG + 'afterEach')
    })

    afterAll(async function () {
        console.info(TAG + 'afterAll')
        rdbStore = null
        await data_Rdb.deleteRdbStore(context, 'Resultset.db');
    })
    //插入数据
    async function createTest() {
        console.info(TAG + 'createTest data start');
        {
            var u8 = new Uint8Array([1, 2, 3])
            const valueBucket = {
                'data1': 'hello',
                'data2': 10,
                'data3': 1.0,
                'data4': u8,
            }
            await rdbStore.insert('test', valueBucket)
        }
        {
            var u8 = new Uint8Array([3, 4, 5])
            const valueBucket = {
                'data1': '2',
                'data2': -5,
                'data3': 2.5,
                'data4': u8,
            }
            await rdbStore.insert('test', valueBucket)
        }
        {
            var u8 = new Uint8Array(0)
            const valueBucket = {
                'data1': 'hello world',
                'data2': 3,
                'data3': 1.8,
                'data4': u8,
            }
            await rdbStore.insert('test', valueBucket)
        }
        console.info(TAG + 'createTest data end');
    }

    /**
     * @tc.name resultSet getBlob normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0010
     * @tc.desc resultSet getBlob normal test
     */
    it('testGetBlob0001', 0, async function (done) {
        console.info(TAG + '************* testGetBlob0001 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                const id = resultSet.getLong(resultSet.getColumnIndex('id'))
                const data4 = resultSet.getBlob(resultSet.getColumnIndex('data4'))
                console.info(TAG + 'id=' + id + ', data4=' + data4);
                expect(1).assertEqual(data4[0]);
                expect(2).assertEqual(data4[1]);
                expect(3).assertEqual(data4[2]);
            }
            resultSet.close();
            expect(true).assertEqual(resultSet.isClosed)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet = null
        done();
        console.info(TAG + '************* testGetBlob0001 end *************');
    })

    /**
     * @tc.name resultSet getBlob normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0011
     * @tc.desc resultSet getBlob normal test
     */
    it('testGetBlob0002', 0, async function (done) {
        console.info(TAG + '************* testGetBlob0002 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                const id = resultSet.getLong(resultSet.getColumnIndex('id'))
                const data4 = resultSet.getBlob(resultSet.getColumnIndex('data4'))
                console.info(TAG + 'id=' + id + ', data4=' + data4);
                expect(3).assertEqual(data4[0]);
                expect(4).assertEqual(data4[1]);
                expect(5).assertEqual(data4[2]);
            }
            resultSet.close();
            expect(true).assertEqual(resultSet.isClosed)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet = null
        done();
        console.info(TAG + '************* testGetBlob0002 end *************');
    })

    /**
     * @tc.name resultSet getBlob normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0012
     * @tc.desc resultSet getBlob normal test
     */
    it('testGetBlob0003', 0, async function (done) {
        console.info(TAG + '************* testGetBlob0003 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                const id = resultSet.getLong(resultSet.getColumnIndex('id'))
                const data4 = resultSet.getBlob(resultSet.getColumnIndex('data4'))
                console.info(TAG + 'id=' + id);
            }
            resultSet.close();
            expect(true).assertEqual(resultSet.isClosed)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet = null
        done();
        console.info(TAG + '************* testGetBlob0003 end *************');
    })

    /**
     * @tc.name resultSet isStarted normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0020
     * @tc.desc resultSet isStarted normal test
     */
    it('testIsStarted0001', 0, async function (done) {
        console.info(TAG + '************* testIsStarted0001 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(false).assertEqual(resultSet.isStarted)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testIsStarted0001 end *************');
    })

    /**
     * @tc.name resultSet isStarted normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0021
     * @tc.desc resultSet isStarted normal test
     */
    it('testIsStarted0002', 0, async function (done) {
        console.info(TAG + '************* testIsStarted0002 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            resultSet.goTo(1)
            expect(true).assertEqual(resultSet.isStarted)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testIsStarted0002 end *************');
    })

    /**
     * @tc.name resultSet isStarted normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0022
     * @tc.desc resultSet isStarted normal test
     */
    it('testIsStarted0003', 0, async function (done) {
        console.info(TAG + "************* testIsStarted0003 start *************");
        let predicates = await new data_Rdb.RdbPredicates("test")
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(false).assertEqual(resultSet.isStarted)
            expect(true).assertEqual(resultSet.goToNextRow())
            expect(true).assertEqual(resultSet.isStarted)
            expect(false).assertEqual(resultSet.goToPreviousRow())
            expect(true).assertEqual(resultSet.isStarted)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + "************* testIsStarted0003 end *************");
    })

    /**
     * @tc.name resultSet isStarted with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0023
     * @tc.desc resultSet isStarted with no result test
     */
    it('testIsStarted0004', 0, async function (done) {
        console.info(TAG + '************* testIsStarted0004 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(true).assertEqual(resultSet.goToNextRow())
            expect(true).assertEqual(resultSet.isStarted)
            expect(true).assertEqual(resultSet.isStarted)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testIsStarted0004 end *************');
    })


    /**
     * @tc.name resultSet isEnded normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0030
     * @tc.desc resultSet isEnded normal test
     */
    it('testIsEnded0001', 0, async function (done) {
        console.info(TAG + '************* testIsEnded0001 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(true).assertEqual(resultSet.goToFirstRow())
            expect(false).assertEqual(resultSet.isEnded)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testIsEnded0001 end *************');
    })

    /**
     * @tc.name resultSet isEnded normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0031
     * @tc.desc resultSet isEnded normal test
     */
    it('testIsEnded0002', 0, async function (done) {
        console.info(TAG + '************* testIsEnded0002 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(true).assertEqual(resultSet.goToLastRow())
            expect(false).assertEqual(resultSet.isEnded)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testIsEnded0002 end *************');
    })

    /**
     * @tc.name resultSet isEnded normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0032
     * @tc.desc resultSet isEnded normal test
     */
    it('testIsEnded0003', 0, async function (done) {
        console.info(TAG + '************* testIsEnded0003 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            resultSet.goToRow(3)
            expect(true).assertEqual(resultSet.isEnded)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testIsEnded0003 end *************');
    })

    /**
     * @tc.name resultSet isEnded normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0033
     * @tc.desc resultSet isEnded normal test
     */
    it('testIsEnded0004', 0, async function (done) {
        console.info(TAG + '************* testIsEnded0004 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            resultSet.goToRow(3)
            expect(true).assertEqual(resultSet.isEnded)
            expect(true).assertEqual(resultSet.isEnded)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testIsEnded0004 end *************');
    })

    /**
     * @tc.name resultSet rowCount normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0040
     * @tc.desc resultSet rowCount normal test
     */
    it('testRowCount0001', 0, async function (done) {
        console.info(TAG + '************* testRowCount0001 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(3).assertEqual(resultSet.rowCount)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testRowCount0001 end *************');
    })

    /**
     * @tc.name resultSet rowCount with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0041
     * @tc.desc resultSet rowCount with no result test
     */
    it('testRowCount0002', 0, async function (done) {
        console.info(TAG + '************* testRowCount0002 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        predicates.equalTo('name', 'wangwu');
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(-1).assertEqual(resultSet.rowCount)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testRowCount0002 end *************');
    })

    /**
     * @tc.name resultSet rowCount test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0042
     * @tc.desc resultSet rowCount test
     */
    it('testRowCount0003', 0, async function (done) {
        console.info(TAG + '************* testRowCount0003 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        predicates.equalTo('data1', 'hello');
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(1).assertEqual(resultSet.rowCount)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testRowCount0003 end *************');
    })

    /**
     * @tc.name resultSet rowCount test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0043
     * @tc.desc resultSet rowCount test
     */
    it('testRowCount0004', 0, async function (done) {
        console.info(TAG + '************* testRowCount0004 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        predicates.equalTo('data1', 'hello');
        predicates.equalTo('data2', 3);
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(0).assertEqual(resultSet.rowCount)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testRowCount0003 end *************');
    })

    /**
     * @tc.name resultSet getLong test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0050
     * @tc.desc resultSet getLong test
     */
    it('testGetLong0001', 0, async function (done) {
        console.info(TAG + '************* testGetLong0001 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                const id = resultSet.getLong(resultSet.getColumnIndex('id'))
                const data2 = resultSet.getLong(resultSet.getColumnIndex('data2'))
                console.info(TAG + 'id=' + id + ', data2=' + data2);
                expect(10).assertEqual(data2);
            }
            resultSet.close();
            expect(true).assertEqual(resultSet.isClosed)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet = null
        done();
        console.info(TAG + '************* testGetLong0001 end *************');
    })

    /**
     * @tc.name resultSet getLong test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0051
     * @tc.desc resultSet getLong test
     */
    it('testGetLong0002', 0, async function (done) {
        console.info(TAG + '************* testGetLong0002 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                const data1 = resultSet.getLong(resultSet.getColumnIndex('data1'))
                expect(2).assertEqual(data1);
            }
            resultSet.close();
            expect(true).assertEqual(resultSet.isClosed)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet = null
        done();
        console.info(TAG + '************* testGetLong0002 end *************');
    })

    /**
     * @tc.name resultSet getLong test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0052
     * @tc.desc resultSet getLong test
     */
    it('testGetLong0003', 0, async function (done) {
        console.info(TAG + '************* testGetLong0003 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                const data2 = resultSet.getLong(resultSet.getColumnIndex('data2'))
                expect(-5).assertEqual(data2);
            }
            resultSet.close();
            expect(true).assertEqual(resultSet.isClosed)
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet = null
        done();
        console.info(TAG + '************* testGetLong0003 end *************');
    })

    /**
     * @tc.name resultSet getString test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0060
     * @tc.desc resultSet getString test
     */
    it('testGetString0001', 0, async function (done) {
        console.info(TAG + '************* testGetString0001 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        {
            expect(true).assertEqual(resultSet.goToFirstRow())
            const data1 = resultSet.getString(resultSet.getColumnIndex('data1'))
            expect('hello').assertEqual(data1);
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testGetString0001 end *************');
    })

    /**
     * @tc.name resultSet getString test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0061
     * @tc.desc resultSet getString test
     */
    it('testGetString0002', 0, async function (done) {
        console.info(TAG + '************* testGetString0002 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        {
            expect(true).assertEqual(resultSet.goToFirstRow())
            const data2 = resultSet.getString(resultSet.getColumnIndex('data2'))
            expect('10').assertEqual(data2);
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testGetString0002 end *************');
    })

    /**
     * @tc.name resultSet getString test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0062
     * @tc.desc resultSet getString test
     */
    it('testGetString0003', 0, async function (done) {
        console.info(TAG + '************* testGetString0003 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        {
            expect(true).assertEqual(resultSet.goToFirstRow())
            expect(true).assertEqual(resultSet.goToNextRow())
            const data3 = resultSet.getString(resultSet.getColumnIndex('data3'))
            expect('2.5').assertEqual(data3);
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testGetString0003 end *************');
    })

    /**
     * @tc.name resultSet getString test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0063
     * @tc.desc resultSet getString test
     */
    it('testGetString0004', 0, async function (done) {
        console.info(TAG + '************* testGetString0004 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        {
            expect(true).assertEqual(resultSet.goToFirstRow())
            expect(true).assertEqual(resultSet.goToNextRow())
            expect(true).assertEqual(resultSet.goToNextRow())
            const data1 = resultSet.getString(resultSet.getColumnIndex('data1'))
            const data2 = resultSet.getString(resultSet.getColumnIndex('data2'))
            const data3 = resultSet.getString(resultSet.getColumnIndex('data3'))
            expect('hello world').assertEqual(data1);
            expect('3').assertEqual(data2);
            expect('1.8').assertEqual(data3);
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testGetString0004 end *************');
    })

    /**
     * @tc.name resultSet isClosed test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0070
     * @tc.desc resultSet isClosed test
     */
    it('testIsClosed0001', 0, async function (done) {
        console.info(TAG + '************* testIsClosed0001 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)

        expect(3).assertEqual(resultSet.rowCount)
        resultSet.close();
        expect(true).assertEqual(resultSet.isClosed)

        resultSet = null
        done();
        console.info(TAG + '************* testIsClosed0001 end *************');
    })

    /**
     * @tc.name resultSet isClosed with not close test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0071
     * @tc.desc resultSet isClosed with not close test
     */
    it('testIsClosed0002', 0, async function (done) {
        console.info(TAG + '************* testIsClosed0002 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        expect(false).assertEqual(resultSet.isClosed)

        resultSet.close()
        done();
        console.info(TAG + '************* testIsClosed0002 end *************');
    })

    /**
     * @tc.name resultSet isClosed with not close test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0072
     * @tc.desc resultSet isClosed with not close test
     */
    it('testIsClosed0003', 0, async function (done) {
        console.info(TAG + '************* testIsClosed0003 start *************');
        let predicates = await new data_Rdb.RdbPredicates('test')
        predicates.equalTo('name', 'wangwu');
        let resultSet = await rdbStore.query(predicates)
        expect(false).assertEqual(resultSet.isClosed)

        resultSet.close()
        done();
        console.info(TAG + '************* testIsClosed0003 end *************');
    })

    /**
     * @tc.name resultSet columnCount test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0080
     * @tc.desc resultSet columnCount test
     */
    it('testColumnCount0001', 0, async function (done) {
        console.info(TAG + '************* testColumnCount0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            expect(5).assertEqual(resultSet.columnCount);
            resultSet.close();
            done();
            console.info(TAG + '************* testColumnCount0001 end *************');
        }
    })

    /**
     * @tc.name resultSet columnCount test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0081
     * @tc.desc resultSet columnCount test
     */
    it('testColumnCount0002', 0, async function (done) {
        console.info(TAG + '************* testColumnCount0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            expect(0).assertEqual(resultSet.columnCount);
            resultSet.close();
            done();
            console.info(TAG + '************* testColumnCount0002 end *************');
        }
    })

    /**
     * @tc.name resultSet rowIndex test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0090
     * @tc.desc resultSet rowIndex test
     */
    it('testRowIndex0001', 0, async function (done) {
        console.info(TAG + '************* testRowIndex0001 *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(0).assertEqual(resultSet.rowIndex)
            }

            resultSet.close();
            done();
            console.info(TAG + '************* testRowIndex0001 end *************');
        }
    })

    /**
     * @tc.name resultSet rowIndex at last row test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0091
     * @tc.desc resultSet rowIndex at last row test
     */
    it('testRowIndex0002', 0, async function (done) {
        console.info(TAG + '************* testRowIndex0002 *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
                expect(2).assertEqual(resultSet.rowIndex)
            }

            resultSet.close();
            done();
            console.info(TAG + '************* testRowIndex0002 end *************');
        }
    })

    /**
     * @tc.name resultSet goToFirstRow normal test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0100
     * @tc.desc resultSet goToFirstRow normal test
     */
    it('testGoToFirstRow0001', 0, async function (done) {
        console.info(TAG + '************* testGoToFirstRow0001 start *************');

        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(true).assertEqual(resultSet.goToFirstRow())
            resultSet.close();
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet = null
        done();
        console.info(TAG + '************* testGoToFirstRow0001 end *************');
    })

    /**
     * @tc.name resultSet goToFirstRow with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0101
     * @tc.desc resultSet goToFirstRow with no result test
     */
    it('testGoToFirstRow0002', 0, async function (done) {
        console.info(TAG + '************* testGoToFirstRow0002 start *************');

        let predicates = await new data_Rdb.RdbPredicates('test')
        predicates.equalTo('name', 'wangwu');
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(false).assertEqual(resultSet.goToFirstRow())
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testGoToFirstRow0002 end *************');
    })

    /**
     * @tc.name resultSet goToFirstRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0102
     * @tc.desc resultSet goToFirstRow test
     */
    it('testGoToFirstRow0003', 0, async function (done) {
        console.info(TAG + '************* testGoToFirstRow0003 start *************');

        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try {
            expect(true).assertEqual(resultSet.goToFirstRow())
            expect(true).assertEqual(resultSet.goToNextRow())
            expect(true).assertEqual(resultSet.goToFirstRow())
        } catch (e) {
            expect(null).assertFail();
        }
        resultSet.close()
        done();
        console.info(TAG + '************* testGoToFirstRow0003 end *************');
    })

    /**
     * @tc.name resultSet goToLastRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0110
     * @tc.desc resultSet goToFirstRow test
     */
    it('testGoToLastRow0001', 0, async function (done) {
        console.info(TAG + '************* testGoToLastRow0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToLastRow0001 end *************');
        }
    })

    /**
     * @tc.name resultSet goToLastRow with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0111
     * @tc.desc resultSet goToLastRow with no result test
     */
    it('testGoToLastRow0002', 0, async function (done) {
        console.info(TAG + '************* testGoToLastRow0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            {
                expect(false).assertEqual(resultSet.goToLastRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToLastRow0002 end *************');
        }
    })

    /**
     * @tc.name resultSet goToLastRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0112
     * @tc.desc resultSet goToLastRow test
     */
    it('testGoToLastRow0003', 0, async function (done) {
        console.info(TAG + '************* testGoToLastRow0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
                expect(true).assertEqual(resultSet.goToPreviousRow())
                expect(true).assertEqual(resultSet.goToLastRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToLastRow0003 end *************');
        }
    })

    /**
     * @tc.name resultSet goToNextRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0120
     * @tc.desc resultSet goToNextRow test
     */
    it('testGoToNextRow0001', 0, async function (done) {
        console.info(TAG + '************* testGoToNextRow0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToNextRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToNextRow0001 end *************');
        }
    })

    /**
     * @tc.name resultSet goToNextRow with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0121
     * @tc.desc resultSet goToNextRow with no result test
     */
    it('testGoToNextRow0002', 0, async function (done) {
        console.info(TAG + '************* testGoToNextRow0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            {
                expect(false).assertEqual(resultSet.goToNextRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToNextRow0002 end *************');
        }
    })

    /**
     * @tc.name resultSet goToNextRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0122
     * @tc.desc resultSet goToNextRow test
     */
    it('testGoToNextRow0003', 0, async function (done) {
        console.info(TAG + '************* testGoToNextRow0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                expect(true).assertEqual(resultSet.goToPreviousRow())
                expect(true).assertEqual(resultSet.goToNextRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToNextRow0003 end *************');
        }
    })

    /**
     * @tc.name resultSet goToNextRow after last row test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0123
     * @tc.desc resultSet goToNextRow after last row test
     */
    it('testGoToNextRow0004', 0, async function (done) {
        console.info(TAG + '************* testGoToNextRow0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
                expect(false).assertEqual(resultSet.goToNextRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToNextRow0004 end *************');
        }
    })

    /**
     * @tc.name resultSet goToPreviousRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0130
     * @tc.desc resultSet goToPreviousRow test
     */
    it('testGoToPreviousRow0001', 0, async function (done) {
        console.info(TAG + '************* testGoToPreviousRow0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(false).assertEqual(resultSet.goToPreviousRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToPreviousRow0001 end *************');
        }
    })

    /**
     * @tc.name resultSet goToPreviousRow with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0131
     * @tc.desc resultSet goToPreviousRow with no result test
     */
    it('testGoToPreviousRow0002', 0, async function (done) {
        console.info(TAG + '************* testGoToPreviousRow0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            {
                expect(false).assertEqual(resultSet.goToPreviousRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToPreviousRow0002 end *************');
        }
    })

    /**
     * @tc.name resultSet goToPreviousRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0132
     * @tc.desc resultSet goToPreviousRow test
     */
    it('testGoToPreviousRow0003', 0, async function (done) {
        console.info(TAG + '************* testGoToPreviousRow0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                expect(true).assertEqual(resultSet.goToPreviousRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToPreviousRow0003 end *************');
        }
    })

    /**
     * @tc.name resultSet goToPreviousRow after last row test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0133
     * @tc.desc resultSet goToPreviousRow after last row test
     */
    it('testGoToPreviousRow0004', 0, async function (done) {
        console.info(TAG + '************* testGoToPreviousRow0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
                expect(true).assertEqual(resultSet.goToPreviousRow())
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToPreviousRow0004 end *************');
        }
    })

    /**
     * @tc.name resultSet goTo test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0140
     * @tc.desc resultSet goTo test
     */
    it('testGoTo0001', 0, async function (done) {
        console.info(TAG + '************* testGoTo0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                resultSet.goTo(1)
                expect(1).assertEqual(resultSet.rowIndex)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoTo0001 end *************');
        }
    })

    /**
     * @tc.name resultSet goTo with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0141
     * @tc.desc resultSet goTo with no result test
     */
    it('testGoTo0002', 0, async function (done) {
        console.info(TAG + '************* testGoTo0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goTo(1)
                expect(-1).assertEqual(resultSet.rowIndex)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoTo0002 end *************');
        }
    })

    /**
     * @tc.name resultSet goTo test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0142
     * @tc.desc resultSet goTo test
     */
    it('testGoTo0003', 0, async function (done) {
        console.info(TAG + '************* testGoTo0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                resultSet.goTo(1)
                expect(2).assertEqual(resultSet.rowIndex)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoTo0003 end *************');
        }
    })

    /**
     * @tc.name resultSet goTo after last row test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0143
     * @tc.desc resultSet goTo after last row test
     */
    it('testGoTo0004', 0, async function (done) {
        console.info(TAG + '************* testGoTo0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
                resultSet.goTo(5)
                expect(3).assertEqual(resultSet.rowIndex)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoTo0004 end *************');
        }
    })

    /**
     * @tc.name resultSet goToRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0150
     * @tc.desc resultSet goToRow test
     */
    it('testGoToRow0001', 0, async function (done) {
        console.info(TAG + '************* testGoToRow0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                resultSet.goToRow(1)
                expect(1).assertEqual(resultSet.rowIndex)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToRow0001 end *************');
        }
    })

    /**
     * @tc.name resultSet goToRow with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0151
     * @tc.desc resultSet goToRow with no result test
     */
    it('testGoToRow0002', 0, async function (done) {
        console.info(TAG + '************* testGoToRow0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goToRow(1)
                expect(-1).assertEqual(resultSet.rowIndex)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToRow0002 end *************');
        }
    })

    /**
     * @tc.name resultSet goToRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0152
     * @tc.desc resultSet goToRow test
     */
    it('testGoToRow0003', 0, async function (done) {
        console.info(TAG + '************* testGoToRow0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                resultSet.goToRow(1)
                expect(1).assertEqual(resultSet.rowIndex)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToRow0003 end *************');
        }
    })

    /**
     * @tc.name resultSet goToRow after last row test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0153
     * @tc.desc resultSet goToRow after last row test
     */
    it('testGoToRow0004', 0, async function (done) {
        console.info(TAG + '************* testGoToRow0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
                resultSet.goToRow(5)
                expect(3).assertEqual(resultSet.rowIndex)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGoToRow0004 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtFirstRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0160
     * @tc.desc resultSet isAtFirstRow test
     */
    it('testIsAtFirstRow0001', 0, async function (done) {
        console.info(TAG + '************* testIsAtFirstRow0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.isAtFirstRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtFirstRow0001 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtFirstRow with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0161
     * @tc.desc resultSet isAtFirstRow with no result test
     */
    it('testIsAtFirstRow0002', 0, async function (done) {
        console.info(TAG + '************* testIsAtFirstRow0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            {
                expect(false).assertEqual(resultSet.isAtFirstRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtFirstRow0002 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtFirstRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0162
     * @tc.desc resultSet isAtFirstRow test
     */
    it('testIsAtFirstRow0003', 0, async function (done) {
        console.info(TAG + '************* testIsAtFirstRow0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                expect(false).assertEqual(resultSet.isAtFirstRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtFirstRow0003 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtFirstRow after last row test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0163
     * @tc.desc resultSet isAtFirstRow after last row test
     */
    it('testIsAtFirstRow0004', 0, async function (done) {
        console.info(TAG + '************* testIsAtFirstRow0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
                expect(false).assertEqual(resultSet.isAtFirstRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtFirstRow0004 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtFirstRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0165
     * @tc.descresultSet isAtFirstRow test
     */
    it('testIsAtFirstRow0005', 0, async function (done) {
        console.info(TAG + '************* testIsAtFirstRow0005 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goTo(1)
                resultSet.goTo(0)
                expect(true).assertEqual(resultSet.isAtFirstRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtFirstRow0005 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtFirstRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0166
     * @tc.descresultSet isAtFirstRow test
     */
    it('testIsAtFirstRow0006', 0, async function (done) {
        console.info(TAG + '************* testIsAtFirstRow0006 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goTo(1)
                expect(true).assertEqual(resultSet.isAtFirstRow)
                expect(true).assertEqual(resultSet.isAtFirstRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtFirstRow0006 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtLastRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0170
     * @tc.desc resultSet isAtLastRow test
     */
    it('testIsAtLastRow0001', 0, async function (done) {
        console.info(TAG + '************* testIsAtLastRow0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(false).assertEqual(resultSet.isAtLastRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtLastRow0001 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtLastRow with no result test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0171
     * @tc.desc resultSet isAtLastRow with no result test
     */
    it('testIsAtLastRow0002', 0, async function (done) {
        console.info(TAG + '************* testIsAtLastRow0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            {
                expect(false).assertEqual(resultSet.isAtLastRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtLastRow0002 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtLastRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0172
     * @tc.desc resultSet isAtLastRow test
     */
    it('testIsAtLastRow0003', 0, async function (done) {
        console.info(TAG + '************* testIsAtLastRow0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                expect(false).assertEqual(resultSet.isAtLastRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtLastRow0003 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtLastRow after last row test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0173
     * @tc.desc resultSet isAtLastRow after last row test
     */
    it('testIsAtLastRow0004', 0, async function (done) {
        console.info(TAG + '************* testIsAtLastRow0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToLastRow())
                expect(true).assertEqual(resultSet.isAtLastRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtLastRow0004 end *************');
        }
    })

    /**
     * @tc.name resultSet isAtLastRow test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0174
     * @tc.desc resultSet isAtLastRow test
     */
    it('testIsAtLastRow0005', 0, async function (done) {
        console.info(TAG + '************* testIsAtLastRow0005 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goToRow(2)
                expect(true).assertEqual(resultSet.isAtLastRow)
                expect(true).assertEqual(resultSet.isAtLastRow)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsAtLastRow0005 end *************');
        }
    })

    /**
     * @tc.name resultSet getDouble test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0180
     * @tc.desc resultSet getDouble test
     */
    it('testGetDouble0001', 0, async function (done) {
        console.info(TAG + '************* testGetDouble0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goTo(1)
                const data3 = resultSet.getDouble(resultSet.getColumnIndex('data3'))
                expect(1.0).assertEqual(data3)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGetDouble0001 end *************');
        }
    })

    /**
     * @tc.name resultSet getDouble test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0181
     * @tc.desc resultSet getDouble test
     */
    it('testGetDouble0002', 0, async function (done) {
        console.info(TAG + '************* testGetDouble0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goTo(2)
                const data3 = resultSet.getDouble(resultSet.getColumnIndex('data3'))
                expect(2.5).assertEqual(data3)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGetDouble0002 end *************');
        }
    })

    /**
     * @tc.name resultSet getDouble test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0182
     * @tc.desc resultSet getDouble test
     */
    it('testGetDouble0003', 0, async function (done) {
        console.info(TAG + '************* testGetDouble0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goTo(3)
                const data3 = resultSet.getDouble(resultSet.getColumnIndex('data3'))
                expect(1.8).assertEqual(data3)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGetDouble0003 end *************');
        }
    })

    /**
     * @tc.name resultSet getDouble test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0183
     * @tc.desc resultSet getDouble test
     */
    it('testGetDouble0004', 0, async function (done) {
        console.info(TAG + '************* testGetDouble0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goTo(1)
                const data2 = resultSet.getDouble(resultSet.getColumnIndex('data2'))
                expect(10).assertEqual(data2)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testGetDouble0004 end *************');
        }
    })

    /**
     * @tc.name resultSet isColumnNull test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0190
     * @tc.desc resultSet isColumnNull test
     */
    it('testIsColumnNull0001', 0, async function (done) {
        console.info(TAG + '************* testIsColumnNull0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                const isColumnNull1 = resultSet.isColumnNull(resultSet.getColumnIndex('data1'))
                expect(false).assertEqual(isColumnNull1)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsColumnNull0001 end *************');
        }
    })

    /**
     * @tc.name resultSet isColumnNull test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0191
     * @tc.desc resultSet isColumnNull test
     */
    it('testIsColumnNull0002', 0, async function (done) {
        console.info(TAG + '************* testIsColumnNull0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                expect(true).assertEqual(resultSet.goToFirstRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                expect(true).assertEqual(resultSet.goToNextRow())
                const isColumnNull4 = resultSet.isColumnNull(resultSet.getColumnIndex('data4'))
                expect(true).assertEqual(isColumnNull4)
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsColumnNull0002 end *************');
        }
    })

    /**
     * @tc.name resultSet isColumnNull test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0192
     * @tc.desc resultSet isColumnNull test
     */
    it('testIsColumnNull0003', 0, async function (done) {
        console.info(TAG + '************* testIsColumnNull0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            resultSet.goToRow(5)
            try{
                expect(false).assertEqual(resultSet.isColumnNull(2))
            }catch(e){
                expect(e.code).assertEqual("14800013")
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsColumnNull0003 end *************');
        }
    })
    /**
     * @tc.name resultSet isColumnNull test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0193
     * @tc.desc resultSet isColumnNull test
     */
    it('testIsColumnNull0004', 0, async function (done) {
        console.info(TAG + '************* testIsColumnNull0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            {
                resultSet.goToRow(2)
                expect(false).assertEqual(resultSet.isColumnNull(1))
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testIsColumnNull0004 end *************');
        }
    })

    /**
     * @tc.name resultSet getColumnIndex test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0200
     * @tc.desc resultSet getColumnIndex test
     */
    it('testGetColumnIndex0001', 0, async function (done) {
        console.info(TAG + '************* testGetColumnIndex0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            expect(true).assertEqual(resultSet.goToFirstRow())
            expect(1).assertEqual(resultSet.getColumnIndex('data1'))

            resultSet.close();
            done();
            console.info(TAG + '************* testGetColumnIndex0001 end *************');
        }
    })

    /**
     * @tc.name resultSet getColumnIndex test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0201
     * @tc.desc resultSet getColumnIndex test
     */
    it('testGetColumnIndex0002', 0, async function (done) {
        console.info(TAG + '************* testGetColumnIndex0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            expect(-1).assertEqual(resultSet.getColumnIndex('data1'))

            resultSet.close();
            done();
            console.info(TAG + '************* testGetColumnIndex0002 end *************');
        }
    })

    /**
     * @tc.name resultSet getColumnIndex test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0202
     * @tc.desc resultSet getColumnIndex test
     */
    it('testGetColumnIndex0003', 0, async function (done) {
        console.info(TAG + '************* testGetColumnIndex0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            expect(-1).assertEqual(resultSet.getColumnIndex('dataX'))

            resultSet.close();
            done();
            console.info(TAG + '************* testGetColumnIndex0003 end *************');
        }
    })

    /**
     * @tc.name resultSet getColumnIndex test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0203
     * @tc.desc resultSet getColumnIndex test
     */
    it('testGetColumnIndex0004', 0, async function (done) {
        console.info(TAG + '************* testGetColumnIndex0004 start *************');
        let errInfo = undefined;
        let predicates = await new data_Rdb.RdbPredicates('test')
        let resultSet = await rdbStore.query(predicates)
        try{
            let resultSetresult = resultSet.getColumnIndex('')
            expect(-1).assertEqual(resultSetresult)
        }catch(err){
            errInfo = err
        }
        expect(errInfo.code).assertEqual("401")
        resultSet.close();
        done();
        console.info(TAG + '************* testGetColumnIndex0004 end *************');
        
    })

    /**
     * @tc.name resultSet getColumnName test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0210
     * @tc.desc resultSet getColumnName test
     */
    it('testGetColumnName0001', 0, async function (done) {
        console.info(TAG + '************* testGetColumnIndex0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)

            expect('data1').assertEqual(resultSet.getColumnName(1))
            expect('data4').assertEqual(resultSet.getColumnName(4))

            resultSet.close();
            done();
            console.info(TAG + '************* testGetColumnName0001 end *************');
        }
    })

    /**
     * @tc.name resultSet getColumnName test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0211
     * @tc.desc resultSet getColumnName test
     */
    it('testGetColumnName0002', 0, async function (done) {
        console.info(TAG + '************* testGetColumnName0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)

            expect('').assertEqual(resultSet.getColumnName(1))
            expect('').assertEqual(resultSet.getColumnName(4))

            resultSet.close();
            done();
            console.info(TAG + '************* testGetColumnName0002 end *************');
        }
    })

    /**
     * @tc.name resultSet getColumnName test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0212
     * @tc.desc resultSet getColumnName test
     */
    it('testGetColumnName0003', 0, async function (done) {
        console.info(TAG + '************* testGetColumnName0003 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)

            expect('').assertEqual(resultSet.getColumnName(10))

            resultSet.close();
            done();
            console.info(TAG + '************* testGetColumnName0003 end *************');
        }
    })

    /**
     * @tc.name resultSet getColumnName test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0213
     * @tc.desc resultSet getColumnName test
     */
    it('testGetColumnName0004', 0, async function (done) {
        console.info(TAG + '************* testGetColumnName0004 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)

            expect('').assertEqual(resultSet.getColumnName(10))

            resultSet.close();
            done();
            console.info(TAG + '************* testGetColumnName0004 end *************');
        }
    })

    /**
     * @tc.name resultSet close test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0220
     * @tc.desc resultSet close test
     */
    it('testClose0001', 0, async function (done) {
        console.info(TAG + '************* testClose0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            resultSet.goToRow(1)
            resultSet.close()
            expect(true).assertEqual(resultSet.isClosed)

            resultSet = null;
            done();
            console.info(TAG + '************* testClose0001 end *************');
        }
    })

    /**
     * @tc.name resultSet close test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0221
     * @tc.desc resultSet close test
     */
    it('testClose0002', 0, async function (done) {
        console.info(TAG + '************* testClose0002 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            predicates.equalTo('name', 'wangwu');
            let resultSet = await rdbStore.query(predicates)
            resultSet.close()
            expect(true).assertEqual(resultSet.isClosed)

            resultSet = null;
            done();
            console.info(TAG + '************* testClose0002 end *************');
        }
    })

    /**
     * @tc.name resultSet columnNames test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0240
     * @tc.desc resultSet columnNames test
     */
     it('testcolumnNames0001', 0, async function (done) {
        console.info(TAG + '************* testcolumnNames0001 start *************');
        {
            let predicates = await new data_Rdb.RdbPredicates('test')
            let resultSet = await rdbStore.query(predicates)
            if (COLOUNM_NAMES == resultSet.columnNames){
                expect(1).assertEqual(0);
            }else{
                expect(0).assertEqual(0);
            }
            resultSet.close();
            done();
            console.info(TAG + '************* testcolumnNames0001 end *************');
        }
    })

    /**
     * @tc.name big resultSet data test
     * @tc.number SUB_DDM_AppDataFWK_JSRelationalStore_ResultSet_0250
     * @tc.desc big resultSet data test
     */
     it('testBigData0001', 0, async function (done) {
        console.log(TAG + "************* testBigData0001 start *************");
        {
            await createBigData(500);
            let resultSet = await rdbStore.querySql("SELECT * FROM test");
            let count = resultSet.rowCount;
            expect(500).assertEqual(count);

            resultSet.goToFirstRow();
            let i = 0;
            while (resultSet.isEnded == false) {
                expect("test" + i++).assertEqual(resultSet.getString(1))
                resultSet.goToNextRow();
            }

            resultSet.close()
            expect(true).assertEqual(resultSet.isClosed)
            resultSet = null;
            done();
            console.log(TAG + "************* testBigData0001 end *************");
        }
    })
    
    console.info(TAG + '*************Unit Test End*************');
})
}
