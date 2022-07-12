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
#include "../ActsDeqpgles30020TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019486,
        "dEQP-GLES3.functional.shaders.builtin_funct",
        "ions.precision.outerproduct.lowp_vertex.mat2");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019487,
        "dEQP-GLES3.functional.shaders.builtin_functi",
        "ons.precision.outerproduct.lowp_vertex.mat2x3");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019488,
        "dEQP-GLES3.functional.shaders.builtin_functi",
        "ons.precision.outerproduct.lowp_vertex.mat2x4");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019489,
        "dEQP-GLES3.functional.shaders.builtin_functi",
        "ons.precision.outerproduct.lowp_vertex.mat3x2");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019490,
        "dEQP-GLES3.functional.shaders.builtin_funct",
        "ions.precision.outerproduct.lowp_vertex.mat3");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019491,
        "dEQP-GLES3.functional.shaders.builtin_functi",
        "ons.precision.outerproduct.lowp_vertex.mat3x4");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019492,
        "dEQP-GLES3.functional.shaders.builtin_functi",
        "ons.precision.outerproduct.lowp_vertex.mat4x2");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019493,
        "dEQP-GLES3.functional.shaders.builtin_functi",
        "ons.precision.outerproduct.lowp_vertex.mat4x3");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019494,
        "dEQP-GLES3.functional.shaders.builtin_funct",
        "ions.precision.outerproduct.lowp_vertex.mat4");
