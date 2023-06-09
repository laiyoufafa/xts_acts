/*
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

// @ts-nocheck
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from "deccjsunit/index.ets"
import router from '@system.router';

export default function buttonJsunit() {

  function sleep(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, time * 1000)
    }).then(() => {
      console.info(`sleep ${time} over...`)
    })
  }

  describe('buttonTest', function () {
    beforeEach(async function (done) {
      let options = {
        uri: 'pages/Button',
      }
      try {
        router.clear();
	await sleep(1);
        let pages = router.getState();
        console.info("get Button state success " + JSON.stringify(pages));
        if (!("Button" == pages.name)) {
          console.info("get Button state success " + JSON.stringify(pages.name));
          let result = await router.push(options)
          console.info("push Button page success " + JSON.stringify(result));
        }
      } catch (err) {
        console.error("push Button page error " + JSON.stringify(result));
      }
      await sleep(2)
      done()
    });

    afterEach(async function () {
      await sleep(1)
      console.info("Button after each called");
    });

    /**
     * @tc.number    SUB_ACE_BASIC_ETS_API_0640
     * @tc.name      testButtonGetInspectorByKey010
     * @tc.desc      aceEtsTest
     */
    it('buttonGetInspectorByKey010', 0, async function (done) {
      console.info('testGetInspectorByKey START');
      let strJson = getInspectorByKey('button');
      let obj = JSON.parse(strJson);
      let style = JSON.parse(obj.$attrs.style)
      console.log(style.fontSize)
      console.info("cd button component obj is: " + JSON.stringify(obj));
      console.log("cd button type" + JSON.stringify(obj.$type));
      console.log("cd button  Buttontype" + JSON.stringify(obj.$attrs.type));
      console.log("cd button stateEffect" + JSON.stringify(obj.$attrs.stateEffect));
      console.log("cd button label" + JSON.stringify(obj.$attrs.label));
      console.log("cd button fontSize" + JSON.stringify(obj.$attrs.fontSize));
      console.log("cd button fontWeight" + JSON.stringify(obj.$attrs.fontWeight));
      console.log("cd button fontColor" + JSON.stringify(obj.$attrs.fontColor));
      expect(obj.$type).assertEqual('Button')
      expect(obj.$attrs.type).assertEqual('ButtonType.Circle')
      expect(obj.$attrs.stateEffect).assertEqual('true')
      expect(obj.$attrs.label).assertEqual('1.value')
      expect(obj.$attrs.fontSize).assertEqual('12')
      console.info('cd buttonInspectorByKey END');
      done();
    });
    /**
     * @tc.number    SUB_ACE_BASIC_ETS_API_0650
     * @tc.name      testButtonGetInspectorByKey020
     * @tc.desc      aceEtsTest
     */
    it('ButtonGetInspectorByKey020', 0, async function (done) {
      let strJson = getInspectorByKey('button1');
      let obj = JSON.parse(strJson);
      console.info("cd button1 component obj is: " + JSON.stringify(obj));
      console.log("cd button1 type" + JSON.stringify(obj.$type));
      console.log("cd button1  Buttontype" + JSON.stringify(obj.$attrs.type));
      console.log("cd button1 stateEffect" + JSON.stringify(obj.$attrs.stateEffect));
      expect(obj.$attrs.type).assertEqual('ButtonType.Capsule')
      expect(obj.$attrs.stateEffect).assertEqual('false')
      console.info('cd button1InspectorByKey END');
      done();
    });

    /**
     * @tc.number    SUB_ACE_BASIC_ETS_API_0660
     * @tc.name      testButtonGetInspectorByKey030
     * @tc.desc      aceEtsTest
     */
    it('ButtonGetInspectorByKey030', 0, async function (done) {
      let strJson = getInspectorByKey('button2');
      let obj = JSON.parse(strJson);
      console.info("cd button2 component obj is: " + JSON.stringify(obj));
      console.log("cd button2 type" + JSON.stringify(obj.$type));
      console.log("cd button2  Buttontype" + JSON.stringify(obj.$attrs.type));
      expect(obj.$attrs.type).assertEqual('ButtonType.Normal')
      console.info('cd button2InspectorByKey END');
      done();
    });
  })
}
