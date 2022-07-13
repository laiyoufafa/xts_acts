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
#include "../ActsDeqpgles310022TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310022TestSuite, TestCase_021685,
        "dEQP-GLES31.functional.program_interface_query.unifo",
        "rm_block.referenced_by.separable_geometry.named_block");

static SHRINK_HWTEST_F(ActsDeqpgles310022TestSuite, TestCase_021686,
        "dEQP-GLES31.functional.program_interface_query.unifor",
        "m_block.referenced_by.separable_geometry.unnamed_block");

static SHRINK_HWTEST_F(ActsDeqpgles310022TestSuite, TestCase_021687,
        "dEQP-GLES31.functional.program_interface_query.unifo",
        "rm_block.referenced_by.separable_geometry.block_array");

static SHRINK_HWTEST_F(ActsDeqpgles310022TestSuite, TestCase_024740,
        "dEQP-GLES31.functional.program_interface_query.shader_st",
        "orage_block.referenced_by.separable_geometry.named_block");

static SHRINK_HWTEST_F(ActsDeqpgles310022TestSuite, TestCase_024741,
        "dEQP-GLES31.functional.program_interface_query.shader_sto",
        "rage_block.referenced_by.separable_geometry.unnamed_block");

static SHRINK_HWTEST_F(ActsDeqpgles310022TestSuite, TestCase_024742,
        "dEQP-GLES31.functional.program_interface_query.shader_st",
        "orage_block.referenced_by.separable_geometry.block_array");
