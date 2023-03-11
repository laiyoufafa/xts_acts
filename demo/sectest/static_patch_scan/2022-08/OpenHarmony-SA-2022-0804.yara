/*  
  * Copyright (c) 2023 Huawei Device Co., Ltd.  
  *  
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

import "console"
import "elf"

rule OpenHarmony_SA_2022_0804
{
 meta:
   date="2023-03-08"
   openharmony_sa="OpenHarmony-SA-2022-0804"
   affected_files="libtel_sms_mms.z.so"
  
 strings:

   $fix="data length error, pduLen %{public}d  offset %{public}d"
   
 condition: 
   $fix and console.log("OpenHarmony-SA-2022-0804 testcase pass") 
 }

