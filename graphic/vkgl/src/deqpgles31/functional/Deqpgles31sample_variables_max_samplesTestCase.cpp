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
#include "../ActsDeqpgles310003TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002931,
        "dEQP-GLES31.functional.shaders.sample_v",
        "ariables.max_samples.default_framebuffer");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002932,
        "dEQP-GLES31.functional.shaders.sample_va",
        "riables.max_samples.singlesample_texture");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002933,
        "dEQP-GLES31.functional.shaders.sample_va",
        "riables.max_samples.multisample_texture_1");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002934,
        "dEQP-GLES31.functional.shaders.sample_va",
        "riables.max_samples.multisample_texture_2");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002935,
        "dEQP-GLES31.functional.shaders.sample_va",
        "riables.max_samples.multisample_texture_4");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002936,
        "dEQP-GLES31.functional.shaders.sample_va",
        "riables.max_samples.multisample_texture_8");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002937,
        "dEQP-GLES31.functional.shaders.sample_var",
        "iables.max_samples.multisample_texture_16");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002938,
        "dEQP-GLES31.functional.shaders.sample_",
        "variables.max_samples.singlesample_rbo");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002939,
        "dEQP-GLES31.functional.shaders.sample_",
        "variables.max_samples.multisample_rbo_1");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002940,
        "dEQP-GLES31.functional.shaders.sample_",
        "variables.max_samples.multisample_rbo_2");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002941,
        "dEQP-GLES31.functional.shaders.sample_",
        "variables.max_samples.multisample_rbo_4");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002942,
        "dEQP-GLES31.functional.shaders.sample_",
        "variables.max_samples.multisample_rbo_8");

static SHRINK_HWTEST_F(ActsDeqpgles310003TestSuite, TestCase_002943,
        "dEQP-GLES31.functional.shaders.sample_v",
        "ariables.max_samples.multisample_rbo_16");
