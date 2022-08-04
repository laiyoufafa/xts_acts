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
  describe('ActsNotificationShowTest', function () {
    const TAG = 'ActsNotificationShowTest ===> '
    console.info(TAG + "ActsNotificationShowTest START")

    /*
    * @tc.number: ActsNotificationShowTest_0100
    * @tc.name: show()
    * @tc.desc: verify the function of show
    */
    it('ActsNotificationShowTest_0100', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0100 START ')
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
     * @tc.number: ActsNotificationShowTest_0200
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_0200', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0200 START ')
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
     * @tc.number: ActsNotificationShowTest_0300
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_0300', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0300 START ')
      let ShowNotificationOptions = {}
      notification.show(ShowNotificationOptions)
      expect(ShowNotificationOptions.contentTitle).assertEqual(undefined)
      done()
    })

    /*
     * @tc.number: ActsNotificationShowTest_0400
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_0400', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0400 START ')
      let ShowNotificationOptions = {
        contentTitle: 'Title4',
        contentText: 'This is a notification 004',
        ActionResult: {
          bundleName: 'com.example.notification',
          abilityName: 'com.example.notification.MainAbility',
          uri: '/',
        }
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.ActionResult.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.ActionResult.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.ActionResult.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title4')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 004')
      expect(ShowNotificationOptions.ActionResult.bundleName).assertEqual('com.example.notification')
      expect(ShowNotificationOptions.ActionResult.abilityName).assertEqual('com.example.notification.MainAbility')
      expect(ShowNotificationOptions.ActionResult.uri).assertEqual('/')
      done()
    })

    /*
     * @tc.number: ActsNotificationShowTest_0500
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_0500', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0500 START ')
      let ShowNotificationOptions = {
        contentTitle: 'Title5',
        contentText: 'This is a notification 005',
        ActionResult: {
          bundleName: 'com.example.notification',
          abilityName: 'com.example.notification.MainAbility',
          uri: 'pages/index/index',
        }
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.ActionResult.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.ActionResult.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.ActionResult.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title5')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 005')
      expect(ShowNotificationOptions.ActionResult.bundleName).assertEqual('com.example.notification')
      expect(ShowNotificationOptions.ActionResult.abilityName).assertEqual('com.example.notification.MainAbility')
      expect(ShowNotificationOptions.ActionResult.uri).assertEqual('pages/index/index')
      done()
    })

    /*
     * @tc.number: ActsNotificationShowTest_0600
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_0600', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0600 START ')
      let ShowNotificationOptions = {
        contentTitle: 'Title6',
        contentText: 'This is a notification 006',
        ActionResult: {
          bundleName: '',
          abilityName: 'com.example.notification.MainAbility',
          uri: '/',
        }
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.ActionResult.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.ActionResult.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.ActionResult.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title6')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 006')
      expect(ShowNotificationOptions.ActionResult.abilityName).assertEqual('com.example.notification.MainAbility')
      expect(ShowNotificationOptions.ActionResult.uri).assertEqual('/')
      done()
    })

    /*
     * @tc.number: ActsNotificationShowTest_0700
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_0700', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0700 START ')
      let ShowNotificationOptions = {
        contentTitle: 'Title7',
        contentText: 'This is a notification 007',
        ActionResult: {
          bundleName: 'com.example.notification',
          abilityName: '',
          uri: '/',
        }
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.ActionResult.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.ActionResult.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.ActionResult.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title7')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 007')
      expect(ShowNotificationOptions.ActionResult.bundleName).assertEqual('com.example.notification')
      expect(ShowNotificationOptions.ActionResult.uri).assertEqual('/')
      done()
    })

    /*
     * @tc.number: ActsNotificationShowTest_0800
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_0800', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0800 START ')
      let ShowNotificationOptions = {
        contentTitle: 'Title8',
        contentText: 'This is a notification 008',
        ActionResult: {
          bundleName: 'com.example.notification',
          abilityName: 'com.example.notification.MainAbility',
          uri: '',
        }
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.ActionResult.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.ActionResult.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.ActionResult.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title8')
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 008')
      expect(ShowNotificationOptions.ActionResult.bundleName).assertEqual('com.example.notification')
      expect(ShowNotificationOptions.ActionResult.abilityName).assertEqual('com.example.notification.MainAbility')
      done()
    })

    /*
     * @tc.number: ActsNotificationShowTest_0900
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_0900', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_0900 START ')
      let ShowNotificationOptions = {
        contentText: 'This is a notification 009',
        ActionResult: {
          bundleName: 'com.example.notification',
          abilityName: 'com.example.notification.MainAbility',
          uri: '/',
        }
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' contentText:' + ShowNotificationOptions.contentText)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.ActionResult.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.ActionResult.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.ActionResult.uri)
      expect(ShowNotificationOptions.contentText).assertEqual('This is a notification 009')
      expect(ShowNotificationOptions.ActionResult.bundleName).assertEqual('com.example.notification')
      expect(ShowNotificationOptions.ActionResult.abilityName).assertEqual('com.example.notification.MainAbility')
      expect(ShowNotificationOptions.ActionResult.uri).assertEqual('/')
      done()
    })

    /*
     * @tc.number: ActsNotificationShowTest_1000
     * @tc.name: show()
     * @tc.desc: verify the function of show
     */
    it('ActsNotificationShowTest_1000', 0, async function (done) {
      console.info(TAG + 'ActsNotificationShowTest_1000 START ')
      let ShowNotificationOptions = {
        contentTitle: 'Title10',
        ActionResult: {
          bundleName: 'com.example.notification',
          abilityName: 'com.example.notification.MainAbility',
          uri: '/',
        }
      }
      notification.show(ShowNotificationOptions)
      console.info(TAG + ' conteneTitle:' + ShowNotificationOptions.contentTitle)
      console.info(TAG + ' ActionResult bundleName:' + ShowNotificationOptions.ActionResult.bundleName)
      console.info(TAG + ' ActionResult abilityName:' + ShowNotificationOptions.ActionResult.abilityName)
      console.info(TAG + ' ActionResult uri:' + ShowNotificationOptions.ActionResult.uri)
      expect(ShowNotificationOptions.contentTitle).assertEqual('Title10')
      expect(ShowNotificationOptions.ActionResult.bundleName).assertEqual('com.example.notification')
      expect(ShowNotificationOptions.ActionResult.abilityName).assertEqual('com.example.notification.MainAbility')
      expect(ShowNotificationOptions.ActionResult.uri).assertEqual('/')
      done()
    })

    console.info(TAG + "ActsNotificationShowTest END");


  })

}
