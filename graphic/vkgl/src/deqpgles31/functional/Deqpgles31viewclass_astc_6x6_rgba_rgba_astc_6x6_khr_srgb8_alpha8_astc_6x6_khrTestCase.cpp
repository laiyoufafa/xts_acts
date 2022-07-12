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
#include "../ActsDeqpgles310034TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033435,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgb",
        "a.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture2d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033436,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgb",
        "a.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture2d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033437,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rg",
        "ba.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture2d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033438,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgba.r",
        "gba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture2d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033439,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgb",
        "a.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture3d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033440,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgb",
        "a.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture3d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033441,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rg",
        "ba.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture3d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033442,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgba.r",
        "gba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture3d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033443,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rg",
        "ba.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.cubemap_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033444,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rg",
        "ba.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.cubemap_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033445,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_r",
        "gba.rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.cubemap_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033446,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgba.",
        "rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.cubemap_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033447,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgba.r",
        "gba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture2d_array_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033448,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgba.r",
        "gba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture2d_array_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033449,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgba.",
        "rgba_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture2d_array_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033450,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_6x6_rgba.rgba",
        "_astc_6x6_khr_srgb8_alpha8_astc_6x6_khr.texture2d_array_to_texture2d_array");
