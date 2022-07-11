/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import usb from '@ohos.usb';
import CheckEmptyUtils from './CheckEmptyUtils.js';
import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from 'deccjsunit/index'


/* usb core functions test */
describe('UsbCoreJsFunctionsTestEx', function () {

  var gDeviceList
  var portCurrentMode

  beforeAll(function () {
    console.log('*************Usb Unit UsbCoreJsFunctionsTestEx Begin*************');
    var Version = usb.getVersion()
    console.info('begin test getversion :' + Version)
    // version > 17  host currentMode = 2 device currentMode = 1
    var usbPortList = usb.getPorts()
    gDeviceList = usb.getDevices();
    if (usbPortList.length > 0) {
      if (gDeviceList.length > 0) {
        if (usbPortList[0].status.currentMode == 1) {
          usb.setPortRoles(usbPortList[0].id, usb.SOURCE, usb.HOST).then(data => {
            portCurrentMode = 2
            console.info('usb case setPortRolesEx return: ' + data);
          }).catch(error => {
            console.info('usb case setPortRolesEx error : ' + error);
          });
          console.log('*************Usb Unit Begin switch to host*************');
        }
      } else {
        portCurrentMode = 1
      }
    }
  })
  beforeEach(function () {
    console.info('beforeEach: *************Usb Unit Test CaseEx*************');
  })
  afterEach(function () {
    console.info('afterEach: *************Usb Unit Test CaseEx*************');
  })
  afterAll(function () {
    console.log('*************Usb Unit UsbCoreJsFunctionsTestEx End*************');
  })


  /**
   * @tc.number    : SUB_USB_JS_0100
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 错误参数 devAddress 打开设备
   */
  it('SUB_USB_JS_0100', 0, function () {
    console.info('usb SUB_USB_JS_0100 begin');
    console.info('*****SUB_USB_JS_0100 portCurrentMode**** ret : ' + portCurrentMode)
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb JS_0100 requestRight error:' + error);
      });
      console.info('usb JS_0100 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.devAddress = 2 + 10000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) +
      ' devAddress ' + device.devAddress);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertTrue();

    console.info('usb SUB_USB_JS_0100 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0110
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 busNum错误参数 打开设备
   */
  it('SUB_USB_JS_0110', 0, function () {
    console.info('usb SUB_USB_JS_0110 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb JS_0110 requestRight error:' + error);
      });
      console.info('usb JS_0110 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.busNum = 2 + 1000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) +
      ' busNum ' + device.busNum);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertTrue();
    console.info('usb SUB_USB_JS_0110 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0120
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 serial错误参数 打开设备
   */
  it('SUB_USB_JS_0120', 0, function () {
    console.info('usb SUB_USB_JS_0120 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb JS_0120 requestRight error:' + error);
      });
      console.info('usb JS_0120 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.serial = 'asdfsd'
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) +
      ' serial ' + device.serial);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0120 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0130
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 name错误参数 打开设备
   */
  it('SUB_USB_JS_0130', 0, function () {
    console.info('usb SUB_USB_JS_0130 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb JS_0130 requestRight error:' + error);
      });
      console.info('usb JS_0130 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.name = 2 + 10000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) + ' name ' + device.name);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0130 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0140
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 manufacturerName错误参数 打开设备
   */
  it('SUB_USB_JS_0140', 0, function () {
    console.info('usb connect_device_06 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb JS_0140 requestRight error:' + error);
      });
      console.info('usb JS_0140 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.manufacturerName = 2 + 10000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) +
      ' manufacturerName ' + device.manufacturerName);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0140 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0150
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 productName错误参数 打开设备
   */
  it('SUB_USB_JS_0150', 0, function () {
    console.info('usb SUB_USB_JS_0150 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb SUB_USB_JS_0150 requestRight error:' + error);
      });
      console.info('usb SUB_USB_JS_0150 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.productName = 'sdfsdfe'
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) +
      ' productName ' + device.productName);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0150 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0160
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 version错误参数 打开设备
   */
  it('SUB_USB_JS_0160', 0, function () {
    console.info('usb connect_device_08 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb SUB_USB_JS_0160 requestRight error:' + error);
      });
      console.info('usb SUB_USB_JS_0160 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.version = 'gwefsdf'
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) +
      ' version ' + device.version);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0160 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0170
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 vendorId错误参数 打开设备
   */
  it('SUB_USB_JS_0170', 0, function () {
    console.info('usb connect_device_09 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb SUB_USB_JS_0170 requestRight error:' + error);
      });
      console.info('usb SUB_USB_JS_0170 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.vendorId = 2 + 10000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) +
      ' vendorId ' + device.vendorId);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0170 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0180
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 productId错误参数 打开设备
   */
  it('SUB_USB_JS_0180', 0, function () {
    console.info('usb connect_device_10 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb SUB_USB_JS_0180 requestRight error:' + error);
      });
      console.info('usb SUB_USB_JS_0180 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.productId = 2 + 10000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) +
      ' productId ' + device.productId);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0180 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0190
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 clazz错误参数 打开设备
   */
  it('SUB_USB_JS_0190', 0, function () {
    console.info('usb connect_device_11 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb SUB_USB_JS_0190 requestRight error:' + error);
      });
      console.info('usb SUB_USB_JS_0190 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.clazz = 2 + 10000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) + ' clazz ' + device.clazz);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0190 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0200
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 subclass错误参数 打开设备
   */
  it('SUB_USB_JS_0200', 0, function () {
    console.info('usb connect_device_12 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb SUB_USB_JS_0200 requestRight error:' + error);
      });
      console.info('usb SUB_USB_JS_0200 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.subclass = 2 + 10000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) + ' subclass ' + device.subclass);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0200 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0210
   * @tc.name      : connectDevice
   * @tc.desc      : 反向测试 protocol错误参数 打开设备
   */
  it('SUB_USB_JS_0210', 0, function () {
    console.info('usb connect_device_13 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }
    var isRight = usb.hasRight(gDeviceList[0].name);
    if (!isRight) {
      usb.requestRight(gDeviceList[0].name).then(hasRight => {
      }).catch(error => {
        console.info('usb SUB_USB_JS_0210 requestRight error:' + error);
      });
      console.info('usb SUB_USB_JS_0210 requestRight end:');
      CheckEmptyUtils.sleep(3000)
    }

    var device = JSON.parse(JSON.stringify(gDeviceList[0]));
    device.protocol = 2 + 10000
    try {
      var usbDevicePipe = usb.connectDevice(device)
    } catch (err) {
      expect(true).assertTrue();
      console.info('usb connectDevice fail：' + err);
    }
    console.info('usb case connectDevice ret: ' + JSON.stringify(usbDevicePipe) + ' protocol ' + device.protocol);
    expect(CheckEmptyUtils.isEmpty(usbDevicePipe)).assertFalse();
    var isPipClose = usb.closePipe(usbDevicePipe);
    console.info('usb case closePipe ret: ' + isPipClose);
    expect(isPipClose).assertEqual(0);
    console.info('usb SUB_USB_JS_0210 :  PASS');
  })

  /**
   * @tc.number    : SUB_USB_JS_0720
   * @tc.name      : hasRight
   * @tc.desc      : 反向测试 给错误设备名字
   */
  it('SUB_USB_JS_0720', 0, function () {
    console.info('usb SUB_USB_JS_0720 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }

    for (var i = 0; i < gDeviceList.length; i++) {
      var deviceName = gDeviceList[i].name
      deviceName = deviceName + '$#'
      var hasRight = usb.hasRight(deviceName)
      console.info('usb has_right ret :' + hasRight);
      expect(hasRight == false).assertTrue();
    }

    console.info('usb SUB_USB_JS_0720 :  PASS');
    expect(true).assertTrue();
  })

  /**
   * @tc.number    : SUB_USB_JS_0730
   * @tc.name      : hasRight
   * @tc.desc      : 反向测试 给设备名字为字母
   */
  it('SUB_USB_JS_0730', 0, function () {
    console.info('usb SUB_USB_JS_0730 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }

    for (var i = 0; i < gDeviceList.length; i++) {
      var deviceName = gDeviceList[i].name
      deviceName = deviceName + 'abcdg'
      var hasRight = usb.hasRight(deviceName)
      console.info('usb hasRight ret :' + hasRight);
      expect(hasRight == false).assertTrue();
    }

    console.info('usb SUB_USB_JS_0730 :  PASS');
    expect(true).assertTrue();
  })

  /**
   * @tc.number    : SUB_USB_JS_0690
   * @tc.name      : requestRight
   * @tc.desc      : 反向测试 错误设备名字 请求权限
   */
  it('SUB_USB_JS_0690', 0, function () {
    console.info('usb SUB_USB_JS_0690 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }

    for (var i = 0; i < gDeviceList.length; i++) {
      var diviceName = gDeviceList[i].name
      diviceName = diviceName + '@#'
      usb.requestRight(diviceName).then(hasRight => {
        console.info('usb request_right ret :' + hasRight);
        expect(hasRight).assertFalse();
        console.info('usb SUB_USB_JS_0690 :  PASS');
      }).catch(error => {
        expect(error).assertFalse();
        console.info('usb SUB_USB_JS_0690 error: ' + error);
      });
    }
  })

  /**
   * @tc.number    : SUB_USB_JS_0700
   * @tc.name      : requestRight
   * @tc.desc      : 反向测试 设备名字为数字 请求权限
   */
  it('SUB_USB_JS_0700', 0, function () {
    console.info('usb SUB_USB_JS_0700 begin');
    if (portCurrentMode == 1) {
      console.info('usb case get_device port is device')
      expect(false).assertFalse();
      return
    }
    if (gDeviceList.length == 0) {
      console.info('usb case get_device_list is null')
      expect(false).assertTrue();
      return
    }

    for (var i = 0; i < gDeviceList.length; i++) {
      var diviceName = gDeviceList[i].name
      diviceName = diviceName + '123'
      usb.requestRight(diviceName).then(hasRight => {
        console.info('usb request_right ret :' + hasRight);
        expect(hasRight).assertFalse();
        console.info('usb SUB_USB_JS_0700 :  PASS');
      }).catch(error => {
        expect(error).assertFalse();
        console.info('usb SUB_USB_JS_0700 error: ' + error);
      });
    }
  })
})
