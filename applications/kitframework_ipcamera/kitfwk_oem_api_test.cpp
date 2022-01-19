# Copyright (c) 2021 Huawei Device Co., Ltd.
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

import("//build/lite/config/component/lite_component.gni")
import("//build/lite/config/hap_pack.gni")
import("//build/lite/config/subsystem/aafwk/config.gni")
import("//test/xts/tools/lite/build/suite_lite.gni")

executable("ActsKitFwkApiTest") {
  sources = [ "kitfwk_oem_api_test.cpp" ]

  include_dirs = [
    "//third_party/googletest/googletest/include",
    "//third_party/cJSON",
    "//third_party/mbedtls/include/",
    "//third_party/bounds_checking_function/include/",
    "//base/startup/syspara_lite/interfaces/kits/",

    # dir for oem_auth_config.h and oem_auth_result_storage.h
    "//vendor/ingenic/smartpen/adapter/kitframework/include/",
  ]

  deps = [
    "//base/startup/syspara_lite/frameworks/token:token_shared",
    "//build/lite/config/component/cJSON:cjson_shared",
    "//test/xts/tools/lite/hcpptest:hcpptest_main",
    "//third_party/bounds_checking_function:libsec_shared",
    "//third_party/mbedtls:mbedtls_shared",

    # dir for oem_auth_config.a and oem_auth_result_storage.a
    "//vendor/ingenic/smartpen/adapter/kitframework:oem_auth_config",
    "//vendor/ingenic/smartpen/adapter/kitframework:oem_auth_result_storage",
  ]

  output_extension = "bin"

  # un-comment this Macro for token-persist-test
  # defines = [ "TOKEN_PERSIST_TEST" ]
}
