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

rule OpenHarmony_SA_2023_0101
{
 meta:
   date="2023-02-13"
   openharmony_sa="OpenHarmony-SA-2023-0101"
   cve="CVE-2023-0035"
   affected_files="libsoftbus_client.z.so"//in 3.0.x, and "libdsoftbus_trans_ipc_proxy.z.so" in 3.0
  
 strings:

   $fix="write InterfaceToken failed!"
   
 condition: 
   $fix and console.log("OpenHarmony-SA-2023-0101 testcase pass") 
 }

