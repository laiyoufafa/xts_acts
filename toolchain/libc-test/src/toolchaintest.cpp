/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
#include <iostream>
#include <cstdlib>
#include <cstring>
#include <cerrno>
#include <ctime>
#include <cstdio>
#include <vector>
#include <csignal>
#include <unistd.h>
#include <dirent.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <sys/time.h>
#include <sys/resource.h>

#include "gtest/gtest.h"
#include "runtest.h"

using handler_type = void (*) (int);
using namespace std;
using namespace testing::ext;
using namespace testing;
namespace OHOS {
class toolchaintest : public ::testing::TestWithParam<string> {};

static string filepath = "/data/local/tmp/libc-test/src";
static vector<std::string> temp = runtest::GetFileNames(filepath);

volatile int t_status = 0;

static int h_sigCount = 0;
static void handler(int sig)
{
    (void)sig;
    h_sigCount++;
}

static int start(char *wrap, const char *argvs)
{
    int pid, space_size = 100*1024;

    pid = fork();
    if (pid == 0) {
        runtest::t_setrlim(RLIMIT_STACK, space_size);
        int exe = execl(argvs, "strptime", nullptr);
        printf("exe:%d %s exec failed: %s\n", exe, argvs, strerror(errno));
        exit(1);
    }
    return pid;
}

static int runTests(const char *argvs)
{
    char wrap[] = "";
    int timeoutsec = 5, timeout = 0;
    int status, pid;
    sigset_t set;

    sigemptyset(&set);
    sigaddset(&set, SIGCHLD);
    sigprocmask(SIG_BLOCK, &set, nullptr);
    handler_type retfunc = signal(SIGCHLD, handler);
    if (retfunc == SIG_ERR) {
        printf("signal triggering failed:%s\n", strerror(errno));
    }
    pid = start(wrap, argvs);
    if (pid == -1) {
        printf("%s fork failed: %s\n", argvs, strerror(errno));
        printf("FAIL %s [internal]\n", argvs);
        return -1;
    }
    struct timespec tp;
    tp.tv_sec = timeoutsec;
    tp.tv_nsec = 0;
    if (sigtimedwait(&set, nullptr, &tp) == -1) {
        if (errno == EAGAIN) {
            timeout = 1;
        } else {
            printf("%s sigtimedwait failed: %s\n", argvs, strerror(errno));
        }
        if (kill(pid, SIGKILL) == -1) {
            printf("%s kill failed: %s\n", argvs, strerror(errno));
        }
    }
    if (waitpid(pid, &status, 0) != pid) {
        printf("%s waitpid failed: %s\n", argvs, strerror(errno));
        printf("FAIL %s [internal]\n", argvs);
        return -1;
    }
    if (WIFEXITED(status)) {
        if (WEXITSTATUS(status) == 0) {
            return t_status;
        }
        printf("FAIL %s [status %d]\n", argvs, WEXITSTATUS(status));
    } else if (timeout) {
        printf("FAIL %s [timed out]\n", argvs);
    } else if (WIFSIGNALED(status)) {
        printf("FAIL %s [signal %s]\n", argvs, strsignal(WTERMSIG(status)));
    } else {
        printf("FAIL %s [unknown]\n", argvs);
    }
    return 1;
}


/**
 * @tc.name      : toolchaintest.LibcTest
 * @tc.desc      : start test
 * @tc.level     : Level 2
 */
HWTEST_P(toolchaintest, LibcTest, Function | MediumTest | Level3)
{
    int ret;
    string testName = GetParam();
    ret = runTests(testName.c_str());
    if (ret == 0) {
        EXPECT_EQ(0, ret) << "test  " << testName  << "  succeed" << endl;
    } else {
        EXPECT_EQ(1, ret) << "test  " << testName  << "  failed" << endl;
        EXPECT_EQ(-1, ret) << "test  " << testName  << "  failed" << endl;
    }
}
INSTANTIATE_TEST_CASE_P(libcTest, toolchaintest, testing::ValuesIn(temp.begin(), temp.end()));
} // namespace OHOS