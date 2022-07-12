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
#include "../ActsDeqpgles310027TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026436,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_48_bits.rgb16ui_rgb16f.texture2d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026437,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_48_bits.rgb16ui_rgb16f.texture2d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026438,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_48_bits.rgb16ui_rgb16f.texture2d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026439,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_48_bits.rgb16ui_rgb16f.texture2d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026440,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_48_bits.rgb16ui_rgb16f.texture3d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026441,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_48_bits.rgb16ui_rgb16f.texture3d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026442,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_48_bits.rgb16ui_rgb16f.texture3d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026443,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_48_bits.rgb16ui_rgb16f.texture3d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026444,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_48_bits.rgb16ui_rgb16f.cubemap_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026445,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_48_bits.rgb16ui_rgb16f.cubemap_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026446,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_48_bits.rgb16ui_rgb16f.cubemap_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026447,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_48_bits.rgb16ui_rgb16f.cubemap_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026448,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_48_bits.rgb16ui_rgb16f.texture2d_array_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026449,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_48_bits.rgb16ui_rgb16f.texture2d_array_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026450,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_48_bits.rgb16ui_rgb16f.texture2d_array_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310027TestSuite, TestCase_026451,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewclass",
        "_48_bits.rgb16ui_rgb16f.texture2d_array_to_texture2d_array");
