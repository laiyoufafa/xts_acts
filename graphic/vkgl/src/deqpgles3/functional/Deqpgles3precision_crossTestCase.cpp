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

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019344,
        "dEQP-GLES3.functional.shaders.builtin",
        "_functions.precision.cross.lowp_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019345,
        "dEQP-GLES3.functional.shaders.builtin_",
        "functions.precision.cross.lowp_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019346,
        "dEQP-GLES3.functional.shaders.builtin_f",
        "unctions.precision.cross.mediump_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019347,
        "dEQP-GLES3.functional.shaders.builtin_fu",
        "nctions.precision.cross.mediump_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019348,
        "dEQP-GLES3.functional.shaders.builtin_",
        "functions.precision.cross.highp_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30020TestSuite, TestCase_019349,
        "dEQP-GLES3.functional.shaders.builtin_f",
        "unctions.precision.cross.highp_fragment");
