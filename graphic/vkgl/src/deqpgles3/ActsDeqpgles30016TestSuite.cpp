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
#include <ctime>
#include "Deqpgles3BaseFunc.h"
#include "ActsDeqpgles30016TestSuite.h"

namespace OHOS {
    using namespace std;
    using namespace testing::ext;

    time_t ActsDeqpgles30016TestSuite::starttime;
    time_t ActsDeqpgles30016TestSuite::endtime;
    FuncRunResult ActsDeqpgles30016TestSuite::runResult;

    // Preset action of the test suite, which is executed before the first test case
    void ActsDeqpgles30016TestSuite::SetUpTestCase(void)
    {
        time(&starttime);
        RegistPackage();
        runResult.numPassed = 0;
        runResult.numFailed = 0;
        runResult.numNotSupported = 0;
        runResult.numWarnings = 0;
        runResult.numWaived = 0;
    }
    // Test suite cleanup action, which is executed after the last test case
    void ActsDeqpgles30016TestSuite::TearDownTestCase(void)
    {
        time(&endtime);
        printf("Test run totals --- Passed[%d]\n", runResult.numPassed);
        printf("Test run totals --- Failed[%d]\n", runResult.numFailed);
        printf("Test run totals --- Notsupport[%d]\n", runResult.numNotSupported);
        printf("Test run totals --- Warnings[%d]\n", runResult.numWarnings);
        printf("Test run totals --- Waved[%d]\n", runResult.numWaived);
        printf("testmain end --- COST TIME[%lld]\n", (endtime-starttime));
    }
    // Preset action of the test case
    void ActsDeqpgles30016TestSuite::SetUp()
    {
    }
    // Cleanup action of the test case
    void ActsDeqpgles30016TestSuite::TearDown()
    {
    }
}