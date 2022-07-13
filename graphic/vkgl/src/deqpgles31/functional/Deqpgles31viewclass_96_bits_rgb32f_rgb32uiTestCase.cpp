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
#include "../ActsDeqpgles310026TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025476,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_96_bits.rgb32f_rgb32ui.texture2d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025477,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_96_bits.rgb32f_rgb32ui.texture2d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025478,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_96_bits.rgb32f_rgb32ui.texture2d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025479,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_96_bits.rgb32f_rgb32ui.texture2d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025480,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_96_bits.rgb32f_rgb32ui.texture3d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025481,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_96_bits.rgb32f_rgb32ui.texture3d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025482,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_96_bits.rgb32f_rgb32ui.texture3d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025483,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_96_bits.rgb32f_rgb32ui.texture3d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025484,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_96_bits.rgb32f_rgb32ui.cubemap_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025485,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_96_bits.rgb32f_rgb32ui.cubemap_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025486,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_96_bits.rgb32f_rgb32ui.cubemap_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025487,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_96_bits.rgb32f_rgb32ui.cubemap_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025488,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_96_bits.rgb32f_rgb32ui.texture2d_array_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025489,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_96_bits.rgb32f_rgb32ui.texture2d_array_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025490,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_96_bits.rgb32f_rgb32ui.texture2d_array_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025491,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewclass",
        "_96_bits.rgb32f_rgb32ui.texture2d_array_to_texture2d_array");
