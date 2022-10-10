/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License')
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
import LightWeightMap from "@ohos.util.LightWeightMap";
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'
export default function LightWeightMapTest() {
describe("LightWeightMapTest", function () {
            
  /**
   * @tc.name: testConstructor001
   * @tc.desc: Create an LightWeightMap instance. For example: let lightWeightMap = new LightWeightMap().
   * @tc.author: wangyong
   */
  it("testConstructor001", 0, function () {
    try {
      let lightWeightMap = new LightWeightMap();
      expect(lightWeightMap != undefined).assertEqual(true);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(10200012);
      expect(err.message).assertEqual("The LightWeightMap's constructor cannot be directly invoked");
    }
  });
            
  /**
   * @tc.name: testSet002
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap. For example: lightWeightMap.set(1, "A").
   * @tc.author: wangyong
   */
  it("testSet002", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    let res = lightWeightMap.hasValue("A");
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(1);
    expect(res1).assertEqual(true);
  });
            
  /**
   * @tc.name: testSet003
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap. For example: lightWeightMap.set("a", "A").
   * @tc.author: wangyong
   */
  it("testSet003", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    let res = lightWeightMap.hasValue("A");
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey("a");
    expect(res1).assertEqual(true);
  });
            
  /**
   * @tc.name: testSet004
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap. For example: lightWeightMap.set("a", "A").
   * @tc.author: wangyong
   */
  it("testSet004", 0, function () {
    let lightWeightMap = new LightWeightMap();
    let a = [1, 2, 3, 4];
    lightWeightMap.set(1, a);
    let res = lightWeightMap.hasValue(a);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(1);
    expect(res1).assertEqual(true);
  });
            
  /**
   * @tc.name: testSet005
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap.
   * @tc.author: wangyong
   */
  it("testSet005", 0, function () {
    let lightWeightMap = new LightWeightMap();
    let c = {name: "lili", age: "13"};
    lightWeightMap.set(1, c);
    let res = lightWeightMap.hasValue(c);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(1);
    expect(res1).assertEqual(true);
  });
            
  /**
   * @tc.name: testGet006
   * @tc.desc: Get the corresponding value through the key. For example: lightWeightMap.get(4).
   * @tc.author: wangyong
   */
  it("testGet006", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.get(4);
    expect(res).assertEqual("D");
  });
            
  /**
   * @tc.name: testLength007
   * @tc.desc: Get the number of key value pairs in the lightWeightMap instance. For example: lightWeightMap.length.
   * @tc.author: wangyong
   */
  it("testLength007", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.length;
    expect(res).assertEqual(5);
  });
            
  /**
   * @tc.name: testHasAll008
   * @tc.desc: Judge whether a lightweightmap contains all key value pairs in another lightweightmap.
   * @tc.author: wangyong
   */
  it("testHasAll008", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    let lightWeightMap1 = new LightWeightMap();
    lightWeightMap1.set("a", "A");
    lightWeightMap1.set("d", "D");
    let res = lightWeightMap.hasAll(lightWeightMap1);
    expect(res).assertEqual(true);
  });
            
  /**
   * @tc.name: testConstructor001
   * @tc.desc: Determine whether the LightWeightMap contains the specified key. For example: lightWeightMap.hasKey("a").
   * @tc.author: wangyong
   */
  it("testHasKey009", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    let res = lightWeightMap.hasKey("a");
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(1);
    expect(res1).assertEqual(false);
  });
              
  /**
   * @tc.name: testHasValue010
   * @tc.desc: Determine whether the LightWeightMap contains the specified value. 
   * For example: lightWeightMap.hasValue("A").
   * @tc.author: wangyong
   */
  it("testHasValue010", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    let res = lightWeightMap.hasValue("A");
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasValue(1);
    expect(res1).assertEqual(false);
  });
              
  /**
   * @tc.name: testIncreaseCapacityTo011
   * @tc.desc: Expand the LightWeightMap instance capacity to the specified value. 
   * For example: lightWeightMap.increaseCapacityTo(3).
   * @tc.author: wangyong
   */
  it("testIncreaseCapacityTo011", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    lightWeightMap.increaseCapacityTo(3);
    let length = lightWeightMap.length;
    expect(length).assertEqual(5);
  });
              
  /**
   * @tc.name: testEntries012
   * @tc.desc: Get all key value pairs collection in lightWeightMap.
   * @tc.author: wangyong
   */
  it("testEntries012", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.entries();
    expect(JSON.stringify(res.next().value)).assertEqual('[1,"A"]');
    expect(JSON.stringify(res.next().value)).assertEqual('[2,"B"]');
    expect(JSON.stringify(res.next().value)).assertEqual('[3,"C"]');
    expect(JSON.stringify(res.next().value)).assertEqual('[4,"D"]');
    expect(JSON.stringify(res.next().value)).assertEqual('[5,"E"]');
  });
              
  /**
   * @tc.name: testGetIndexOfKey013
   * @tc.desc: Find the index of the key value pair according to the corresponding key. 
   * If no key is specified, return -1.
   * @tc.author: wangyong
   */
  it("testGetIndexOfKey013", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.getIndexOfKey(2);
    expect(res).assertEqual(1);
  });
              
  /**
   * @tc.name: testGetIndexOfValue014
   * @tc.desc: Find the index of the key value pair according to the corresponding value. 
   * If no key is specified, return -1.
   * @tc.author: wangyong
   */
  it("testGetIndexOfValue014", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    lightWeightMap.setValueAt(4, "F");
    let res = lightWeightMap.getIndexOfValue("F");
    expect(res).assertEqual(4);
  });
              
  /**
   * @tc.name: testIsEmpty015
   * @tc.desc: Determine whether the LightWeightMap instance is empty. For example: lightWeightMap.isEmpty().
   * @tc.author: wangyong
   */
  it("testIsEmpty015", 0, function () {
    let lightWeightMap = new LightWeightMap();
    let res1 = lightWeightMap.isEmpty();
    expect(res1).assertEqual(true);
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res2 = lightWeightMap.isEmpty();
    expect(res2).assertEqual(false);
  });
              
  /**
   * @tc.name: testGetKeyAt016
   * @tc.desc: Find the key of the key value pair according to the corresponding index. 
   * For example: lightWeightMap.getKeyAt(1).
   * @tc.author: wangyong
   */
  it("testGetKeyAt016", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.getKeyAt(1);
    expect(res).assertEqual(2);
  });
              
  /**
   * @tc.name: testKeys017
   * @tc.desc: Get a collection of all the keys in the LightWeightMap. For example: lightWeightMap.keys().
   * @tc.author: wangyong
   */
  it("testKeys017", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.keys();
    expect(res.next().value).assertEqual(1);
    expect(res.next().value).assertEqual(2);
    expect(res.next().value).assertEqual(3);
    expect(res.next().value).assertEqual(4);
    expect(res.next().value).assertEqual(5);
  });
              
  /**
   * @tc.name: testSetAll018
   * @tc.desc: Copy key value pairs from one LightWeightMap to another.
   * @tc.author: wangyong
   */
  it("testSetAll018", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let lightWeightMap1 = new LightWeightMap();
    lightWeightMap1.set(6, "A");
    lightWeightMap1.set(7, "B");
    lightWeightMap.setAll(lightWeightMap1);
    for (let i = 1; i < 8; i++) {
      expect(lightWeightMap.hasKey(i)).assertEqual(true);
    }
  });
              
  /**
   * @tc.name: testRemove019
   * @tc.desc: Delete key value pairs according to key. For example: lightWeightMap.remove(3).
   * @tc.author: wangyong
   */
  it("testRemove019", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.remove(3);
    expect(res).assertEqual("C");
    let res1 = lightWeightMap.hasValue("C");
    expect(res1).assertEqual(false);
  });
              
  /**
   * @tc.name: testRemoveAt020
   * @tc.desc: Delete key value pairs according to index. For example: lightWeightMap.removeAt(1).
   * @tc.author: wangyong
   */
  it("testRemoveAt020", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.removeAt(1);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasValue("A");
    expect(res1).assertEqual(true);
    let res2 = lightWeightMap.hasValue("B");
    expect(res2).assertEqual(false);
    let res3 = lightWeightMap.removeAt(10);
    expect(res3).assertEqual(false);
  });
              
  /**
   * @tc.name: testClear021
   * @tc.desc: Clear all key value pairs in LightWeightMap. For example: lightWeightMap.clear().
   * @tc.author: wangyong
   */
  it("testClear021", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    lightWeightMap.clear();
    let res = lightWeightMap.length;
    expect(res).assertEqual(0);
    let isEmpty = lightWeightMap.isEmpty();
    expect(isEmpty).assertEqual(true);
  });
              
  /**
   * @tc.name: testSetValueAt022
   * @tc.desc: Modify the value of the key value pair according to the corresponding index. 
   * For example: setValueAt(0, "a").
   * @tc.author: wangyong
   */
  it("testSetValueAt022", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    lightWeightMap.setValueAt(0, "a");
    let res = lightWeightMap.get(1);
    expect(res).assertEqual("a");
  });
              
  /**
   * @tc.name: testForEach023
   * @tc.desc: Traverse all key value pairs in the LightWeightMap instance.
   * @tc.author: wangyong
   */
  it("testForEach023", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let arr = [];
    lightWeightMap.forEach((value, index) => {
      arr.push(value);
    });
    let arr1 = ["A", "B", "C", "D", "E"];
    for (let i = 0; i < arr1.length; i++) {
      expect(arr[i]).assertEqual(arr1[i]);
    }
  });
              
  /**
   * @tc.name: testToString024
   * @tc.desc: Use "," to splice the elements in the LightWeightMap instance into a string. 
   * For example: lightWeightMap.toString().
   * @tc.author: wangyong
   */
  it("testToString024", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    let res = lightWeightMap.toString();
    expect(res).assertEqual("1:A,2:B,3:C");
  });
                
  /**
   * @tc.name: testValues025
   * @tc.desc: Get a collection of all the values in the LightWeightMap. For example: lightWeightMap.values().
   * @tc.author: wangyong
   */
  it("testValues025", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.values();
    expect(res.next().value).assertEqual("A");
    expect(res.next().value).assertEqual("B");
    expect(res.next().value).assertEqual("C");
    expect(res.next().value).assertEqual("D");
    expect(res.next().value).assertEqual("E");
  });
                
  /**
   * @tc.name: testGetValueAt026
   * @tc.desc: Get the value of the key value pair according to the corresponding index. 
   * For example: lightWeightMap.getValueAt(1).
   * @tc.author: wangyong
   */
  it("testGetValueAt026", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.getValueAt(1);
    expect(res).assertEqual("B");
  });
                
  /**
   * @tc.name: testIterator027
   * @tc.desc: Iterate over all key value pairs in the LightWeightMap. 
   * @tc.author: wangyong
   */
  it("testIterator027", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let iters = lightWeightMap[Symbol.iterator]();
    let flag = true;
    for (let i = 0, len = lightWeightMap.length; i < len; i++) {
      let entry = iters.next().value;
      let res = lightWeightMap.get(entry[0]);
      if (res != entry[1]) {
        flag = false;
        break;
      }
    }
    expect(flag).assertEqual(true);
  });
                
  /**
   * @tc.name: testSet028
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap. For example: lightWeightMap.set(1, null).
   * @tc.author: wangyong
   */
  it("testSet028", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, null);
    let res = lightWeightMap.hasValue(null);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(1);
    expect(res1).assertEqual(true);
  });
                
  /**
   * @tc.name: testSet029
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap. For example: lightWeightMap.set(null, null).
   * @tc.author: wangyong
   */
  it("testSet029", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(null, null);
    let res = lightWeightMap.hasValue(null);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(null);
    expect(res1).assertEqual(true);
  });
                
  /**
   * @tc.name: testSet030
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap. For example: lightWeightMap.set(true, false).
   * @tc.author: wangyong
   */
  it("testSet030", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(true, false);
    let res = lightWeightMap.hasValue(false);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(true);
    expect(res1).assertEqual(true);
  });
                
  /**
   * @tc.name: testSet031
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap. For example: lightWeightMap.set(1.23, 321).
   * @tc.author: wangyong
   */
  it("testSet031", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1.23, 321);
    let res = lightWeightMap.hasValue(321);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(1.23);
    expect(res1).assertEqual(true);
  });
                
  /**
   * @tc.name: testHasAll032
   * @tc.desc: Judge whether a lightweightmap contains all key value pairs in another lightweightmap.
   * @tc.author: wangyong
   */
  it("testHasAll032", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    let lightWeightMap1 = new LightWeightMap();
    lightWeightMap1.set("a1", "A1");
    lightWeightMap1.set("d1", "D1");
    let res = lightWeightMap.hasAll(lightWeightMap1);
    expect(res).assertEqual(false);
  });
                  
  /**
   * @tc.name: testHasAll033
   * @tc.desc: Judge whether a lightweightmap contains all key value pairs in another lightweightmap.
   * @tc.author: wangyong
   */
  it("testHasAll033", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    let lightWeightMap1 = new LightWeightMap();
    lightWeightMap1.set("a", "A1");
    lightWeightMap1.set("d", "D1");
    let res = lightWeightMap.hasAll(lightWeightMap1);
    expect(res).assertEqual(false);
  });
                  
  /**
   * @tc.name: testRemove034
   * @tc.desc: Delete key value pairs according to key. For example: lightWeightMap.remove(3).
   * @tc.author: wangyong
   */
  it("testRemove034", 0, function () {
    let lightWeightMap = new LightWeightMap();
    let res = lightWeightMap.remove(3);
    expect(res).assertEqual(undefined);
  });
                  
  /**
   * @tc.name: testRemoveAt035
   * @tc.desc: Delete key value pairs according to index. For example: lightWeightMap.removeAt(1).
   * @tc.author: wangyong
   */
  it("testRemoveAt035", 0, function () {
    let lightWeightMap = new LightWeightMap();
    let res = lightWeightMap.removeAt(1);
    expect(res).assertEqual(false);
  });
                  
  /**
   * @tc.name: testIncreaseCapacityTo036
   * @tc.desc: Expand the LightWeightMap instance capacity to the specified value. 
   * For example: lightWeightMap.increaseCapacityTo(10).
   * @tc.author: wangyong
   */
  it("testIncreaseCapacityTo036", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    let res = lightWeightMap.increaseCapacityTo(10);
    expect(res).assertEqual(undefined);
  });
                  
  /**
   * @tc.name: testIncreaseCapacityTo037
   * @tc.desc: Expand the LightWeightMap instance capacity to the specified value. 
   * For example: lightWeightMap.increaseCapacityTo("qwe").
   * @tc.author: wangyong
   */
  it("testIncreaseCapacityTo037", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    try {
      lightWeightMap.increaseCapacityTo("qwe");
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(401);
      expect(err.message).assertEqual(`The type of "minimumCapacity" must be number. Received value is: qwe`);
    }
  });
                  
  /**
   * @tc.name: testRemoveAt038
   * @tc.desc: Delete key value pairs according to index. For example: lightWeightMap.removeAt("a").
   * @tc.author: wangyong
   */
  it("testRemoveAt038", 0, function () {
    let lightWeightMap = new LightWeightMap();
    try {
      let res = lightWeightMap.removeAt("a");
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(401);
      expect(err.message).assertEqual(`The type of "index" must be number. Received value is: a`);
    }
  });
                  
  /**
   * @tc.name: testGetValueAt039
   * @tc.desc: Get the value of the key value pair according to the corresponding index. 
   * For example: lightWeightMap.getValueAt("a").
   * @tc.author: wangyong
   */
  it("testGetValueAt039", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    try {
      let res = lightWeightMap.getValueAt("a");
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(401);
      expect(err.message).assertEqual(`The type of "index" must be number. Received value is: a`);
    }
  });
                  
  /**
   * @tc.name: testGetKeyAt040
   * @tc.desc: Find the key of the key value pair according to the corresponding index. 
   * For example: lightWeightMap.getKeyAt("a").
   * @tc.author: wangyong
   */
  it("testGetKeyAt040", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    try {
      let res = lightWeightMap.getKeyAt("a");
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(401);
      expect(err.message).assertEqual(`The type of "index" must be number. Received value is: a`);
    }
  });
                  
  /**
   * @tc.name: testConstructor001
   * @tc.desc: Judge whether a lightweightmap contains all key value pairs in another lightweightmap.
   * @tc.author: wangyong
   */
  it("testHasAll041", 0, function () {
    let lightWeightMap = new LightWeightMap();
    let lightWeightMap1 = new LightWeightMap();
    let res = lightWeightMap.hasAll(lightWeightMap1);
    expect(res).assertEqual(true);
  });
                  
  /**
   * @tc.name: testSet042
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap.
   * @tc.author: wangyong
   */
  it("testSet042", 0, function () {
    let lightWeightMap = new LightWeightMap();
    for (let i = 0; i < 100; i++) {
      lightWeightMap.set(i, "A");
    }
    let res = lightWeightMap.get(99);
    expect(res).assertEqual("A");
    let res1 = lightWeightMap.length;
    expect(res1).assertEqual(100);
  });
                  
  /**
   * @tc.name: testSet043
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap.
   * @tc.author: wangyong
   */
  it("testSet043", 0, function () {
    let lightWeightMap = new LightWeightMap();
    for (let i = 0; i < 100; i++) {
      lightWeightMap.set(1, i);
    }
    let res = lightWeightMap.get(1);
    expect(res).assertEqual(99);
    let res1 = lightWeightMap.length;
    expect(res1).assertEqual(1);
  });
                  
  /**
   * @tc.name: testSet044
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap.
   * @tc.author: wangyong
   */
  it("testSet044", 0, function () {
    let lightWeightMap = new LightWeightMap();
    for (let i = 0; i < 10000; i++) {
      lightWeightMap.set(i, i);
    }
    let res1 = lightWeightMap.length;
    expect(res1).assertEqual(10000);
    for (let index = 0; index < 10000; index++) {
      let resKey = lightWeightMap.hasKey(index);
      expect(resKey).assertEqual(true);
      let resValue = lightWeightMap.hasValue(index);
      expect(resValue).assertEqual(true);
    }
  });
                  
  /**
   * @tc.name: testSet045
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap.
   * @tc.author: wangyong
   */
  it("testSet045", 0, function () {
    let lightWeightMap = new LightWeightMap();
    for (let i = 0; i < 5000; i++) {
      lightWeightMap.set(i, i);
    }
    for (let i = -1; i > -5001; i--) {
      lightWeightMap.set(i, i);
    }
    let res1 = lightWeightMap.length;
    expect(res1).assertEqual(10000);
    for (let index = 0; index < 5000; index++) {
      let resKey = lightWeightMap.hasKey(index);
      expect(resKey).assertEqual(true);
      let resValue = lightWeightMap.hasValue(index);
      expect(resValue).assertEqual(true);
    }
    for (let i = -1; i > -5001; i--) {
      let resKey = lightWeightMap.hasKey(i);
      expect(resKey).assertEqual(true);
      let resValue = lightWeightMap.hasValue(i);
      expect(resValue).assertEqual(true);
    }
  });
                  
  /**
   * @tc.name: testSet046
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap.
   * @tc.author: wangyong
   */
  it("testSet046", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(true, 0.001);
    let res = lightWeightMap.hasValue(0.001);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(true);
    expect(res1).assertEqual(true);
  });
                  
  /**
   * @tc.name: testSet047
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap.
   * @tc.author: wangyong
   */
  it("testSet047", 0, function () {
    let lightWeightMap = new LightWeightMap();
    let a = [1, 2, 3, 4];
    lightWeightMap.set(a, 1);
    let res = lightWeightMap.hasValue(1);
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(a);
    expect(res1).assertEqual(true);
  });
                  
  /**
   * @tc.name: testSet048
   * @tc.desc: Add a pair of key value pairs to the LightWeightMap.
   * @tc.author: wangyong
   */
  it("testSet048", 0, function () {
    let lightWeightMap = new LightWeightMap();
    let a = {abc: 1};
    lightWeightMap.set(a, "");
    let res = lightWeightMap.hasValue("");
    expect(res).assertEqual(true);
    let res1 = lightWeightMap.hasKey(a);
    expect(res1).assertEqual(true);
  });
                  
  /**
   * @tc.name: testGet049
   * @tc.desc: Get the corresponding value through the key. For example: lightWeightMap.get(10).
   * @tc.author: wangyong
   */
  it("testGet049", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    let res = lightWeightMap.get(10);
    expect(res).assertEqual(undefined);
  });
                  
  /**
   * @tc.name: testHasAll050
   * @tc.desc: Judge whether a lightweightmap contains all key value pairs in another lightweightmap.
   * @tc.author: wangyong
   */
  it("testHasAll050", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set("a", "A");
    lightWeightMap.set("b", "B");
    lightWeightMap.set("c", "C");
    lightWeightMap.set("d", "D");
    lightWeightMap.set("e", "E");
    let lightWeightMap1 = new LightWeightMap();
    lightWeightMap1.set("a", "A");
    lightWeightMap1.set("d", "D1");
    let res = lightWeightMap.hasAll(lightWeightMap1);
    expect(res).assertEqual(false);
  });

  /**
   * @tc.name: testHasAll051
   * @tc.desc: Judge whether a lightweightmap contains all key value pairs in another lightweightmap.
   * @tc.author: liuganlin
   */
  it("testHasAll051", 0, function () {
    let lightWeightMap = new LightWeightMap();
    try {
      lightWeightMap.hasAll([1, 2, 3]);
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(401);
      expect(err.message).assertEqual(`The type of "map" must be LightWeightMap. Received value is: 1,2,3`);
    }
  });

  /**
   * @tc.name: testGetKeyAt052
   * @tc.desc: Find the key of the key value pair according to the corresponding index. 
   * For example: lightWeightMap.getKeyAt(6).
   * @tc.author: liuganlin
   */
  it("testGetKeyAt052", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    try {
      let res = lightWeightMap.getKeyAt(6);
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(10200001);
      expect(err.message).assertEqual(`The value of "index" is out of range. It must be >= 0 && <= 4. Received value is: 6`);
    }
  });

  /**
   * @tc.name: testSetAll053
   * @tc.desc: Copy key value pairs from one LightWeightMap to another.
   * @tc.author: liuganlin
   */
  it("testSetAll053", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    try {
      lightWeightMap.setAll([1, 2, 3]);
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(401);
      expect(err.message).assertEqual(`The type of "map" must be LightWeightMap. Received value is: 1,2,3`);
    }
  });

  /**
   * @tc.name: testSetValueAt054
   * @tc.desc: Modify the value of the key value pair according to the corresponding index. 
   * For example: lightWeightMap.setValueAt("a", "a").
   * @tc.author: liuganlin
   */
  it("testSetValueAt054", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    try {
      lightWeightMap.setValueAt("a", "a");
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(401);
      expect(err.message).assertEqual(`The type of "index" must be number. Received value is: a`);
    }
  });

  /**
   * @tc.name: testSetValueAt055
   * @tc.desc: Modify the value of the key value pair according to the corresponding index. 
   * For example: lightWeightMap.setValueAt(3, "a").
   * @tc.author: liuganlin
   */
  it("testSetValueAt055", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    try {
      lightWeightMap.setValueAt(3, "a");
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(10200001);
      expect(err.message).assertEqual(`The value of "index" is out of range. It must be >= 0 && <= 1. Received value is: 3`);
    }
  });

  /**
   * @tc.name: testGetValueAt056
   * @tc.desc: Get the value of the key value pair according to the corresponding index. 
   * For example: lightWeightMap.getValueAt(6).
   * @tc.author: liuganlin
   */
  it("testGetValueAt056", 0, function () {
    let lightWeightMap = new LightWeightMap();
    lightWeightMap.set(1, "A");
    lightWeightMap.set(2, "B");
    lightWeightMap.set(3, "C");
    lightWeightMap.set(4, "D");
    lightWeightMap.set(5, "E");
    try {
      lightWeightMap.getValueAt(6);
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(10200001);
      expect(err.message).assertEqual(`The value of "index" is out of range. It must be >= 0 && <= 4. Received value is: 6`);
    }
  });
});
}
