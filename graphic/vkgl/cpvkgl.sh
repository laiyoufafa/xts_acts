#!/bin/bash

# Copyright (C) 2021 Huawei Device Co., Ltd.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -e

mkdir -p  "suites/acts/testcases/vkgldata"
cp -rf "../../third_party/VK-GL-CTS/external/openglcts/data" "suites/acts/testcases/vkgldata"
cp -rf "common/common/libdeqp_ohos_platform.z.so" "suites/acts/testcases/vkgldata"
cp -rf "common/common/librosen_context.z.so" "suites/acts/testcases/vkgldata"
cp -rf "graphic/graphic_standard/libdeqp_SPIRV.z.so" "suites/acts/testcases/vkgldata"
cp -rf "graphic/graphic_standard/libdeqp_SPVRemapper.z.so" "suites/acts/testcases/vkgldata"