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
#include "../Deqpgles3BaseFunc.h"
#include "../ActsDeqpgles30014TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013390,
        "dEQP-GLES3.functional.shaders.operator.",
        "float_compare.lessThan.lowp_vec2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013391,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.lowp_vec2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013392,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.mediump_vec2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013393,
        "dEQP-GLES3.functional.shaders.operator.fl",
        "oat_compare.lessThan.mediump_vec2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013394,
        "dEQP-GLES3.functional.shaders.operator.",
        "float_compare.lessThan.highp_vec2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013395,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.highp_vec2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013396,
        "dEQP-GLES3.functional.shaders.operator.",
        "float_compare.lessThan.lowp_vec3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013397,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.lowp_vec3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013398,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.mediump_vec3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013399,
        "dEQP-GLES3.functional.shaders.operator.fl",
        "oat_compare.lessThan.mediump_vec3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013400,
        "dEQP-GLES3.functional.shaders.operator.",
        "float_compare.lessThan.highp_vec3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013401,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.highp_vec3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013402,
        "dEQP-GLES3.functional.shaders.operator.",
        "float_compare.lessThan.lowp_vec4_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013403,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.lowp_vec4_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013404,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.mediump_vec4_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013405,
        "dEQP-GLES3.functional.shaders.operator.fl",
        "oat_compare.lessThan.mediump_vec4_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013406,
        "dEQP-GLES3.functional.shaders.operator.",
        "float_compare.lessThan.highp_vec4_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30014TestSuite, TestCase_013407,
        "dEQP-GLES3.functional.shaders.operator.f",
        "loat_compare.lessThan.highp_vec4_fragment");
