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
#include "../ActsDeqpgles310004TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003207,
        "dEQP-GLES31.functional.shaders.multisample_interpolatio",
        "n.interpolate_at_centroid.negative.vec4_identity_swizzle");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003208,
        "dEQP-GLES31.functional.shaders.multisample_interpolat",
        "ion.interpolate_at_centroid.negative.vec4_crop_swizzle");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003209,
        "dEQP-GLES31.functional.shaders.multisample_interpolati",
        "on.interpolate_at_centroid.negative.vec4_mixed_swizzle");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003210,
        "dEQP-GLES31.functional.shaders.multisample_interpolat",
        "ion.interpolate_at_centroid.negative.interpolate_ivec4");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003211,
        "dEQP-GLES31.functional.shaders.multisample_interpolat",
        "ion.interpolate_at_centroid.negative.interpolate_uvec4");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003212,
        "dEQP-GLES31.functional.shaders.multisample_interpolat",
        "ion.interpolate_at_centroid.negative.interpolate_array");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003213,
        "dEQP-GLES31.functional.shaders.multisample_interpolati",
        "on.interpolate_at_centroid.negative.interpolate_struct");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003214,
        "dEQP-GLES31.functional.shaders.multisample_interpolation.",
        "interpolate_at_centroid.negative.interpolate_struct_member");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003215,
        "dEQP-GLES31.functional.shaders.multisample_interpolat",
        "ion.interpolate_at_centroid.negative.interpolate_local");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003216,
        "dEQP-GLES31.functional.shaders.multisample_interpolati",
        "on.interpolate_at_centroid.negative.interpolate_global");

static SHRINK_HWTEST_F(ActsDeqpgles310004TestSuite, TestCase_003217,
        "dEQP-GLES31.functional.shaders.multisample_interpolatio",
        "n.interpolate_at_centroid.negative.interpolate_constant");
