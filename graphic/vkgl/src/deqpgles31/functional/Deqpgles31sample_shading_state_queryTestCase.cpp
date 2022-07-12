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
#include "../ActsDeqpgles310017TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016484,
        "dEQP-GLES31.functional.sample_shading",
        ".state_query.sample_shading_is_enabled");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016485,
        "dEQP-GLES31.functional.sample_shading.",
        "state_query.sample_shading_get_boolean");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016486,
        "dEQP-GLES31.functional.sample_shading.",
        "state_query.sample_shading_get_integer");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016487,
        "dEQP-GLES31.functional.sample_shading",
        ".state_query.sample_shading_get_float");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016488,
        "dEQP-GLES31.functional.sample_shading.s",
        "tate_query.sample_shading_get_integer64");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016489,
        "dEQP-GLES31.functional.sample_shading.state",
        "_query.min_sample_shading_value_get_boolean");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016490,
        "dEQP-GLES31.functional.sample_shading.state",
        "_query.min_sample_shading_value_get_integer");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016491,
        "dEQP-GLES31.functional.sample_shading.stat",
        "e_query.min_sample_shading_value_get_float");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016492,
        "dEQP-GLES31.functional.sample_shading.state_",
        "query.min_sample_shading_value_get_integer64");

static SHRINK_HWTEST_F(ActsDeqpgles310017TestSuite, TestCase_016493,
        "dEQP-GLES31.functional.sample_shading.sta",
        "te_query.min_sample_shading_value_clamping");
