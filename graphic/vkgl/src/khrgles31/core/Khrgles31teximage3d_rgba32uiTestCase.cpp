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
#include "../ActsKhrgles310004TestSuite.h"

using namespace std;
using namespace testing::ext;
using namespace OHOS;

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003445, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003445 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragem"
        "odes.teximage3d.rgba32ui.0_0_0",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003445 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003445 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003446, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003446 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragem"
        "odes.teximage3d.rgba32ui.1_0_0",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003446 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003446 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003447, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003447 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragemo"
        "des.teximage3d.rgba32ui.16_0_0",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003447 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003447 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003448, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003448 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragem"
        "odes.teximage3d.rgba32ui.1_1_0",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003448 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003448 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003449, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003449 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragemo"
        "des.teximage3d.rgba32ui.16_1_0",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003449 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003449 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003450, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003450 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragemo"
        "des.teximage3d.rgba32ui.16_16_0",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003450 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003450 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003451, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003451 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragem"
        "odes.teximage3d.rgba32ui.1_1_1",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003451 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003451 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003452, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003452 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragemo"
        "des.teximage3d.rgba32ui.16_1_1",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003452 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003452 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003453, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003453 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragemo"
        "des.teximage3d.rgba32ui.16_16_1",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003453 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003453 end";
}

static HWTEST_F(ActsKhrgles310004TestSuite, TestCase_003454, Function | MediumTest | Level2)
{
    GTEST_LOG_(INFO) << "TestCase_003454 start";
    int argc = 3;
    const char *argv[3] = {
        ".",
        "--deqp-case="
        "KHR-GLES31.core.pixelstoragemo"
        "des.teximage3d.rgba32ui.16_16_4",
        "--deqp-archive-dir=/data/local/tmp/"
    };
    
    FuncRunResult result = RunTestKHRGLES(argc, argv);
    ActsKhrgles310004TestSuite::runResult.numPassed += result.numPassed;
    ActsKhrgles310004TestSuite::runResult.numFailed += result.numFailed;
    ActsKhrgles310004TestSuite::runResult.numNotSupported += result.numNotSupported;
    ActsKhrgles310004TestSuite::runResult.numWarnings += result.numWarnings;
    ActsKhrgles310004TestSuite::runResult.numWaived += result.numWaived;
    if (result.numNotSupported == 1) {
        GTEST_LOG_(INFO) << "TestCase_003454 notsupport!";
    } else if (result.isComplete) {
        EXPECT_TRUE(result.isComplete);
        EXPECT_TRUE(result.numPassed == 1);
    };
    GTEST_LOG_(INFO) << "TestCase_003454 end";
}
