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
#include "../ActsDeqpgles310033TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032075,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_16_bits.r16ui_rg8_snorm.texture2d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032076,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_16_bits.r16ui_rg8_snorm.texture2d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032077,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_16_bits.r16ui_rg8_snorm.texture2d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032078,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_16_bits.r16ui_rg8_snorm.texture2d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032079,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_16_bits.r16ui_rg8_snorm.texture3d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032080,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_16_bits.r16ui_rg8_snorm.texture3d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032081,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_16_bits.r16ui_rg8_snorm.texture3d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032082,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_16_bits.r16ui_rg8_snorm.texture3d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032083,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_16_bits.r16ui_rg8_snorm.cubemap_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032084,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_16_bits.r16ui_rg8_snorm.cubemap_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032085,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_16_bits.r16ui_rg8_snorm.cubemap_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032086,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_16_bits.r16ui_rg8_snorm.cubemap_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032087,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_16_bits.r16ui_rg8_snorm.texture2d_array_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032088,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcl",
        "ass_16_bits.r16ui_rg8_snorm.texture2d_array_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032089,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_16_bits.r16ui_rg8_snorm.texture2d_array_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032090,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewclass",
        "_16_bits.r16ui_rg8_snorm.texture2d_array_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032091,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_16_bits.r16ui_rg8_snorm.renderbuffer_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032092,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_16_bits.r16ui_rg8_snorm.renderbuffer_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032093,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_16_bits.r16ui_rg8_snorm.renderbuffer_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310033TestSuite, TestCase_032094,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewclas",
        "s_16_bits.r16ui_rg8_snorm.renderbuffer_to_texture2d_array");
