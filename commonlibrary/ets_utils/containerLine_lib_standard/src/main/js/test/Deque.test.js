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
import Deque from "@ohos.util.Deque";
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'
export default function DequeTest() {
describe("DequeTest", function () {

  /**
   * @tc.name: testConstructor001
   * @tc.desc: Create an Deque instance. For example: let deque = new Deque().
   * @tc.author: wangyong
   */
  it("testConstructor001", 0, function () {
    try {
      let deque = new Deque();
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(10200012);
      expect(err.message).assertEqual("The Deque's constructor cannot be directly invoked");
    }
  });
  
  /**
   * @tc.name: testInsertFront002
   * @tc.desc: Add element to deque instance header. For example: deque.insertFront("一").
   * @tc.author: wangyong
   */
  it("testInsertFront002", 0, function () {
    let deque = new Deque();
    deque.insertFront("一");
    let res = deque.getFirst();
    expect(res).assertEqual("一");
  });
  
  /**
   * @tc.name: testInsertFront003
   * @tc.desc: Add element to deque instance header. For example: deque.insertFront(8).
   * @tc.author: wangyong
   */
  it("testInsertFront003", 0, function () {
    let deque = new Deque();
    deque.insertFront(8);
    let res = deque.getFirst();
    expect(res).assertEqual(8);
  });
  
  /**
   * @tc.name: testInsertFront004
   * @tc.desc: Add element to deque instance header. 
   * For example: let a = {name: "lala", age: "15"}; deque.insertFront(a).
   * @tc.author: wangyong
   */
  it("testInsertFront004", 0, function () {
    let deque = new Deque();
    let a = {name: "lala", age: "15"};
    deque.insertFront(a);
    let res = deque.getFirst();
    expect(res).assertEqual(a);
  });
  
  /**
   * @tc.name: testInsertFront005
   * @tc.desc: Add element to deque instance header. For example: let a = [1, 2, 3, 4]; deque.insertFront(a).
   * @tc.author: wangyong
   */
  it("testInsertFront005", 0, function () {
    let deque = new Deque();
    let a = [1, 2, 3, 4];
    deque.insertFront(a);
    let res = deque.getFirst();
    expect(res).assertEqual(a);
  });
  
  /**
   * @tc.name: testInsertEnd006
   * @tc.desc: Add element to deque instance end. For example: deque.insertEnd(8).
   * @tc.author: wangyong
   */
  it("testInsertEnd006", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    let res = deque.getLast();
    expect(res).assertEqual(8);
  });
  
  /**
   * @tc.name: testInsertEnd007
   * @tc.desc: Add element to deque instance end. For example: let a = ["a", "b", "c"];deque.insertEnd(a).
   * @tc.author: wangyong
   */
  it("testInsertEnd007", 0, function () {
    let deque = new Deque();
    let a = ["a", "b", "c"];
    deque.insertEnd(a);
    let res = deque.getLast();
    expect(res).assertEqual(a);
  });
  
  /**
   * @tc.name: testInsertEnd008
   * @tc.desc: Add element to deque instance end. For example: let a = {class: "6班", say: "we"};deque.insertEnd(a).
   * @tc.author: wangyong
   */
  it("testInsertEnd008", 0, function () {
    let deque = new Deque();
    let a = {class: "6班", say: "we"};
    deque.insertEnd(a);
    let res = deque.getLast();
    expect(res).assertEqual(a);
  });
  
  /**
   * @tc.name: testGetFirst009
   * @tc.desc: Get the header element of the deque instance. For example: deque.getFirst().
   * @tc.author: wangyong
   */
  it("testGetFirst009", 0, function () {
    let deque = new Deque();
    deque.insertEnd("四");
    deque.insertEnd("三");
    let res = deque.getFirst();
    expect(res).assertEqual("四");
  });
  
  /**
   * @tc.name: testGetLast010
   * @tc.desc: Get the end element of the deque instance. For example: deque.getLast().
   * @tc.author: wangyong
   */
  it("testGetLast010", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertEnd("三");
    let res = deque.getLast();
    expect(res).assertEqual("三");
  });
  
  /**
   * @tc.name: testHas011
   * @tc.desc: Determine whether the deque instance contains the specified element. For example: deque.has(6).
   * @tc.author: wangyong
   */
  it("testHas011", 0, function () {
    let deque = new Deque();
    deque.insertEnd(6);
    let res = deque.has(6);
    expect(res).assertEqual(true);
  });
  
  /**
   * @tc.name: testHas012
   * @tc.desc: Determine whether the deque instance contains the specified element. For example: deque.has(6).
   * @tc.author: wangyong
   */
  it("testHas012", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    let res = deque.has(6);
    expect(res).assertEqual(false);
  });
  
  /**
   * @tc.name: testPopFirst013
   * @tc.desc: Delete the header element of a deque instance. For example: deque.popFirst().
   * @tc.author: wangyong
   */
  it("testPopFirst013", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertFront("一");
    let res = deque.popFirst();
    expect(res).assertEqual("一");
  });
  
  /**
   * @tc.name: testPopLast014
   * @tc.desc: Delete the end element of a deque instance. For example: deque.popLast().
   * @tc.author: wangyong
   */
  it("testPopLast014", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertFront("一");
    deque.insertFront("二");
    let res = deque.popLast();
    expect(res).assertEqual(8);
  });
  
  /**
   * @tc.name: testForEach015
   * @tc.desc: Traversing elements in deque instances. For example: deque.forEach((item, index) => {arr.push(item);}).
   * @tc.author: wangyong
   */
  it("testForEach015", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertFront("一");
    deque.insertFront("二");
    deque.insertEnd(1);
    deque.insertEnd(2);
    deque.insertEnd(3);
    deque.insertEnd(4);
    deque.insertEnd(5);
    deque.insertEnd(6);
    deque.insertFront("三");
    deque.insertFront("四");
    let arr = [];
    deque.forEach((item, index) => {
      arr.push(item);
    });
    let a = ["四", "三", "二", "一", 8, 1, 2, 3, 4, 5, 6];
    for (let i = 0; i < a.length; i++) {
      expect(arr[i]).assertEqual(a[i]);
    }
  });
  
  /**
   * @tc.name: testIterator016
   * @tc.desc: Iterate over all elements in the deque instance. For example: for (let item of deque) { arr.push(item);}.
   * @tc.author: wangyong
   */
  it("testIterator016", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertFront("一");
    deque.insertFront("二");
    deque.insertEnd(5);
    deque.insertEnd(6);
    deque.insertFront("三");
    deque.insertFront("四");
    let arr = [];
    for (let item of deque) {
      arr.push(item);
    }
    let a = ["四", "三", "二", "一", 8, 5, 6];
    for (let i = 0; i < a.length; i++) {
      expect(arr[i]).assertEqual(a[i]);
    }
  });
  
  /**
   * @tc.name: testInsertFront017
   * @tc.desc: Add element to deque instance header. For example: deque.insertFront("$").
   * @tc.author: wangyong
   */
  it("testInsertFront017", 0, function () {
    let deque = new Deque();
    deque.insertFront("$");
    let res = deque.getFirst();
    expect(res).assertEqual("$");
  });
    
  /**
   * @tc.name: testInsertFront018
   * @tc.desc: Add element to deque instance header. For example: deque.insertFront(" ").
   * @tc.author: wangyong
   */
  it("testInsertFront018", 0, function () {
    let deque = new Deque();
    deque.insertFront(" ");
    let res = deque.getFirst();
    expect(res).assertEqual(" ");
  });
  
  /**
   * @tc.name: testInsertFront019
   * @tc.desc: Add element to deque instance header. For example: deque.insertFront(null).
   * @tc.author: wangyong
   */
  it("testInsertFront019", 0, function () {
    let deque = new Deque();
    deque.insertFront(null);
    let res = deque.getFirst();
    expect(res).assertEqual(null);
  });
  
  /**
   * @tc.name: testInsertFront020
   * @tc.desc: Add element to deque instance header. For example: deque.insertFront(undefined).
   * @tc.author: wangyong
   */
  it("testInsertFront020", 0, function () {
    let deque = new Deque();
    deque.insertFront(undefined);
    let res = deque.getFirst();
    expect(res).assertEqual(undefined);
  });
  
  /**
   * @tc.name: testInsertFront021
   * @tc.desc: Add element to deque instance header. For example: for (let i = 0; i < 100; i++) {deque.insertFront(i)}.
   * @tc.author: wangyong
   */
  it("testInsertFront021", 0, function () {
    let deque = new Deque();
    for (let i = 0; i < 100; i++) {
      deque.insertFront(i);
      let res = deque.getFirst();
      expect(res).assertEqual(i);
    }
    let res1 = deque.length;
    expect(res1).assertEqual(100);
  });
  
  /**
   * @tc.name: testInsertEnd022
   * @tc.desc: Add element to deque instance end. For example: deque.insertEnd("$").
   * @tc.author: wangyong
   */
  it("testInsertEnd022", 0, function () {
    let deque = new Deque();
    deque.insertEnd("$");
    let res = deque.getLast();
    expect(res).assertEqual("$");
  });
  
  /**
   * @tc.name: testInsertEnd023
   * @tc.desc: Add element to deque instance end. For example: deque.insertEnd(" ").
   * @tc.author: wangyong
   */
  it("testInsertEnd023", 0, function () {
    let deque = new Deque();
    deque.insertEnd(" ");
    let res = deque.getLast();
    expect(res).assertEqual(" ");
  });
  
  /**
   * @tc.name: testInsertEnd024
   * @tc.desc: Add element to deque instance end. For example: deque.insertEnd(null).
   * @tc.author: wangyong
   */
  it("testInsertEnd024", 0, function () {
    let deque = new Deque();
    deque.insertEnd(null);
    let res = deque.getLast();
    expect(res).assertEqual(null);
  });
  
  /**
   * @tc.name: testInsertEnd025
   * @tc.desc: Add element to deque instance end. For example: deque.insertEnd(undefined).
   * @tc.author: wangyong
   */
  it("testInsertEnd025", 0, function () {
    let deque = new Deque();
    deque.insertEnd(undefined);
    let res = deque.getLast();
    expect(res).assertEqual(undefined);
  });
  
  /**
   * @tc.name: testInsertFront026
   * @tc.desc: Add element to deque instance end. For example: for (let i = 0; i < 100; i++) {deque.insertEnd(i);}.
   * @tc.author: wangyong
   */
  it("testInsertFront026", 0, function () {
    let deque = new Deque();
    for (let i = 0; i < 100; i++) {
      deque.insertEnd(i);
      let res = deque.getLast();
      expect(res).assertEqual(i);
    }
    let res1 = deque.length;
    expect(res1).assertEqual(100);
  });
  
  /**
   * @tc.name: testHas027
   * @tc.desc: Determine whether the deque instance contains the specified element. For example: deque.has(6).
   * @tc.author: wangyong
   */
  it("testHas027", 0, function () {
    let deque = new Deque();
    let res = deque.has(6);
    expect(res).assertEqual(false);
  });
  
  /**
   * @tc.name: testPopFirst028
   * @tc.desc: Delete the header element of a deque instance. For example: deque.popFirst().
   * @tc.author: wangyong
   */
  it("testPopFirst028", 0, function () {
    let deque = new Deque();
    let res = deque.popFirst();
    expect(res).assertEqual(undefined);
  });
  
  /**
   * @tc.name: testGetFirst029
   * @tc.desc: Get the header element of the deque instance. For example: deque.getFirst().
   * @tc.author: wangyong
   */
  it("testGetFirst029", 0, function () {
    let deque = new Deque();
    let res = deque.getFirst();
    expect(res).assertEqual(undefined);
  });
  
  /**
   * @tc.name: testPopLast030
   * @tc.desc: Delete the end element of a deque instance. For example: deque.popLast().
   * @tc.author: wangyong
   */
  it("testPopLast030", 0, function () {
    let deque = new Deque();
    let res = deque.popLast();
    expect(res).assertEqual(undefined);
  });
  
  /**
   * @tc.name: testGetLast031
   * @tc.desc: Get the end element of the deque instance. For example: deque.getLast().
   * @tc.author: wangyong
   */
  it("testGetLast031", 0, function () {
    let deque = new Deque();
    let res = deque.getLast();
    expect(res).assertEqual(undefined);
  });
  
  /**
   * @tc.name: testForEach032
   * @tc.desc: Traversing elements in deque instances. For example: deque.forEach((item, index) => {arr.push(item);}).
   * @tc.author: wangyong
   */
  it("testForEach032", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertEnd(1);
    deque.insertEnd(2);
    deque.insertEnd(3);
    deque.insertEnd(3);
    deque.insertEnd(4);
    deque.insertEnd(5);
    deque.insertEnd(6);
    deque.popFirst();
    deque.popLast();
    deque.insertFront(8);
    deque.insertEnd(6);
    let arr = [];
    deque.forEach((item, index) => {
      arr.push(item);
    });
    let a = [8, 1, 2, 3, 3, 4, 5, 6];
    for (let i = 0; i < a.length; i++) {
      expect(arr[i]).assertEqual(a[i]);
    }
  });
  
  /**
   * @tc.name: testIterator033
   * @tc.desc: Iterate over all elements in the deque instance. For example: for (let item of deque) { arr.push(item);}.
   * @tc.author: wangyong
   */
  it("testIterator033", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertFront("一");
    deque.insertFront("二");
    deque.insertEnd(5);
    deque.insertEnd(6);
    deque.insertFront("三");
    deque.insertFront("四");
    deque.popFirst();
    deque.popLast();
    deque.insertFront("四");
    deque.insertEnd(6);
    let arr = [];
    for (let item of deque) {
      arr.push(item);
    }
    let a = ["四", "三", "二", "一", 8, 5, 6];
    for (let i = 0; i < a.length; i++) {
      expect(arr[i]).assertEqual(a[i]);
    }
  });
  
  /**
   * @tc.name: testIterator034
   * @tc.desc: Iterate over all elements in the deque instance. For example: deque[Symbol.iterator]().
   * @tc.author: wangyong
   */
  it("testIterator034", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertFront("a");
    deque.insertFront("b");
    deque.insertEnd(5);
    deque.insertEnd(6);
    deque.insertFront("s");
    deque.insertFront("z");
    deque.popFirst();
    deque.popLast();
    deque.insertFront("g");
    deque.insertEnd(6);
    let size = deque.length;
    let arr = [];
    let itr = deque[Symbol.iterator]();
    for (let i = 0; i < size; i++) {
      arr.push(itr.next().value);
    }
    let a = ["g", "s", "b", "a", 8, 5, 6];
    for (let i = 0; i < a.length; i++) {
      expect(arr[i]).assertEqual(a[i]);
    }
  });
  
  /**
   * @tc.name: testLength035
   * @tc.desc: Get the number of elements in the deque instance. For example: deque.length.
   * @tc.author: wangyong
   */
  it("testLength035", 0, function () {
    let deque = new Deque();
    deque.insertEnd(8);
    deque.insertFront("a");
    deque.insertFront("b");
    deque.insertEnd(5);
    deque.insertEnd(6);
    deque.insertFront("s");
    deque.insertFront("z");
    deque.popFirst();
    deque.popLast();
    deque.insertFront("g");
    deque.insertEnd(6);
    let size = deque.length;
    expect(size).assertEqual(7);
  });

  /**
   * @tc.name: testInsertFront036
   * @tc.desc: Add element to deque instance header.For example: let a = [1, 2, 3, 4]; deque.insertFront.bind({}, "a")().
   * @tc.author: liuganlin
   */
  it("testInsertFront036 ", 0, function () {
    let deque = new Deque();
    try {
      deque.insertFront.bind({}, "a")();
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(10200011);
      expect(err.message).assertEqual(`The insertFront method cannot be bound`);
    }
  });

  /**
   * @tc.name: testForEach037
   * @tc.desc: Traversing elements in deque instances. For example: deque.forEach(123).
   * @tc.author: wangyong
   */
  it("testForEach037", 0, function () {
    let deque = new Deque();
    try {
      deque.forEach(123);
      expect(true).assertEqual(false);
    } catch (err) {
      expect(err.name).assertEqual("BusinessError");
      expect(err.code).assertEqual(401);
      expect(err.message).assertEqual(`The type of "callbackfn" must be callable. Received value is: 123`);
    }
  });
});
}
