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
#include "../ActsDeqpgles310028TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027066,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_32_bits.r32ui_r32f.texture2d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027067,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_32_bits.r32ui_r32f.texture2d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027068,
        "dEQP-GLES31.functional.copy_image.non_compressed.",
        "viewclass_32_bits.r32ui_r32f.texture2d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027069,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_32_bits.r32ui_r32f.texture2d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027070,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_32_bits.r32ui_r32f.texture3d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027071,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_32_bits.r32ui_r32f.texture3d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027072,
        "dEQP-GLES31.functional.copy_image.non_compressed.",
        "viewclass_32_bits.r32ui_r32f.texture3d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027073,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_32_bits.r32ui_r32f.texture3d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027074,
        "dEQP-GLES31.functional.copy_image.non_compressed.",
        "viewclass_32_bits.r32ui_r32f.cubemap_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027075,
        "dEQP-GLES31.functional.copy_image.non_compressed.",
        "viewclass_32_bits.r32ui_r32f.cubemap_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027076,
        "dEQP-GLES31.functional.copy_image.non_compressed",
        ".viewclass_32_bits.r32ui_r32f.cubemap_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027077,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_32_bits.r32ui_r32f.cubemap_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027078,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_32_bits.r32ui_r32f.texture2d_array_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027079,
        "dEQP-GLES31.functional.copy_image.non_compressed.view",
        "class_32_bits.r32ui_r32f.texture2d_array_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027080,
        "dEQP-GLES31.functional.copy_image.non_compressed.vie",
        "wclass_32_bits.r32ui_r32f.texture2d_array_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027081,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewcla",
        "ss_32_bits.r32ui_r32f.texture2d_array_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027082,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_32_bits.r32ui_r32f.renderbuffer_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027083,
        "dEQP-GLES31.functional.copy_image.non_compressed.vi",
        "ewclass_32_bits.r32ui_r32f.renderbuffer_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027084,
        "dEQP-GLES31.functional.copy_image.non_compressed.v",
        "iewclass_32_bits.r32ui_r32f.renderbuffer_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310028TestSuite, TestCase_027085,
        "dEQP-GLES31.functional.copy_image.non_compressed.viewc",
        "lass_32_bits.r32ui_r32f.renderbuffer_to_texture2d_array");
