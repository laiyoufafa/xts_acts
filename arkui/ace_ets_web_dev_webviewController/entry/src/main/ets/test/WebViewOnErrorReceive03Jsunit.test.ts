/**
 * Copyright (c) 2023 iSoftStone Information Technology (Group) Co.,Ltd.
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
import { describe, beforeEach, afterEach, it, expect } from "@ohos/hypium";
import events_emitter from '@ohos.events.emitter';
import Utils from './Utils.ets';
import router from '@system.router';
export default function webViewOnErrorReceive03Jsunit() {
    describe('ActsAceWebDevWebViewOnErrorReceive03Test', function () {
        beforeEach(async function (done) {
            let options = {
                uri: "MainAbility/pages/onErrorReceive03"
            }
            try {
                router.clear();
                let pages = router.getState();
                console.info("get onErrorReceive03 state success " + JSON.stringify(pages));
                if (!("onErrorReceive03" == pages.name)) {
                    console.info("get onErrorReceive03 state success " + JSON.stringify(pages.name));
                    let result = await router.push(options);
                    await Utils.sleep(2000);
                    console.info("push onErrorReceive03 page success " + JSON.stringify(result));
                }
            } catch (err) {
                console.error("push onErrorReceive03 page error: " + err);
            }
            await Utils.sleep(2000);
            done()
        })
        afterEach(async function (done) {
            done();
        })
        /*
        *tc.number SUB_ACE_BASIC_ETS_API_ONERRORRECEIVE_0300
        *tc.name testOnErrorReceive03
        *tc.desc test api onErrorReceive  by load 'https://wrong.host.badssl.com/'
        */
        it('testOnErrorReceive03',0,async function(done){
            let errorIfo = 'ERR_CERT_COMMON_NAME_INVALID';
            let errorCode = -200;
            let url = 'https://wrong.host.badssl.com/';
            let isMainFrame = true;
            let isRedirect = false;
            let isRequestGesture = false;
            Utils.registerEvent("testOnErrorReceive03", errorIfo, 7122, done);
            Utils.registerEvent("testOnErrorReceive03", errorCode, 7124, done);
            Utils.registerEvent("testOnErrorReceive03", url, 7126, done);
            Utils.registerEvent("testOnErrorReceive03", isMainFrame, 7128, done);
            Utils.registerEvent("testOnErrorReceive03", isRedirect, 7130, done);
            Utils.registerEvent("testOnErrorReceive03", isRequestGesture, 7132, done);
            Utils.registerEvent("testOnErrorReceive03", '', 7134, done);
            sendEventByKey('onErrorReceive03', 10, '');
        })
    })
}