/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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

import {
  fileIO, FILE_CONTENT, prepareFile, nextFileName, describe, it, expect,
} from '../Common';

export default function fileIOStreamClose() {
describe('fileIO_fs_stream_close', function () {

  /**
   * @tc.number SUB_DF_FILEIO_STREAM_CLOSESYNC_0000
   * @tc.name fileIO_test_stream_close_sync_000
   * @tc.desc Test the closeSync() interface of class Stream.
   * Open a file stream, close file stream.
   * @tc.size MEDIUM
   * @tc.type Function
   * @tc.level Level 0
   * @tc.require
   */
  it('fileIO_test_stream_close_sync_000', 0, async function () {
    let fpath = await nextFileName('fileIO_test_stream_close_sync_000');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();

    try {
      let ss = fileIO.createStreamSync(fpath, 'r');
      expect(ss !== null).assertTrue();
      ss.closeSync();
      fileIO.unlinkSync(fpath);
    } catch (e) {
      console.log('fileIO_test_stream_close_sync_000 has failed for ' + e.message + ', code: ' + e.code);
      expect(false).assertTrue();
    }
  })

  /**
   * @tc.number SUB_DF_FILEIO_STREAM_CLOSESYNC_0100
   * @tc.name fileIO_test_stream_close_sync_001
   * @tc.desc Test the closeSync() interface of class Stream.
   * Invalid parameter, don't requrie any parameters.
   * @tc.size MEDIUM
   * @tc.type Function
   * @tc.level Level 3
   * @tc.require
   */
  it('fileIO_test_stream_close_sync_001', 0, async function () {
    let fpath = await nextFileName('fileIO_test_stream_close_sync_001');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();
    let ss = fileIO.createStreamSync(fpath, 'r');

    try {
      expect(ss !== null).assertTrue();
      ss.closeSync(1);
      expect(false).assertTrue();
    } catch (e) {
      ss.closeSync();
      fileIO.unlinkSync(fpath);
      console.log('fileIO_test_stream_close_sync_001 has failed for ' + e.message + ', code: ' + e.code);
      expect(e.code == 13900020 && e.message == 'Invalid argument').assertTrue();
    }
  })

  /**
   * @tc.number SUB_DF_FILEIO_STREAM_CLOSESYNC_0200
   * @tc.name fileIO_test_stream_close_sync_002
   * @tc.desc Test the closeSync() interface of class Stream.
   * The file stream has been closed.
   * @tc.size MEDIUM
   * @tc.type Function
   * @tc.level Level 3
   * @tc.require
   */
  it('fileIO_test_stream_close_sync_002', 0, async function () {
    let fpath = await nextFileName('fileIO_test_stream_close_sync_002');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();
    let ss = fileIO.createStreamSync(fpath, 'r');

    try {
      expect(ss !== null).assertTrue();
      ss.closeSync();
      ss.closeSync();
      expect(false).assertTrue();
    } catch (e) {
      fileIO.unlinkSync(fpath);
      console.log('fileIO_test_stream_close_sync_002 has failed for ' + e.message + ', code: ' + e.code);
      expect(e.code == 13900005 && e.message == 'I/O error').assertTrue();
    }
  })

  /**
   * @tc.number SUB_DF_FILEIO_STREAM_CLOSEASYNC_0000
   * @tc.name fileIO_test_stream_close_async_000
   * @tc.desc Test the close() interface of class Stream. Promise.
   * Open a file stream, close file stream.
   * @tc.size MEDIUM
   * @tc.type Function
   * @tc.level Level 1
   * @tc.require
   */
  it('fileIO_test_stream_close_async_000', 0, async function (done) {
    let fpath = await nextFileName('fileIO_test_stream_close_async_000');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();

    try {
      let ss = fileIO.createStreamSync(fpath, 'r');
      expect(ss !== null).assertTrue();
      await ss.close();
      fileIO.unlinkSync(fpath);
      done();
    } catch (e) {
      console.log('fileIO_test_stream_close_async_000 has failed for ' + e.message + ', code: ' + e.code);
      expect(false).assertTrue();
    }
  });

  /**
   * @tc.number SUB_DF_FILEIO_STREAM_CLOSEASYNC_0100
   * @tc.name fileIO_test_stream_close_async_001
   * @tc.desc Test the close() interface of class Stream. Callback.
   * Open a file stream, close file stream.
   * @tc.size MEDIUM
   * @tc.type Function
   * @tc.level Level 1
   * @tc.require
   */
  it('fileIO_test_stream_close_async_001', 0, async function (done) {
    let fpath = await nextFileName('fileIO_test_stream_close_async_001');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();

    try {
      let ss = fileIO.createStreamSync(fpath, 'r');
      expect(ss !== null).assertTrue();
      ss.close((err) => {
        if (err) {
          console.log('fileIO_test_stream_close_async_001 error package: ' + JSON.stringify(err));
          expect(false).assertTrue();
        }
        fileIO.unlinkSync(fpath);
      })
      done();
    } catch (e) {
      console.log('fileIO_test_stream_close_async_001 has failed for ' + e.message + ', code: ' + e.code);
      expect(false).assertTrue();
    }
  });

  /**
   * @tc.number SUB_DF_FILEIO_STREAM_CLOSEASYNC_0200
   * @tc.name fileIO_test_stream_close_async_002
   * @tc.desc Test the close() interface of class Stream. Promise.
   * The file stream has been closed.
   * @tc.size MEDIUM
   * @tc.type Function
   * @tc.level Level 3
   * @tc.require
   */
  it('fileIO_test_stream_close_async_002', 0, async function (done) {
    let fpath = await nextFileName('fileIO_test_stream_close_async_002');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();

    try {
      let ss = fileIO.createStreamSync(fpath, 'r');
      expect(ss !== null).assertTrue();
      await ss.close();
      await ss.close();
      expect(false).assertTrue();
    } catch (e) {
      fileIO.unlinkSync(fpath);
      console.log('fileIO_test_stream_close_async_002 has failed for ' + e.message + ', code: ' + e.code);
      expect(e.code == 13900005 && e.message == 'I/O error').assertTrue();
      done();
    }
  });

  /**
   * @tc.number SUB_DF_FILEIO_STREAM_CLOSEASYNC_0300
   * @tc.name fileIO_test_stream_close_async_003
   * @tc.desc Test the close() interface of class Stream. Promise.
   * Invalid parameter, don't requrie any parameters.
   * @tc.size MEDIUM
   * @tc.type Function
   * @tc.level Level 3
   * @tc.require
   */
  it('fileIO_test_stream_close_async_003', 0, async function (done) {
    let fpath = await nextFileName('fileIO_test_stream_close_async_003');
    expect(prepareFile(fpath, FILE_CONTENT)).assertTrue();

    try {
      let ss = fileIO.createStreamSync(fpath, 'r');
      expect(ss !== null).assertTrue();
      await ss.close(1);
      expect(false).assertTrue();
    } catch (e) {
      fileIO.unlinkSync(fpath);
      console.log('fileIO_test_stream_close_async_003 has failed for ' + e.message + ', code: ' + e.code);
      expect(e.code == 13900020 && e.message == 'Invalid argument').assertTrue();
      done();
    }
  });
})
}
