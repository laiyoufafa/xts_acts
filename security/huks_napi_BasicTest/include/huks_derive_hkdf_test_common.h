/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef HUKS_DERIVE_HKDF_TEST_COMMON_H
#define HUKS_DERIVE_HKDF_TEST_COMMON_H

#include <string>
#include "huks_three_stage_test_common.h"
namespace Unittest::HkdfDerive {
static const std::string g_inData = "Hks_HKDF_Derive_Test_00000000000000000000000000000000000000000000000000000000000"
                                    "00000000000000000000000000000000000000000000000000000000000000000000000000000000"
                                    "0000000000000000000000000000000000000000000000000000000000000000000000000_string";
static const uint32_t COMMON_SIZE = 2048;
static const uint32_t DERIVE_KEY_SIZE_32 = 32;
static const uint32_t DERIVE_KEY_SIZE_48 = 48;
static const uint32_t DERIVE_KEY_SIZE_64 = 64;

OH_Huks_Result HksHkdfDeriveTestNormalCase(const struct OH_Huks_Blob keyAlias, const struct OH_Huks_ParamSet *genParamSet,
    struct OH_Huks_ParamSet *DeriveParamSet, struct OH_Huks_ParamSet *DeriveFinalParamsSet);
OH_Huks_Result HksHkdfDeriveTestCmpCase(const struct OH_Huks_Blob keyAlias, const struct OH_Huks_ParamSet *genParamSet,
    struct OH_Huks_ParamSet *DeriveParamSet, struct OH_Huks_ParamSet *DeriveFinalParamsSet);
}
#endif // HUKS_DERIVE_HKDF_TEST_COMMON_H