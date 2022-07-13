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
#include "../ActsDeqpgles310016TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015381,
        "dEQP-GLES31.functional.state_query.texture.",
        "texture_cube_map.depth_stencil_mode_integer");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015382,
        "dEQP-GLES31.functional.state_query.texture",
        ".texture_cube_map.depth_stencil_mode_float");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015383,
        "dEQP-GLES31.functional.state_query.texture.",
        "texture_cube_map.depth_stencil_mode_pure_int");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015384,
        "dEQP-GLES31.functional.state_query.texture.t",
        "exture_cube_map.depth_stencil_mode_pure_uint");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015385,
        "dEQP-GLES31.functional.state_query.texture.",
        "texture_cube_map.texture_srgb_decode_integer");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015386,
        "dEQP-GLES31.functional.state_query.texture",
        ".texture_cube_map.texture_srgb_decode_float");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015387,
        "dEQP-GLES31.functional.state_query.texture.t",
        "exture_cube_map.texture_srgb_decode_pure_int");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015388,
        "dEQP-GLES31.functional.state_query.texture.t",
        "exture_cube_map.texture_srgb_decode_pure_uint");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015389,
        "dEQP-GLES31.functional.state_query.texture.t",
        "exture_cube_map.texture_border_color_integer");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015390,
        "dEQP-GLES31.functional.state_query.texture.",
        "texture_cube_map.texture_border_color_float");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015391,
        "dEQP-GLES31.functional.state_query.texture.t",
        "exture_cube_map.texture_border_color_pure_int");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015392,
        "dEQP-GLES31.functional.state_query.texture.te",
        "xture_cube_map.texture_border_color_pure_uint");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015393,
        "dEQP-GLES31.functional.state_query.texture.textur",
        "e_cube_map.texture_wrap_s_clamp_to_border_integer");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015394,
        "dEQP-GLES31.functional.state_query.texture.textu",
        "re_cube_map.texture_wrap_s_clamp_to_border_float");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015395,
        "dEQP-GLES31.functional.state_query.texture.textur",
        "e_cube_map.texture_wrap_t_clamp_to_border_integer");

static SHRINK_HWTEST_F(ActsDeqpgles310016TestSuite, TestCase_015396,
        "dEQP-GLES31.functional.state_query.texture.textu",
        "re_cube_map.texture_wrap_t_clamp_to_border_float");
