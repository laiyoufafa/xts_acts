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
import LightWeightSet from "@ohos.util.LightWeightSet";
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'
export default function LightWeightSetTest() {
describe("LightWeightSetTest", function () {
              
  /**
   * @tc.name: testConstructor001
   * @tc.desc: Create an LightWeightSet instance. For example: let lightWeightSet = new LightWeightSet().
   * @tc.author: wangyong
   */
  it("testConstructor001", 0, function () {
    try {
      let lightWeightSet = new LightWeightSet();
      expect(lightWeightSet != undefined).assertEqual(true);
    } catch (err) {
      expect(err.name).assertEqual("TypeError");
      expect(err.message).assertEqual("Cannot create new TreeMap");
    }
  });
              
  /**
   * @tc.name: testAdd002
   * @tc.desc: Add element to LightWeightSet instance. For example: lightWeightSet.add(1).
   * @tc.author: wangyong
   */
  it("testAdd002", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    let res = lightWeightSet.has(1);
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testAdd003
   * @tc.desc: Add element to LightWeightSet instance. For example: lightWeightSet.add("a").
   * @tc.author: wangyong
   */
  it("testAdd003", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add("a");
    let res = lightWeightSet.has("a");
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testAdd004
   * @tc.desc: Add element to LightWeightSet instance. 
   * For example: let a = [1, 2, 3, 4]; lightWeightSet.add(a).
   * @tc.author: wangyong
   */
  it("testAdd004", 0, function () {
    let lightWeightSet = new LightWeightSet();
    let a = [1, 2, 3, 4];
    lightWeightSet.add(a);
    let res = lightWeightSet.has(a);
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testAdd005
   * @tc.desc: Add element to LightWeightSet instance. 
   * For example: let a = {name: "lili", age: "13"}; lightWeightSet.add(a).
   * @tc.author: wangyong
   */
  it("testAdd005", 0, function () {
    let lightWeightSet = new LightWeightSet();
    let c = {name: "lili", age: "13"};
    lightWeightSet.add(c);
    let res = lightWeightSet.has(c);
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testAdd006
   * @tc.desc: Add element to LightWeightSet instance. For example: let c = false; lightWeightSet.add(c).
   * @tc.author: wangyong
   */
  it("testAdd006", 0, function () {
    let lightWeightSet = new LightWeightSet();
    let c = false;
    lightWeightSet.add(c);
    let res = lightWeightSet.has(c);
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testLength007
   * @tc.desc: Get the number of element in the LightWeightSet instance. For example: lightWeightSet.length.
   * @tc.author: wangyong
   */
  it("testLength007", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.length;
    expect(res).assertEqual(5);
  });
              
  /**
   * @tc.name: testAddAll008
   * @tc.desc: Copy all element from one LightWeightSet to another.
   * @tc.author: wangyong
   */
  it("testAddAll008", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let lightWeightSet1 = new LightWeightSet();
    lightWeightSet1.add(6);
    lightWeightSet1.add(7);
    let res1 = lightWeightSet.addAll(lightWeightSet1);
    for (let item of lightWeightSet) {
      console.log("lightWeightSet-----" + item);
    }
    for (let item of lightWeightSet1) {
      console.log("lightWeightSet1-----" + item);
    }
    for (let i = 1; i < 8; i++) {
      expect(lightWeightSet.has(i)).assertEqual(true);
    }
    expect(res1).assertEqual(true);
  });
              
  /**
   * @tc.name: testHasAll009
   * @tc.desc: Judge whether a lightWeightSet contains all elements in another lightWeightSet.
   * @tc.author: wangyong
   */
  it("testHasAll009", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add("a");
    lightWeightSet.add("b");
    lightWeightSet.add("c");
    lightWeightSet.add("d");
    lightWeightSet.add("e");
    let lightWeightSet1 = new LightWeightSet();
    lightWeightSet1.add("a");
    lightWeightSet1.add("d");
    let res = lightWeightSet.hasAll(lightWeightSet1);
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testHasAll010
   * @tc.desc: Judge whether a lightWeightSet contains all elements in another lightWeightSet.
   * @tc.author: wangyong
   */
  it("testHasAll010", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add("a");
    lightWeightSet.add("b");
    lightWeightSet.add("c");
    lightWeightSet.add("e");
    let lightWeightSet1 = new LightWeightSet();
    lightWeightSet1.add("a");
    lightWeightSet1.add("d");
    let res = lightWeightSet.hasAll(lightWeightSet1);
    expect(res).assertEqual(false);
  });
              
  /**
   * @tc.name: testHas011
   * @tc.desc: Judge whether a lightWeightSet contains all elements in another lightWeightSet.
   * @tc.author: wangyong
   */
  it("testHas011", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add("a");
    lightWeightSet.add("b");
    lightWeightSet.add("c");
    lightWeightSet.add("d");
    lightWeightSet.add("e");
    let res = lightWeightSet.has("a");
    expect(res).assertEqual(true);
    let res1 = lightWeightSet.has(1);
    expect(res1).assertEqual(false);
  });
              
  /**
   * @tc.name: testEntries012
   * @tc.desc: Get all key value pairs collection in lightWeightSet.
   * @tc.author: wangyong
   */
  it("testEntries012", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.entries();
    expect(JSON.stringify(res.next().value)).assertEqual("[1,1]");
    expect(JSON.stringify(res.next().value)).assertEqual("[2,2]");
    expect(JSON.stringify(res.next().value)).assertEqual("[3,3]");
    expect(JSON.stringify(res.next().value)).assertEqual("[4,4]");
    expect(JSON.stringify(res.next().value)).assertEqual("[5,5]");
  });
              
  /**
   * @tc.name: testGetIndexOf013
   * @tc.desc: Get the index according to the specified element. For example: lightWeightSet.getIndexOf(2).
   * @tc.author: wangyong
   */
  it("testGetIndexOf013", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.getIndexOf(2);
    expect(res).assertEqual(1);
  });
              
  /**
   * @tc.name: testIsEmpty014
   * @tc.desc: Determine whether the lightWeightSet instance is empty. For example: lightWeightSet.isEmpty().
   * @tc.author: wangyong
   */
  it("testIsEmpty014", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.isEmpty();
    expect(res).assertEqual(false);
  });
              
  /**
   * @tc.name: testRemove015
   * @tc.desc: Delete elements according to key. For example: lightWeightMap.remove(1).
   * @tc.author: wangyong
   */
  it("testRemove015", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.remove(1);
    expect(res).assertEqual(1);
    let arr = [];
    lightWeightSet.forEach((value, index) => {
      arr.push(value);
    });
    let arr1 = [2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
      expect(arr1[i]).assertEqual(arr[i]);
    }
  });
              
  /**
   * @tc.name: testRemoveAt016
   * @tc.desc: Delete elements according to index. For example: lightWeightSet.removeAt(1).
   * @tc.author: wangyong
   */
  it("testRemoveAt016", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.removeAt(1);
    expect(res).assertEqual(true);
    let arr = [];
    lightWeightSet.forEach((value, index) => {
      arr.push(value);
    });
    let arr1 = [1, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
      expect(arr1[i]).assertEqual(arr[i]);
    }
  });
              
  /**
   * @tc.name: testClear017
   * @tc.desc: Clear all elements in LightWeightSet. For example: lightWeightSet.clear().
   * @tc.author: wangyong
   */
  it("testClear017", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    lightWeightSet.clear();
    let res = lightWeightSet.length;
    expect(res).assertEqual(0);
  });
              
  /**
   * @tc.name: testForEach018
   * @tc.desc: Traverse all elements in the LightWeightSet instance.
   * @tc.author: wangyong
   */
  it("testForEach018", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let arr = [];
    lightWeightSet.forEach((value, index) => {
      arr.push(value);
    });
    let arr1 = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr1.length; i++) {
      expect(arr[i]).assertEqual(arr1[i]);
    }
  });
              
  /**
   * @tc.name: testToString019
   * @tc.desc: Use "," to splice the elements in the LightWeightSet instance into a string. 
   * For example: lightWeightSet.toString().
   * @tc.author: wangyong
   */
  it("testToString019", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    let res = lightWeightSet.toString();
    expect(res).assertEqual("1,2,3");
  });
              
  /**
   * @tc.name: testToArray020
   * @tc.desc: Convert an lightWeightSet instance to an array. For example: lightWeightSet.toArray().
   * @tc.author: wangyong
   */
  it("testToArray020", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.toArray();
    let arr1 = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr1.length; i++) {
      expect(res[i]).assertEqual(arr1[i]);
    }
  });
              
  /**
   * @tc.name: testGetValueAt021
   * @tc.desc:  Get the element according to the corresponding index. For example: lightWeightSet.getValueAt(1).
   * @tc.author: wangyong
   */
  it("testGetValueAt021", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.getValueAt(1);
    expect(res).assertEqual(2);
  });
              
  /**
   * @tc.name: testIterator022
   * @tc.desc: Iterate over all elements in the LightWeightSet.
   * @tc.author: wangyong
   */
  it("testIterator022", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let arr = [];
    for (let item of lightWeightSet) {
      let res = arr.push(item);
    }
    let arr1 = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr1.length; i++) {
      expect(arr[i]).assertEqual(arr1[i]);
    }
  });
              
  /**
   * @tc.name: testValues023
   * @tc.desc: Get a collection of all the values in the LightWeightSet. For example: lightWeightSet.values().
   * @tc.author: wangyong
   */
  it("testValues023", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.values();
    expect(res.next().value).assertEqual(1);
    expect(res.next().value).assertEqual(2);
    expect(res.next().value).assertEqual(3);
    expect(res.next().value).assertEqual(4);
    expect(res.next().value).assertEqual(5);
  });
              
  /**
   * @tc.name: testAdd024
   * @tc.desc: Add element to LightWeightSet instance. For example: lightWeightSet.add(null).
   * @tc.author: wangyong
   */
  it("testAdd024", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(null);
    let res = lightWeightSet.has(null);
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testAdd025
   * @tc.desc: Add element to LightWeightSet instance. For example: lightWeightSet.add(1.23).
   * @tc.author: wangyong
   */
  it("testAdd025", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1.23);
    let res1 = lightWeightSet.has(1.23);
    expect(res1).assertEqual(true);
  });
              
  /**
   * @tc.name: testHasAll026
   * @tc.desc: Judge whether a lightWeightSet contains all elements in another lightWeightSet.
   * @tc.author: wangyong
   */
  it("testHasAll026", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let lightWeightSet1 = new LightWeightSet();
    lightWeightSet1.add("a1");
    lightWeightSet1.add("d1");
    let res = lightWeightSet.hasAll(lightWeightSet1);
    expect(res).assertEqual(false);
  });
              
  /**
   * @tc.name: testHasAll027
   * @tc.desc: Judge whether a lightWeightSet contains all elements in another lightWeightSet.
   * @tc.author: wangyong
   */
  it("testHasAll027", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let lightWeightSet1 = new LightWeightSet();
    lightWeightSet1.add(1);
    lightWeightSet1.add("d");
    let res = lightWeightSet.hasAll(lightWeightSet1);
    expect(res).assertEqual(false);
  });
              
  /**
   * @tc.name: testRemove028
   * @tc.desc: Delete elements according to key. For example: lightWeightMap.remove(3).
   * @tc.author: wangyong
   */
  it("testRemove028", 0, function () {
    let lightWeightSet = new LightWeightSet();
    let res = lightWeightSet.remove(3);
    expect(res).assertEqual(undefined);
  });
              
  /**
   * @tc.name: testRemoveAt029
   * @tc.desc: Delete elements according to index. For example: lightWeightSet.removeAt(1).
   * @tc.author: wangyong
   */
  it("testRemoveAt029", 0, function () {
    let lightWeightSet = new LightWeightSet();
    let res = lightWeightSet.removeAt(1);
    expect(res).assertEqual(false);
  });
              
  /**
   * @tc.name: testIncreaseCapacityTo030
   * @tc.desc: Expand the LightWeightSet capacity to the specified value. 
   * For example: lightWeightSet.increaseCapacityTo(3).
   * @tc.author: wangyong
   */
  it("testIncreaseCapacityTo030", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    try {
      lightWeightSet.increaseCapacityTo(3);
    } catch (err) {
      expect(err.name).assertEqual("TypeError");
      expect(err.message).assertEqual("the index is not integer");
    }
  });
              
  /**
   * @tc.name: testIncreaseCapacityTo031
   * @tc.desc: Expand the LightWeightSet capacity to the specified value. 
   * For example: lightWeightSet.increaseCapacityTo("qwe").
   * @tc.author: wangyong
   */
  it("testIncreaseCapacityTo031", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    try {
      let res = lightWeightSet.increaseCapacityTo("qwe");
    } catch (err) {
      expect(err.name).assertEqual("TypeError");
      expect(err.message).assertEqual("the index is not integer");
    }
  });
              
  /**
   * @tc.name: testRemoveAt032
   * @tc.desc: Delete elements according to index. For example: lightWeightSet.removeAt("123").
   * @tc.author: wangyong
   */
  it("testRemoveAt032", 0, function () {
    let lightWeightSet = new LightWeightSet();
    try {
      let res = lightWeightSet.removeAt("123");
    } catch (err) {
      expect(err.name).assertEqual("TypeError");
      expect(err.message).assertEqual("the index is not integer");
    }
  });
              
  /**
   * @tc.name: testIncreaseCapacityTo033
   * @tc.desc: Expand the LightWeightSet capacity to the specified value. 
   * For example: lightWeightSet.increaseCapacityTo(20).
   * @tc.author: wangyong
   */
  it("testIncreaseCapacityTo033", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.increaseCapacityTo(20);
    expect(res).assertEqual(undefined);
  });
              
  /**
   * @tc.name: testGetValueAt034
   * @tc.desc: Get the element according to the corresponding index. For example: lightWeightSet.getValueAt("123").
   * @tc.author: wangyong
   */
  it("testGetValueAt034", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    try {
      let res = lightWeightSet.getValueAt("123");
    } catch (err) {
      expect(err.name).assertEqual("TypeError");
      expect(err.message).assertEqual("the index is not integer");
    }
  });
              
  /**
   * @tc.name: testIsEmpty035
   * @tc.desc: Determine whether the lightWeightSet instance is empty. For example: lightWeightSet.isEmpty().
   * @tc.author: wangyong
   */
  it("testIsEmpty035", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    lightWeightSet.clear();
    let res = lightWeightSet.isEmpty();
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testAdd036
   * @tc.desc: Add element to LightWeightSet instance.
   * @tc.author: wangyong
   */
  it("testAdd036", 0, function () {
    let lightWeightSet = new LightWeightSet();
    for (let i = 0; i < 10000; i++) {
      lightWeightSet.add(i);
    }
    let res = lightWeightSet.getValueAt(9999);
    let res1 = lightWeightSet.length;
    expect(res).assertEqual(9999);
    expect(res1).assertEqual(10000);
  });
              
  /**
   * @tc.name: testAdd037
   * @tc.desc: Add element to LightWeightSet instance. For example: lightWeightSet.add("").
   * @tc.author: wangyong
   */
  it("testAdd037", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add("");
    let res = lightWeightSet.has("");
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testAdd038
   * @tc.desc: Add element to LightWeightSet instance. For example: lightWeightSet.add("$").
   * @tc.author: wangyong
   */
  it("testAdd038", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add("$");
    let res = lightWeightSet.has("$");
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testClear039
   * @tc.desc: Clear all elements in LightWeightSet. For example: lightWeightSet.clear().
   * @tc.author: wangyong
   */
  it("testClear039", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let res = lightWeightSet.length;
    lightWeightSet.clear();
    let res1 = lightWeightSet.length;
    expect(res).assertEqual(5);
    expect(res1).assertEqual(0);
  });
              
  /**
   * @tc.name: testRemove040
   * @tc.desc: Delete elements according to key. For example: lightWeightMap.remove("A").
   * @tc.author: wangyong
   */
  it("testRemove040", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    try {
      let res = lightWeightSet.remove("A");
    } catch (err) {
      expect(err.name).assertEqual("TypeError");
      expect(err.message).assertEqual("the index is not integer");
    }
  });
              
  /**
   * @tc.name: testIterator41
   * @tc.desc: Iterate over all elements in the LightWeightSet.
   * @tc.author: wangyong
   */
  it("testIterator41", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    lightWeightSet.add(4);
    lightWeightSet.add(5);
    let arr = [];
    let res = lightWeightSet[Symbol.iterator]();
    let temp = undefined;
    do {
      temp = res.next().value;
      arr.push(temp);
    } while (temp != undefined);
    let arr1 = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr1.length; i++) {
      expect(arr[i]).assertEqual(arr1[i]);
    }
  });
              
  /**
   * @tc.name: testEqual42
   * @tc.desc: Compare lightweightmap and specified object for equality. For example: lightWeightSet.equal(obj).
   * @tc.author: wangyong
   */
  it("testEqual42", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    let obj = [1,2,3];
    let res = lightWeightSet.equal(obj);
    expect(res).assertEqual(true);
  });
              
  /**
   * @tc.name: testEqual43
   * @tc.desc: Compare lightweightmap and specified object for equality. For example: lightWeightSet.equal(obj).
   * @tc.author: wangyong
   */
  it("testEqual43", 0, function () {
    let lightWeightSet = new LightWeightSet();
    lightWeightSet.add(1);
    lightWeightSet.add(2);
    lightWeightSet.add(3);
    let obj = [1,2];
    let res = lightWeightSet.equal(obj);
    expect(res).assertEqual(false);
  });
});
}
