// @ts-nocheck
/*
* Copyright (c) 2021 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'
import storage from '@ohos.data.storage'

const PATH = '/data/storage/el2/database/test_storage';
var mPref;

describe('storageTest', function () {
    beforeAll(function () {
        console.info('beforeAll')
        mPref = storage.getStorageSync(PATH);
    })

    afterAll(function () {
        console.info('afterAll')
        storage.deleteStorageSync(PATH);
    })

    /**
     * @tc.name getStorageSync interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Helper_0010
     * @tc.desc getStorageSync interface test
     */
    it('testGetStorageHelper001', 0, function () {
        mPref = storage.getStorageSync(PATH);
        mPref.putSync('test', 2);
        mPref.flushSync();
        var value = mPref.getSync('test', 0);
        expect(value).assertEqual(2);
    })

    /**
     * @tc.name getStorage interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Helper_0020
     * @tc.desc getStorage interface test
     */
    it('testGetStorageHelper002', 0, async function (done) {
        const promise = storage.getStorage(PATH);
        promise.then((pref) => {
            pref.putSync('test', 2);
            pref.flushSync();
            var value = mPref.getSync('test', 0);
            expect(value).assertEqual(2);
        }).catch((err) => {
            expect(null).assertFail();
        });
        await promise;
        done();
    })
	
	/**
     * @tc.name getStorage callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Callback_0020
     * @tc.desc getStorage callback interface test
     */
    it('testGetStorageCallback0020', 0, async function (done) {
        storage.getStorage(PATH,(err,pref)=>{
            pref.putSync('test', 2);
            pref.flushSync();
            var value = mPref.getSync('test', 0);
            expect(value).assertEqual(2);
        });
        done();
    })

    /**
     * @tc.name removeStorageFromCacheSync interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Helper_0030
     * @tc.desc removeStorageFromCacheSync interface test
     */
    it('testRemoveStorageFromCache001', 0, function () {
        let perf = storage.getStorageSync('/data/test_storage1');
        perf.putSync('test', 2);
        try {
            storage.removeStorageFromCacheSync('/data/test_storage1');
        } catch (e) {
            expect(null).assertFail();
        }
        var value = mPref.getSync('test', 0);
        expect(value).assertEqual(2);
    })

    /**
     * @tc.name removeStorageFromCache promise interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Helper_0040
     * @tc.desc removeStorageFromCache promise interface test
     */
    it('testRemoveStorageFromCache002', 0, async function (done) {
        let perf = storage.getStorageSync('/data/test_storage2');
        perf = null;
        const promise = storage.removeStorageFromCache('/data/test_storage2');
        promise.then((pref) => {
        }).catch((err) => {
            expect(null).assertFail();
        });
        await promise;
        done();
    })
	
    /**
     * @tc.name removeStorageFromCache callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Helper_0042
     * @tc.desc removeStorageFromCache callback interface test
     */
    it('testRemoveStorageFromCache004', 0, async function (done) {
        let perf = storage.getStorageSync('/data/test_storage2');
        perf = null;
        storage.removeStorageFromCache('/data/test_storage2',(err,pref)=>{
			expect(err == null).assertTrue();
		});
        done();
    })

    /**
     * @tc.name removeStorageFromCache callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Helper_0041
     * @tc.desc removeStorageFromCache callback interface test
     */
//    it('testRemoveStorageFromCache003', 0, function (done) {
//        let perf = storage.getStorageSync('/data/test_storage3');
//        storage.removeStorageFromCache(perf, function (err) {
//            if (err) {
//                console.info("removeStorageFromCache callback interface test failed" + err);
//                expect(null).assertFail();
//                done();
//                return
//            }
//            console.info("removeStorageFromCache callback interface test successfully.");
//            expect(true).assertTrue();
//            done();
//        })
//
//    })

    /**
     * @tc.name deleteStorageSync interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Helper_0050
     * @tc.desc deleteStorageSync interface test
     */
    it('testDeleteStorageHelper001', 0, function () {
        let perf = storage.getStorageSync('/data/test_storage3');
        try {
            storage.deleteStorageSync('/data/test_storage3');
        } catch (e) {
            expect(null).assertFail();
        }
        try {
            perf.putSync("int", 3);
        } catch (e) {
            expect(null).assertFail();
        }
    })

    /**
     * @tc.name deleteStorage interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Helper_0060
     * @tc.desc deleteStorage interface test
     */
    it('testDeleteStorageHelper002', 0, async function (done) {
        let perf = storage.getStorageSync('/data/test_storage4');
        perf = null;
        const promise = storage.deleteStorage('/data/test_storage4');
        promise.then((pref) => {
        }).catch((err) => {
            expect(null).assertFail();
        });
        await promise;
        done();
    })
	
	/**
     * @tc.name deleteStorag callback interface test
     * @tc.number SUB_DDM_AppDataFWK_JSPreferences_Storage_Callback_0070
     * @tc.desc deleteStorage interface test
     */
    it('testDeleteStoragCallback0070', 0, async function (done) {
        let perf = storage.getStorageSync('/data/test_storage4');
        perf = null;
        storage.deleteStorage('/data/test_storage4',(err)=>{
			expect(err == null).assertTrue();
		});
        done();
    })
})