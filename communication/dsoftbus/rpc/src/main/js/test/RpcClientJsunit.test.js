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

import rpc from '@ohos.rpc'
import fileio from '@ohos.fileio';
import FA from '@ohos.ability.featureAbility'
import {describe, expect, beforeAll, it} from 'deccjsunit/index'
export default function actsRpcClientJsTest() {

var gIRemoteObject = undefined;

describe('ActsRpcClientJsTest', function(){
    console.info("-----------------------SUB_Softbus_IPC_MessageParce_Test is starting-----------------------");

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

    function connectAbility() {
        let want = {
            "bundleName":"ohos.rpc.test.server",
            "abilityName": "ohos.rpc.test.server.ServiceAbility",
        };
        let connect = {
            onConnect:function (elementName, remoteProxy) {
                console.info('RpcClient: onConnect called, instance of proxy: '
                             + (remoteProxy instanceof rpc.RemoteProxy))
                gIRemoteObject = remoteProxy

            },
            onDisconnect:function (elementName) {
                console.info("RpcClient: onDisconnect")
            },
            onFailed:function () {
                console.info("RpcClient: onFailed")
                gIRemoteObject = null
            }
        };
        FA.connectAbility(want, connect)
        return new Promise((resolve, reject) =>{
            console.info("start connect local ability, wait 5 seconds")
            setTimeout(()=>{
                console.info("resolve proxy: " + gIRemoteObject)
                resolve(gIRemoteObject)
            }, 5000)
        })
    }

    function sleep(numberMillis)
    {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
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
            this.gIRemoteObject = gIRemoteObject
            this.done = done
        }

        onRemoteDied() {
            console.info("server died")
            expect(this.proxy.removeDeathRecipient(this, 0)).assertTrue()
            let _done = this.done
            setTimeout(function() {
                _done()
            }, 1000)
        }
    }

    class TestAbilityStub extends rpc.RemoteObject {
        constructor(descriptor) {
            super(descriptor)
        }

        onRemoteRequest(code, data, reply, option) {
            console.info("TestAbilityStub: onRemoteRequest called, code: " + code)
            let descriptor = data.readInterfaceToken()
            if (descriptor !== "TestAbilityStub") {
                console.error("received unknown descriptor: " + descriptor)
                return false
            }
            switch (code) {
                case 1:
                {
                    let tmp1 = data.readByte()
                    let tmp2 = data.readByte()
                    let tmp3 = data.readShort()
                    let tmp4 = data.readShort()
                    let tmp5 = data.readInt()
                    let tmp6 = data.readInt()
                    let tmp7 = data.readLong()
                    let tmp8 = data.readLong()
                    let tmp9 = data.readFloat()
                    let tmp10 = data.readFloat()
                    let tmp11 = data.readDouble()
                    let tmp12 = data.readDouble()
                    let tmp13 = data.readBoolean()
                    let tmp14 = data.readBoolean()
                    let tmp15 = data.readChar()
                    let tmp16 = data.readString()
                    let s = new MySequenceable(null, null)
                    data.readSequenceable(s)
                    reply.writeNoException()
                    reply.writeByte(tmp1)
                    reply.writeByte(tmp2)
                    reply.writeShort(tmp3)
                    reply.writeShort(tmp4)
                    reply.writeInt(tmp5)
                    reply.writeInt(tmp6)
                    reply.writeLong(tmp7)
                    reply.writeLong(tmp8)
                    reply.writeFloat(tmp9)
                    reply.writeFloat(tmp10)
                    reply.writeDouble(tmp11)
                    reply.writeDouble(tmp12)
                    reply.writeBoolean(tmp13)
                    reply.writeBoolean(tmp14)
                    reply.writeChar(tmp15)
                    reply.writeString(tmp16)
                    reply.writeSequenceable(s)
                    return true
                }
                default:
                {
                    console.error("default case, code: " + code)
                    return false
                }
            }
        }
    }


    class TestListener extends rpc.RemoteObject {
        constructor(descriptor, checkResult) {
            super(descriptor);
            this.checkResult = checkResult
        }
        onRemoteRequest(code, data, reply, option) {
            let result = false
            if (code  == 1) {
                console.info("onRemoteRequest called, descriptor: " + this.getInterfaceDescriptor())
                result = true
            } else {
                console.info("unknown code: " + code)
            }
            let _checkResult = this.checkResult
            let _num = data.readInt()
            let _str = data.readString()
            setTimeout(function(){
                _checkResult(_num, _str)
            }, 2*1000);
            return result
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

    class Stub extends rpc.RemoteObject {
        onRemoteRequest(code, data, reply, option) {
            let callerPid = rpc.IPCSkeleton.getCallingPid();
            console.info("RpcServer: getCallingPid result: " + callerPid);
            let callerUid = rpc.IPCSkeleton.getCallingUid();
            console.info("RpcServer: getCallingUid result: " + callerUid);
            let callerDeviceID  = rpc.IPCSkeleton.getCallingDeviceID();
            console.info("RpcServer: getCallingUid result: " + callerDeviceID );
            let localDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
            console.info("RpcServer: localDeviceID is: " + localDeviceID);
            return true;
        }
    }

    function assertArrayElementEqual(actual, expected) {
        expect(actual.length).assertEqual(expected.length)
        for (let i = 0; i < actual.length; i++) {
            expect(actual[i]).assertEqual(expected[i])
        }
    }

    beforeAll(async function (done) {
        console.info('beforeAll called')
        await connectAbility().then((remote) => {
            console.info("got remote proxy: " + remote)
        }).catch((err) => {
            console.info("got exception: " + err)
        })
        done()
        console.info("beforeAll done")
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00100
     * @tc.name    Call the writeinterfacetoken interface, write the interface descriptor, and read interfacetoken
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00100", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_00100: create object successfully.");

            var token = "hello ruan zong xian";
            var result = data.writeInterfaceToken(token);
            console.info("SUB_Softbus_IPC_MessageParcel_00100:run writeInterfaceToken result is " + result);
            expect(result).assertTrue();

            var resultToken = data.readInterfaceToken();
            console.info("SUB_Softbus_IPC_MessageParcel_00100:run readInterfaceToken result is " + resultToken);
            expect(resultToken).assertEqual(token);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00100:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00200
     * @tc.name    Call the writeinterfacetoken interface, write the interface descriptor, and read interfacetoken
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00200", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00200---------------------------");
        try{
            for (let i = 0; i<5; i++){
                var data = rpc.MessageParcel.create();
                console.info("SUB_Softbus_IPC_MessageParcel_00200: create object successfully.");

                var token = "hello ruan zong xian";
                var result = data.writeInterfaceToken(token);
                console.info("SUB_Softbus_IPC_MessageParcel_00200:run writeInterfaceToken result is " + result);
                expect(result).assertTrue();

                var resultToken = data.readInterfaceToken();
                console.info("SUB_Softbus_IPC_MessageParcel_00200:run readInterfaceToken result is " + resultToken);
                expect(resultToken).assertEqual(token);

                data.reclaim();
            }
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00200:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00300
     * @tc.name    Call the writeinterfacetoken interface to write a non string interface descriptor
                   and read interfacetoken
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00300", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_00300: create object successfully.");

            var token = "";
            for(let i = 0; i < (40*K -1); i++){
                token += 'a';
            };
            var result = data.writeInterfaceToken(token);
            console.info("SUB_Softbus_IPC_MessageParcel_00300:run writeInterfaceToken is" + result);
            expect(result).assertTrue();

            var resultToken = data.readInterfaceToken();
            console.info("SUB_Softbus_IPC_MessageParcel_00300:run readInterfaceToken is " + resultToken.length);
            expect(resultToken).assertEqual(token);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00300: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00400
     * @tc.name    The WriteInterfaceToken interface is called, the exceeding-length interface descriptor is written,
                    and the InterfaceToken is read
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00400", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_00400: create object successfully.");

            var token = "";
            for(let i = 0; i < 40*K; i++){
                token += 'a';
            };
            var result = data.writeInterfaceToken(token);
            console.info("SUB_Softbus_IPC_MessageParcel_00400:run writeInterfaceToken is " + result);
            expect(result).assertEqual(false);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00400: error = " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00500
     * @tc.name    Call the writeinterfacetoken interface to write a non string interface descriptor
                   and read interfacetoken
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00500", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_00500: create object successfully.");

            var token = 123;
            var result = data.writeInterfaceToken(token);
            console.info("SUB_Softbus_IPC_MessageParcel_00500:run writeInterfaceToken is " + result);
            expect(result).assertEqual(false);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00500: error = " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00600
     * @tc.name    The data size of the messageparcel obtained by calling the getSize interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00600", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_00600: create object successfully.");

            var size = data.getSize();
            console.info("SUB_Softbus_IPC_MessageParcel_00600:run getSize is " + size);
            expect(size).assertEqual(0);

            var addData = 1;
            var result = data.writeInt(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_00600:run writeInt is " + result);
            expect(result).assertTrue();

            size = data.getSize();
            console.info("SUB_Softbus_IPC_MessageParcel_00600:run getSize is " + size);
            expect(size).assertEqual(4);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00600: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00700
     * @tc.name    The capacity of the messageparcel obtained by calling the getcapacity interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00700", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_00700: create object successfully.");

            var size = data.getCapacity();
            console.info("SUB_Softbus_IPC_MessageParcel_00700:run getCapacity is " + size);
            expect(size).assertEqual(0);

            var addData = 1;
            var result = data.writeInt(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_00700:run writeInt is " + result);
            expect(result).assertTrue();

            size = data.getCapacity();
            console.info("SUB_Softbus_IPC_MessageParcel_00700:run getCapacity is " + size);
            expect(size).assertEqual(64);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00700: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00800
     * @tc.name    Call the SetSize interface to set the data size of messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00800", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_00800: create object successfully.");

            var addData = 1;
            var result = data.writeInt(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_00800:run writeInt is " + result);
            expect(result).assertTrue();

            var size = 6;
            var setResult = data.setSize(size);
            console.info("SUB_Softbus_IPC_MessageParcel_00800:run setSize " + setResult);
            expect(setResult).assertTrue();

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00800: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_00900
     * @tc.name    Call the SetSize interface to set the data size of messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_00900", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_00900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_00900: create object successfully.");

            var addData = 1;
            var result = data.writeInt(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_00900:run writeInt is " + result);
            expect(result).assertTrue();

            var size = 4*G;
            var setResult = data.setSize(size);
            console.info("SUB_Softbus_IPC_MessageParcel_00900:run setSize " + setResult);
            expect(setResult).assertTrue();

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_00900: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_00900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01000
     * @tc.name    Call the SetSize interface to set the data size of messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01000", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01000: create object successfully.");

            var addData = 1;
            var result = data.writeInt(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_01000:run writeInt is " + result);
            expect(result).assertTrue();

            var size = 4*G - 4;
            var setResult = data.setSize(size);
            console.info("SUB_Softbus_IPC_MessageParcel_01000:run setSize " + setResult);
            expect(setResult).assertEqual(false);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01000: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01100
     * @tc.name    Call the SetSize interface to set the data size of messageparcel. The write data size
                   does not match the set value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01100", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01100: create object successfully.");

            var capacity = 64;
            var setResult = data.setCapacity(capacity);
            console.info("SUB_Softbus_IPC_MessageParcel_01100:run setCapacity " + setResult);
            expect(setResult).assertTrue();

            var size = 4;
            setResult = data.setSize(size);
            console.info("SUB_Softbus_IPC_MessageParcel_01100:run setSize " + setResult);
            expect(setResult).assertTrue();

            var addData = 2;
            var result = data.writeLong(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_01100:run writeInt is " + result);
            expect(result).assertTrue();

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01100: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01200
     * @tc.name    Call the setcapacity interface to set the capacity of messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01200", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01200: create object successfully.");

            var size = 64;
            var setResult = data.setCapacity(size);
            console.info("SUB_Softbus_IPC_MessageParcel_01200:run setSize " + setResult);
            expect(setResult).assertTrue();

            var addData = 1;
            var result = data.writeInt(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_01200:run writeInt is " + result);
            expect(result).assertTrue();

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01200: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01300
     * @tc.name    Call the setcapacity interface to set the capacity of messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01300", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01300: create object successfully.");

            var size = 4*G - 4;
            var setResult = data.setCapacity(size);
            console.info("SUB_Softbus_IPC_MessageParcel_01300:run setSize " + setResult);
            expect(setResult).assertTrue();

            var addData = 1;
            var result = data.writeInt(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_01300:run writeInt is " + result);
            expect(result).assertTrue();

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01300: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01400
     * @tc.name    Call the setcapacity interface to set the capacity of messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01400", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01400: create object successfully.");

            var size = 4*G;
            var setResult = data.setCapacity(size);
            console.info("SUB_Softbus_IPC_MessageParcel_01400:run setSize " + setResult);
            expect(setResult).assertEqual(false);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01400: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01500
     * @tc.name    Call the setcapacity interface to set the capacity of messageparcel.
     *             The write data capacity is inconsistent with the set value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01500", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01500: create object successfully.");

            var size = 4;
            var setResult = data.setCapacity(size);
            console.info("SUB_Softbus_IPC_MessageParcel_01500:run setSize " + setResult);
            expect(setResult).assertTrue();

            var addData = [1, 2, 3, 4, 5, 6, 7, 8];
            var result = data.writeIntArray(addData);
            console.info("SUB_Softbus_IPC_MessageParcel_01500:run writeInt is " + result);
            expect(result).assertEqual(false);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01500: error = " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01600
     * @tc.name    Empty object to obtain the readable byte space, read location,
     *             writable byte space and write location information of messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01600", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01600: create object successfully.");

            var result1 = data.getWritableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_01600: run getWritableBytes is " + result1);
            expect(result1).assertEqual(0);
            var result2 = data.getReadableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_01600: run getReadableBytes is " + result2);
            expect(result2).assertEqual(0);

            var result3 = data.getReadPosition();
            console.info("SUB_Softbus_IPC_MessageParcel_01600: run getReadPosition is " + result2);
            expect(result3).assertEqual(0);

            var result4 = data.getWritePosition();
            console.info("SUB_Softbus_IPC_MessageParcel_01600: run getWritePosition is " + result2);
            expect(result4).assertEqual(0);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01600: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01700
     * @tc.name    Create an object and write data to obtain the readable byte space, read location,
     *             writable byte space and write location information of messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01700", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01700: create object successfully.");

            var dataInt = 1;
            var resultInt = data.writeInt(dataInt);
            console.info("SUB_Softbus_IPC_MessageParcel_01700: run writeInt is " + resultInt);

            var dataLong = 2;
            var resultLong = data.writeLong(dataLong);
            console.info("SUB_Softbus_IPC_MessageParcel_01700: run writeLong is " + resultLong);

            var result1 = data.getWritableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_01700: run getWritableBytes is " + result1);
            expect(result1).assertEqual(52);

            var result2 = data.getReadableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_01700: run getReadableBytes is " + result2);
            expect(result2).assertEqual(12);

            var result3 = data.getReadPosition();
            console.info("SUB_Softbus_IPC_MessageParcel_01700: run getReadPosition is " + result3);
            expect(result3).assertEqual(0);

            var result4 = data.getWritePosition();
            console.info("SUB_Softbus_IPC_MessageParcel_01700: run getWritePosition is " + result4);
            expect(result4).assertEqual(12);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01700: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01800
     * @tc.name    Call rewindread interface to offset the read position to the specified position
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01800", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            expect(data.getWritableBytes()).assertEqual(0);
            expect(data.getReadableBytes()).assertEqual(0);
            expect(data.getReadPosition()).assertEqual(0);
            expect(data.getWritePosition()).assertEqual(0);

            var dataInt = 1;
            var resultInt = data.writeInt(dataInt);
            console.info("SUB_Softbus_IPC_MessageParcel_01800: run writeInt is " + resultInt);
            var dataLong = 2;
            var resultLong = data.writeLong(dataLong);
            console.info("SUB_Softbus_IPC_MessageParcel_01800: run writeLong is " + resultLong);

            expect(data.getWritableBytes()).assertEqual(52);
            expect(data.getReadableBytes()).assertEqual(12);
            expect(data.getReadPosition()).assertEqual(0);
            expect(data.getWritePosition()).assertEqual(12);

            var readIntData = data.readInt();
            console.info("SUB_Softbus_IPC_MessageParcel_01800: run readInt is " + readIntData);
            expect(readIntData).assertEqual(dataInt);

            var writePosition = 0;
            var writeResult = data.rewindWrite(writePosition);
            console.info("SUB_Softbus_IPC_MessageParcel_01800: run rewindWrite is " + writeResult);
            expect(writeResult).assertTrue();

            expect(data.getWritePosition()).assertEqual(0);
            dataInt = 3;
            resultInt = data.writeInt(dataInt);
            console.info("SUB_Softbus_IPC_MessageParcel_01800: run writeInt is " + resultInt);

            var readPosition = 0;
            var readResult = data.rewindRead(readPosition);
            console.info("SUB_Softbus_IPC_MessageParcel_01800: run rewindWrite is " + readResult);
            expect(readResult).assertTrue();

            readIntData = data.readInt();
            console.info("SUB_Softbus_IPC_MessageParcel_01800: run readInt is " + readIntData);
            expect(readIntData).assertEqual(dataInt);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01800: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_01900
     * @tc.name    The rewindread interface is called to re offset the read position to the specified position.
                   The specified position is out of range
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_01900", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_01900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: create object successfully.");

            var result1 = data.getWritableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run getWritableBytes is " + result1);
            expect(result1 == 0).assertTrue();
            var result2 = data.getReadableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run getReadableBytes is " + result2);
            expect(result2 == 0).assertTrue();
            var result3 = data.getReadPosition();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run getReadPosition is " + result3);
            expect(result3 == 0).assertTrue();
            var result4 = data.getWritePosition();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run getWritePosition is " + result4);
            expect(result4 == 0).assertTrue();

            var dataInt = 1;
            var resultInt = data.writeInt(dataInt);
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run writeInt is " + resultInt);
            expect(resultInt).assertTrue();
            var dataLong = 2;
            var resultLong = data.writeLong(dataLong);
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run writeLong is " + resultLong);
            expect(resultLong).assertTrue();

            result1 = data.getWritableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run getWritableBytes is " + result1);
            expect(result1 == 52).assertTrue();
            result2 = data.getReadableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run getReadableBytes is " + result2);
            expect(result2 == 12).assertTrue();
            result3 = data.getReadPosition();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run getReadPosition is " + result3);
            expect(result3 == 0).assertTrue();
            result4 = data.getWritePosition();
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run getWritePosition is " + result4);
            expect(result4 == 12).assertTrue();

            var readPosition = 100;
            var readResult = data.rewindRead(readPosition);
            console.info("SUB_Softbus_IPC_MessageParcel_01900: run rewindRead is " + readResult);
            expect(readResult == false).assertTrue();

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_01900: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_01900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02000
     * @tc.name    Call rewindwrite and the interface offsets the write position to the specified position
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02000", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02000: create object successfully.");

            var dataInt = 1;
            var resultInt = data.writeInt(dataInt);
            console.info("SUB_Softbus_IPC_MessageParcel_02000: run writeInt is " + resultInt);
            expect(resultInt).assertTrue();

            var readIntData = data.readInt();
            console.info("SUB_Softbus_IPC_MessageParcel_02000: run readInt is " + readIntData);
            expect(readIntData).assertEqual(dataInt);

            var writePosition = 0;
            var rewindWriteResult = data.rewindWrite(writePosition);
            console.info("SUB_Softbus_IPC_MessageParcel_02000: run rewindWrite is" + rewindWriteResult);
            expect(rewindWriteResult).assertTrue();

            dataInt = 3;
            resultInt = data.writeInt(dataInt);
            console.info("SUB_Softbus_IPC_MessageParcel_02000: run writeInt is " + resultInt);
            expect(resultInt).assertTrue();

            var readPosition = 0;
            var rewindReadResult = data.rewindRead(readPosition);
            console.info("SUB_Softbus_IPC_MessageParcel_02000: run rewindRead is " + rewindReadResult);
            expect(rewindReadResult);

            readIntData = data.readInt();
            console.info("SUB_Softbus_IPC_MessageParcel_02000: run readInt is " + readIntData);
            expect(readIntData).assertEqual(dataInt);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02000: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02100
     * @tc.name    Call rewindwrite and the interface offsets the write position to the specified position.
                   The specified position is out of range
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02100", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02100: create object successfully.");

            var dataInt = 1;
            var resultInt = data.writeInt(dataInt);
            console.info("SUB_Softbus_IPC_MessageParcel_02100: run writeInt result is " + resultInt);
            expect(resultInt).assertTrue();

            var readIntData = data.readInt();
            console.info("SUB_Softbus_IPC_MessageParcel_02100: run readInt is" + readIntData);
            expect(readIntData == dataInt).assertTrue();

            var writePosition = 99;
            var rewindWriteResult = data.rewindWrite(writePosition);
            console.info("SUB_Softbus_IPC_MessageParcel_02100: run rewindWrite is " + rewindWriteResult);
            expect(rewindWriteResult).assertEqual(false);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02100: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02200
     * @tc.name    Call the writeshortarray interface, write the array to the messageparcel instance,
     *             and call readshortarray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02200", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02200: create object successfully.");

            var wShortArryData = [3, 5, 9];
            var writeShortArrayResult = data.writeShortArray(wShortArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02200: run writeShortArray "
                + writeShortArrayResult);
            expect(writeShortArrayResult).assertTrue();

            var rShortArryData = data.readShortArray();
            console.info("SUB_Softbus_IPC_MessageParcel_02200: run readShortArray is " + rShortArryData);
            assertArrayElementEqual(rShortArryData,wShortArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02200: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02300
     * @tc.name    Call the writeshortarray interface, write the short integer array to the messageparcel instance,
     *             and call readshortarray (datain: number []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02300", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02300: create object successfully.");

            var wShortArryData = [];
            for(let i=0;i<(50*K - 1);i++){
                wShortArryData[i] = 1;
            }
            var writeShortArrayResult = data.writeShortArray(wShortArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02300: run writeShortArray "
                + writeShortArrayResult);
            expect(writeShortArrayResult).assertTrue();

            var rShortArryData = [];
            data.readShortArray(rShortArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02300: run readShortArray is " + rShortArryData.length);
            assertArrayElementEqual(rShortArryData,wShortArryData);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02300: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02400
     * @tc.name    Writeshortarray interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02400", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02400: create object successfully.");

            var wShortArryData = [-32768, 0, 1, 2, 32767];
            var writeShortArrayResult = data.writeShortArray(wShortArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02400: run writeShortArray is " + writeShortArrayResult);
            expect(writeShortArrayResult).assertTrue();

            var rShortArryData = [];
            data.readShortArray(rShortArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02400: run readShortArray is " + rShortArryData);
            assertArrayElementEqual(rShortArryData,wShortArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02500
     * @tc.name    Writeshortarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02500", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02500: create object successfully.");

            var wShortArryData = [-32769, 0, 1, 2];
            var writeShortArrayResult = data.writeShortArray(wShortArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02500: run writeShortArray is " + writeShortArrayResult);
            expect(writeShortArrayResult).assertTrue();
            var rShotrArrayData = data.readShortArray();
            console.info("SUB_Softbus_IPC_MessageParcel_02500: run readShortArray is " + rShotrArrayData);
            expect(32767).assertEqual(rShotrArrayData[0]);
            expect(wShortArryData[1]).assertEqual(rShotrArrayData[1]);
            expect(wShortArryData[2]).assertEqual(rShotrArrayData[2]);
            expect(wShortArryData[3]).assertEqual(rShotrArrayData[3]);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02500: error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02600
     * @tc.name    Writeshortarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02600", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02600: create object successfully.");

            var wShortArryData = [0, 1, 2, 32768];
            var writeShortArrayResult = data.writeShortArray(wShortArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02600: run writeShortArray is " + writeShortArrayResult);
            expect(writeShortArrayResult).assertTrue();

            var rShotrArrayData = data.readShortArray();
            console.info("SUB_Softbus_IPC_MessageParcel_02600: run readShortArray " + rShotrArrayData);
            expect(wShortArryData[0]).assertEqual(rShotrArrayData[0]);
            expect(wShortArryData[1]).assertEqual(rShotrArrayData[1]);
            expect(wShortArryData[2]).assertEqual(rShotrArrayData[2]);
            expect(-32768).assertEqual(rShotrArrayData[3]);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02600: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02700
     * @tc.name    Writeshortarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02700", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02700: create object successfully.");

            var wShortArryData = [];
            for (let i = 0; i < 50*K; i++){
                wShortArryData[i] = 11111;
            }
            var writeShortArrayResult = data.writeShortArray(wShortArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02700: run writeShortArray " + writeShortArrayResult);
            expect(writeShortArrayResult).assertEqual(false);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02700: error = " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02800
     * @tc.name    Call the writelongarray interface, write the long integer array to the messageparcel instance,
     *             and call readlongarray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02800", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02800: create object successfully.");

            var LongArryData = [];
            for (let i = 0;i<(25*K - 1);i++){
                LongArryData[i] = 11;
            }
            var WriteLongArray = data.writeLongArray(LongArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03200: run writeShortArray  is " + WriteLongArray);
            expect(WriteLongArray).assertTrue();

            var rLongArryData = data.readLongArray();
            console.info("SUB_Softbus_IPC_MessageParcel_03200: run readShortArray is " + rLongArryData.length);
            assertArrayElementEqual(LongArryData,rLongArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02800: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_02900
     * @tc.name    Writelongarray interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_02900", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_02900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_02900: create object successfully.");

            var wLongArryData = [-2147483648, 0, 1, 2, 2147483647];
            var writeLongArrayResult = data.writeLongArray(wLongArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_02900: run writeShortArrayis is " + writeLongArrayResult);
            expect(writeLongArrayResult).assertTrue();

            var rLongArryData = data.readLongArray();
            console.info("SUB_Softbus_IPC_MessageParcel_02900: run readShortArray is " + rLongArryData);
            assertArrayElementEqual(wLongArryData,rLongArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_02900: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_02900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03000
     * @tc.name    Writelongarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03000", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03000: create object successfully.");

            var errorLongArryData = [-2147483649, 0, 1, 2, 3];
            var erWriteLongArray = data.writeLongArray(errorLongArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03000: run writeShortArrayis is " + erWriteLongArray);
            expect(erWriteLongArray).assertTrue();

            var erLongArryData = data.readLongArray();
            console.info("SUB_Softbus_IPC_MessageParcel_03000: run readShortArray is " + erLongArryData);
            assertArrayElementEqual(errorLongArryData,erLongArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03000: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03100
     * @tc.name    Writelongarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03100", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03100: create object successfully.");

            var errorLongArryData = [0, 1, 2, 3, 2147483648];
            var erWriteLongArray = data.writeLongArray(errorLongArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03100: run writeShortArrayis is " + erWriteLongArray);
            expect(erWriteLongArray).assertTrue();

            var erLongArryData = data.readLongArray();
            console.info("SUB_Softbus_IPC_MessageParcel_03100: run readShortArray is " + erLongArryData);
            assertArrayElementEqual(errorLongArryData,erLongArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03100: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03200
     * @tc.name    Writelongarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03200", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03200: create object successfully.");

            var errorLongArryData = [];
            for (let i = 0;i<25*K;i++){
                errorLongArryData[i] = 11;
            }
            var erWriteLongArray = data.writeLongArray(errorLongArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03200: run writeShortArrayis is " + erWriteLongArray);
            expect(erWriteLongArray).assertEqual(false);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03200: error " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03300
     * @tc.name    Call the writedoublearray interface, write the array to the messageparcel instance,
     *             and call readdoublearra to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03300", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03300: create object successfully.");

            var wDoubleArryData = [1.2, 235.67, 99.76];
            var writeDoubleArrayResult = data.writeDoubleArray(wDoubleArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03300: run writeShortArrayis is " + writeDoubleArrayResult);
            expect(writeDoubleArrayResult).assertTrue();

            var rDoubleArryData = data.readDoubleArray();
            console.info("SUB_Softbus_IPC_MessageParcel_03300: run readShortArray is " + rDoubleArryData);
            assertArrayElementEqual(wDoubleArryData,rDoubleArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03300: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03400
     * @tc.name    Call the writedoublearray interface, write the array to the messageparcel instance,
     *             and call readdoublearra (datain: number []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03400", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03400: create object successfully.");

            var wDoubleArryData = [];
            for(let i = 0;i < (25*K - 1);i++){
                wDoubleArryData[i] = 11.1;
            }
            var writeDoubleArrayResult = data.writeDoubleArray(wDoubleArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03400: run writeShortArrayis is "
                + writeDoubleArrayResult);
            expect(writeDoubleArrayResult).assertTrue();

            var rDoubleArryData = [];
            data.readDoubleArray(rDoubleArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03400: run readShortArray is " + rDoubleArryData.length);
            assertArrayElementEqual(wDoubleArryData,rDoubleArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03500
     * @tc.name    Writedoublearray interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03500", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03500: create object successfully.");

            var wDoubleArryData = [-1235453.2, 235.67, 9987659.76];
            var writeDoubleArrayResult = data.writeDoubleArray(wDoubleArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03500: run writeShortArrayis is " + writeDoubleArrayResult);
            expect(writeDoubleArrayResult).assertTrue();

            var rDoubleArryData = data.readDoubleArray();
            console.info("SUB_Softbus_IPC_MessageParcel_03500: run readShortArray is " + rDoubleArryData);
            assertArrayElementEqual(wDoubleArryData,rDoubleArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03500: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03600
     * @tc.name    Writedoublearray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03600", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03600: create object successfully.");

            var DoubleArryData = [-12354883737337373873853.2, 235.67, 99999999999999993737373773987659.76];
            var WriteDoubleArrayResult = data.writeDoubleArray(DoubleArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03600: run writeDoubleArrayis is " + WriteDoubleArrayResult);
            expect(WriteDoubleArrayResult).assertTrue();

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03600: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03700
     * @tc.name    Writedoublearray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03700", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03700: create object successfully.");

            var errorDoubleArryData = [];
            for (let i=0;i<25*K;i++){
                errorDoubleArryData[i] = 11.1;
            }
            var WriteDoubleArrayResult = data.writeDoubleArray(errorDoubleArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03700: run writeDoubleArrayis is " + WriteDoubleArrayResult);
            expect(WriteDoubleArrayResult).assertEqual(false);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03700: error " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03800
     * @tc.name    Call the writeboolean array interface, write the array to the messageparcel instance,
     *             and call readboolean array to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03800", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03800: create object successfully.");

            var wBooleanArryData = [true, false, false];
            var writeBooleanArrayResult = data.writeBooleanArray(wBooleanArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03800: run writeShortArrayis is " + writeBooleanArrayResult);
            expect(writeBooleanArrayResult).assertTrue();

            var rBooleanArryData = data.readBooleanArray();
            console.info("SUB_Softbus_IPC_MessageParcel_03800: run readShortArray is " + rBooleanArryData);
            assertArrayElementEqual(wBooleanArryData,rBooleanArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03800: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_03900
     * @tc.name    Call the writeboolean array interface, write the array to the messageparcel instance,
     *             and call readboolean array (datain: number []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_03900", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_03900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_03900: create object successfully.");

            var wBooleanArryData = [];
            for (let i=0;i<(50*K - 1);i++){
                if (i % 2 == 0){
                    wBooleanArryData[i] = false;
                }else {
                    wBooleanArryData[i] = true;
                }
            }
            var writeBooleanArrayResult = data.writeBooleanArray(wBooleanArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03900: run writeShortArrayis is " + writeBooleanArrayResult);
            expect(writeBooleanArrayResult).assertTrue();

            var rBooleanArryData = [];
            data.readBooleanArray(rBooleanArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_03900: run readShortArray is " + rBooleanArryData.length);
            assertArrayElementEqual(wBooleanArryData,rBooleanArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_03900: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_03900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04000
     * @tc.name    Writeboolean array interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04000", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04000: create object successfully.");

            var BooleanArryData = [true, 'abc', false];
            var WriteBooleanArrayResult = data.writeBooleanArray(BooleanArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04000: run writeShortArrayis is " + WriteBooleanArrayResult);
            expect(WriteBooleanArrayResult).assertTrue();
            var rBooleanArryData = data.readBooleanArray();
            console.info("SUB_Softbus_IPC_MessageParcel_04000: run readShortArray is " + rBooleanArryData);
            var newboolean = [true,false,false];
            assertArrayElementEqual(newboolean,rBooleanArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04000: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04100
     * @tc.name    Writeboolean array interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04100", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04100: create object successfully.");

            var errorBooleanArryData = [];
            for (let i=0;i<50*K;i++){
                if (i % 2 == 0){
                    errorBooleanArryData[i] = false;
                }else {
                    errorBooleanArryData[i] = true;
                };
            }
            var WriteBooleanArrayResult = data.writeBooleanArray(errorBooleanArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04100: run writeShortArrayis is " + WriteBooleanArrayResult);
            expect(WriteBooleanArrayResult).assertEqual(false);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04100: error " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04200
     * @tc.name    Call the writechararray interface, write the array to the messageparcel instance,
     *             and call readchararray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04200", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04200: create object successfully.");

            var wCharArryData = [];
            for(let i=0;i<(50*K - 1);i++){
                wCharArryData[i] = 96;
            }
            var writeCharArrayResult = data.writeCharArray(wCharArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04200: run writeShortArrayis is " + writeCharArrayResult);
            expect(writeCharArrayResult).assertTrue();

            var rCharArryData = data.readCharArray();
            console.info("SUB_Softbus_IPC_MessageParcel_04200: run readShortArray is " + rCharArryData.length);
            assertArrayElementEqual(wCharArryData,rCharArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04200: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04300
     * @tc.name    Call the writechararray interface, write the array to the messageparcel instance,
     *             and call readchararray (datain: number []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04300", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04300: create object successfully.");

            var wCharArryData = [];
            for(let i=0;i<(50*K - 1);i++){
                wCharArryData[i] = 96;
            }
            var writeCharArrayResult = data.writeCharArray(wCharArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04300: run writeShortArrayis is " + writeCharArrayResult);
            expect(writeCharArrayResult).assertTrue();


            var rCharArryData = [];
            data.readCharArray(rCharArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04300: run readShortArray is " + rCharArryData.length);
            assertArrayElementEqual(wCharArryData,rCharArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04300: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04400
     * @tc.name    Writechararray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04400", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04400: create object successfully.");

            var errorCharArryData = [10, 'asfgdgdtu', 20];
            var WriteCharArrayResult = data.writeCharArray(errorCharArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04400: run writeShortArrayis is " + WriteCharArrayResult);
            expect(WriteCharArrayResult).assertTrue();

            var rCharArryData = data.readCharArray();
            console.info("SUB_Softbus_IPC_MessageParcel_04400: run readShortArray is " + rCharArryData);
            var xresult = [10,0,20];
            assertArrayElementEqual(xresult,rCharArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04500
     * @tc.name    Call the writestringarray interface, write the array to the messageparcel instance,
     *             and call readstringarray (datain: number []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04500", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04500: create object successfully.");

            var wStringArryData = ['abc', 'hello', 'beauty'];
            var writeStringArrayResult = data.writeStringArray(wStringArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04500: run writeShortArrayis is " + writeStringArrayResult);
            expect(writeStringArrayResult).assertTrue();

            var rStringArryData = data.readStringArray();
            console.info("SUB_Softbus_IPC_MessageParcel_04500: run readShortArray is " + rStringArryData);
            assertArrayElementEqual(wStringArryData,rStringArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04500: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04600
     * @tc.name    Call the writestringarray interface, write the array to the messageparcel instance,
     *             and call readstringarray() to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04600", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04600: create object successfully.");

            var wStringArryData = ['abc', 'hello', 'beauty'];
            var writeStringArrayResult = data.writeStringArray(wStringArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04600: run writeShortArrayis is " + writeStringArrayResult);
            expect(writeStringArrayResult).assertTrue();


            var rStringArryData = [];
            data.readStringArray(rStringArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04600: run readShortArray is " + rStringArryData);
            assertArrayElementEqual(wStringArryData,rStringArryData);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04600: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04700
     * @tc.name    Writestringarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04700", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04700: create object successfully.");

            var errorStringArryData = ['abc', 123, 'beauty'];
            var WriteStringArrayResult = data.writeStringArray(errorStringArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04700: run writeStringArrayis is " + WriteStringArrayResult);
            expect(WriteStringArrayResult).assertEqual(false);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04700: error " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04800
     * @tc.name    Writestringarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04800", 0, function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04800: create object successfully.");

            var errorStringArryData = [];
            for (let i=0;i<(10*K - 1);i++){
                errorStringArryData[i] = "heddSDF";
            }
            var WriteStringArrayResult = data.writeStringArray(errorStringArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_04800: run writeStringArrayis is " + WriteStringArrayResult);
            expect(WriteStringArrayResult).assertTrue();

            var errorStringArray = data.readStringArray();
            console.info("SUB_Softbus_IPC_MessageParcel_04800: run writeStringArrayis is " + errorStringArray.length);
            assertArrayElementEqual(errorStringArray,errorStringArryData);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04800: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_04900
     * @tc.name    Call the writebytearray interface, write the array to the messageparcel instance,
     *             and call readbytearray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_04900", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_04900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_04900: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var ByteArrayVar = [1, 2, 3, 4, 5];
            var writeShortArrayResult = data.writeByteArray(ByteArrayVar);
            console.info("SUB_Softbus_IPC_MessageParcel_04900: run writeShortArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_04900: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_04900: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var shortArryDataReply = result.reply.readByteArray();
                console.info("SUB_Softbus_IPC_MessageParcel_04900: run readByteArray is " + shortArryDataReply);
                assertArrayElementEqual(ByteArrayVar,shortArryDataReply);
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_04900: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_04900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05000
     * @tc.name    Call the writebytearray interface, write the array to the messageparcel instance,
     *             and call readbytearray (datain: number []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05000", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05000: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var ByteArrayVar = [1, 2, 3, 4, 5];
            var writeShortArrayResult = data.writeByteArray(ByteArrayVar);
            console.info("SUB_Softbus_IPC_MessageParcel_05000: run writeShortArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05000: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05000: sendRequestis is " + result.errCode);

                var newArr = new Array(5);
                result.reply.readByteArray(newArr);
                console.info("SUB_Softbus_IPC_MessageParcel_05000: run readByteArray is " + newArr);
                assertArrayElementEqual(ByteArrayVar,newArr);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05000: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05100
     * @tc.name    Writebytearray interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05100", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05100: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var teArrayVar = [-128, 0, 1, 2, 127];
            var writeShortArrayResult = data.writeByteArray(teArrayVar);
            console.info("SUB_Softbus_IPC_MessageParcel_05100: run writeShortArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05100: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05100: sendRequestis is " + result.errCode);

                var newArr = new Array(5)
                result.reply.readByteArray(newArr);
                console.info("SUB_Softbus_IPC_MessageParcel_05100: run readByteArray is " + newArr);
                assertArrayElementEqual(newArr,teArrayVar);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05100: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05200
     * @tc.name    Writebytearray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05200", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var teArrayVar = [-128, 0, 1, 2, 128];
            var writeShortArrayResult = data.writeByteArray(teArrayVar);
            console.info("SUB_Softbus_IPC_MessageParcel_05200: run writeShortArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05200: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05200: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var shortArryDataReply = result.reply.readByteArray();
                console.info("SUB_Softbus_IPC_MessageParcel_05200: run readByteArray is " + shortArryDataReply);
                expect(shortArryDataReply[0] == teArrayVar[0]).assertTrue();
                expect(shortArryDataReply[1] == teArrayVar[1]).assertTrue();
                expect(shortArryDataReply[2] == teArrayVar[2]).assertTrue();
                expect(shortArryDataReply[3] == teArrayVar[3]).assertTrue();
                expect(shortArryDataReply[4] == -128).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05200: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05300
     * @tc.name    Writebytearray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05300", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05300: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var ByteArrayVar = [-129, 0, 1, 2, 127];
            var writeShortArrayResult = data.writeByteArray(ByteArrayVar);
            console.info("SUB_Softbus_IPC_MessageParcel_05300: run writeShortArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05300: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTEARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05300: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var shortArryDataReply = result.reply.readByteArray();
                console.info("SUB_Softbus_IPC_MessageParcel_05300: run readByteArray is " + shortArryDataReply);
                expect(shortArryDataReply[0] == 127).assertTrue();
                expect(shortArryDataReply[1] == ByteArrayVar[1]).assertTrue();
                expect(shortArryDataReply[2] == ByteArrayVar[2]).assertTrue();
                expect(shortArryDataReply[3] == ByteArrayVar[3]).assertTrue();
                expect(shortArryDataReply[4] == ByteArrayVar[4]).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05300: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05400
     * @tc.name    Call the writeintarray interface, write the array to the messageparcel instance,
     *             and call readintarray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05400", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05400: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var intArryData = [100, 111, 112];
            var writeShortArrayResult = data.writeIntArray(intArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_05400: run writeShortArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05400: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05400: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var shortArryDataReply = result.reply.readIntArray();
                console.info("SUB_Softbus_IPC_MessageParcel_05400: run readByteArray is " + shortArryDataReply);
                assertArrayElementEqual(intArryData,shortArryDataReply);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05500
     * @tc.name    Call the writeintarray interface, write the array to the messageparcel instance,
     *             and call readintarray (datain: number []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05500", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05500: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var intArryData = [100, 111, 112];
            var writeShortArrayResult = data.writeIntArray(intArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_05500: run writeShortArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05500: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05500: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var newArr = []
                result.reply.readIntArray(newArr);
                console.info("SUB_Softbus_IPC_MessageParcel_05500: run readIntArray is success, intArryDataReply is " + newArr);
                assertArrayElementEqual(intArryData,newArr);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05500: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05600
     * @tc.name    Writeintarray interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05600", 0, async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05600: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var intArryData = [-2147483648, 0, 1, 2, 2147483647];
            var writeIntArrayResult = data.writeIntArray(intArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_05600: run writeShortArrayis is " + writeIntArrayResult);
            expect(writeIntArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05600: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05600: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var shortArryDataReply = result.reply.readIntArray();
                console.info("SUB_Softbus_IPC_MessageParcel_05600: run readByteArray is " + shortArryDataReply);
                assertArrayElementEqual(intArryData,shortArryDataReply);
            });

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05600: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05700
     * @tc.name    Writeintarray interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05700", 0, async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05700: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var intArryData = [-2147483649, 0, 1, 2, 2147483647];
            var writeIntArrayResult = data.writeIntArray(intArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_05700: run writeShortArrayis is " + writeIntArrayResult);
            expect(writeIntArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05700: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05700: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var shortArryDataReply = result.reply.readIntArray();
                console.info("SUB_Softbus_IPC_MessageParcel_05700: run readByteArray is " + shortArryDataReply);
                expect(shortArryDataReply[0] == 2147483647).assertTrue();
                expect(shortArryDataReply[1] == intArryData[1]).assertTrue();
                expect(shortArryDataReply[2] == intArryData[2]).assertTrue();
                expect(shortArryDataReply[3] == intArryData[3]).assertTrue();
                expect(shortArryDataReply[4] == intArryData[4]).assertTrue();
            });

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05700: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05800
     * @tc.name    Writeintarray interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05800", 0, async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05800: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var intArryData = [0, 1, 2, 3, 2147483648];
            var writeIntArrayResult = data.writeIntArray(intArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_05800: run writeShortArrayis is " + writeIntArrayResult);
            expect(writeIntArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05800: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INTARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05800: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var shortArryDataReply = result.reply.readIntArray();
                console.info("SUB_Softbus_IPC_MessageParcel_05800: run readByteArray is " + shortArryDataReply);
                var newintArryData = [0, 1, 2, 3, -2147483648];
                assertArrayElementEqual(newintArryData,shortArryDataReply);
            });

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05800: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_05900
     * @tc.name    Call the writefloatarray interface, write the array to the messageparcel instance,
     *             and call readfloatarray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_05900", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_05900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_05900: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var floatArryData = [1.2, 1.3, 1.4];
            var writeShortArrayResult = data.writeFloatArray(floatArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_05900: run writeFloatArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();


            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_05900: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_05900: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var floatArryDataReply = result.reply.readFloatArray();
                console.info("SUB_Softbus_IPC_MessageParcel_05900: run readFloatArray success, floatArryDataReply " + floatArryDataReply);
                assertArrayElementEqual(floatArryData,floatArryDataReply);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_05900: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_05900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06000
     * @tc.name    Call the writefloatarray interface, write the array to the messageparcel instance,
     *             and call readfloatarray (datain: number []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06000", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06000: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var floatArryData = [1.2, 1.3, 1.4]
            var writeShortArrayResult = data.writeFloatArray(floatArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_06000: run writeFloatArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06000: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06000: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var newArr = []
                result.reply.readFloatArray(newArr);
                console.info("SUB_Softbus_IPC_MessageParcel_06000: readFloatArray is success, floatArryDataReply is " + newArr);
                assertArrayElementEqual(floatArryData,newArr);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06000: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06100
     * @tc.name    Writefloatarray interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06100", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06100: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var floatArryData = [-3.40E+38, 1.3, 3.40E+38];
            var writeShortArrayResult = data.writeFloatArray(floatArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_06100: run writeFloatArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06100: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06100: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var newArr = result.reply.readFloatArray();
                console.info("SUB_Softbus_IPC_MessageParcel_06100: run readFloatArray is success, floatArryDataReply is " + newArr);
                assertArrayElementEqual(floatArryData,newArr);
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06100: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06200
     * @tc.name    Writefloatarray interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06200", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var floatArryData = [-4.40E+38, 1.3, 3.40E+38];
            var writeShortArrayResult = data.writeFloatArray(floatArryData);
            console.info("SUB_Softbus_IPC_MessageParcel_06200: run writeFloatArrayis is " + writeShortArrayResult);
            expect(writeShortArrayResult == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06200: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_FLOATARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06200: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var newArr = result.reply.readFloatArray();
                console.info("SUB_Softbus_IPC_MessageParcel_06200: run readFloatArray is success, floatArryDataReply is " + newArr);
                expect(newArr[0] == floatArryData[0]).assertTrue();
                expect(newArr[1] == floatArryData[1]).assertTrue();
                expect(newArr[2] == floatArryData[2]).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06200: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06300
     * @tc.name    Call the writeShort interface to write the short integer data to the messageparcel instance,
     *             and call readshort to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06300", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06300: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var short = 8;
            var writeShor = data.writeShort(short);
            console.info("SUB_Softbus_IPC_MessageParcel_06300: run writeShort success, writeShor is " + writeShor);
            expect(writeShor == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06300: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SHORT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06300: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var readShort = result.reply.readShort();
                console.info("SUB_Softbus_IPC_MessageParcel_06300: run readFloatArray is success, readShort is "
                + readShort);
                expect(readShort == short).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06300: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06400
     * @tc.name    WriteShort interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06400", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06400: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeShort(-32768) == true).assertTrue();
            expect(data.writeShort(0) == true).assertTrue();
            expect(data.writeShort(1) == true).assertTrue();
            expect(data.writeShort(2) == true).assertTrue();
            expect(data.writeShort(32767) == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06400: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SHORT_MULTI, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06400: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                expect(result.reply.readShort() == -32768).assertTrue();
                expect(result.reply.readShort() == 0).assertTrue();
                expect(result.reply.readShort() == 1).assertTrue();
                expect(result.reply.readShort() == 2).assertTrue();
                expect(result.reply.readShort() == 32767).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06500
     * @tc.name    WriteShort interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06500", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06500: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeShort(32768) == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06500: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SHORT_MULTI, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06500: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                expect(result.reply.readShort() == -32768).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06500: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06600
     * @tc.name    Call the writeShort interface to write the short integer data to the messageparcel instance,
     *             and call readshort to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06600", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06600: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var short = -32769;
            var writeShor = data.writeShort(short);
            console.info("SUB_Softbus_IPC_MessageParcel_06600: run writeShort success, writeShor is " + writeShor);
            expect(writeShor == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06600: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SHORT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06600: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var readShort = result.reply.readShort();
                console.info("SUB_Softbus_IPC_MessageParcel_06600: run readFloatArray is success, readShort is " + readShort);
                expect(readShort == 32767).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06600: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06700
     * @tc.name    Call the writeShort interface to write the short integer data to the messageparcel instance,
     *             and call readshort to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06700", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06700: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var short = 32768;
            var writeShor = data.writeShort(short);
            console.info("SUB_Softbus_IPC_MessageParcel_06700: run writeShort success, writeShor is " + writeShor);
            expect(writeShor == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06700: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SHORT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06700: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var readShort = result.reply.readShort();
                console.info("SUB_Softbus_IPC_MessageParcel_06700: run readFloatArray is success, readShort is " + readShort);
                expect(readShort == -32768).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06700: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06800
     * @tc.name    Call writelong interface to write long integer data to messageparcel instance
     *             and call readlong to read data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06800", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06800: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var short = 10000;
            var writelong = data.writeLong(short);
            console.info("SUB_Softbus_IPC_MessageParcel_06800: run writeLong success, writelong is " + writelong);
            expect(writelong == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06800: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06800: run sendRequestis is "
                             + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var readlong = result.reply.readLong();
                console.info("SUB_Softbus_IPC_MessageParcel_06800: run readLong is success, readlong is " + readlong);
                expect(readlong == short).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06800: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_06900
     * @tc.name    Writelong interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_06900", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_06900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_06900: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var short = 2147483647;
            var writelong = data.writeLong(short);
            console.info("SUB_Softbus_IPC_MessageParcel_06900: run writeLong success, writelong is " + writelong);
            expect(writelong == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_06900: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_06900: run sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var readlong = result.reply.readLong();
                console.info("SUB_Softbus_IPC_MessageParcel_06900: run readLong is success, readlong is " + readlong);
                expect(readlong == short).assertTrue();
            });

            data.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_06900: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_06900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07000
     * @tc.name    Writelong interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07000", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07000: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var short = 214748364887;
            var writelong = data.writeLong(short);
            console.info("SUB_Softbus_IPC_MessageParcel_07000: run writeLong success, writelong is " + writelong);
            expect(writelong == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_07000: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_07000: run sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var readlong = result.reply.readLong();
                console.info("SUB_Softbus_IPC_MessageParcel_07000: run readLong is success, readlong is " + readlong);
                expect(readlong == short).assertTrue();
            });

            data.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07000: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07100
     * @tc.name    Writelong interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07100", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07100: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var short = 2147483649;
            var writelong = data.writeLong(short);
            console.info("SUB_Softbus_IPC_MessageParcel_07100: run writeLong success, writelong is " + writelong);
            expect(writelong == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_07100: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_LONG, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_07100: run sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                var readlong = result.reply.readLong();
                console.info("SUB_Softbus_IPC_MessageParcel_07100: run readLong is success, readlong is " + readlong);
                expect(readlong == short).assertTrue();
            });

            data.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07100: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07200
     * @tc.name    Call the parallel interface to read and write data to the double instance
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07200", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            var token = 10.2;
            var result = data.writeDouble(token);
            console.info("SUB_Softbus_IPC_MessageParcel_07200:run writeDoubleis is " + result);
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_07200: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                    console.info("SUB_Softbus_IPC_MessageParcel_07200: run sendRequestis is " + result.errCode);
                    var replyReadResult = reply.readDouble();
                    console.info("SUB_Softbus_IPC_MessageParcel_07200: run replyReadResult is " + replyReadResult);
                    expect(replyReadResult == token).assertTrue();
                });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07200:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07300
     * @tc.name    Writedouble interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07300", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07300: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 1.79E+308;
            var result = data.writeDouble(token);
            console.info("SUB_Softbus_IPC_MessageParcel_07300:run writeDoubleis is " + result);
            expect(result == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_07300: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_07300: run sendRequestis is " + result.errCode);
                var replyReadResult = reply.readDouble();
                console.info("SUB_Softbus_IPC_MessageParcel_07300: run rreplyReadResult is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07300:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07400
     * @tc.name    Writedouble interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07400", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07400: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 4.9000000e-32;
            var result = data.writeDouble(token);
            console.info("SUB_Softbus_IPC_MessageParcel_07400:run writeDoubleis is " + result);
            expect(result == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_07400: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_DOUBLE, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_07400: run sendRequestis is " + result.errCode);
                var replyReadResult = reply.readDouble();
                console.info("SUB_Softbus_IPC_MessageParcel_07400: run replyReadResult is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07400:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07500
     * @tc.name    Writedouble interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07500", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07500: create object successfully.");

            var token = "1.79E+465312156";
            var result = data.writeDouble(token);
            console.info("SUB_Softbus_IPC_MessageParcel_07500:run writeDoubleis is " + result);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07500:error = " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07600
     * @tc.name    Call the writeboolean interface to write the data to the messageparcel instance,
     *             and call readboolean to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07600", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07600: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = true;
            var result = data.writeBoolean(token);
            console.info("SUB_Softbus_IPC_MessageParcel_07600:run writeBooleanis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_07600: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BOOLEAN, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_07600: run sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readBoolean();
                console.info("SUB_Softbus_IPC_MessageParcel_07600: run readBoolean is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07600:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07700
     * @tc.name    Call the writeboolean interface to write the data to the messageparcel instance,
     *             and call readboolean to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07700", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07700: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = false;
            var result = data.writeBoolean(token);
            console.info("SUB_Softbus_IPC_MessageParcel_07700:run writeBooleanis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_07700: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BOOLEAN, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_07700: run sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readBoolean();
                console.info("SUB_Softbus_IPC_MessageParcel_07700: run readBoolean is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07700:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07800
     * @tc.name    Writeboolean interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07800", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07800: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 9;
            var result = data.writeBoolean(token);
            console.info("SUB_Softbus_IPC_MessageParcel_07800:run writeBooleanis is " + result);
            expect(result == false).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07800:error = " + error);
            expect(error != null).assertTrue();
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_07900
     * @tc.name    Writeboolean interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_07900", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_07900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_07900: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = "aaa";
            var result = data.writeBoolean(token);
            console.info("SUB_Softbus_IPC_MessageParcel_07900:run writeBooleanis is " + result);
            expect(result == false).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_07900:error = " + error);
            expect(error != null).assertTrue();
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_07900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08000
     * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
     *             and call readchar to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08000", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08000: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 65;
            var result = data.writeChar(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08000:run writeCharis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_08000: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_08000: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readChar();
                console.info("SUB_Softbus_IPC_MessageParcel_08000: run readChar is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08000:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08100
     * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
     *             and call readchar to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08100", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08100: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 122;
            var result = data.writeChar(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08100:run writeCharis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_08100: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_08100: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readChar();
                console.info("SUB_Softbus_IPC_MessageParcel_08100: run readChar is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08100:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08200
     * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
     *             and call readchar to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08200", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 64;
            var result = data.writeChar(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08200:run writeCharis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_08200: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_08200: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readChar();
                console.info("SUB_Softbus_IPC_MessageParcel_08200: run readChar is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08200:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08300
     * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
     *             and call readchar to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08300", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08300: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 123;
            var result = data.writeChar(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08300:run writeCharis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_08300: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_08300: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readChar();
                console.info("SUB_Softbus_IPC_MessageParcel_08300: run readChar is  " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08300:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08400
     * @tc.name    Call the writechar interface to write the data to the messageparcel instance,
     *             and call readchar to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08400", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08400: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 65;
            var result = data.writeChar(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08400:run writeCharis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_08400: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_CHAR, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_08400: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readChar();
                console.info("SUB_Softbus_IPC_MessageParcel_08400: run readChar is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08400:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08500
     * @tc.name    Writechar interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08500", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08500: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 'ades';
            var result = data.writeChar(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08500:run writeCharis is " + result);
            expect(result == false).assertTrue()

        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08500:error = " + error);
            expect(error != null).assertTrue();
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08600
     * @tc.name    Call the writestring interface to write the data to the messageparcel instance,
     *             and call readstring() to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08600", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08600: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = '';
            for(var i = 0; i < (40*K - 1); i++){
                token += 'a';
            };
            var result = data.writeString(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08600:run writeStringis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_08600: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_08600: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readString();
                console.info("SUB_Softbus_IPC_MessageParcel_08600: run readString is " + replyReadResult.length);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08600:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08700
     * @tc.name    Call the writestring interface to write the data to the messageparcel instance,
     *             and call readstring() to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08700", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08700: create object successfully.");
            var token = '';
            for(var i = 0; i < 40*K; i++){
                token += 'a';
            };
            var result = data.writeString(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08700:run writeStringis is " + result);
            expect(result == false).assertTrue();

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08700:error = " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08800
     * @tc.name    Writestring interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08800", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08800: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 123;
            var result = data.writeString(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08800:run writeStringis is " + result);
            expect(result == false).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08800:error = " + error);
            expect(error != null).assertTrue();
        }
        data.reclaim();
        reply.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_08900
     * @tc.name    Call the writebyte interface to write data to the messageparcel instance,
     *             and call readbyte to read data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_08900", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_08900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_08900: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 2;
            var result = data.writeByte(token);
            console.info("SUB_Softbus_IPC_MessageParcel_08900:run writeByteis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_08900: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTE, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_08900: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readByte();
                console.info("SUB_Softbus_IPC_MessageParcel_08900: run readByte is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_08900:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_08900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09000
     * @tc.name    Writebyte interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09000", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09000: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            expect(data.writeByte(-128) == true).assertTrue();
            expect(data.writeByte(0) == true).assertTrue();
            expect(data.writeByte(1) == true).assertTrue();
            expect(data.writeByte(2) == true).assertTrue();
            expect(data.writeByte(127) == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09000: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTE_MULTI, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09000: sendRequestis is " + result.errCode);

                expect(reply.readByte() == -128).assertTrue();
                expect(reply.readByte() == 0).assertTrue();
                expect(reply.readByte() == 1).assertTrue();
                expect(reply.readByte() == 2).assertTrue();
                expect(reply.readByte() == 127).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09000:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09100
     * @tc.name    Writebyte interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09100", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09100: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            expect(data.writeByte(-129) == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09100: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTE_MULTI, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09100: sendRequestis is " + result.errCode);
                expect(reply.readByte() == 127).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09100:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09200
     * @tc.name    Writebyte interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09200", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            expect(data.writeByte(128) == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09200: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_BYTE_MULTI, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09200: sendRequestis is " + result.errCode);
                expect(reply.readByte() == -128).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09200:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09300
     * @tc.name    Writebyte interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09300", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09300: create object successfully.");
            let writeby = data.writeByte("error");
            console.info("SUB_Softbus_IPC_MessageParcel_09300: writeByte is" + writeby);
            expect(writeby).assertEqual(false);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09300:error = " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09400
     * @tc.name    Call the writeint interface to write the data to the messageparcel instance,
     *             and call readint to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09400", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09400: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 2;
            var result = data.writeInt(token);
            console.info("SUB_Softbus_IPC_MessageParcel_09400:run writeIntis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09400: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09400: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_09400: run readInt is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09400:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09500
     * @tc.name    Writeint interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09500", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09500: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            expect(data.writeInt(-2147483648) == true).assertTrue();
            expect(data.writeInt(0) == true).assertTrue();
            expect(data.writeInt(1) == true).assertTrue();
            expect(data.writeInt(2) == true).assertTrue();
            expect(data.writeInt(2147483647) == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09500: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09500: sendRequestis is " + result.errCode);
                expect(result.reply.readInt() == -2147483648).assertTrue();
                expect(result.reply.readInt() == 0).assertTrue();
                expect(result.reply.readInt() == 1).assertTrue();
                expect(result.reply.readInt() == 2).assertTrue();
                expect(result.reply.readInt() == 2147483647).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09500:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09600
     * @tc.name    Writeint interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09600", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09600: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeInt(2147483648) == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09600: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09600: sendRequestis is " + result.errCode);
                expect(result.reply.readInt() == -2147483648).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09600:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09700
     * @tc.name    Writeint interface, illegal value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09700", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09700: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeInt(-2147483649) == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09700: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT_MULTI, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09700: sendRequestis is " + result.errCode);
                expect(result.reply.readInt() == 2147483647).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09700:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09800
     * @tc.name    Call the writefloat interface to write data to the messageparcel instance,
     *             and call readfloat to read data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09800", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09800: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 2.2;
            var result = data.writeFloat(token);
            console.info("SUB_Softbus_IPC_MessageParcel_09800:run writeDoubleis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09800: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09800: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readFloat();
                console.info("SUB_Softbus_IPC_MessageParcel_09800: run readFloat is " + replyReadResult);
                expect(replyReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09800:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_09900
     * @tc.name    Writefloat interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_09900", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_09900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_09900: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 3.4E+38;
            var result = data.writeFloat(token);
            console.info("SUB_Softbus_IPC_MessageParcel_09900:run writeFloatis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_09900: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_09900: sendRequestis is " + result.errCode);
                var newReadResult = result.reply.readFloat();
                console.info("SUB_Softbus_IPC_MessageParcel_09900: readFloat result is " + newReadResult);
                expect(newReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_09900:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_09900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_10000
     * @tc.name    Writefloat interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_10000", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_10000: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 1.4E-45;
            var result = data.writeFloat(token);
            console.info("SUB_Softbus_IPC_MessageParcel_10000:run writeFloatis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_10000: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_10000: sendRequestis is " + result.errCode);
                var newReadResult = result.reply.readFloat();
                console.info("SUB_Softbus_IPC_MessageParcel_10000: readFloat result is " + newReadResult);
                expect(newReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10000:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_10100
     * @tc.name    Writefloat interface, boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_10100", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_10100: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var token = 4.4E+38;
            var result = data.writeFloat(token);
            console.info("SUB_Softbus_IPC_MessageParcel_10100:run writeFloatis is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_10100: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_FLOAT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_10100: sendRequestis is " + result.errCode);
                var newReadResult = result.reply.readFloat();
                console.info("SUB_Softbus_IPC_MessageParcel_10100: readFloat result is " + newReadResult);
                expect(newReadResult == token).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10100:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_10200
     * @tc.name    Writefloat interface, illegal value validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_10200", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_10200: create object successfully.");

            var token = 'a';
            var result = data.writeFloat(token);
            console.info("SUB_Softbus_IPC_MessageParcel_10200:run writeFloatis is " + result);
            expect(result == false).assertTrue();
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10200:error = " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_10300
     * @tc.name    Test messageparcel to deliver rawdata data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_10300", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_10300: create object successfully.");

            var Capacity = data.getRawDataCapacity()
            console.info("SUB_Softbus_IPC_MessageParcel_10300:run Capacity success, Capacity is " + Capacity);
            expect(Capacity).assertEqual(128*M);

            var rawdata = [1, 2, 3]
            var result = data.writeRawData(rawdata, rawdata.length);
            console.info("SUB_Softbus_IPC_MessageParcel_10300:run writeRawDatais is " + result);
            expect(result == true).assertTrue();
            var newReadResult = data.readRawData(rawdata.length)
            console.info("SUB_Softbus_IPC_MessageParcel_10300:run readRawDatais is " + newReadResult);
            assertArrayElementEqual(newReadResult,rawdata);
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10300:error = " + error);
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_10400
     * @tc.name    Illegal value passed in from writerawdata interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_10400", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_10400: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var Capacity = data.getRawDataCapacity()
            console.info("SUB_Softbus_IPC_MessageParcel_10400:run Capacityis is " + Capacity);
            expect(Capacity).assertEqual(128*M);
            var token = [2,1,4,3,129] ;
            var result = data.writeRawData(token, 149000000);
            console.info("SUB_Softbus_IPC_MessageParcel_10400:run writeRawDatais is " + result);
            expect(result == false).assertTrue();
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10400:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_10500
     * @tc.name    Illegal value passed in from writerawdata interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_10500", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10500---------------------------");
        try{
            let parcel = new rpc.MessageParcel();
            console.info("SUB_Softbus_IPC_MessageParcel_10500: create object successfully.");
            let reply = new rpc.MessageParcel();
            let option = new rpc.MessageOption();
            let arr = [1, 2, 3, 4, 5];
            expect(parcel.writeInt(arr.length)).assertTrue();
            let isWriteSuccess = parcel.writeRawData(arr, arr.length);
            console.info("SUB_Softbus_IPC_MessageParcel_10500: parcel write raw data result is : " + isWriteSuccess);
            expect(isWriteSuccess).assertTrue();
            let Capacity = parcel.getRawDataCapacity()
            console.info("SUB_Softbus_IPC_MessageParcel_10500:run Capacity success, Capacity is " + Capacity);
            expect(Capacity).assertEqual(128*M);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_10500: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_10500: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let size = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_10500:run readIntis is " + size);
                expect(size).assertEqual(arr.length);
                let reCapacity = parcel.getRawDataCapacity()
                console.info("SUB_Softbus_IPC_MessageParcel_10500:run Capacity is " + reCapacity);
                expect(reCapacity).assertEqual(128*M);
                let newReadResult = result.reply.readRawData(size);
                console.info("SUB_Softbus_IPC_MessageParcel_10500:run readRawDatais " + newReadResult);
                assertArrayElementEqual(newReadResult,arr);
            });
            parcel.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10500:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10500---------------------------");
    });

    /*
    * @tc.number  SUB_Softbus_IPC_MessageParcel_10600
    * @tc.name    Test messageParcel to deliver abnormal RawData data
    * @tc.desc    Function test
    * @tc.level   0
    */
    it("SUB_Softbus_IPC_MessageParcel_10600", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10600---------------------------");
        try{
            let parcel = new rpc.MessageParcel();
            console.info("SUB_Softbus_IPC_MessageParcel_10600: create object successfully.");
            let reply = new rpc.MessageParcel();
            let option = new rpc.MessageOption();
            let arr = [1, 2, 3, 4, 5];
            expect(parcel.writeInt(arr.length + 1)).assertTrue();
            let isWriteSuccess = parcel.writeRawData(arr, (arr.length + 1));
            console.info("SUB_Softbus_IPC_MessageParcel_10600: parcel write raw data result is : " + isWriteSuccess);
            expect(isWriteSuccess).assertTrue();
            let Capacity = parcel.getRawDataCapacity()
            console.info("SUB_Softbus_IPC_MessageParcel_10600:run Capacity success, Capacity is " + Capacity);
            expect(Capacity).assertEqual(128*M);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_10600: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_10600: result is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let size = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_10600:run readIntis is " + size);
                expect(size).assertEqual(arr.length + 1);
                let reCapacity = parcel.getRawDataCapacity()
                console.info("SUB_Softbus_IPC_MessageParcel_10600:run Capacity is " + reCapacity);
                expect(reCapacity).assertEqual(128*M);
                let newReadResult = result.reply.readRawData(size);
                console.info("SUB_Softbus_IPC_MessageParcel_10600:run readRawDatais " + newReadResult);
                expect(arr[0]).assertEqual(newReadResult[0]);
                expect(arr[1]).assertEqual(newReadResult[1]);
                expect(arr[2]).assertEqual(newReadResult[2]);
                expect(arr[3]).assertEqual(newReadResult[3]);
                expect(arr[4]).assertEqual(newReadResult[4]);
            });
            parcel.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10600:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10600---------------------------");
    });

    /*
    * @tc.number  SUB_Softbus_IPC_MessageParcel_10700
    * @tc.name    Test messageParcel to deliver abnormal RawData data
    * @tc.desc    Function test
    * @tc.level   0
    */
    it("SUB_Softbus_IPC_MessageParcel_10700", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10700---------------------------");
        try{
            let parcel = new rpc.MessageParcel();
            console.info("SUB_Softbus_IPC_MessageParcel_10700: create object successfully.");
            let reply = new rpc.MessageParcel();
            let option = new rpc.MessageOption();
            let arr = [1, 2, 3, 4, 5];
            expect(parcel.writeInt(arr.length-1)).assertTrue();
            let isWriteSuccess = parcel.writeRawData(arr, (arr.length - 1));
            console.info("SUB_Softbus_IPC_MessageParcel_10700: parcel write raw data result is : " + isWriteSuccess);
            expect(isWriteSuccess).assertTrue();
            let Capacity = parcel.getRawDataCapacity()
            console.info("SUB_Softbus_IPC_MessageParcel_10700:run Capacity success, Capacity is " + Capacity);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_10700: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_10700: result is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let size = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_10700:run readIntis is " + size);
                expect(size).assertEqual(arr.length - 1);
                let reCapacity = parcel.getRawDataCapacity()
                console.info("SUB_Softbus_IPC_MessageParcel_10700:run Capacity success, Capacity is " + reCapacity);
                expect(reCapacity).assertEqual(128*M);
                let newReadResult = result.reply.readRawData(size);
                console.info("SUB_Softbus_IPC_MessageParcel_10700:run readRawDatais is " + newReadResult);
                expect(arr[0]).assertEqual(newReadResult[0]);
                expect(arr[1]).assertEqual(newReadResult[1]);
                expect(arr[2]).assertEqual(newReadResult[2]);
                expect(arr[3]).assertEqual(newReadResult[3]);
            });
            parcel.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10700:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10700---------------------------");
    });

    /*
    * @tc.number  SUB_Softbus_IPC_MessageParcel_10800
    * @tc.name    Test messageParcel to deliver out-of-bounds RawData data
    * @tc.desc    Function test
    * @tc.level   0
    */
    it("SUB_Softbus_IPC_MessageParcel_10800", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10800---------------------------");
        try{
            let parcel = new rpc.MessageParcel();
            console.info("SUB_Softbus_IPC_MessageParcel_10800: create object successfully.");
            let reply = new rpc.MessageParcel();
            let option = new rpc.MessageOption();
            let arr = [-129, 2, 3, 4, 128];
            expect(parcel.writeInt(arr.length)).assertTrue();
            let isWriteSuccess = parcel.writeRawData(arr, arr.length);
            console.info("SUB_Softbus_IPC_MessageParcel_10800: parcel write raw data result is : " + isWriteSuccess);
            expect(isWriteSuccess).assertTrue();
            let Capacity = parcel.getRawDataCapacity()
            console.info("SUB_Softbus_IPC_MessageParcel_10800:run Capacity success, Capacity is " + Capacity);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_10800: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, parcel, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_10800: result is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let size = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_10800:run readIntis is " + size);
                expect(size).assertEqual(arr.length);
                let reCapacity = parcel.getRawDataCapacity()
                console.info("SUB_Softbus_IPC_MessageParcel_10800:run Capacity is " + reCapacity);
                expect(reCapacity).assertEqual(128*M);
                let newReadResult = result.reply.readRawData(size);
                console.info("SUB_Softbus_IPC_MessageParcel_10800:run readRawDatais is " + newReadResult);
                assertArrayElementEqual(newReadResult,arr);
            });
            parcel.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10800:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10800---------------------------");
    });

    /*
    * @tc.number  SUB_Softbus_IPC_MessageParcel_10900
    * @tc.name    Test messageParcel to deliver illegal RawData data
    * @tc.desc    Function test
    * @tc.level   0
    */
    it("SUB_Softbus_IPC_MessageParcel_10900", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_10900---------------------------");
        try{
            let parcel = new rpc.MessageParcel();
            console.info("SUB_Softbus_IPC_MessageParcel_10900: create object successfully.");
            let reply = new rpc.MessageParcel();
            let option = new rpc.MessageOption();
            let arr = ["aaa", 1, 2, 3];
            expect(parcel.writeInt(arr.length)).assertTrue();
            let isWriteSuccess = parcel.writeRawData(arr, arr.length);
            console.info("SUB_Softbus_IPC_MessageParcel_10900: parcel write raw data result is : " + isWriteSuccess);
            expect(isWriteSuccess).assertTrue();
            let reCapacity = parcel.getRawDataCapacity()
            console.info("SUB_Softbus_IPC_MessageParcel_10900:run Capacity success, Capacity is " + reCapacity);
            expect(reCapacity).assertEqual(128*M);
            parcel.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_10900:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_10900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11000
     * @tc.name    Call the writeremoteobject interface to serialize the remote object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11000", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11000: create object successfully.");

            let testRemoteObject = new TestRemoteObject("testObject");
            var result = data.writeRemoteObject(testRemoteObject);
            console.info("SUB_Softbus_IPC_MessageParcel_11000: result is " + result);
            expect(result == true).assertTrue();
            data.readRemoteObject()
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11000:error = " + error);
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11100
     * @tc.name    Call the writeremoteobject interface to serialize the remote object and pass in the empty object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11100", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11100: create object successfully.");

            var token = {}
            var result = data.writeRemoteObject(token);
            console.info("SUB_Softbus_IPC_MessageParcel_11100: result is " + result);
            expect(result == false).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11100:error = " + error);
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11200
     * @tc.name    Call the writesequenceable interface to write the custom serialized
     *             object to the messageparcel instance
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11200", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            let sequenceable = new MySequenceable(1, "aaa");
            let result = data.writeSequenceable(sequenceable);
            console.info("SUB_Softbus_IPC_MessageParcel_11200: writeSequenceable is " + result);
            expect(result == true).assertTrue();
            let ret = new MySequenceable(0, "");
            let result2 = data.readSequenceable(ret);
            console.info("SUB_Softbus_IPC_MessageParcel_11200: readSequenceable is " + result2);
            expect(result2 == true).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11200:error = " + error);
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11300
     * @tc.name    After the server finishes processing, write noexception first before writing the result,
     *             and the client calls readexception to judge whether the server is abnormal
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11300", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11300: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            data.writeNoException();
            console.info("SUB_Softbus_IPC_MessageParcel_11300: run writeNoException success");
            expect(data.writeInt(6) == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_11300: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_NOEXCEPTION, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_11300: sendRequestis is " + result.errCode);
                result.reply.readException()
                var replyData = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_11300: readResult is " + replyData);
                expect(replyData == 6).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11300:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11400
     * @tc.name    If the data on the server is abnormal, the client calls readexception
     *             to judge whether the server is abnormal
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11400", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11400---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11400: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            data.writeNoException();
            console.info("SUB_Softbus_IPC_MessageParcel_11400: run writeNoException success");
            expect(data.writeInt(1232222223444) == true).assertTrue();

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_11400: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_NOEXCEPTION, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_11400: sendRequestis is " + result.errCode);
                result.reply.readException()
                var replyData = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_11400: readResult is " + replyData);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11400:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11500
     * @tc.name    Serializable object marshaling and unmarshalling test
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11500", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11500: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var sequenceable = new MySequenceable(1, "aaa");
            var result = data.writeSequenceable(sequenceable);
            console.info("SUB_Softbus_IPC_MessageParcel_11500: writeSequenceable is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_11500: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLE, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_11500: sendRequestis is " + result.errCode);
                var s = new MySequenceable(null,null)
                var resultReply = result.reply.readSequenceable(s);
                console.info("SUB_Softbus_IPC_MessageParcel_11500: run readSequenceable is " + resultReply);
                expect(resultReply == true).assertTrue();
                expect(s.str == sequenceable.str).assertTrue();
                expect(s.num == sequenceable.num).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11500:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11600
     * @tc.name    Non serializable object marshaling test
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11600", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11600: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var sequenceable = new MySequenceable(1, "aaa");
            var result = data.writeSequenceable(sequenceable);
            console.info("SUB_Softbus_IPC_MessageParcel_11600: writeSequenceable is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_11600: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLE, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_11600: sendRequestis is " + result.errCode);
                var s = new MySequenceable(null,null)
                var replyReadResult = reply.readSequenceable(s);
                console.info("SUB_Softbus_IPC_MessageParcel_11600: run readSequenceable is " + replyReadResult);
                expect(replyReadResult == true).assertTrue();
                expect(s.str == sequenceable.str).assertTrue();
                expect(s.num == sequenceable.num).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11600:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11700
     * @tc.name    The server did not send a serializable object, and the client was ungrouped
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11700", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11700: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var sequenceable = 10;
            var result = data.writeInt(sequenceable);
            console.info("SUB_Softbus_IPC_MessageParcel_11700 writeInt is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_11700: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_11700: sendRequestis is " + result.errCode);
                var s = new MySequenceable(0,null)
                var replyReadResult = result.reply.readSequenceable(s);
                console.info("SUB_Softbus_IPC_MessageParcel_11700: run readSequenceable is" + replyReadResult);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11700:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11800
     * @tc.name    Call the writesequenceable interface to write the custom serialized object to the
     *             messageparcel instance, and call readsequenceable to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11800", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11800: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var sequenceable = new MySequenceable(2, "abc");
            var result = data.writeSequenceable(sequenceable);
            console.info("RpcClient: writeSequenceable is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_11800: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLE, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_11800: sendRequestis is " + result.errCode);
                var s = new MySequenceable(null,null)
                var replyReadResult = result.reply.readSequenceable(s);
                console.info("SUB_Softbus_IPC_MessageParcel_11800: run readSequenceable is" + replyReadResult);
                expect(s.str == sequenceable.str).assertTrue();
                expect(s.num == sequenceable.num).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11800:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_11900
     * @tc.name    Call the writesequenceablearray interface to write the custom serialized object to the
     *             messageparcel instance, and call readsequenceablearray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_11900", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11900---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_11900: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var sequenceable = [new MySequenceable(1, "aaa"),
                                new MySequenceable(2, "bbb"), new MySequenceable(3, "ccc")];
            var result = data.writeSequenceableArray(sequenceable);
            console.info("SUB_Softbus_IPC_MessageParcel_11900: writeSequenceableArray is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_11900: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLEARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_11900: sendRequestis is " + result.errCode);
                var s = [new MySequenceable(null, null), new MySequenceable(null, null),
                         new MySequenceable(null, null)];
                result.reply.readSequenceableArray(s);
                console.info("SUB_Softbus_IPC_MessageParcel_11900: run readSequenceableArray is" + s);
                for (let i = 0; i < s.length; i++) {
                    expect(s[i].str).assertEqual(sequenceable[i].str)
                    expect(s[i].num).assertEqual(sequenceable[i].num)
                }
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_11900:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_11900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12000
     * @tc.name    Call the writesequenceablearray interface to write the custom serialized object to the
     *             messageparcel instance, and call readsequenceablearray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12000", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12000---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_12000: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            var sequenceable = [new MySequenceable(4, "abc"),
            new MySequenceable(5, "bcd"), new MySequenceable(6, "cef")];
            var result = data.writeSequenceableArray(sequenceable);
            console.info("SUB_Softbus_IPC_MessageParcel_12000: writeSequenceable is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_12000: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_SEQUENCEABLEARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_12000: sendRequestis is " + result.errCode);
                var s = [new MySequenceable(null, null),
                         new MySequenceable(null, null), new MySequenceable(null, null)]
                result.reply.readSequenceableArray(s);
                console.info("SUB_Softbus_IPC_MessageParcel_12000: run readSequenceableArray is" +s);
                for (let i = 0; i < s.length; i++) {
                    expect(s[i].str).assertEqual(sequenceable[i].str)
                    expect(s[i].num).assertEqual(sequenceable[i].num)
                }
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12000:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12100
     * @tc.name    Call the writesequenceablearray interface to write the custom
     *             serialized object to the messageparcel instance
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12100", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12100---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_12100: create object successfully.");
            var sequenceable = 1;
            var result = data.writeSequenceableArray(sequenceable);
            console.info("SUB_Softbus_IPC_MessageParcel_12100: writeSequenceable is " + result);
            expect(result == false).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12100:error = " + error);
            expect(error != null).assertTrue();
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12200
     * @tc.name    Call the writeremoteobjectarray interface to write the object array to the messageparcel
     *             instance, and call readremoteobjectarray to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12200", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12200---------------------------");
        try{
            let count = 0
            function checkResult(num, str) {
                expect(num).assertEqual(123)
                expect(str).assertEqual("rpcListenerTest")
                count++;
                console.info("check result done, count: " + count)
                if (count == 3) {
                    done()
                }
            }
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_12200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            expect(data.writeInterfaceToken("rpcTestAbility")).assertTrue()
            var listeners = [new TestListener("rpcListener", checkResult),
                                    new TestListener("rpcListener2", checkResult),
                                    new TestListener("rpcListener3", checkResult)];
            var result = data.writeRemoteObjectArray(listeners);
            console.info("SUB_Softbus_IPC_MessageParcel_12200: writeRemoteObjectArray is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_12200: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECTARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_12200: sendRequestis is " + result.errCode);
                expect(result.errCode).assertEqual(0);
                expect(result.code).assertEqual(CODE_WRITE_REMOTEOBJECTARRAY);
                expect(result.data).assertEqual(data);
                expect(result.reply).assertEqual(reply);
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12200:error = " + error);
        }

        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12300
     * @tc.name    Call the writeremoteobjectarray interface to write the object array to the messageparcel instance,
     *             and call readremoteobjectarray (objects: iremoteobject []) to read the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12300", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12300---------------------------");
        try{
            let count = 0
            function checkResult(num, str) {
                expect(num).assertEqual(123)
                expect(str).assertEqual("rpcListenerTest")
                count++;
                console.info("check result done, count: " + count)
                if (count == 3) {
                    done()
                }
            }
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_12300: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeInterfaceToken("rpcTestAbility")).assertTrue()
            var listeners = [new TestListener("rpcListener", checkResult),
                             new TestListener("rpcListener2", checkResult),
                             new TestListener("rpcListener3", checkResult)];
            var result = data.writeRemoteObjectArray(listeners);
            console.info("RpcClient: writeRemoteObjectArray is " + result);
            expect(result == true).assertTrue();
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageParcel_12300: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECTARRAY, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_12300: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
            });

            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12300:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12400
     * @tc.name    Test messageparcel delivery file descriptor object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12400", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12400---------------------------");
        let context = FA.getContext()
        await context.getFilesDir()
            .then(async function(path) {
                expect(path != null).assertTrue()
                let basePath = path;
                let filePath = basePath + "/test1.txt";
                let fd = fileio.openSync(filePath, 0o2| 0o100 | 0o2000, 0o666);
                expect(fd >= 0).assertTrue()
                let str = "HELLO RPC"
                let bytesWr = fileio.writeSync(fd, str);
                let option = new rpc.MessageOption()
                let data = rpc.MessageParcel.create()
                let reply = rpc.MessageParcel.create()
                let result = data.containFileDescriptors()
                let writeInt = data.writeInt(bytesWr)
                expect(writeInt == true).assertTrue()
                let writeFileDescriptor = data.writeFileDescriptor(fd)
                expect(writeFileDescriptor == true).assertTrue()
                let result1 = data.containFileDescriptors()
                expect(data.containFileDescriptors()).assertTrue()
                await gIRemoteObject.sendRequest(CODE_FILESDIR, data, reply, option)
                    .then(function(result) {
                        expect(result.errCode).assertEqual(0)
                        let buf = new ArrayBuffer(str.length * 2);
                        let bytesRd = fileio.readSync(fd, buf, {position:0,});
                        let fdResult = reply.readFileDescriptor()
                        let content = String.fromCharCode.apply(null, new Uint8Array(buf));
                        expect(content).assertEqual(str + str)
                        let dupFd = rpc.MessageParcel.dupFileDescriptor(fd);
                        let buf2 = new ArrayBuffer(str.length * 2);
                        let byteRd2 = fileio.readSync(dupFd, buf2, {position:0,});
                        let content2 = String.fromCharCode.apply(null, new Uint8Array(buf2));
                        console.info("dupFd bytes read: " + byteRd2 + ", content2: " + content2);
                        expect(content2).assertEqual(str + str)
                        rpc.MessageParcel.closeFileDescriptor(fd);
                        rpc.MessageParcel.closeFileDescriptor(dupFd);
                    })
                try {
                    console.info("after close fd, write again")
                    fileio.writeSync(fd, str)
                    expect(0).assertEqual(1)
                } catch(e) {
                    console.error("got exception: " + e)
                }
            })
        done()
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12500
     * @tc.name    Test messageparcel to deliver the reply message received in promise across processes
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12500", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12500---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_12500: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeByte(2)).assertTrue()
            expect(data.writeShort(3)).assertTrue()
            expect(data.writeInt(4)).assertTrue()
            expect(data.writeLong(5)).assertTrue()
            expect(data.writeFloat(1.2)).assertTrue()
            expect(data.writeDouble(10.2)).assertTrue()
            expect(data.writeBoolean(true)).assertTrue()
            expect(data.writeChar(5)).assertTrue()
            expect(data.writeString("HelloWorld")).assertTrue()
            expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue()

            await gIRemoteObject.sendRequest(CODE_ALL_TYPE, data, reply, option).then((result) => {
                console.info("sendRequest done, error code: " + result.errCode)
                expect(result.errCode).assertEqual(0)
                expect(result.reply.readByte()).assertEqual(2)
                expect(result.reply.readShort()).assertEqual(3)
                expect(result.reply.readInt()).assertEqual(4)
                expect(result.reply.readLong()).assertEqual(5)
                expect(result.reply.readFloat()).assertEqual(1.2)
                expect(result.reply.readDouble()).assertEqual(10.2)
                expect(result.reply.readBoolean()).assertTrue()
                expect(result.reply.readChar()).assertEqual(5)
                expect(result.reply.readString()).assertEqual("HelloWorld")
                let s = new MySequenceable(null, null)
                expect(result.reply.readSequenceable(s)).assertTrue()
                expect(s.num).assertEqual(1)
                expect(s.str).assertEqual("aaa")
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12500:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12600
     * @tc.name    Test the cross process delivery of messageparcel and receive the reply message
     *             in the callback function
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12600", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12600---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_12500: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeByte(2)).assertTrue()
            expect(data.writeShort(3)).assertTrue()
            expect(data.writeInt(4)).assertTrue()
            expect(data.writeLong(5)).assertTrue()
            expect(data.writeFloat(1.2)).assertTrue()
            expect(data.writeDouble(10.2)).assertTrue()
            expect(data.writeBoolean(true)).assertTrue()
            expect(data.writeChar(5)).assertTrue()
            expect(data.writeString("HelloWorld")).assertTrue()
            expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue()

            gIRemoteObject.sendRequest(CODE_ALL_TYPE, data, reply, option,(err, result) => {
                console.info("sendRequest done, error code: " + result.errCode)
                expect(result.errCode).assertEqual(0)
                expect(result.reply.readByte()).assertEqual(2)
                expect(result.reply.readShort()).assertEqual(3)
                expect(result.reply.readInt()).assertEqual(4)
                expect(result.reply.readLong()).assertEqual(5)
                expect(result.reply.readFloat()).assertEqual(1.2)
                expect(result.reply.readDouble()).assertEqual(10.2)
                expect(result.reply.readBoolean()).assertTrue()
                expect(result.reply.readChar()).assertEqual(5)
                expect(result.reply.readString()).assertEqual("HelloWorld")
                let s = new MySequenceable(null, null)
                expect(result.reply.readSequenceable(s)).assertTrue()
                expect(s.num).assertEqual(1)
                expect(s.str).assertEqual("aaa")
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12600:error = " + error);
        }
        sleep(2000)
        data.reclaim();
        reply.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12700
     * @tc.name    Test the cross process transmission of messageparcel.
     *             After receiving the reply message in promise, read various types of arrays in order
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12700", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12700---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_12700: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeByteArray([1, 2, 3])).assertTrue();
            expect(data.writeShortArray([4, 5, 6])).assertTrue()
            expect(data.writeIntArray([7, 8, 9])).assertTrue()
            expect(data.writeLongArray([10, 11, 12])).assertTrue()
            expect(data.writeFloatArray([1.1, 1.2, 1.3])).assertTrue()
            expect(data.writeDoubleArray([2.1, 2.2, 2.3])).assertTrue()
            expect(data.writeBooleanArray([true, true, false])).assertTrue()
            expect(data.writeCharArray([10, 20, 30])).assertTrue()
            expect(data.writeStringArray(['abc', 'seggg'])).assertTrue()
            let a = [new MySequenceable(1, "aaa"), new MySequenceable(2, "bbb"),
                new MySequenceable(3, "ccc")]
            expect(data.writeSequenceableArray(a)).assertTrue()
            gIRemoteObject.sendRequest(CODE_ALL_ARRAY_TYPE, data, reply, option,(err, result) => {
                expect(result.errCode).assertEqual(0)
                assertArrayElementEqual(result.reply.readByteArray(), [1, 2, 3])
                assertArrayElementEqual(result.reply.readShortArray(), [4, 5, 6])
                assertArrayElementEqual(result.reply.readIntArray(), [7, 8, 9])
                assertArrayElementEqual(result.reply.readLongArray(), [10, 11, 12])
                assertArrayElementEqual(result.reply.readFloatArray(), [1.1, 1.2, 1.3])
                assertArrayElementEqual(result.reply.readDoubleArray(), [2.1, 2.2, 2.3])
                assertArrayElementEqual(result.reply.readBooleanArray(), [true, true, false])
                assertArrayElementEqual(result.reply.readCharArray(), [10, 20, 30])
                assertArrayElementEqual(result.reply.readStringArray(), ['abc', 'seggg'])
                let b = [new MySequenceable(null, null), new MySequenceable(null, null),
                    new MySequenceable(null, null)]
                result.reply.readSequenceableArray(b)
                for (let i = 0; i < b.length; i++) {
                    expect(b[i].str).assertEqual(a[i].str)
                    expect(b[i].num).assertEqual(a[i].num)
                }
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12700:error = " + error);
        }
        sleep(2000)
        data.reclaim();
        reply.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12800
     * @tc.name    Test messageparcel cross process delivery. After receiving the reply message in promise,
     *             the client constructs an empty array in sequence and reads the data from the reply message
     *             into the corresponding array
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_12800", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12800---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_12800: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeByteArray([1, 2, 3])).assertTrue();
            expect(data.writeShortArray([4, 5, 6])).assertTrue()
            expect(data.writeIntArray([7, 8, 9])).assertTrue()
            expect(data.writeLongArray([10, 11, 12])).assertTrue()
            expect(data.writeFloatArray([1.1, 1.2, 1.3])).assertTrue()
            expect(data.writeDoubleArray([2.1, 2.2, 2.3])).assertTrue()
            expect(data.writeBooleanArray([true, true, false])).assertTrue()
            expect(data.writeCharArray([10, 20, 30])).assertTrue()
            expect(data.writeStringArray(['abc', 'seggg'])).assertTrue()
            let a = [new MySequenceable(1, "aaa"), new MySequenceable(2, "bbb"),
                new MySequenceable(3, "ccc")]
            expect(data.writeSequenceableArray(a)).assertTrue()
            gIRemoteObject.sendRequest(CODE_ALL_ARRAY_TYPE, data, reply, option).then((result) => {
                expect(result.errCode).assertEqual(0)
                assertArrayElementEqual(result.reply.readByteArray(), [1, 2, 3])
                assertArrayElementEqual(result.reply.readShortArray(), [4, 5, 6])
                assertArrayElementEqual(result.reply.readIntArray(), [7, 8, 9])
                assertArrayElementEqual(result.reply.readLongArray(), [10, 11, 12])
                assertArrayElementEqual(result.reply.readFloatArray(), [1.1, 1.2, 1.3])
                assertArrayElementEqual(result.reply.readDoubleArray(), [2.1, 2.2, 2.3])
                assertArrayElementEqual(result.reply.readBooleanArray(), [true, true, false])
                assertArrayElementEqual(result.reply.readCharArray(), [10, 20, 30])
                assertArrayElementEqual(result.reply.readStringArray(), ['abc', 'seggg'])
                let b = [new MySequenceable(null, null), new MySequenceable(null, null),
                new MySequenceable(null, null)]
                result.reply.readSequenceableArray(b)
                for (let i = 0; i < b.length; i++) {
                    expect(b[i].str).assertEqual(a[i].str)
                    expect(b[i].num).assertEqual(a[i].num)
                }
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12800:error = " + error);
        }
        sleep(2000)
        data.reclaim();
        reply.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_12900
     * @tc.name    Test messageparcel to pass an object of type iremoteobject across processes
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_MessageParcel_12900', 0, async function(done) {
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_12900---------------------------");
        function checkResult(num, str) {
            expect(num).assertEqual(123)
            expect(str).assertEqual("rpcListenerTest")
            done()
        }
    try{
        let option = new rpc.MessageOption()
        let data = rpc.MessageParcel.create()
        let reply = rpc.MessageParcel.create()

        let listener = new TestListener("rpcListener", checkResult)
        let result = data.writeRemoteObject(listener)
        console.info("SUB_Softbus_IPC_MessageParcel_12900 result is:" + result)
        expect(result == true).assertTrue()
        expect(data.writeInt(123)).assertTrue()
        expect(data.writeString("rpcListenerTest")).assertTrue()
        await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECT, data, reply, option)
            .then((result)=> {
                console.info("SUB_Softbus_IPC_MessageParcel_12900 sendRequest done, error code: " + result.errCode)
                expect(result.errCode).assertEqual(0)
                result.reply.readException()
            })
                data.reclaim()
                reply.reclaim()
                console.info("test done")
    } catch(error) {
            console.info("SUB_Softbus_IPC_MessageParcel_12900: error = " + error);
        }
            console.info("---------------------end SUB_Softbus_IPC_MessageParcel_12900---------------------------");
    })


    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13000
     * @tc.name    Test messageparcel to pass an array of iremoteobject objects across processes
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_MessageParcel_13000', 0, async function(done) {
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13000---------------------------");

        let count = 0;
        function checkResult(num, str) {
            expect(num).assertEqual(123)
            expect(str).assertEqual("rpcListenerTest")
            count++
            console.info("check result done, count: " + count)
            if (count == 3) {
                done()
            }
        }
        try{
            let option = new rpc.MessageOption()
            let data = rpc.MessageParcel.create()
            let reply = rpc.MessageParcel.create()
            let listeners = [new TestListener("rpcListener", checkResult),
            new TestListener("rpcListener2", checkResult),
            new TestListener("rpcListener3", checkResult)]
            let result = data.writeRemoteObjectArray(listeners)
            expect(result == true).assertTrue()
            console.info("SUB_Softbus_IPC_MessageParcel_13000 result is:" + result)
            expect(data.writeInt(123)).assertTrue()
            expect(data.writeString("rpcListenerTest")).assertTrue()
            await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECTARRAY_1, data, reply, option)
            .then((result)=> {
                console.info("SUB_Softbus_IPC_MessageParcel_13000 sendRequest done, error code: " + result.errCode)
                expect(result.errCode).assertEqual(0)
                result.reply.readException()
            })

                data.reclaim()
                reply.reclaim()
                console.info("test done")
        } catch(error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13000: error = " + error);
            }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13000---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13100
     * @tc.name    Test messageparcel to pass the array of iremoteobject objects across processes. The server
     *             constructs an empty array in onremoterequest and reads it from messageparcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_MessageParcel_13100', 0, async function(done) {
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13100---------------------------");
        let count = 0;
        function checkResult(num, str) {
            expect(num).assertEqual(123)
            expect(str).assertEqual("rpcListenerTest")
            count++
            console.info("check result done, count: " + count)
            if (count == 3) {
                done()
            }
        }

        try{
            let option = new rpc.MessageOption()
            let data = rpc.MessageParcel.create()
            let reply = rpc.MessageParcel.create()
            let listeners = [new TestListener("rpcListener", checkResult),
            new TestListener("rpcListener2", checkResult),
            new TestListener("rpcListener3", checkResult)]
            let result = data.writeRemoteObjectArray(listeners)
            expect(result == true).assertTrue()
            data.readRemoteObjectArray()
            console.info("SUB_Softbus_IPC_MessageParcel_13100 result is:" + result)
            expect(data.writeInt(123)).assertTrue()
            expect(data.writeString("rpcListenerTest")).assertTrue()
            await gIRemoteObject.sendRequest(CODE_WRITE_REMOTEOBJECTARRAY_2, data, reply, option)
            .then((result)=> {
                console.info("sendRequest done, error code: " + result.errCode)
                expect(result.errCode).assertEqual(0)
                result.reply.readException()
            })

                data.reclaim()
                reply.reclaim()
                console.info("test done")
        } catch(error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13100: error = " + error);
            }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13100---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13200
     * @tc.name    Invoke the rewindRead interface, write the POS, and read the offset value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_13200", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13200---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_13200: create object successfully");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            data.writeInt(12);
            data.writeString("parcel");
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_13200: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_13200: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let number1 = result.reply.readInt();
                expect(number1).assertEqual(12);
                expect(result.reply.rewindRead(0)).assertTrue();
                let number2 = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_13200:run readIntis is " + number1 + ";" + number2);
                expect(number2).assertEqual(12);

                let reString = result.reply.readString();
                console.info("SUB_Softbus_IPC_MessageParcel_13200:run readStringis is " + reString);
                expect(reString).assertEqual("");
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13200:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13300
     * @tc.name    Invoke the rewindRead interface, write the POS, and read the offset value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_13300", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13300---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_13300: create object successfully");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            data.writeInt(12);
            data.writeString("parcel");
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_13300: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_13300: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let number1 = result.reply.readInt();
                expect(result.reply.rewindRead(1)).assertTrue();
                let number2 = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_13300:run readIntis is " + number1 + ";" + number2);
                expect(number1).assertEqual(12);
                expect(number2).assertEqual(0);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13300:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13400
     * @tc.name    Invoke the rewindWrite interface, write the POS, and read the offset value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_13400", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_11800---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_13400: create object successfully");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            data.writeInt(4);
            data.rewindWrite(0);
            data.writeInt(5);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_13400: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_13400: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let number = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_13400:run readIntis is " + number);
                expect(number).assertEqual(5);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13400:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13500
     * @tc.name    Invoke the rewindWrite interface, write the POS, and read the offset value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_13500", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13500---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_13500: create object successfully");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            data.writeInt(4);
            data.rewindWrite(1);
            data.writeInt(5);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_13500: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_13500: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let number = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_13500:run readIntis is " + number);
                expect(number != 5).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13500:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13600
     * @tc.name    setCapacity Sets the storage capacity of the MessageParcel instance. The getCapacity
                   obtains the current MessageParcel capacity
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_13600", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13600---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_13600: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            expect(data.getCapacity()).assertEqual(0);
            let setMePaCapacity = data.setCapacity(100);
            console.info("SUB_Softbus_IPC_MessageParcel_13600:run setCapacityis is " + setMePaCapacity);
            expect(setMePaCapacity).assertTrue();
            expect(data.writeString("constant")).assertTrue();
            expect(data.getCapacity()).assertEqual(100);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_13600: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_13600: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let getMePaCapacity = result.reply.getCapacity();
                console.info("SUB_Softbus_IPC_MessageParcel_13600:run getCapacityis is " + getMePaCapacity);
                expect(getMePaCapacity).assertEqual(("constant".length * 2) + 8);
                expect(result.reply.readString()).assertEqual("constant");
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13600:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13700
     * @tc.name    setCapacity Sets the storage capacity of the MessageParcel instance. The getCapacity
                   obtains the current MessageParcel capacity
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_13700", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13700---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_13700: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            expect(data.writeString("constant")).assertTrue();
            expect(data.setCapacity(100)).assertTrue();
            expect(data.getCapacity()).assertEqual(100);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_13700: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_13700: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                expect(result.reply.readString()).assertEqual("constant");
                let getMeCa = result.reply.getCapacity();
                console.info("SUB_Softbus_IPC_MessageParcel_13700:run getCapacityis is " + getMeCa);
                expect(getMeCa).assertEqual(("constant".length * 2) + 8);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13700:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_13800
     * @tc.name    SetCapacity Tests the storage capacity threshold of the MessageParcel instance
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_13800", 0, async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13800---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_13800: create object successfully.");

            let getCapacitydata0 = data.getCapacity();
            console.info("SUB_Softbus_IPC_MessageParcel_13800:run getCapacityis is " + getCapacitydata0);

            expect(data.writeString("constant")).assertTrue();
            let getSizedata = data.getSize();
            console.info("SUB_Softbus_IPC_MessageParcel_13800:run getSizeis is " + getSizedata);
            let getCapacitydata = data.getCapacity();
            console.info("SUB_Softbus_IPC_MessageParcel_13800:run getCapacityis is " + getCapacitydata);

            let setCapacitydata1 = data.setCapacity(getSizedata + 1);
            console.info("SUB_Softbus_IPC_MessageParcel_13800:run setCapacityis is " + setCapacitydata1);
            expect(setCapacitydata1).assertTrue();
            console.info("SUB_Softbus_IPC_MessageParcel_13800:run getCapacityis is " + data.getCapacity());
            expect(data.getCapacity()).assertEqual((getSizedata + 1));

            let setCapacitydata2 = data.setCapacity(getSizedata);
            console.info("SUB_Softbus_IPC_MessageParcel_13800:run setCapacityis is " + setCapacitydata2);
            expect(setCapacitydata2).assertEqual(false);
            console.info("SUB_Softbus_IPC_MessageParcel_13800:run getCapacityis is " + data.getCapacity());
            expect(data.getCapacity()).assertEqual((getSizedata + 1));

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13800:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13800---------------------------");
    });

    /*
    * @tc.number  SUB_Softbus_IPC_MessageParcel_13900
    * @tc.name    SetCapacity Tests the storage capacity threshold of the MessageParcel instance
    * @tc.desc    Function test
    * @tc.level   0
    */
    it("SUB_Softbus_IPC_MessageParcel_13900", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_13900---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            expect(data.writeString("constant")).assertTrue();
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_13900: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_13900: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                let getSizeresult = result.reply.getSize();
                console.info("SUB_Softbus_IPC_MessageParcel_13900:run getSizeis is " + getSizeresult);
                let setCapacityresult = result.reply.getCapacity();
                console.info("SUB_Softbus_IPC_MessageParcel_13900:run getCapacityis is " + setCapacityresult);
                expect(setCapacityresult).assertEqual(("constant".length * 2) + 8);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_13900:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_13900---------------------------");
    });

    /*
    * @tc.number  SUB_Softbus_IPC_MessageParcel_14000
    * @tc.name    SetCapacity Tests the storage capacity threshold of the MessageParcel instance
    * @tc.desc    Function test
    * @tc.level   0
    */
    it("SUB_Softbus_IPC_MessageParcel_14000", 0, async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14000---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14000: create object successfully.");
            let getSizedata = data.getSize();
            console.info("SUB_Softbus_IPC_MessageParcel_14000:run setCapacityis is " + getSizedata);
            expect(getSizedata).assertEqual(0);

            let setMeCapacity = data.setCapacity(4*G - 1);
            console.info("SUB_Softbus_IPC_MessageParcel_14000:run setCapacityis is " + setMeCapacity);
            expect(setMeCapacity).assertTrue();
            let getCapacitydata = data.getCapacity();
            console.info("SUB_Softbus_IPC_MessageParcel_14000:run getCapacityis is " + getCapacitydata);
            expect(getCapacitydata).assertEqual(4*G - 1);

            let setMeCapacity1 = data.setCapacity(4*G);
            console.info("SUB_Softbus_IPC_MessageParcel_14000:run setCapacityis is " + setMeCapacity1);
            expect(setMeCapacity1).assertEqual(false);
            let getCapacitydata1 = data.getCapacity();
            console.info("SUB_Softbus_IPC_MessageParcel_14000:run getCapacityis is " + getCapacitydata1);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14000:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_14100
     * @tc.name    setCapacity Sets the storage capacity of the MessageParcel instance to decrease by one.
                   The getCapacity obtains the current MessageParcel capacity
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_14100", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14100---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14100: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            expect(data.getSize()).assertEqual(0);
            let setSizedata = data.setSize(0);
            console.info("SUB_Softbus_IPC_MessageParcel_14100:run setSizeis is " + setSizedata);
            expect(setSizedata).assertTrue();
            expect(data.writeString("constant")).assertTrue();
            let getSizedata = data.getSize();
            console.info("SUB_Softbus_IPC_MessageParcel_14100:run getSizeis is " + getSizedata);
            expect(getSizedata).assertEqual(("constant".length * 2) + 8);

            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_14100: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_14100: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                let getSizeresult = result.reply.getSize();
                console.info("SUB_Softbus_IPC_MessageParcel_14100:run getSizeis is " + getSizeresult);
                expect(getSizeresult).assertEqual(("constant".length * 2) + 8);

                expect(result.reply.readString()).assertEqual("constant");
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14100:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_14200
     * @tc.name    setSize Sets the size of the data contained in the MessageParcel instance. The getSize command
                    reads the data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_14200", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14200---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14200: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            expect(data.writeString("constant")).assertTrue();
            expect(data.getSize()).assertEqual(("constant".length * 2) + 8);
            expect(data.setSize(0)).assertTrue();

            let getSizedata = data.getSize();
            console.info("SUB_Softbus_IPC_MessageParcel_14200:run setSizeis is " + getSizedata);
            expect(getSizedata).assertEqual(0);

            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_14200: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_14200: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                let getSizeresult = result.reply.getSize();
                console.info("SUB_Softbus_IPC_MessageParcel_14200:run getSizeis is " + getSizeresult);
                expect(getSizeresult).assertEqual( 8);
                let writeresult = result.reply.readString();
                console.info("SUB_Softbus_IPC_MessageParcel_14200:run readStringis is " + writeresult);
                expect(writeresult).assertEqual("");
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14200:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_14300
     * @tc.name    SetSize: Increases the value of the data contained in the MessageParcel instance by 1,
                    Write setSize
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_14300", 0, async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14300---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14300: create object successfully.");
            expect(data.getSize()).assertEqual(0);
            expect(data.writeString("constant")).assertTrue();
            expect(data.getSize()).assertEqual(("constant".length * 2) + 8);

            let getCapacitydata = data.getCapacity();
            console.info("SUB_Softbus_IPC_MessageParcel_14300:run getCapacityis is " + getCapacitydata);

            let setSizedata1 = data.setSize(getCapacitydata);
            console.info("SUB_Softbus_IPC_MessageParcel_14300:run setSizeis is " + setSizedata1);
            expect(setSizedata1).assertTrue();

            expect(data.getSize()).assertEqual(getCapacitydata);

            let setSizedata2 = data.setSize(getCapacitydata + 1);
            console.info("SUB_Softbus_IPC_MessageParcel_14300:run setSizeis is " + setSizedata2);
            expect(setSizedata2).assertEqual(false);

            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14300:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_14400
     * @tc.name    SetSize: Increases the value of the data contained in the MessageParcel instance by 1,
                    Write the setSize boundary value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_14400", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14400---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14400: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            expect(data.writeString("constant")).assertTrue();
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_14400: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_14400: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();

                expect(result.reply.readString()).assertEqual("constant");
                expect(result.reply.getSize()).assertEqual(("constant".length * 2) + 8);

                let getCapacityresult = result.reply.getCapacity();
                console.info("SUB_Softbus_IPC_MessageParcel_14400:run getCapacityis is " + getCapacityresult);

                let setSizeresult1 = result.reply.setSize(getCapacityresult);
                console.info("SUB_Softbus_IPC_MessageParcel_14400:run setSizeis is " + setSizeresult1);
                expect(setSizeresult1).assertTrue();
                expect(result.reply.getSize()).assertEqual(getCapacityresult);

                let setSizeresult2 = result.reply.setSize(getCapacityresult + 1);
                console.info("SUB_Softbus_IPC_MessageParcel_14400:run setSizeis is " + setSizeresult2);
                expect(setSizeresult2).assertEqual(false);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14400:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_14500
     * @tc.name    Validate the setSize boundary value in the MessageParcel instance
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_14500", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14500---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14500: create object successfully.");

            let getCapacitydata = data.getCapacity();
            console.info("SUB_Softbus_IPC_MessageParcel_14500:run getCapacityis is " + getCapacitydata);
            expect(getCapacitydata).assertEqual(0);

            let setSizedata1 = data.setSize(4*G);
            console.info("SUB_Softbus_IPC_MessageParcel_14500:run setSizeis is " + setSizedata1);
            expect(setSizedata1).assertTrue();
            let getSizedata1 = data.getSize();
            console.info("SUB_Softbus_IPC_MessageParcel_14500:run getCapacityis is " + getSizedata1);
            expect(getSizedata1).assertEqual(0);

            let setSizedata = data.setSize(4*G - 1);
            console.info("SUB_Softbus_IPC_MessageParcel_14500:run setSizeis is " + setSizedata);
            expect(setSizedata).assertEqual(false);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14500:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_14600
     * @tc.name    Verify that setSize is out of bounds in a MessageParcel instance
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_14600", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14600---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14600: create object successfully.");

            let setSizedata = data.setSize(0);
            console.info("SUB_Softbus_IPC_MessageParcel_14600:run setCapacityis is " + setSizedata);
            expect(setSizedata).assertTrue();
            expect(data.getSize()).assertEqual(0);

            let setSizedata1 = data.setSize(2*4*G);
            console.info("SUB_Softbus_IPC_MessageParcel_14600:run setCapacityis is " + setSizedata1);
            expect(setSizedata1).assertTrue();
            expect(data.getSize()).assertEqual(0);

            let setSizedata2 = data.setSize(2*G);
            console.info("SUB_Softbus_IPC_MessageParcel_14600:run setCapacityis is " + setSizedata2);
            expect(setSizedata2).assertEqual(false);
            data.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14600:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_14700
     * @tc.name    Obtaining the Writable and Readable Byte Spaces of MessageParcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_14700", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14700---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14700: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            let getwbyte1 = data.getWritableBytes();
            data.writeInt(10);
            let getwbyte2 = data.getWritableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_14700:result getWritePosition is getWritableBytes is "
                + getwbyte1 + ";" + getwbyte2);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_14700: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_14700: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let getrbyte1 = result.reply.getReadableBytes();
                let readint = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_14700:result readInt is " + readint);
                let getrbyte2 = result.reply.getReadableBytes();
                console.info("SUB_Softbus_IPC_MessageParcel_14700:result getReadPosition is getReadableBytes is"
                    + getrbyte1 + ";" + getrbyte2);
                expect(readint).assertEqual(10);
                expect(getrbyte2).assertEqual(0);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14700:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_14800
     * @tc.name    Obtains the writeable and readable byte space and read position of the MessageParcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_14800", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14800---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14800: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            data.writeInt(10);
            let getwPos = data.getWritePosition();
            let getwbyte = data.getWritableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_14800:result getWritePosition is "
                + getwPos + "getWritableBytes is " + getwbyte);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_14800: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_14800: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let getrbyte = result.reply.getReadableBytes();
                let readint = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_14800:result readInt is " + readint);
                let getrPos = result.reply.getReadPosition();
                console.info("SUB_Softbus_IPC_MessageParcel_14800:result getReadPosition is "
                    + getrPos + "getReadableBytes is" + getrbyte);
                expect(readint).assertEqual(10);
                expect(getrPos).assertEqual(getwPos);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14800:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14800---------------------------");
    });

    /*
    * @tc.number  SUB_Softbus_IPC_MessageParcel_14900
    * @tc.name    Obtains the writeable and readable byte space and read position of the MessageParcel
    * @tc.desc    Function test
    * @tc.level   0
    */
    it("SUB_Softbus_IPC_MessageParcel_14900", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_14900---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_14900: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            data.writeInt(10);
            let getwPos = data.getWritePosition();
            let getwbyte = data.getWritableBytes();
            console.info("SUB_Softbus_IPC_MessageParcel_14900:result getWritePosition is "
                + getwPos + "getWritableBytes is " + getwbyte);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_14900: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_14900: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let readint = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_14900:result readInt is " + readint);
                let getrPos = result.reply.getReadPosition();
                let getrbyte = result.reply.getReadableBytes();
                console.info("SUB_Softbus_IPC_MessageParcel_14900:result getReadPosition is "
                    + getrPos + "getReadableBytes is" + getrbyte);
                expect(readint).assertEqual(10);

                let getrPos1 = result.reply.getReadPosition();
                expect(getrPos1).assertEqual(getwPos);
                let getrbyte1 = result.reply.getReadableBytes();
                console.info("SUB_Softbus_IPC_MessageParcel_14900:result getReadPosition is "
                    + getrPos1 + "getReadableBytes is" + getrbyte1);
                expect(getrbyte1).assertEqual(0);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_14900:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_14900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_15000
     * @tc.name    Test fixed MessageParcel space size to pass rawData data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_15000", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_15000---------------------------");
        try{
            let maxsize = 1024;
            let data = rpc.MessageParcel.create();
            let Capacity = data.getRawDataCapacity()
            console.info("SUB_Softbus_IPC_MessageParcel_15000:run Capacity success, Capacity is " + Capacity);
            let rawdata = [1, 2, 3];
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            expect(data.writeInt(maxsize)).assertTrue();
            let result = data.writeRawData(rawdata, maxsize);
            console.info("SUB_Softbus_IPC_MessageParcel_15000:run writeRawDatais is " + result);
            expect(result).assertTrue();
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_15000: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_RAWDATA, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_15000: result is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let size = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_15000:run readIntis is " + size);
                var newReadResult = result.reply.readRawData(size)
                console.info("SUB_Softbus_IPC_MessageParcel_15000:run readRawDatais is "
                    + newReadResult.length);
                expect(newReadResult != rawdata).assertTrue();
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_15000:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_15000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_15100
     * @tc.name    Obtains the write and read positions of the MessageParcel
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_15100", 0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_15100---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageParcel_15100: create object successfully.");
            let option = new rpc.MessageOption();
            let reply = rpc.MessageParcel.create();
            let getwPos1 = data.getWritePosition();
            expect(data.writeInt(10)).assertTrue();
            let getwPos2 = data.getWritePosition();
            console.info("SUB_Softbus_IPC_MessageParcel_15100:result getWritePosition is "
                + getwPos1 + ";" + getwPos2);
            if (gIRemoteObject == undefined){
                console.info("SUB_Softbus_IPC_MessageParcel_15100: gIRemoteObject undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageParcel_15100: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let getrPos1 = result.reply.getReadPosition();
                let readint = result.reply.readInt();
                console.info("SUB_Softbus_IPC_MessageParcel_15100:result readInt is " + readint);
                let getrPos2 = result.reply.getReadPosition();
                console.info("SUB_Softbus_IPC_MessageParcel_15100:result getReadPosition is "
                    + getrPos1 + ";" + getrPos2);
                expect(getwPos1).assertEqual(getrPos1);
                expect(getwPos2).assertEqual(getrPos2);
            });
            data.reclaim();
            reply.reclaim();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_15100:error = " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_15100---------------------------");
    });


    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_15200
     * @tc.name    Test messageparcel delivery file descriptor object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_15200", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_15200---------------------------");
        try{
            let testab = new TestProxy(gIRemoteObject).asObject();
            console.info("SUB_Softbus_IPC_MessageParcel_15200: run TestProxy success" + testab);
            expect(testab != null).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_15200:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_15200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageParcel_15300
     * @tc.name    Test messageparcel delivery file descriptor object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageParcel_15300", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageParcel_15300---------------------------");
        try{
            let testRemoteObject = new TestRemoteObject("testObject");
            console.info("SUB_Softbus_IPC_MessageParcel_15300: TestRemoteObject is" + testRemoteObject);
            let testab = testRemoteObject.asObject();
            console.info("SUB_Softbus_IPC_MessageParcel_15300: asObject is" + testab);
            expect(testab != null).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_MessageParcel_15300:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageParcel_15300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00100
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00100",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00100---------------------------");
        try{
            let option = new rpc.MessageOption();
            console.info("SUB_Softbus_IPC_MessageOption_00100: create object successfully.");
            let time = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00100: run getWaitTime success, time is " + time);
            expect(time).assertEqual(rpc.MessageOption.TF_WAIT_TIME);
            option.setWaitTime(16);
            let time2 = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00100: run getWaitTime success, time is " + time2);
            expect(time2).assertEqual(16);
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00100: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00100---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00200
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00200",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00200---------------------------");
        try{
            let option = new rpc.MessageOption();
            console.info("SUB_Softbus_IPC_MessageOption_00200: create object successfully.");
            let time = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00200: run getWaitTime success, time is " + time);
            expect(time).assertEqual(rpc.MessageOption.TF_WAIT_TIME);

            option.setWaitTime(0);
            let time2 = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00200: run getWaitTime success, time is " + time2);
            expect(time2).assertEqual(rpc.MessageOption.TF_WAIT_TIME);

            option.setWaitTime(60);
            let time3 = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00200: run getWaitTime success, time is " + time3);
            expect(time3).assertEqual(60);

        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00200: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00200---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00300
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00300",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00300---------------------------");
        try{
            let option = new rpc.MessageOption();
            console.info("SUB_Softbus_IPC_MessageOption_00300: create object successfully.");
            let time = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00300: run getWaitTime success, time is " + time);
            expect(time).assertEqual(rpc.MessageOption.TF_WAIT_TIME);

            option.setWaitTime(-1);
            let time2 = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00300: run getWaitTime success, time is " + time2);
            expect(time2).assertEqual(rpc.MessageOption.TF_WAIT_TIME);
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00300: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00300---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00400
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00400",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00400---------------------------");
        try{
            let option = new rpc.MessageOption();
            console.info("SUB_Softbus_IPC_MessageOption_00400: create object successfully.");
            let time = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00400: run getWaitTime success, time is " + time);
            expect(time).assertEqual(rpc.MessageOption.TF_WAIT_TIME);

            option.setWaitTime(61);
            let time2 = option.getWaitTime();
            console.info("SUB_Softbus_IPC_MessageOption_00400: run getWaitTime success, time is " + time2);
            expect(time2).assertEqual(61);
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00400---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00500
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00500",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00500---------------------------");
        try{
            let option = new rpc.MessageOption();
            console.info("SUB_Softbus_IPC_MessageOption_00500: create object successfully.");
            let flog = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00500: run getFlags success, flog is " + flog);
            expect(flog).assertEqual(rpc.MessageOption.TF_SYNC);

            option.setFlags(1)
            console.info("SUB_Softbus_IPC_MessageOption_00500: run setFlags success");
            let flog2 = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00500: run getFlags success, flog2 is " + flog2);
            expect(flog2).assertEqual(rpc.MessageOption.TF_ASYNC);
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00500: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00500---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00600
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00600",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00600---------------------------");
        try{
            let option = new rpc.MessageOption();
            console.info("SUB_Softbus_IPC_MessageOption_00600: create object successfully.");
            let flog = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00600: run getFlags success, flog is " + flog);
            expect(flog).assertEqual(rpc.MessageOption.TF_SYNC);

            option.setFlags(1);
            console.info("SUB_Softbus_IPC_MessageOption_00600: run setFlags success");
            let flog2 = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00600: run getFlags success, flog2 is " + flog2);
            expect(flog2).assertEqual(rpc.MessageOption.TF_ASYNC);

            option.setFlags(0)
            console.info("SUB_Softbus_IPC_MessageOption_00600: run setFlags success");
            let flog3 = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00600: run getFlags success, flog2 is " + flog3);
            expect(flog2).assertEqual(rpc.MessageOption.TF_ASYNC);
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00600: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00600---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00700
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00700",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00700---------------------------");
        try{
            let option = new rpc.MessageOption();
            console.info("SUB_Softbus_IPC_MessageOption_00700: create object successfully.");
            let flog = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00700: run getFlags success, flog is " + flog);
            expect(flog).assertEqual(rpc.MessageOption.TF_SYNC);

            option.setFlags(-1);
            let flog2 = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00700: run getFlags success, flog2 is " + flog2);
            expect(flog2).assertEqual(-1);
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00700: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00700---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00800
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00800",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00800---------------------------");
        try{
            let option = new rpc.MessageOption();
            console.info("SUB_Softbus_IPC_MessageOption_00800: create object successfully.");
            let flog = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00800: run getFlags success, flog is " + flog);
            expect(flog).assertEqual(rpc.MessageOption.TF_SYNC);

            option.setFlags(3);
            let flog2 = option.getFlags();
            console.info("SUB_Softbus_IPC_MessageOption_00800: run getFlags success, flog2 is " + flog2);
            expect(flog2).assertEqual(3);
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00800: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00800---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_00900
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_00900",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_00900---------------------------");
        try{
            expect(rpc.MessageOption.TF_SYNC).assertEqual(0);

            expect(rpc.MessageOption.TF_ASYNC).assertEqual(1);

            expect(rpc.MessageOption.TF_WAIT_TIME).assertEqual(4);

            expect(rpc.MessageOption.TF_ACCEPT_FDS).assertEqual(0x10);
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_00900: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_00900---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_01000
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_01000",0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_01000---------------------------");
        try{

            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageOption_01000: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            option.setWaitTime(20);
            option.setFlags(0);
            var token = "option";
            var result = data.writeString(token);
            console.info("SUB_Softbus_IPC_MessageOption_01000:run writeStringis is " + result);
            expect(result).assertTrue();
            expect(option.getFlags()).assertEqual(0);
            expect(option.getWaitTime()).assertEqual(20);

            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageOption_01000: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageOption_01000: sendRequestis is " + result.errCode);

                var replyReadResult = result.reply.readString();
                console.info("SUB_Softbus_IPC_MessageOption_01000: run readString is " + replyReadResult);
                expect(replyReadResult).assertEqual(token);
                expect(option.getFlags()).assertEqual(0);
                expect(option.getWaitTime()).assertEqual(20);

            });
            data.reclaim();
            reply.reclaim();
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_01000: error " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_01000---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_01100
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_01100",0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_01100---------------------------");
        try{

            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageOption_01100: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            option.setFlags(1);
            var token = "option";
            var result = data.writeString(token);
            console.info("SUB_Softbus_IPC_MessageOption_01100:run writeStringis is " + result);
            expect(result).assertTrue();
            expect(option.getFlags()).assertEqual(1);
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageOption_01100: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageOption_01100: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readString();
                console.info("SUB_Softbus_IPC_MessageOption_01100: run readString is success,result is " + replyReadResult);
                expect(replyReadResult).assertEqual("");
                expect(option.getFlags()).assertEqual(1);

            });
            data.reclaim();
            reply.reclaim();
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_01100: error " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_01100---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_MessageOption_01200
     * @tc.name    Basic method of testing messageoption
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_MessageOption_01200",0, async function(done){
        console.info("---------------------start SUB_Softbus_IPC_MessageOption_01200---------------------------");
        try{

            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_MessageOption_01200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            option.setFlags(3);
            var token = "option";
            var result = data.writeString(token);
            console.info("SUB_Softbus_IPC_MessageOption_01200:run writeStringis is " + result);
            expect(result).assertTrue();
            expect(option.getFlags()).assertEqual(3);
            if (gIRemoteObject == undefined)
            {
                console.info("SUB_Softbus_IPC_MessageOption_01200: gIRemoteObject is undefined");
            }
            await gIRemoteObject.sendRequest(CODE_WRITE_STRING, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_MessageOption_01200: sendRequestis is " + result.errCode);
                var replyReadResult = result.reply.readString();
                console.info("SUB_Softbus_IPC_MessageOption_01200: run readString is success,result is " + replyReadResult);
                expect(replyReadResult).assertEqual("");
                expect(option.getFlags()).assertEqual(3);
            });
            data.reclaim();
            reply.reclaim();
        }catch(error){
            console.info("SUB_Softbus_IPC_MessageOption_01200: error " + error);
        }
        done();
        console.info("---------------------end SUB_Softbus_IPC_MessageOption_01200---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00100
     * @tc.name    Exception parameter validation of the created anonymous shared memory object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00100",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00100---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", -1)
            console.info("SUB_Softbus_IPC_Ashmem_00100: ashmem " + ashmem);

            let ashmem2 = rpc.Ashmem.createAshmem(null, K)
            console.info("SUB_Softbus_IPC_Ashmem_00100: ashmem2 " + ashmem2);
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_00100: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00100---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00200
     * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00200",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00200---------------------------");
        try{
            var mapSize = 2*G - 1;
            var jsash = "";
            for (let i = 0;i < (256 - 1);i++){
                jsash += "a";
            }
            console.info("SUB_Softbus_IPC_Ashmem_00200: run  createAshmem success" + jsash.length);
            let ashmem = rpc.Ashmem.createAshmem(jsash, mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_00200: run  createAshmem success" + ashmem);
            expect(ashmem != null).assertTrue();
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_00200: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00200---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00300
     * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00300",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00300---------------------------");
        try{
            let mapSize = 2*G - 1;
            let jsash = '';
            for (let i = 0;i < 256;i++){
                jsash += 'a';
            }
            console.info("SUB_Softbus_IPC_Ashmem_00300: run  createAshmem success" + jsash.length);
            let ashmem = rpc.Ashmem.createAshmem(jsash, mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_00300: run  createAshmem success" + ashmem);
            ashmem.closeAshmem();
        }catch(error){
            expect(error != null).assertTrue();
            console.info("SUB_Softbus_IPC_Ashmem_00300: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00300---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00400
     * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00400",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00400---------------------------");
        try{
            let mapSize = 2*G - 1;
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_00400: run  createAshmem success" + ashmem);
            let size = ashmem.getAshmemSize()
            console.info("SUB_Softbus_IPC_Ashmem_00400: run getAshmemSize success, size is " + size);
            expect(size).assertEqual(mapSize);
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_00400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00400---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00500
     * @tc.name    Call the getashmemsize interface to get the size of the shared memory object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00500",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00500---------------------------");
        try{
            let mapSize = 2*G;
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest ", mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_00500: run  createAshmem success " + ashmem);
            let size = ashmem.getAshmemSize()
            console.info("SUB_Softbus_IPC_Ashmem_00500: run getAshmemSize success, size is " + size);
            expect(size).assertEqual(mapSize);
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_00500: error " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00500---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00600
     * @tc.name    Writeashmem exception validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00600",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00600---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096)
            console.info("SUB_Softbus_IPC_Ashmem_00600: ashmem " + ashmem);
            ashmem.closeAshmem()
            var data = rpc.MessageParcel.create();
            let writeAshmem = data.writeAshmem(ashmem);
            console.info("SUB_Softbus_IPC_Ashmem_00600: run writeAshmem success, writeAshmem is " + writeAshmem);
            expect(writeAshmem).assertEqual(false);
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_00600: error " + error);
        }
        data.reclaim();
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00600---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00700
     * @tc.name    Readfromashmem exception validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00700",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00700---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096)
            console.info("SUB_Softbus_IPC_Ashmem_00700: ashmem " + ashmem);
            ashmem.unmapAshmem()
            console.info("SUB_Softbus_IPC_Ashmem_00700: run unmapAshmem success");
            let bytes = [1, 2, 3, 4, 5];
            let ret = ashmem.readFromAshmem(bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_00700: run readFromAshmem result is " + ret);
            expect(ret==null).assertTrue();
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_00700: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00700---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00800
     * @tc.name    Mapashmem interface creates shared file mappings
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00800",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00800---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096)
            console.info("SUB_Softbus_IPC_Ashmem_00800: ashmem " + ashmem);
            let result = ashmem.mapAshmem(rpc.Ashmem.PROT_READ);
            console.info("SUB_Softbus_IPC_Ashmem_00800: run mapAshmemis is " + result);
            expect(result).assertTrue();
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_00800: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00800---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_00900
     * @tc.name    Mapashmem exception validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_00900",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_00900---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", (2*G - 1))
            console.info("SUB_Softbus_IPC_Ashmem_00900: ashmem " + ashmem);
            let result = ashmem.mapAshmem(999);
            console.info("SUB_Softbus_IPC_Ashmem_00900: run mapAshmemis is " + result);
            expect(result).assertEqual(false);
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_00900: error " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_00900---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01000
     * @tc.name    Mapreadandwriteashmem interface creates a shared file map with the protection level of read-write
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01000",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01000---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K)
            console.info("SUB_Softbus_IPC_Ashmem_01000: ashmem " + ashmem);
            let result = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01000: run mapAshmemis is " + result);
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01000: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01000---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01100
     * @tc.name    Mapreadandwriteashmem exception validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01100",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01100---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096)
            console.info("SUB_Softbus_IPC_Ashmem_01100: ashmem " + ashmem);
            let result = ashmem.mapAshmem(rpc.Ashmem.PROT_READ);
            console.info("SUB_Softbus_IPC_Ashmem_01100: run mapAshmemis is " + result);
            expect(result).assertTrue();

            ashmem.unmapAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01100: run unmapAshmem success");

            let result2 = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01100: run mapReadAndWriteAshmemis2 is " + result2);
            expect(result2).assertTrue();
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01100: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01100---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01200
     * @tc.name    Mapreadonlyashmem interface creates a shared file map with the protection level of read-write
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01200",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01200---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096)
            console.info("SUB_Softbus_IPC_Ashmem_01200: ashmem " + ashmem);
            let result = ashmem.mapReadOnlyAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01200: run mapReadAndWriteAshmemis is " + result);
            expect(result).assertTrue();
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01200: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01200---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01300
     * @tc.name    Mapreadonlyashmem exception validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01300",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01300---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K)
            console.info("SUB_Softbus_IPC_Ashmem_01300: ashmem " + ashmem);

            let result = ashmem.mapAshmem(rpc.Ashmem.PROT_WRITE);
            console.info("SUB_Softbus_IPC_Ashmem_01300: run mapAshmemis is " + result);
            expect(result).assertTrue();

            ashmem.unmapAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01300: run unmapAshmem success");
            ashmem.closeAshmem()
            let result2 = ashmem.mapReadOnlyAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01300: run mapReadAndWriteAshmemis2 is " + result2);
            expect(result2).assertEqual(false);
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01300: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01300---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01400
     * @tc.name    Mapreadonlyashmem exception validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01400",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01400---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
            let resultwrite = ashmem.setProtection(rpc.Ashmem.PROT_WRITE)
            console.info("SUB_Softbus_IPC_Ashmem_01400: run setProtectioniswrite is " + resultwrite);
            expect(resultwrite).assertTrue();
            let resultread = ashmem.setProtection(rpc.Ashmem.PROT_READ)
            console.info("SUB_Softbus_IPC_Ashmem_01400: run setProtectionisread is " + resultread);
            expect(resultread).assertEqual(false);

            let resultreadAndwrite = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01400: run setProtection success, mapReadAndWriteAshmem is "
                + resultreadAndwrite);
            expect(resultreadAndwrite ).assertEqual(false);

            let resultnone = ashmem.setProtection(rpc.Ashmem.PROT_NONE)
            console.info("SUB_Softbus_IPC_Ashmem_01400: run setProtectionisnone is " + resultnone);
            expect(resultnone).assertTrue();

            let resultread2 = ashmem.setProtection(rpc.Ashmem.PROT_READ)
            console.info("SUB_Softbus_IPC_Ashmem_01400: run setProtectionisread2 is " + resultread2);
            expect(resultread2).assertEqual(false);
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01400---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01500
     * @tc.name    Setprotection exception input parameter verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01500",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01500---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
            console.info("SUB_Softbus_IPC_Ashmem_01500: ashmem " + ashmem);
            let result = ashmem.setProtection(3);
            console.info("SUB_Softbus_IPC_Ashmem_01500: run setProtectionis is " + result);
            expect(result).assertTrue();
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01500: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01500---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01600
     * @tc.name    The writetoashmem interface writes the shared file associated with the object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01600",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01600---------------------------");
        try{
            let mapSize = 4096
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_01600: ashmem " + ashmem);

            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01600: run mapReadAndWriteAshmemis2 is "
                + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [1, 2, 3, 4, 5];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_01600: run writeToAshmemis is " + result);
            expect(result).assertTrue();
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01600: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01600---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01700
     * @tc.name    The writetoashmem interface writes the shared file associated with the object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01700",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01700---------------------------");
        try{
            let mapSize = 4096
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_01700: ashmem " + ashmem);

            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01700: run mapReadAndWriteAshmemis2 is "
                + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [-2147483648,2147483647];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_01700: run writeToAshmemis is " + result);
            expect(result).assertTrue();
            let reresult = ashmem.readFromAshmem(bytes.length,0);
            console.info("SUB_Softbus_IPC_Ashmem_01700: run readFromAshmemis is " + reresult);
            assertArrayElementEqual(reresult,bytes);
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01700: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01700---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01800
     * @tc.name    The writetoashmem interface writes the shared file associated with the object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01800",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01800---------------------------");
        try{
            let mapSize = 4096
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_01800: ashmem " + ashmem);

            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01800: run mapReadAndWriteAshmemis2 is "
                + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [-2147483649,2147483647];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_01800: run writeToAshmemis is " + result);
            expect(result).assertTrue();
            let readresult = ashmem.readFromAshmem(bytes.length,0);
            console.info("SUB_Softbus_IPC_Ashmem_01800: run readFromAshmemis is " + readresult);
            expect(readresult[0]).assertEqual(2147483647);
            expect(readresult[1]).assertEqual(bytes[1]);
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01800: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01800---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_01900
     * @tc.name    The writetoashmem interface writes the shared file associated with the object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_01900",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_01900---------------------------");
        try{
            let mapSize = 4096
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_01900: ashmem " + ashmem);

            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_01900: run mapReadAndWriteAshmemis2 is "
                + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [-2147483648,2147483648];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_01900: run writeToAshmemis is " + result);
            expect(result).assertTrue();
            let reresult = ashmem.readFromAshmem(bytes.length,0);
            console.info("SUB_Softbus_IPC_Ashmem_01900: run readFromAshmemis is " + reresult);
            expect(reresult[0]).assertEqual(bytes[0]);
            expect(reresult[1]).assertEqual(-2147483648);
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_01900: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_01900---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02000
     * @tc.name    The writetoashmem interface writes the shared file associated with the object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02000",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02000---------------------------");
        try{
            let mapSize = 2*G - 1;
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_02000: ashmem " + ashmem);

            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02000: run mapReadAndWriteAshmemis2 is " + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [0,1];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 2147483647);
            console.info("SUB_Softbus_IPC_Ashmem_02000: run writeToAshmemis is " + result);
            expect(result).assertEqual(false);
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02000: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02000---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02100
     * @tc.name    The writetoashmem interface writes the shared file associated with the object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02100",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02100---------------------------");
        try{
            let mapSize = 2*G - 1;
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", mapSize)
            console.info("SUB_Softbus_IPC_Ashmem_02100: ashmem " + ashmem);

            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02100: run mapReadAndWriteAshmemis2 is " + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [0,1];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 2147483648);
            console.info("SUB_Softbus_IPC_Ashmem_02100: run writeToAshmemis is " + result);
            expect(result).assertTrue();
            let readresult1 = ashmem.readFromAshmem(bytes.length,0);
            console.info("SUB_Softbus_IPC_Ashmem_02100: run readFromAshmemis is " + readresult1);
            assertArrayElementEqual(readresult1,bytes);
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02100: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02100---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02200
     * @tc.name    The writetoashmem interface writes the shared file associated with the object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02200",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02200---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096)
            console.info("SUB_Softbus_IPC_Ashmem_02200: ashmem " + ashmem);

            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02200: run mapReadAndWriteAshmemis2 is "
                + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [1, 2, 3, 4, 5];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_02200: run writeToAshmemis is " +result);
            expect(result).assertTrue();
            let resultread = ashmem.setProtection(rpc.Ashmem.PROT_READ);
            console.info("SUB_Softbus_IPC_Ashmem_02200: run setProtectionisread is " + resultread);
            expect(resultread).assertTrue()
            let result2 = ashmem.writeToAshmem(bytes, bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_02200: run writeToAshmemis is2 " + result2);
            expect(result2).assertEqual(false)
            ashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02200: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02200---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02300
     * @tc.name    Writetoashmem exception validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02300",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02300---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
            console.info("SUB_Softbus_IPC_Ashmem_02300: ashmem " + ashmem);
            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02300: run mapReadAndWriteAshmemis2 is "
                + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [1, 2, 3, 4, 5];
            let size = bytes.length + 10;
            let result = ashmem.writeToAshmem(bytes, 3, 0);
            console.info("SUB_Softbus_IPC_Ashmem_02300: run writeToAshmemis is " + result);
            expect(result).assertTrue();
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02300: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02300---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02400
     * @tc.name    Read data from the shared file associated with readfromashmem
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02400",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02400---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096)
            console.info("SUB_Softbus_IPC_Ashmem_02400: ashmem " + ashmem);

            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02400: run mapReadAndWriteAshmemis2 is "
                + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [1, 2, 3, 4, 5];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_02400: run writeToAshmemis is " + result);
            expect(result).assertTrue();
            var resultRead = ashmem.readFromAshmem(bytes.length, 0);
            console.info("SUB_Softbus_IPC_Ashmem_02400: run readFromAshmemis is " + resultRead);
            assertArrayElementEqual(resultRead,bytes);
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02400: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02400---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02500
     * @tc.name    Readfromashmem exception validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02500",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02500---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096);
            console.info("SUB_Softbus_IPC_Ashmem_02500: ashmem " + ashmem);
            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02500: run mapReadAndWriteAshmemis2 is "
                + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [1, 2, 3, 4, 5];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 1);
            console.info("SUB_Softbus_IPC_Ashmem_02500: run writeToAshmemis is " + result);
            expect(result).assertTrue()

            let result2 = ashmem.readFromAshmem(bytes.length, 3);
            console.info("SUB_Softbus_IPC_Ashmem_02500: run readFromAshmemis2 is " + result2);
            expect(bytes[2]).assertEqual(result2[0]);
            expect(bytes[3]).assertEqual(result2[1]);
            expect(bytes[4]).assertEqual(result2[2]);
            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02500: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02500---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02600
     * @tc.name    Createashmemfromexisting copies the ashmem object description and creates a new object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02600",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02600---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", 4096)
            console.info("SUB_Softbus_IPC_Ashmem_02600: ashmem " + ashmem);
            let resultWriteAndRead = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02600:  run mapReadAndWriteAshmem result " + resultWriteAndRead);
            expect(resultWriteAndRead).assertTrue();
            let bytes = [1, 2, 3];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 1);
            console.info("SUB_Softbus_IPC_Ashmem_02600: run writeToAshmemis " + result);
            expect(result).assertTrue()
            let newashmem = rpc.Ashmem.createAshmemFromExisting(ashmem);
            let resultWriteAndRead2 = newashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02600:  run mapReadAndWriteAshmem result " + resultWriteAndRead2);
            expect(resultWriteAndRead2).assertTrue();

            let result2 = newashmem.readFromAshmem(bytes.length, 1);
            console.info("SUB_Softbus_IPC_Ashmem_02600: run readFromAshmemis2 is " + result2);
            expect(result).assertTrue();
            assertArrayElementEqual(result2,bytes);
            ashmem.closeAshmem();
            newashmem.closeAshmem();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02600: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02600---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02700
     * @tc.name    Create a shared memory object and call writeashmem to write the shared anonymous
      object into the messageparcel object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02700",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02700---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);
            let data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_Ashmem_02700: ashmem " + ashmem);
            let resultMapRAndW = ashmem.mapReadAndWriteAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02700: run mapReadAndWriteAshmem result is " + resultMapRAndW);
            expect(resultMapRAndW).assertTrue();
            let bytes = [1, 2, 3];
            let result = ashmem.writeToAshmem(bytes, bytes.length, 1);
            console.info("SUB_Softbus_IPC_Ashmem_02700: run writeToAshmemis is " + result);
            expect(result).assertTrue()
            let result2 = data.writeAshmem(ashmem)
            console.info("SUB_Softbus_IPC_Ashmem_02700: run writeAshmemis is " + result2);
            expect(result2).assertTrue();
            let retReadAshmem = data.readAshmem();
            console.info("SUB_Softbus_IPC_Ashmem_02700: run readAshmem is " + retReadAshmem);
            let retBytes = retReadAshmem.readFromAshmem(bytes.length, 1);
            console.info("SUB_Softbus_IPC_Ashmem_02700: run readFromAshmem result is " + retBytes);

            ashmem.closeAshmem();
            data.reclaim();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02700: error " +error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02700---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02800
     * @tc.name    Create a non shared memory object and call writeashmem to write the messageparcel object
      object into the messageparcel object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02800",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02800---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            let data2 = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_Ashmem_02800: create MessageParcel object success");
            let result = data.writeAshmem(data2);
            console.info("SUB_Softbus_IPC_Ashmem_02800: run writeAshmemis is " + result);
            data.reclaim();
            data2.reclaim();
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02800: error " + error);
            expect(error != null).assertTrue();
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02800---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_Ashmem_02900
     * @tc.name    Create a non shared memory object and call writeashmem to write the messageparcel object
      object into the messageparcel object
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_Ashmem_02900",0,function(){
        console.info("---------------------start SUB_Softbus_IPC_Ashmem_02900---------------------------");
        try{
            let ashmem = rpc.Ashmem.createAshmem("JsAshmemTest", K);

            let resultwrite = ashmem.setProtection(rpc.Ashmem.PROT_EXEC)
            console.info("SUB_Softbus_IPC_Ashmem_02900: run setProtectioniswrite is " + resultwrite);
            expect(resultwrite).assertTrue();

            ashmem.closeAshmem()
        }catch(error){
            console.info("SUB_Softbus_IPC_Ashmem_02900: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_Ashmem_02900---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IRemoteObject_00100
     * @tc.name    Call sendrequestresult interface to send data
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IRemoteObject_00100",0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_IRemoteObject_00100---------------------------");
        try{
            let data = rpc.MessageParcel.create();
            let reply = rpc.MessageParcel.create();
            let option = new rpc.MessageOption();
            let sequenceable = new MySequenceable(1, "aaa");
            let result = data.writeSequenceable(sequenceable);
            console.info("SUB_Softbus_IPC_IRemoteObject_00100: run writeSequenceableis is " + result);

            await gIRemoteObject.sendRequest(CODE_WRITESEQUENCEABLE, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_IRemoteObject_00100: sendRequestis is " + result.errCode);
                expect(result.errCode == 0).assertTrue();
                let ret = new MySequenceable(0, "");
                var shortArryDataReply = result.reply.readSequenceable(ret);
                console.info("SUB_Softbus_IPC_IRemoteObject_00100: run readSequenceable is "
                             + shortArryDataReply);
                expect(shortArryDataReply == true).assertTrue()
                expect(ret.num).assertEqual(1)
                expect(ret.str).assertEqual("aaa")
            });

            data.reclaim();
            reply.reclaim();
            done();
        }catch(error){
            console.info("SUB_Softbus_IPC_IRemoteObject_00100: error " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IRemoteObject_00100---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IRemoteObject_00200
     * @tc.name    Test that messageparcel passes through the same process, and the client
     *             receives the reply message in promise
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IRemoteObject_00200", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_IRemoteObject_00200---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_IRemoteObject_00200: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();
            expect(data.writeByte(1)).assertTrue()
            expect(data.writeShort(2)).assertTrue()
            expect(data.writeInt(3)).assertTrue()
            expect(data.writeLong(10000)).assertTrue()
            expect(data.writeFloat(1.2)).assertTrue()
            expect(data.writeDouble(10.2)).assertTrue()
            expect(data.writeBoolean(true)).assertTrue()
            expect(data.writeChar(5)).assertTrue()
            expect(data.writeString("HelloWorld")).assertTrue()
            expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue()

            await gIRemoteObject.sendRequest(CODE_ALL_TYPE, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_IRemoteObject_00200: sendRequest done, error code: " + result.errCode);
                expect(result.errCode).assertEqual(0)
                expect(result.reply.readByte()).assertEqual(1)
                expect(result.reply.readShort()).assertEqual(2)
                expect(result.reply.readInt()).assertEqual(3)
                expect(result.reply.readLong()).assertEqual(10000)
                expect(result.reply.readFloat()).assertEqual(1.2)
                expect(result.reply.readDouble()).assertEqual(10.2)
                expect(result.reply.readBoolean()).assertTrue()
                expect(result.reply.readChar()).assertEqual(5)
                expect(result.reply.readString()).assertEqual("HelloWorld")
                let s = new MySequenceable(0, '')
                expect(result.reply.readSequenceable(s)).assertTrue()
                expect(s.num).assertEqual(1)
                expect(s.str).assertEqual("aaa")
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IRemoteObject_00200:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IRemoteObject_00200---------------------------");
        done();
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IRemoteObject_00300
     * @tc.name    Test that messageparcel passes through the same process, and the client
     *             receives the reply message in the callback function
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IRemoteObject_00300", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_IRemoteObject_00300---------------------------");
        try{
            var data = rpc.MessageParcel.create();
            console.info("SUB_Softbus_IPC_IRemoteObject_00300: create object successfully.");
            var reply = rpc.MessageParcel.create();
            var option = new rpc.MessageOption();

            expect(data.writeByte(1)).assertTrue()
            expect(data.writeShort(2)).assertTrue()
            expect(data.writeInt(3)).assertTrue()
            expect(data.writeLong(10000)).assertTrue()
            expect(data.writeFloat(1.2)).assertTrue()
            expect(data.writeDouble(10.2)).assertTrue()
            expect(data.writeBoolean(true)).assertTrue()
            expect(data.writeChar(10)).assertTrue()
            expect(data.writeString("HelloWorld")).assertTrue()
            expect(data.writeSequenceable(new MySequenceable(1, "aaa"))).assertTrue()

            const CODE_IREMOTEOBJECT_0200 = 21;
            await gIRemoteObject.sendRequest(CODE_ALL_TYPE, data, reply, option, (err, result) => {
                console.info("SUB_Softbus_IPC_IRemoteObject_00300:sendRequest done, error code: " + result.errCode)
                expect(result.errCode).assertEqual(0)
                expect(result.reply.readByte()).assertEqual(1)
                expect(result.reply.readShort()).assertEqual(2)
                expect(result.reply.readInt()).assertEqual(3)
                expect(result.reply.readLong()).assertEqual(10000)
                expect(result.reply.readFloat()).assertEqual(1.2)
                expect(result.reply.readDouble()).assertEqual(10.2)
                expect(result.reply.readBoolean()).assertTrue()
                expect(result.reply.readChar()).assertEqual(10)
                expect(result.reply.readString()).assertEqual("HelloWorld")
                let s = new MySequenceable(0, '')
                expect(result.reply.readSequenceable(s)).assertTrue()
                expect(s.num).assertEqual(1)
                expect(s.str).assertEqual("aaa")
            });
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IRemoteObject_00300:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IRemoteObject_00300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IRemoteObject_00400
     * @tc.name    Iremoteobject, register death notification verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IRemoteObject_00400", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_IRemoteObject_00400---------------------------");
        try{
            let object = new TestAbilityStub("Test1")
            var resultAdd1 = object.addDeathRecipient(null, 0)
            console.info("SUB_Softbus_IPC_IRemoteObject_00400:run addDeathRecipient first result is" + resultAdd1);
            expect(resultAdd1 == false).assertTrue();

            var resultRemove1 = object.removeDeathRecipient(null, 0)
            console.info("SUB_Softbus_IPC_IRemoteObject_00400:run removeDeathRecipient1 result is" + resultRemove1);
            expect(resultRemove1 == false).assertTrue();

            let isDead = object.isObjectDead()
            console.info("SUB_Softbus_IPC_IRemoteObject_00400:run  isDead result is " + isDead);
            expect(isDead == false).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IRemoteObject_00400:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IRemoteObject_00400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IRemoteObject_00500
     * @tc.name    Do not get the server agent, do not create a remoteobject instance, and directly getcallingpid,
     *             getcallingpid, getcallingdeviceid, getlocaldeviceid
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IRemoteObject_00500", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_IRemoteObject_00500---------------------------");
        try{
            let callingPid = rpc.IPCSkeleton.getCallingPid()
            console.info("SUB_Softbus_IPC_IRemoteObject_00500: run getCallingPid success, callingPid " + callingPid);
            expect(callingPid != null).assertTrue();

            let callingUid = rpc.IPCSkeleton.getCallingUid()
            console.info("SUB_Softbus_IPC_IRemoteObject_00500: run getCallingPid success, callingPid " + callingUid);
            expect(callingUid != null).assertTrue();

            let callingDeviceID = rpc.IPCSkeleton.getCallingDeviceID()
            console.info("SUB_Softbus_IPC_IRemoteObject_00500: run getCallingDeviceID success, callingDeviceID is "
                         + callingDeviceID);
            expect(callingDeviceID == "").assertTrue();

            let localDeviceID = rpc.IPCSkeleton.getLocalDeviceID()
            console.info("SUB_Softbus_IPC_IRemoteObject_00500: run getLocalDeviceID success, localDeviceID is "
            + localDeviceID);
            expect(localDeviceID == "").assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IRemoteObject_00500:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IRemoteObject_00500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IRemoteObject_00600
     * @tc.name    Querylocalinterface searches for objects based on descriptors
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IRemoteObject_00600", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_IRemoteObject_00600---------------------------");
        try{
            let object = new TestAbilityStub("Test1");
            console.info("SUB_Softbus_IPC_IRemoteObject_00600: run TestAbilityStub success");

            let result = object.isObjectDead()
            console.info("SUB_Softbus_IPC_IRemoteObject_00600: run isObjectDeadis is " + result);
            expect(result == false).assertTrue()

            let callingPid = object.getCallingPid()
            console.info("SUB_Softbus_IPC_IRemoteObject_00600: run getCallingPid success,callingPid " + callingPid);

            let callingUid = object.getCallingUid()
            console.info("SUB_Softbus_IPC_IRemoteObject_00600: run getCallingPid success,callingPid " + callingUid);

            object.attachLocalInterface(object, "Test1")
            console.info("SUB_Softbus_IPC_IRemoteObject_00600: run attachLocalInterface success");

            let res = object.queryLocalInterface("Test1")
            console.info("SUB_Softbus_IPC_IRemoteObject_00600: run queryLocalInterface success, res2 is " + res);
        } catch (error) {
            console.info("SUB_Softbus_IPC_IRemoteObject_00600:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IRemoteObject_00600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IRemoteObject_00700
     * @tc.name    Getinterfacedescriptor to get the interface description
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IRemoteObject_00700", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_IRemoteObject_00700---------------------------");
        try{
            let object = new TestAbilityStub("Test1223");

            let result = object.isObjectDead()
            console.info("SUB_Softbus_IPC_IRemoteObject_00700: run isObjectDeadis is " + result);
            expect(result == false).assertTrue()

            let callingPid = object.getCallingPid()
            console.info("SUB_Softbus_IPC_IRemoteObject_00700: run getCallingPid success,callingPid " + callingPid);

            let callingUid = object.getCallingUid()
            console.info("SUB_Softbus_IPC_IRemoteObject_00700: run getCallingPid success,callingPid " + callingUid);

            object.attachLocalInterface(object, "test1")
            console.info("SUB_Softbus_IPC_IRemoteObject_00700: run attachLocalInterface success");

            let result2 = object.getInterfaceDescriptor();
            console.info("SUB_Softbus_IPC_IRemoteObject_00700: run getInterfaceDescriptoris2 is "
                         + result2);
            expect(result2 == "test1").assertTrue();

        } catch (error) {
            console.info("SUB_Softbus_IPC_IRemoteObject_00700:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IRemoteObject_00700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00100
     * @tc.name    Call adddeathrecipient to register the death notification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00100", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_RemoteProxy_00100---------------------------");
        try{
            let recipient = new MyDeathRecipient(gIRemoteObject, null)
            var resultAdd1 = gIRemoteObject.addDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00100:run addDeathRecipient first is " + resultAdd1);
            expect(resultAdd1 == true).assertTrue();

            var resultAdd2 = gIRemoteObject.addDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00100:run addDeathRecipient second is " + resultAdd2);
            expect(resultAdd2 == true).assertTrue();

            var resultRemove1 = gIRemoteObject.removeDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00100:run removeDeathRecipient1 is " + resultRemove1);
            expect(resultRemove1 == true).assertTrue();

            var resultRemove2 = gIRemoteObject.removeDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00100:run  removeDeathRecipient2 is " + resultRemove2);
            expect(resultRemove2 == true).assertTrue();

            var resultRemove3 = gIRemoteObject.removeDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00100:run  removeDeathRecipient3 is " + resultRemove3);
            expect(resultRemove3 == false).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00100:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00200
     * @tc.name    AddDeathRecipient Validates the interface flags input parameter boundary value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00200", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_RemoteProxy_00200---------------------------");
        try{
            let recipient = new MyDeathRecipient(gIRemoteObject, null);
            var resultAdd = gIRemoteObject.addDeathRecipient(recipient, -(2*G));
            console.info("SUB_Softbus_IPC_RemoteProxy_00200:run addDeathRecipient first is " + resultAdd);
            expect(resultAdd).assertTrue();
            var resultRemove = gIRemoteObject.removeDeathRecipient(recipient, -(2*G));
            console.info("SUB_Softbus_IPC_RemoteProxy_00200:run removeDeathRecipient1 is " + resultRemove);
            expect(resultRemove).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00200:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00200---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00300
     * @tc.name    AddDeathRecipient Validates the interface flags input parameter boundary value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00300", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_RemoteProxy_00300---------------------------");
        try{
            let recipient = new MyDeathRecipient(gIRemoteObject, null);
            var resultAdd = gIRemoteObject.addDeathRecipient(recipient, (2*G - 1));
            console.info("SUB_Softbus_IPC_RemoteProxy_00300:run addDeathRecipient first is " + resultAdd);
            expect(resultAdd).assertTrue();
            var resultRemove = gIRemoteObject.removeDeathRecipient(recipient, (2*G - 1));
            console.info("SUB_Softbus_IPC_RemoteProxy_00300:run removeDeathRecipient1 is " + resultRemove);
            expect(resultRemove).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00300:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00300---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00400
     * @tc.name    AddDeathRecipient Validates the interface flags input parameter boundary value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00400", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_RemoteProxy_00400---------------------------");
        try{
            let recipient = new MyDeathRecipient(gIRemoteObject, null);
            var resultAdd = gIRemoteObject.addDeathRecipient(recipient, 2*G);
            console.info("SUB_Softbus_IPC_RemoteProxy_00400:run addDeathRecipient first is " + resultAdd);
            expect(resultAdd).assertTrue();
            var resultRemove = gIRemoteObject.removeDeathRecipient(recipient, 2*G);
            console.info("SUB_Softbus_IPC_RemoteProxy_00400:run removeDeathRecipient1 is " + resultRemove);
            expect(resultRemove).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00400:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00400---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00500
     * @tc.name    AddDeathRecipient Validates the interface flags input parameter boundary value
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00500", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_RemoteProxy_00500---------------------------");
        try{
            let recipient = new MyDeathRecipient(gIRemoteObject, null);
            var resultAdd = gIRemoteObject.addDeathRecipient(recipient, -(2*G + 1));
            console.info("SUB_Softbus_IPC_RemoteProxy_00500:run addDeathRecipient first is " + resultAdd);
            expect(resultAdd).assertTrue();
            var resultRemove = gIRemoteObject.removeDeathRecipient(recipient, -(2*G + 1));
            console.info("SUB_Softbus_IPC_RemoteProxy_00500:run removeDeathRecipient1 is " + resultRemove);
            expect(resultRemove).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00500:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00500---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00600
     * @tc.name    Call isobjectdead to check whether the object is dead
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00600", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_RemoteProxy_00600---------------------------");
        try{
            let recipient = new MyDeathRecipient(gIRemoteObject, null)
            var isDead = gIRemoteObject.isObjectDead();
            console.info("SUB_Softbus_IPC_RemoteProxy_00600: run isObjectDead result is " + isDead);
            expect(isDead == false).assertTrue();

            var resultAdd1 = gIRemoteObject.addDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00600:run addDeathRecipient first result is " + resultAdd1);
            expect(resultAdd1 == true).assertTrue();

            var isDead1 = gIRemoteObject.isObjectDead();
            console.info("SUB_Softbus_IPC_RemoteProxy_00600: run isObjectDead result is " + isDead1);
            expect(isDead1 == false).assertTrue();

            var resultRemove1 = gIRemoteObject.removeDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00600:run removeDeathRecipient result is " + resultRemove1);
            expect(resultRemove1 == true).assertTrue();

            var resultAdd2 = gIRemoteObject.addDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00600:run addDeathRecipient second result is " + resultAdd2);
            expect(resultAdd2 == true).assertTrue();

            var resultRemove2 = gIRemoteObject.removeDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00600:run removeDeathRecipient1 result is " + resultRemove2);
            expect(resultRemove2 == true).assertTrue();

            var resultRemove3 = gIRemoteObject.removeDeathRecipient(recipient, 0)
            console.info("SUB_Softbus_IPC_RemoteProxy_00600:run removeDeathRecipient3 result is " + resultRemove3);
            expect(resultRemove3 == false).assertTrue();

            var isDead2 = gIRemoteObject.isObjectDead();
            console.info("SUB_Softbus_IPC_RemoteProxy_00600: run isObjectDead2 result is " + isDead2);
            expect(isDead2 == false).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00600:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00600---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00700
     * @tc.name    Getinterfacedescriptor to get the object interface description
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00700", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_RemoteProxy_00700---------------------------");
        try{
            let object = new TestAbilityStub("Test0300");

            let result = object.getInterfaceDescriptor()
            console.info("SUB_Softbus_IPC_RemoteProxy_00700: run getInterfaceDescriptor result is " + result);
            expect(result).assertEqual("Test0300");
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00700:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00800
     * @tc.name    Querylocalinterface searches for objects based on descriptors
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00800", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_RemoteProxy_00800---------------------------");
        try{
            let object = new TestAbilityStub("Test0400");

            let result = object.isObjectDead();
            console.info("SUB_Softbus_IPC_RemoteProxy_00800: run getInterfaceDescriptor is " + result);
            expect(result).assertEqual(false);
            object.attachLocalInterface(object, "Test2");
            console.info("SUB_Softbus_IPC_RemoteProxy_00800: run attachLocalInterface success");
            let res2 = object.queryLocalInterface('Test2');
            console.info("SUB_Softbus_IPC_RemoteProxy_00800: run queryLocalInterface success, res2 is " + res2);
            let resultDescrip = object.getInterfaceDescriptor()
            console.info("SUB_Softbus_IPC_RemoteProxy_00800: run getInterfaceDescriptor success resultDescrip is "
                + resultDescrip);
            expect(resultDescrip).assertEqual("Test2");
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00800:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_RemoteProxy_00900
     * @tc.name    Transaction constant validation
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_RemoteProxy_00900", 0, async function(){
        console.info("SUB_Softbus_IPC_RemoteProxy_00900 is starting-------------")
        try {
            expect(rpc.RemoteProxy.PING_TRANSACTION).assertEqual(1599098439);
            expect(rpc.RemoteProxy.DUMP_TRANSACTION).assertEqual(1598311760);
            expect(rpc.RemoteProxy.INTERFACE_TRANSACTION).assertEqual(1598968902);
            expect(rpc.RemoteProxy.MIN_TRANSACTION_ID).assertEqual(0x1);
            expect(rpc.RemoteProxy.MAX_TRANSACTION_ID).assertEqual(0x00FFFFFF);
        } catch (error) {
            console.info("SUB_Softbus_IPC_RemoteProxy_00900 error is" + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_RemoteProxy_00900---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00100
     * @tc.name    Create an empty object and verify the function of the flushcommands interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_IPCSkeleton_00100', 0, async function() {
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00100---------------------------");
        try {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00100")
            let remoteObject = new TestRemoteObject("aaa");
            let ret = rpc.IPCSkeleton.flushCommands(remoteObject);
            console.info("SUB_Softbus_IPC_IPCSkeleton_00100 RpcServer: flushCommands result: " + ret);
            expect(ret != null).assertTrue();
        }
        catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00100 error is :" + error)
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00100---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00200
     * @tc.name    Create an empty object and verify the function of the flushcommands interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_IPCSkeleton_00200', 0, async function() {
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00200---------------------------");
        try {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00200 testcase")
            let remoteObject = {};
            let ret = rpc.IPCSkeleton.flushCommands(remoteObject);
            console.info("SUB_Softbus_IPC_IPCSkeleton_00200 RpcServer: flushCommands result: " + ret);
            expect(ret != null).assertTrue();
        }
        catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00200 error is :" + error)
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00200---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00300
     * @tc.name    Create an empty object and verify the function of the flushcommands interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_IPCSkeleton_00300', 0, async function() {
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00300---------------------------");
        try {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00300 testcase")
            let samgr = rpc.IPCSkeleton.getContextObject();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00300 getContextObject result: " + samgr);
            expect(samgr != null).assertTrue();
            let geinde = samgr.getInterfaceDescriptor();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00300 getInterfaceDescriptor result: " + geinde);
            expect(geinde).assertEqual("");
        }
        catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00300 error is :" + error)
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00300---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00400
     * @tc.name    Create an empty object and verify the function of the flushcommands interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_IPCSkeleton_00400', 0, async function() {
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00400---------------------------");
        try {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00400 testcase")
            let getCallingPid = rpc.IPCSkeleton.getCallingPid();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00400 getCallingPid result: " + getCallingPid);
            expect(getCallingPid != null).assertTrue();
            let getCallingUid = rpc.IPCSkeleton.getCallingUid();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00400 getCallingUid result: " + getCallingUid);
            expect(getCallingUid != null).assertTrue();
        }
        catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00400 error is :" + error)
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00400---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00500
     * @tc.name    Create an empty object and verify the function of the flushcommands interface
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_IPCSkeleton_00500', 0, async function() {
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00500---------------------------");
        try {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00500 testcase")
            let getCallingPid = rpc.IPCSkeleton.getLocalDeviceID();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00500 getCallingPid result: " + getCallingPid);
            expect(getCallingPid != null).assertTrue();
            let getCallingUid = rpc.IPCSkeleton.getCallingDeviceID();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00500 getCallingUid result: " + getCallingUid);
            expect(getCallingUid != null).assertTrue();
        }
        catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00500 error is :" + error)
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00500---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00600
     * @tc.name    Do not get the server agent, do not create a remoteobject instance, and directly getcallingpid,
     *             getcallingpid, getcallingdeviceid, getlocaldeviceid
     * @tc.desc    Function test
     * @tc.level   0
     */
    it('SUB_Softbus_IPC_IPCSkeleton_00600', 0, async function() {
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00600---------------------------");
        try{
            let getCallingPid = rpc.IPCSkeleton.getCallingPid();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00600: run  getCallingPid result is :" + getCallingPid);
            expect(getCallingPid != null).assertTrue();

            let getCallingUid = rpc.IPCSkeleton.getCallingUid();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00600: run getCallingUid result is :" + getCallingUid);
            expect(getCallingUid != null).assertTrue();

            let getCallingToKenId = rpc.IPCSkeleton.getCallingTokenId();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00600: run getCallingToKenId result is :" + getCallingToKenId);
            expect(getCallingToKenId != null).assertTrue();

            let getLocalDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00600: run getLocalDeviceID result is :" + getLocalDeviceID);
            expect(getLocalDeviceID != null).assertTrue();

            let getCallingDeviceID = rpc.IPCSkeleton.getCallingDeviceID();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00600: run getCallingDeviceID result is :" + getCallingDeviceID);
            expect(getCallingDeviceID != null).assertTrue();
        } catch (error){
            console.info("SUB_Softbus_IPC_IPCSkeleton_00600: error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00600---------------------------");
    })

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00700
     * @tc.name    Basic method of testing ipcskeleton
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IPCSkeleton_00700", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00700---------------------------");
        try{
            expect(rpc.IPCSkeleton.getContextObject().getInterfaceDescriptor()).assertEqual("");
            let callingPid = rpc.IPCSkeleton.getCallingPid();
            let callingUid = rpc.IPCSkeleton.getCallingUid();
            let option = new rpc.MessageOption();
            let data = rpc.MessageParcel.create();
            let reply = rpc.MessageParcel.create();
            expect(data.writeInterfaceToken("rpcTestAbility")).assertTrue();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00700： callingPid: " + callingPid
                + ", callingUid: " + callingUid);
            expect(callingUid != null).assertTrue();
            expect(callingPid != null).assertTrue();
            await gIRemoteObject.sendRequest(CODE_IPCSKELETON, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_IPCSkeleton_00700： sendRequest done, error code: " + result.errCode)
                expect(result.errCode).assertEqual(0);
                result.reply.readException();
                let rescallingPid = result.reply.readInt();
                let rescallingUid = result.reply.readInt();
                console.info("SUB_Softbus_IPC_IPCSkeleton_00700：" + rescallingPid +" ;"+ rescallingUid);
                expect(rescallingPid).assertEqual(callingPid);
                expect(rescallingUid).assertEqual(callingUid);
            })
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00700:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00700---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00800
     * @tc.name    Basic method of testing ipcskeleton
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IPCSkeleton_00800", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00800---------------------------");
        try{
            let callingPid = rpc.IPCSkeleton.getCallingPid();
            let callingUid = rpc.IPCSkeleton.getCallingUid();
            let option = new rpc.MessageOption();
            let data = rpc.MessageParcel.create();
            let reply = rpc.MessageParcel.create();
            expect(data.writeInterfaceToken("rpcTestAbility")).assertTrue();
            console.info("SUB_Softbus_IPC_IPCSkeleton_00800： callingPid: " + callingPid
                + ", callingUid: " + callingUid);
            await gIRemoteObject.sendRequest(CODE_IPCSKELETON_INT, data, reply, option).then((result) => {
                console.info("SUB_Softbus_IPC_IPCSkeleton_00800： sendRequest done, error code: " + result.errCode)
                expect(result.errCode).assertEqual(0);
                result.reply.readException();
                let rescallingPid = result.reply.readInt();
                let rescallingUid = result.reply.readInt();
                let restcallingPid = result.reply.readInt();
                let restcallingUid = result.reply.readInt();
                let resicallingPid = result.reply.readInt();
                let resicallingUid = result.reply.readInt();
                let resflushCommands = result.reply.readInt();

                console.info("SUB_Softbus_IPC_IPCSkeleton_00800：" + resicallingUid +" ;"+ resflushCommands);
                expect(rescallingPid).assertEqual(callingPid);
                expect(rescallingUid).assertEqual(callingUid);
                expect(restcallingPid).assertEqual(callingPid);
                expect(restcallingUid).assertEqual(callingUid);
                expect(resicallingPid).assertEqual(callingPid);
                expect(resicallingUid).assertEqual(callingUid);
                expect(resflushCommands).assertEqual(101);
            })
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00800:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00800---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_00900
     * @tc.name    SetCallingIdentity Interface flags input parameter boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IPCSkeleton_00900", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_00900---------------------------");
        try{
            let id = "";
            let ret = rpc.IPCSkeleton.setCallingIdentity(id);
            console.info("SUB_Softbus_IPC_IPCSkeleton_00900： setCallingIdentity is: " + ret);
            expect(ret).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_00900:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_00900---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_01000
     * @tc.name    SetCallingIdentity Interface flags input parameter boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IPCSkeleton_01000", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_01000---------------------------");
        try{
            let id = 0;
            let ret = rpc.IPCSkeleton.setCallingIdentity(id);
            console.info("SUB_Softbus_IPC_IPCSkeleton_01000： setCallingIdentity is: " + ret);
            expect(ret).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_01000:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_01000---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_01100
     * @tc.name    SetCallingIdentity Interface flags input parameter boundary value verification
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IPCSkeleton_01100", 0,async function(){
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_01100---------------------------");
        try{
            let id = "";
            for (let i = 0; i < (40*K - 1); i++){
                id += "a";
            }
            console.info("SUB_Softbus_IPC_IPCSkeleton_01100： id length is: " + id.length);

            let ret = rpc.IPCSkeleton.setCallingIdentity(id);
            console.info("SUB_Softbus_IPC_IPCSkeleton_01100： setCallingIdentity is: " + ret);
            expect(ret).assertTrue();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_01100:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_01100---------------------------");
    });

    /*
     * @tc.number  SUB_Softbus_IPC_IPCSkeleton_01200
     * @tc.name    Basic method of testing ipcskeleton
     * @tc.desc    Function test
     * @tc.level   0
     */
    it("SUB_Softbus_IPC_IPCSkeleton_01200", 0,async function(done){
        console.info("---------------------start SUB_Softbus_IPC_IPCSkeleton_01200---------------------------");
        try{
            let object = rpc.IPCSkeleton.getContextObject();
            let callingPid = rpc.IPCSkeleton.getCallingPid();
            let callingUid = rpc.IPCSkeleton.getCallingUid();
            let callingDeviceID = rpc.IPCSkeleton.getCallingDeviceID();
            let localDeviceID = rpc.IPCSkeleton.getLocalDeviceID();
            let isLocalCalling = rpc.IPCSkeleton.isLocalCalling();
            let id = rpc.IPCSkeleton.resetCallingIdentity();
            let ret = rpc.IPCSkeleton.setCallingIdentity(id);
            expect(object.getInterfaceDescriptor()).assertEqual("");
            expect(callingDeviceID).assertEqual("");
            expect(localDeviceID).assertEqual("");
            expect(isLocalCalling).assertTrue();
            expect(id).assertEqual("");
            expect(ret).assertTrue();
            expect(rpc.IPCSkeleton.flushCommands(gIRemoteObject)).assertEqual(0);
            console.info("SUB_Softbus_IPC_IPCSkeleton_01200： callingPid: " + callingPid
                + ", callingUid: " + callingUid
                         + ", callingDeviceID: " + callingDeviceID + ", localDeviceID: " + localDeviceID
                         + ", isLocalCalling: " + isLocalCalling);
            let option = new rpc.MessageOption();
            let data = rpc.MessageParcel.create();
            let reply = rpc.MessageParcel.create();
            expect(data.writeInterfaceToken("rpcTestAbility")).assertTrue();
            console.info("SUB_Softbus_IPC_IPCSkeleton_01200： start send request");
            await gIRemoteObject.sendRequest(CODE_IPCSKELETON, data, reply, option).then(function(result) {
                console.info("SUB_Softbus_IPC_IPCSkeleton_01200： sendRequest done, error code: " + result.errCode)
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
                })
            data.reclaim();
            reply.reclaim();
            done();
        } catch (error) {
            console.info("SUB_Softbus_IPC_IPCSkeleton_01200:error = " + error);
        }
        console.info("---------------------end SUB_Softbus_IPC_IPCSkeleton_01200---------------------------");
    });

    console.info("-----------------------SUB_Softbus_IPC_MessageParce_Test is end-----------------------");
});
}
