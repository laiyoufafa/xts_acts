/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
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

import bluetoothhostTest1 from './BRSetLocalName.test.js'
import bluetoothhostTest2 from './BRScanMode.test.js'
import bluetoothhostTest3 from './BRDiscovery.test.js'
import bluetoothhostTest4 from './BRSpp.test.js'
import bluetoothhostTest from './BRSwitch.test.js'
export default function testsuite() {
bluetoothhostTest1()
bluetoothhostTest2()
bluetoothhostTest3()
bluetoothhostTest4()
bluetoothhostTest()
}