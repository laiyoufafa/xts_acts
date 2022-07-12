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
#include "../ActsDeqpgles310005TestSuite.h"
#include "shrinkdefine.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static SHRINK_HWTEST_F(ActsDeqpgles310005TestSuite, TestCase_004106,
        "dEQP-GLES31.functional.shaders.arrays_of_arrays.es31.single_statement",
        "_multiple_declarations.explicit_constructor.float_2_dimensions_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310005TestSuite, TestCase_004107,
        "dEQP-GLES31.functional.shaders.arrays_of_arrays.es31.single_statement_",
        "multiple_declarations.explicit_constructor.float_2_dimensions_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles310005TestSuite, TestCase_004108,
        "dEQP-GLES31.functional.shaders.arrays_of_arrays.es31.single_statemen",
        "t_multiple_declarations.explicit_constructor.int_3_dimensions_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310005TestSuite, TestCase_004109,
        "dEQP-GLES31.functional.shaders.arrays_of_arrays.es31.single_statement",
        "_multiple_declarations.explicit_constructor.int_3_dimensions_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles310005TestSuite, TestCase_004398,
        "dEQP-GLES31.functional.shaders.arrays_of_arrays.es32.single_statement",
        "_multiple_declarations.explicit_constructor.float_2_dimensions_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310005TestSuite, TestCase_004399,
        "dEQP-GLES31.functional.shaders.arrays_of_arrays.es32.single_statement_",
        "multiple_declarations.explicit_constructor.float_2_dimensions_fragment");

static SHRINK_HWTEST_F(ActsDeqpgles310005TestSuite, TestCase_004400,
        "dEQP-GLES31.functional.shaders.arrays_of_arrays.es32.single_statemen",
        "t_multiple_declarations.explicit_constructor.int_3_dimensions_vertex");

static SHRINK_HWTEST_F(ActsDeqpgles310005TestSuite, TestCase_004401,
        "dEQP-GLES31.functional.shaders.arrays_of_arrays.es32.single_statement",
        "_multiple_declarations.explicit_constructor.int_3_dimensions_fragment");
