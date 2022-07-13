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
#include "../ActsDeqpgles310008TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310008TestSuite, TestCase_007712,
        "dEQP-GLES31.functional.draw_indirect.draw_",
        "arrays_indirect.triangles.single_attribute");

static SHRINK_HWTEST_F(ActsDeqpgles310008TestSuite, TestCase_007713,
        "dEQP-GLES31.functional.draw_indirect.draw_a",
        "rrays_indirect.triangles.multiple_attributes");

static SHRINK_HWTEST_F(ActsDeqpgles310008TestSuite, TestCase_007714,
        "dEQP-GLES31.functional.draw_indirect.draw_ar",
        "rays_indirect.triangles.instanced_attributes");

static SHRINK_HWTEST_F(ActsDeqpgles310008TestSuite, TestCase_007715,
        "dEQP-GLES31.functional.draw_indirect.draw_",
        "arrays_indirect.triangles.default_attribute");
