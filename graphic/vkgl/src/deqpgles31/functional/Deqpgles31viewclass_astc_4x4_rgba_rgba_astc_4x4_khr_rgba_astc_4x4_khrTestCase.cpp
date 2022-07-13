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

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033163,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4",
        "_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture2d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033164,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4",
        "_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture2d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033165,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x",
        "4_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture2d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033166,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4_rg",
        "ba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture2d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033167,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4",
        "_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture3d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033168,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4",
        "_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture3d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033169,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x",
        "4_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture3d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033170,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4_rg",
        "ba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture3d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033171,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x",
        "4_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.cubemap_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033172,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x",
        "4_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.cubemap_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033173,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4",
        "x4_rgba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.cubemap_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033174,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4_r",
        "gba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.cubemap_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033175,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4_rg",
        "ba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture2d_array_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033176,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4_rg",
        "ba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture2d_array_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033177,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4_r",
        "gba.rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture2d_array_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310034TestSuite, TestCase_033178,
        "dEQP-GLES31.functional.copy_image.compressed.viewclass_astc_4x4_rgba.",
        "rgba_astc_4x4_khr_rgba_astc_4x4_khr.texture2d_array_to_texture2d_array");
