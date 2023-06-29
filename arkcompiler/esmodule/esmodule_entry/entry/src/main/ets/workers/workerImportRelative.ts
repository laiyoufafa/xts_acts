/**
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import { add } from '../test/test'
import worker from '@ohos.worker';

var workerPort = worker.workerPort;
workerPort.onmessage = function() {
  if (add(2, 6) == 8){
    console.log("ModuleTest relativePath");
    workerPort.postMessage("ModuleTest receive data from main thread");
  }
}