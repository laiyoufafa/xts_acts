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

import fileIOOpen from './members/open.test.js'
import fileIORead from './members/read.test.js'
import fileIOStat from './members/stat.test.js'
import fileIOTruncate from './members/truncate.test.js'
import fileIOWrite from './members/write.test.js'
export default function testsuite() {
    fileIOOpen()
    fileIORead()
    fileIOStat()
    fileIOTruncate()
    fileIOWrite()
}