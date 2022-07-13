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
#include "../Deqpgles2BaseFunc.h"
#include "../ActsDeqpgles20006TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005748,
        "dEQP-GLES2.functional.shaders.operator.angle_",
        "and_trigonometry.degrees.mediump_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005749,
        "dEQP-GLES2.functional.shaders.operator.angle_a",
        "nd_trigonometry.degrees.mediump_float_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005750,
        "dEQP-GLES2.functional.shaders.operator.angle",
        "_and_trigonometry.degrees.highp_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005751,
        "dEQP-GLES2.functional.shaders.operator.angle_",
        "and_trigonometry.degrees.highp_float_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005752,
        "dEQP-GLES2.functional.shaders.operator.angle",
        "_and_trigonometry.degrees.mediump_vec2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005753,
        "dEQP-GLES2.functional.shaders.operator.angle_",
        "and_trigonometry.degrees.mediump_vec2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005754,
        "dEQP-GLES2.functional.shaders.operator.angl",
        "e_and_trigonometry.degrees.highp_vec2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005755,
        "dEQP-GLES2.functional.shaders.operator.angle",
        "_and_trigonometry.degrees.highp_vec2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005756,
        "dEQP-GLES2.functional.shaders.operator.angle",
        "_and_trigonometry.degrees.mediump_vec3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005757,
        "dEQP-GLES2.functional.shaders.operator.angle_",
        "and_trigonometry.degrees.mediump_vec3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005758,
        "dEQP-GLES2.functional.shaders.operator.angl",
        "e_and_trigonometry.degrees.highp_vec3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005759,
        "dEQP-GLES2.functional.shaders.operator.angle",
        "_and_trigonometry.degrees.highp_vec3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005760,
        "dEQP-GLES2.functional.shaders.operator.angle",
        "_and_trigonometry.degrees.mediump_vec4_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005761,
        "dEQP-GLES2.functional.shaders.operator.angle_",
        "and_trigonometry.degrees.mediump_vec4_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005762,
        "dEQP-GLES2.functional.shaders.operator.angl",
        "e_and_trigonometry.degrees.highp_vec4_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles20006TestSuite, TestCase_005763,
        "dEQP-GLES2.functional.shaders.operator.angle",
        "_and_trigonometry.degrees.highp_vec4_fragment");
