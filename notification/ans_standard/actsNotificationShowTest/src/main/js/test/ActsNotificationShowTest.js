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
import notification from '@system.notification'
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from '@ohos/hypium'

export default function ActsNotificationShowTest() {
  describe('SUB_NOTIFICATION_ANS_SHOW_TEST', function () {
    const TAG = 'SUB_NOTIFICATION_ANS_SHOW_TEST ===> '
    console.info(TAG + "SUB_NOTIFICATION_ANS_SHOW_TEST START")

    /*
    * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0100
    * @tc.name: show()
    * @tc.desc: verify the function of show
    */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0100', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0100 START ')
      let ShowNotificationOptions = {
        contentTitle: 'Title1',
        contentText: 'This is a notification 001'
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title1')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 001')
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0200
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0200', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0200 START ')
      let ShowNotificationOptions = {
        contentTitle: 123,
        contentText: 'This is a notification 002'
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle is number:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 002')
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0300
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0300', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0300 START ')
      let ShowNotificationOptions = {}
      notification.show(ShowNotificationOptions)
      expect(ShowNotificationOptions.contentTitle).assertEqual(undefined)
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0400
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0400', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0400 START ')
      let ActionResult = {
        bundleName: 'com.example.actsnotificationshow',
        abilityName: 'com.example.actsnotificationshow.MainAbility',
        uri: '/'
      }
      let ShowNotificationOptions = {
        contentTitle: 'Title4',
        contentText: 'This is a notification 004',
        clickAction: ActionResult
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.clickAction.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.clickAction.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.clickAction.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title4')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 004')
      expect(ShowNotificationOptions.clickAction.bundleName).assertEqual('com.example.actsnotificationshow')
      expect(ShowNotificationOptions.clickAction.abilityName).assertEqual('com.example.actsnotificationshow.MainAbility')
      expect(ShowNotificationOptions.clickAction.uri).assertEqual('/')
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0500
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0500', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0500 START ')
      let ActionResult = {
        bundleName: 'com.example.actsnotificationshow',
        abilityName: 'com.example.actsnotificationshow.MainAbility',
        uri: 'pages/index/index'
      }
      let ShowNotificationOptions = {
        contentTitle: 'Title5',
        contentText: 'This is a notification 005',
        clickAction: ActionResult
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.clickAction.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.clickAction.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.clickAction.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title5')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 005')
      expect(ShowNotificationOptions.clickAction.bundleName).assertEqual('com.example.actsnotificationshow')
      expect(ShowNotificationOptions.clickAction.abilityName).assertEqual('com.example.actsnotificationshow.MainAbility')
      expect(ShowNotificationOptions.clickAction.uri).assertEqual('pages/index/index')
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0600
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0600', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0600 START ')
      let ActionResult = {
        bundleName: '',
        abilityName: 'com.example.actsnotificationshow.MainAbility',
        uri: '/',
      }
      let ShowNotificationOptions = {
        contentTitle: 'Title6',
        contentText: 'This is a notification 006',
        clickAction: ActionResult
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.clickAction.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.clickAction.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.clickAction.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title6')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 006')
      expect(ShowNotificationOptions.clickAction.abilityName).assertEqual('com.example.actsnotificationshow.MainAbility')
      expect(ShowNotificationOptions.clickAction.uri).assertEqual('/')
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0700
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0700', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0700 START ')
      let ActionResult = {
        bundleName: 'com.example.actsnotificationshow',
        abilityName: '',
        uri: '/',
      }
      let ShowNotificationOptions = {
        contentTitle: 'Title7',
        contentText: 'This is a notification 007',
        clickAction: ActionResult
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.clickAction.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.clickAction.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.clickAction.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title7')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 007')
      expect(ShowNotificationOptions.clickAction.bundleName).assertEqual('com.example.actsnotificationshow')
      expect(ShowNotificationOptions.clickAction.uri).assertEqual('/')
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0800
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0800', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0800 START ')
      let ActionResult = {
        bundleName: 'com.example.actsnotificationshow',
        abilityName: 'com.example.actsnotificationshow.MainAbility',
        uri: '',
      }
      let ShowNotificationOptions = {
        contentTitle: 'Title8',
        contentText: 'This is a notification 008',
        clickAction: ActionResult
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.clickAction.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.clickAction.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.clickAction.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title8')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 008')
      expect(ShowNotificationOptions.clickAction.bundleName).assertEqual('com.example.actsnotificationshow')
      expect(ShowNotificationOptions.clickAction.abilityName).assertEqual('com.example.actsnotificationshow.MainAbility')
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_0900
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_0900', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_0900 START ')
      let ActionResult = {
        bundleName: 'com.example.actsnotificationshow',
        abilityName: 'com.example.actsnotificationshow.MainAbility',
        uri: '/',
      }
      let ShowNotificationOptions = {
        contentText: 'This is a notification 009',
        clickAction: ActionResult
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.clickAction.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.clickAction.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.clickAction.uri)
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 009')
      expect(ShowNotificationOptions.clickAction.bundleName).assertEqual('com.example.actsnotificationshow')
      expect(ShowNotificationOptions.clickAction.abilityName).assertEqual('com.example.actsnotificationshow.MainAbility')
      expect(ShowNotificationOptions.clickAction.uri).assertEqual('/')
      done()
    })

    /*
     * @tc.number: SUB_NOTIFICATION_ANS_SHOW_TEST_1000
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('SUB_NOTIFICATION_ANS_SHOW_TEST_1000', 0, async function (done) {
      console.info(TAG + 'SUB_NOTIFICATION_ANS_SHOW_TEST_1000 START ')
      let ActionResult = {
        bundleName: 'com.example.actsnotificationshow',
        abilityName: 'com.example.actsnotificationshow.MainAbility',
        uri: '/',
      }
      let ShowNotificationOptions = {
        contentTitle: 'Title10',
        clickAction: ActionResult
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.clickAction.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.clickAction.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.clickAction.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title10')
      expect(ShowNotificationOptions.clickAction.bundleName).assertEqual('com.example.actsnotificationshow')
      expect(ShowNotificationOptions.clickAction.abilityName).assertEqual('com.example.actsnotificationshow.MainAbility')
      expect(ShowNotificationOptions.clickAction.uri).assertEqual('/')
      done()
    })

    console.info(TAG + "SUB_NOTIFICATION_ANS_SHOW_TEST END");


  })

}
