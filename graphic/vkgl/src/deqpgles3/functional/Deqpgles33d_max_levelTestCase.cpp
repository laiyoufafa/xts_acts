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
#include "../Deqpgles3BaseFunc.h"
#include "../ActsDeqpgles30026TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles30026TestSuite, TestCase_025193,
        "dEQP-GLES3.functional.texture.mi",
        "pmap.3d.max_level.nearest_nearest");

static SHRINK_HWTEST_F(ActsDeqpgles30026TestSuite, TestCase_025194,
        "dEQP-GLES3.functional.texture.mi",
        "pmap.3d.max_level.linear_nearest");

static SHRINK_HWTEST_F(ActsDeqpgles30026TestSuite, TestCase_025195,
        "dEQP-GLES3.functional.texture.mi",
        "pmap.3d.max_level.nearest_linear");

static SHRINK_HWTEST_F(ActsDeqpgles30026TestSuite, TestCase_025196,
        "dEQP-GLES3.functional.texture.m",
        "ipmap.3d.max_level.linear_linear");
