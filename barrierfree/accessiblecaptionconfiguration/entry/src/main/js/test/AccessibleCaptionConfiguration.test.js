/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'
import accessibility from '@ohos.accessibility'

describe('AccessibleCaptionConfiguration', function () {

  beforeEach(async function (done) {
    console.info(`AccessibleCaptionConfiguration: beforeEach starts`);
    done();
  })

  afterEach(async function (done) {
    console.info(`AccessibleCaptionConfiguration: afterEach starts`);
    setTimeout(done, 1000);
  })

  /*
   * @tc.number  CaptionConfiguration_0010
   * @tc.name    CaptionConfiguration_0010
   * @tc.desc    The parameter input is 'enableChange', test the captionManager.on() function,
   *             and return undefined
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0010', 0, async function (done) {
    console.info('CaptionConfiguration_0010');
    let captionManager = accessibility.getCaptionsManager();
	let enabled = captionManager.enabled;
	expect(enabled).assertEqual(false);
    done();
    let stateEventType = 'enableChange';
    let ret = captionManager.on(stateEventType, (data) => {});
    expect(ret).assertEqual(undefined);
    done();

  })

  /*
   * @tc.number  CaptionConfiguration_0020
   * @tc.name    CaptionConfiguration_0020
   * @tc.desc    The parameter input is 'styleChange', test the captionManager.on() function,
   *             and return undefined
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0020', 0, async function (done) {
    console.info('CaptionConfiguration_0020');
    let captionManager = accessibility.getCaptionsManager();
    let stateEventType = 'styleChange';
    let ret = captionManager.on(stateEventType, (data) => {});
    expect(ret).assertEqual(undefined);
    done();
  })

   /*
   * @tc.number  CaptionConfiguration_0050
   * @tc.name    CaptionConfiguration_0050
   * @tc.desc    The parameter input is 'enableChange', test the captionManager.off() function,
   *             and return undefined
   * @tc.size    SmallTest
   * @tc.type    User
   */
   it('CaptionConfiguration_0050', 0, async function (done) {
    console.info('CaptionConfiguration_0050');
    let captionManager = accessibility.getCaptionsManager();
    let stateEventType = 'enableChange';
    let ret = captionManager.on(stateEventType, (data) => {});
    expect(ret).assertEqual(undefined);
    done();

  })

  /*
   * @tc.number  CaptionConfiguration_0060
   * @tc.name    CaptionConfiguration_0060
   * @tc.desc    The parameter input is 'styleChange', test the captionManager.off() function,
   *             and return undefined
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0060', 0, async function (done) {
    console.info('CaptionConfiguration_0060');
    let captionManager = accessibility.getCaptionsManager();
    let stateEventType = 'styleChange';
    let ret = captionManager.on(stateEventType, (data) => {});
    expect(ret).assertEqual(undefined);
    done();
  })

  /*
   * @tc.number  CaptionConfiguration_0090
   * @tc.name    CaptionConfiguration_0090
   * @tc.desc    Test captionManager.style.fontFamily function by assigning "default".
   *             captionManager.style.fontFamily will be "default"
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0090', 0, async function (done) {
    console.info('CaptionConfiguration_0090');
    let captionManager = accessibility.getCaptionsManager();
    let fontfamily = "default";
    captionManager.style.fontFamily = fontfamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontfamily);
    done();
  })

  /*
  * @tc.number  CaptionConfiguration_0100
  * @tc.name    CaptionConfiguration_0100
  * @tc.desc    Test captionManager.style.fontFamily function by assigning "monospacedSerif".
  *             captionManager.style.fontFamily will be "monospacedSerif"
  * @tc.size    SmallTest
  * @tc.type    User
  */
  it('CaptionConfiguration_0100', 0, async function (done) {
    console.info('CaptionConfiguration_0100');
    let captionManager = accessibility.getCaptionsManager();
    let fontFamily = "monospacedSerif";
    captionManager.style.fontFamily = fontFamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontFamily);
    done();
  })

  /*
   * @tc.number  CaptionConfiguration_0110
   * @tc.name    CaptionConfiguration_0110
   * @tc.desc    Test captionManager.style.fontFamily function by assigning "serif".
   *             captionManager.style.fontFamily will be "serif"
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0110', 0, async function (done) {
    console.info('CaptionConfiguration_0110');
    let captionManager = accessibility.getCaptionsManager();
    let fontfamily = "serif";
    captionManager.style.fontFamily = fontfamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontfamily);
    done();
  })

  /*
   * @tc.number  CaptionConfiguration_0120
   * @tc.name    CaptionConfiguration_0120
   * @tc.desc    Test captionManager.style.fontFamily function by assigning "monospacedSansSerif".
   *             captionManager.style.fontFamily will be "monospacedSansSerif"
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0120', 0, async function (done) {
    console.info('CaptionConfiguration_0120');
    let captionManager = accessibility.getCaptionsManager();
    let fontfamily = "monospacedSansSerif";
    captionManager.style.fontFamily = fontfamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontfamily);
    done();
  })

  /*
   * @tc.number  CaptionConfiguration_0130
   * @tc.name    CaptionConfiguration_0130
   * @tc.desc    Test captionManager.style.fontFamily function by assigning "sansSerif".
   *             captionManager.style.fontFamily will be "sansSerif"
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0130', 0, async function (done) {
    console.info('CaptionConfiguration_0130');
    let captionManager = accessibility.getCaptionsManager();
    let fontfamily = "sansSerif";
    captionManager.style.fontFamily = fontfamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontfamily);
    done();
  })

  /*
   * @tc.number  CaptionConfiguration_0140
   * @tc.name    CaptionConfiguration_0140
   * @tc.desc    Test captionManager.style.fontFamily function by assigning "casual".
   *             captionManager.style.fontFamily will be "casual"
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0140', 0, async function (done) {
    console.info('CaptionConfiguration_0140');
    let captionManager = accessibility.getCaptionsManager();
    let fontfamily = "casual";
    captionManager.style.fontFamily = fontfamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontfamily);
    done();
  })

  /*
   * @tc.number  CaptionConfiguration_0150
   * @tc.name    CaptionConfiguration_0150
   * @tc.desc    Test captionManager.style.fontFamily function by assigning "cursive".
   *             captionManager.style.fontFamily will be "cursive"
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0150', 0, async function (done) {
    console.info('CaptionConfiguration_0150');
    let captionManager = accessibility.getCaptionsManager();
    let fontfamily = "cursive";
    captionManager.style.fontFamily = fontfamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontfamily);
    done();
  })

  /*
   * @tc.number  CaptionConfiguration_0160
   * @tc.name    CaptionConfiguration_0160
   * @tc.desc    Test captionManager.style.fontFamily function by assigning "smallCapitals".
   *             captionManager.style.fontFamily will be "smallCapitals"
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0160', 0, async function (done) {
    console.info('CaptionConfiguration_0160');
    let captionManager = accessibility.getCaptionsManager();
    let fontfamily = "smallCapitals";
    captionManager.style.fontFamily = fontfamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontfamily);
    done();
  })

  /*
   * @tc.number  CaptionConfiguration_0170
   * @tc.name    CaptionConfiguration_0170
   * @tc.desc    Test captionManager.style.fontFamily function by assigning "".
   *             captionManager.style.fontFamily will be ""
   * @tc.size    SmallTest
   * @tc.type    User
   */
  it('CaptionConfiguration_0170', 0, async function (done) {
    console.info('CaptionConfiguration_0170');
    let captionManager = accessibility.getCaptionsManager();
    let fontFamily = "";
    captionManager.style.fontFamily = fontFamily;
    let value = captionManager.style.fontFamily;
    expect(value).assertEqual(fontFamily);
    done();
  })
	





  /*
   * @tc.number  CaptionConfiguration_0200
   * @tc.name    CaptionConfiguration_0200
   * @tc.desc    Test captionManager.style.fontScale function by assigning 1.
   *             captionManager.style.fontScale will be 1
   * @tc.size    SmallTest
   * @tc.type    User
   */
	it('CaptionConfiguration_0200', 0, async function (done) {
        console.info('CaptionConfiguration_0200');
        let captionManager = accessibility.getCaptionsManager();
        let fontScale = 1;
        captionManager.style.fontScale = fontScale;
        let value = captionManager.style.fontScale;
        expect(value).assertEqual(fontScale);
        done();
    })

  /*
   * @tc.number  CaptionConfiguration_0210
   * @tc.name    CaptionConfiguration_0210
   * @tc.desc    Test captionManager.style.fontScale function by assigning 0.
   *             captionManager.style.fontScale will be 0
   * @tc.size    SmallTest
   * @tc.type    User
   */
    it('CaptionConfiguration_0210', 0, async function (done) {
        console.info('CaptionConfiguration_0210');
        let captionManager = accessibility.getCaptionsManager();
        let fontScale = 0;
        captionManager.style.fontScale = fontScale;
        let value = captionManager.style.fontScale;
        expect(value).assertEqual(fontScale);
        done();
    })

    /*
   * @tc.number  CaptionConfiguration_0220
   * @tc.name    CaptionConfiguration_0220
   * @tc.desc    Test captionManager.style.fontScale function by assigning -1.
   *             captionManager.style.fontScale will be -1
   * @tc.size    SmallTest
   * @tc.type    User
   */
    it('CaptionConfiguration_0220', 0, async function (done) {
        console.info('CaptionConfiguration_0220');
        let captionManager = accessibility.getCaptionsManager();
        let fontScale = -1;
        captionManager.style.fontScale = fontScale;
        let value = captionManager.style.fontScale;
        expect(value).assertEqual(fontScale);
        done();
    })


  /*
   * @tc.number  CaptionConfiguration_0230
   * @tc.name    CaptionConfiguration_0230
   * @tc.desc    Test captionManager.style.fontColor function by assigning "#12345678".
   *             captionManager.style.fontColor will be "#12345678"
   * @tc.size    SmallTest
   * @tc.type    User
   */
	it('CaptionConfiguration_0230', 0, async function (done) {
		console.info('CaptionConfiguration_0230');
		let captionManager = accessibility.getCaptionsManager();
		let fontColor ="#12345678";
		captionManager.style.fontColor = fontColor;
		let value = captionManager.style.fontColor;
		expect(value).assertEqual(fontColor);
		done();
	})




  /*
   * @tc.number  CaptionConfiguration_0290
   * @tc.name    CaptionConfiguration_0290
   * @tc.desc    Test captionManager.style.fontEdgeType function by assigning "none".
   *             captionManager.style.fontEdgeType will be "none"
   * @tc.size    SmallTest
   * @tc.type    User
   */
	it('CaptionConfiguration_0290', 0, async function (done) {
		console.info('CaptionConfiguration_0290');
		let captionManager = accessibility.getCaptionsManager();
		let fontEdgeType = "none";
		captionManager.style.fontEdgeType = fontEdgeType;
		let value = captionManager.style.fontEdgeType;
		expect(value).assertEqual(fontEdgeType);
		done();
	})

  /*
   * @tc.number  CaptionConfiguration_0300
   * @tc.name    CaptionConfiguration_0300
   * @tc.desc    Test captionManager.style.fontEdgeType function by assigning "raised".
   *             captionManager.style.fontEdgeType will be "raised"
   * @tc.size    SmallTest
   * @tc.type    User
   */
	it('CaptionConfiguration_0300', 0, async function (done) {
		console.info('CaptionConfiguration_0300');
		let captionManager = accessibility.getCaptionsManager();
		let fontEdgeType = "raised";
		captionManager.style.fontEdgeType = fontEdgeType;
		let value = captionManager.style.fontEdgeType;
		expect(value).assertEqual(fontEdgeType);
		done();
	})

  /*
   * @tc.number  CaptionConfiguration_0310
   * @tc.name    CaptionConfiguration_0310
   * @tc.desc    Test captionManager.style.fontEdgeType function by assigning "depressed".
   *             captionManager.style.fontEdgeType will be "depressed"
   * @tc.size    SmallTest
   * @tc.type    User
   */
	it('CaptionConfiguration_0310', 0, async function (done) {
		console.info('CaptionConfiguration_0310');
		let captionManager = accessibility.getCaptionsManager();
		let fontEdgeType = "depressed";
		captionManager.style.fontEdgeType = fontEdgeType;
		let value = captionManager.style.fontEdgeType;
		expect(value).assertEqual(fontEdgeType);
		done();
	})

	/*
	* @tc.number  CaptionConfiguration_0320
	* @tc.name    CaptionConfiguration_0320
	* @tc.desc    Test captionManager.style.fontEdgeType function by assigning "uniform".
	*             captionManager.style.fontEdgeType will be "uniform"
	* @tc.size    SmallTest
	* @tc.type    User
	*/
	it('CaptionConfiguration_0320', 0, async function (done) {
		console.info('CaptionConfiguration_0320');
		let captionManager = accessibility.getCaptionsManager();
		let fontEdgeType = "uniform";
		captionManager.style.fontEdgeType = fontEdgeType;
		let value = captionManager.style.fontEdgeType;
		expect(value).assertEqual(fontEdgeType);
		done();
	})

	/*
	* @tc.number  CaptionConfiguration_0330
	* @tc.name    CaptionConfiguration_0330
	* @tc.desc    Test captionManager.style.fontEdgeType function by assigning "dropShadow".
	*             captionManager.style.fontEdgeType will be "dropShadow"
	* @tc.size    SmallTest
	* @tc.type    User
	*/
	it('CaptionConfiguration_0330', 0, async function (done) {
		console.info('CaptionConfiguration_0330');
		let captionManager = accessibility.getCaptionsManager();
		let fontEdgeType = "dropShadow";
		captionManager.style.fontEdgeType = fontEdgeType;
		let value = captionManager.style.fontEdgeType;
		expect(value).assertEqual(fontEdgeType);
		done();
	})

	/*
	* @tc.number  CaptionConfiguration_0340
	* @tc.name    CaptionConfiguration_0340
	* @tc.desc    Test captionManager.style.fontEdgeType function by assigning "".
	*             captionManager.style.fontEdgeType will be ""
	* @tc.size    SmallTest
	* @tc.type    User
	*/
	it('CaptionConfiguration_0340', 0, async function (done) {
		console.info('CaptionConfiguration_0340');
		let captionManager = accessibility.getCaptionsManager();
		let fontEdgeType = "";
		captionManager.style.fontEdgeType = fontEdgeType;
		let value = captionManager.style.fontEdgeType;
		expect(value).assertEqual(fontEdgeType);
		done();
	})



	/*
	* @tc.number  CaptionConfiguration_0360
	* @tc.name    CaptionConfiguration_0360
	* @tc.desc    Test captionManager.style.backgroundColor function by assigning "#12345678".
	*             captionManager.style.backgroundColor will be "#12345678"
	* @tc.size    SmallTest
	* @tc.type    User
	*/
	it('CaptionConfiguration_0360', 0, async function (done) {
		console.info('CaptionConfiguration_0360');
		let captionManager = accessibility.getCaptionsManager();
		let backgroundColor ="#12345678";
		captionManager.style.backgroundColor = backgroundColor;
		let value = captionManager.style.backgroundColor;
		expect(value).assertEqual(backgroundColor);
		done();
	})






	/*
	* @tc.number  CaptionConfiguration_0420
	* @tc.name    CaptionConfiguration_0420
	* @tc.desc    Test captionManager.style.windowColor function by assigning "#12345678".
	*             captionManager.style.windowColor will be "#12345678"
	* @tc.size    SmallTest
	* @tc.type    User
	*/
	it('CaptionConfiguration_0420', 0, async function (done) {
		console.info('CaptionConfiguration_0420');
		let captionManager = accessibility.getCaptionsManager();
		let windowColor ="#12345678";
		captionManager.style.windowColor = windowColor;
		let value = captionManager.style.windowColor;
		expect(value).assertEqual(windowColor);
		done();
	})

	/*
	* @tc.number  CaptionConfiguration_0480
	* @tc.name    CaptionConfiguration_0480
	* @tc.desc    Test captionManager.style function by assigning a value.
	*             Attributes of captionManager.style will be equal to that of this value
	* @tc.size    SmallTest
	* @tc.type    User
	*/
	it('CaptionConfiguration_0480', 0, async function (done) {
		console.info('CaptionConfiguration_0480');
		let captionManager = accessibility.getCaptionsManager();
		let StyleTest = {
			fontFamily: "monospacedSerif",
			fontScale: 99,
			fontColor: "#12345678",
			fontEdgeType: "uniform",
			backgroundColor: "#23456789",
			windowColor: "#34567890"
		};
		captionManager.style = StyleTest;
		let value = captionManager.style;
		expect(value.fontFamily).assertEqual(StyleTest.fontFamily);
		expect(value.fontScale).assertEqual(StyleTest.fontScale);
		expect(value.fontColor).assertEqual(StyleTest.fontColor);
		expect(value.fontEdgeType).assertEqual(StyleTest.fontEdgeType);
		expect(value.backgroundColor).assertEqual(StyleTest.backgroundColor);
		expect(value.windowColor).assertEqual(StyleTest.windowColor);
		done();
	})


})
