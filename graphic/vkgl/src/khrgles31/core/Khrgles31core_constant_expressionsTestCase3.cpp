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
#include "../Khrgles31BaseFunc.h"
#include "../ActsKhrgles310001TestSuite.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001016, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001016 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_abs_ivec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001016 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001016 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001017, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001017 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_abs_ivec4_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001017 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001017 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001018, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001018 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_abs_ivec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001018 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001018 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001019, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001019 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_express"
        "ions.basic_abs_ivec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001019 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001019 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001020, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001020 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_abs_ivec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001020 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001020 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001021, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001021 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_sign_float_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001021 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001021 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001022, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001022 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_sign_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001022 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001022 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001023, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001023 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_sign_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001023 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001023 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001024, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001024 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_sign_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001024 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001024 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001025, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001025 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_sign_vec2_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001025 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001025 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001026, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001026 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_sign_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001026 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001026 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001027, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001027 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_express"
        "ions.basic_sign_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001027 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001027 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001028, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001028 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_sign_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001028 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001028 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001029, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001029 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_sign_vec3_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001029 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001029 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001030, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001030 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_sign_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001030 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001030 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001031, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001031 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_express"
        "ions.basic_sign_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001031 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001031 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001032, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001032 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_sign_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001032 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001032 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001033, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001033 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_sign_vec4_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001033 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001033 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001034, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001034 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_sign_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001034 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001034 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001035, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001035 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_express"
        "ions.basic_sign_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001035 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001035 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001036, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001036 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_sign_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001036 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001036 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001037, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001037 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_floor_float_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001037 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001037 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001038, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001038 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_floor_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001038 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001038 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001039, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001039 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_floor_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001039 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001039 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001040, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001040 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_express"
        "ions.basic_floor_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001040 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001040 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001041, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001041 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_floor_vec2_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001041 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001041 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001042, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001042 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_floor_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001042 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001042 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001043, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001043 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_floor_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001043 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001043 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001044, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001044 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_floor_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001044 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001044 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001045, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001045 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_floor_vec3_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001045 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001045 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001046, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001046 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_floor_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001046 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001046 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001047, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001047 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_floor_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001047 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001047 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001048, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001048 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_floor_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001048 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001048 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001049, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001049 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_floor_vec4_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001049 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001049 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001050, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001050 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_floor_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001050 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001050 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001051, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001051 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_floor_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001051 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001051 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001052, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001052 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_floor_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001052 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001052 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001053, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001053 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_trunc_float_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001053 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001053 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001054, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001054 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_trunc_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001054 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001054 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001055, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001055 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_trunc_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001055 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001055 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001056, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001056 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_express"
        "ions.basic_trunc_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001056 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001056 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001057, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001057 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_trunc_vec2_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001057 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001057 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001058, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001058 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_trunc_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001058 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001058 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001059, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001059 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_trunc_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001059 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001059 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001060, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001060 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_trunc_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001060 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001060 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001061, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001061 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_trunc_vec3_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001061 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001061 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001062, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001062 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_trunc_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001062 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001062 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001063, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001063 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_trunc_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001063 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001063 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001064, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001064 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_trunc_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001064 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001064 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001065, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001065 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_trunc_vec4_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001065 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001065 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001066, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001066 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_trunc_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001066 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001066 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001067, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001067 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_trunc_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001067 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001067 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001068, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001068 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_trunc_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001068 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001068 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001069, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001069 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_round_float_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001069 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001069 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001070, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001070 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_round_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001070 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001070 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001071, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001071 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_round_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001071 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001071 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001072, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001072 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_express"
        "ions.basic_round_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001072 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001072 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001073, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001073 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_round_vec2_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001073 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001073 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001074, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001074 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_round_vec2_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001074 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001074 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001075, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001075 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_round_vec2_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001075 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001075 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001076, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001076 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_round_vec2_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001076 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001076 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001077, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001077 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_round_vec3_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001077 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001077 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001078, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001078 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_round_vec3_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001078 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001078 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001079, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001079 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_round_vec3_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001079 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001079 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001080, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001080 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_round_vec3_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001080 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001080 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001081, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001081 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_round_vec4_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001081 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001081 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001082, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001082 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_round_vec4_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001082 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001082 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001083, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001083 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_round_vec4_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001083 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001083 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001084, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001084 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_round_vec4_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001084 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001084 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001085, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001085 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expre"
        "ssions.basic_ceil_float_compute",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001085 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001085 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001086, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001086 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_ceil_float_geometry",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001086 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001086 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001087, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001087 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expressi"
        "ons.basic_ceil_float_tess_control",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001087 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001087 end";
}

static HWTEST_F(ActsKhrgles310001TestSuite, TestCase_001088, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_001088 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.constant_expres"
        "sions.basic_ceil_float_tess_eval",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310001TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310001TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310001TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310001TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310001TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_001088 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_001088 end";
}
