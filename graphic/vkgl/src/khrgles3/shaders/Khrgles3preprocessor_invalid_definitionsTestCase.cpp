/*
 * Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

#include <climits>
#include <gtest/gtest.h>
#include "../Khrgles3BaseFunc.h"
#include "../ActsKhrgles30001TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsKhrgles30001TestSuite, TestCase_000908,
        "KHR-GLES3.shaders.preprocessor.invalid_",
        "definitions.define_non_identifier_vertex");

static SHRINK_HWTEST_F(ActsKhrgles30001TestSuite, TestCase_000909,
        "KHR-GLES3.shaders.preprocessor.invalid_d",
        "efinitions.define_non_identifier_fragment");

static SHRINK_HWTEST_F(ActsKhrgles30001TestSuite, TestCase_000910,
        "KHR-GLES3.shaders.preprocessor.invalid_d",
        "efinitions.undef_non_identifier_1_vertex");

static SHRINK_HWTEST_F(ActsKhrgles30001TestSuite, TestCase_000911,
        "KHR-GLES3.shaders.preprocessor.invalid_de",
        "finitions.undef_non_identifier_1_fragment");

static SHRINK_HWTEST_F(ActsKhrgles30001TestSuite, TestCase_000912,
        "KHR-GLES3.shaders.preprocessor.invalid_d",
        "efinitions.undef_non_identifier_2_vertex");

static SHRINK_HWTEST_F(ActsKhrgles30001TestSuite, TestCase_000913,
        "KHR-GLES3.shaders.preprocessor.invalid_de",
        "finitions.undef_non_identifier_2_fragment");
