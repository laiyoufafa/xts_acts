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

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025914,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_64_bits.rg32ui_rgba16i.texture2d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025915,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_64_bits.rg32ui_rgba16i.texture2d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025916,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_64_bits.rg32ui_rgba16i.texture2d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025917,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_64_bits.rg32ui_rgba16i.texture2d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025918,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_64_bits.rg32ui_rgba16i.texture2d_to_renderbuffer");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025919,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_64_bits.rg32ui_rgba16i.texture3d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025920,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_64_bits.rg32ui_rgba16i.texture3d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025921,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_64_bits.rg32ui_rgba16i.texture3d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025922,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_64_bits.rg32ui_rgba16i.texture3d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025923,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_64_bits.rg32ui_rgba16i.texture3d_to_renderbuffer");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025924,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_64_bits.rg32ui_rgba16i.cubemap_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025925,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_64_bits.rg32ui_rgba16i.cubemap_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025926,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_64_bits.rg32ui_rgba16i.cubemap_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025927,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_64_bits.rg32ui_rgba16i.cubemap_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025928,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_64_bits.rg32ui_rgba16i.cubemap_to_renderbuffer");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025929,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_64_bits.rg32ui_rgba16i.texture2d_array_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025930,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_64_bits.rg32ui_rgba16i.texture2d_array_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025931,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_64_bits.rg32ui_rgba16i.texture2d_array_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025932,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewclass",
        "_64_bits.rg32ui_rgba16i.texture2d_array_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025933,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcla",
        "ss_64_bits.rg32ui_rgba16i.texture2d_array_to_renderbuffer");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025934,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_64_bits.rg32ui_rgba16i.renderbuffer_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025935,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_64_bits.rg32ui_rgba16i.renderbuffer_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025936,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_64_bits.rg32ui_rgba16i.renderbuffer_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025937,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcla",
        "ss_64_bits.rg32ui_rgba16i.renderbuffer_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310026TestSuite, TestCase_025938,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_64_bits.rg32ui_rgba16i.renderbuffer_to_renderbuffer");
