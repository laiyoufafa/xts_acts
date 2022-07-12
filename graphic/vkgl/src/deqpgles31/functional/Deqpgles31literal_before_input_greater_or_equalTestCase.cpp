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
#include "../ActsDeqpgles310006TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_005561,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es31.compar",
        "isons.literal_before_input.greater_or_equal.int_to_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_005562,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es31.compari",
        "sons.literal_before_input.greater_or_equal.int_to_float_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_005563,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es31.compa",
        "risons.literal_before_input.greater_or_equal.int_to_uint_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_005564,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es31.compar",
        "isons.literal_before_input.greater_or_equal.int_to_uint_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_005565,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es31.compar",
        "isons.literal_before_input.greater_or_equal.uint_to_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_005566,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es31.compari",
        "sons.literal_before_input.greater_or_equal.uint_to_float_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_006595,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es32.compar",
        "isons.literal_before_input.greater_or_equal.int_to_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_006596,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es32.compari",
        "sons.literal_before_input.greater_or_equal.int_to_float_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_006597,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es32.compa",
        "risons.literal_before_input.greater_or_equal.int_to_uint_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_006598,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es32.compar",
        "isons.literal_before_input.greater_or_equal.int_to_uint_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_006599,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es32.compar",
        "isons.literal_before_input.greater_or_equal.uint_to_float_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310006TestSuite, TestCase_006600,
        "dEQP-GLES31.functional.shaders.implicit_conversions.es32.compari",
        "sons.literal_before_input.greater_or_equal.uint_to_float_fragment");
