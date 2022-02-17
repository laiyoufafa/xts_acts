/**
 * Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import prompt from '@system.prompt';

export default {
  data: {
    title: 'World'
  },
  onShow(){
    // 通用属性
    var prop1 =  this.$element("prop1");
    var name1 = prop1.dataSet.name
    var prop2 =  this.$refs.prop2;
    var name2 = prop2.dataSet.name
    prompt.showToast({
      message: 'prop1--' + name1 + '\nprop2--' + name2
    });
  }
}