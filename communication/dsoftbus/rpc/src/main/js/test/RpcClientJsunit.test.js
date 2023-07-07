/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import rpc from '@ohos.rpc';
import fileio from '@ohos.fileio';
import FA from '@ohos.ability.featureAbility';
import {describe, expect, beforeAll, it} from '@ohos/hypium';
let gIRemoteObject = null;
export default function actsRpcClientJsTest() {
    describe('ActsRpcClientJsTest', function(){
        console.info("-----------------------SUB_Softbus_IPC_Compatibility_MessageParce_Test is starting-----------------------");
        beforeAll(async function () {
            console.info('beforeAll called');
            gIRemoteObject = new Stub("rpcTestAbility");
            return gIRemoteObject;
        });

        beforeEach(async function (){
            console.info('beforeEach called');
        });

        afterEach(async function (){
            console.info('afterEach called');
        });

        afterAll(async function (){
            console.info('afterAll called');
        });

        const K = 1024;
        const M = 1024*1024;
        const G = 1024*1024*1024;
        const CODE_WRITE_BYTEARRAY = 1;
        const CODE_SAME_PROCESS = 1;
        const CODE_WRITE_INTARRAY = 2;
        const CODE_WRITE_FLOATARRAY = 3;
        const CODE_WRITE_SHORT = 4;
        const CODE_WRITE_LONG = 5;
        const CODE_WRITE_DOUBLE = 6;
        const CODE_WRITE_BOOLEAN = 7;
        const CODE_WRITE_CHAR = 8;
        const CODE_WRITE_STRING = 9;
        const CODE_WRITE_BYTE = 10;
        const CODE_WRITE_INT = 11;
        const CODE_WRITE_FLOAT = 12;
        const CODE_WRITE_RAWDATA = 13;
        const CODE_WRITE_REMOTEOBJECT = 14;
        const CODE_WRITE_SEQUENCEABLE = 15;
        const CODE_WRITE_NOEXCEPTION = 16;
        const CODE_WRITE_SEQUENCEABLEARRAY = 17;
        const CODE_WRITE_REMOTEOBJECTARRAY = 18;
        const CODE_ALL_TYPE = 20;
        const CODE_ALL_ARRAY_TYPE = 21;
        const CODE_IPCSKELETON_INT = 22;
        const CODE_WRITESEQUENCEABLE = 23
        const CODE_WRITE_SHORT_MULTI = 24;
        const CODE_WRITE_BYTE_MULTI = 25;
        const CODE_WRITE_INT_MULTI = 26;
        const CODE_TRANSACTION = 27;
        const CODE_IPCSKELETON = 28;
        const CODE_FILESDIR = 29;
        const CODE_WRITE_REMOTEOBJECTARRAY_1 = 30;
        const CODE_WRITE_REMOTEOBJECTARRAY_2 = 31;
        const CODE_ONREMOTEMESSAGE_OR_ONREMOTE = 32;
        const CODE_ONREMOTEMESSAGEREQUEST = 33;
        const CODE_INTERFACETOKEN = 34;
        const CODE_WRITE_SHORTARRAY = 35;
        const CODE_WRITE_LONGARRAY = 36;
        const CODE_WRITE_DOUBLEARRAY = 37;
        const CODE_WRITE_BOOLEANARRAY = 38;
        const CODE_WRITE_CHARARRAY = 39;
        const CODE_WRITE_STRINGARRAY = 40;
        
        function sleep(numberMillis)
        {
            let now = new Date();
            let exitTime = now.getTime() + numberMillis;
            while (true) {
                now = new Date();
                if (now.getTime() > exitTime)
                    return;
            }
        }

        class TestRemoteObject extends rpc.RemoteObject {
            constructor(descriptor) {
                super(descriptor);
            }
            asObject(){
                return this;
            }
        }

        class TestProxy {
            remote = rpc.RemoteObject;
            constructor(remote) {
                this.remote = remote;
                console.info("test remote")
            }
            asObject() {
                console.info("server remote")
                return this.remote;
            }
        }

        class MyDeathRecipient {
            constructor(gIRemoteObject, done) {
                this.gIRemoteObject = gIRemoteObject;
                this.done = done;
            }

            onRemoteDied() {
                console.info("server died");
                expect(this.proxy.removeDeathRecipient(this, 0)).assertTrue();
                let _done = this.done;
                 _done();
                sleep(1000);
            }
        }

        class MyregisterDeathRecipient {
            constructor(gIRemoteObject, done) {
                this.gIRemoteObject = gIRemoteObject;
                this.done = done;
            }
 
            onRemoteDied() {
                console.info("server died");
                expect(this.proxy.unregisterDeathRecipient(this, 0)).assertTrue();
                let _done = this.done;
                _done();
                sleep(1000);
            }
        }

        class Stub extends rpc.RemoteObject {
            constructor(descriptor) {
                super(descriptor);
            }
            onRemoteRequest(code, data, reply, option) {
                try{
                    console.info("onRemoteRequest: " + code);
                    if (code === 32){
                        console.info("case 32 start");
                        let tmp1 = data.readString();
                        let result =  reply.writeString("onRemoteRequest invoking");
                        return true;
                    } else if (code === 33){
                        console.info("case 33 start");
                        let tmp1 = data.readString();
                        let result =  reply.writeString(tmp1);
                        return true;
                    }else {
                        console.error("default case " + code);
                        return super.onRemoteRequest(code, data, reply, option);
                    };
                } catch (error) {
                    console.info("onRemoteRequest: " + error);
                }
                return false
            }
            onRemoteMessageRequest(code, data, reply, option) {
                try{
                    console.info("onRemoteMessageRequest: " + code);
                    switch(code) {
                        case 1:
                        {
                            console.info("case 1 start");
                            let tmp1 = data.readByteArray();
                            let result =  reply.writeByteArray(tmp1);
                            return true;
                        }
                        case 2:
                        {
                            console.info("case 2 start");
                            let tmp1 = data.readIntArray();
                            let result =  reply.writeIntArray(tmp1);
                            return true;
                        }
                        case 3:
                        {
                            console.info("case 3 start");
                            let tmp1 = data.readFloatArray();
                            let result =  reply.writeFloatArray(tmp1);
                            return true
                        }
                        case 4:
                        {
                            console.info("case 4 start");
                            let tmp1 = data.readShort();
                            let result =  reply.writeShort(tmp1);
                            return true
                        }
                        case 5:
                        {
                            console.info("case 5 start");
                            let tmp1 = data.readLong();
                            let result =  reply.writeLong(tmp1);
                            return true
                        }
                        case 6:
                        {
                            console.info("case 6 start");
                            let tmp1 = data.readDouble();
                            let result =  reply.writeDouble(tmp1);
                            return true
                        }
                        case 7:
                        {
                            console.info("case 7 start");
                            let tmp1 = data.readBoolean();
                            let result =  reply.writeBoolean(tmp1);
                            return true
                        }
                        case 8:
                        {
                            console.info("case 8 start");
                            let tmp1 = data.readChar();
                            let result =  reply.writeChar(tmp1);
                            return true
                        }
                        case 9:
                        {
                            console.info("case 9 start");
                            let tmp1 = data.readString();
                            let result =  reply.writeString(tmp1);
                            return true
                        }
                        case 10:
                        {
                            console.info("case 10 start");
                            let tmp1 = data.readByte();
                            let result =  reply.writeByte(tmp1);
                            return true
                        }
                        case 11:
                        {
                            console.info("case 11 start");
                            let tmp1 = data.readInt();
                            let result =  reply.writeInt(tmp1);
                            return true
                        }
                        case 12:
                        {
                            console.info("case 12 start");
                            let tmp1 = data.readFloat();
                            let result =  reply.writeFloat(tmp1);
                            return true
                        }
                        case 13:
                        {
                            console.info("case 13 start");
                            let size = data.readInt();
                            let tmp = data.readRawData(size);
                            let size1 = reply.writeInt(size);
                            let result = reply.writeRawData(tmp, tmp.length);
                            return true
                        }
                        case 14:
                        {
                            console.info("case 14 start");
                            let listener = data.readRemoteObject();
                            let num = data.readInt();
                            let str = data.readString();
                            let option2 = new rpc.MessageOption();
                            let data2 = rpc.MessageParcel.create();
                            let reply2 = rpc.MessageParcel.create();
                            data2.writeInt(num);
                            data2.writeString(str);
                            listener.sendRequest(1, data2, reply2, option2)
                                .then(function(result) {
                                    console.info("14 send request done, error code: " + result.errCode );
                                })
                                .catch(function(e) {
                                    console.error("14 send request got exception: " + e);
                                })
                                .finally(() => {
                                    data2.reclaim();
                                    reply2.reclaim();
                                    console.info("case 14 test done");
                                })
                            reply.writeNoException();
                            return true
                        }
                        case 15:
                        {
                            console.info("case 15 start");
                            let s = new MySequenceable(null, null);
                            let tmp1 = data.readParcelable(s);
                            let result =  reply.writeParcelable(s);
                            return true
                        }
                        case 16:
                        {
                            console.info("case 16 start");
                            data.readException();
                            let tmp = data.readInt();
                            reply.writeNoException();
                            let result = reply.writeInt(tmp);
                            return true
                        }
                        case 17:
                        {
                            console.info("case 17 start");
                            let s = [new MySequenceable(null, null), new MySequenceable(null, null),
                                new MySequenceable(null, null)];
                            data.readParcelableArray(s);
                            let result =  reply.writeParcelableArray(s);
                            return true
                        }
                        case 18:
                        {
                            console.info("case 18 start");
                            let listeners = data.readRemoteObjectArray();
                            for (let i = 0; i < listeners.length; i++) {
                                let option2 = new rpc.MessageOption();
                                let data2 = rpc.MessageParcel.create();
                                let reply2 = rpc.MessageParcel.create();
                                listeners[i].sendRequest(1, data2, reply2, option2)
                                    .then(function(result) {
                                        console.info("18 send request done, error code: " + result.errCode + ", index: " + i);
                                    })
                                    .catch(function(e) {
                                        console.error("18 send request got exception: " + e);
                                    })
                                    .finally(() => {
                                        data2.reclaim();
                                        reply2.reclaim();
                                        console.info("case 18 test done");
                                    })
                            }
                            return true
                        }
                        case 19:
                        {
                            console.info("case 19 start");
                            let tmp1 = data.readDoubleArray();
                            let result =  reply.writeDoubleArray(tmp1);
                            return true
                        }
        
                        case 20:
                        {
                            console.info("case 20 start");
                            let tmp1 = data.readByte();
                            let tmp2 = data.readShort();
                            let tmp3 = data.readInt();
                            let tmp4 = data.readLong();
                            let tmp5 = data.readFloat();
                            let tmp6 = data.readDouble();
                            let tmp7 = data.readBoolean();
                            let tmp8 = data.readChar();
                            let tmp9 = data.readString();
                            let s = new MySequenceable(null, null);
                            let tmp10 = data.readParcelable(s);
                            let result1 =  reply.writeByte(tmp1);
                            let result2 =  reply.writeShort(tmp2);
                            let result3 =  reply.writeInt(tmp3);
                            let result4 =  reply.writeLong(tmp4);
                            let result5 =  reply.writeFloat(tmp5);
                            let result6 =  reply.writeDouble(tmp6);
                            let result7 =  reply.writeBoolean(tmp7);
                            let result8 =  reply.writeChar(tmp8);
                            let result9 =  reply.writeString(tmp9);
                            let result10 =  reply.writeParcelable(s);
                            return true
                        }
                        case 21:
                        {
                            console.info("case 21 start");
                            let tmp1 = data.readByteArray();
                            let tmp2 = data.readShortArray();
                            let tmp3 = data.readIntArray();
                            let tmp4 = data.readLongArray();
                            let tmp5 = data.readFloatArray();
                            let tmp6 = data.readDoubleArray();
                            let tmp7 = data.readBooleanArray();
                            let tmp8 = data.readCharArray();
                            let tmp9 = data.readStringArray();
                            let s = [new MySequenceable(null, null), new MySequenceable(null, null),
                                new MySequenceable(null, null)];
                            let tmp10 = data.readParcelableArray(s);
                            let result1 =  reply.writeByteArray(tmp1);
                            let result2 =  reply.writeShortArray(tmp2);
                            let result3 =  reply.writeIntArray(tmp3);
                            let result4 =  reply.writeLongArray(tmp4);
                            let result5 =  reply.writeFloatArray(tmp5);
                            let result6 =  reply.writeDoubleArray(tmp6);
                            let result7 =  reply.writeBooleanArray(tmp7);
                            let result8 =  reply.writeCharArray(tmp8);
                            let result9 =  reply.writeStringArray(tmp9);
                            let result10 =  reply.writeParcelableArray(s);
                            return true
                        }
                        case 22:
                        {
                            console.info("case 22 start");
                            let callingPid = rpc.IPCSkeleton.getCallingPid();
                            let callingUid = rpc.IPCSkeleton.getCallingUid();
                            reply.writeNoException();
                            reply.writeInt(callingPid);
                            reply.writeInt(callingUid);
                            reply.writeInt(this.getCallingPid());
                            reply.writeInt(this.getCallingUid());
                            let id = rpc.IPCSkeleton.resetCallingIdentity();
                            rpc.IPCSkeleton.setCallingIdentity(id);
                            reply.writeInt(rpc.IPCSkeleton.getCallingPid());
                            reply.writeInt(rpc.IPCSkeleton.getCallingUid());
                            reply.writeInt(rpc.IPCSkeleton.flushCommands(this));
                            return true;
                        }
                        case 23:
                        {
                            console.info("case 23 start");
                            let s = new MySequenceable(null, null);
                            let tmp1 = data.readParcelable(s);
                            let result =  reply.writeParcelable(s);
                            return true;
                        }
                        case 24:
                        {
                            console.info("case 24 start");
                            let tmp1 = data.readShort();
                            let tmp2 = data.readShort();
                            let tmp3 = data.readShort();
                            let tmp4 = data.readShort();
                            let tmp5 = data.readShort();
                            let result1 =  reply.writeShort(tmp1);
                            let result2 =  reply.writeShort(tmp2);
                            let result3 =  reply.writeShort(tmp3);
                            let result4 =  reply.writeShort(tmp4);
                            let result5 =  reply.writeShort(tmp5);
                            return true
                        }
                        case 25:
                        {
                            console.info("case 25 start");
                            let tmp1 = data.readByte();
                            let tmp2 = data.readByte();
                            let tmp3 = data.readByte();
                            let tmp4 = data.readByte();
                            let tmp5 = data.readByte();
                            let result1 =  reply.writeByte(tmp1);
                            let result2 =  reply.writeByte(tmp2);
                            let result3 =  reply.writeByte(tmp3);
                            let result4 =  reply.writeByte(tmp4);
                            let result5 =  reply.writeByte(tmp5);
                            return true
                        }
                        case 26:
                        {
                            console.info("case 26 start");
                            let tmp1 = data.readInt();
                            let tmp2 = data.readInt();
                            let tmp3 = data.readInt();
                            let tmp4 = data.readInt();
                            let tmp5 = data.readInt();
                            let result1 =  reply.writeInt(tmp1);
                            let result2 =  reply.writeInt(tmp2);
                            let result3 =  reply.writeInt(tmp3);
                            let result4 =  reply.writeInt(tmp4);
                            let result5 =  reply.writeInt(tmp5);
                            return true
                        }
                        case 28:
                        {
                            console.info("case 28 start");
                            let callingPid = rpc.IPCSkeleton.getCallingPid();
                            let callingUid = rpc.IPCSkeleton.getCallingUid();
                            let callingDeviceID = rpc.IPCSkeleton.getCallingDeviceID();
                            let localDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
                            let isLocalCalling = rpc.IPCSkeleton.isLocalCalling();
                            reply.writeNoException();
                            reply.writeInt(callingPid);
                            reply.writeInt(callingUid);
                            reply.writeString(callingDeviceID);
                            reply.writeString(localDeviceID);
                            reply.writeBoolean(isLocalCalling);
                            reply.writeInt(this.getCallingPid());
                            reply.writeInt(this.getCallingUid());
                            let id = rpc.IPCSkeleton.resetCallingIdentity();
                            rpc.IPCSkeleton.setCallingIdentity(id);
                            reply.writeInt(rpc.IPCSkeleton.getCallingPid());
                            reply.writeInt(rpc.IPCSkeleton.getCallingUid());
                            reply.writeInt(rpc.IPCSkeleton.flushCommands(this));
                            return true;
                        }
                        case 29:
                        {
                            console.info("case 29 starts");
                            let bytesWr = data.readInt();
                            let fd = data.readFileDescriptor();
                            reply.writeFileDescriptor(fd);
                            fileio.writeSync(fd, "HELLO RPC", {position: bytesWr + 1});
                            reply.writeFileDescriptor(fd);
                            rpc.MessageSequence.closeFileDescriptor(fd)
                            return true
                        }
                        case 30:
                        {
                            console.info("case 30 start");
                            let listeners = data.readRemoteObjectArray();
                            let num = data.readInt();
                            let str = data.readString();
                            for (let i = 0; i < listeners.length; i++) {
                                let option2 = new rpc.MessageOption();
                                let data2 = rpc.MessageParcel.create();
                                let reply2 = rpc.MessageParcel.create();
                                data2.writeInt(num);
                                data2.writeString(str);
                                listeners[i].sendRequest(1, data2, reply2, option2)
                                    .then(function(result) {
                                        console.info("30 send request done, error code: " + result.errCode + ", index: " + i);
                                    })
                                    .catch(function(e) {
                                        console.error("30 send request got exception: " + e);
                                    })
                                    .finally(() => {
                                        data2.reclaim();
                                        reply2.reclaim();
                                        console.info("case 30 test done");
                                    })
                            }
                            reply.writeNoException();
                            return true
                        }
        
                        case 31:
                        {
                            console.info("case 31 start");
                            let listeners = data.readRemoteObjectArray();
                            let num = data.readInt();
                            let str = data.readString();
                            console.info("31 num: " + num);
                            console.info("31 str: " + str);
                            for (let i = 0; i < listeners.length; i++) {
                                let option2 = new rpc.MessageOption();
                                let data2 = rpc.MessageParcel.create();
                                let reply2 = rpc.MessageParcel.create();
                                data2.writeInt(num);
                                data2.writeString(str);
                                listeners[i].sendRequest(1, data2, reply2, option2)
                                    .then(function(result) {
                                        console.info("31 send request done, error code: " + result.errCode + ", index: " + i);
                                    })
                                    .catch(function(e) {
                                        console.error("31 send request got exception: " + e);
                                    })
                                    .finally(() => {
                                        data2.reclaim();
                                        reply2.reclaim();
                                        console.info("case 31 test done");
                                    })
                            }
                            reply.writeNoException();
                            return true;
                        }
                        case 32:
                        {
                            console.info("case 32 start");
                            let tmp1 = data.readString();
                            let result =  reply.writeString("onRemoteMessageRequest invoking");
                            return true;
                        }
                        case 34:
                        {
                            console.info("case 34 start");
                            let tmp = data.readInterfaceToken();
                            let result =  reply.writeInterfaceToken(tmp);
                            return true
                        }
                        case 35:
                        {
                            console.info("case 35 start");
                            let tmp1 = data.readShortArray();
                            let result =  reply.writeShortArray(tmp1);
                            return true
                        }
                        case 36:
                        {
                            console.info("case 36 start");
                            let tmp1 = data.readLongArray();
                            let result =  reply.writeLongArray(tmp1);
                            return true
                        }
                        case 37:
                            {
                                console.info("case 37 start");
                                let tmp1 = data.readDoubleArray();
                                let result =  reply.writeDoubleArray(tmp1);
                                return true
                            }
                        case 38:
                            {
                                console.info("case 38 start");
                                let tmp1 = data.readBooleanArray();
                                let result =  reply.writeBooleanArray(tmp1);
                                return true
                            }
                        case 39:
                            {
                                console.info("case 39 start");
                                let tmp1 = data.readCharArray();
                                let result =  reply.writeCharArray(tmp1);
                                return true
                            }
                        case 40:
                            {
                                console.info("case 40 start");
                                let tmp1 = data.readStringArray();
                                let result =  reply.writeStringArray(tmp1);
                                return true
                            }
                        default:
                            this.onRemoteRequest(code, data, reply, option);
                    }
                } catch (error) {
                    console.info("onRemoteMessageRequest: " + error);
                }
                return false
            }
        }        

        class TestAbilityStub extends rpc.RemoteObject {
            constructor(descriptor) {
                super(descriptor);
            }

            onRemoteRequest(code, data, reply, option) {
                console.info("TestAbilityStub: onRemoteRequest called, code: " + code);
                let descriptor = data.readInterfaceToken();
                if (descriptor !== "TestAbilityStub") {
                    console.error("received unknown descriptor: " + descriptor);
                    return false
                }
                switch (code) {
                    case 1:
                    {
                        let tmp1 = data.readByte();
                        let tmp2 = data.readShort();
                        let tmp3 = data.readInt();
                        let tmp4 = data.readLong();
                        let tmp5 = data.readFloat();
                        let tmp6 = data.readDouble();
                        let tmp7 = data.readBoolean();
                        let tmp8 = data.readChar();
                        let tmp9 = data.readString();
                        let s = new MySequenceable(null, null);
                        data.readSequenceable(s);
                        reply.writeNoException();
                        reply.writeByte(tmp1);
                        reply.writeShort(tmp2);
                        reply.writeInt(tmp3);
                        reply.writeLong(tmp4);
                        reply.writeFloat(tmp5);
                        reply.writeDouble(tmp6);
                        reply.writeBoolean(tmp7);
                        reply.writeChar(tmp8);
                        reply.writeString(tmp9);
                        reply.writeSequenceable(s);
                        return true
                    }
                    default:
                    {
                        console.error("default case, code: " + code);
                        return false
                    }
                }
            }
        }

        class TestAbilityMessageStub extends rpc.RemoteObject {
            constructor(descriptor) {
                super(descriptor);
            }
            onRemoteMessageRequest(code, data, reply, option) {
                console.info("TestAbilityMessageStub: onRemoteMessageRequest called, code: " + code);
                let descriptor = data.readInterfaceToken();
                if (descriptor !== "TestAbilityMessageStub") {
                    console.error("received unknown descriptor: " + descriptor);
                    return false
                }
                switch (code) {
                    case 1:
                    {
                        let tmp1 = data.readByte();
                        let tmp2 = data.readShort();
                        let tmp3 = data.readInt();
                        let tmp4 = data.readLong();
                        let tmp5 = data.readFloat();
                        let tmp6 = data.readDouble();
                        let tmp7 = data.readBoolean();
                        let tmp8 = data.readChar();
                        let tmp9 = data.readString();
                        let s = new MySequenceable(null, null);
                        data.readParcelable(s);
                        reply.writeNoException();
                        reply.writeByte(tmp1);
                        reply.writeShort(tmp2);
                        reply.writeInt(tmp3);
                        reply.writeLong(tmp4);
                        reply.writeFloat(tmp5);
                        reply.writeDouble(tmp6);
                        reply.writeBoolean(tmp7);
                        reply.writeChar(tmp8);
                        reply.writeString(tmp9);
                        reply.writeParcelable(s);
                        return true
                    }
                    default:
                    {
                        console.error("default case, code: " + code);
                        return false
                    }
                }
            }
        }

        class TestListener extends rpc.RemoteObject {
            constructor(descriptor, checkResult) {
                super(descriptor);
                this.checkResult = checkResult;
            }
            onRemoteRequest(code, data, reply, option) {
                let result = false;
                if (code  == 1) {
                    console.info("onRemoteRequest called, descriptor: " + this.getInterfaceDescriptor());
                    result = true;
                } else {
                    console.info("unknown code: " + code);
                }
                let _checkResult = this.checkResult
                let _num = data.readInt();
                let _str = data.readString();
               
                _checkResult(_num, _str);
                sleep(2000);
                return result;
            }
        }

        class MySequenceable {
            constructor(num, string) {
                this.num = num;
                this.str = string;
            }
            marshalling(messageParcel) {
                messageParcel.writeInt(this.num);
                messageParcel.writeString(this.str);
                return true;
            }
            unmarshalling(messageParcel) {
                this.num = messageParcel.readInt();
                this.str = messageParcel.readString();
                return true;
            }
        }

        function assertArrayElementEqual(actual, expected) {
            expect(actual.length).assertEqual(expected.length);
            for (let i = 0; i < actual.length; i++) {
                expect(actual[i]).assertEqual(expected[i]);
            }
        }

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00100
        * @tc.name    Call the writeinterfacetoken interface, write the interface descriptor, and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = "hello ruan zong xian";
                data.writeInterfaceToken(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_INTERFACETOKEN, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInterfaceToken()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00200
         * @tc.name    The writeInterfaceToken interface is looping, the interface descriptor is written, and the
                        InterfaceToken is read
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00200---------------------------");
            try{
                for (let i = 0; i < 5;i++){
                    var data = rpc.MessageSequence.create();
                    var reply = rpc.MessageSequence.create();
                    let option = new rpc.MessageOption();
                    let token = "hello ruan zong xian";
                    data.writeInterfaceToken(token);
                    expect(gIRemoteObject != undefined).assertTrue();
                    await gIRemoteObject.sendMessageRequest(CODE_INTERFACETOKEN, data, reply, option).then((result) => {
                        expect(result.errCode).assertEqual(0);
                        expect(result.reply.readInterfaceToken()).assertEqual(token);
                    });
                };
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00300
         * @tc.name    Call the WriteInterfaceToken interface, write the maximum length interface descriptor, and read
                        the InterfaceToken
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = "";
                for(let i = 0; i < (40*K - 1); i++){
                    token += 'a';
                };
                data.writeInterfaceToken(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_INTERFACETOKEN, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInterfaceToken()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00400
         * @tc.name    The WriteInterfaceToken interface is called, the exceeding-length interface descriptor is written,
                        and the InterfaceToken is read
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00400", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = "";
                for(let i = 0; i < 40*K; i++){
                    token += 'a';
                };
                data.writeInterfaceToken(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00500
         * @tc.name    Call the writeinterfacetoken interface to write a non string interface descriptor
                       and read interfacetoken
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00500", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = 123;
                data.writeInterfaceToken(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00600
         * @tc.name    Call the writeshortarray interface, write the array to the MessageSequence instance,
         *             and call readshortarray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wShortArryData = [-1, 0, 1];
                data.writeShortArray(wShortArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SHORTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readShortArray(),wShortArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00700
         * @tc.name    Call the writeshortarray interface, write the short integer array to the MessageSequence instance,
         *             and call readshortarray (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wShortArryData = [];
                for(let i=0;i<(50*1024 - 1);i++){
                    wShortArryData[i] = 1;
                };
                data.writeShortArray(wShortArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SHORTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rShortArryData =[];
                    result.reply.readShortArray(rShortArryData);
                    assertArrayElementEqual(rShortArryData,wShortArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00800
         * @tc.name    Writeshortarray interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wShortArryData = [-32768, 0, 1, 2, 32767];
                data.writeShortArray(wShortArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SHORTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readShortArray(),wShortArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_00900
         * @tc.name    Writeshortarray interface, illegal value validation
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_00900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_00900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let eShortArryData = [-32769, 32768];
                data.writeShortArray(eShortArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SHORTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let erShortArryData = [32767, -32768];
                    assertArrayElementEqual(result.reply.readShortArray(),erShortArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_00900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01000
         * @tc.name    Writeshortarray interface, transmission length verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01000", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let eShortArryData = [];
                for(let i=0;i<50*K;i++){
                    eShortArryData[i] = 1;
                };
                data.writeShortArray(eShortArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01100
         * @tc.name    Call the writelongarray interface, write the long integer array to the MessageSequence instance,
         *             and call readlongarray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wLongArryData = [3276826, 123456, 9999999];
                data.writeLongArray(wLongArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_LONGARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readLongArray(),wLongArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01200
         * @tc.name    Call the writelongarray interface, write the long integer array to the MessageSequence instance,
         *             and call readlongarray (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wLongArryData = [];
                for(let i=0;i<(25*K - 1);i++){
                    wLongArryData[i] = 11;
                };
                data.writeLongArray(wLongArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_LONGARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rLongArryData = [];
                    result.reply.readLongArray(rLongArryData);
                    assertArrayElementEqual(rLongArryData,wLongArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01300
         * @tc.name    Writelongarray interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wLongArryData = [-9007199254740992, 0, 1, 2, 9007199254740991];
                data.writeLongArray(wLongArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_LONGARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rLongArryData = [];
                    result.reply.readLongArray(rLongArryData);
                    assertArrayElementEqual(rLongArryData,wLongArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01400
         * @tc.name    Writelongarray interface, long type precision verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wLongArryData = [-9999999999999999, 9999999999999999];
                data.writeLongArray(wLongArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_LONGARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rLongArryData = result.reply.readLongArray();
                    let newlongdata = [-10000000000000000,10000000000000000];
                    expect(rLongArryData[0]).assertEqual(newlongdata[0]);
                    expect(rLongArryData[1]).assertEqual(newlongdata[1]);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01500
         * @tc.name    Writelongarray Indicates an interface for verifying the input length
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01500", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let wLongArryData = [];
                for(let i=0;i<25*K;i++){
                    wLongArryData[i] = 11;
                };
                data.writeLongArray(wLongArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01600
         * @tc.name    Call the writedoublearray interface, write the array to the MessageSequence instance,
         *             and call readdoublearra to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wDoubleArryData = [1.2, 235.67, 99.76];
                data.writeDoubleArray(wDoubleArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_DOUBLEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readDoubleArray(), wDoubleArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01700
         * @tc.name    Call the writedoublearray interface, write the array to the MessageSequence instance,
         *             and call readdoublearra (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wDoubleArryData = [];
                for(let i = 0;i < (25*K - 1);i++){
                    wDoubleArryData[i] = 11.1;
                };
                data.writeDoubleArray(wDoubleArryData);    
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_DOUBLEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rDoubleArryData = [];
                    result.reply.readDoubleArray(rDoubleArryData);
                    assertArrayElementEqual(rDoubleArryData, wDoubleArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01800
         * @tc.name    Writedoublearray interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wDoubleArryData = [4.9E-324, 235.67, 1.79E+308];
                data.writeDoubleArray(wDoubleArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_DOUBLEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readDoubleArray(), wDoubleArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_01900
         * @tc.name    Writedoublearray interface, illegal value validation
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_01900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_01900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();   
                let eDoubleArryData = [(4.9E-324) - 1, (1.79E+308) + 1];
                data.writeDoubleArray(eDoubleArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_DOUBLEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rDoubleArryData = result.reply.readDoubleArray();
                    expect(rDoubleArryData[0]).assertEqual(-1);
                    expect(rDoubleArryData[1]).assertEqual(1.79e+308);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_01900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02000
         * @tc.name    Writedoublearray interface, Out-of-bounds value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02000", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let eDoubleArryData = [];
                for(let i = 0;i < 25*K;i++){
                    eDoubleArryData[i] = 11.1;
                };
                data.writeDoubleArray(eDoubleArryData);   
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02100
         * @tc.name    Call the writebooleanarray interface, write the array to the MessageSequence instance,
         *             and call readbooleanarray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wBooleanArryData = [true, false, false];
                data.writeBooleanArray(wBooleanArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BOOLEANARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readBooleanArray(),wBooleanArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02200
         * @tc.name    Call the writebooleanarray interface, write the array to the MessageSequence instance,
         *             and call readbooleanarray (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wBooleanArryData = [];
                for (let i=0;i<(50*K - 1);i++){
                    if (i % 2 == 0){
                        wBooleanArryData[i] = false;
                    }else {
                        wBooleanArryData[i] = true;
                    };
                };
                data.writeBooleanArray(wBooleanArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BOOLEANARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rBooleanArryData = [];
                    result.reply.readBooleanArray(rBooleanArryData);
                    assertArrayElementEqual(rBooleanArryData,wBooleanArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02300
         * @tc.name    Writebooleanarray interface, illegal value validation
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let errorBooleanArryData = [true, 9, false];
                data.writeBooleanArray(errorBooleanArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BOOLEANARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let eCharArrayData = [true, false, false];
                    assertArrayElementEqual(result.reply.readBooleanArray(),eCharArrayData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02400
         * @tc.name    Writebooleanarray Interface for length verification of input parameters
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02400", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let wBooleanArryData = [];
                for (let i=0;i<50*K;i++){
                    if (i % 2 == 0){
                        wBooleanArryData[i] = false;
                    }else {
                        wBooleanArryData[i] = true;
                    };
                };
                data.writeBooleanArray(wBooleanArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02500
         * @tc.name    Call the writechararray interface, write the array to the MessageSequence instance,
         *             and call readchararray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wCharArryData = [0,97,255];
                data.writeCharArray(wCharArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_CHARARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readCharArray(),wCharArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02600
         * @tc.name    Call the writechararray interface, write the array to the MessageSequence instance,
         *             and call readchararray (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wCharArryData = [];
                for(let i=0;i<(50*K - 1);i++){
                    wCharArryData[i] = 96;
                };
                data.writeCharArray(wCharArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_CHARARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rCharArryData = [];
                    result.reply.readCharArray(rCharArryData);
                    assertArrayElementEqual(rCharArryData,wCharArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02700
         * @tc.name    Writechararray interface, illegal value validation
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let errorCharArryData = [96, 'asfgdgdtu', 97];
                data.writeCharArray(errorCharArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_CHARARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let eCharArrayData = [96, 0, 97];
                    let readchardata = result.reply.readCharArray();
                    assertArrayElementEqual(readchardata, eCharArrayData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02800
         * @tc.name    Writechararray Indicates the length of an interface input parameter
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02800", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let errorCharArryData = [];
                for(let i=0;i<50*K;i++){
                    errorCharArryData[i] = 96;
                };
                data.writeCharArray(errorCharArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_02900
         * @tc.name    Call the writestringarray interface, write the array to the MessageSequence instance,
         *             and call readstringarray (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_02900", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_02900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wStringArryData = ['abc', 'hello', 'beauty'];
                data.writeStringArray(wStringArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRINGARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readStringArray(),wStringArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_02900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03000
         * @tc.name    Call the writestringarray interface, write the array to the MessageSequence instance,
         *             and call readstringarray() to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03000", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let wStringArryData = [];
                for (let i = 0;i < (10*K - 1);i++){
                    wStringArryData[i] = "heddSDF";
                };
                data.writeStringArray(wStringArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRINGARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let rStringArryData = [];
                    result.reply.readStringArray(rStringArryData);
                    assertArrayElementEqual(rStringArryData,wStringArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03100
         * @tc.name    Writestringarray interface, illegal value validation
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03100", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let errorStringArryData = ['abc' , 123, 'beauty'];
                data.writeStringArray(errorStringArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03200
         * @tc.name    writeStringArray Interface for length verification of input parameters
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03200", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let wStringArryData = [];
                for (let i = 0;i < 10 * K;i++){
                    wStringArryData[i] = "heddSDF";
                };
                data.writeStringArray(wStringArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03300
         * @tc.name    Call the writebytearray interface, write the array to the MessageSequence instance,
         *             and call readbytearray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let ByteArraylet = [1, 2, 3, 4, 5];
                data.writeByteArray(ByteArraylet); 
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readByteArray(),ByteArraylet);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03400
         * @tc.name    Call the writebytearray interface, write the array to the MessageSequence instance,
         *             and call readbytearray (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let ByteArraylet = [-128, 0, 1, 2, 127];
                data.writeByteArray(ByteArraylet); 
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let newArr = new Array(5);
                    result.reply.readByteArray(newArr);
                    assertArrayElementEqual(ByteArraylet,newArr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03500
         * @tc.name    Writebytearray interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let ByteArraylet = [];
                for (let i=0;i<(40*K - 1);i++){
                    ByteArraylet[i] = 1;
                };
                data.writeByteArray(ByteArraylet);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let newArr = new Array(5)
                    result.reply.readByteArray(newArr);
                    assertArrayElementEqual(newArr,ByteArraylet);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03600
         * @tc.name    Writebytearray interface, illegal value validation
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let ByteArraylet = [-129, 0, 1, 2, 128];
                data.writeByteArray(ByteArraylet);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let shortArryDataReply = result.reply.readByteArray();
                    expect(shortArryDataReply[0] == 127).assertTrue();
                    expect(shortArryDataReply[1] == ByteArraylet[1]).assertTrue();
                    expect(shortArryDataReply[2] == ByteArraylet[2]).assertTrue();
                    expect(shortArryDataReply[3] == ByteArraylet[3]).assertTrue();
                    expect(shortArryDataReply[4] == -128).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03700
         * @tc.name    Writebytearray Interface，input parameter length verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03700", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let ByteArraylet = [];
                for (let i=0;i<40*K;i++){
                    ByteArraylet[i] = 1;
                };
                data.writeByteArray(ByteArraylet);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03800
         * @tc.name    Call the writeintarray interface, write the array to the MessageSequence instance,
         *             and call readintarray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let intArryData = [100, 111, 112];
                data.writeIntArray(intArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readIntArray(),intArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_03900
         * @tc.name    Call the writeintarray interface, write the array to the MessageSequence instance,
         *             and call readintarray (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_03900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_03900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let intArryData = [];
                for (let i=0;i<(50*K - 1);i++){
                    intArryData[i] = 1;
                };
                data.writeIntArray(intArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let newArr = new Array(3);
                    result.reply.readIntArray(newArr);
                    assertArrayElementEqual(newArr,intArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_03900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04000
         * @tc.name    Writeintarray interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04000", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let intArryData = [-2147483648, 0, 1, 2, 2147483647];
                data.writeIntArray(intArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readIntArray(),intArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04100
         * @tc.name    Writeintarray interface, illegal value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04100", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let intArryData = [-2147483649, 0, 1, 2, 2147483648];
                data.writeIntArray(intArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let shortArryDataReply = result.reply.readIntArray();
                    expect(shortArryDataReply[0] == 2147483647).assertTrue();
                    expect(shortArryDataReply[1] == intArryData[1]).assertTrue();
                    expect(shortArryDataReply[2] == intArryData[2]).assertTrue();
                    expect(shortArryDataReply[3] == intArryData[3]).assertTrue();
                    expect(shortArryDataReply[4] == -2147483648).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04200
         * @tc.name    Writeintarray interface, input parameter length verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04200", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let intArryData = [];
                for (let i=0;i<50*K;i++){
                    intArryData[i] = 1;
                };
                data.writeIntArray(intArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04300
         * @tc.name    Call the writefloatarray interface, write the array to the MessageSequence instance,
         *             and call readfloatarray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let floatArryData = [1.2, 1.3, 1.4];
                data.writeFloatArray(floatArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readFloatArray(),floatArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04400
         * @tc.name    Call the writefloatarray interface, write the array to the MessageSequence instance,
         *             and call readfloatarray (datain: number []) to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let floatArryData = [1.4E-45, 1.3, 3.4028235E38];
                data.writeFloatArray(floatArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let newArr = new Array(3);
                    result.reply.readFloatArray(newArr);
                    assertArrayElementEqual(newArr,floatArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04500
         * @tc.name    Writefloatarray interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let floatArryData = [(1.4E-45) - 1, 1.3, (3.4028235E38) + 1];
                data.writeFloatArray(floatArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let newArr = result.reply.readFloatArray();
                    expect(newArr[0]).assertEqual(-1);
                    expect(newArr[1]).assertEqual(1.3);
                    expect(newArr[2]).assertEqual(3.4028235e+38);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04600
         * @tc.name    Writefloatarray interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let floatArryData = [];
                for (let i = 0;i < (25*K - 1);i++){
                    floatArryData[i] = 1.1;
                };
                data.writeFloatArray(floatArryData);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readFloatArray(),floatArryData);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04700
         * @tc.name    Writefloatarray interface, Longest array verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04700", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let floatArryData = [];
                for (let i = 0;i < (25*K);i++){
                    floatArryData[i] = 1.1;
                };
                data.writeFloatArray(floatArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04800
         * @tc.name    Call the writeShort interface to write the short integer data to the MessageSequence instance,
         *             and call readshort to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let short = 8;
                data.writeShort(short);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SHORT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readShort(),short);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_04900
         * @tc.name    WriteShort interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_04900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_04900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeShort(-32768);
                data.writeShort(0);
                data.writeShort(1);
                data.writeShort(2);
                data.writeShort(32767);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SHORT_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readShort() == -32768).assertTrue();
                    expect(result.reply.readShort() == 0).assertTrue();
                    expect(result.reply.readShort() == 1).assertTrue();
                    expect(result.reply.readShort() == 2).assertTrue();
                    expect(result.reply.readShort() == 32767).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_04900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05000
         * @tc.name    WriteShort interface, Boundary value minimum value out of bounds verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeShort(-32769);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SHORT_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readShort() == 32767).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05100
         * @tc.name    WriteShort interface, Boundary value maximum value out of bounds verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeShort(32768);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SHORT_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readShort() == -32768).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05100---------------------------");
        });
        
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05200
         * @tc.name    Call writelong interface to write long integer data to MessageSequence instance
         *             and call readlong to read data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let long = 9007199254740991;
                data.writeLong(long);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readLong()).assertEqual(long);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05200---------------------------");
        });
    
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05300
         * @tc.name    Writelong interface, Verification of maximum accuracy value
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let long = -9007199254740992;
                data.writeLong(long);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readLong() == long).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05400
         * @tc.name    Writelong interface, Minimum loss accuracy verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let long = -9223372036854775300;
                data.writeLong(long);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readLong()).assertEqual(-9223372036854776000);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05500
         * @tc.name    Writelong interface, Maximum loss accuracy verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let short = 9223372036854775300;
                data.writeLong(short);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let readlong = result.reply.readLong();
                    expect(readlong != 0).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05600
         * @tc.name    Call the parallel interface to read and write data to the double instance
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 4.9E-324;
                data.writeDouble(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readDouble()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05700
         * @tc.name    Writedouble interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 1.79E+308;
                data.writeDouble(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readDouble()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05800
         * @tc.name    Writedouble interface, Minimum boundary value out of bounds verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = (4.9E-324) - 1;
                data.writeDouble(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readDouble()).assertEqual(-1);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_05900
         * @tc.name    Writedouble interface, illegal value validation
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_05900", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_05900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = "1.79E+465312156";
                data.writeDouble(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_05900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06000
         * @tc.name    Call the writeboolean interface to write the data to the MessageSequence instance,
         *             and call readboolean to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06000", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = true;
                data.writeBoolean(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BOOLEAN, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readBoolean()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06100
         * @tc.name    Call the writeboolean interface to write the data to the MessageSequence instance,
         *             and call readboolean to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06100", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = false;
                data.writeBoolean(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BOOLEAN, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readBoolean()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06200
         * @tc.name    Writeboolean interface, illegal value number type verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06200", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                data.writeBoolean(9);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06300
         * @tc.name    Writeboolean interface, illegal value string type verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = "true";
                data.writeBoolean(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06400
         * @tc.name    Call the writechar interface to write the minimum data to the MessageSequence instance,
         *               and call readchar to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 0;
                data.writeChar(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readChar()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06500
         * @tc.name    Call the writechar interface to write the maximum data to the MessageSequence instance,
         *              and call readchar to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06500", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 255;
                data.writeChar(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readChar()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06600
         * @tc.name    Call the writechar interface to write the minimum out of range data to the MessageSequence instance,
         *              and call readchar to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = -1;
                data.writeChar(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readChar()).assertEqual(255);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06700
         * @tc.name    Call the writechar interface to write the maximum out of range data to the MessageSequence instance,
         *              and call readchar to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06700", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 256;
                data.writeChar(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readChar()).assertEqual(0);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06800
         * @tc.name    Writechar interface, illegal value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = 'ades';
                data.writeChar(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_06900
         * @tc.name    Call the writestring interface to write the data to the MessageSequence instance,
         *             and call readstring() to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_06900", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_06900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = '';
                for(let i = 0; i < (40*K - 1); i++){
                    token += 'a';
                }
                data.writeString(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readString()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_06900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07000
         * @tc.name    Writestring interface Maximum data out of range verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07000", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = '';
                for(let i = 0; i < 40*K; i++){
                    token += 'a';
                }
                data.writeString(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07100
         * @tc.name    Writestring interface, illegal value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = 123;
                data.writeString(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07200
         * @tc.name    Call the writebyte interface to write data to the MessageSequence instance,
         *             and call readbyte to read data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 2;
                data.writeByte(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BYTE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readByte()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07300
         * @tc.name    Writebyte interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07300", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeByte(128);
                data.writeByte(0);
                data.writeByte(1);
                data.writeByte(2);
                data.writeByte(127);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BYTE_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(reply.readByte()).assertEqual(-128);
                    expect(reply.readByte()).assertEqual(0);
                    expect(reply.readByte()).assertEqual(1);
                    expect(reply.readByte()).assertEqual(2);
                    expect(reply.readByte()).assertEqual(127);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07400
         * @tc.name    Writebyte interface, Maximum boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeByte(-129);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BYTE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readByte()).assertEqual(127);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07500
         * @tc.name    Writebyte interface, Minimum boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07500", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeByte(128);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_BYTE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readByte()).assertEqual(-128);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07600
         * @tc.name    Writebyte interface, illegal value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07600", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                data.writeByte("error");  
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07700
         * @tc.name    Call the writeint interface to write the data to the MessageSequence instance,
         *             and call readint to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07700", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 2;
                data.writeInt(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07800
         * @tc.name    Writeint interface, boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeInt(-2147483648);
                data.writeInt(0);
                data.writeInt(1);
                data.writeInt(2);
                data.writeInt(2147483647);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(-2147483648);
                    expect(result.reply.readInt()).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(1);
                    expect(result.reply.readInt()).assertEqual(2);
                    expect(result.reply.readInt()).assertEqual(2147483647);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_07900
         * @tc.name    Writeint interface, Verification of minimum boundary overrun value
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_07900", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_07900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeInt(-2147483649);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(2147483647);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_07900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08000
         * @tc.name    Writeint interface, Verification of maximum boundary overrun value
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08000", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeInt(2147483648);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(-2147483648);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08100
         * @tc.name    Writeint interface, illegal value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                data.writeInt("error");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08200
         * @tc.name    Call the writefloat interface to write data to the MessageSequence instance,
         *             and call readfloat to read data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 2.2;
                data.writeFloat(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readFloat()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08300
         * @tc.name    Writefloat interface, Minimum boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08300", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 1.4E-45;
                data.writeFloat(token); 
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readFloat()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08400
         * @tc.name    Writefloat interface, Maximum boundary value verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 3.4028235E38;
                data.writeFloat(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readFloat()).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08500
         * @tc.name    Writefloat interface, Verification of maximum boundary overrun value
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08500", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = (3.4028235E38) + 1;
                data.writeFloat(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readFloat()).assertEqual(3.4028235e+38);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08600
         * @tc.name    Writefloat interface, Verification of minimum boundary overrun value
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = (1.4E-45) - 1;
                data.writeFloat(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readFloat()).assertEqual(-1);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08700
         * @tc.name    Writefloat interface, illegal value validation
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = 'a';
                data.writeFloat(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08800
         * @tc.name    Call the getRawDataCapacity interface to get the maximum amount of raw data that a MessageSequence
                         can hold
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08800---------------------------");
            try{
                var parcel = new rpc.MessageSequence();
                var reply = new rpc.MessageSequence();
                let option = new  rpc.MessageOption();
                expect(parcel.getRawDataCapacity()).assertEqual(128*M);
                parcel.writeIntArray([1, 2, 3, 4, 5]);
                expect(parcel.getRawDataCapacity()).assertEqual(128*M);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INTARRAY, parcel, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.getRawDataCapacity()).assertEqual(128*M);
                    assertArrayElementEqual(result.reply.readIntArray(),[1, 2, 3, 4, 5]);
                    expect(result.reply.getRawDataCapacity()).assertEqual(128*M);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08800---------------------------");
        });
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_08900
        * @tc.name    Test MessageSequence to deliver rawdata data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_08900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_08900---------------------------");
            try{
                var parcel = new rpc.MessageSequence();
                var reply = new rpc.MessageSequence();
                let option = new rpc.MessageOption();
                let arr = [1, 2, 3, 4, 5];
                parcel.writeInt(arr.length);
                parcel.writeRawData(arr, arr.length);
                expect(parcel.getRawDataCapacity()).assertEqual(128*M);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let size = result.reply.readInt();
                    expect(size).assertEqual(arr.length);
                    expect(result.reply.getRawDataCapacity()).assertEqual(128*M);
                    assertArrayElementEqual(result.reply.readRawData(size),arr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_08900---------------------------");
        });
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09000
        * @tc.name    Test MessageSequence to pass abnormal rawdata data, and expand the capacity for verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09000---------------------------");
            try{
                var parcel = new rpc.MessageSequence();
                var reply = new rpc.MessageSequence();
                let option = new rpc.MessageOption();
                let arr = [1, 2, 3, 4, 5];
                parcel.writeInt(arr.length + 1);
                parcel.writeRawData(arr, (arr.length + 1));
                expect(parcel.getRawDataCapacity()).assertEqual(128*M);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let size = result.reply.readInt();
                    expect(size).assertEqual(arr.length + 1);
                    expect(result.reply.getRawDataCapacity()).assertEqual(128*M);
                    let newReadResult = result.reply.readRawData(size);
                    expect(arr[0]).assertEqual(newReadResult[0]);
                    expect(arr[1]).assertEqual(newReadResult[1]);
                    expect(arr[2]).assertEqual(newReadResult[2]);
                    expect(arr[3]).assertEqual(newReadResult[3]);
                    expect(arr[4]).assertEqual(newReadResult[4]);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09000---------------------------");
        });
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09100
        * @tc.name    Test MessageSequence to pass exception rawdata data data interception verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09100---------------------------");
            try{
                var parcel = new rpc.MessageSequence();
                var reply = new rpc.MessageSequence();
                let option = new rpc.MessageOption();
                let arr = [1, 2, 3, 4, 5];
                parcel.writeInt(arr.length - 1);
                parcel.writeRawData(arr, (arr.length - 1));
                expect(parcel.getRawDataCapacity()).assertEqual(128*M);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let size = result.reply.readInt();
                    expect(size).assertEqual(arr.length - 1);
                    expect(result.reply.getRawDataCapacity()).assertEqual(128*M);
                    let newReadResult = result.reply.readRawData(size);
                    expect(arr[0]).assertEqual(newReadResult[0]);
                    expect(arr[1]).assertEqual(newReadResult[1]);
                    expect(arr[2]).assertEqual(newReadResult[2]);
                    expect(arr[3]).assertEqual(newReadResult[3]);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09100---------------------------");
        });
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09200
        * @tc.name    Test MessageSequence to deliver out-of-bounds RawData data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09200---------------------------");
            try{
                var parcel = new rpc.MessageSequence();
                var reply = new rpc.MessageSequence();
                let option = new rpc.MessageOption();
                let arr = [-129, 2, 3, 4, 128];
                parcel.writeInt(arr.length);
                parcel.writeRawData(arr, arr.length);
                expect(parcel.getRawDataCapacity()).assertEqual(128*M);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let size = result.reply.readInt();
                    expect(size).assertEqual(arr.length);
                    expect(result.reply.getRawDataCapacity()).assertEqual(128*M);
                    assertArrayElementEqual(result.reply.readRawData(size),arr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09200---------------------------");
        });
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09300
        * @tc.name    Test MessageSequence to deliver illegal RawData data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09300", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09300---------------------------");
            try{
                var parcel = new rpc.MessageSequence();
                let arr = ["aaa", 1, 2, 3];
                parcel.writeInt(arr.length);
                parcel.writeRawData(arr, arr.length);
                expect(parcel.getRawDataCapacity()).assertEqual(128*M);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                parcel.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09300---------------------------");
        }); 
        
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09400
         * @tc.name    Call the writeremoteobject interface to serialize the remote object
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09400", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let testRemoteObject = new TestRemoteObject("testObject");
                data.writeRemoteObject(testRemoteObject);
                expect( data.readRemoteObject() != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09500
         * @tc.name    Call the writeremoteobject interface to serialize the remote object and pass in the empty object
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09500", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = new TestRemoteObject(null);
                data.writeRemoteObject(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09600
        * @tc.name    Call the writeremoteobject interface to serialize the remote object and pass in the empty object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3   
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09600", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = {};
                data.writeRemoteObject(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.PROXY_OR_REMOTE_OBJECT_INVALID_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09600---------------------------");
        });        
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09700
         * @tc.name    Call the writeParcelable interface to write the custom serialized
         *             object to the MessageSequence instance
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let sequenceable = new MySequenceable(1, "aaa");
                data.writeParcelable(sequenceable);
                let ret = new MySequenceable(0, "");
                data.readParcelable(ret);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error).assertEqual(null);
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09800
         * @tc.name    Call the writeParcelable interface to write the custom serialized
         *             object to the MessageSequence instance, Migration to read
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let sequenceable = new MySequenceable(1, "aaa");
                data.writeParcelable(sequenceable);
                let ret = new MySequenceable(1, "");
                data.readParcelable(ret);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_09900
         * @tc.name    After the server finishes processing, write noexception first before writing the result,
         *             and the client calls readexception to judge whether the server is abnormal
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_09900", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_09900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeNoException();
                data.writeInt(6);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_NOEXCEPTION, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    result.reply.readException();
                    expect(result.reply.readInt()).assertEqual(6);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_09900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10000
         * @tc.name    If the data on the server is abnormal, the client calls readexception
         *             to judge whether the server is abnormal
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10000", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeNoException();
                data.writeInt(1232222223444);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_NOEXCEPTION, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    result.reply.readException();
                    expect(result.reply.readInt() != 1232222223444).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10100
         * @tc.name    Serializable object marshaling and unmarshalling test
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let sequenceable = new MySequenceable(1, "aaa");
                data.writeParcelable(sequenceable);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SEQUENCEABLE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let s = new MySequenceable(null,null);
                    result.reply.readParcelable(s);
                    expect(s.str).assertEqual(sequenceable.str);
                    expect(s.num).assertEqual(sequenceable.num);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10200
         * @tc.name    Non serializable object marshaling test
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let sequenceable = new MySequenceable(1, 1);
                data.writeParcelable(sequenceable);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10300
         * @tc.name    The server did not send a serializable object, and the client was ungrouped
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10300", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let sequenceable = 10;
                data.writeInt(sequenceable);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let s = new MySequenceable(0,null);
                    result.reply.readParcelable(s);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10400
         * @tc.name    Call the writeParcelable interface to write the custom serialized object to the
         *             MessageSequence instance, and call readParcelable to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let sequenceable = new MySequenceable(2, "abc");
                data.writeParcelable(sequenceable);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SEQUENCEABLE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let s = new MySequenceable(null,null);
                    result.reply.readParcelable(s);
                    expect(s.str).assertEqual(sequenceable.str);
                    expect(s.num).assertEqual(sequenceable.num);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10500
         * @tc.name    Call the writeParcelablearray interface to write the custom serialized object array (1, 2, 3) to
         *              the MessageSequence instance, and call readParcelablearray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10500", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let sequenceable = [new MySequenceable(1, "aaa"),
                    new MySequenceable(2, "bbb"), new MySequenceable(3, "ccc")];
                data.writeParcelableArray(sequenceable);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SEQUENCEABLEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let s = [new MySequenceable(null, null), new MySequenceable(null, null),
                        new MySequenceable(null, null)];
                    result.reply.readParcelableArray(s);
                    for (let i = 0; i < s.length; i++) {
                        expect(s[i].str).assertEqual(sequenceable[i].str);
                        expect(s[i].num).assertEqual(sequenceable[i].num);
                    };
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10600
         * @tc.name    Call the writeParcelablearray interface to write the custom serialized object to the
         *             MessageSequence instance, and call readParcelablearray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let sequenceable = [new MySequenceable(4, "abc"),
                    new MySequenceable(5, "bcd"), new MySequenceable(6, "cef")];
                data.writeParcelableArray(sequenceable);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_SEQUENCEABLEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let s = [new MySequenceable(null, null),
                        new MySequenceable(null, null), new MySequenceable(null, null)];
                    result.reply.readParcelableArray(s);
                    for (let i = 0; i < s.length; i++) {
                        expect(s[i].str).assertEqual(sequenceable[i].str);
                        expect(s[i].num).assertEqual(sequenceable[i].num);
                    };
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10700
         * @tc.name    Call the writeParcelablearray interface to write the custom
         *             serialized object to the MessageSequence instance
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let sequenceable = 1;
                data.writeParcelableArray(sequenceable);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_10800
         * @tc.name    Call the writeremoteobjectarray interface to write the object array to the MessageSequence
         *             instance, and call readremoteobjectarray to read the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_10800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_10800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                var option = new rpc.MessageOption();
                var listeners = [new TestRemoteObject("rpcListener"),
                    new TestRemoteObject("rpcListener2"),
                    new TestRemoteObject("rpcListener3")];
                data.writeRemoteObjectArray(listeners);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_REMOTEOBJECTARRAY, data, reply, option).then((result) => {
                    console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_10800: sendMessageRequest is " + result.errCode);
                    expect(result.errCode).assertEqual(0);
                    expect(result.code).assertEqual(CODE_WRITE_REMOTEOBJECTARRAY);
                    expect(result.data).assertEqual(data);
                    expect(result.reply).assertEqual(reply);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_10800---------------------------");
        });        
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11000
         * @tc.name    Test MessageSequence to deliver the reply message received in promise across processes
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_11000", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeByte(2);
                data.writeShort(3);
                data.writeInt(4);
                data.writeLong(5);
                data.writeFloat(1.2);
                data.writeDouble(10.2);
                data.writeBoolean(true);
                data.writeChar(97);
                data.writeString("HelloWorld");
                data.writeParcelable(new MySequenceable(1, "aaa"));
                await gIRemoteObject.sendMessageRequest(CODE_ALL_TYPE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readByte()).assertEqual(2);
                    expect(result.reply.readShort()).assertEqual(3);
                    expect(result.reply.readInt()).assertEqual(4);
                    expect(result.reply.readLong()).assertEqual(5);
                    expect(result.reply.readFloat()).assertEqual(1.2);
                    expect(result.reply.readDouble()).assertEqual(10.2);
                    expect(result.reply.readBoolean()).assertTrue();
                    expect(result.reply.readChar()).assertEqual(97)
                    expect(result.reply.readString()).assertEqual("HelloWorld");
                    let s = new MySequenceable(null, null);
                    result.reply.readParcelable(s);
                    expect(s.num).assertEqual(1);
                    expect(s.str).assertEqual("aaa");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11100
         * @tc.name    Test the cross process delivery of MessageSequence and receive the reply message
         *             in the callback function
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_11100", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeByte(2);
                data.writeShort(3);
                data.writeInt(4);
                data.writeLong(5);
                data.writeFloat(1.2);
                data.writeDouble(10.2);
                data.writeBoolean(true);
                data.writeChar(97);
                data.writeString("HelloWorld");
                data.writeParcelable(new MySequenceable(1, "aaa"));
                function sendMessageRequestCallback(result) {
                    try{
                        console.info("sendMessageRequest Callback");
                        expect(result.errCode).assertEqual(0);
                        expect(result.reply.readByte()).assertEqual(2);
                        expect(result.reply.readShort()).assertEqual(3);
                        expect(result.reply.readInt()).assertEqual(4);
                        expect(result.reply.readLong()).assertEqual(5);
                        expect(result.reply.readFloat()).assertEqual(1.2);
                        expect(result.reply.readDouble()).assertEqual(10.2);
                        expect(result.reply.readBoolean()).assertTrue();
                        expect(result.reply.readChar()).assertEqual(97);
                        expect(result.reply.readString()).assertEqual("HelloWorld");
                        let s = new MySequenceable(null, null);
                        result.reply.readParcelable(s);
                        expect(s.num).assertEqual(1);
                        expect(s.str).assertEqual("aaa");
                    } finally {
                        data.reclaim();
                        reply.reclaim();
                        done();
                    }
                }
                console.info("start send request");
                await gIRemoteObject.sendMessageRequest(CODE_ALL_TYPE, data, reply, option, sendMessageRequestCallback);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            }
            console.info("--------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11100--------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11200
         * @tc.name    Test the cross process transmission of MessageSequence.
         *             After receiving the reply message in promise, read letious types of arrays in order
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_11200", 0,async function(done){
            console.info("--------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11200--------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeByteArray([1, 2, 3]);
                data.writeShortArray([4, 5, 6]);
                data.writeIntArray([7, 8, 9]);
                data.writeLongArray([10, 11, 12]);
                data.writeFloatArray([1.1, 1.2, 1.3]);
                data.writeDoubleArray([2.1, 2.2, 2.3]);
                data.writeBooleanArray([true, true, false]);
                data.writeCharArray([65,97,122]);
                data.writeStringArray(['abc', 'seggg']);
                let a = [new MySequenceable(1, "aaa"), new MySequenceable(2, "bbb"),
                    new MySequenceable(3, "ccc")]
                data.writeParcelableArray(a);
                await gIRemoteObject.sendMessageRequest(CODE_ALL_ARRAY_TYPE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readByteArray(), [1, 2, 3]);
                    assertArrayElementEqual(result.reply.readShortArray(), [4, 5, 6]);
                    assertArrayElementEqual(result.reply.readIntArray(), [7, 8, 9]);
                    assertArrayElementEqual(result.reply.readLongArray(), [10, 11, 12]);
                    assertArrayElementEqual(result.reply.readFloatArray(), [1.1, 1.2, 1.3]);
                    assertArrayElementEqual(result.reply.readDoubleArray(), [2.1, 2.2, 2.3]);
                    assertArrayElementEqual(result.reply.readBooleanArray(), [true, true, false]);
                    assertArrayElementEqual(result.reply.readCharArray(), [65,97,122]);
                    assertArrayElementEqual(result.reply.readStringArray(), ['abc', 'seggg']);
                    let b = [new MySequenceable(null, null), new MySequenceable(null, null),
                        new MySequenceable(null, null)];
                    result.reply.readParcelableArray(b);
                    for (let i = 0; i < b.length; i++) {
                        expect(b[i].str).assertEqual(a[i].str);
                        expect(b[i].num).assertEqual(a[i].num);
                    };
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11300
         * @tc.name    Test MessageSequence cross process delivery. After receiving the reply message in promise,
         *             the client constructs an empty array in sequence and reads the data from the reply message
         *             into the corresponding array
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_11300", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeByteArray([1, 2, 3]);
                data.writeShortArray([4, 5, 6]);
                data.writeIntArray([7, 8, 9]);
                data.writeLongArray([10, 11, 12]);
                data.writeFloatArray([1.1, 1.2, 1.3]);
                data.writeDoubleArray([2.1, 2.2, 2.3]);
                data.writeBooleanArray([true, true, false]);
                data.writeCharArray([65,97,122]);
                data.writeStringArray(['abc', 'seggg']);
                let a = [new MySequenceable(1, "aaa"), new MySequenceable(2, "bbb"),
                    new MySequenceable(3, "ccc")]
                data.writeParcelableArray(a);
                await gIRemoteObject.sendMessageRequest(CODE_ALL_ARRAY_TYPE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let ByteArray = new Array();
                    result.reply.readByteArray(ByteArray)
                    assertArrayElementEqual(ByteArray, [1, 2, 3]);
                    let ShortArray = new Array();
                    result.reply.readShortArray(ShortArray)
                    assertArrayElementEqual(ShortArray, [4, 5, 6]);
                    let IntArray = new Array();
                    result.reply.readIntArray(IntArray)
                    assertArrayElementEqual(IntArray, [7, 8, 9]);
                    let LongArray = new Array();
                    result.reply.readLongArray(LongArray)
                    assertArrayElementEqual(LongArray, [10, 11, 12]);
                    let FloatArray = new Array();
                    result.reply.readFloatArray(FloatArray)
                    assertArrayElementEqual(FloatArray, [1.1, 1.2, 1.3]);
                    let DoubleArray = new Array();
                    result.reply.readDoubleArray(DoubleArray)
                    assertArrayElementEqual(DoubleArray, [2.1, 2.2, 2.3]);
                    let BooleanArray = new Array();
                    result.reply.readBooleanArray(BooleanArray)
                    assertArrayElementEqual(BooleanArray, [true, true, false]);
                    let CharArray = new Array();
                    result.reply.readCharArray(CharArray)
                    assertArrayElementEqual(CharArray, [65,97,122]);
                    let StringArray = new Array();
                    result.reply.readStringArray(StringArray);
                    assertArrayElementEqual(StringArray, ['abc', 'seggg']);
                    let b = [new MySequenceable(null, null), new MySequenceable(null, null),
                        new MySequenceable(null, null)];
                    result.reply.readParcelableArray(b);
                    for (let i = 0; i < b.length; i++) {
                        expect(b[i].str).assertEqual(a[i].str);
                        expect(b[i].num).assertEqual(a[i].num);
                    };
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11400
         * @tc.name    Test MessageSequence to pass an object of type iremoteobject across processes
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it('SUB_Softbus_IPC_Compatibility_MessageSequence_11400', 0, async function(done) {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11400---------------------------");
            function checkResult(num, str) {
                expect(num).assertEqual(123);
                expect(str).assertEqual("rpcListenerTest");
                done();
            };
            try{
                var option = new rpc.MessageOption();
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let listener = new TestListener("rpcListener", checkResult);
                data.writeRemoteObject(listener);
                data.writeInt(123);
                data.writeString("rpcListenerTest");
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_REMOTEOBJECT, data, reply, option).then((result)=> {
                    console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_11400: sendMessageRequest is " + result.errCode);
                    expect(result.errCode).assertEqual(0);
                    result.reply.readException();
                });
            } catch(error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11400---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11500
         * @tc.name    Test MessageSequence to pass an array of iremoteobject objects across processes
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it('SUB_Softbus_IPC_Compatibility_MessageSequence_11500', 0, async function(done) {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11500---------------------------");
            let count = 0;
            function checkResult(num, str) {
                expect(num).assertEqual(123);
                expect(str).assertEqual("rpcListenerTest");
                count++;
                console.info("check result done, count: " + count);
                if (count == 3) {
                    done();
                }
            }
            try{
                let option = new rpc.MessageOption();
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let listeners = [new TestListener("rpcListener", checkResult),
                    new TestListener("rpcListener2", checkResult),
                    new TestListener("rpcListener3", checkResult)];
                data.writeRemoteObjectArray(listeners);
                data.writeInt(123);
                data.writeString("rpcListenerTest");
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_REMOTEOBJECTARRAY_1, data, reply, option)
                    .then((result)=> {
                        expect(result.errCode).assertEqual(0);
                        result.reply.readException();
                    });
            } catch(error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11600
         * @tc.name    Test MessageSequence to pass the array of iremoteobject objects across processes. The server
         *             constructs an empty array in onremoterequest and reads it from MessageSequence
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it('SUB_Softbus_IPC_Compatibility_MessageSequence_11600', 0, async function(done) {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11600---------------------------");
            let count = 0;
            function checkResult(num, str) {
                expect(num).assertEqual(123);
                expect(str).assertEqual("rpcListenerTest");
                count++;
                console.info("check result done, count: " + count);
                if (count == 3) {
                    done();
                }
            }
            try{
                let option = new rpc.MessageOption();
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let listeners = [new TestListener("rpcListener", checkResult),
                    new TestListener("rpcListener2", checkResult),
                    new TestListener("rpcListener3", checkResult)];
                data.writeRemoteObjectArray(listeners);
                data.readRemoteObjectArray();
                data.writeInt(123);
                data.writeString("rpcListenerTest");
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_REMOTEOBJECTARRAY_2, data, reply, option)
                    .then((result)=> {
                        console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_11600: sendMessageRequest is " + result.errCode);
                        expect(result.errCode).assertEqual(0);
                        result.reply.readException();
                    })
            } catch(error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11600---------------------------");
        });
        
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11700
         * @tc.name    Invoke the rewindRead interface,Set 0-bit offset and read the data after offset
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_11700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeInt(12);
                data.writeString("parcel");
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(12);
                    result.reply.rewindRead(0);
                    expect(result.reply.readInt()).assertEqual(12);
                    expect(result.reply.readString()).assertEqual("");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11800
         * @tc.name    Invoke the rewindRead interface,Set 1-bit offset and read the data after offset
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_11800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeInt(12);
                data.writeString("parcel");
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    expect(result.reply.readInt()).assertEqual(12);
                    result.reply.rewindRead(1);
                    expect(result.reply.readInt()).assertEqual(0);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_11900
         * @tc.name    Invoke the rewindWrite interface, Set 0-bit offset and write the data after offset
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_11900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_11800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeInt(4);
                data.rewindWrite(0);
                data.writeInt(5);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    expect(result.reply.readInt()).assertEqual(5);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_11900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12000
         * @tc.name    Invoke the rewindWrite interface, Set 1-bit offset and write the data after offset
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeInt(4);
                data.rewindWrite(1);
                data.writeInt(5);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInt() != 5).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12000---------------------------");
        });         
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12100
         * @tc.name    setCapacity Sets the storage capacity of the null MessageSequence instance. The getCapacity
                       obtains the current MessageSequence capacity
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                expect(data.getCapacity()).assertEqual(0);
                data.setCapacity(100);
                data.writeString("constant");
                expect(data.getCapacity()).assertEqual(100);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.getCapacity()).assertEqual("constant".length * 8);
                    expect(result.reply.readString()).assertEqual("constant");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12200
         * @tc.name    setCapacity Sets the storage capacity of the MessageSequence instance. The getCapacity
                       obtains the current MessageSequence capacity
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeString("constant");
                data.setCapacity(100);
                expect(data.getCapacity()).assertEqual(100);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readString()).assertEqual("constant");
                    expect(result.reply.getCapacity()).assertEqual("constant".length * 8);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12300
         * @tc.name    Setcapacity test: size limit verification of MessageSequence instance
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12300", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                expect(data.getCapacity()).assertEqual(0);
                data.writeString("constant");
                let getSizedata = data.getSize();
                data.setCapacity(getSizedata + 1);
                data.setCapacity(getSizedata);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.PARCEL_MEMORY_ALLOC_ERROR}`;
                expect(error.message != null).assertTrue();
                expect(error.code == errCode).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12300---------------------------");
        });
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12400
        * @tc.name    SetCapacity Tests the storage capacity threshold of the MessageSequence instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeString("constant");
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let getSizeresult = result.reply.getSize();
                    expect(result.reply.getCapacity()).assertEqual("constant".length * 8);
                    result.reply.setCapacity(getSizeresult + 1);
                    result.reply.setCapacity(getSizeresult);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.PARCEL_MEMORY_ALLOC_ERROR}`;
                expect(error.message != null).assertTrue();
                expect(error.code == errCode).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12400---------------------------");
        });
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12500
        * @tc.name    Setcapacity test storage capacity boundary value verification of MessageSequence instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12500", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                expect(data.getSize()).assertEqual(0);
                data.setCapacity(M);
                expect(data.getCapacity()).assertEqual(M);
                data.setCapacity(2*G);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.PARCEL_MEMORY_ALLOC_ERROR}`;
                expect(error.message != null).assertTrue();
                expect(error.code == errCode).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12500---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12600
         * @tc.name    setSize Sets the size of the data contained in the MessageSequence instance. The getSize command
                        reads the data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                expect(data.getSize()).assertEqual(0);
                data.setSize(0);
                data.writeString("constant");
                expect(data.getSize()).assertEqual(("constant".length * 2) + 8); 
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.getSize()).assertEqual(("constant".length * 2) + 8);
                    expect(result.reply.readString()).assertEqual("constant");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12700
         * @tc.name    SetSize: Increases the value of the data contained in the MessageSequence instance by 1,
                        Write setSize
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeString("constant");
                expect(data.getSize()).assertEqual(("constant".length * 2) + 8);
                data.setSize(0);
                expect(data.getSize()).assertEqual(0); 
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.getSize()).assertEqual(8);
                    expect(result.reply.readString()).assertEqual("");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12800
         * @tc.name    Verify the MessageSequence instance SetSize setting and the instance capacitydata qualification verification
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12800", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                expect(data.getSize()).assertEqual(0);
                data.writeString("constant");
                expect(data.getSize()).assertEqual(("constant".length * 2) + 8);
                let getCapacitydata = data.getCapacity();
                expect(getCapacitydata).assertEqual(64);
                data.setSize(getCapacitydata);
                expect(data.getSize()).assertEqual(getCapacitydata);
                data.setSize(getCapacitydata + 1);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_12900
         * @tc.name    setSize Sets the storage capacity of the MessageSequence instance to decrease by one.
                       The getSize obtains the current MessageSequence capacity
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_12900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_12900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeString("constant");
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readString()).assertEqual("constant");
                    expect(result.reply.getSize()).assertEqual(("constant".length * 2) + 8);
                    let getCapacityresult = result.reply.getCapacity();
                    result.reply.setSize(getCapacityresult);
                    expect(result.reply.getSize()).assertEqual(getCapacityresult);
                    result.reply.setSize(getCapacityresult + 1);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_12900---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13000
         * @tc.name    Validate the setSize boundary value in the MessageSequence instance
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                expect(data.getCapacity()).assertEqual(0);
                data.setSize(4*G);
                expect(data.getSize()).assertEqual(0);
                data.setSize(4*G - 1);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13000---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13100
         * @tc.name    Verify that setSize is out of bounds in a MessageSequence instance
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                data.setSize(0);
                expect(data.getSize()).assertEqual(0);
                data.setSize(2*4*G);
                expect(data.getSize()).assertEqual(0);
                data.setSize(2*G);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13100---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13200
         * @tc.name    Obtains the write and read positions of the MessageSequence
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                expect(data.getWritePosition()).assertEqual(0);
                data.writeInt(10);
                expect(data.getWritePosition()).assertEqual(4);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.getReadPosition()).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(10);
                    expect(result.reply.getReadPosition()).assertEqual(4);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13200---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13300
         * @tc.name    Obtaining the Writable and Readable Byte Spaces of MessageSequence
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                expect(data.getWritableBytes()).assertEqual(0);
                data.writeInt(10);
                expect(data.getWritableBytes()).assertEqual(60);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(10);
                    expect(result.reply.getReadableBytes()).assertEqual(0);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13300---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13400
         * @tc.name    Obtains the writeable and readable byte space and read position of the MessageSequence
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeInt(10);
                expect(data.getWritePosition()).assertEqual(4);
                expect(data.getWritableBytes()).assertEqual(60);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.getReadableBytes()).assertEqual(4);
                    expect(result.reply.getReadPosition()).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(10);
                    expect(result.reply.getReadableBytes()).assertEqual(0);
                    expect(result.reply.getReadPosition()).assertEqual(4);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13400---------------------------");
        });
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13500
        * @tc.name    Get the space size of MessageSequence to pass rawdata data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeInt(10);
                expect(data.getWritePosition()).assertEqual(4);
                expect(data.getWritableBytes()).assertEqual(60);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.getReadPosition()).assertEqual(0);
                    expect(result.reply.getReadableBytes()).assertEqual(4);
                    expect(result.reply.readInt()).assertEqual(10);
                    expect(result.reply.getReadPosition()).assertEqual(4);
                    expect(result.reply.getReadableBytes()).assertEqual(0);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13500---------------------------");
        });

        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13600
         * @tc.name    Test fixed MessageSequence space size to pass rawData data
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                expect(data.getRawDataCapacity()).assertEqual(128*M);
                let rawdata = [1, 2, 3];
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeInt(rawdata.length);
                data.writeRawData(rawdata, rawdata.length);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_RAWDATA, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let size = result.reply.readInt();
                    expect(result.reply.readRawData(size) != rawdata).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13600---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13700
         * @tc.name    Test MessageSequence delivery file descriptor object
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13700---------------------------");
            try{
                let testab = new TestProxy(gIRemoteObject).asObject();
                expect(testab != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13700---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13800
         * @tc.name    Test that the asObject interface is called by a RemoteObject and returns itself
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   0
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13800---------------------------");
            try{
                let testRemoteObject = new TestRemoteObject("testObject");
                expect(testRemoteObject.asObject() != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13800---------------------------");
        });
    
        /*
         * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_13900
         * @tc.name    MessageSequence sendMessageRequest API test
         * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
         * @tc.level   3
         */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_13900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_13900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let rawdata = [1, 2, 3];
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.getRawDataCapacity();
                data.writeInt(rawdata.length);
                data.writeRawData(rawdata, rawdata.length);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_RAWDATA, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readInt()).assertEqual(rawdata.length);
                    expect(result.reply.readRawData(rawdata.length) != rawdata).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_13900---------------------------");
        }); 
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14000
        * @tc.name    Invoke the writestring interface to write data to the MessageSequence instance. sendMessageRequest asynchronously
        *               verifies the priority processing levels of onRemoteMessageRequest and onRemoteRequest
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = "onRemoteRequest or onRemoteMessageRequest invoking";
                data.writeString(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_ONREMOTEMESSAGE_OR_ONREMOTE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readString()).assertEqual("onRemoteMessageRequest invoking");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                expect(error == null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14100
        * @tc.name    writeRemoteObject is proxy or remote object is invalid Error message verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0   
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = {};
                data.writeRemoteObject(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.PROXY_OR_REMOTE_OBJECT_INVALID_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14100---------------------------");
        });         

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14200
        * @tc.name    readParcelable is Call JS callback function failedv Error message verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14200", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let sequenceable = new MySequenceableCode(1, "aaa");
                data.writeParcelable(sequenceable);
                data.setCapacity(0);
                data.setSize(0);
                let ret = new MySequenceable(1, "");
                data.readParcelable(ret);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.CALL_JS_METHOD_ERROR}`;
                expect(error.message != null).assertTrue();
                expect(error.code != errCode).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14200---------------------------");
        });
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14300
        * @tc.name    Call the writeinterfacetoken interface, write the interface descriptor, and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14300", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = "hello ruan zong xian";
                data.writeInterfaceToken(token);
                data.setCapacity(0);
                data.setSize(0);
                data.readInterfaceToken();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.READ_DATA_FROM_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.message != null).assertTrue();
                expect(error.code != errCode).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14300---------------------------");
        });         
    
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14400
        * @tc.name    writeString check param error Error message verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14400", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = '';
                for(let i = 0; i < 40*K; i++){
                    token += 'a';
                };
                data.writeString(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14400---------------------------");
        });
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14500
        * @tc.name    writeInterfaceToken Sequence memory alloc failed Error message verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14500", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                data.setSize(0);
                data.setCapacity(0);
                let token = "hello ruan zong xian";
                data.writeInterfaceToken(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.PARCEL_MEMORY_ALLOC_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14500---------------------------");
        }); 
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14600
        * @tc.name    writeInterfaceToken Write data to message sequence failed Error message verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14600", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                data.setSize(true);
                data.setCapacity(true);
                let token = "hello ruan zong xian";
                data.writeInterfaceToken(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14600---------------------------");
        });          
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14700
        * @tc.name    readParcelable Sequence memory alloc failed Error message verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14700", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let sequenceable = new MySequenceable(1, "aaa");
                data.writeParcelable(sequenceable);
                let ret = new MySequenceable(0, "");
                data.setCapacity(0);
                data.readParcelable(ret);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageSequence_testcase error is:" + error);
                let errCode = `${rpc.ErrorCode.PARCEL_MEMORY_ALLOC_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14700---------------------------");
        });       
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageSequence_14800
        * @tc.name    Test messageparcel delivery file descriptor object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageSequence_14800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageSequence_14800---------------------------");
            let context = FA.getContext();
            await context.getFilesDir()
                .then(async function(path) {
                    expect(path != null).assertTrue();
                    let basePath = path;
                    let filePath = basePath + "/test1.txt";
                    let fd = fileio.openSync(filePath, 0o2| 0o100 | 0o2000, 0o666);
                    expect(fd >= 0).assertTrue();
                    let str = "HELLO RPC";
                    let bytesWr = fileio.writeSync(fd, str);
                    let option = new rpc.MessageOption();
                    var data = rpc.MessageSequence.create();
                    var reply = rpc.MessageSequence.create();
                    data.containFileDescriptors();
                    data.writeInt(bytesWr);
                    data.writeFileDescriptor(fd);
                    data.containFileDescriptors();
                    data.containFileDescriptors();
                    await gIRemoteObject.sendMessageRequest(CODE_FILESDIR, data, reply, option)
                        .then(function(result) {
                            expect(result.errCode).assertEqual(0);
                            let buf = new ArrayBuffer(str.length * 2);
                            let bytesRd = fileio.readSync(fd, buf, {position:0,});
                            expect(bytesRd == (bytesWr + bytesWr)).assertTrue();
                            let fdResult = result.reply.readFileDescriptor();
                            expect(fdResult >= fd).assertTrue();
                            let content = String.fromCharCode.apply(null, new Uint8Array(buf));
                            expect(content).assertEqual(str + str);
                            let dupFd = rpc.MessageSequence.dupFileDescriptor(fd);
                            expect(dupFd >= fd).assertTrue();
                            let buf2 = new ArrayBuffer(str.length * 2);
                            let byteRd2 = fileio.readSync(dupFd, buf2, {position:0,});
                            expect(byteRd2 == (bytesWr + bytesWr)).assertTrue();
                            let content2 = String.fromCharCode.apply(null, new Uint8Array(buf2));
                            expect(content2).assertEqual(str + str);
                            rpc.MessageSequence.closeFileDescriptor(fd);
                            rpc.MessageSequence.closeFileDescriptor(dupFd);
                        })
                    try {
                        console.info("after close fd, write again");
                        fileio.writeSync(fd, str);
                        expect(0).assertEqual(1);
                    } catch(e) {
                        console.error("got exception: " + e);
                    } finally{
                        data.reclaim();
                        reply.reclaim();
                        done();
                    }
                })
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageSequence_14800---------------------------");
        });        

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00100
        * @tc.name    Call the writeinterfacetoken interface, write the interface descriptor, and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00100", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = "hello ruan zong xian";
                let result = data.writeInterfaceToken(token);
                expect(result).assertTrue();
                let resultToken = data.readInterfaceToken();
                expect(resultToken).assertEqual(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_testcase error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00200
        * @tc.name    Call the writeinterfacetoken interface, write the interface descriptor, and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00200", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00200---------------------------");
            try{
                for (let i = 0; i<5; i++){
                    var data = rpc.MessageParcel.create();
                    let token = "hello ruan zong xian";
                    let result = data.writeInterfaceToken(token);
                    expect(result).assertTrue();
                    let resultToken = data.readInterfaceToken();
                    expect(resultToken).assertEqual(token);
                }
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00300
        * @tc.name    Call the writeinterfacetoken interface to write a non string interface descriptor 
        *             and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00300", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = "";
                for(let i = 0; i < (40*K -1); i++){
                    token += 'a';
                };
                let result = data.writeInterfaceToken(token);
                expect(result).assertTrue();
                let resultToken = data.readInterfaceToken();
                expect(resultToken).assertEqual(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00400
        * @tc.name    The WriteInterfaceToken interface is called, the exceeding-length interface descriptor is written,
        *               and the InterfaceToken is read
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00400", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = "";
                for(let i = 0; i < 40*K; i++){
                    token += 'a';
                };
                let result = data.writeInterfaceToken(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00500
        * @tc.name    Call the writeinterfacetoken interface to write a non string interface descriptor 
        *               and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00500", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = 123;
                let result = data.writeInterfaceToken(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00600
        * @tc.name    The data size of the messageparcel obtained by calling the getSize interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00600", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let size = data.getSize();
                expect(size).assertEqual(0);
                let addData = 1;
                let result = data.writeInt(addData);
                expect(result).assertTrue();
                size = data.getSize();
                expect(size).assertEqual(4);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00700
        * @tc.name    The capacity of the messageparcel obtained by calling the getcapacity interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00700", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let size = data.getCapacity();
                expect(size).assertEqual(0);
                let addData = 1;
                let result = data.writeInt(addData);
                expect(result).assertTrue();
                size = data.getCapacity();
                expect(size).assertEqual(64);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00800
        * @tc.name    Call the SetSize interface to set the data size of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00800", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let addData = 1;
                let result = data.writeInt(addData);
                expect(result).assertTrue();
                let size = 6;
                let setResult = data.setSize(size);
                expect(setResult).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_00900
        * @tc.name    Call the SetSize interface to set the data size of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_00900", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_00900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let addData = 1;
                let result = data.writeInt(addData);
                expect(result).assertTrue();
                let size = 4*G;
                let setResult = data.setSize(size);
                expect(setResult).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_00900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01000
        * @tc.name    Call the SetSize interface to set the data size of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01000", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let addData = 1;
                let result = data.writeInt(addData);
                expect(result).assertTrue();
                let size = 4*G - 4;
                let setResult = data.setSize(size);
                expect(setResult).assertEqual(false);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01100
        * @tc.name    Call the SetSize interface to set the data size of messageparcel. The write data size 
        *             does not match the set value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01100", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let capacity = 64;
                let setResult = data.setCapacity(capacity);
                expect(setResult).assertTrue();
                let size = 4;
                setResult = data.setSize(size);
                expect(setResult).assertTrue();
                let addData = 2;
                let result = data.writeLong(addData);
                expect(result).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01200
        * @tc.name    Call the setcapacity interface to set the capacity of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01200", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let size = 64;
                let setResult = data.setCapacity(size);
                expect(setResult).assertTrue();
                let addData = 1;
                let result = data.writeInt(addData);
                expect(result).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01300
        * @tc.name    Call the setcapacity interface to set the capacity of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01300", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let size = M;
                let setResult = data.setCapacity(size);
                expect(setResult).assertTrue();
                let addData = 1;
                let result = data.writeInt(addData);
                expect(result).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01400
        * @tc.name    Call the setcapacity interface to set the capacity of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01400", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let size = 4*G;
                let setResult = data.setCapacity(size);
                expect(setResult).assertEqual(false);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01500
        * @tc.name    Call the setcapacity interface to set the capacity of messageparcel.
        *             The write data capacity is inconsistent with the set value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01500", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let size = 4;
                let setResult = data.setCapacity(size);
                expect(setResult).assertTrue();
                let addData = [1, 2, 3, 4, 5, 6, 7, 8];
                let result = data.writeIntArray(addData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01600
        * @tc.name    Empty object to obtain the readable byte space, read location,
        *             writable byte space and write location information of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01600", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let result1 = data.getWritableBytes();
                expect(result1).assertEqual(0);
                let result2 = data.getReadableBytes();
                expect(result2).assertEqual(0);
                let result3 = data.getReadPosition();
                expect(result3).assertEqual(0);
                let result4 = data.getWritePosition();
                expect(result4).assertEqual(0);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01700
        * @tc.name    Create an object and write data to obtain the readable byte space, read location,
        *             writable byte space and write location information of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01700", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let dataInt = 1;
                let resultInt = data.writeInt(dataInt);
                expect(resultInt).assertTrue();
                let dataLong = 2;
                let resultLong = data.writeLong(dataLong);
                expect(resultLong).assertTrue();
                let result1 = data.getWritableBytes();
                expect(result1).assertEqual(52);
                let result2 = data.getReadableBytes();
                expect(result2).assertEqual(12);
                let result3 = data.getReadPosition();
                expect(result3).assertEqual(0);
                let result4 = data.getWritePosition();
                expect(result4).assertEqual(12);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01800
        * @tc.name    Call rewindread interface to offset the read position to the specified position
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01800", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                expect(data.getWritableBytes()).assertEqual(0);
                expect(data.getReadableBytes()).assertEqual(0);
                expect(data.getReadPosition()).assertEqual(0);
                expect(data.getWritePosition()).assertEqual(0);
                let dataInt = 1;
                let resultInt = data.writeInt(dataInt);
                let dataLong = 2;
                let resultLong = data.writeLong(dataLong);
                expect(resultLong).assertTrue();
                expect(data.getWritableBytes()).assertEqual(52);
                expect(data.getReadableBytes()).assertEqual(12);
                expect(data.getReadPosition()).assertEqual(0);
                expect(data.getWritePosition()).assertEqual(12);
                let readIntData = data.readInt();
                expect(readIntData).assertEqual(dataInt);
                let writePosition = 0;
                let writeResult = data.rewindWrite(writePosition);
                expect(writeResult).assertTrue();
                expect(data.getWritePosition()).assertEqual(0);
                dataInt = 3;
                resultInt = data.writeInt(dataInt);
                let readPosition = 0;
                let readResult = data.rewindRead(readPosition);
                expect(readResult).assertTrue();
                readIntData = data.readInt();
                expect(readIntData).assertEqual(dataInt);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_01900
        * @tc.name    The rewindread interface is called to re offset the read position to the specified position.
        *               The specified position is out of range
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_01900", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_01900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let result1 = data.getWritableBytes();
                expect(result1 == 0).assertTrue();
                let result2 = data.getReadableBytes();
                expect(result2 == 0).assertTrue();
                let result3 = data.getReadPosition();
                expect(result3 == 0).assertTrue();
                let result4 = data.getWritePosition();
                expect(result4 == 0).assertTrue();
                let dataInt = 1;
                let resultInt = data.writeInt(dataInt);
                expect(resultInt).assertTrue();
                let dataLong = 2;
                let resultLong = data.writeLong(dataLong);
                expect(resultLong).assertTrue();
                result1 = data.getWritableBytes();
                expect(result1 == 52).assertTrue();
                result2 = data.getReadableBytes();
                expect(result2 == 12).assertTrue();
                result3 = data.getReadPosition();
                expect(result3 == 0).assertTrue();
                result4 = data.getWritePosition();
                expect(result4 == 12).assertTrue();
                let readPosition = 100;
                let readResult = data.rewindRead(readPosition);
                expect(readResult == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_01900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02000
        * @tc.name    Call rewindwrite and the interface offsets the write position to the specified position
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02000", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let dataInt = 1;
                let resultInt = data.writeInt(dataInt);
                expect(resultInt).assertTrue();
                let readIntData = data.readInt();
                expect(readIntData).assertEqual(dataInt);
                let writePosition = 0;
                let rewindWriteResult = data.rewindWrite(writePosition);
                expect(rewindWriteResult).assertTrue();
                dataInt = 3;
                resultInt = data.writeInt(dataInt);
                expect(resultInt).assertTrue();
                let readPosition = 0;
                let rewindReadResult = data.rewindRead(readPosition);
                expect(rewindReadResult);
                readIntData = data.readInt();
                expect(readIntData).assertEqual(dataInt);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02100
        * @tc.name    Call rewindwrite and the interface offsets the write position to the specified position.
        *               The specified position is out of range
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02100", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let dataInt = 1;
                let resultInt = data.writeInt(dataInt);
                expect(resultInt).assertTrue();
                let readIntData = data.readInt();
                expect(readIntData == dataInt).assertTrue();
                let writePosition = 99;
                let rewindWriteResult = data.rewindWrite(writePosition);
                expect(rewindWriteResult).assertEqual(false);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02200
        * @tc.name    Call the writeshortarray interface, write the array to the messageparcel instance,
        *             and call readshortarray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02200", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wShortArryData = [3, 5, 9];
                let writeShortArrayResult = data.writeShortArray(wShortArryData);
                expect(writeShortArrayResult).assertTrue();
                let rShortArryData = data.readShortArray();
                assertArrayElementEqual(rShortArryData,wShortArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02300
        * @tc.name    Call the writeshortarray interface, write the short integer array to the messageparcel instance,
        *             and call readshortarray (datain: number []) to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02300", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wShortArryData = [];
                for(let i=0;i<(50*K - 1);i++){
                    wShortArryData[i] = 1;
                };
                let writeShortArrayResult = data.writeShortArray(wShortArryData);
                expect(writeShortArrayResult).assertTrue();
                let rShortArryData = [];
                data.readShortArray(rShortArryData);
                assertArrayElementEqual(rShortArryData,wShortArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02400
        * @tc.name    Writeshortarray interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02400", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wShortArryData = [-32768, 0, 1, 2, 32767];
                let writeShortArrayResult = data.writeShortArray(wShortArryData);
                expect(writeShortArrayResult).assertTrue();
                let rShortArryData = [];
                data.readShortArray(rShortArryData);
                assertArrayElementEqual(rShortArryData,wShortArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02500
        * @tc.name    Writeshortarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02500", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wShortArryData = [-32769, 0, 1, 2];
                let writeShortArrayResult = data.writeShortArray(wShortArryData);
                expect(writeShortArrayResult).assertTrue();
                let rShotrArrayData = data.readShortArray();
                expect(32767).assertEqual(rShotrArrayData[0]);
                expect(wShortArryData[1]).assertEqual(rShotrArrayData[1]);
                expect(wShortArryData[2]).assertEqual(rShotrArrayData[2]);
                expect(wShortArryData[3]).assertEqual(rShotrArrayData[3]);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02600
        * @tc.name    Writeshortarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02600", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wShortArryData = [0, 1, 2, 32768];
                let writeShortArrayResult = data.writeShortArray(wShortArryData);
                expect(writeShortArrayResult).assertTrue();
                let rShotrArrayData = data.readShortArray();
                expect(wShortArryData[0]).assertEqual(rShotrArrayData[0]);
                expect(wShortArryData[1]).assertEqual(rShotrArrayData[1]);
                expect(wShortArryData[2]).assertEqual(rShotrArrayData[2]);
                expect(-32768).assertEqual(rShotrArrayData[3]);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02700
        * @tc.name    Writeshortarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02700", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wShortArryData = [];
                for (let i = 0; i < 50*K; i++){
                    wShortArryData[i] = 11111;
                };
                let writeShortArrayResult = data.writeShortArray(wShortArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02800
        * @tc.name    Call the writelongarray interface, write the long integer array to the messageparcel instance,
        *             and call readlongarray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02800", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let LongArryData = [];
                for (let i = 0;i<(25*K - 1);i++){
                    LongArryData[i] = 11;
                };
                let WriteLongArray = data.writeLongArray(LongArryData);
                expect(WriteLongArray).assertTrue();
                let rLongArryData = data.readLongArray();
                assertArrayElementEqual(LongArryData,rLongArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_02900
        * @tc.name    Writelongarray interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_02900", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_02900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wLongArryData = [-2147483648, 0, 1, 2, 2147483647];
                let writeLongArrayResult = data.writeLongArray(wLongArryData);
                expect(writeLongArrayResult).assertTrue();
                let rLongArryData = data.readLongArray();
                assertArrayElementEqual(wLongArryData,rLongArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_02900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03000
        * @tc.name    Writelongarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03000", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let errorLongArryData = [-2147483649, 0, 1, 2, 3];
                let erWriteLongArray = data.writeLongArray(errorLongArryData);
                expect(erWriteLongArray).assertTrue();
                let erLongArryData = data.readLongArray();
                assertArrayElementEqual(errorLongArryData,erLongArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03100
        * @tc.name    Writelongarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03100", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let errorLongArryData = [0, 1, 2, 3, 2147483648];
                let erWriteLongArray = data.writeLongArray(errorLongArryData);
                expect(erWriteLongArray).assertTrue();
                let erLongArryData = data.readLongArray();
                assertArrayElementEqual(errorLongArryData,erLongArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03200
        * @tc.name    Writelongarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03200", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let errorLongArryData = [];
                for (let i = 0;i<25*K;i++){
                    errorLongArryData[i] = 11;
                };
                let erWriteLongArray = data.writeLongArray(errorLongArryData);
                expect(erWriteLongArray).assertEqual(false);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03300
        * @tc.name    Call the writedoublearray interface, write the array to the messageparcel instance,
        *             and call readdoublearra to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03300", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wDoubleArryData = [1.2, 235.67, 99.76];
                let writeDoubleArrayResult = data.writeDoubleArray(wDoubleArryData);
                expect(writeDoubleArrayResult).assertTrue();
                let rDoubleArryData = data.readDoubleArray();
                assertArrayElementEqual(wDoubleArryData,rDoubleArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03400
        * @tc.name    Call the writedoublearray interface, write the array to the messageparcel instance,
        *             and call readdoublearra (datain: number []) to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03400", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wDoubleArryData = [];
                for(let i = 0;i < (25*K - 1);i++){
                    wDoubleArryData[i] = 11.1;
                };
                let writeDoubleArrayResult = data.writeDoubleArray(wDoubleArryData);
                expect(writeDoubleArrayResult).assertTrue();
                let rDoubleArryData = [];
                data.readDoubleArray(rDoubleArryData);
                assertArrayElementEqual(wDoubleArryData,rDoubleArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03500
        * @tc.name    Writedoublearray interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03500", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wDoubleArryData = [-1235453.2, 235.67, 9987659.76];
                let writeDoubleArrayResult = data.writeDoubleArray(wDoubleArryData);
                expect(writeDoubleArrayResult).assertTrue();
                let rDoubleArryData = data.readDoubleArray();
                assertArrayElementEqual(wDoubleArryData,rDoubleArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03600
        * @tc.name    Writedoublearray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03600", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let DoubleArryData = [-12354883737337373873853.2, 235.67, 99999999999999993737373773987659.76];
                let WriteDoubleArrayResult = data.writeDoubleArray(DoubleArryData);
                expect(WriteDoubleArrayResult).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03700
        * @tc.name    Writedoublearray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03700", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let errorDoubleArryData = [];
                for (let i=0;i<25*K;i++){
                    errorDoubleArryData[i] = 11.1;
                };
                data.writeDoubleArray(errorDoubleArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03800
        * @tc.name    Call the writeboolean array interface, write the array to the messageparcel instance,
        *             and call readboolean array to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03800", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wBooleanArryData = [true, false, false];
                let writeBooleanArrayResult = data.writeBooleanArray(wBooleanArryData);
                expect(writeBooleanArrayResult).assertTrue();
                let rBooleanArryData = data.readBooleanArray();
                assertArrayElementEqual(wBooleanArryData,rBooleanArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_03900
        * @tc.name    Call the writeboolean array interface, write the array to the messageparcel instance,
        *             and call readboolean array (datain: number []) to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_03900", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_03900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wBooleanArryData = [];
                for (let i=0;i<(50*K - 1);i++){
                    if (i % 2 == 0){
                        wBooleanArryData[i] = false;
                    }else {
                        wBooleanArryData[i] = true;
                    };
                };
                let writeBooleanArrayResult = data.writeBooleanArray(wBooleanArryData);
                expect(writeBooleanArrayResult).assertTrue();
                let rBooleanArryData = [];
                data.readBooleanArray(rBooleanArryData);
                assertArrayElementEqual(wBooleanArryData,rBooleanArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_03900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04000
        * @tc.name    Writeboolean array interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04000", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let BooleanArryData = [true, 'abc', false];
                let WriteBooleanArrayResult = data.writeBooleanArray(BooleanArryData);
                expect(WriteBooleanArrayResult).assertTrue();
                let rBooleanArryData = data.readBooleanArray();
                let newboolean = [true,false,false];
                assertArrayElementEqual(newboolean,rBooleanArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04100
        * @tc.name    Writeboolean array interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04100", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let errorBooleanArryData = [];
                for (let i=0;i<50*K;i++){
                    if (i % 2 == 0){
                        errorBooleanArryData[i] = false;
                    }else {
                        errorBooleanArryData[i] = true;
                    };
                }
                data.writeBooleanArray(errorBooleanArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04200
        * @tc.name    Call the writechararray interface, write the array to the messageparcel instance,
        *             and call readchararray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04200", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wCharArryData = [];
                for(let i=0;i<(50*K - 1);i++){
                    wCharArryData[i] = 96;
                }
                let writeCharArrayResult = data.writeCharArray(wCharArryData);
                expect(writeCharArrayResult).assertTrue();
                let rCharArryData = data.readCharArray();
                assertArrayElementEqual(wCharArryData,rCharArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04300
        * @tc.name    Call the writechararray interface, write the array to the messageparcel instance,
        *             and call readchararray (datain: number []) to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04300", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wCharArryData = [];
                for(let i=0;i<(50*K - 1);i++){
                    wCharArryData[i] = 96;
                }
                let writeCharArrayResult = data.writeCharArray(wCharArryData);
                expect(writeCharArrayResult).assertTrue();
                let rCharArryData = [];
                data.readCharArray(rCharArryData);
                assertArrayElementEqual(wCharArryData,rCharArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04400
        * @tc.name    Writechararray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04400", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let errorCharArryData = [10, 'asfgdgdtu', 20];
                let WriteCharArrayResult = data.writeCharArray(errorCharArryData);
                expect(WriteCharArrayResult).assertTrue();
                let rCharArryData = data.readCharArray();
                let xresult = [10,0,20];
                assertArrayElementEqual(xresult,rCharArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04500
        * @tc.name    Call the writestringarray interface, write the array to the messageparcel instance,
        *             and call readstringarray (datain: number []) to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04500", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wStringArryData = ['abc', 'hello', 'beauty'];
                let writeStringArrayResult = data.writeStringArray(wStringArryData);
                expect(writeStringArrayResult).assertTrue();
                let rStringArryData = data.readStringArray();
                assertArrayElementEqual(wStringArryData,rStringArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04600
        * @tc.name    Call the writestringarray interface, write the array to the messageparcel instance,
        *             and call readstringarray() to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04600", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let wStringArryData = ['abc', 'hello', 'beauty'];
                let writeStringArrayResult = data.writeStringArray(wStringArryData);
                expect(writeStringArrayResult).assertTrue();
                let rStringArryData = [];
                data.readStringArray(rStringArryData);
                assertArrayElementEqual(wStringArryData,rStringArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04700
        * @tc.name    Writestringarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04700", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let errorStringArryData = ['abc', 123, 'beauty'];
                data.writeStringArray(errorStringArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04800
        * @tc.name    Writestringarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04800", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let errorStringArryData = [];
                for (let i=0;i<(10*K - 1);i++){
                    errorStringArryData[i] = "heddSDF";
                }
                let WriteStringArrayResult = data.writeStringArray(errorStringArryData);
                expect(WriteStringArrayResult).assertTrue();
                let errorStringArray = data.readStringArray();
                assertArrayElementEqual(errorStringArray,errorStringArryData);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_04900
        * @tc.name    Call the writebytearray interface, write the array to the messageparcel instance,
        *             and call readbytearray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_04900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_04900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let ByteArraylet = [1, 2, 3, 4, 5];
                let writeShortArrayResult = data.writeByteArray(ByteArraylet);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let shortArryDataReply = result.reply.readByteArray();
                    assertArrayElementEqual(ByteArraylet,shortArryDataReply);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_04900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05000
        * @tc.name    Call the writebytearray interface, write the array to the messageparcel instance,
        *             and call readbytearray (datain: number []) to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let ByteArraylet = [1, 2, 3, 4, 5];
                let writeShortArrayResult = data.writeByteArray(ByteArraylet);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    let newArr = new Array(5);
                    result.reply.readByteArray(newArr);
                    assertArrayElementEqual(ByteArraylet,newArr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05100
        * @tc.name    Writebytearray interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let teArraylet = [-128, 0, 1, 2, 127];
                let writeShortArrayResult = data.writeByteArray(teArraylet);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    let newArr = new Array(5)
                    result.reply.readByteArray(newArr);
                    assertArrayElementEqual(newArr,teArraylet);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05200
        * @tc.name    Writebytearray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let teArraylet = [-128, 0, 1, 2, 128];
                let writeShortArrayResult = data.writeByteArray(teArraylet);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let shortArryDataReply = result.reply.readByteArray();
                    expect(shortArryDataReply[0] == teArraylet[0]).assertTrue();
                    expect(shortArryDataReply[1] == teArraylet[1]).assertTrue();
                    expect(shortArryDataReply[2] == teArraylet[2]).assertTrue();
                    expect(shortArryDataReply[3] == teArraylet[3]).assertTrue();
                    expect(shortArryDataReply[4] == -128).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05300
        * @tc.name    Writebytearray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let ByteArraylet = [-129, 0, 1, 2, 127];
                let writeShortArrayResult = data.writeByteArray(ByteArraylet);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let shortArryDataReply = result.reply.readByteArray();
                    expect(shortArryDataReply[0] == 127).assertTrue();
                    expect(shortArryDataReply[1] == ByteArraylet[1]).assertTrue();
                    expect(shortArryDataReply[2] == ByteArraylet[2]).assertTrue();
                    expect(shortArryDataReply[3] == ByteArraylet[3]).assertTrue();
                    expect(shortArryDataReply[4] == ByteArraylet[4]).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05400
        * @tc.name    Call the writeintarray interface, write the array to the messageparcel instance,
        *             and call readintarray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let intArryData = [100, 111, 112];
                let writeShortArrayResult = data.writeIntArray(intArryData);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let shortArryDataReply = result.reply.readIntArray();
                    assertArrayElementEqual(intArryData,shortArryDataReply);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05500
        * @tc.name    Call the writeintarray interface, write the array to the messageparcel instance,
        *             and call readintarray (datain: number []) to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let intArryData = [100, 111, 112];
                let writeShortArrayResult = data.writeIntArray(intArryData);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let newArr = [];
                    result.reply.readIntArray(newArr);
                    assertArrayElementEqual(intArryData,newArr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05600
        * @tc.name    Writeintarray interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05600", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let intArryData = [-2147483648, 0, 1, 2, 2147483647];
                let writeIntArrayResult = data.writeIntArray(intArryData);
                expect(writeIntArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let shortArryDataReply = result.reply.readIntArray();
                    assertArrayElementEqual(intArryData,shortArryDataReply);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05700
        * @tc.name    Writeintarray interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05700", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let intArryData = [-2147483649, 0, 1, 2, 2147483647];
                let writeIntArrayResult = data.writeIntArray(intArryData);
                expect(writeIntArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let shortArryDataReply = result.reply.readIntArray();
                    expect(shortArryDataReply[0] == 2147483647).assertTrue();
                    expect(shortArryDataReply[1] == intArryData[1]).assertTrue();
                    expect(shortArryDataReply[2] == intArryData[2]).assertTrue();
                    expect(shortArryDataReply[3] == intArryData[3]).assertTrue();
                    expect(shortArryDataReply[4] == intArryData[4]).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05800
        * @tc.name    Writeintarray interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05800", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let intArryData = [0, 1, 2, 3, 2147483648];
                let writeIntArrayResult = data.writeIntArray(intArryData);
                expect(writeIntArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let shortArryDataReply = result.reply.readIntArray();
                    let newintArryData = [0, 1, 2, 3, -2147483648];
                    assertArrayElementEqual(newintArryData,shortArryDataReply);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_05900
        * @tc.name    Call the writefloatarray interface, write the array to the messageparcel instance,
        *             and call readfloatarray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_05900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_05900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let floatArryData = [1.2, 1.3, 1.4];
                let writeShortArrayResult = data.writeFloatArray(floatArryData);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let floatArryDataReply = result.reply.readFloatArray();
                    assertArrayElementEqual(floatArryData,floatArryDataReply);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_05900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06000
        * @tc.name    Call the writefloatarray interface, write the array to the messageparcel instance,
        *             and call readfloatarray (datain: number []) to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let floatArryData = [1.2, 1.3, 1.4]
                let writeShortArrayResult = data.writeFloatArray(floatArryData);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let newArr = []
                    result.reply.readFloatArray(newArr);
                    assertArrayElementEqual(floatArryData,newArr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06100
        * @tc.name    Writefloatarray interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let floatArryData = [-3.40E+38, 1.3, 3.40E+38];
                let writeShortArrayResult = data.writeFloatArray(floatArryData);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let newArr = result.reply.readFloatArray();
                    assertArrayElementEqual(floatArryData,newArr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06200
        * @tc.name    Writefloatarray interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let floatArryData = [-4.40E+38, 1.3, 3.40E+38];
                let writeShortArrayResult = data.writeFloatArray(floatArryData);
                expect(writeShortArrayResult == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let newArr = result.reply.readFloatArray();
                    expect(newArr[0] == floatArryData[0]).assertTrue();
                    expect(newArr[1] == floatArryData[1]).assertTrue();
                    expect(newArr[2] == floatArryData[2]).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06300
        * @tc.name    Call the writeShort interface to write the short integer data to the messageparcel instance,
        *             and call readshort to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let short = 8;
                let writeShor = data.writeShort(short);
                expect(writeShor == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SHORT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let readShort = result.reply.readShort();
                    expect(readShort == short).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06400
        * @tc.name    WriteShort interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeShort(-32768) == true).assertTrue();
                expect(data.writeShort(0) == true).assertTrue();
                expect(data.writeShort(1) == true).assertTrue();
                expect(data.writeShort(2) == true).assertTrue();
                expect(data.writeShort(32767) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SHORT_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    expect(result.reply.readShort() == -32768).assertTrue();
                    expect(result.reply.readShort() == 0).assertTrue();
                    expect(result.reply.readShort() == 1).assertTrue();
                    expect(result.reply.readShort() == 2).assertTrue();
                    expect(result.reply.readShort() == 32767).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06500
        * @tc.name    WriteShort interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeShort(32768) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SHORT_MULTI, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    expect(result.reply.readShort() == -32768).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06600
        * @tc.name    Call the writeShort interface to write the short integer data to the messageparcel instance,
        *             and call readshort to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let short = -32769;
                let writeShor = data.writeShort(short);
                expect(writeShor == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SHORT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let readShort = result.reply.readShort();
                    expect(readShort == 32767).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06700
        * @tc.name    Call the writeShort interface to write the short integer data to the messageparcel instance,
        *             and call readshort to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let short = 32768;
                let writeShor = data.writeShort(short);
                expect(writeShor == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SHORT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let readShort = result.reply.readShort();
                    expect(readShort == -32768).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06800
        * @tc.name    Call writelong interface to write long integer data to messageparcel instance
        *             and call readlong to read data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let short = 10000;
                let writelong = data.writeLong(short);
                expect(writelong == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let readlong = result.reply.readLong();
                    expect(readlong == short).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_06900
        * @tc.name    Writelong interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_06900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_06900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let short = 2147483647;
                let writelong = data.writeLong(short);
                expect(writelong == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let readlong = result.reply.readLong();
                    expect(readlong == short).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_06900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07000
        * @tc.name    Writelong interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let short = 214748364887;
                let writelong = data.writeLong(short);
                expect(writelong == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let readlong = result.reply.readLong();
                    expect(readlong == short).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07100
        * @tc.name    Writelong interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let short = 2147483649;
                let writelong = data.writeLong(short);
                expect(writelong == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let readlong = result.reply.readLong();
                    expect(readlong == short).assertTrue();
                })
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07200
        * @tc.name    Call the parallel interface to read and write data to the double instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 10.2;
                let result = data.writeDouble(token);
                expect(result).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                    let replyReadResult = reply.readDouble();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07300
        * @tc.name    Writedouble interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 1.79E+308;
                let result = data.writeDouble(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                    let replyReadResult = reply.readDouble();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07400
        * @tc.name    Writedouble interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 4.9000000e-32;
                let result = data.writeDouble(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                    let replyReadResult = reply.readDouble();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07500
        * @tc.name    Writedouble interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07500", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = "1.79E+465312156";
                data.writeDouble(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07600
        * @tc.name    Call the writeboolean interface to write the data to the messageparcel instance,
        *             and call readboolean to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = true;
                let result = data.writeBoolean(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BOOLEAN, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readBoolean();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07700
        * @tc.name    Call the writeboolean interface to write the data to the messageparcel instance,
        *             and call readboolean to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07700", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = false;
                let result = data.writeBoolean(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BOOLEAN, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readBoolean();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07800
        * @tc.name    Writeboolean interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = 9;
                data.writeBoolean(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_07900
        * @tc.name    Writeboolean interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_07900", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_07900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = "aaa";
                data.writeBoolean(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_07900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08000
        * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
        *             and call readchar to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08000", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 65;
                let result = data.writeChar(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readChar();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08100
        * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
        *             and call readchar to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08100", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 122;
                let result = data.writeChar(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readChar();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08200
        * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
        *             and call readchar to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 64;
                let result = data.writeChar(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readChar();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08300
        * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
        *             and call readchar to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08300", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 123;
                let result = data.writeChar(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readChar();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08400
        * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
        *             and call readchar to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 65;
                let result = data.writeChar(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readChar();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08500
        * @tc.name    Writechar interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08500", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = 'ades';
                data.writeChar(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08600
        * @tc.name    Call the writestring interface to write the data to the messageparcel instance,
        *             and call readstring() to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = '';
                for(let i = 0; i < (40*K - 1); i++){
                    token += 'a';
                };
                let result = data.writeString(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readString();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08700
        * @tc.name    Call the writestring interface to write the data to the messageparcel instance,
        *             and call readstring() to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = '';
                for(let i = 0; i < 40*K; i++){
                    token += 'a';
                };
                data.writeString(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08800
        * @tc.name    Writestring interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = 123;
                data.writeString(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_08900
        * @tc.name    Call the writebyte interface to write data to the messageparcel instance,
        *             and call readbyte to read data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_08900", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_08900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 2;
                let result = data.writeByte(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTE, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readByte();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_08900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09000
        * @tc.name    Writebyte interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09000", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeByte(-128) == true).assertTrue();
                expect(data.writeByte(0) == true).assertTrue();
                expect(data.writeByte(1) == true).assertTrue();
                expect(data.writeByte(2) == true).assertTrue();
                expect(data.writeByte(127) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTE_MULTI, data, reply, option).then((result) => {
                    expect(reply.readByte() == -128).assertTrue();
                    expect(reply.readByte() == 0).assertTrue();
                    expect(reply.readByte() == 1).assertTrue();
                    expect(reply.readByte() == 2).assertTrue();
                    expect(reply.readByte() == 127).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09100
        * @tc.name    Writebyte interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09100", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeByte(-129) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTE_MULTI, data, reply, option).then((result) => {
                    expect(reply.readByte() == 127).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09200
        * @tc.name    Writebyte interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeByte(128) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_BYTE_MULTI, data, reply, option).then((result) => {
                    expect(reply.readByte() == -128).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09300
        * @tc.name    Writebyte interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let writeby = data.writeByte("error");
                expect(writeby).assertEqual(false);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09400
        * @tc.name    Call the writeint interface to write the data to the messageparcel instance,
        *             and call readint to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 2;
                let result = data.writeInt(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readInt();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09500
        * @tc.name    Writeint interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09500", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeInt(-2147483648) == true).assertTrue();
                expect(data.writeInt(0) == true).assertTrue();
                expect(data.writeInt(1) == true).assertTrue();
                expect(data.writeInt(2) == true).assertTrue();
                expect(data.writeInt(2147483647) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                    expect(result.reply.readInt() == -2147483648).assertTrue();
                    expect(result.reply.readInt() == 0).assertTrue();
                    expect(result.reply.readInt() == 1).assertTrue();
                    expect(result.reply.readInt() == 2).assertTrue();
                    expect(result.reply.readInt() == 2147483647).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09600
        * @tc.name    Writeint interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeInt(2147483648) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                    expect(result.reply.readInt() == -2147483648).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09700
        * @tc.name    Writeint interface, illegal value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09700", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeInt(-2147483649) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                    expect(result.reply.readInt() == 2147483647).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09800
        * @tc.name    Call the writefloat interface to write data to the messageparcel instance,
        *             and call readfloat to read data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 2.2;
                let result = data.writeFloat(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readFloat();
                    expect(replyReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_09900
        * @tc.name    Writefloat interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_09900", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_09900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 3.4E+38;
                let result = data.writeFloat(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    let newReadResult = result.reply.readFloat();
                    expect(newReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_09900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10000
        * @tc.name    Writefloat interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10000", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 1.4E-45;
                let result = data.writeFloat(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    let newReadResult = result.reply.readFloat();
                    expect(newReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10100
        * @tc.name    Writefloat interface, boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10100", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 4.4E+38;
                let result = data.writeFloat(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                    let newReadResult = result.reply.readFloat();
                    expect(newReadResult == token).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10200
        * @tc.name    Writefloat interface, illegal value validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10200", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = 'a';
                let result = data.writeFloat(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10300
        * @tc.name    Test messageparcel to deliver rawdata data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let Capacity = data.getRawDataCapacity();
                expect(Capacity).assertEqual(128*M);
                let rawdata = [1, 2, 3]
                let result = data.writeRawData(rawdata, rawdata.length);
                expect(result == true).assertTrue();
                let newReadResult = data.readRawData(rawdata.length);
                assertArrayElementEqual(newReadResult,rawdata);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10400
        * @tc.name    Illegal value passed in from writerawdata interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let Capacity = data.getRawDataCapacity();
                expect(Capacity).assertEqual(128*M);
                let token = [2,1,4,3,129] ;
                let result = data.writeRawData(token, 149000000);
                expect(result == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10500
        * @tc.name    Illegal value passed in from writerawdata interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10500---------------------------");
            try{
                var parcel = new rpc.MessageParcel();
                var reply = new rpc.MessageParcel();
                let option = new rpc.MessageOption();
                let arr = [1, 2, 3, 4, 5];
                expect(parcel.writeInt(arr.length)).assertTrue();
                let isWriteSuccess = parcel.writeRawData(arr, arr.length);
                expect(isWriteSuccess).assertTrue();
                let Capacity = parcel.getRawDataCapacity()
                expect(Capacity).assertEqual(128*M);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let size = result.reply.readInt();
                    expect(size).assertEqual(arr.length);
                    let reCapacity = parcel.getRawDataCapacity();
                    expect(reCapacity).assertEqual(128*M);
                    let newReadResult = result.reply.readRawData(size);
                    assertArrayElementEqual(newReadResult,arr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10600
        * @tc.name    Test messageParcel to deliver abnormal RawData data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10600---------------------------");
            try{
                var parcel = new rpc.MessageParcel();
                var reply = new rpc.MessageParcel();
                let option = new rpc.MessageOption();
                let arr = [1, 2, 3, 4, 5];
                expect(parcel.writeInt(arr.length + 1)).assertTrue();
                let isWriteSuccess = parcel.writeRawData(arr, (arr.length + 1));
                expect(isWriteSuccess).assertTrue();
                let Capacity = parcel.getRawDataCapacity();
                expect(Capacity).assertEqual(128*M);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let size = result.reply.readInt();
                    expect(size).assertEqual(arr.length + 1);
                    let reCapacity = parcel.getRawDataCapacity();
                    expect(reCapacity).assertEqual(128*M);
                    let newReadResult = result.reply.readRawData(size);
                    expect(arr[0]).assertEqual(newReadResult[0]);
                    expect(arr[1]).assertEqual(newReadResult[1]);
                    expect(arr[2]).assertEqual(newReadResult[2]);
                    expect(arr[3]).assertEqual(newReadResult[3]);
                    expect(arr[4]).assertEqual(newReadResult[4]);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10700
        * @tc.name    Test messageParcel to deliver abnormal RawData data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10700---------------------------");
            try{
                var parcel = new rpc.MessageParcel();
                var reply = new rpc.MessageParcel();
                let option = new rpc.MessageOption();
                let arr = [1, 2, 3, 4, 5];
                expect(parcel.writeInt(arr.length-1)).assertTrue();
                let isWriteSuccess = parcel.writeRawData(arr, (arr.length - 1));
                expect(isWriteSuccess).assertTrue();
                let Capacity = parcel.getRawDataCapacity();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let size = result.reply.readInt();
                    expect(size).assertEqual(arr.length - 1);
                    let reCapacity = parcel.getRawDataCapacity();
                    expect(reCapacity).assertEqual(128*M);
                    let newReadResult = result.reply.readRawData(size);
                    expect(arr[0]).assertEqual(newReadResult[0]);
                    expect(arr[1]).assertEqual(newReadResult[1]);
                    expect(arr[2]).assertEqual(newReadResult[2]);
                    expect(arr[3]).assertEqual(newReadResult[3]);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10800
        * @tc.name    Test messageParcel to deliver out-of-bounds RawData data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10800---------------------------");
            try{
                var parcel = new rpc.MessageParcel();
                var reply = new rpc.MessageParcel();
                let option = new rpc.MessageOption();
                let arr = [-129, 2, 3, 4, 128];
                expect(parcel.writeInt(arr.length)).assertTrue();
                let isWriteSuccess = parcel.writeRawData(arr, arr.length);
                expect(isWriteSuccess).assertTrue();
                let Capacity = parcel.getRawDataCapacity();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let size = result.reply.readInt();
                    expect(size).assertEqual(arr.length);
                    let reCapacity = parcel.getRawDataCapacity();
                    expect(reCapacity).assertEqual(128*M);
                    let newReadResult = result.reply.readRawData(size);
                    assertArrayElementEqual(newReadResult,arr);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                parcel.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_10900
        * @tc.name    Test messageParcel to deliver illegal RawData data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_10900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_10900---------------------------");
            try{
                var parcel = new rpc.MessageParcel();
                let arr = ["aaa", 1, 2, 3];
                expect(parcel.writeInt(arr.length)).assertTrue();
                let isWriteSuccess = parcel.writeRawData(arr, arr.length);
                expect(isWriteSuccess).assertTrue();
                let reCapacity = parcel.getRawDataCapacity()
                expect(reCapacity).assertEqual(128*M);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                parcel.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_10900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11000
        * @tc.name    Call the writeremoteobject interface to serialize the remote object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11000", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let testRemoteObject = new TestRemoteObject("testObject");
                let result = data.writeRemoteObject(testRemoteObject);
                expect(result == true).assertTrue();
                data.readRemoteObject()
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11100
        * @tc.name    Call the writeremoteobject interface to serialize the remote object and pass in the empty object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let token = {}
                let result = data.writeRemoteObject(token);
                expect(result == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11200
        * @tc.name    Call the writeSequenceable interface to write the custom serialized
        *             object to the messageparcel instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11200", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let sequenceable = new MySequenceable(1, "aaa");
                let result = data.writeSequenceable(sequenceable);
                expect(result == true).assertTrue();
                let ret = new MySequenceable(0, "");
                let result2 = data.readSequenceable(ret);
                expect(result2 == true).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11300
        * @tc.name    After the server finishes processing, write noexception first before writing the result,
        *             and the client calls readexception to judge whether the server is abnormal
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11300", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                data.writeNoException();
                expect(data.writeInt(6) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_NOEXCEPTION, data, reply, option).then((result) => {
                    result.reply.readException()
                    let replyData = result.reply.readInt();
                    expect(replyData == 6).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11400
        * @tc.name    If the data on the server is abnormal, the client calls readexception
        *             to judge whether the server is abnormal
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                data.writeNoException();
                expect(data.writeInt(1232222223444) == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_NOEXCEPTION, data, reply, option).then((result) => {
                    result.reply.readException()
                    let replyData = result.reply.readInt();
                    console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_11400: readResult is " + replyData);
                    expect(replyData!=1232222223444).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11500
        * @tc.name    Serializable object marshaling and unmarshalling test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let sequenceable = new MySequenceable(1, "aaa");
                let result = data.writeSequenceable(sequenceable);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLE, data, reply, option).then((result) => {
                    let s = new MySequenceable(null,null)
                    let resultReply = result.reply.readSequenceable(s);
                    expect(resultReply == true).assertTrue();
                    expect(s.str == sequenceable.str).assertTrue();
                    expect(s.num == sequenceable.num).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11600
        * @tc.name    Non serializable object marshaling test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let sequenceable = new MySequenceable(1, "aaa");
                let result = data.writeSequenceable(sequenceable);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLE, data, reply, option).then((result) => {
                    let s = new MySequenceable(null,null)
                    let replyReadResult = reply.readSequenceable(s);
                    expect(replyReadResult == true).assertTrue();
                    expect(s.str == sequenceable.str).assertTrue();
                    expect(s.num == sequenceable.num).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11700
        * @tc.name    The server did not send a serializable object, and the client was ungrouped
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11700", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let sequenceable = 10;
                let result = data.writeInt(sequenceable);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    let s = new MySequenceable(0,null)
                    expect(result.reply.readSequenceable(s)).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11800
        * @tc.name    Call the writeSequenceable interface to write the custom serialized object to the
        *             messageparcel instance, and call readSequenceable to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let sequenceable = new MySequenceable(2, "abc");
                let result = data.writeSequenceable(sequenceable);
                console.info("RpcClient: writeSequenceable is " + result);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLE, data, reply, option).then((result) => {
                    let s = new MySequenceable(null,null)
                    result.reply.readSequenceable(s);
                    expect(s.str == sequenceable.str).assertTrue();
                    expect(s.num == sequenceable.num).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_11900
        * @tc.name    Call the writeSequenceablearray interface to write the custom serialized object to the
        *             messageparcel instance, and call readSequenceablearray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_11900", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let sequenceable = [new MySequenceable(1, "aaa"),
                    new MySequenceable(2, "bbb"), new MySequenceable(3, "ccc")];
                let result = data.writeSequenceableArray(sequenceable);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLEARRAY, data, reply, option).then((result) => {
                    let s = [new MySequenceable(null, null), new MySequenceable(null, null),
                        new MySequenceable(null, null)];
                    result.reply.readSequenceableArray(s);
                    for (let i = 0; i < s.length; i++) {
                        expect(s[i].str).assertEqual(sequenceable[i].str)
                        expect(s[i].num).assertEqual(sequenceable[i].num)
                    }
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_11900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12000
        * @tc.name    Call the writeSequenceablearray interface to write the custom serialized object to the
        *             messageparcel instance, and call readSequenceablearray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12000", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let sequenceable = [new MySequenceable(4, "abc"),
                    new MySequenceable(5, "bcd"), new MySequenceable(6, "cef")];
                let result = data.writeSequenceableArray(sequenceable);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLEARRAY, data, reply, option).then((result) => {
                    let s = [new MySequenceable(null, null),
                        new MySequenceable(null, null), new MySequenceable(null, null)]
                    result.reply.readSequenceableArray(s);
                    for (let i = 0; i < s.length; i++) {
                        expect(s[i].str).assertEqual(sequenceable[i].str)
                        expect(s[i].num).assertEqual(sequenceable[i].num)
                    }
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12100
        * @tc.name    Call the writeSequenceablearray interface to write the custom
        *             serialized object to the messageparcel instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let sequenceable = 1;
                let result = data.writeSequenceableArray(sequenceable);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12100---------------------------");
        });       

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12200
        * @tc.name    Call the writeremoteobjectarray interface to write the object array to the messageparcel
        *             instance, and call readremoteobjectarray to read the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                var option = new rpc.MessageOption();
                var listeners = [new TestRemoteObject("rpcListener"),
                    new TestRemoteObject("rpcListener2"),
                    new TestRemoteObject("rpcListener3")];
                let result = data.writeRemoteObjectArray(listeners);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECTARRAY, data, reply, option).then((result) => {
                    console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12200: sendMessageRequest is " + result.errCode);
                    expect(result.errCode).assertEqual(0);
                    expect(result.code).assertEqual(CODE_WRITE_REMOTEOBJECTARRAY);
                    expect(result.data).assertEqual(data);
                    expect(result.reply).assertEqual(reply);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12400
        * @tc.name    Test messageparcel delivery file descriptor object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12400", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12400---------------------------");
            let context = FA.getContext();
            await context.getFilesDir()
                .then(async function(path) {
                    expect(path != null).assertTrue();
                    let basePath = path;
                    let filePath = basePath + "/test1.txt";
                    let fd = fileio.openSync(filePath, 0o2| 0o100 | 0o2000, 0o666);
                    expect(fd >= 0).assertTrue();
                    let str = "HELLO RPC";
                    let bytesWr = fileio.writeSync(fd, str);
                    let option = new rpc.MessageOption();
                    var data = rpc.MessageParcel.create();
                    var reply = rpc.MessageParcel.create();
                    let result = data.containFileDescriptors();
                    let writeInt = data.writeInt(bytesWr);
                    expect(writeInt == true).assertTrue();
                    let writeFileDescriptor = data.writeFileDescriptor(fd)
                    expect(writeFileDescriptor == true).assertTrue();
                    let result1 = data.containFileDescriptors();
                    expect(data.containFileDescriptors()).assertTrue();
                    await gIRemoteObject.sendRequest(CODE_FILESDIR, data, reply, option)
                        .then(function(result) {
                            expect(result.errCode).assertEqual(0);
                            let buf = new ArrayBuffer(str.length * 2);
                            let bytesRd = fileio.readSync(fd, buf, {position:0,});
                            let fdResult = reply.readFileDescriptor();
                            let content = String.fromCharCode.apply(null, new Uint8Array(buf));
                            expect(content).assertEqual(str + str);
                            let dupFd = rpc.MessageParcel.dupFileDescriptor(fd);
                            let buf2 = new ArrayBuffer(str.length * 2);
                            let byteRd2 = fileio.readSync(dupFd, buf2, {position:0,});
                            let content2 = String.fromCharCode.apply(null, new Uint8Array(buf2));
                            console.info("dupFd bytes read: " + byteRd2 + ", content2: " + content2);
                            expect(content2).assertEqual(str + str);
                            rpc.MessageParcel.closeFileDescriptor(fd);
                            rpc.MessageParcel.closeFileDescriptor(dupFd);
                        })
                    try {
                        console.info("after close fd, write again");
                        fileio.writeSync(fd, str);
                        expect(0).assertEqual(1);
                    } catch(e) {
                        console.error("got exception: " + e);
                    } finally{
                        data.reclaim();
                        reply.reclaim();
                        done();
                    }
                })
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12400---------------------------");
        });

        /*
     * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12500
     * @tc.name    Test messageparcel to deliver the reply message received in promise across processes
     * @tc.desc    Function test
     * @tc.level   3
     */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12500", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12500: create object successfully.");
                var reply = rpc.MessageParcel.create();
                var option = new rpc.MessageOption();
                expect(data.writeByte(2)).assertTrue();
                expect(data.writeShort(3)).assertTrue();
                expect(data.writeInt(4)).assertTrue();
                expect(data.writeLong(5)).assertTrue();
                expect(data.writeFloat(1.2)).assertTrue();
                expect(data.writeDouble(10.2)).assertTrue();
                expect(data.writeBoolean(true)).assertTrue();
                expect(data.writeChar(5)).assertTrue();
                expect(data.writeString("HelloWorld")).assertTrue();
                expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue();

                await gIRemoteObject.sendRequest(CODE_ALL_TYPE, data, reply, option).then((result) => {
                    console.info("sendRequest done, error code: " + result.errCode);
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readByte()).assertEqual(2);
                    expect(result.reply.readShort()).assertEqual(3);
                    expect(result.reply.readInt()).assertEqual(4);
                    expect(result.reply.readLong()).assertEqual(5);
                    expect(result.reply.readFloat()).assertEqual(1.2);
                    expect(result.reply.readDouble()).assertEqual(10.2);
                    expect(result.reply.readBoolean()).assertTrue();
                    expect(result.reply.readChar()).assertEqual(5);
                    expect(result.reply.readString()).assertEqual("HelloWorld");
                    let s = new MySequenceable(null, null);
                    expect(result.reply.readSequenceable(s)).assertTrue();
                    expect(s.num).assertEqual(1);
                    expect(s.str).assertEqual("aaa");
                });
                data.reclaim();
                reply.reclaim();
                done();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12500:error = " + error);
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12500---------------------------");
        });

        /*
     * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12600
     * @tc.name    Test the cross process delivery of messageparcel and receive the reply message
     *             in the callback function
     * @tc.desc    Function test
     * @tc.level   3
     */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12600: create object successfully.");
                var reply = rpc.MessageParcel.create();
                var option = new rpc.MessageOption();

                expect(data.writeByte(2)).assertTrue();
                expect(data.writeShort(3)).assertTrue();
                expect(data.writeInt(4)).assertTrue();
                expect(data.writeLong(5)).assertTrue();
                expect(data.writeFloat(1.2)).assertTrue();
                expect(data.writeDouble(10.2)).assertTrue();
                expect(data.writeBoolean(true)).assertTrue();
                expect(data.writeChar(5)).assertTrue();
                expect(data.writeString("HelloWorld")).assertTrue();
                expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue();

                function sendRequestCallback(result) {
                    try{
                        console.info("sendRequest Callback");
                        console.info("sendRequest done, error code: " + result.errCode);
                        expect(result.errCode).assertEqual(0);
                        expect(result.reply.readByte()).assertEqual(2);
                        expect(result.reply.readShort()).assertEqual(3);
                        expect(result.reply.readInt()).assertEqual(4);
                        expect(result.reply.readLong()).assertEqual(5);
                        expect(result.reply.readFloat()).assertEqual(1.2);
                        expect(result.reply.readDouble()).assertEqual(10.2);
                        expect(result.reply.readBoolean()).assertTrue();
                        expect(result.reply.readChar()).assertEqual(5);
                        expect(result.reply.readString()).assertEqual("HelloWorld");
                        let s = new MySequenceable(null, null);
                        expect(result.reply.readSequenceable(s)).assertTrue();
                        expect(s.num).assertEqual(1);
                        expect(s.str).assertEqual("aaa");
                    } finally {
                        result.data.reclaim();
                        result.reply.reclaim();
                        console.info("test done");
                        done();
                    }
                }

                console.info("start send request");
                await gIRemoteObject.sendRequest(CODE_ALL_TYPE, data, reply, option, sendRequestCallback);

            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12600:error = " + error);
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12600---------------------------");
        });

        /*
     * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12700
     * @tc.name    Test the cross process transmission of messageparcel.
     *             After receiving the reply message in promise, read various types of arrays in order
     * @tc.desc    Function test
     * @tc.level   3
     */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12700", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12700: create object successfully.");
                var reply = rpc.MessageParcel.create();
                var option = new rpc.MessageOption();
                expect(data.writeByteArray([1, 2, 3])).assertTrue();
                expect(data.writeShortArray([4, 5, 6])).assertTrue();
                expect(data.writeIntArray([7, 8, 9])).assertTrue();
                expect(data.writeLongArray([10, 11, 12])).assertTrue();
                expect(data.writeFloatArray([1.1, 1.2, 1.3])).assertTrue();
                expect(data.writeDoubleArray([2.1, 2.2, 2.3])).assertTrue();
                expect(data.writeBooleanArray([true, true, false])).assertTrue();
                expect(data.writeCharArray([10, 20, 30])).assertTrue();
                expect(data.writeStringArray(['abc', 'seggg'])).assertTrue();
                let a = [new MySequenceable(1, "aaa"), new MySequenceable(2, "bbb"),
                    new MySequenceable(3, "ccc")];
                expect(data.writeSequenceableArray(a)).assertTrue();
                gIRemoteObject.sendRequest(CODE_ALL_ARRAY_TYPE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    assertArrayElementEqual(result.reply.readByteArray(), [1, 2, 3]);
                    assertArrayElementEqual(result.reply.readShortArray(), [4, 5, 6]);
                    assertArrayElementEqual(result.reply.readIntArray(), [7, 8, 9]);
                    assertArrayElementEqual(result.reply.readLongArray(), [10, 11, 12]);
                    assertArrayElementEqual(result.reply.readFloatArray(), [1.1, 1.2, 1.3]);
                    assertArrayElementEqual(result.reply.readDoubleArray(), [2.1, 2.2, 2.3]);
                    assertArrayElementEqual(result.reply.readBooleanArray(), [true, true, false]);
                    assertArrayElementEqual(result.reply.readCharArray(), [10, 20, 30]);
                    assertArrayElementEqual(result.reply.readStringArray(), ['abc', 'seggg']);
                    let b = [new MySequenceable(null, null), new MySequenceable(null, null),
                        new MySequenceable(null, null)];
                    result.reply.readSequenceableArray(b);
                    for (let i = 0; i < b.length; i++) {
                        expect(b[i].str).assertEqual(a[i].str);
                        expect(b[i].num).assertEqual(a[i].num);
                    }
                });
                data.reclaim();
                reply.reclaim();
                done();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12700:error = " + error);
            }
            sleep(2000);
            data.reclaim();
            reply.reclaim();
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12700---------------------------");
        });

        /*
     * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12800
     * @tc.name    Test messageparcel cross process delivery. After receiving the reply message in promise,
     *             the client constructs an empty array in sequence and reads the data from the reply message
     *             into the corresponding array
     * @tc.desc    Function test
     * @tc.level   3
     */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12800: create object successfully.");
                var reply = rpc.MessageParcel.create();
                var option = new rpc.MessageOption();
                expect(data.writeByteArray([1, 2, 3])).assertTrue();
                expect(data.writeShortArray([4, 5, 6])).assertTrue();
                expect(data.writeIntArray([7, 8, 9])).assertTrue();
                expect(data.writeLongArray([10, 11, 12])).assertTrue();
                expect(data.writeFloatArray([1.1, 1.2, 1.3])).assertTrue();
                expect(data.writeDoubleArray([2.1, 2.2, 2.3])).assertTrue();
                expect(data.writeBooleanArray([true, true, false])).assertTrue();
                expect(data.writeCharArray([10, 20, 30])).assertTrue();
                expect(data.writeStringArray(['abc', 'seggg'])).assertTrue();
                let a = [new MySequenceable(1, "aaa"), new MySequenceable(2, "bbb"),
                    new MySequenceable(3, "ccc")];
                expect(data.writeSequenceableArray(a)).assertTrue();
                gIRemoteObject.sendRequest(CODE_ALL_ARRAY_TYPE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let ByteArray = new Array();
                    result.reply.readByteArray(ByteArray)
                    assertArrayElementEqual(ByteArray, [1, 2, 3]);
                    let ShortArray = new Array();
                    result.reply.readShortArray(ShortArray)
                    assertArrayElementEqual(ShortArray, [4, 5, 6]);
                    let IntArray = new Array();
                    result.reply.readIntArray(IntArray)
                    assertArrayElementEqual(IntArray, [7, 8, 9]);
                    let LongArray = new Array();
                    result.reply.readLongArray(LongArray)
                    assertArrayElementEqual(LongArray, [10, 11, 12]);
                    let FloatArray = new Array();
                    result.reply.readFloatArray(FloatArray)
                    assertArrayElementEqual(FloatArray, [1.1, 1.2, 1.3]);
                    let DoubleArray = new Array();
                    result.reply.readDoubleArray(DoubleArray)
                    assertArrayElementEqual(DoubleArray, [2.1, 2.2, 2.3]);
                    let BooleanArray = new Array();
                    result.reply.readBooleanArray(BooleanArray)
                    assertArrayElementEqual(BooleanArray, [true, true, false]);
                    let CharArray = new Array();
                    result.reply.readCharArray(CharArray)
                    assertArrayElementEqual(CharArray, [65,97,122]);
                    let StringArray = new Array();
                    result.reply.readStringArray(StringArray);
                    assertArrayElementEqual(StringArray, ['abc', 'seggg']);
                    let b = [new MySequenceable(null, null), new MySequenceable(null, null),
                        new MySequenceable(null, null)];
                    result.reply.readSequenceableArray(b);
                    for (let i = 0; i < b.length; i++) {
                        expect(b[i].str).assertEqual(a[i].str);
                        expect(b[i].num).assertEqual(a[i].num);
                    };
                });
                data.reclaim();
                reply.reclaim();
                done();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_12800:error = " + error);
            }
            sleep(2000);
            data.reclaim();
            reply.reclaim();
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12800---------------------------");
        });

        /*
     * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_12900
     * @tc.name    Test messageparcel to pass an object of type iremoteobject across processes
     * @tc.desc    Function test
     * @tc.level   3
     */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_12900", 0, async function(done) {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_12900---------------------------");
            function checkResult(num, str) {
                expect(num).assertEqual(123);
                expect(str).assertEqual("rpcListenerTest");
                done();
            }
            try{
                let option = new rpc.MessageOption();
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let listener = new TestListener("rpcListener", checkResult);
                let result = data.writeRemoteObject(listener);
                expect(result == true).assertTrue();
                expect(data.writeInt(123)).assertTrue();
                expect(data.writeString("rpcListenerTest")).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECT, data, reply, option)
                    .then((result)=> {
                        expect(result.errCode).assertEqual(0);
                        result.reply.readException();
                    })
            } catch(error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_12900---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13000
        * @tc.name    Test messageparcel to pass an array of iremoteobject objects across processes
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13000", 0, async function(done) {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13000---------------------------");

            let count = 0;
            function checkResult(num, str) {
                expect(num).assertEqual(123);
                expect(str).assertEqual("rpcListenerTest");
                count++;
                console.info("check result done, count: " + count);
                if (count == 3) {
                    done();
                }
            }
            try{
                let option = new rpc.MessageOption();
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let listeners = [new TestListener("rpcListener", checkResult),
                    new TestListener("rpcListener2", checkResult),
                    new TestListener("rpcListener3", checkResult)];
                let result = data.writeRemoteObjectArray(listeners);
                expect(result == true).assertTrue();
                expect(data.writeInt(123)).assertTrue();
                expect(data.writeString("rpcListenerTest")).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECTARRAY_1, data, reply, option).then((result)=> {
                    expect(result.errCode).assertEqual(0);
                    result.reply.readException();
                });
            } catch(error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error=null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13000---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13100
        * @tc.name    Test messageparcel to pass the array of iremoteobject objects across processes. The server
        *             constructs an empty array in onremoterequest and reads it from messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13100", 0, async function(done) {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13100---------------------------");
            let count = 0;
            function checkResult(num, str) {
                expect(num).assertEqual(123);
                expect(str).assertEqual("rpcListenerTest");
                count++;
                console.info("check result done, count: " + count);
                if (count == 3) {
                    done();
                }
            }
            try{
                let option = new rpc.MessageOption();
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let listeners = [new TestListener("rpcListener", checkResult),
                    new TestListener("rpcListener2", checkResult),
                    new TestListener("rpcListener3", checkResult)];
                let result = data.writeRemoteObjectArray(listeners);
                expect(result == true).assertTrue();
                data.readRemoteObjectArray();
                expect(data.writeInt(123)).assertTrue();
                expect(data.writeString("rpcListenerTest")).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECTARRAY_2, data, reply, option)
                    .then((result)=> {
                        console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_13100 sendRequest done, error code: " + result.errCode);
                        expect(result.errCode).assertEqual(0);
                        result.reply.readException();
                    })
            } catch(error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13200
        * @tc.name    Invoke the rewindRead interface, write the POS, and read the offset value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                data.writeInt(12);
                data.writeString("parcel");
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let number1 = result.reply.readInt();
                    expect(number1).assertEqual(12);
                    expect(result.reply.rewindRead(0)).assertTrue();
                    let number2 = result.reply.readInt();
                    expect(number2).assertEqual(12);
                    let reString = result.reply.readString();
                    expect(reString).assertEqual("");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13300
        * @tc.name    Invoke the rewindRead interface, write the POS, and read the offset value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13300", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                data.writeInt(12);
                data.writeString("parcel");
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let number1 = result.reply.readInt();
                    expect(result.reply.rewindRead(1)).assertTrue();
                    let number2 = result.reply.readInt();
                    expect(number1).assertEqual(12);
                    expect(number2).assertEqual(0);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13400
        * @tc.name    Invoke the rewindWrite interface, write the POS, and read the offset value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_11800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                data.writeInt(4);
                data.rewindWrite(0);
                data.writeInt(5);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let number = result.reply.readInt();
                    expect(number).assertEqual(5);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13500
        * @tc.name    Invoke the rewindWrite interface, write the POS, and read the offset value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                data.writeInt(4);
                data.rewindWrite(1);
                data.writeInt(5);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let number = result.reply.readInt();
                    expect(number != 5).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13600
        * @tc.name    setCapacity Sets the storage capacity of the MessageParcel instance. The getCapacity 
        *               obtains the current MessageParcel capacity
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                expect(data.getCapacity()).assertEqual(0);
                let setMePaCapacity = data.setCapacity(100);
                expect(setMePaCapacity).assertTrue();
                expect(data.writeString("constant")).assertTrue();
                expect(data.getCapacity()).assertEqual(100);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let getMePaCapacity = result.reply.getCapacity();
                    expect(getMePaCapacity).assertEqual("constant".length * 8);
                    expect(result.reply.readString()).assertEqual("constant");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13700
        * @tc.name    setCapacity Sets the storage capacity of the MessageParcel instance. The getCapacity
        *              obtains the current MessageParcel capacity
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                expect(data.writeString("constant")).assertTrue();
                expect(data.setCapacity(100)).assertTrue();
                expect(data.getCapacity()).assertEqual(100);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    expect(result.reply.readString()).assertEqual("constant");
                    let getMeCa = result.reply.getCapacity();
                    expect(getMeCa).assertEqual("constant".length * 8);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13800
        * @tc.name    SetCapacity Tests the storage capacity threshold of the MessageParcel instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13800", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let getCapacitydata0 = data.getCapacity();
                expect(data.writeString("constant")).assertTrue();
                let getSizedata = data.getSize();
                let getCapacitydata = data.getCapacity();
                let setCapacitydata1 = data.setCapacity(getSizedata + 1);
                expect(setCapacitydata1).assertTrue();
                expect(data.getCapacity()).assertEqual((getSizedata + 1));
                let setCapacitydata2 = data.setCapacity(getSizedata);
                expect(setCapacitydata2).assertEqual(false);
                expect(data.getCapacity()).assertEqual((getSizedata + 1));
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_13900
        * @tc.name    SetCapacity Tests the storage capacity threshold of the MessageParcel instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_13900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_13900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                expect(data.writeString("constant")).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let getSizeresult = result.reply.getSize();
                    let setCapacityresult = result.reply.getCapacity();
                    expect(setCapacityresult).assertEqual("constant".length * 8);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_13900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14000
        * @tc.name    SetCapacity Tests the storage capacity threshold of the MessageParcel instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14000", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let getSizedata = data.getSize();
                expect(getSizedata).assertEqual(0);
                let setMeCapacity = data.setCapacity(M);
                expect(setMeCapacity).assertTrue();
                let getCapacitydata = data.getCapacity();
                expect(getCapacitydata).assertEqual(M);
                let setMeCapacity1 = data.setCapacity(4*G);
                expect(setMeCapacity1).assertEqual(false);
                let getCapacitydata1 = data.getCapacity();
                expect(getCapacitydata1).assertEqual(M);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14100
        * @tc.name    setCapacity Sets the storage capacity of the MessageParcel instance to decrease by one.
        *               The getCapacity obtains the current MessageParcel capacity
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                expect(data.getSize()).assertEqual(0);
                let setSizedata = data.setSize(0);
                expect(setSizedata).assertTrue();
                expect(data.writeString("constant")).assertTrue();
                let getSizedata = data.getSize();
                expect(getSizedata).assertEqual(("constant".length * 2) + 8);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let getSizeresult = result.reply.getSize();
                    expect(getSizeresult).assertEqual(("constant".length * 2) + 8);
                    expect(result.reply.readString()).assertEqual("constant");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14200
        * @tc.name    setSize Sets the size of the data contained in the MessageParcel instance. The getSize command
        *              reads the data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14200", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                expect(data.writeString("constant")).assertTrue();
                expect(data.getSize()).assertEqual(("constant".length * 2) + 8);
                expect(data.setSize(0)).assertTrue();
                let getSizedata = data.getSize();
                expect(getSizedata).assertEqual(0);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let getSizeresult = result.reply.getSize();
                    expect(getSizeresult).assertEqual( 8);
                    let writeresult = result.reply.readString();
                    expect(writeresult).assertEqual("");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14300
        * @tc.name    SetSize: Increases the value of the data contained in the MessageParcel instance by 1,Write setSize
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14300", 0, async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                expect(data.getSize()).assertEqual(0);
                expect(data.writeString("constant")).assertTrue();
                expect(data.getSize()).assertEqual(("constant".length * 2) + 8);
                let getCapacitydata = data.getCapacity();
                let setSizedata1 = data.setSize(getCapacitydata);
                expect(setSizedata1).assertTrue();
                expect(data.getSize()).assertEqual(getCapacitydata);
                let setSizedata2 = data.setSize(getCapacitydata + 1);
                expect(setSizedata2).assertEqual(false);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14400
        * @tc.name    SetSize: Increases the value of the data contained in the MessageParcel instance by 1,
        *               Write the setSize boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14400---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                expect(data.writeString("constant")).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    expect(result.reply.readString()).assertEqual("constant");
                    expect(result.reply.getSize()).assertEqual(("constant".length * 2) + 8);
                    let getCapacityresult = result.reply.getCapacity();
                    let setSizeresult1 = result.reply.setSize(getCapacityresult);
                    expect(setSizeresult1).assertTrue();
                    expect(result.reply.getSize()).assertEqual(getCapacityresult);
                    let setSizeresult2 = result.reply.setSize(getCapacityresult + 1);
                    expect(setSizeresult2).assertEqual(false);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14500
        * @tc.name    Validate the setSize boundary value in the MessageParcel instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let getCapacitydata = data.getCapacity();
                expect(getCapacitydata).assertEqual(0);
                let setSizedata1 = data.setSize(4*G);
                expect(setSizedata1).assertTrue();
                let getSizedata1 = data.getSize();
                expect(getSizedata1).assertEqual(0);
                let setSizedata = data.setSize(4*G - 1);
                expect(setSizedata).assertEqual(false);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14600
        * @tc.name    Verify that setSize is out of bounds in a MessageParcel instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14600---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let setSizedata = data.setSize(0);
                expect(setSizedata).assertTrue();
                expect(data.getSize()).assertEqual(0);
                let setSizedata1 = data.setSize(2*4*G);
                expect(setSizedata1).assertTrue();
                expect(data.getSize()).assertEqual(0);
                let setSizedata2 = data.setSize(2*G);
                expect(setSizedata2).assertEqual(false);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14700
        * @tc.name    Obtaining the Writable and Readable Byte Spaces of MessageParcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                expect(data.getWritableBytes()).assertEqual(0);
                data.writeInt(10);
                expect(data.getWritableBytes()).assertEqual(60);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    expect(result.reply.getReadableBytes()).assertEqual(4);
                    let readint = result.reply.readInt();
                    expect(readint).assertEqual(10);
                    let getrbyte2 = result.reply.getReadableBytes();
                    expect(getrbyte2).assertEqual(0);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14800
        * @tc.name    Obtains the writeable and readable byte space and read position of the MessageParcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                data.writeInt(10);
                let getwPos = data.getWritePosition();
                let getwbyte = data.getWritableBytes();
                expect(getwbyte).assertEqual(60);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let getrbyte = result.reply.getReadableBytes();
                    expect(getrbyte).assertEqual(4);
                    let readint = result.reply.readInt();
                    expect(readint).assertEqual(10);
                    let getrPos = result.reply.getReadPosition();
                    expect(getrPos).assertEqual(getwPos);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_14900
        * @tc.name    Obtains the writeable and readable byte space and read position of the MessageParcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_14900", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_14900---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                data.writeInt(10);
                let getwPos = data.getWritePosition();
                let getwbyte = data.getWritableBytes();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let readint = result.reply.readInt();
                    expect(readint).assertEqual(10);
                    let getrPos = result.reply.getReadPosition();
                    expect(getrPos).assertEqual(4);
                    let getrbyte = result.reply.getReadableBytes();
                    expect(getrbyte).assertEqual(0);
                    let getrPos1 = result.reply.getReadPosition();
                    expect(getrPos1).assertEqual(getwPos);
                    let getrbyte1 = result.reply.getReadableBytes();
                    expect(getrbyte1).assertEqual(0);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_14900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15000
        * @tc.name    Test fixed MessageParcel space size to pass rawData data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15000", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let rawdata = [1, 2, 3];
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                expect(data.writeInt(rawdata.length)).assertTrue();
                let result = data.writeRawData(rawdata, rawdata.length);
                expect(result).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let size = result.reply.readInt();
                    let newReadResult = result.reply.readRawData(size);
                    expect(newReadResult != rawdata).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15100
        * @tc.name    Obtains the write and read positions of the MessageParcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15100", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                var reply = rpc.MessageParcel.create();
                let getwPos1 = data.getWritePosition();
                expect(data.writeInt(10)).assertTrue();
                let getwPos2 = data.getWritePosition();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let getrPos1 = result.reply.getReadPosition();
                    let readint = result.reply.readInt();
                    expect(readint).assertEqual(10);
                    let getrPos2 = result.reply.getReadPosition();
                    expect(getwPos1).assertEqual(getrPos1);
                    expect(getwPos2).assertEqual(getrPos2);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15100---------------------------");
        });


        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15200
        * @tc.name    Test messageparcel delivery file descriptor object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15200", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15200---------------------------");
            try{
                let testab = new TestProxy(gIRemoteObject).asObject();
                expect(testab != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15300
        * @tc.name    Test messageparcel delivery file descriptor object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15300---------------------------");
            try{
                let testRemoteObject = new TestRemoteObject("testObject");
                expect(testRemoteObject != null).assertTrue();
                let testab = testRemoteObject.asObject();
                expect(testab != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15400
        * @tc.name    MessageParcel sendMessageRequest API test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15400", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let Capacity = data.getRawDataCapacity()
                let rawdata = [1, 2, 3];
                let option = new rpc.MessageOption();
                var reply = rpc.MessageSequence.create();
                data.writeInt(rawdata.length);
                data.writeRawData(rawdata, rawdata.length);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_RAWDATA, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let size = result.reply.readInt();
                    let newReadResult = result.reply.readRawData(size);
                    expect(newReadResult != rawdata).assertTrue();
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15500
        * @tc.name    Invoke the writestring interface to write data to the messageparcel instance SendRequest Asynchronous
        *               Authentication onRemoteMessageRequest Server Processing
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15500", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15500---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = 'onRemoteMessageRequest invoking';
                let result = data.writeString(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    var replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15600
        * @tc.name    Invoke the writestring interface to write data to the messageparcel instance sendMessageRequest Asynchronous
        *               Authentication onRemoteMessageRequest Server Processing
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15600", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 'onRemoteMessageRequest invoking';
                data.writeString(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    var replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual(token);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15700
        * @tc.name    Invoke the writestring interface to write data to the messageparcel instance. SendRequest asynchronously
        *               verifies the priority processing levels of onRemoteMessageRequest and onRemoteRequest
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15700", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15700---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let token = "onRemoteRequest or onRemoteMessageRequest invoking";
                let result = data.writeString(token);
                expect(result == true).assertTrue();
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_ONREMOTEMESSAGE_OR_ONREMOTE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    var replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual("onRemoteMessageRequest invoking");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15800
        * @tc.name   Invoke the writestring interface to write data to the messageparcel instance. sendMessageRequest asynchronously verifies
        *               the priority processing levels of onRemoteMessageRequest and onRemoteRequest
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15800", 0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15800---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = 'onRemoteRequest or onRemoteMessageRequest invoking';
                data.writeString(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_ONREMOTEMESSAGE_OR_ONREMOTE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    var replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual("onRemoteMessageRequest invoking");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_15900
        * @tc.name    Call the 401 interface to set the writeString of MessageSequence
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_15900", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_15900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = '';
                for(let i = 0; i < 40*K; i++){
                    token += 'a';
                };
                let result = data.writeString(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_15900---------------------------");
        });
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_16000
        * @tc.name    Call the 1900011 interface, write the interface descriptor, and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_16000", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_16000---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                data.setSize(0);
                data.setCapacity(0);
                let token = "hello ruan zong xian";
                data.writeInterfaceToken(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                let errCode = `${rpc.ErrorCode.PARCEL_MEMORY_ALLOC_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_16000---------------------------");
        }); 
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_16100
        * @tc.name    Call the 1900009 interface, write the interface descriptor, and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_16100", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_16100---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                data.setSize(true);
                data.setCapacity(true);
                let token = "hello ruan zong xian";
                data.writeInterfaceToken(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_DATA_TO_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_16100---------------------------");
        });          
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_16200
        * @tc.name    Call the setcapacity interface to set the capacity of messageparcel
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_16200", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_16200---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let sequenceable = new MySequenceable(1, "aaa");
                data.writeParcelable(sequenceable);
                let ret = new MySequenceable(0, "");
                data.setCapacity(0);
                data.readParcelable(ret);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                let errCode = `${rpc.ErrorCode.PARCEL_MEMORY_ALLOC_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_16200---------------------------");
        });      
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_16300
        * @tc.name    Call the 1900008 interface to serialize the remote object and pass in the empty object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3   
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_16300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_16300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel_16300: create object successfully.");
                let token = {}
                data.writeRemoteObject(token);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                let errCode = `${rpc.ErrorCode.PROXY_OR_REMOTE_OBJECT_INVALID_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_16300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_16400
        * @tc.name    Call the writeparcelable 1900012 interface to write the custom serialized
        *             object to the MessageSequence instance
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_16400", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_16400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let sequenceable = new MySequenceableCode(1, "aaa");
                data.writeParcelable(sequenceable);
                data.setCapacity(0);
                data.setSize(0);
                let ret = new MySequenceable(1, "");
                data.readParcelable(ret);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                let errCode = `${rpc.ErrorCode.CALL_JS_METHOD_ERROR}`;
                expect(error.message != null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_16400---------------------------");
        });
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_16500
        * @tc.name    Call the writeinterfacetoken interface, write the interface descriptor, and read interfacetoken
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_16500", 0, function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_16500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                let token = "hello ruan zong xian";
                data.writeInterfaceToken(token);
                data.setCapacity(0);
                data.setSize(0);
                data.readInterfaceToken();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                let errCode = `${rpc.ErrorCode.READ_DATA_FROM_MESSAGE_SEQUENCE_ERROR}`;
                expect(error.message != null).assertTrue();
                expect(error.code != errCode).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_16500---------------------------");
        });
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageParcel_16600
        * @tc.name    Test 1900013 messageparcel delivery file descriptor object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageParcel_16600", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageParcel_16600---------------------------");
            try {
                let filePath = "path/to/file";
                let fd = fileio.openSync(filePath, null);
                rpc.MessageSequence.dupFileDescriptor(fd);
            } catch(error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageParcel error is:" + error);
                let errCode = `${rpc.ErrorCode.OS_DUP_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            }
            done();
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageParcel_16600---------------------------");
        });        

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00100
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00100",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00100---------------------------");
            try{
                let option = new rpc.MessageOption();
                let time = option.getWaitTime();
                expect(time).assertEqual(rpc.MessageOption.TF_WAIT_TIME);
                option.setWaitTime(16);
                let time2 = option.getWaitTime();
                expect(time2).assertEqual(16);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00200
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00200",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00200---------------------------");
            try{
                let option = new rpc.MessageOption();
                let time = option.getWaitTime();
                expect(time).assertEqual(rpc.MessageOption.TF_WAIT_TIME);
                option.setWaitTime(0);
                let time2 = option.getWaitTime();
                expect(time2).assertEqual(rpc.MessageOption.TF_WAIT_TIME);
                option.setWaitTime(60);
                let time3 = option.getWaitTime();
                expect(time3).assertEqual(60);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00200---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00300
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00300",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00300---------------------------");
            try{
                let option = new rpc.MessageOption();
                let time = option.getWaitTime();
                expect(time).assertEqual(rpc.MessageOption.TF_WAIT_TIME);
                option.setWaitTime(-1);
                let time2 = option.getWaitTime();
                expect(time2).assertEqual(rpc.MessageOption.TF_WAIT_TIME);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00300---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00400
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00400",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00400---------------------------");
            try{
                let option = new rpc.MessageOption();
                let time = option.getWaitTime();
                expect(time).assertEqual(rpc.MessageOption.TF_WAIT_TIME);
                option.setWaitTime(61);
                let time2 = option.getWaitTime();
                expect(time2).assertEqual(61);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00400---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00500
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00500",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00500---------------------------");
            try{
                let option = new rpc.MessageOption();
                let flog = option.getFlags();
                expect(flog).assertEqual(rpc.MessageOption.TF_SYNC);
                option.setFlags(1);
                let flog2 = option.getFlags();
                expect(flog2).assertEqual(rpc.MessageOption.TF_ASYNC);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00500---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00600
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00600",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00600---------------------------");
            try{
                let option = new rpc.MessageOption();
                let flog = option.getFlags();
                expect(flog).assertEqual(rpc.MessageOption.TF_SYNC);
                option.setFlags(1);
                let flog2 = option.getFlags();
                expect(flog2).assertEqual(rpc.MessageOption.TF_ASYNC);
                option.setFlags(0);
                let flog3 = option.getFlags();
                expect(flog3).assertEqual(rpc.MessageOption.TF_ASYNC);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00600---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00700
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00700",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00700---------------------------");
            try{
                let option = new rpc.MessageOption();
                let flog = option.getFlags();
                expect(flog).assertEqual(rpc.MessageOption.TF_SYNC);
                option.setFlags(-1);
                let flog2 = option.getFlags();
                expect(flog2).assertEqual(-1);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00700---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00800
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00800",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00800---------------------------");
            try{
                let option = new rpc.MessageOption();
                let flog = option.getFlags();
                expect(flog).assertEqual(rpc.MessageOption.TF_SYNC);
                option.setFlags(3);
                let flog2 = option.getFlags();
                expect(flog2).assertEqual(3);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00800---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_00900
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_00900",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_00900---------------------------");
            try{
                expect(rpc.MessageOption.TF_SYNC).assertEqual(0);
                expect(rpc.MessageOption.TF_ASYNC).assertEqual(1);
                expect(rpc.MessageOption.TF_WAIT_TIME).assertEqual(4);
                expect(rpc.MessageOption.TF_ACCEPT_FDS).assertEqual(0x10);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_00900---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_01000
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_01000",0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_01000---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                option.setWaitTime(20);
                option.setFlags(0);
                let token = "option";
                let result = data.writeString(token);
                expect(result).assertTrue();
                expect(option.getFlags()).assertEqual(0);
                expect(option.getWaitTime()).assertEqual(20);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual(token);
                    expect(option.getFlags()).assertEqual(0);
                    expect(option.getWaitTime()).assertEqual(20);
                });
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_01000---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_01100
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_01100",0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_01100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                option.setFlags(1);
                let token = "option";
                let result = data.writeString(token);
                expect(result).assertTrue();
                expect(option.getFlags()).assertEqual(1);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual("option");
                    expect(option.getFlags()).assertEqual(1);
                });
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_01100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_01200
        * @tc.name    Basic method of testing messageoption
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_01200",0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_01200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                option.setFlags(3);
                let token = "option";
                let result = data.writeString(token);
                expect(result).assertTrue();
                expect(option.getFlags()).assertEqual(3);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual("option");
                    expect(option.getFlags()).assertEqual(3);
                });
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_01200---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_01300
        * @tc.name    MessageOption sendMessageRequest test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_01300",0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_01300---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                option.setFlags(1);
                let token = "option";
                data.writeString(token);
                expect(option.getFlags()).assertEqual(1);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    let replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual("option");
                    expect(option.getFlags()).assertEqual(1);
                });
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_01300---------------------------");
        })

       /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_01400
        * @tc.name    MessageOption sendMessageRequest test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_01400",0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_01400---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                let token = "option";
                data.writeString(token);
                let isAsyncData0 = option.isAsync();
                expect(isAsyncData0).assertEqual(false);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let isAsyncData = option.isAsync();
                    expect(isAsyncData).assertEqual(false);
                    let replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual(token);
                });
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_01400---------------------------");
        }) 
        
       /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_01500
        * @tc.name    MessageOption setAsync is true test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_01500",0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_01500---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                option.setAsync(true);
                let token = "option";
                data.writeString(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let isAsyncData = option.isAsync();
                    expect(isAsyncData).assertTrue();
                    let replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual("option");
                });
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_01500---------------------------");
        })
        

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_01600
        * @tc.name    setAsync is false sendMessageRequest test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_01600",0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_01600---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                option.setAsync(false);
                let token = "option";
                data.writeString(token);
                expect(gIRemoteObject != undefined).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    let isAsyncData = option.isAsync();
                    expect(isAsyncData).assertEqual(false);
                    let replyReadResult = result.reply.readString();
                    expect(replyReadResult).assertEqual(token);
                });
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_01600---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_MessageOption_01700
        * @tc.name    setAsync sendMessageRequest test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_MessageOption_01700",0, async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_MessageOption_01700---------------------------");
            try{
                let option = new rpc.MessageOption();
                option.setAsync(3);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_MessageOption error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_MessageOption_01700---------------------------");
        })         

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00100
        * @tc.name    Exception parameter validation of the created anonymous shared memory object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00100",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00100---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", -1);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_00100: ashmem " + ashmem);
                let ashmem2 = rpc.Ashmem.createAshmem(null, K);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_00100: ashmem2 " + ashmem2);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00200
        * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00200",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00200---------------------------");
            try{
                let mapSize = 2*G - 1;
                let jsash = "";
                for (let i = 0;i < (256 - 1);i++){
                    jsash += "a";
                };
                let ashmem = rpc.Ashmem.createAshmem(jsash, mapSize);
                expect(ashmem != null).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00200---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00300
        * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00300",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00300---------------------------");
            try{
                let mapSize = 2*G - 1;
                let jsash = '';
                for (let i = 0;i < 256;i++){
                    jsash += 'a';
                }
                let ashmem = rpc.Ashmem.createAshmem(jsash, mapSize);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00300---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00400
        * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00400",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00400---------------------------");
            try{
                let mapSize = 2*G - 1;
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize);
                let size = ashmem.getAshmemSize();
                expect(size).assertEqual(mapSize);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00400---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00500
        * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00500",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00500---------------------------");
            try{
                let mapSize = 2*G;
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest ", mapSize);
                ashmem.getAshmemSize();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00500---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00600
        * @tc.name    Writeashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00600",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00600---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
                var data = rpc.MessageParcel.create();
                let writeAshmem = data.writeAshmem(ashmem);
                expect(writeAshmem).assertEqual(false);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00600---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00700
        * @tc.name    Readfromashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00700",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00700---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                ashmem.unmapAshmem();
                let bytes = [1, 2, 3, 4, 5];
                let ret = ashmem.readFromAshmem(bytes.length, 0);
                expect(ret==null).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00700---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00800
        * @tc.name    Mapashmem interface creates shared file mappings
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00800",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00800---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                let result = ashmem.mapAshmem(rpc.Ashmem.PROT_READ);
                expect(result).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00800---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_00900
        * @tc.name    Mapashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_00900",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_00900---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", (2*G - 1))
                let result = ashmem.mapAshmem(999);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_00900---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01000
        * @tc.name    Mapreadandwriteashmem interface creates a shared file map with the protection level of read-write
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01000",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01000---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
                let result = ashmem.mapReadAndWriteAshmem();
                expect(result).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01000---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01100
        * @tc.name    Mapreadandwriteashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01100",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01100---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                let result = ashmem.mapAshmem(rpc.Ashmem.PROT_READ);
                expect(result).assertTrue();
                ashmem.unmapAshmem();
                let result2 = ashmem.mapReadAndWriteAshmem();
                expect(result2).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01200
        * @tc.name    Mapreadonlyashmem interface creates a shared file map with the protection level of read-write
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01200",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01200---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                let result = ashmem.mapReadOnlyAshmem();
                expect(result).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01200---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01300
        * @tc.name    Mapreadonlyashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01300",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01300---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
                let result = ashmem.mapAshmem(rpc.Ashmem.PROT_WRITE);
                expect(result).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
                let result2 = ashmem.mapReadOnlyAshmem();
                expect(result2).assertEqual(false);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01300---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01400
        * @tc.name    Mapreadonlyashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01400",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01400---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
                let resultwrite = ashmem.setProtection(rpc.Ashmem.PROT_WRITE);
                expect(resultwrite).assertTrue();
                let resultread = ashmem.setProtection(rpc.Ashmem.PROT_READ);
                expect(resultread).assertEqual(false);
                let resultreadAndwrite = ashmem.mapReadAndWriteAshmem();
                expect(resultreadAndwrite ).assertEqual(false);
                let resultnone = ashmem.setProtection(rpc.Ashmem.PROT_NONE);
                expect(resultnone).assertTrue();
                let resultread2 = ashmem.setProtection(rpc.Ashmem.PROT_READ);
                expect(resultread2).assertEqual(false);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01400---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01500
        * @tc.name    Setprotection exception input parameter verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01500",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01500---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
                let result = ashmem.setProtection(3);
                expect(result).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01500---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01600
        * @tc.name    The writetoashmem interface writes the shared file associated with the object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01600",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01600---------------------------");
            try{
                let mapSize = 4096;
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [1, 2, 3, 4, 5];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01600---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01700
        * @tc.name    The writetoashmem interface writes the shared file associated with the object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01700",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01700---------------------------");
            try{
                let mapSize = 4096;
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [-2147483648,2147483647];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result).assertTrue();
                let reresult = ashmem.readFromAshmem(bytes.length,0);
                assertArrayElementEqual(reresult,bytes);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01700---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01800
        * @tc.name    The writetoashmem interface writes the shared file associated with the object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01800",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01800---------------------------");
            try{
                let mapSize = 4096;
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [-2147483649,2147483647];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result).assertTrue();
                let readresult = ashmem.readFromAshmem(bytes.length,0);
                expect(readresult[0]).assertEqual(2147483647);
                expect(readresult[1]).assertEqual(bytes[1]);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01800---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_01900
        * @tc.name    The writetoashmem interface writes the shared file associated with the object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_01900",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_01900---------------------------");
            try{
                let mapSize = 4096;
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [-2147483648,2147483648];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result).assertTrue();
                let reresult = ashmem.readFromAshmem(bytes.length,0);
                expect(reresult[0]).assertEqual(bytes[0]);
                expect(reresult[1]).assertEqual(-2147483648);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_01900---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02000
        * @tc.name    The writetoashmem interface writes the shared file associated with the object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02000",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02000---------------------------");
            try{
                let mapSize = 2*M;
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [0,1];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 2147483647/4);
                expect(result).assertEqual(false);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02000---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02100
        * @tc.name    The writetoashmem interface writes the shared file associated with the object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02100",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02100---------------------------");
            try{
                let mapSize = 2*M;
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [0,1];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 2147483648/4);
                expect(result).assertEqual(false);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02200
        * @tc.name    The writetoashmem interface writes the shared file associated with the object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02200",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02200---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [1, 2, 3, 4, 5];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result).assertTrue();
                let resultread = ashmem.setProtection(rpc.Ashmem.PROT_READ);
                expect(resultread).assertTrue();
                let result2 = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result2).assertEqual(false);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02200---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02300
        * @tc.name    Writetoashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02300",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02300---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [1, 2, 3, 4, 5];
                let size = bytes.length + 10;
                let result = ashmem.writeToAshmem(bytes, 3, 0);
                expect(result).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02300---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02400
        * @tc.name    Read data from the shared file associated with readfromashmem
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02400",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02400---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [1, 2, 3, 4, 5];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result).assertTrue();
                let resultRead = ashmem.readFromAshmem(bytes.length, 0);
                assertArrayElementEqual(resultRead,bytes);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02400---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02500
        * @tc.name    Readfromashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02500",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02500---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [1, 2, 3, 4, 5];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 1);
                expect(result).assertTrue();
                let result2 = ashmem.readFromAshmem(bytes.length, 3);
                expect(bytes[2]).assertEqual(result2[0]);
                expect(bytes[3]).assertEqual(result2[1]);
                expect(bytes[4]).assertEqual(result2[2]);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02500---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02600
        * @tc.name    Createashmemfromexisting copies the ashmem object description and creates a new object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02600",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02600---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
                let resultWriteAndRead = ashmem.mapReadAndWriteAshmem();
                expect(resultWriteAndRead).assertTrue();
                let bytes = [1, 2, 3];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 1);
                expect(result).assertTrue()
                let newashmem = rpc.Ashmem.createAshmemFromExisting(ashmem);
                let resultWriteAndRead2 = newashmem.mapReadAndWriteAshmem();
                expect(resultWriteAndRead2).assertTrue();
                let result2 = newashmem.readFromAshmem(bytes.length, 1);
                expect(result).assertTrue();
                assertArrayElementEqual(result2,bytes);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
                newashmem.unmapAshmem();
                newashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02600---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02700
        * @tc.name    Create a shared memory object and call writeashmem to write the shared anonymous
        object into the messageparcel object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02700",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02700---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
                var data = rpc.MessageParcel.create();
                let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
                expect(resultMapRAndW).assertTrue();
                let bytes = [1, 2, 3];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 1);
                expect(result).assertTrue();
                let result2 = data.writeAshmem(ashmem);
                expect(result2).assertTrue();
                let retReadAshmem = data.readAshmem();
                let retBytes = retReadAshmem.readFromAshmem(bytes.length, 1);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_02700: run readFromAshmem result is " + retBytes);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02700---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02800
        * @tc.name    Create a non shared memory object and call writeashmem to write the messageparcel object
        object into the messageparcel object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02800",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02800---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var data2 = rpc.MessageParcel.create();
                data.writeAshmem(data2);
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error!=null).assertTrue();
            } finally{
                data.reclaim();
                data2.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02800---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_02900
        * @tc.name    Create a non shared memory object and call writeashmem to write the messageparcel object
        object into the messageparcel object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_02900",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_02900---------------------------");
            try{
                let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
                let resultwrite = ashmem.setProtection(rpc.Ashmem.PROT_EXEC);
                expect(resultwrite).assertTrue();
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_02900---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03000
        * @tc.name    mapTypedAshmem interface creates shared file mappings
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03000",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03000---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", 4*K);
                let result = ashmem.mapTypedAshmem(ashmem.PROT_READ | ashmem.PROT_WRITE);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03000: run mapTypedAshmem is success" + result);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03000---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03100
        * @tc.name    mapTypedAshmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03100",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03100---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", (2*G - 1))
                ashmem.mapTypedAshmem(999);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03100: run mapTypedAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error.code == 401).assertTrue();
                expect(error.message != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03200
        * @tc.name    mapTypedAshmem exception errorcode validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03200",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03200---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", (2*G))
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03200: ashmem " + ashmem);
                let result = ashmem.mapTypedAshmem(ashmem.PROT_READ | ashmem.PROT_WRITE);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03200: run mapTypedAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error.message != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03200---------------------------");
        })        

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03300
        * @tc.name    mapReadWriteAshmem interface creates a shared file map with the protection level of read-write
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03300",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03300---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", K);
                ashmem.mapReadWriteAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03300: run mapReadWriteAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03300---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03400
        * @tc.name    mapReadWriteAshmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03400",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03400---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", 4096);
                ashmem.mapTypedAshmem(rpc.Ashmem.PROT_READ);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03400: run mapTypedAshmem is success");
                ashmem.unmapAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03400: run unmapAshmem success");
                ashmem.mapReadWriteAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03400: run mapReadWriteAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03400---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03500
        * @tc.name    Mapreadonlyashmem interface creates a shared file map with the protection level of read-write
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03500",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03500---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", 4096);
                ashmem.mapReadonlyAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03500: run mapReadonlyAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03500---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03600
        * @tc.name    mapReadWriteAshmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03600",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03600---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", K);
                ashmem.setProtectionType(rpc.Ashmem.PROT_WRITE);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03600: run setProtectionType is success");               
                ashmem.setProtectionType(rpc.Ashmem.PROT_READ);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03600: run setProtectionType is success");              
                ashmem.mapReadWriteAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03600: run mapReadWriteAshmem success");
                ashmem.setProtectionType(rpc.Ashmem.PROT_NONE);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03600: run setProtectionType is success");
                ashmem.setProtectionType(rpc.Ashmem.PROT_READ);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03600: run setProtectionType is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03600---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03700
        * @tc.name    setProtectionType exception input parameter verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03700",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03700---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", K);
                ashmem.setProtectionType(3);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03700: run setProtectionType is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03700---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03800
        * @tc.name    The writetoashmem interface writes the shared file associated with the object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03800",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03800---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", 4096);
                ashmem.mapReadWriteAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03800: run mapReadWriteAshmem is success");
                let bytes = [1, 2, 3, 4, 5];
                let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result).assertTrue();
                ashmem.setProtectionType(rpc.Ashmem.PROT_READ);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03800: run setProtectionType is success");
                let result2 = ashmem.writeToAshmem(bytes, bytes.length, 0);
                expect(result2).assertEqual(false);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03800---------------------------");
        })        

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_03900
        * @tc.name    Create a non shared memory object and call setProtectionType to write the messageparcel object
        *               object into the messageparcel object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_03900",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_03900---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", K);
                ashmem.setProtectionType(rpc.Ashmem.PROT_EXEC);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_03900: run setProtectioniswrite is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_03900---------------------------");
        }) 

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04000
        * @tc.name    Mapreadonlyashmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04000",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04000---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", K);
                ashmem.mapTypedAshmem(rpc.Ashmem.PROT_WRITE);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04000: run mapTypedAshmem is success");
                ashmem.unmapAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04000: run unmapAshmem success");
                ashmem.closeAshmem();
                ashmem.mapReadonlyAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04000: run mapReadonlyAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04000---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04100
        * @tc.name    create is errorcode 401 exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04100",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04100---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("ashmem", (2*G + 1));
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04100: ashmem " + ashmem);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04200
        * @tc.name    mapReadWriteAshmem exception validation 1900001
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04200",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04200---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("ashmem", (4*G - 1));
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04200: ashmem " + ashmem);
                ashmem.mapReadWriteAshmem();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04200: run mapReadWriteAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.OS_MMAP_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04200---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04300
        * @tc.name    create 401  exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04300",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04300---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("ashmem", 0);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04300: ashmem " + ashmem);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04300---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04400
        * @tc.name    setProtectionType exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04400",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04400---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
                ashmem.setProtectionType(0);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04400: run setProtectionType is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                expect(error==null).assertTrue();
                expect(error).assertEqual(null);
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04400---------------------------");
        }) 

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04500
        * @tc.name    401 exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04500",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04500---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
                ashmem.setProtectionType(rpc.Ashmem.PROT_WRITE, rpc.Ashmem.PROT_READ);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04500: run setProtectionType is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error.message != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04500---------------------------");
        })                 

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04600
        * @tc.name    setProtectionType is 1900002 exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04600",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04600---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("ashmem", 1024*1024);
                ashmem.setProtectionType(null);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04600: run setProtectionType is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.OS_IOCTL_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04600---------------------------");
        }) 
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04700
        * @tc.name    writeAshmem errCode 1900003 exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */       
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04700",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04700---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var data2 = rpc.MessageSequence.create();
                data.writeAshmem(data2);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04700: run writeAshmemis is " );
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.WRITE_TO_ASHMEM_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error != null).assertTrue();
            } finally{
                data.reclaim();
                data2.reclaim();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04700---------------------------");
        })           
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04800
        * @tc.name    readAshmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04800",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04800---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("ashmem", 1024);
                ashmem.mapReadWriteAshmem();
                let ByteArraylet = [1, 2, 3, 4, 5];
                ashmem.writeAshmem(ByteArraylet, 5, 0);
                let readResult = ashmem.readAshmem(5, 0);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.READ_FROM_ASHMEM_ERROR}`;
                expect(error.code != errCode).assertEqual(null);
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04800---------------------------");
        })      

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_04900
        * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3 
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_04900",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_04900---------------------------");
            try{
                let mapSize = 2*G;
                let ashmem = rpc.Ashmem.create("JsAshmemTest ", mapSize);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04900: run  create success " + ashmem);
                let size = ashmem.getAshmemSize();
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_04900: run getAshmemSize success, size is " + size);
                expect(size).assertEqual(mapSize);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_04900---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_05000
        * @tc.name    mapTypedAshmem errorcode 401 exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_05000",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_05000---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", (2*G - 1));
                let result = ashmem.mapTypedAshmem(999);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_05000: run mapAshmemis is " + result);
                expect(result).assertEqual(false);
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code == errCode).assertTrue();
                expect(error != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_05000---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_05100
        * @tc.name    mapTypedAshmem exception validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3 
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_05100",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_05100---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", (2*G - 1));
                let result = ashmem.mapTypedAshmem(999);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_05100: run mapTypedAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.OS_MMAP_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_05100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_Ashmem_05200
        * @tc.name    mapTypedAshmem exception errorcode validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_Ashmem_05200",0,function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_Ashmem_05200---------------------------");
            try{
                let ashmem = rpc.Ashmem.create("JsAshmemTest", (2*G - 1));
                let result = ashmem.mapTypedAshmem(ashmem.PROT_READ | ashmem.PROT_WRITE);
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem_05200: run mapTypedAshmem is success");
                ashmem.unmapAshmem();
                ashmem.closeAshmem();
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_Ashmem error is:" + error);
                let errCode = `${rpc.ErrorCode.CHECK_PARAM_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_Ashmem_05200---------------------------");
        })         

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00100
        * @tc.name    Call sendrequestresult interface to send data
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00100",0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00100---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                let sequenceable = new MySequenceable(1, "aaa");
                let result = data.writeSequenceable(sequenceable);
                expect(result).assertTrue();
                await gIRemoteObject.sendRequest(CODE_WRITESEQUENCEABLE, data, reply, option).then((result) => {
                    expect(result.errCode == 0).assertTrue();
                    let ret = new MySequenceable(0, "");
                    let shortArryDataReply = result.reply.readSequenceable(ret);
                    expect(shortArryDataReply == true).assertTrue();
                    expect(ret.num).assertEqual(1);
                    expect(ret.str).assertEqual("aaa");
                });
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00200
        * @tc.name    Test that messageparcel passes through the same process, and the client
        *             receives the reply message in promise
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00200---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeByte(1)).assertTrue();
                expect(data.writeShort(2)).assertTrue();
                expect(data.writeInt(3)).assertTrue();
                expect(data.writeLong(10000)).assertTrue();
                expect(data.writeFloat(1.2)).assertTrue();
                expect(data.writeDouble(10.2)).assertTrue();
                expect(data.writeBoolean(true)).assertTrue();
                expect(data.writeChar(5)).assertTrue();
                expect(data.writeString("HelloWorld")).assertTrue();
                expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue();
                await gIRemoteObject.sendRequest(CODE_ALL_TYPE, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readByte()).assertEqual(1);
                    expect(result.reply.readShort()).assertEqual(2);
                    expect(result.reply.readInt()).assertEqual(3);
                    expect(result.reply.readLong()).assertEqual(10000);
                    expect(result.reply.readFloat()).assertEqual(1.2);
                    expect(result.reply.readDouble()).assertEqual(10.2);
                    expect(result.reply.readBoolean()).assertTrue();
                    expect(result.reply.readChar()).assertEqual(5);
                    expect(result.reply.readString()).assertEqual("HelloWorld");
                    let s = new MySequenceable(0, '');
                    expect(result.reply.readSequenceable(s)).assertTrue();
                    expect(s.num).assertEqual(1);
                    expect(s.str).assertEqual("aaa");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00300
        * @tc.name    Test that messageparcel passes through the same process, and the client
        *             receives the reply message in the callback function
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00300", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00300---------------------------");
            try{
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeByte(2)).assertTrue();
                expect(data.writeShort(3)).assertTrue();
                expect(data.writeInt(4)).assertTrue();
                expect(data.writeLong(5)).assertTrue();
                expect(data.writeFloat(1.2)).assertTrue();
                expect(data.writeDouble(10.2)).assertTrue();
                expect(data.writeBoolean(true)).assertTrue();
                expect(data.writeChar(5)).assertTrue();
                expect(data.writeString("HelloWorld")).assertTrue();
                expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue();
                function sendRequestCallback(result) {
                    try{
                        console.info("sendRequest Callback");
                        console.info("sendRequest done, error code: " + result.errCode);
                        expect(result.errCode).assertEqual(0);
                        expect(result.reply.readByte()).assertEqual(2);
                        expect(result.reply.readShort()).assertEqual(3);
                        expect(result.reply.readInt()).assertEqual(4);
                        expect(result.reply.readLong()).assertEqual(5);
                        expect(result.reply.readFloat()).assertEqual(1.2);
                        expect(result.reply.readDouble()).assertEqual(10.2);
                        expect(result.reply.readBoolean()).assertTrue();
                        expect(result.reply.readChar()).assertEqual(5);
                        expect(result.reply.readString()).assertEqual("HelloWorld");
                        let s = new MySequenceable(null, null);
                        expect(result.reply.readSequenceable(s)).assertTrue();
                        expect(s.num).assertEqual(1);
                        expect(s.str).assertEqual("aaa");
                    } finally {
                        data.reclaim();
                        reply.reclaim();
                        console.info("test done");
                        done();
                    }
                }
                console.info("start send request");
                await gIRemoteObject.sendRequest(CODE_ALL_TYPE, data, reply, option, sendRequestCallback);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00400
        * @tc.name    Iremoteobject, register death notification verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00400", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00400---------------------------");
            try{
                let object = new TestAbilityStub("Test1");
                let resultAdd1 = object.addDeathRecipient(null, 0);
                expect(resultAdd1 == false).assertTrue();
                let resultRemove1 = object.removeDeathRecipient(null, 0);
                expect(resultRemove1 == false).assertTrue();
                let isDead = object.isObjectDead();
                expect(isDead == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00500
        * @tc.name    Do not get the server agent, do not create a remoteobject instance, and directly getcallingpid,
        *             getcallingpid, getcallingdeviceid, getlocaldeviceid
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00500", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00500---------------------------");
            try{
                let callingPid = rpc.IPCSkeleton.getCallingPid();
                expect(callingPid != null).assertTrue();
                let callingUid = rpc.IPCSkeleton.getCallingUid();
                expect(callingUid != null).assertTrue();
                let callingDeviceID = rpc.IPCSkeleton.getCallingDeviceID();
                expect(callingDeviceID == "").assertTrue();
                let localDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
                expect(localDeviceID == "").assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00600
        * @tc.name    Querylocalinterface searches for objects based on descriptors
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00600", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00600---------------------------");
            try{
                let object = new TestAbilityStub("Test1");
                let result = object.isObjectDead();
                expect(result == false).assertTrue();
                let callingPid = object.getCallingPid();
                expect(callingPid != null).assertTrue();
                let callingUid = object.getCallingUid();
                expect(callingUid != null).assertTrue();
                object.attachLocalInterface(object, "Test1");
                let res = object.queryLocalInterface("Test1");
                expect(res != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00700
        * @tc.name    Getinterfacedescriptor to get the interface description
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00700---------------------------");
            try{
                let object = new TestAbilityStub("Test1223");
                let result = object.isObjectDead();
                expect(result == false).assertTrue();
                let callingPid = object.getCallingPid();
                expect(callingPid != null).assertTrue();
                let callingUid = object.getCallingUid();
                expect(callingUid != null).assertTrue();
                object.attachLocalInterface(object, "test1");
                let result2 = object.getInterfaceDescriptor();
                expect(result2 != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00800
        * @tc.name    Test that messageparcel passes through the same process, and the client
        *             receives the reply message in the callback function
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00800---------------------------");
            try{
                let object = new TestAbilityStub("TestAbilityStub");
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                let option = new rpc.MessageOption();
                expect(data.writeInterfaceToken("TestAbilityStub")).assertTrue();
                expect(data.writeByte(2)).assertTrue();
                expect(data.writeShort(3)).assertTrue();
                expect(data.writeInt(4)).assertTrue();
                expect(data.writeLong(5)).assertTrue();
                expect(data.writeFloat(1.2)).assertTrue();
                expect(data.writeDouble(10.2)).assertTrue();
                expect(data.writeBoolean(true)).assertTrue();
                expect(data.writeChar(5)).assertTrue();
                expect(data.writeString("HelloWorld")).assertTrue();
                expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue();
                function sendRequestCallback(result) {
                    try{
                        console.info("sendRequest Callback");
                        console.info("sendRequest done, error code: " + result.errCode);
                        expect(result.errCode).assertEqual(0);
                        result.reply.readException();
                        expect(result.reply.readByte()).assertEqual(2);
                        expect(result.reply.readShort()).assertEqual(3);
                        expect(result.reply.readInt()).assertEqual(4);
                        expect(result.reply.readLong()).assertEqual(5);
                        expect(result.reply.readFloat()).assertEqual(1.2);
                        expect(result.reply.readDouble()).assertEqual(10.2);
                        expect(result.reply.readBoolean()).assertTrue();
                        expect(result.reply.readChar()).assertEqual(5);
                        expect(result.reply.readString()).assertEqual("HelloWorld");
                        let s = new MySequenceable(null, null);
                        expect(result.reply.readSequenceable(s)).assertTrue();
                        expect(s.num).assertEqual(1);
                        expect(s.str).assertEqual("aaa");
                    } finally {
                        data.reclaim();
                        reply.reclaim();
                        console.info("test done");
                        done();
                    }
                }
                console.info("start send request");
                object.sendRequest(CODE_SAME_PROCESS, data, reply, option, sendRequestCallback);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_00900
        * @tc.name    IRemoteObject sendMessageRequest API Test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_00900", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_00900---------------------------");
            try{
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeByte(1);
                data.writeShort(2);
                data.writeInt(3);
                data.writeLong(10000);
                data.writeFloat(1.2);
                data.writeDouble(10.2);
                data.writeBoolean(true);
                data.writeChar(96);
                data.writeString("HelloWorld");
                data.writeParcelable(new MySequenceable(1, "aaa"));
                await gIRemoteObject.sendMessageRequest(CODE_ALL_TYPE, data, reply, option).then((result) => {
                    console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject_00900 errorcode: " + result.errCode);
                    expect(result.errCode).assertEqual(0);
                    expect(result.reply.readByte()).assertEqual(1);
                    expect(result.reply.readShort()).assertEqual(2);
                    expect(result.reply.readInt()).assertEqual(3);
                    expect(result.reply.readLong()).assertEqual(10000);
                    expect(result.reply.readFloat()).assertEqual(1.2);
                    expect(result.reply.readDouble()).assertEqual(10.2);
                    expect(result.reply.readBoolean()).assertTrue();
                    expect(result.reply.readChar()).assertEqual(96);
                    expect(result.reply.readString()).assertEqual("HelloWorld");
                    let s = new MySequenceable(0, '');
                    expect(result.reply.readParcelable(s)).assertTrue();
                    expect(s.num).assertEqual(1);
                    expect(s.str).assertEqual("aaa");
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_00900---------------------------");
        });
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_01100
        * @tc.name    getDescriptor to get the interface description
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_01100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_01100---------------------------");
            try{
                let object = new TestAbilityMessageStub("Test1223");
                let result = object.isObjectDead();
                expect(result == false).assertTrue();
                let callingPid = object.getCallingPid();
                expect(callingPid != null).assertTrue();
                let callingUid = object.getCallingUid();
                expect(callingUid != null).assertTrue();
                object.modifyLocalInterface(object, "test1");
                let result2 = object.getDescriptor();
                expect(result2 != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_01100---------------------------");
        });  
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_01200
        * @tc.name    Test that MessageSequence passes through the same process, and the client
        *             receives the reply message in the callback function
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_01200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_01200---------------------------");
            try{
                let object = new TestAbilityMessageStub("TestAbilityMessageStub");
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                let option = new rpc.MessageOption();
                data.writeInterfaceToken("TestAbilityMessageStub");
                data.writeByte(2);
                data.writeShort(3);
                data.writeInt(4);
                data.writeLong(5);
                data.writeFloat(1.2);
                data.writeDouble(10.2);
                data.writeBoolean(true);
                data.writeChar(5);
                data.writeString("HelloWorld");
                data.writeParcelable(new MySequenceable(1, "aaa"));
                console.info("data is success");
                function sendRequestCallback(result) {
                    try{
                        console.info("sendRequest Callback");
                        console.info("sendRequest done, error code: " + result.errCode);
                        expect(result.errCode).assertEqual(0);
                        result.reply.readException();
                        expect(result.reply.readByte()).assertEqual(2);
                        expect(result.reply.readShort()).assertEqual(3);
                        expect(result.reply.readInt()).assertEqual(4);
                        expect(result.reply.readLong()).assertEqual(5);
                        expect(result.reply.readFloat()).assertEqual(1.2);
                        expect(result.reply.readDouble()).assertEqual(10.2);
                        expect(result.reply.readBoolean()).assertTrue();
                        expect(result.reply.readChar()).assertEqual(5);
                        expect(result.reply.readString()).assertEqual("HelloWorld");
                        let s = new MySequenceable(null, null);
                        expect(result.reply.readParcelable(s)).assertTrue();
                        expect(s.num).assertEqual(1);
                        expect(s.str).assertEqual("aaa");
                    } finally {
                        data.reclaim();
                        reply.reclaim();
                        console.info("test done");
                        done();
                    };
                };
                console.info("start send request");
                object.sendMessageRequest(CODE_SAME_PROCESS, data, reply, option, sendRequestCallback);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_01200---------------------------");
        });
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_01300
        * @tc.name    Iremoteobject, register death notification verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_01300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_01300---------------------------");
            try{
                let recipient = new MyregisterDeathRecipient(gIRemoteObject, null);
                gIRemoteObject.registerDeathRecipient(recipient, 0)
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject_01300:run registerDeathRecipient is done");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_01300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IRemoteObject_01400
        * @tc.name    Iremoteobject, register death notification verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IRemoteObject_01400", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IRemoteObject_01400---------------------------");
            try{
                let recipient = new MyregisterDeathRecipient(gIRemoteObject, null);
                gIRemoteObject.registerDeathRecipient(recipient, 0);
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject_01400:run registerDeathRecipient is done");
                gIRemoteObject.unregisterDeathRecipient(recipient, 0);
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject_01400:run unregisterDeathRecipient is done");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IRemoteObject error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IRemoteObject_01400---------------------------");
        });               

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_00100
        * @tc.name    Call adddeathrecipient to register the death notification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_00100---------------------------");
            try{
                let recipient = new MyDeathRecipient(gIRemoteObject, null);
                let resultAdd1 = gIRemoteObject.addDeathRecipient(recipient, 0);
                expect(resultAdd1 == false).assertTrue();
                let resultAdd2 = gIRemoteObject.addDeathRecipient(recipient, 0);
                expect(resultAdd2 == false).assertTrue();
                let resultRemove1 = gIRemoteObject.removeDeathRecipient(recipient, 0);
                expect(resultRemove1 == false).assertTrue();
                let resultRemove2 = gIRemoteObject.removeDeathRecipient(recipient, 0);
                expect(resultRemove2 == false).assertTrue();
                let resultRemove3 = gIRemoteObject.removeDeathRecipient(recipient, 0);
                expect(resultRemove3 == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_00200
        * @tc.name    AddDeathRecipient Validates the interface flags input parameter boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00200", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_00200---------------------------");
            try{
                let recipient = new MyDeathRecipient(gIRemoteObject, null);
                let resultAdd = gIRemoteObject.addDeathRecipient(recipient, -(2*G));
                expect(resultAdd == false).assertTrue();
                let resultRemove = gIRemoteObject.removeDeathRecipient(recipient, -(2*G));
                expect(resultRemove == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_00300
        * @tc.name    AddDeathRecipient Validates the interface flags input parameter boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_00300---------------------------");
            try{
                let recipient = new MyDeathRecipient(gIRemoteObject, null);
                let resultAdd = gIRemoteObject.addDeathRecipient(recipient, (2*G - 1));
                expect(resultAdd == false).assertTrue();
                let resultRemove = gIRemoteObject.removeDeathRecipient(recipient, (2*G - 1));
                expect(resultRemove == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_00400
        * @tc.name    AddDeathRecipient Validates the interface flags input parameter boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00400", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_00400---------------------------");
            try{
                let recipient = new MyDeathRecipient(gIRemoteObject, null);
                let resultAdd = gIRemoteObject.addDeathRecipient(recipient, 2*G);
                expect(resultAdd == false).assertTrue();
                let resultRemove = gIRemoteObject.removeDeathRecipient(recipient, 2*G);
                expect(resultRemove == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00400---------------------------");
        });

        /*
        * @tc.number  sendfile/trans_file_func_test.cppRemoteProxy_00500
        * @tc.name    AddDeathRecipient Validates the interface flags input parameter boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00500", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_00500---------------------------");
            try{
                let recipient = new MyDeathRecipient(gIRemoteObject, null);
                let resultAdd = gIRemoteObject.addDeathRecipient(recipient, -(2*G + 1));
                expect(resultAdd == false).assertTrue();
                let resultRemove = gIRemoteObject.removeDeathRecipient(recipient, -(2*G + 1));
                expect(resultRemove == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_00600
        * @tc.name    Call isobjectdead to check whether the object is dead
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00600", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_00600---------------------------");
            try{
                let recipient = new MyDeathRecipient(gIRemoteObject, null);
                let isDead = gIRemoteObject.isObjectDead();
                expect(isDead == false).assertTrue();
                let resultAdd1 = gIRemoteObject.addDeathRecipient(recipient, 0);
                expect(resultAdd1 == false).assertTrue();
                let isDead1 = gIRemoteObject.isObjectDead();
                expect(isDead1 == false).assertTrue();
                let resultRemove1 = gIRemoteObject.removeDeathRecipient(recipient, 0);
                expect(resultRemove1 == false).assertTrue();
                let resultAdd2 = gIRemoteObject.addDeathRecipient(recipient, 0);
                expect(resultAdd2 == false).assertTrue();
                let resultRemove2 = gIRemoteObject.removeDeathRecipient(recipient, 0);
                expect(resultRemove2 == false).assertTrue();
                let resultRemove3 = gIRemoteObject.removeDeathRecipient(recipient, 0);
                expect(resultRemove3 == false).assertTrue();
                let isDead2 = gIRemoteObject.isObjectDead();
                expect(isDead2 == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_00700
        * @tc.name    Getinterfacedescriptor to get the object interface description
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_00700---------------------------");
            try{
                let object = new TestAbilityStub("Test0300");
                let result = object.getInterfaceDescriptor();
                expect(result).assertEqual("Test0300");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_00800
        * @tc.name    Querylocalinterface searches for objects based on descriptors
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_00800---------------------------");
            try{
                let object = new TestAbilityStub("Test0400");
                let result = object.isObjectDead();
                expect(result).assertEqual(false);
                object.attachLocalInterface(object, "Test2");
                let res2 = object.queryLocalInterface('Test2');
                expect(res2 != null).assertTrue();
                let resultDescrip = object.getInterfaceDescriptor();
                expect(resultDescrip != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_00900
        * @tc.name    Transaction constant validation
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_00900", 0, async function(){
            console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_00900 is starting-------------")
            try {
                expect(rpc.RemoteProxy.PING_TRANSACTION).assertEqual(1599098439);
                expect(rpc.RemoteProxy.DUMP_TRANSACTION).assertEqual(1598311760);
                expect(rpc.RemoteProxy.INTERFACE_TRANSACTION).assertEqual(1598968902);
                expect(rpc.RemoteProxy.MIN_TRANSACTION_ID).assertEqual(0x1);
                expect(rpc.RemoteProxy.MAX_TRANSACTION_ID).assertEqual(0x00FFFFFF);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_00900---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01000
        * @tc.name    Call isobjectdead to check whether the object is dead
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01000", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01000---------------------------");
            try{
                let recipient = new MyregisterDeathRecipient(gIRemoteObject, null);
                let isDead = gIRemoteObject.isObjectDead();
                expect(isDead == false).assertTrue();
                gIRemoteObject.registerDeathRecipient(recipient, 0);
                let isDead1 = gIRemoteObject.isObjectDead();
                expect(isDead1 == false).assertTrue();
                gIRemoteObject.unregisterDeathRecipient(recipient, 0);
                gIRemoteObject.registerDeathRecipient(recipient, 0);
                gIRemoteObject.unregisterDeathRecipient(recipient, 0);
                gIRemoteObject.unregisterDeathRecipient(recipient, 0);
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01000: unregisterDeathRecipient is success");
                let isDead2 = gIRemoteObject.isObjectDead();
                expect(isDead2 == false).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01000---------------------------");
        });        
       
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01100
        * @tc.name    getDescriptor to get the object interface description
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01100---------------------------");
            try{
                let object = new TestAbilityStub("Test0300");
                let result = object.getDescriptor();
                expect(result).assertEqual("Test0300");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01200
        * @tc.name    getLocalInterface searches for objects based on descriptors
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01200", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01200---------------------------");
            try{
                let object = new TestAbilityStub("Test0400");
                let result = object.isObjectDead();
                expect(result).assertEqual(false);
                object.modifyLocalInterface(object, "Test2");
                let res2 = object.getLocalInterface('Test2');
                expect(res2 != null).assertTrue();
                let resultDescrip = object.getDescriptor();
                expect(resultDescrip != null).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01200---------------------------");
        }); 
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01300
        * @tc.name    Call registerDeathRecipient to register the death notification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01300", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01300---------------------------");
            try{
                let recipient = new MyregisterDeathRecipient(gIRemoteObject, null);
                gIRemoteObject.registerDeathRecipient(recipient, 0);
                gIRemoteObject.registerDeathRecipient(recipient, 0);
                gIRemoteObject.unregisterDeathRecipient(recipient, 0);
                gIRemoteObject.unregisterDeathRecipient(recipient, 0);
                gIRemoteObject.unregisterDeathRecipient(recipient, 0);
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01300: unregisterDeathRecipient is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01400
        * @tc.name    registerDeathRecipient Validates the interface flags input parameter boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01400", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01400---------------------------");
            try{
                let recipient = new MyregisterDeathRecipient(gIRemoteObject, null);
                gIRemoteObject.registerDeathRecipient(recipient, -(2*G));
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01400: registerDeathRecipient is success");
                gIRemoteObject.unregisterDeathRecipient(recipient, -(2*G));
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01400: unregisterDeathRecipient is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01400---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01500
        * @tc.name    registerDeathRecipient Validates the interface flags input parameter boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01500", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01500---------------------------");
            try{
                let recipient = new MyregisterDeathRecipient(gIRemoteObject, null);
                gIRemoteObject.registerDeathRecipient(recipient, (2*G - 1));
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01500: registerDeathRecipient is success");
                gIRemoteObject.unregisterDeathRecipient(recipient, (2*G - 1));
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01500: unregisterDeathRecipient is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01500---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01600
        * @tc.name    registerDeathRecipient Validates the interface flags input parameter boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01600", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01600---------------------------");
            try{
                let recipient = new MyregisterDeathRecipient(gIRemoteObject, null);
                gIRemoteObject.registerDeathRecipient(recipient, 2*G);
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01600: registerDeathRecipient is success");
                gIRemoteObject.unregisterDeathRecipient(recipient, 2*G);
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01600: unregisterDeathRecipient is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01700
        * @tc.name    registerDeathRecipient Validates the interface flags input parameter boundary value
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01700", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01700---------------------------");
            try{
                let recipient = new MyregisterDeathRecipient(gIRemoteObject, null);
                gIRemoteObject.registerDeathRecipient(recipient, -(2*G + 1));
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01700: registerDeathRecipient is success");
               gIRemoteObject.unregisterDeathRecipient(recipient, -(2*G + 1));
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01700: unregisterDeathRecipient is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                expect(error!=null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01700---------------------------");
        });
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_RemoteProxy_01800
        * @tc.name    getLocalInterface 1900005 searches for objects based on descriptors
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_RemoteProxy_01800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_RemoteProxy_01800---------------------------");
            try{
                let object = new TestAbilityStub("Test0400");
                let result = object.isObjectDead();
                expect(result).assertEqual(false);
                object.modifyLocalInterface(object, "Test2");
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy_01800: run modifyLocalInterface success");
                object.getLocalInterface(null);
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_RemoteProxy error is:" + error);
                let errCode = `${rpc.ErrorCode.ONLY_PROXY_OBJECT_PERMITTED_ERROR}`;
                expect(error.code != errCode).assertTrue();
                expect(error.message != null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_RemoteProxy_01800---------------------------");
        });         

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00100
        * @tc.name    Create an empty object and verify the function of the flushcommands interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00100", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00100---------------------------");
            try {
                let remoteObject = new TestRemoteObject("aaa");
                let ret = rpc.IPCSkeleton.flushCommands(remoteObject);
                expect(ret != null).assertTrue();
            }
            catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00100---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00200
        * @tc.name    Create an empty object and verify the function of the flushcommands interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00200", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00200---------------------------");
            try {
                let remoteObject = {};
                let ret = rpc.IPCSkeleton.flushCommands(remoteObject);
                expect(ret != null).assertTrue();
            }
            catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00200---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00300
        * @tc.name    Create an empty object and verify the function of the flushcommands interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00300", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00300---------------------------");
            try {
                let samgr = rpc.IPCSkeleton.getContextObject();
                expect(samgr != null).assertTrue();
            }
            catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00300---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00400
        * @tc.name    Create an empty object and verify the function of the flushcommands interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00400", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00400---------------------------");
            try {
                let getCallingPid = rpc.IPCSkeleton.getCallingPid();
                expect(getCallingPid != null).assertTrue();
                let getCallingUid = rpc.IPCSkeleton.getCallingUid();
                expect(getCallingUid != null).assertTrue();
            }
            catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00400---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00500
        * @tc.name    Create an empty object and verify the function of the flushcommands interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00500", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00500---------------------------");
            try {
                let getCallingPid = rpc.IPCSkeleton.getLocalDeviceID();
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00500 getCallingPid result: " + getCallingPid);
                expect(getCallingPid != null).assertTrue();
                let getCallingUid = rpc.IPCSkeleton.getCallingDeviceID();
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00500 getCallingUid result: " + getCallingUid);
                expect(getCallingUid != null).assertTrue();
            }
            catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00500---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00600
        * @tc.name    Do not get the server agent, do not create a remoteobject instance, and directly getcallingpid,
        *             getcallingpid, getcallingdeviceid, getlocaldeviceid
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00600", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00600---------------------------");
            try{
                let getCallingPid = rpc.IPCSkeleton.getCallingPid();
                expect(getCallingPid != null).assertTrue();
                let getCallingUid = rpc.IPCSkeleton.getCallingUid();
                expect(getCallingUid != null).assertTrue();
                let getCallingToKenId = rpc.IPCSkeleton.getCallingTokenId();
                expect(getCallingToKenId != null).assertTrue();
                let getLocalDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
                expect(getLocalDeviceID != null).assertTrue();
                let getCallingDeviceID = rpc.IPCSkeleton.getCallingDeviceID();
                expect(getCallingDeviceID != null).assertTrue();
            } catch (error){
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00600---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00700
        * @tc.name    Basic method of testing ipcskeleton
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00700", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00700---------------------------");
            try{
                let callingPid = rpc.IPCSkeleton.getCallingPid();
                let callingUid = rpc.IPCSkeleton.getCallingUid();
                let option = new rpc.MessageOption();
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                expect(data.writeInterfaceToken("rpcTestAbility")).assertTrue();
                expect(callingUid != null).assertTrue();
                expect(callingPid != null).assertTrue();
                await gIRemoteObject.sendRequest(CODE_IPCSKELETON, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    result.reply.readException();
                    let rescallingPid = result.reply.readInt();
                    let rescallingUid = result.reply.readInt();
                    expect(rescallingPid).assertEqual(callingPid);
                    expect(rescallingUid).assertEqual(callingUid);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00700---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00800
        * @tc.name    Basic method of testing ipcskeleton
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00800", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00800---------------------------");
            try{
                let callingPid = rpc.IPCSkeleton.getCallingPid();
                let callingUid = rpc.IPCSkeleton.getCallingUid();
                let option = new rpc.MessageOption();
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                expect(data.writeInterfaceToken("rpcTestAbility")).assertTrue();
                expect(callingUid != null).assertTrue();
                expect(callingPid != null).assertTrue();
                await gIRemoteObject.sendRequest(CODE_IPCSKELETON_INT, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    result.reply.readException();
                    let rescallingPid = result.reply.readInt();
                    let rescallingUid = result.reply.readInt();
                    let restcallingPid = result.reply.readInt();
                    let restcallingUid = result.reply.readInt();
                    let resicallingPid = result.reply.readInt();
                    let resicallingUid = result.reply.readInt();
                    let resflushCommands = result.reply.readInt();
                    expect(rescallingPid).assertEqual(callingPid);
                    expect(rescallingUid).assertEqual(callingUid);
                    expect(restcallingPid).assertEqual(callingPid);
                    expect(restcallingUid).assertEqual(callingUid);
                    expect(resicallingPid).assertEqual(callingPid);
                    expect(resicallingUid).assertEqual(callingUid);
                    expect(resflushCommands).assertEqual(101);
                })
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_00900
        * @tc.name    SetCallingIdentity Interface flags input parameter boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_00900", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_00900---------------------------");
            try{
                let id = "";
                let ret = rpc.IPCSkeleton.setCallingIdentity(id);
                expect(ret).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_00900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01000
        * @tc.name    SetCallingIdentity Interface flags input parameter boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01000", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01000---------------------------");
            try{
                let id = 0;
                let ret = rpc.IPCSkeleton.setCallingIdentity(id);
                expect(ret).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01000---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01100
        * @tc.name    SetCallingIdentity Interface flags input parameter boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01100", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01100---------------------------");
            try{
                let id = "";
                for (let i = 0; i < (40*K - 1); i++){
                    id += "a";
                };
                let ret = rpc.IPCSkeleton.setCallingIdentity(id);
                expect(ret).assertTrue();
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01100---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01200
        * @tc.name    Basic method of testing ipcskeleton
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01200", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01200---------------------------");
            try{
                let object = rpc.IPCSkeleton.getContextObject();
                let callingPid = rpc.IPCSkeleton.getCallingPid();
                let callingUid = rpc.IPCSkeleton.getCallingUid();
                let callingDeviceID = rpc.IPCSkeleton.getCallingDeviceID();
                let localDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
                let isLocalCalling = rpc.IPCSkeleton.isLocalCalling();
                let id = rpc.IPCSkeleton.resetCallingIdentity();
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01200：" + id);
                let ret = rpc.IPCSkeleton.setCallingIdentity(id);
                expect(callingDeviceID).assertEqual("");
                expect(localDeviceID).assertEqual("");
                expect(isLocalCalling).assertTrue();
                expect(id).assertEqual("");
                expect(ret).assertTrue();
                expect(rpc.IPCSkeleton.flushCommands(gIRemoteObject)).assertEqual(101);
                let option = new rpc.MessageOption();
                var data = rpc.MessageParcel.create();
                var reply = rpc.MessageParcel.create();
                expect(data.writeInterfaceToken("rpcTestAbility")).assertTrue();
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01200： start send request");
                await gIRemoteObject.sendRequest(CODE_IPCSKELETON, data, reply, option).then(function(result) {
                    expect(result.errCode).assertEqual(0);
                    result.reply.readException();
                    expect(result.reply.readInt()).assertEqual(callingPid);
                    expect(result.reply.readInt()).assertEqual(callingUid);
                    expect(result.reply.readString()).assertEqual("");
                    expect(result.reply.readString()).assertEqual("");
                    expect(result.reply.readBoolean()).assertTrue();
                    expect(result.reply.readInt()).assertEqual(callingPid);
                    expect(result.reply.readInt()).assertEqual(callingUid);
                    expect(result.reply.readInt()).assertEqual(callingPid);
                    expect(result.reply.readInt()).assertEqual(callingUid);
                    expect(result.reply.readInt()).assertEqual(101);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01200---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01300
        * @tc.name    IPCSkeleton sendMessageRequest API test
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   0
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01300", 0,async function(done){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01300---------------------------");
            try{
                let callingPid = rpc.IPCSkeleton.getCallingPid();
                let callingUid = rpc.IPCSkeleton.getCallingUid();
                let option = new rpc.MessageOption();
                var data = rpc.MessageSequence.create();
                var reply = rpc.MessageSequence.create();
                data.writeInterfaceToken("rpcTestAbility");
                expect(callingUid != null).assertTrue();
                expect(callingPid != null).assertTrue();
                await gIRemoteObject.sendMessageRequest(CODE_IPCSKELETON, data, reply, option).then((result) => {
                    expect(result.errCode).assertEqual(0);
                    result.reply.readException();
                    let rescallingPid = result.reply.readInt();
                    let rescallingUid = result.reply.readInt();
                    expect(rescallingPid).assertEqual(callingPid);
                    expect(rescallingUid).assertEqual(callingUid);
                });
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            } finally{
                data.reclaim();
                reply.reclaim();
                done();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01300---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01400
        * @tc.name    Create an empty object and verify the function of the flushCmdBuffer interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01400", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01400---------------------------");
            try {
                let remoteObject = new TestRemoteObject("aaa");
                rpc.IPCSkeleton.flushCmdBuffer(remoteObject);
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01400 RpcServer: flushCmdBuffer is success");
            }
            catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01400---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01500
        * @tc.name    Create an empty object and verify the function of the flushCmdBuffer interface
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01500", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01500---------------------------");
            try {
                let remoteObject = {};
                rpc.IPCSkeleton.flushCmdBuffer(remoteObject);
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01500 RpcServer: flushCmdBuffer is success");
            }
            catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01500---------------------------");
        })

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01600
        * @tc.name    Basic method of testing ipcskeleton 1900007
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01600", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01600---------------------------");
            try{
                let object = rpc.IPCSkeleton.getContextObject();
                object.getDescriptor();
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01600: is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                let errCode = `${rpc.ErrorCode.COMMUNICATION_ERROR}`;
                expect(error.message != null).assertTrue();
                expect(error.code == errCode).assertTrue();           
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01600---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01700
        * @tc.name    Create an empty object and verify the function of the flushCmdBuffer interface 1900006
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01700", 0, async function() {
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01700---------------------------");
            try {
                let remoteObject = null;
                rpc.IPCSkeleton.flushCmdBuffer(remoteObject);
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01700 RpcServer: flushCmdBuffer is success");
            }catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                let errCode = `${rpc.ErrorCode.ONLY_REMOTE_OBJECT_PERMITTED_ERROR}`;
                expect(error.message != null).assertTrue();
                expect(error.code != errCode).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01700---------------------------");
        })
        
        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01800
        * @tc.name    restoreCallingIdentity Interface flags input parameter boundary value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01800", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01800---------------------------");
            try{
                let id = "";
                rpc.IPCSkeleton.restoreCallingIdentity(id);
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01800 restoreCallingIdentity is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01800---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_01900
        * @tc.name    restoreCallingIdentity Interface flags input parameter 0 value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01900", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_01900---------------------------");
            try{
                let id = 0;
                rpc.IPCSkeleton.restoreCallingIdentity(id);
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_01900 restoreCallingIdentity is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_01900---------------------------");
        });

        /*
        * @tc.number  SUB_Softbus_IPC_Compatibility_IPCSkeleton_02000
        * @tc.name    restoreCallingIdentity Interface flags input parameter null value verification
        * @tc.desc    [G-DISTRIBUTED-0212]禁止修改IPC中定义的数据结构和接口，并提供对应完整实现
        * @tc.level   3
        */
        it("SUB_Softbus_IPC_Compatibility_IPCSkeleton_02000", 0,async function(){
            console.info("---------------------start SUB_Softbus_IPC_Compatibility_IPCSkeleton_02000---------------------------");
            try{
                let id = "";
                for (let i = 0; i < (40*K - 1); i++){
                    id += "a";
                };
                rpc.IPCSkeleton.restoreCallingIdentity(id);
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton_02000 restoreCallingIdentity is success");
            } catch (error) {
                console.info("SUB_Softbus_IPC_Compatibility_IPCSkeleton error is:" + error);
                expect(error==null).assertTrue();
            }
            console.info("---------------------end SUB_Softbus_IPC_Compatibility_IPCSkeleton_02000---------------------------");
        });        
        console.info("-----------------------SUB_Softbus_IPC_Compatibility_MessageParce_Test is end-----------------------");
    });
}
