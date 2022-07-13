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
#include "../ActsDeqpgles310036TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035029,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_b",
        "its_mixed.rgba8_etc2_eac_rgba32ui.texture2d_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035030,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_b",
        "its_mixed.rgba8_etc2_eac_rgba32ui.texture2d_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035031,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_",
        "bits_mixed.rgba8_etc2_eac_rgba32ui.texture2d_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035032,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_bits",
        "_mixed.rgba8_etc2_eac_rgba32ui.texture2d_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035033,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_bit",
        "s_mixed.rgba8_etc2_eac_rgba32ui.texture2d_to_renderbuffer");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035034,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_",
        "bits_mixed.rgba8_etc2_eac_rgba32ui.cubemap_to_texture2d");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035035,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_",
        "bits_mixed.rgba8_etc2_eac_rgba32ui.cubemap_to_texture3d");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035036,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128",
        "_bits_mixed.rgba8_etc2_eac_rgba32ui.cubemap_to_cubemap");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035037,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_bit",
        "s_mixed.rgba8_etc2_eac_rgba32ui.cubemap_to_texture2d_array");

static SHRINK_HWTEST_F(ActsDeqpgles310036TestSuite, TestCase_035038,
        "dEQP-GLES31.functional.copy_image.mixed.viewclass_128_bi",
        "ts_mixed.rgba8_etc2_eac_rgba32ui.cubemap_to_renderbuffer");
