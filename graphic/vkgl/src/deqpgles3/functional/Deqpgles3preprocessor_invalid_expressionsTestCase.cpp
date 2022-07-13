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
#include "../ActsDeqpgles30002TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001226,
        "dEQP-GLES3.functional.shaders.preprocessor.i",
        "nvalid_expressions.invalid_unary_expr_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001227,
        "dEQP-GLES3.functional.shaders.preprocessor.in",
        "valid_expressions.invalid_unary_expr_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001228,
        "dEQP-GLES3.functional.shaders.preprocessor.i",
        "nvalid_expressions.invalid_binary_expr_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001229,
        "dEQP-GLES3.functional.shaders.preprocessor.in",
        "valid_expressions.invalid_binary_expr_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001230,
        "dEQP-GLES3.functional.shaders.preprocesso",
        "r.invalid_expressions.missing_expr_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001231,
        "dEQP-GLES3.functional.shaders.preprocessor",
        ".invalid_expressions.missing_expr_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001232,
        "dEQP-GLES3.functional.shaders.preprocessor",
        ".invalid_expressions.invalid_expr_1_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001233,
        "dEQP-GLES3.functional.shaders.preprocessor.",
        "invalid_expressions.invalid_expr_1_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001234,
        "dEQP-GLES3.functional.shaders.preprocessor",
        ".invalid_expressions.invalid_expr_2_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001235,
        "dEQP-GLES3.functional.shaders.preprocessor.",
        "invalid_expressions.invalid_expr_2_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001236,
        "dEQP-GLES3.functional.shaders.preprocessor",
        ".invalid_expressions.invalid_expr_3_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001237,
        "dEQP-GLES3.functional.shaders.preprocessor.",
        "invalid_expressions.invalid_expr_3_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001238,
        "dEQP-GLES3.functional.shaders.preprocessor.in",
        "valid_expressions.unopened_parenthesis_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001239,
        "dEQP-GLES3.functional.shaders.preprocessor.inv",
        "alid_expressions.unopened_parenthesis_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001240,
        "dEQP-GLES3.functional.shaders.preprocessor.in",
        "valid_expressions.unclosed_parenthesis_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles30002TestSuite, TestCase_001241,
        "dEQP-GLES3.functional.shaders.preprocessor.inv",
        "alid_expressions.unclosed_parenthesis_fragment");
