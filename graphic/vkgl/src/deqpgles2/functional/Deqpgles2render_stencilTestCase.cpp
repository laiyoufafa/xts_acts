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
#include "../Deqpgles2BaseFunc.h"
#include "../ActsDeqpgles20013TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012500,
        "dEQP-GLES2.functional.fbo.render",
        ".stencil.tex2d_rgb_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012501,
        "dEQP-GLES2.functional.fbo.render.stencil.",
        "tex2d_rgb_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012502,
        "dEQP-GLES2.functional.fbo.render.",
        "stencil.tex2d_rgba_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012503,
        "dEQP-GLES2.functional.fbo.render.stencil.t",
        "ex2d_rgba_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012504,
        "dEQP-GLES2.functional.fbo.render.",
        "stencil.rbo_rgb565_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012505,
        "dEQP-GLES2.functional.fbo.render.stencil.r",
        "bo_rgb565_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012506,
        "dEQP-GLES2.functional.fbo.render.",
        "stencil.rbo_rgb5_a1_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012507,
        "dEQP-GLES2.functional.fbo.render.stencil.r",
        "bo_rgb5_a1_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012508,
        "dEQP-GLES2.functional.fbo.render",
        ".stencil.rbo_rgba4_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012509,
        "dEQP-GLES2.functional.fbo.render.stencil.",
        "rbo_rgba4_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012510,
        "dEQP-GLES2.functional.fbo.render.st",
        "encil.npot_tex2d_rgb_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012511,
        "dEQP-GLES2.functional.fbo.render.stencil.npo",
        "t_tex2d_rgb_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012512,
        "dEQP-GLES2.functional.fbo.render.st",
        "encil.npot_tex2d_rgba_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012513,
        "dEQP-GLES2.functional.fbo.render.stencil.npo",
        "t_tex2d_rgba_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012514,
        "dEQP-GLES2.functional.fbo.render.st",
        "encil.npot_rbo_rgb565_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012515,
        "dEQP-GLES2.functional.fbo.render.stencil.npo",
        "t_rbo_rgb565_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012516,
        "dEQP-GLES2.functional.fbo.render.ste",
        "ncil.npot_rbo_rgb5_a1_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012517,
        "dEQP-GLES2.functional.fbo.render.stencil.npot",
        "_rbo_rgb5_a1_depth_component16_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012518,
        "dEQP-GLES2.functional.fbo.render.st",
        "encil.npot_rbo_rgba4_stencil_index8");

static SHRINK_HWTEST_F(ActsDeqpgles20013TestSuite, TestCase_012519,
        "dEQP-GLES2.functional.fbo.render.stencil.npo",
        "t_rbo_rgba4_depth_component16_stencil_index8");
