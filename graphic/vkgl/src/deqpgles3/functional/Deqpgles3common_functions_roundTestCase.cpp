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
#include "../ActsDeqpgles30013TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012646,
        "dEQP-GLES3.functional.shaders.operator.",
        "common_functions.round.lowp_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012647,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.lowp_float_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012648,
        "dEQP-GLES3.functional.shaders.operator.co",
        "mmon_functions.round.mediump_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012649,
        "dEQP-GLES3.functional.shaders.operator.com",
        "mon_functions.round.mediump_float_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012650,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.highp_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012651,
        "dEQP-GLES3.functional.shaders.operator.co",
        "mmon_functions.round.highp_float_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012652,
        "dEQP-GLES3.functional.shaders.operator.",
        "common_functions.round.lowp_vec2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012653,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.lowp_vec2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012654,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.mediump_vec2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012655,
        "dEQP-GLES3.functional.shaders.operator.co",
        "mmon_functions.round.mediump_vec2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012656,
        "dEQP-GLES3.functional.shaders.operator.",
        "common_functions.round.highp_vec2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012657,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.highp_vec2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012658,
        "dEQP-GLES3.functional.shaders.operator.",
        "common_functions.round.lowp_vec3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012659,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.lowp_vec3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012660,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.mediump_vec3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012661,
        "dEQP-GLES3.functional.shaders.operator.co",
        "mmon_functions.round.mediump_vec3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012662,
        "dEQP-GLES3.functional.shaders.operator.",
        "common_functions.round.highp_vec3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012663,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.highp_vec3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012664,
        "dEQP-GLES3.functional.shaders.operator.",
        "common_functions.round.lowp_vec4_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012665,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.lowp_vec4_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012666,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.mediump_vec4_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012667,
        "dEQP-GLES3.functional.shaders.operator.co",
        "mmon_functions.round.mediump_vec4_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012668,
        "dEQP-GLES3.functional.shaders.operator.",
        "common_functions.round.highp_vec4_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30013TestSuite, TestCase_012669,
        "dEQP-GLES3.functional.shaders.operator.c",
        "ommon_functions.round.highp_vec4_fragment");
