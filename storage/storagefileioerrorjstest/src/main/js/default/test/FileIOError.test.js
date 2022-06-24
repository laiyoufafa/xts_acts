/*
 * Copyright (C) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fileio from '@ohos.fileio'
import {
  describe,
  it,
  expect
}
from 'deccjsunit/index'
import {
  FILE_CONTENT,
  prepareFile,
  fileName,
  nextFileName,
  isIntNum,
  isInclude
}
from './Common'

describe('FileIOError', function () {

  /**
   * @tc.number SUB_STORAGE_FileIo_test_error_0000
   * @tc.name fileio_test_error_000
   * @tc.desc Function of API, Delete directories with files
   */
  it('fileio_test_error_000', 0, async function (done) {
    let dpath = await fileName('fileio_test_error_000d');
    let fpath = dpath + '/fileio_test_error_000f';
    fileio.mkdirSync(dpath);
    expect(prepareFile(fpath, 'hello')).assertTrue();
    try {
      let fd = fileio.openSync(dpath);
      expect(isIntNum(fd)).assertTrue();
      fileio.rmdirSync(dpath);
    }  
    catch (err) {
      console.info('fileio_test_error_000 has failed for ' + err);
      expect(isInclude(err.message, 'Directory not empty')).assertTrue();
      fileio.unlinkSync(fpath);
      fileio.rmdirSync(dpath);
      done();
    }
  });

  /**
   * @tc.number SUB_STORAGE_FileIo_test_error_0100
   * @tc.name fileio_test_error_001
   * @tc.desc Function of API, delete file
   */
  it('fileio_test_error_001', 0, async function (done) {
    let fpath = await fileName('fileio_test_error_001f');
    expect(prepareFile(fpath, 'hello')).assertTrue();
    try {
      let fd = fileio.openSync(fpath);
      expect(isIntNum(fd)).assertTrue();
      fileio.rmdirSync(fpath);
    } 
    catch (err) {
      console.info('fileio_test_error_001 has failed for ' + err);
      expect(isInclude(err.message, 'Not a directory')).assertTrue();
      fileio.unlinkSync(fpath);
      done();
    }
  });

  /**
   * @tc.number SUB_STORAGE_FileIo_test_error_0200
   * @tc.name fileio_test_error_002
   * @tc.desc Function of API, flags=0o100. missing mode parameter.
   */
  it('fileio_test_error_002', 0, async function (done) {
    let fpath = await nextFileName('fileio_test_error_002');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();
    try {
      fileio.openSync(fpath, 0o100);
    } 
    catch (err) {
      console.info('fileio_test_error_002 has failed for ' + err);
      expect(isInclude(err.message, 'called with O_CREAT/O_TMPFILE but no mode')).assertTrue();
      fileio.unlinkSync(fpath);
      done();
    }
  });

  /**
   * @tc.number SUB_STORAGE_FileIO_OpenSync_0300
   * @tc.name fileio_test_error_003
   * @tc.desc Function of API,  flags=0o302. The test file is exist.
   */
  it('fileio_test_error_003', 0, async function (done) {
    let fpath = await nextFileName('fileio_test_error_003');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();
    try {
      fileio.openSync(fpath, 0o302, 0o666);
    } 
    catch (err) {
      console.info('fileio_test_error_003 has failed for ' + err);
      expect(isInclude(err.message, 'File exists')).assertTrue();
      fileio.unlinkSync(fpath);
      done();
    }
  });

  /**
   * @tc.number SUB_STORAGE_FileIO_OpenSync_0400
   * @tc.name fileio_test_error_004
   * @tc.desc Function of API, flags=0o400000. Symbolic link loop.
   */
  it('fileio_test_error_004', 0, async function (done) {
    let fpath = await nextFileName('fileio_test_error_004');
    let ffpath = fpath + 'aaaa';
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();
    try {
      fileio.symlinkSync(fpath, ffpath);
      fileio.openSync(ffpath, 0o400000);
    } 
    catch (err) {
      console.info('fileio_test_error_004 has failed for ' + err);
      expect(isInclude(err.message, 'Symbolic link loop') || 
        isInclude(err.message, 'Too many symbolic links encountered')).assertTrue();
      fileio.unlinkSync(fpath);
      fileio.unlinkSync(ffpath);
      done();
    }
  });

  /**
   * @tc.number SUB_STORAGE_FileIO_OpenSync_0500
   * @tc.name fileio_test_error_005
   * @tc.desc Function of API, flags=0o200000. Not a directory.
   */
  it('fileio_test_error_005', 0, async function (done) {
    let fpath = await nextFileName('fileio_test_error_005');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();
    try {
      fileio.openSync(fpath, 0o200000, 0o666);
    } 
    catch (err) {
      console.info('fileio_test_error_005 has failed for ' + err);
      expect(isInclude(err.message, 'Not a directory')).assertTrue();
      fileio.unlinkSync(fpath);
      done();
    }
  });
});
