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
import Utils from './Utils';

export default function columnJsunit() {
  describe('appInfoTest', function () {
    beforeEach(async function (done) {
      console.info("column beforeEach start");
      let options = {
        uri: 'pages/column',
      }
      try {
        router.clear();
        let pages = router.getState();
        console.info("get column state pages:" + JSON.stringify(pages));
        if (!("column" == pages.name)) {
          console.info("get column state pages.name:" + JSON.stringify(pages.name));
          let result = await router.push(options);
          await Utils.sleep(2000);
          console.info("push column page result:" + JSON.stringify(result));
        }
      } catch (err) {
        console.error("push column page error:" + err);
      }
      done()
    });

    afterEach(async function () {
      await Utils.sleep(1000);
      console.info("column after each called");
    });

    it('testColumn01', 0, async function (done) {
      console.info('[testColumn01] START');
      await Utils.sleep(1000);
      let strJson = getInspectorByKey('column');
      let obj = JSON.parse(strJson);
      console.info("[testColumn01] obj is: " + JSON.stringify(obj));
      console.info('[testColumn01] END');
      done();
    });
  })
}
