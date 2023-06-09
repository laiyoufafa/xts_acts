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

export default function ellipseJsunit() {
  describe('appInfoTest', function () {
    beforeEach(async function (done) {
      console.info("ellipse beforeEach start");
      let options = {
        uri: 'pages/ellipse',
      }
      try {
        router.clear();
        let pages = router.getState();
        console.info("get ellipse state pages:" + JSON.stringify(pages));
        if (!("ellipse" == pages.name)) {
          console.info("get ellipse state pages.name:" + JSON.stringify(pages.name));
          let result = await router.push(options);
          await Utils.sleep(2000);
          console.info("push ellipse page result:" + JSON.stringify(result));
        }
      } catch (err) {
        console.error("push ellipse page error:" + err);
      }
      done()
    });

    afterEach(async function () {
      await Utils.sleep(1000);
      console.info("ellipse after each called");
    });

    it('testEllipse01', 0, async function (done) {
      console.info('[testEllipse01] START');
      await Utils.sleep(1000);
      let strJson = getInspectorByKey('ellipse');
      let obj = JSON.parse(strJson);
      console.info("[testEllipse02] obj is: " + JSON.stringify(obj));
      expect(obj.$attrs.height).assertEqual('200.000000px');
      expect(obj.$attrs.width).assertEqual('200.000000px');
      console.info('testEllipse02 END');
      done();
    });

    it('testEllipse02', 0, async function (done) {
      console.info('[testEllipse02] START');
      try {
        var eventData = {
          data: {
            "width": '500px',
            "height": '500px'
          }
        }
        var innerEvent = {
          eventId: 5,
          priority: events_emitter.EventPriority.LOW
        }
        console.info("[testEllipse02] start to publish emit");
        events_emitter.emit(innerEvent, eventData);
      } catch (err) {
        console.log("[testEllipse02] change component data error: " + err.message);
      }
      await Utils.sleep(1000);
      let strJson = getInspectorByKey('ellipse');
      let obj = JSON.parse(strJson);
      console.info("[testEllipse02] obj is: " + JSON.stringify(obj));
      expect(obj.$attrs.height).assertEqual('500.000000px');
      expect(obj.$attrs.width).assertEqual('500.000000px');
      console.info('testEllipse02 END');
      done();
    });
  })
}
