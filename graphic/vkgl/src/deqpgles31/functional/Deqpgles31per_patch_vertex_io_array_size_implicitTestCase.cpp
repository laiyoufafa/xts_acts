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
#include "../ActsDeqpgles310009TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310009TestSuite, TestCase_008249,
        "dEQP-GLES31.functional.tessellation.user_defined_i",
        "o.per_patch.vertex_io_array_size_implicit.triangles");

static SHRINK_HWTEST_F(ActsDeqpgles310009TestSuite, TestCase_008250,
        "dEQP-GLES31.functional.tessellation.user_defined",
        "_io.per_patch.vertex_io_array_size_implicit.quads");

static SHRINK_HWTEST_F(ActsDeqpgles310009TestSuite, TestCase_008251,
        "dEQP-GLES31.functional.tessellation.user_defined_i",
        "o.per_patch.vertex_io_array_size_implicit.isolines");
