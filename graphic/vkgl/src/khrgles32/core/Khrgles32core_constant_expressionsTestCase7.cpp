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

#include <gtest/gtest.h>
#include "../Khrgles32BaseFunc.h"
#include "../ActsKhrgles320001TestSuite.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000836, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000836 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_abs_ivec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000836 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000836 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000837, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000837 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_abs_ivec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000837 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000837 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000838, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000838 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_abs_ivec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000838 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000838 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000839, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000839 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_abs_ivec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000839 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000839 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000840, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000840 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_abs_ivec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000840 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000840 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000841, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000841 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_sign_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000841 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000841 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000842, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000842 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_sign_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000842 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000842 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000843, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000843 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_sign_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000843 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000843 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000844, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000844 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_sign_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000844 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000844 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000845, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000845 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_sign_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000845 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000845 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000846, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000846 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_sign_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000846 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000846 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000847, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000847 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_sign_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000847 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000847 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000848, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000848 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_sign_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000848 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000848 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000849, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000849 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_sign_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000849 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000849 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000850, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000850 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_sign_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000850 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000850 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000851, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000851 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_sign_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000851 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000851 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000852, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000852 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_sign_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000852 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000852 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000853, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000853 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_floor_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000853 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000853 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000854, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000854 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_floor_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000854 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000854 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000855, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000855 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_floor_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000855 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000855 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000856, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000856 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_floor_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000856 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000856 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000857, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000857 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_floor_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000857 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000857 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000858, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000858 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_floor_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000858 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000858 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000859, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000859 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_floor_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000859 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000859 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000860, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000860 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_floor_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000860 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000860 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000861, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000861 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_floor_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000861 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000861 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000862, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000862 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_floor_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000862 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000862 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000863, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000863 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_floor_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000863 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000863 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000864, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000864 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_floor_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000864 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000864 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000865, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000865 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_trunc_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000865 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000865 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000866, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000866 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_trunc_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000866 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000866 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000867, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000867 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_trunc_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000867 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000867 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000868, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000868 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_trunc_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000868 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000868 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000869, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000869 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_trunc_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000869 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000869 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000870, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000870 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_trunc_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000870 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000870 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000871, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000871 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_trunc_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000871 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000871 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000872, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000872 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_trunc_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000872 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000872 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000873, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000873 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_trunc_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000873 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000873 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000874, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000874 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_trunc_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000874 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000874 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000875, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000875 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_trunc_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000875 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000875 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000876, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000876 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_trunc_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000876 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000876 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000877, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000877 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_round_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000877 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000877 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000878, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000878 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_round_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000878 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000878 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000879, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000879 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_round_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000879 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000879 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000880, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000880 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_round_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000880 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000880 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000881, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000881 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_round_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000881 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000881 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000882, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000882 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_round_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000882 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000882 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000883, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000883 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_round_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000883 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000883 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000884, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000884 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_round_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000884 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000884 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000885, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000885 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_round_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000885 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000885 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000886, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000886 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_round_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000886 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000886 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000887, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000887 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_round_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000887 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000887 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000888, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000888 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_round_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000888 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000888 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000889, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000889 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_ceil_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000889 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000889 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000890, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000890 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_ceil_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000890 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000890 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000891, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000891 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_ceil_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000891 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000891 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000892, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000892 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_ceil_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000892 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000892 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000893, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000893 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_ceil_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000893 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000893 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000894, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000894 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_ceil_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000894 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000894 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000895, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000895 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_ceil_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000895 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000895 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000896, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000896 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_ceil_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000896 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000896 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000897, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000897 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_ceil_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000897 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000897 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000898, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000898 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_ceil_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000898 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000898 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000899, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000899 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_ceil_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000899 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000899 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000900, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000900 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_ceil_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000900 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000900 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000901, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000901 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_mod_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000901 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000901 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000902, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000902 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_mod_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000902 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000902 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000903, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000903 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expres"
        "sions.array_mod_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000903 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000903 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000904, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000904 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_mod_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000904 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000904 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000905, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000905 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_express"
        "ions.array_mod_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000905 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000905 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000906, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000906 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expre"
        "ssions.array_mod_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000906 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000906 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000907, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000907 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expressi"
        "ons.array_mod_vec2_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000907 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000907 end";
}

static HWTEST_F(ActsKhrgles320001TestSuite, TestCase_000908, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_000908 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES32.core.constant_expression"
        "s.array_mod_vec2_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles320001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles320001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles320001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles320001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles320001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_000908 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_000908 end";
}
