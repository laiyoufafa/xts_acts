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
#include "../ActsDeqpgles30040TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039798,
        "dEQP-GLES3.functional.rasterizatio",
        "n.interpolation.projected.triangles");

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039799,
        "dEQP-GLES3.functional.rasterization.i",
        "nterpolation.projected.triangle_strip");

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039800,
        "dEQP-GLES3.functional.rasterization.",
        "interpolation.projected.triangle_fan");

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039801,
        "dEQP-GLES3.functional.rasterizat",
        "ion.interpolation.projected.lines");

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039802,
        "dEQP-GLES3.functional.rasterization",
        ".interpolation.projected.line_strip");

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039803,
        "dEQP-GLES3.functional.rasterizatio",
        "n.interpolation.projected.line_loop");

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039804,
        "dEQP-GLES3.functional.rasterization",
        ".interpolation.projected.lines_wide");

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039805,
        "dEQP-GLES3.functional.rasterization.i",
        "nterpolation.projected.line_strip_wide");

static SHRINK_HWTEST_F(ActsDeqpgles30040TestSuite, TestCase_039806,
        "dEQP-GLES3.functional.rasterization.i",
        "nterpolation.projected.line_loop_wide");
