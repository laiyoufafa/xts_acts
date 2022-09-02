/*software
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
import huks from "@ohos.security.huks";
import systemTime from "@ohos.systemTime";
import { describe, it, expect } from "@ohos/hypium";

let securityLevel = stringToUint8Array("sec_level");
let challenge = stringToUint8Array("challenge_data");
let versionInfo = stringToUint8Array("version_info");
let keyAliasString = "key attest";

function attestKey(str) {
  return new Promise((resolve, reject) => {
    huks.attestKey(srcKeyAlies, HuksOptions, function (err, data) {
      try {
        if (err.code !== 0) {
          console.log(
            "test generateKey err information: " + JSON.stringify(err)
          );
          reject(err);
        } else {
          resolve(data);
        }
      } catch (e) {
        console.log("test generateKey err information: " + JSON.stringify(e));
        reject(e);
      }
    });
  });
}

function stringToUint8Array(str) {
  let arr = [];
  for (let i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
  let tmpUint8Array = new Uint8Array(arr);
  return tmpUint8Array;
}

function usePinNormal(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_PIN,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function useFaceNormal(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FACE,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function useFingerNormal(inData) {
  var propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FINGERPRINT,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  var aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function usePinAndFaceNormal(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value:
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_PIN |
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FACE,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function usePinAndFingerNormal(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value:
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_PIN |
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FINGERPRINT,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function useFaceAndFingerNormal(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value:
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FACE |
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FINGERPRINT,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function usePinFaceFingerNormal(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value:
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_PIN |
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FACE |
      huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FINGERPRINT,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NORMAL,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function usePinMulti(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_PIN,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_CUSTOM,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function useFaceMulti(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FACE,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_CUSTOM,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function useFingerMulti(inData) {
  var propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FINGERPRINT,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_CUSTOM,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
    value: 0,
  };
  var aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function usePinTime(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_PIN,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_CLEAR_PASSWORD,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NONE,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_AUTH_TIMEOUT,
    value: 10,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function useFaceTime(inData) {
  let propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FACE,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NONE,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_AUTH_TIMEOUT,
    value: 10,
  };
  let aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

function useFingerTime(inData) {
  var propertiesWithPin = new Array();
  propertiesWithPin[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES,
  };
  propertiesWithPin[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_256,
  };
  propertiesWithPin[2] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value:
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
      huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT,
  };
  propertiesWithPin[3] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_NONE,
  };
  propertiesWithPin[4] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC,
  };
  propertiesWithPin[5] = {
    tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
    value: huks.HuksUserAuthType.HUKS_USER_AUTH_TYPE_FINGERPRINT,
  };
  propertiesWithPin[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
    value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL,
  };
  propertiesWithPin[7] = {
    tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
    value: huks.HuksChallengeType.HUKS_CHALLENGE_TYPE_NONE,
  };
  propertiesWithPin[8] = {
    tag: huks.HuksTag.HUKS_TAG_AUTH_TIMEOUT,
    value: 10,
  };
  var aes256 = {
    properties: propertiesWithPin,
    inData: inData,
  };
  return aes256;
}

async function generateKeyAttest(alias) {
  let properties = new Array();
  properties[0] = {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_RSA,
  };
  properties[1] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_STORAGE_FLAG,
    value: huks.HuksKeyStorageType.HUKS_STORAGE_PERSISTENT,
  };
  properties[2] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_2048,
  };
  properties[3] = {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY,
  };
  properties[4] = {
    tag: huks.HuksTag.HUKS_TAG_DIGEST,
    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256,
  };
  properties[5] = {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_PSS,
  };
  properties[6] = {
    tag: huks.HuksTag.HUKS_TAG_KEY_GENERATE_TYPE,
    value: huks.HuksKeyGenerateType.HUKS_KEY_GENERATE_TYPE_DEFAULT,
  };
  properties[7] = {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_ECB,
  };
  let options = {
    properties: properties,
  };
  await huks.generateKey(alias, options);
}

export default function SecurityHuksFaceFingerNormalJsunit() {
  describe("SecurityHuksFaceFingerNormalJsunit", function () {
    /**
     * @tc.number HUKS_Cipher_AuthToken_2900
     * @tc.name HUKS_Cipher_AuthToken_2900.
     * @tc.desc HUKS_TAG_USER_AUTH_TYPE invalid and generate.
     */
    it("HUKS_Cipher_AuthToken_2900", 0, async function (done) {
      let alias = "HUKS_Cipher_AuthToken_2900";
      let inData = new Uint8Array(new Array());
      let option = usePinNormal(inData);
      let err = {
        tag: huks.HuksTag.HUKS_TAG_USER_AUTH_TYPE,
        value: -1,
      };
      option.properties.splice(5, 1, err);
      await huks
        .generateKey(alias, option)
        .then(async (data) => {
          console.error(`generateKey success ${JSON.stringify(data)}`);
          expect(data.errorCode == -3).assertTrue();
        })
        .catch((err) => {
          console.error(`generateKey err: " + ${JSON.stringify(err)}`);
          expect(null).assertFail();
        });
      done();
    });

    /**
     * @tc.number HUKS_Cipher_AuthToken_3000
     * @tc.name HUKS_Cipher_AuthToken_3000.
     * @tc.desc HUKS_TAG_KEY_AUTH_ACCESS_TYPE invalid and generate.
     */
    it("HUKS_Cipher_AuthToken_3000", 0, async function (done) {
      let alias = "HUKS_Cipher_AuthToken_3000";
      let inData = new Uint8Array(new Array());
      let option = usePinNormal(inData);
      let err = {
        tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
        value: -1,
      };
      option.properties.splice(6, 1, err);
      await huks
        .generateKey(alias, option)
        .then(async (data) => {
          console.error(`generateKey success ${JSON.stringify(data)}`);
          expect(data.errorCode == -4).assertTrue();
        })
        .catch((err) => {
          console.error(`generateKey err: " + ${JSON.stringify(err)}`);
          expect(null).assertFail();
        });
      done();
    });

    /**
     * @tc.number HUKS_Cipher_AuthToken_3100
     * @tc.name HUKS_Cipher_AuthToken_3100.
     * @tc.desc HUKS_TAG_CHALLENGE_TYPE invalid and generate.
     */
    it("HUKS_Cipher_AuthToken_3100", 0, async function (done) {
      let alias = "HUKS_Cipher_AuthToken_3100";
      let inData = new Uint8Array(new Array());
      let option = usePinNormal(inData);
      let err = {
        tag: huks.HuksTag.HUKS_TAG_CHALLENGE_TYPE,
        value: -1,
      };
      option.properties.splice(7, 1, err);
      await huks
        .generateKey(alias, option)
        .then(async (data) => {
          console.error(`generateKey success ${JSON.stringify(data)}`);
          expect(data.errorCode == -3).assertTrue();
        })
        .catch((err) => {
          console.error(`generateKey err: " + ${JSON.stringify(err)}`);
          expect(null).assertFail();
        });
      done();
    });

    /**
     * @tc.number HUKS_Cipher_AuthToken_3200
     * @tc.name HUKS_Cipher_AuthToken_3200.
     * @tc.desc HUKS_TAG_CHALLENGE_POS invalid and generate.
     */
    it("HUKS_Cipher_AuthToken_3200", 0, async function (done) {
      let alias = "HUKS_Cipher_AuthToken_3200";
      let inData = new Uint8Array(new Array());
      let option = usePinNormal(inData);
      let err = {
        tag: huks.HuksTag.HUKS_TAG_CHALLENGE_POS,
        value: -1,
      };
      option.properties.splice(8, 1, err);
      await huks
        .generateKey(alias, option)
        .then(async (data) => {
          console.error(`generateKey success ${JSON.stringify(data)}`);
          expect(data.errorCode == -4).assertTrue();
        })
        .catch((err) => {
          console.error(`generateKey err: " + ${JSON.stringify(err)}`);
          expect(null).assertFail();
        });
      done();
    });

    /**
     * @tc.number HUKS_Cipher_AuthToken_3300
     * @tc.name HUKS_Cipher_AuthToken_3300.
     * @tc.desc HUKS_TAG_AUTH_TIMEOUT invalid and generate.
     */
    it("HUKS_Cipher_AuthToken_3300", 0, async function (done) {
      let alias = "HUKS_Cipher_AuthToken_3300";
      let inData = new Uint8Array(new Array());
      let option = usePinTime(inData);
      let err = {
        tag: huks.HuksTag.HUKS_TAG_AUTH_TIMEOUT,
        value: -1,
      };
      option.properties.splice(8, 1, err);
      await huks
        .generateKey(alias, option)
        .then(async (data) => {
          console.error(`generateKey success ${JSON.stringify(data)}`);
          expect(data.errorCode == -3).assertTrue();
        })
        .catch((err) => {
          console.error(`generateKey err: " + ${JSON.stringify(err)}`);
          expect(null).assertFail();
        });
      done();
    });

    /**
     * @tc.number HUKS_Cipher_AuthToken_5500
     * @tc.name HUKS_Cipher_AuthToken_5500.
     * @tc.desc use pin access type is HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL.
     */
    it("HUKS_Cipher_AuthToken_5500", 0, async function (done) {
      let alias = "HUKS_Cipher_AuthToken_5500";
      let inData = new Uint8Array(new Array());
      let option = usePinNormal(inData);
      let err = {
        tag: huks.HuksTag.HUKS_TAG_KEY_AUTH_ACCESS_TYPE,
        value: huks.HuksAuthAccessType.HUKS_AUTH_ACCESS_INVALID_NEW_BIO_ENROLL,
      };
      option.properties.splice(6, 1, err);
      await huks
        .generateKey(alias, option)
        .then(async (data) => {
          console.error(`generateKey success ${JSON.stringify(data)}`);
          expect(data.errorCode == -3).assertTrue();
        })
        .catch((err) => {
          console.error(`generateKey err: " + ${JSON.stringify(err)}`);
          expect(null).assertFail();
        });
      done();
    });

    /**
     * @tc.number HUKS_Cipher_Attestation_0300
     * @tc.name HUKS_Cipher_Attestation_0300.
     * @tc.desc attest key support.
     */
    it("HUKS_Cipher_Attestation_0300", 0, async function (done) {
      let aliasString = keyAliasString;
      let aliasUint8 = stringToUint8Array(aliasString);
      let properties = new Array();
      properties[0] = {
        tag: huks.HuksTag.HUKS_TAG_ATTESTATION_ID_SEC_LEVEL_INFO,
        value: securityLevel,
      };
      properties[1] = {
        tag: huks.HuksTag.HUKS_TAG_ATTESTATION_CHALLENGE,
        value: challenge,
      };
      properties[2] = {
        tag: huks.HuksTag.HUKS_TAG_ATTESTATION_ID_VERSION_INFO,
        value: versionInfo,
      };
      properties[3] = {
        tag: huks.HuksTag.HUKS_TAG_ATTESTATION_ID_ALIAS,
        value: aliasUint8,
      };
      let options = {
        properties: properties,
      };
      await generateKeyAttest(aliasString);
      await huks
        .attestKey(aliasString, options)
        .then((data) => {
          console.log(`attest key data: ${JSON.stringify(data)}`);
          expect(data.certChains.length > 0).assertTrue();
          expect(data.errorCode == 0).assertTrue();
        })
        .catch((err) => {
          console.error(`attest key data: ${JSON.stringify(err)}`);
          expect(null).assertFail();
        });

      await attestKey(aliasString, options)
        .then((data) => {
          console.log("test generateKey data: " + JSON.stringify(data));
          expect(data.errorCode == 0).assertTrue();
        })
        .catch((err) => {
          console.error(`test init err: ${JSON.stringify(err)}`);
          expect(null).assertFail();
        });

      done();
    });
  });
}
