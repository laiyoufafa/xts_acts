// @ts-nocheck
/**
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from "deccjsunit/index.ets";
import router from '@system.router';
import events_emitter from '@ohos.events.emitter';
import Utils from './Utils';

export default function scrollCodeJsunit() {
  describe('appInfoTest', function () {
    beforeEach(async function (done) {
      let options = {
        uri: 'pages/scrollCode',
      }
      try {
        router.clear();
        let pages = router.getState();
        console.info("get ScrollCode state success " + JSON.stringify(pages));
        if (!("ScrollCode" == pages.name)) {
          console.info("get ScrollCode pages success " + JSON.stringify(pages.name));
          let result = await router.push(options);
          await Utils.sleep(2000);
          console.info("push ScrollCode page success " + JSON.stringify(result));
        }
      } catch (err) {
        console.error("push ScrollCode page error: " + err);
      }
      done()
    });

    afterEach(async function () {
      await Utils.sleep(2000);
      console.info("ScrollCode after each called");
    });

    it('test_scrollCode_001', 0, async function (done) {
      console.info('[test_scrollCode_001] START');
      await Utils.sleep(1000);
      let strJson = getInspectorByKey('ScrollCode');
      let obj = JSON.parse(strJson);
      console.info("[test_scrollCode_001] component obj is: " + JSON.stringify(obj));
      await Utils.sleep(1000);
      expect(obj.$attrs.scrollable).assertEqual('ScrollDirection.Vertical');
      expect(obj.$attrs.scrollBar).assertEqual('BarState.On');
      expect(obj.$attrs.scrollBarColor).assertEqual('#FF0000FF');
      expect(obj.$attrs.scrollBarWidth).assertEqual('30.000000px');
      done();
    });

    it('test_scrollCode_002', 0, async function (done) {
      console.info('[test_scrollCode_002] START');
      await Utils.sleep(1000);
      try {
        var eventData = {
          data: {
            "scrollable": "ScrollDirection.Vertical"
          }
        }
        var innerEvent = {
          eventId: 90,
          priority: events_emitter.EventPriority.LOW
        }
        console.info("[test_scrollCode_002] start to publish emit");
        events_emitter.emit(innerEvent, eventData);
      } catch (err) {
        console.log("[test_scrollCode_002] change scrollable error: " + err.message);
      }
      await Utils.sleep(2000);
      let strJson = getInspectorByKey('ScrollCode');
      let obj = JSON.parse(strJson);
      console.info("[test_scrollCode_002] component obj is: " + JSON.stringify(obj));
      expect(obj.$attrs.scrollable).assertEqual('ScrollDirection.Vertical');
      done();
    });

    it('test_scrollCode_003', 0, async function (done) {
      console.info('[test_scrollCode_003] START');
      await Utils.sleep(1000);
      try {
        var eventData = {
          data: {
            "scrollBar": "BarState.Off"
          }
        }
        var innerEvent = {
          eventId: 80,
          priority: events_emitter.EventPriority.LOW
        }
        console.info("[test_scrollCode_003] start to publish emit");
        events_emitter.emit(innerEvent, eventData);
      } catch (err) {
        console.log("[test_scrollCode_003] change scrollBar error: " + err.message);
      }
      await Utils.sleep(2000);
      let strJson = getInspectorByKey('ScrollCode');
      let obj = JSON.parse(strJson);
      console.info("[test_scrollCode_003] component obj is: " + JSON.stringify(obj));
      expect(obj.$attrs.scrollBar).assertEqual('BarState.Off');
      done();
    });

    it('test_scrollCode_004', 0, async function (done) {
      console.info('[test_scrollCode_004] START');
      await Utils.sleep(1000);
      try {
        var eventData = {
          data: {
            "scrollBarColor": "#FFB6C1"
          }
        }
        var innerEvent = {
          eventId: 85,
          priority: events_emitter.EventPriority.LOW
        }
        console.info("[test_scrollCode_004] start to publish emit");
        events_emitter.emit(innerEvent, eventData);
      } catch (err) {
        console.log("[test_scrollCode_004] change scrollBar error: " + err.message);
      }
      await Utils.sleep(2000);
      let strJson = getInspectorByKey('ScrollCode');
      let obj = JSON.parse(strJson);
      console.info("[test_scrollCode_004] component obj is: " + JSON.stringify(obj));
      expect(obj.$attrs.scrollBarColor).assertEqual('#FFFFB6C1');
      done();
    });

    it('test_scrollCode_005', 0, async function (done) {
      console.info('[test_scrollCode_005] START');
      await Utils.sleep(1000);
      try {
        var eventData = {
          data: {
            "scrollBarWidth": 40
          }
        }
        var innerEvent = {
          eventId: 95,
          priority: events_emitter.EventPriority.LOW
        }
        console.info("[test_scrollCode_005] start to publish emit");
        events_emitter.emit(innerEvent, eventData);
      } catch (err) {
        console.log("[test_scrollCode_005] change scrollBar error: " + err.message);
      }
      await Utils.sleep(2000);
      let strJson = getInspectorByKey('ScrollCode');
      let obj = JSON.parse(strJson);
      console.info("[test_scrollCode_005] component obj is: " + JSON.stringify(obj));
      expect(obj.$attrs.scrollBarWidth).assertEqual('40.000000px');
      done();
    });

  })
}