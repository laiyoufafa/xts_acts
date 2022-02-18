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

import mediaLibrary from '@ohos.multimedia.medialibrary';
import featureAbility from '@ohos.ability.featureAbility'

import { describe, beforeAll, beforeEach, afterEach, afterAll, it, expect } from 'deccjsunit/index'
let fileKeyObj = mediaLibrary.FileKey
let mediaType = mediaLibrary.MediaType.IMAGE;
let AlbumNoArgsfetchOp = {
    selections: "",
    selectionArgs: [],
}
let AlbumHasArgsfetchOp = {
    selections: fileKeyObj.MEDIA_TYPE + "= ?",
    selectionArgs: [mediaType.toString()],
}
let type1 = mediaLibrary.MediaType.IMAGE
let fileHasArgsfetchOp = {
    selections: fileKeyObj.MEDIA_TYPE + "= ?",
    selectionArgs: [type1.toString()],
}
let fileNoArgsfetchOp = {
    selections: "",
    selectionArgs: [],
}

describe('album.callback.test.js', function () {
    let path = "Pictures/"
    var context = featureAbility.getContext();
    console.info('MediaLibraryTest : getMediaLibrary IN');
    var media = mediaLibrary.getMediaLibrary(context);
    console.info('MediaLibraryTest : getMediaLibrary OUT');
    var album;
    beforeAll(function () {
        onsole.info('Album Callback MediaLibraryTest: beforeAll： Prerequisites at the test suite level, which are executed before the test suite is executed.');

    })

    beforeEach(function () {
        console.info('Album Callback MediaLibraryTest: beforeEach：Prerequisites at the test case level, which are executed before each test case is executed.');

    })
    afterEach(function () {
        console.info('Album Callback MediaLibraryTest: afterEach： Test case-level clearance conditions, which are executed after each test case is executed.');

    })
    afterAll(function () {
        console.info('Album Callback MediaLibraryTest: afterAll：  Test suite-level cleanup condition, which is executed after the test suite is executed');

    })

    /**
     * @tc.number    : SUB_MEDIA_MEDIALIBRARY_GETALBUM_CALLBACK_001
     * @tc.name      : Get Album by AlbumNoArgsfetchOp
     * @tc.desc      : Get Album by AlbumNoArgsfetchOp
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */

    it('SUB_MEDIA_MEDIALIBRARY_GETALBUM_CALLBACK_001', 0, async function (done) {
        media.getAlbums(AlbumNoArgsfetchOp, getAlbumsCallBack);
        done();
    });

    /**
     * @tc.number    : SUB_MEDIA_MEDIALIBRARY_GETALBUM_CALLBACK_002
     * @tc.name      : Get Album by AlbumHasArgsfetchOp
     * @tc.desc      : Get Album by AlbumHasArgsfetchOp
     * @tc.size      : MEDIUM
     * @tc.type      : Function
     * @tc.level     : Level 0
     */

    it('SUB_MEDIA_MEDIALIBRARY_GETALBUM_CALLBACK_002', 0, async function (done) {
        media.getAlbums(AlbumHasArgsfetchOp, getAlbumsCallBack);
        done();
    });


    function getAllObjectInfo(data) {
        if (data != undefined) {
            console.info('MediaLibraryTest : ALBUM_CALLBACK id is ' + data.id);
            console.info('MediaLibraryTest : ALBUM_CALLBACK uri is ' + data.uri);
            console.info('MediaLibraryTest : ALBUM_CALLBACK displayName is ' + data.displayName);
            console.info('MediaLibraryTest : ALBUM_CALLBACK mediaType is ' + data.title);
            console.info('MediaLibraryTest : ALBUM_CALLBACK relativePath is ' + data.relativePath);
        } else {
            console.info('MediaLibraryTest : ALBUM_CALLBACK getAllObjectInfo no album');
        }
    }

    function getAlbumsNoArgsCallBack(err, albumList) {
        if (albumList != undefined) {
            console.info('MediaLibraryTest : ALBUM_CALLBACK getAlbumsCallBack success');
            done();
        } else {
            console.info('MediaLibraryTest : ASSET_CALLBACK getAlbumsCallBack Unsuccessfull ' + err);
            console.info('MediaLibraryTest : ASSET_CALLBACK getAlbumsCallBack : FAIL');
            done();
        }

    }

    function getAlbumsCallBack(err, albumList) {
        if (albumList != undefined) {
            album = albumList[0];
            console.info('MediaLibraryTest : ALBUM_CALLBACK getAlbumsCallBack album.albumName = ' + album.albumName);
            album.albumName = "helloCallBack";
            album.commitModify(commitModifyCallBack);
            album.getFileAssets(fileNoArgsfetchOp, getFileAssetsCallBack);
            album.getFileAssets(fileHasArgsfetchOp, getFileAssetsCallBack);
            done();
        } else {
            console.info('MediaLibraryTest : ASSET_CALLBACK getAlbumsCallBack Unsuccessfull ' + err);
            console.info('MediaLibraryTest : ASSET_CALLBACK getAlbumsCallBack : FAIL');
            done();
        }

    }

    function commitModifyCallBack(err, data) {
        if (data != undefined) {
            console.info('MediaLibraryTest : ALBUM_CALLBACK Modify album.albumName = ' + album.albumName);
            done();
        } else {
            console.info('MediaLibraryTest : ASSET_CALLBACK Modify Unsuccessfull ' + err);
            console.info('MediaLibraryTest : ASSET_CALLBACK Modify : FAIL');
            done();
        }

    }

    function getFileAssetsCallBack(err, albumFetchFileResult) {
        if (albumFetchFileResult != undefined) {
            console.info('MediaLibraryTest : ALBUM_CALLBACK getFileAssetsCallBack success');
            albumFetchFileResult.getAllObject((err1, data1) => {
                if (data1 != undefined) {
                    data1.forEach(getAllObjectInfo);
                    console.info('MediaLibraryTest : getFileAssetsCallBack getAllObject :PASS');
                    done();
                }
                console.info('MediaLibraryTest : getFileAssetsCallBack getFileAssets :No data');
                done();
            });
            done();
        } else {
            console.info('MediaLibraryTest : ASSET_CALLBACK getFileAssetsCallBack Unsuccessfull ' + err);
            console.info('MediaLibraryTest : ASSET_CALLBACK getFileAssetsCallBack : FAIL');
            done();
        }

    }
})