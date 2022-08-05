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

import mediaLibrary from '@ohos.multimedia.mediaLibrary';
import featureAbility from '@ohos.ability.featureAbility'
import fileio from '@ohos.fileio';
import {describe, it, expect} from 'deccjsunit/index';

describe('fileAssetUriTestCallback.test.js', async function() {
    var context = featureAbility.getContext();
    console.info('MediaLibraryTest : getMediaLibrary IN');
    var media = mediaLibrary.getMediaLibrary(context);
    console.info('MediaLibraryTest : getMediaLibrary OUT');
    const fileKeyObj = mediaLibrary.FileKey;
    //======================== FILE BEGIN ==================================

    /**
   * @tc.number    : SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35
   * @tc.name      : close
   * @tc.desc      : asset close the type of video
   * @tc.size      : MEDIUM
   * @tc.type      : Function
   * @tc.level     : Level 0
   */
    it('SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35', 0, async function(done) {
        let asset;
        let fd;
        let fd1;
        try {
            let type = mediaLibrary.MediaType.IMAGE;
            let fetchOp = {
                selections : mediaLibrary.FileKey.MEDIA_TYPE + '= ?',
                selectionArgs : [ type.toString() ],
            };
            const fetchFileResult = await media.getFileAssets(fetchOp);
            expect(fetchFileResult != undefined).assertTrue();
            let firstObject = await fetchFileResult.getFirstObject();
            const id = firstObject.id;
            const uri = firstObject.uri;
            console.info('MediaLibraryTest : SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35  uri:'
                         + uri);
            const searchUri = uri.substr(0, uri.lastIndexOf('/') + 1) + id;
            console.info('MediaLibraryTest : SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35  searchUri:'
                         + searchUri);

            let serchfetchOp = {
                uri:searchUri.toString(),
                selections : mediaLibrary.FileKey.MEDIA_TYPE + '= ?',
                selectionArgs : [ type.toString()],
            };

            const result = await media.getFileAssets(serchfetchOp);
            console.info(
                'MediaLibraryTest : SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35  getFileAssets by uri:'
                + searchUri + ",result.getCount():" + result.getCount());
            asset = await result.getFirstObject();
            console.info('MediaLibraryTest : SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35  asset.uri:'
                         + asset.uri);
            expect(asset.uri == searchUri).assertTrue();
            fd = await asset.open('r');
            expect(fd > 0).assertTrue();
            console.info('MediaLibraryTest : SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35  fd:' + fd);
            asset.close(fd, async (error) => {
                fd1 = await asset.open('r');
                expect(fd1 > 0).assertTrue();
                console.info('MediaLibraryTest : SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35  fd1:'
                             + fd1);
                await asset.close(fd1);
                done();
            });
        } catch (error) {
            console.info(
                `MediaLibraryTest : SUB_MEDIA_MEDIALIBRARY_OPENANDCLOSE_ASSET_URI_CALLBACK_005_35 error:${error}`);
            expect(false).assertTrue();
            done();
        }
    });
    //======================== CLOSE BEGIN ================================
});