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
#include "../ActsDeqpgles310012TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011985,
        "dEQP-GLES31.functional.atomic_counter.",
        "get_branch.1_counter_1_call_10_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011986,
        "dEQP-GLES31.functional.atomic_counter.g",
        "et_branch.1_counter_1_call_5000_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011987,
        "dEQP-GLES31.functional.atomic_counter",
        ".get_branch.1_counter_5_calls_1_thread");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011988,
        "dEQP-GLES31.functional.atomic_counter.",
        "get_branch.1_counter_5_calls_10_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011989,
        "dEQP-GLES31.functional.atomic_counter.",
        "get_branch.1_counter_100_calls_1_thread");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011990,
        "dEQP-GLES31.functional.atomic_counter.g",
        "et_branch.1_counter_100_calls_10_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011991,
        "dEQP-GLES31.functional.atomic_counter.",
        "get_branch.4_counters_1_call_10_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011992,
        "dEQP-GLES31.functional.atomic_counter.",
        "get_branch.4_counters_5_calls_1_thread");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011993,
        "dEQP-GLES31.functional.atomic_counter.g",
        "et_branch.4_counters_5_calls_10_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011994,
        "dEQP-GLES31.functional.atomic_counter.g",
        "et_branch.4_counters_100_calls_1_thread");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011995,
        "dEQP-GLES31.functional.atomic_counter.ge",
        "t_branch.4_counters_100_calls_10_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011996,
        "dEQP-GLES31.functional.atomic_counter.",
        "get_branch.8_counters_1_call_10_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011997,
        "dEQP-GLES31.functional.atomic_counter.",
        "get_branch.8_counters_5_calls_1_thread");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011998,
        "dEQP-GLES31.functional.atomic_counter.g",
        "et_branch.8_counters_5_calls_10_threads");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_011999,
        "dEQP-GLES31.functional.atomic_counter.g",
        "et_branch.8_counters_100_calls_1_thread");

static SHRINK_HWTEST_F(ActsDeqpgles310012TestSuite, TestCase_012000,
        "dEQP-GLES31.functional.atomic_counter.ge",
        "t_branch.8_counters_100_calls_10_threads");
