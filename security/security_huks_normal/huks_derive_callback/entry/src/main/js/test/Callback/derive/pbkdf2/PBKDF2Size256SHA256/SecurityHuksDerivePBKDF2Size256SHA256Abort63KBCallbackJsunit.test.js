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

import { describe, it, beforeEach } from 'deccjsunit/index';
import * as Data from '../../../../../../../../../../utils/data.json';
import { stringToUint8Array } from '../../../../../../../../../../utils/param/publicFunc.js';
import { HksTag } from '../../../../../../../../../../utils/param/publicParam.js';
import { publicDeriveFunc } from '../../../../../../../../../../utils/param/derive/publicDeriveCallbackFunc.js';
import { HuksDerivePBDKF2 } from '../../../../../../../../../../utils/param/derive/publicDeriveParam.js';

let srcData63 = Data.Date63KB;
let srcData63Kb = stringToUint8Array(srcData63);
let HuksOptions63kb = {};

describe('SecurityHuksDerivePBKDF2CallbackJsunit', function () {
  beforeEach(function () {
    HuksOptions63kb = {
      properties: new Array(
        HuksDerivePBDKF2.HuksKeyAlgAES,
        HuksDerivePBDKF2.HuksKeyPurposePBKDF2,
        HuksDerivePBDKF2.HuksTagPBKDF2DigestSHA256,
        HuksDerivePBDKF2.HuksKeyPBKDF2Size256
      ),
      inData: srcData63Kb,
    };
    console.info('test beforeEach called');
  });
  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive001',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_001';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive002',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_002';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive003',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_003';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGPKCS7,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECBC
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive004',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_004';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGPKCS7,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive005',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_005';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECCM
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive006',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_006';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEGCM
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive007',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_007';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECTR
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive008',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_008';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeDERIVE,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA256,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive009',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_009';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeDERIVE,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA384,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive010',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_010';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeDERIVE,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA512,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive011',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_011';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECBC
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive012',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_012';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive013',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_013';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGPKCS7,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECBC
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive014',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_014';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGPKCS7,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive015',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_015';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECCM
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive016',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_016';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEGCM
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive017',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_017';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECTR
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive018',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_018';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeDERIVE,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA256,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive019',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_019';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA384,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive020',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_020';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE128,
          HuksDerivePBDKF2.HuksKeyPurposeDERIVE,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA512,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive021',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_021';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECBC
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive022',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_022';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive023',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_023';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGPKCS7,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECBC
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive024',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_024';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGPKCS7,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive025',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_025';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECCM
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive026',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_026';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEGCM
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive027',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_027';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeENCRYPTDECRYPT,
          HuksDerivePBDKF2.HuksKeyDIGESTNONE,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODECTR
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive028',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_028';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeDERIVE,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA256,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive029',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_029';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeDERIVE,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA512,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive030',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_030';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMHMAC,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeMAC,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA1,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive031',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_031';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMHMAC,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeMAC,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA224,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive032',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_032';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMHMAC,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeMAC,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA256,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive033',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_033';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMHMAC,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeMAC,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA384,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive034',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_034';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMHMAC,
          HuksDerivePBDKF2.HuksKeySIZE256,
          HuksDerivePBDKF2.HuksKeyPurposeMAC,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA512,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );

  it(
    'testDerivePBKDF2Size256SHA256Abort63KBDerive035',
    0,
    async function (done) {
      const srcKeyAliesFrist =
        'testDerivePBKDF2Size256SHA256Abort63KBDeriveKeyAlias_01_035';
      let HuksOptionsFinish = {
        properties: new Array(
          HuksDerivePBDKF2.HuksKeySTORAGE,
          HuksDerivePBDKF2.HuksKeyISKEYALIAS,
          HuksDerivePBDKF2.HuksKeyALGORITHMAES,
          HuksDerivePBDKF2.HuksKeySIZE192,
          HuksDerivePBDKF2.HuksKeyPurposeDERIVE,
          HuksDerivePBDKF2.HuksKeyDIGESTSHA384,
          {
            tag: HksTag.HKS_TAG_KEY_ALIAS,
            value: stringToUint8Array(srcKeyAliesFrist),
          },
          HuksDerivePBDKF2.HuksKeyPADDINGNONE,
          HuksDerivePBDKF2.HuksKeyBLOCKMODEECB
        ),
        inData: srcData63Kb,
      };
      await publicDeriveFunc(
        srcKeyAliesFrist,
        HuksOptions63kb,
        HuksOptionsFinish,
        'abort'
      );
      done();
    }
  );
});
