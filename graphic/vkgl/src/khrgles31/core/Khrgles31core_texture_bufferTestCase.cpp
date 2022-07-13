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
#include "../Khrgles31BaseFunc.h"
#include "../ActsKhrgles310003TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002680,
        "KHR-GLES31.core.texture_buffer.tex",
        "ture_buffer_operations_buffer_load");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002681,
        "KHR-GLES31.core.texture_buffer.te",
        "xture_buffer_operations_cpu_writes");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002682,
        "KHR-GLES31.core.texture_buffer.texture",
        "_buffer_operations_framebuffer_readback");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002683,
        "KHR-GLES31.core.texture_buffer.textur",
        "e_buffer_operations_transform_feedback");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002684,
        "KHR-GLES31.core.texture_buffer.tex",
        "ture_buffer_operations_image_store");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002685,
        "KHR-GLES31.core.texture_buffer.tex",
        "ture_buffer_operations_ssbo_writes");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002686,
        "KHR-GLES31.core.texture_buf",
        "fer.texture_buffer_max_size");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002687,
        "KHR-GLES31.core.texture_buffer.te",
        "xture_buffer_texture_buffer_range");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002688,
        "KHR-GLES31.core.texture_buffer.",
        "texture_buffer_conv_int_to_float");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002689,
        "KHR-GLES31.core.texture_buffer.",
        "texture_buffer_atomic_functions");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002690,
        "KHR-GLES31.core.texture_buff",
        "er.texture_buffer_parameters");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002691,
        "KHR-GLES31.core.texture_bu",
        "ffer.texture_buffer_errors");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002692,
        "KHR-GLES31.core.texture_buffer.texture_buff",
        "er_active_uniform_validation_fragment_shader");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002693,
        "KHR-GLES31.core.texture_buffer.texture_buff",
        "er_active_uniform_validation_compute_shader");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002694,
        "KHR-GLES31.core.texture_buffer.",
        "texture_buffer_buffer_parameters");

static SHRINK_HWTEST_F(ActsKhrgles310003TestSuite, TestCase_002695,
        "KHR-GLES31.core.texture_buf",
        "fer.texture_buffer_precision");
