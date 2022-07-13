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
#include "../KhrglesextBaseFunc.h"
#include "../ActsKhrglesext0001TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsKhrglesext0001TestSuite, TestCase_000328,
        "KHR-GLESEXT.ext_texture_shadow_lod.t",
        "exturelod.sampler2darrayshadow_vertex");

static SHRINK_HWTEST_F(ActsKhrglesext0001TestSuite, TestCase_000329,
        "KHR-GLESEXT.ext_texture_shadow_lod.te",
        "xturelod.sampler2darrayshadow_fragment");

static SHRINK_HWTEST_F(ActsKhrglesext0001TestSuite, TestCase_000330,
        "KHR-GLESEXT.ext_texture_shadow_lod.",
        "texturelod.samplercubeshadow_vertex");

static SHRINK_HWTEST_F(ActsKhrglesext0001TestSuite, TestCase_000331,
        "KHR-GLESEXT.ext_texture_shadow_lod.t",
        "exturelod.samplercubeshadow_fragment");

static SHRINK_HWTEST_F(ActsKhrglesext0001TestSuite, TestCase_000332,
        "KHR-GLESEXT.ext_texture_shadow_lod.tex",
        "turelod.samplercubearrayshadow_fragment");
