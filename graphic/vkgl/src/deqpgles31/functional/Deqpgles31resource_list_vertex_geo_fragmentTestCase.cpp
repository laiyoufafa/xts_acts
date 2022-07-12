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
#include "../ActsDeqpgles310023TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310023TestSuite, TestCase_022982,
        "dEQP-GLES31.functional.program_interface_query.transform_feedba",
        "ck_varying.resource_list.vertex_geo_fragment.builtin_gl_position");

static SHRINK_HWTEST_F(ActsDeqpgles310023TestSuite, TestCase_022983,
        "dEQP-GLES31.functional.program_interface_query.transform_feedback_",
        "varying.resource_list.vertex_geo_fragment.default_block_basic_type");

static SHRINK_HWTEST_F(ActsDeqpgles310023TestSuite, TestCase_022984,
        "dEQP-GLES31.functional.program_interface_query.transform_feedback_v",
        "arying.resource_list.vertex_geo_fragment.default_block_struct_member");

static SHRINK_HWTEST_F(ActsDeqpgles310023TestSuite, TestCase_022985,
        "dEQP-GLES31.functional.program_interface_query.transform_feedba",
        "ck_varying.resource_list.vertex_geo_fragment.default_block_array");

static SHRINK_HWTEST_F(ActsDeqpgles310023TestSuite, TestCase_022986,
        "dEQP-GLES31.functional.program_interface_query.transform_feedback_v",
        "arying.resource_list.vertex_geo_fragment.default_block_array_element");
