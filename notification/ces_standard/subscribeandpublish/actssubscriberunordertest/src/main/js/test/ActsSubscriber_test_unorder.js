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
import Subscriber from "@ohos.commonEvent";
import {describe,beforeAll,beforeEach,afterEach,afterAll,it,expect,} from "@ohos/hypium";

export default function ActsSubscriberTestUnorder() {
describe("ActsSubscriberTestUnorder", async function (done) {
  console.info(
    "===========ActsSubscriberTestUnorder start====================>"
  );
  let commonEventSubscriber001;
  let commonEventSubscriber002;
  let commonEventSubscriber003;
  let commonEventSubscriber004;
  let commonEventSubscriber0051;
  let commonEventSubscriber0052;
  let commonEventSubscriber006;
  let commonEventSubscriber007;
  let commonEventSubscriber008;
  let commonEventSubscriber0101;
  let commonEventSubscriber0102;
  let commonEventSubscriber011;
  let commonEventSubscriber012;

  function publishCallback(err) {
    console.info("==========================>publishCallback");
  }

  function publishCallback10001(err) {
    console.info("==========================>publishCallback");
  }

  function publishCallback10002(err) {
    console.info("==========================>publishCallback");
  }

  function unsubscriberCallBack(err) {
    console.info("==========================>unsubscriberCallBack");
  }

  /*
   * @tc.number    : ActsSubscriberTestUnorder_0100
   * @tc.name      : verify subscribe and publish : Check subscribe and publish common event data
   * @tc.desc      : Check the subscriber can receive event "publish_event0100" type of the interface (by Promise)
   */
  it("ActsSubscriberTestUnorder_0100", 0, async function (done) {
    console.info("===============ActsSubscriberTestUnorder_0100=============================>");
    function subscriberCallBack001(err, data) {
      console.info("==========================>subscriberCallBack001");
      expect(data.event).assertEqual("publish_event0100");
      expect(data.bundleName).assertEqual("");
      expect(data.code).assertEqual(0);
      expect(data.data).assertEqual("");
      done();
    }

    let commonEventSubscribeInfo = {
      events: ["publish_event0100"],
    };

    Subscriber.createSubscriber(commonEventSubscribeInfo).then((data) => {
      console.info("===============ActsSubscriberTestUnorder_0100=========createSubscriber promise");
      commonEventSubscriber001 = data;
      data.getSubscribeInfo().then(() => {
        console.info( "===============ActsSubscriberTestUnorder_0100=========getSubscribeInfo promise");
        Subscriber.subscribe(commonEventSubscriber001, subscriberCallBack001);
        setTimeout(function () {
          console.info("==========ActsSubscriberTestUnorder_0100 publish start============");
          Subscriber.publish("publish_event0100", publishCallback);
        }, 1000);
      });
    });
  });

  /*
   * @tc.number    : ActsSubscriberTestUnorder_0200
   * @tc.name      : verify subscribe and publish : Check subscribe and publish common event data
   *                 of containing special characters
   * @tc.desc      : Check the subscriber can receive event "@#￥#3243adsafdf_" type of the interface (by Promise)
   */
  it("ActsSubscriberTestUnorder_0200", 0, async function (done) {
    console.info("===============ActsSubscriberTestUnorder_0200==========================>");

    function subscriberCallBack002(err, data) {
      console.info("==========================>subscriberCallBack002");
      expect(data.event).assertEqual("@#￥#3243adsafdf_");
      expect(data.bundleName).assertEqual("");
      expect(data.code).assertEqual(0);
      expect(data.data).assertEqual("");
      done();
    }

    let commonEventSubscribeInfo = {
      events: ["@#￥#3243adsafdf_"],
    };

    Subscriber.createSubscriber(commonEventSubscribeInfo).then((data) => {
      console.info("===============ActsSubscriberTestUnorder_0200=========createSubscriber promise");
      commonEventSubscriber002 = data;
      data.getSubscribeInfo().then(() => {
        console.info("===============ActsSubscriberTestUnorder_0200=========getSubscribeInfo promise");
        Subscriber.subscribe(commonEventSubscriber002, subscriberCallBack002);
        setTimeout(function () {
          console.info("==========ActsSubscriberTestUnorder_0200 publish start============");
          Subscriber.publish("@#￥#3243adsafdf_", publishCallback);
        }, 1000);
      });
    });
  });

  /*
   * @tc.number    : ActsSubscriberTestUnorder_0300
   * @tc.name      : verify subscribe and publish : Check subscribe and publish common event data
   *                 with publishInfo data
   * @tc.desc      : Check the subscriber can receive event "publish_event0300" type of the interface (by Promise)
   */
  it("ActsSubscriberTestUnorder_0300", 0, async function (done) {
    console.info("===============ActsSubscriberTestUnorder_0300==========================>");
    let commonEventSubscribeInfo = {
      events: ["publish_event0300"],
      publisherDeviceId: "PublishDeviceId0300",
      priority: 10,
    };

    let commonEventPublishData = {
      isOrdered: false,
      code: 55,
      data: "PublishData0300",
    };

    function isOrderedCommonEventCallback003(err, data) {
      console.info("==========================>isOrderedCommonEventCallback003");
      expect(data).assertEqual(false);
      done();
    }

    function subscriberCallBack003(err, data) {
      console.info("==========================>subscriberCallBack003");
      expect(data.event).assertEqual("publish_event0300");
      expect(data.code).assertEqual(55);
      expect(data.data).assertEqual("PublishData0300");
      commonEventSubscriber003.isOrderedCommonEvent(
        isOrderedCommonEventCallback003
      );
    }

    Subscriber.createSubscriber(commonEventSubscribeInfo).then((data) => {
      console.info("===============ActsSubscriberTestUnorder_0300=========createSubscriber promise");
      commonEventSubscriber003 = data;
      data.getSubscribeInfo().then(() => {
        console.info("===============ActsSubscriberTestUnorder_0300=========getSubscribeInfo promise");
        Subscriber.subscribe(commonEventSubscriber003, subscriberCallBack003);
        setTimeout(function () {
          console.info("==========ActsSubscriberTestUnorder_0300 publish start============");
          Subscriber.publish("publish_event0300",commonEventPublishData,publishCallback);
        }, 1000);
      });
    });
  });

  /*
   * @tc.number    : ActsSubscriberTestUnorder_0400
   * @tc.name      : verify subscribe and publish : Check subscribe and publish common event data
   *                 with publishInfo data
   * @tc.desc      : Check the subscriber can receive event "publish_event0300" type of the interface (by Promise)
   */
  it("ActsSubscriberTestUnorder_0400", 0, async function (done) {
    console.info("===============ActsSubscriberTestUnorder_0400==========================>");
    let commonEventSubscribeInfo = {
      events: ["publish_event0400"],
      publisherDeviceId: "PublishDeviceId0400",
      priority: 10,
    };

    let commonEventPublishData = {
      isOrdered: false,
      bundleName: "com.example.actssubscribertestunorder",
      code: 55,
      data: "PublishData0400",
    };

    function isOrderedCommonEventCallback004(err, data) {
      console.info("==========================>isOrderedCommonEventCallback003");
      expect(data).assertEqual(false);
      done();
    }

    function subscriberCallBack004(err, data) {
      console.info("==========================>subscriberCallBack004");
      expect(data.event).assertEqual("publish_event0400");
      expect(data.code).assertEqual(55);
      expect(data.data).assertEqual("PublishData0400");
      commonEventSubscriber004.isOrderedCommonEvent(
        isOrderedCommonEventCallback004
      );
    }

    Subscriber.createSubscriber(commonEventSubscribeInfo).then((data) => {
      console.info("===============ActsSubscriberTestUnorder_0400=========createSubscriber promise");
      commonEventSubscriber004 = data;
      data.getSubscribeInfo().then(() => {
        console.info(
          "===============ActsSubscriberTestUnorder_0400=========getSubscribeInfo promise"
        );
        Subscriber.subscribe(commonEventSubscriber004, subscriberCallBack004);
        setTimeout(function () {
          console.info("==========ActsSubscriberTestUnorder_0400 publish start============");
          Subscriber.publish(
            "publish_event0400",
            commonEventPublishData,
            publishCallback
          );
        }, 1000);
      });
    });
  });

  /*
   * @tc.number    : ActsSubscriberTestUnorder_0500
   * @tc.name      : verify subscribe and publish : Check the two different subscribe and one publish,
   *                 and check unsubscribe event
   * @tc.desc      : Check the subscriber can receive event "publish_event0500" type of the interface (by Promise)
   */
  it("ActsSubscriberTestUnorder_0500", 0, async function (done) {
    console.info("===============ActsSubscriberTestUnorder_0500==========================>");
    let commonEventSubscribeInfo = {
      events: ["publish_event0500"],
    };

    let commonEventPublishData = {
      isOrdered: false,
      isSticky: false,
    };

    function subscriberCallBack005(err, data) {
      console.info("==========================>subscriberCallBack0500");
      expect(data.event).assertEqual("publish_event0500");
      expect(data.bundleName).assertEqual("");
      expect(data.code).assertEqual(0);
      expect(data.data).assertEqual("");
      done();
    }

    Subscriber.createSubscriber(commonEventSubscribeInfo).then((data) => {
      console.info("===============ActsSubscriberTestUnorder_0500_1=========createSubscriber promise");
      commonEventSubscriber0051 = data;
      data.getSubscribeInfo().then(() => {
        console.info("===============ActsSubscriberTestUnorder_0500_1=========getSubscribeInfo promise");
        Subscriber.subscribe(commonEventSubscriber0051, subscriberCallBack005);
      });
    });

    Subscriber.createSubscriber(commonEventSubscribeInfo).then((data) => {
      console.info("===============ActsSubscriberTestUnorder_0500_2=========createSubscriber promise");
      commonEventSubscriber0052 = data;
      data.getSubscribeInfo().then(() => {
        console.info("===============ActsSubscriberTestUnorder_0500_2=========getSubscribeInfo promise");
        Subscriber.subscribe(commonEventSubscriber0052, subscriberCallBack005);
        Subscriber.unsubscribe(commonEventSubscriber0051, unsubscriberCallBack);
        setTimeout(function () {
          console.info(
            "==========ActsSubscriberTestUnorder_0500 publish start============"
          );
          Subscriber.publish(
            "publish_event0500",
            commonEventPublishData,
            publishCallback
          );
        }, 1000);
      });
    });
  });

  /*
   * @tc.number    : ActsSubscriberTestUnorder_0600
   * @tc.name      : verify subscribe and publish : Check whether the current public event is a sticky event
   * @tc.desc      : isStickyCommonEvent(callback: AsyncCallback<boolean>): void
   */
  it("ActsSubscriberTestUnorder_0600", 0, async function (done) {
    console.info("===============ActsSubscriberTestUnorder_0600==========================>");
    let commonEventSubscribeInfo = {
      events: ["publish_event0600"],
    };

    let commonEventPublishData = {
      isOrdered: false,
      isSticky: false,
    };

    function isStickyCallback(err, isSticky) {
      console.info("==========================>isStickyCallback");
      expect(isSticky).assertEqual(false);
      done();
    }

    function subscriberCallBack006(err, data) {
      console.info("==========================>subscriberCallBack006");
      commonEventSubscriber006.isStickyCommonEvent(isStickyCallback);
    }

    Subscriber.createSubscriber(commonEventSubscribeInfo).then((data) => {
      console.info("===============ActsSubscriberTestUnorder_0600=========createSubscriber promise");
      commonEventSubscriber006 = data;
      data.getSubscribeInfo().then(() => {
        console.info("===============ActsSubscriberTestUnorder_0600=========getSubscribeInfo promise");
        Subscriber.subscribe(commonEventSubscriber006, subscriberCallBack006);
        Subscriber.unsubscribe(commonEventSubscriber006, unsubscriberCallBack);
        setTimeout(function () {
          console.info("==========ActsSubscriberTestUnorder_0600 publish start============");
          Subscriber.publish("publish_event0600",commonEventPublishData,publishCallback);
        }, 1000);
      });
    });
  });

  /*
   * @tc.number    : ActsSubscriberTestUnorder_0700
   * @tc.name      : verify subscribe and publish : Check whether the current public event is a sticky event
   * @tc.desc      : isStickyCommonEvent(): Promise<boolean>
   */
  it("ActsSubscriberTestUnorder_0700", 0, async function (done) {
    console.info("===============ActsSubscriberTestUnorder_0700==========================>");
    let commonEventSubscribeInfo = {
      events: ["publish_event0700"],
      userId:100
    };

    let commonEventPublishData = {
      isOrdered: false,
      isSticky: false,
    };

    function subscriberCallBack007(err, data) {
      console.info("subscriberCallBack007");
      commonEventSubscriber007
        .isStickyCommonEvent()
        .then((isSticky) => {
          console.info("isSticky " + JSON.stringify(isSticky));
          expect(isSticky).assertEqual(false);
          done();
        })
        .catch((err) => {
          console.info("isSticky failed " + JSON.stringify(err));
        });
    }

    Subscriber.createSubscriber(commonEventSubscribeInfo).then((data) => {
      console.info("===============ActsSubscriberTestUnorder_0700=========createSubscriber promise");
      expect(commonEventSubscribeInfo.userId).assertEqual(100)
      commonEventSubscriber007 = data;
      data.getSubscribeInfo().then(() => {
        console.info("===============ActsSubscriberTestUnorder_0700=========getSubscribeInfo promise");
        Subscriber.subscribe(commonEventSubscriber007, subscriberCallBack007);
        Subscriber.unsubscribe(commonEventSubscriber007, unsubscriberCallBack);
        setTimeout(function () {
          console.info("==========ActsSubscriberTestUnorder_0700 publish start============");
          Subscriber.publish("publish_event0700",commonEventPublishData,publishCallback);
        }, 1000);
      });
    });
  });
});
}
