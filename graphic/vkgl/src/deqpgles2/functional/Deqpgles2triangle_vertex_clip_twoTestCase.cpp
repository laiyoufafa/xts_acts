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
#include "../Deqpgles2BaseFunc.h"
#include "../ActsDeqpgles20016TestSuite.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015811, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015811 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangl"
        "e_vertex.clip_two.clip_neg_x_and_pos_x",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015811 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015811 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015812, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015812 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangl"
        "e_vertex.clip_two.clip_neg_x_and_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015812 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015812 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015813, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015813 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangl"
        "e_vertex.clip_two.clip_neg_x_and_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015813 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015813 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015814, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015814 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_x_and_neg_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015814 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015814 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015815, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015815 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_x_and_pos_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015815 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015815 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015816, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015816 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_x_and_pos_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015816 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015816 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015817, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015817 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_x_and_neg_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015817 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015817 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015818, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015818 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_x_and_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015818 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015818 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015819, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015819 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_x_and_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015819 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015819 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015820, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015820 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_x_and_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015820 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015820 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015821, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015821 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_x_and_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015821 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015821 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015822, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015822 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_and_neg_x_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015822 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015822 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015823, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015823 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_and_pos_x_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015823 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015823 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015824, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015824 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_and_pos_x_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015824 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015824 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015825, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015825 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_and_neg_x_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015825 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015825 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015826, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015826 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_and_neg_x_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015826 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015826 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015827, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015827 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_and_pos_x_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015827 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015827 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015828, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015828 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_and_pos_x_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015828 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015828 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015829, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015829 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_and_neg_x_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015829 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015829 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015830, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015830 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangl"
        "e_vertex.clip_two.clip_pos_x_and_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015830 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015830 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015831, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015831 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangl"
        "e_vertex.clip_two.clip_pos_x_and_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015831 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015831 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015832, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015832 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_x_and_neg_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015832 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015832 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015833, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015833 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_x_and_pos_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015833 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015833 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015834, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015834 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_x_and_pos_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015834 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015834 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015835, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015835 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_x_and_neg_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015835 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015835 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015836, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015836 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_x_and_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015836 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015836 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015837, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015837 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_x_and_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015837 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015837 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015838, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015838 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_x_and_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015838 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015838 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015839, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015839 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_x_and_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015839 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015839 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015840, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015840 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_x_and_neg_x_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015840 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015840 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015841, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015841 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_x_and_pos_x_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015841 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015841 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015842, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015842 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_x_and_pos_x_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015842 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015842 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015843, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015843 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_x_and_neg_x_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015843 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015843 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015844, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015844 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_x_and_neg_x_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015844 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015844 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015845, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015845 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_x_and_pos_x_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015845 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015845 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015846, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015846 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_x_and_pos_x_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015846 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015846 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015847, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015847 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_x_and_neg_x_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015847 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015847 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015848, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015848 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangl"
        "e_vertex.clip_two.clip_pos_y_and_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015848 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015848 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015849, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015849 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_y_and_neg_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015849 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015849 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015850, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015850 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_y_and_pos_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015850 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015850 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015851, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015851 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_y_and_pos_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015851 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015851 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015852, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015852 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_y_and_neg_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015852 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015852 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015853, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015853 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_y_and_neg_x_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015853 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015853 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015854, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015854 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_y_and_pos_x_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015854 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015854 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015855, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015855 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_y_and_pos_x_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015855 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015855 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015856, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015856 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_pos_y_and_neg_x_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015856 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015856 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015857, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015857 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_y_and_neg_x_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015857 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015857 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015858, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015858 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_y_and_pos_x_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015858 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015858 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015859, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015859 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_y_and_pos_x_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015859 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015859 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015860, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015860 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_y_and_neg_x_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015860 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015860 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015861, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015861 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_y_and_neg_x_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015861 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015861 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015862, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015862 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_y_and_pos_x_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015862 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015862 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015863, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015863 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_y_and_pos_x_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015863 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015863 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015864, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015864 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_pos_y_and_neg_x_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015864 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015864 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015865, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015865 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_y_and_neg_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015865 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015865 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015866, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015866 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_y_and_pos_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015866 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015866 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015867, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015867 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_y_and_pos_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015867 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015867 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015868, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015868 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_y_and_neg_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015868 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015868 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015869, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015869 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_y_and_neg_x_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015869 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015869 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015870, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015870 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_y_and_pos_x_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015870 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015870 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015871, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015871 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_y_and_pos_x_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015871 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015871 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015872, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015872 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_v"
        "ertex.clip_two.clip_neg_y_and_neg_x_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015872 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015872 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015873, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015873 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_y_and_neg_x_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015873 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015873 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015874, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015874 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_y_and_pos_x_neg_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015874 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015874 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015875, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015875 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_y_and_pos_x_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015875 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015875 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015876, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015876 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_y_and_neg_x_pos_y_pos_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015876 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015876 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015877, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015877 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_y_and_neg_x_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015877 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015877 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015878, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015878 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_y_and_pos_x_neg_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015878 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015878 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015879, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015879 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_y_and_pos_x_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015879 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015879 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015880, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015880 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_y_and_neg_x_pos_y_neg_z",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015880 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015880 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015881, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015881 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_neg_y_and_pos_x_neg_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015881 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015881 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015882, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015882 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_neg_y_and_pos_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015882 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015882 end";
}

static HWTEST_F(ActsDeqpgles20016TestSuite, TestCase_015883, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_015883 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "dEQP-GLES2.functional.clipping.triangle_vert"
        "ex.clip_two.clip_neg_x_neg_y_and_neg_x_pos_y",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsDeqpgles20016TestSuite::runResult.numPassed += result.numPassed;
    ActsDeqpgles20016TestSuite::runResult.numFailed += result.numFailed;
    ActsDeqpgles20016TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsDeqpgles20016TestSuite::runResult.numWarnings += result.numWarnings;
    ActsDeqpgles20016TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_015883 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_015883 end";
}
