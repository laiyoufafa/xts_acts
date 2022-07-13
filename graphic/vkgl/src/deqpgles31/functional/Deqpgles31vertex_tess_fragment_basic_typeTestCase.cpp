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
#include "../Deqpgles31BaseFunc.h"
#include "../ActsDeqpgles310024TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310024TestSuite, TestCase_023163,
        "dEQP-GLES31.functional.program_interface_query.transform_f",
        "eedback_varying.type.vertex_tess_fragment.basic_type.float");

static SHRINK_HWTEST_F(ActsDeqpgles310024TestSuite, TestCase_023164,
        "dEQP-GLES31.functional.program_interface_query.transform_",
        "feedback_varying.type.vertex_tess_fragment.basic_type.int");

static SHRINK_HWTEST_F(ActsDeqpgles310024TestSuite, TestCase_023165,
        "dEQP-GLES31.functional.program_interface_query.transform_",
        "feedback_varying.type.vertex_tess_fragment.basic_type.uint");

static SHRINK_HWTEST_F(ActsDeqpgles310024TestSuite, TestCase_023166,
        "dEQP-GLES31.functional.program_interface_query.transform_",
        "feedback_varying.type.vertex_tess_fragment.basic_type.vec3");

static SHRINK_HWTEST_F(ActsDeqpgles310024TestSuite, TestCase_023167,
        "dEQP-GLES31.functional.program_interface_query.transform_f",
        "eedback_varying.type.vertex_tess_fragment.basic_type.ivec3");

static SHRINK_HWTEST_F(ActsDeqpgles310024TestSuite, TestCase_023168,
        "dEQP-GLES31.functional.program_interface_query.transform_f",
        "eedback_varying.type.vertex_tess_fragment.basic_type.uvec2");

static SHRINK_HWTEST_F(ActsDeqpgles310024TestSuite, TestCase_023169,
        "dEQP-GLES31.functional.program_interface_query.transform_f",
        "eedback_varying.type.vertex_tess_fragment.basic_type.mat3x4");
