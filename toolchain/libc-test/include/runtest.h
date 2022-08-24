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
#ifndef TOOLCHAIN_RUNTEST_H
#define TOOLCHAIN_RUNTEST_H

#include <iostream>
#include <string>
#include <vector>

int t_setrlim(int r, long lim);
std::vector<std::string> GetFileNames(std::string path);

#endif  // TOOLCHAIN_LIBC_TEST_INCLUDE_RUNTEST_H_
