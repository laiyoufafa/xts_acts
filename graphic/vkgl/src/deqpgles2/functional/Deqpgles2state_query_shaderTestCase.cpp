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
#include "../ActsDeqpgles20016TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015662,
        "dEQP-GLES2.functional.stat",
        "e_query.shader.shader_type");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015663,
        "dEQP-GLES2.functional.state_que",
        "ry.shader.shader_compile_status");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015664,
        "dEQP-GLES2.functional.state_que",
        "ry.shader.shader_info_log_length");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015665,
        "dEQP-GLES2.functional.state_qu",
        "ery.shader.shader_source_length");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015666,
        "dEQP-GLES2.functional.state",
        "_query.shader.delete_status");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015667,
        "dEQP-GLES2.functional.state_query.s",
        "hader.current_vertex_attrib_initial");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015668,
        "dEQP-GLES2.functional.state_query.",
        "shader.current_vertex_attrib_float");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015669,
        "dEQP-GLES2.functional.state_query.sha",
        "der.current_vertex_attrib_float_to_int");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015670,
        "dEQP-GLES2.functional.state_quer",
        "y.shader.program_info_log_length");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015671,
        "dEQP-GLES2.functional.state_quer",
        "y.shader.program_validate_status");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015672,
        "dEQP-GLES2.functional.state_quer",
        "y.shader.program_attached_shaders");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015673,
        "dEQP-GLES2.functional.state_query.",
        "shader.program_active_uniform_name");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015674,
        "dEQP-GLES2.functional.state_query.",
        "shader.program_active_uniform_types");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015675,
        "dEQP-GLES2.functional.state_q",
        "uery.shader.active_attributes");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015676,
        "dEQP-GLES2.functional.state_q",
        "uery.shader.vertex_attrib_size");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015677,
        "dEQP-GLES2.functional.state_q",
        "uery.shader.vertex_attrib_type");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015678,
        "dEQP-GLES2.functional.state_qu",
        "ery.shader.vertex_attrib_stride");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015679,
        "dEQP-GLES2.functional.state_quer",
        "y.shader.vertex_attrib_normalized");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015680,
        "dEQP-GLES2.functional.state_query.",
        "shader.vertex_attrib_array_enabled");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015681,
        "dEQP-GLES2.functional.state_query.sha",
        "der.vertex_attrib_array_buffer_binding");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015682,
        "dEQP-GLES2.functional.state_que",
        "ry.shader.vertex_attrib_pointerv");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015683,
        "dEQP-GLES2.functional.state_qu",
        "ery.shader.uniform_value_float");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015684,
        "dEQP-GLES2.functional.state_q",
        "uery.shader.uniform_value_int");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015685,
        "dEQP-GLES2.functional.state_que",
        "ry.shader.uniform_value_boolean");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015686,
        "dEQP-GLES2.functional.state_que",
        "ry.shader.uniform_value_sampler");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015687,
        "dEQP-GLES2.functional.state_qu",
        "ery.shader.uniform_value_array");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015688,
        "dEQP-GLES2.functional.state_qu",
        "ery.shader.uniform_value_matrix");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015689,
        "dEQP-GLES2.functional.state_query.",
        "shader.precision_vertex_lowp_float");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015690,
        "dEQP-GLES2.functional.state_query.s",
        "hader.precision_vertex_mediump_float");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015691,
        "dEQP-GLES2.functional.state_query.",
        "shader.precision_vertex_highp_float");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015692,
        "dEQP-GLES2.functional.state_query",
        ".shader.precision_vertex_lowp_int");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015693,
        "dEQP-GLES2.functional.state_query.",
        "shader.precision_vertex_mediump_int");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015694,
        "dEQP-GLES2.functional.state_query",
        ".shader.precision_vertex_highp_int");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015695,
        "dEQP-GLES2.functional.state_query.s",
        "hader.precision_fragment_lowp_float");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015696,
        "dEQP-GLES2.functional.state_query.sh",
        "ader.precision_fragment_mediump_float");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015697,
        "dEQP-GLES2.functional.state_query.s",
        "hader.precision_fragment_highp_float");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015698,
        "dEQP-GLES2.functional.state_query.",
        "shader.precision_fragment_lowp_int");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015699,
        "dEQP-GLES2.functional.state_query.s",
        "hader.precision_fragment_mediump_int");

static SHRINK_HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015700,
        "dEQP-GLES2.functional.state_query.",
        "shader.precision_fragment_highp_int");
