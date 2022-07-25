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
import notification from '@ohos.notification'
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from '@ohos/hypium'

const TIMEOUT = 2000;
export default function ActsAnsSlotSystemPromise() {
describe('ActsAnsSlotSystemPromise', function () {

    /*
     * @tc.number    : ActsAnsSlotSystemPromise_0100
     * @tc.name      : Verify getSlots after adding slots and removeSlot
     * @tc.desc      : getSlots after adding all type slots and adding again after removing slot
     */
    it('ActsAnsSlotSystemPromise_0100', 0, async function (done) {
        console.debug("====>ActsAnsSlotTestSystem_0100 start====>");
        console.debug("====>addSlot SOCIAL_COMMUNICATION====>");
        await notification.addSlot(
            {
                type: notification.SlotType.SOCIAL_COMMUNICATION,
                level: notification.SlotLevel.LEVEL_NONE,
                desc: "slot_SOCIAL_COMMUNICATION_desc",
                badgeFlag: false,
                bypassDnd: true,
                vibrationEnabled: true,
                sound: "slot_SOCIAL_COMMUNICATION_sound",
                lightEnabled: true,
                lightColor: 1
            });
        console.debug("====>addSlot SERVICE_INFORMATION====>");
        await notification.addSlot(
            {
                type: notification.SlotType.SERVICE_INFORMATION,
                level: notification.SlotLevel.LEVEL_MIN,
                desc: "slot_SERVICE_INFORMATION_desc",
                badgeFlag: false,
                bypassDnd: true,
                vibrationEnabled: true,
                sound: "slot_SERVICE_INFORMATION_sound",
                lightEnabled: true,
                lightColor: 2
            });
        console.debug("====>addSlot CONTENT_INFORMATION====>");
        await notification.addSlot(
            {
                type: notification.SlotType.CONTENT_INFORMATION,
                level: notification.SlotLevel.LEVEL_LOW,
                desc: "slot_CONTENT_INFORMATION_desc",
                badgeFlag: false,
                bypassDnd: true,
                vibrationEnabled: true,
                sound: "slot_CONTENT_INFORMATION_sound",
                lightEnabled: true,
                lightColor: 3
            });
        console.debug("====>addSlot OTHER_TYPES====>");
        await notification.addSlot(
            {
                type: notification.SlotType.OTHER_TYPES,
                level: notification.SlotLevel.LEVEL_DEFAULT,
                desc: "slot_OTHER_TYPES_desc",
                badgeFlag: false,
                bypassDnd: true,
                vibrationEnabled: true,
                sound: "slot_OTHER_TYPES_sound",
                lightEnabled: true,
                lightColor: 4
            });
        console.debug("====>addSlot UNKNOWN_TYPE====>");
        await notification.addSlot(
            {
                type: notification.SlotType.UNKNOWN_TYPE,
                level: notification.SlotLevel.LEVEL_HIGH,
                desc: "slot_UNKNOWN_TYPE_desc",
                badgeFlag: false,
                bypassDnd: true,
                vibrationEnabled: true,
                sound: "slot_UNKNOWN_TYPE_sound",
                lightEnabled: true,
                lightColor: 5
            });
        var data = await notification.getSlots();
        console.debug("====>getSlots enter====>");
        console.debug("====>getSlots data====>" + JSON.stringify(data));
        try{
            expect(data[0].type).assertEqual(notification.SlotType.SOCIAL_COMMUNICATION);
            expect(data[0].level).assertEqual(notification.SlotLevel.LEVEL_NONE);
            expect(data[0].desc).assertEqual("slot_SOCIAL_COMMUNICATION_desc");
            expect(data[0].badgeFlag).assertEqual(false);
            expect(data[0].bypassDnd).assertEqual(true);
            expect(data[0].vibrationEnabled).assertEqual(true);
            expect(data[0].sound).assertEqual("slot_SOCIAL_COMMUNICATION_sound");
            expect(data[0].lightEnabled).assertEqual(true);
            expect(data[0].lightColor).assertEqual(1);

            expect(data[1].type).assertEqual(notification.SlotType.SERVICE_INFORMATION);
            expect(data[1].level).assertEqual(notification.SlotLevel.LEVEL_MIN);
            expect(data[1].desc).assertEqual("slot_SERVICE_INFORMATION_desc");
            expect(data[1].badgeFlag).assertEqual(false);
            expect(data[1].bypassDnd).assertEqual(true);
            expect(data[1].vibrationEnabled).assertEqual(true);
            expect(data[1].sound).assertEqual("slot_SERVICE_INFORMATION_sound");
            expect(data[1].lightEnabled).assertEqual(true);
            expect(data[1].lightColor).assertEqual(2);

            expect(data[2].type).assertEqual(notification.SlotType.CONTENT_INFORMATION);
            expect(data[2].level).assertEqual(notification.SlotLevel.LEVEL_LOW);
            expect(data[2].desc).assertEqual("slot_CONTENT_INFORMATION_desc");
            expect(data[2].badgeFlag).assertEqual(false);
            expect(data[2].bypassDnd).assertEqual(true);
            expect(data[2].vibrationEnabled).assertEqual(true);
            expect(data[2].sound).assertEqual("slot_CONTENT_INFORMATION_sound");
            expect(data[2].lightEnabled).assertEqual(true);
            expect(data[2].lightColor).assertEqual(3);

            expect(data[3].type).assertEqual(notification.SlotType.OTHER_TYPES);
            expect(data[3].level).assertEqual(notification.SlotLevel.LEVEL_DEFAULT);
            expect(data[3].desc).assertEqual("slot_OTHER_TYPES_desc");
            expect(data[3].badgeFlag).assertEqual(false);
            expect(data[3].bypassDnd).assertEqual(true);
            expect(data[3].vibrationEnabled).assertEqual(true);
            expect(data[3].sound).assertEqual("slot_OTHER_TYPES_sound");
            expect(data[3].lightEnabled).assertEqual(true);
            expect(data[3].lightColor).assertEqual(4);
            console.debug("====>getSlots end====>");
        }catch(err){
            console.error("====>getSlots catch err====>" + JSON.stringify(err));
            expect().assertFail();
            done();
        }
        console.debug("====>removeAllSlots ActsAnsSlotSystemPromise_0100====>");
        await notification.removeAllSlots();
        console.debug("====>getSlots after remove all slots====>");
        var dataTwo = notification.getSlots();
        console.debug("====>getSlots dataTwo:" + JSON.stringify(dataTwo));
        console.debug("====>addSlot SERVICE_INFORMATION second====>");
        await notification.addSlot(
            {
                type: notification.SlotType.SERVICE_INFORMATION,
                level: notification.SlotLevel.LEVEL_DEFAULT,
                desc: "slot_SERVICE_INFORMATION_Desc_Second",
                badgeFlag: false,
                bypassDnd: true,
                vibrationEnabled: true,
                sound: "slot_SERVICE_INFORMATION_Sound_Second",
                lightEnabled: true,
                lightColor: 2
            });
        var dataThree = await notification.getSlot(notification.SlotType.SERVICE_INFORMATION);
        console.debug("====>getSlotPromise SERVICE_INFORMATION ActsAnsSlotSystemPromise_0100 enter====>");
        console.debug("====>getSlotPromise ActsAnsSlotSystemPromise_0100 dataThree:" + JSON.stringify(dataThree));
        expect(dataThree.type).assertEqual(notification.SlotType.SERVICE_INFORMATION);
        expect(dataThree.level).assertEqual(notification.SlotLevel.LEVEL_DEFAULT);
        expect(dataThree.desc).assertEqual("slot_SERVICE_INFORMATION_Desc_Second");
        expect(dataThree.badgeFlag).assertEqual(false);
        expect(dataThree.bypassDnd).assertEqual(true);
        expect(dataThree.vibrationEnabled).assertEqual(true);
        expect(dataThree.sound).assertEqual("slot_SERVICE_INFORMATION_Sound_Second");
        expect(dataThree.lightEnabled).assertEqual(true);
        expect(dataThree.lightColor).assertEqual(2);
        console.debug("====>getSlotPromise SERVICE_INFORMATION ActsAnsSlotSystemPromise_0100 finish====>");
        console.debug("====>removeSlot SERVICE_INFORMATION====>");
        await notification.removeSlot(notification.SlotType.SERVICE_INFORMATION);
        done();
        setTimeout(function (){
            console.debug("====>time out ActsAnsSlotTestSystem_0100====>");
        }, TIMEOUT);
    })

    /*
     * @tc.number    : ActsAnsSlotSystemPromise_0200
     * @tc.name      : Verify that the same type of slot is added repeatedly
     * @tc.desc      : the same type of slot is added repeatedly, and the obtained slot is added for the first time
     */
    it('ActsAnsSlotSystemPromise_0200', 0, async function (done) {
        console.debug("====>ActsAnsSlotSystemPromise_0200 start====>");
        console.debug("====>addSlot SOCIAL_COMMUNICATION====>");
        await notification.addSlot(
            {
                type: notification.SlotType.SOCIAL_COMMUNICATION,
                level: notification.SlotLevel.LEVEL_NONE,
                desc: "slot_SOCIAL_COMMUNICATION_Desc_First",
                badgeFlag: false,
                bypassDnd: true,
                vibrationEnabled: true,
                sound: "slot_SOCIAL_COMMUNICATION_Sound_First",
                lightEnabled: true,
                lightColor: 1
            });
        await notification.addSlot(
            {
                type: notification.SlotType.SOCIAL_COMMUNICATION,
                level: notification.SlotLevel.LEVEL_DEFAULT,
                desc: "slot_SOCIAL_COMMUNICATION_Desc_Second",
                badgeFlag: false,
                bypassDnd: true,
                vibrationEnabled: true,
                sound: "slot_SOCIAL_COMMUNICATION_Sound_Second",
                lightEnabled: true,
                lightColor: 1
            });
        console.debug("====>getSlot SlotType.SOCIAL_COMMUNICATION====>");
        var data = await notification.getSlot(notification.SlotType.SOCIAL_COMMUNICATION);
        console.debug("====>getSlot ActsAnsSlotSystemPromise_0200 enter====>");
        console.debug("====>getSlot ActsAnsSlotSystemPromise_0200 data:" + JSON.stringify(data));
        expect(data.type).assertEqual(notification.SlotType.SOCIAL_COMMUNICATION);
        expect(data.level).assertEqual(notification.SlotLevel.LEVEL_NONE);
        expect(data.desc).assertEqual("slot_SOCIAL_COMMUNICATION_Desc_First");
        expect(data.badgeFlag).assertEqual(false);
        expect(data.bypassDnd).assertEqual(true);
        expect(data.vibrationEnabled).assertEqual(true);
        expect(data.sound).assertEqual("slot_SOCIAL_COMMUNICATION_Sound_First");
        expect(data.lightEnabled).assertEqual(true);
        expect(data.lightColor).assertEqual(1);
        console.debug("====>getSlot ActsAnsSlotSystemPromise_0200 finish====>");
        console.debug("====>removeSlot SOCIAL_COMMUNICATION start====>");
        await notification.removeSlot(notification.SlotType.SOCIAL_COMMUNICATION);
        console.debug("====>ActsAnsSlotSystemPromise_0200 end====>");
        done();
        setTimeout(function (){
            console.debug("====>time out ActsAnsSlotSystemPromise_0200====>");
        }, TIMEOUT);
    })
}) }
