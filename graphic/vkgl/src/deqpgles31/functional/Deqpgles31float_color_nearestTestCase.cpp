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
#include "../ActsDeqpgles310015TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014639,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.te",
        "xture_2d.float_color.nearest.s_clamp_to_edge_t_clamp_to_border_pot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014640,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.tex",
        "ture_2d.float_color.nearest.s_clamp_to_edge_t_clamp_to_border_npot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014641,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode",
        ".texture_2d.float_color.nearest.s_repeat_t_clamp_to_border_pot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014642,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode",
        ".texture_2d.float_color.nearest.s_repeat_t_clamp_to_border_npot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014643,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.tex",
        "ture_2d.float_color.nearest.s_mirrored_repeat_t_clamp_to_border_pot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014644,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.text",
        "ure_2d.float_color.nearest.s_mirrored_repeat_t_clamp_to_border_npot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014761,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.texture_3d.f",
        "loat_color.nearest.s_clamp_to_border_t_clamp_to_border_r_clamp_to_border_pot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014762,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.texture_3d.fl",
        "oat_color.nearest.s_clamp_to_border_t_clamp_to_border_r_clamp_to_border_npot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014763,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.texture_",
        "3d.float_color.nearest.s_clamp_to_border_t_clamp_to_border_r_repeat_pot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014764,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.texture_",
        "3d.float_color.nearest.s_clamp_to_border_t_clamp_to_border_r_repeat_npot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014765,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.texture_",
        "3d.float_color.nearest.s_mirrored_repeat_t_clamp_to_border_r_repeat_pot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014766,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.texture_",
        "3d.float_color.nearest.s_mirrored_repeat_t_clamp_to_border_r_repeat_npot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014767,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.texture_",
        "3d.float_color.nearest.s_repeat_t_mirrored_repeat_r_clamp_to_border_pot");

static SHRINK_HWTEST_F(ActsDeqpgles310015TestSuite, TestCase_014768,
        "dEQP-GLES31.functional.texture.border_clamp.per_axis_wrap_mode.texture_",
        "3d.float_color.nearest.s_repeat_t_mirrored_repeat_r_clamp_to_border_npot");
