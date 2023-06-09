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

import I18n from '@ohos.i18n'
import Intl from '@ohos.intl'
import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect} from 'deccjsunit/index'

describe('PerfTest', function () {
    console.log('*************start PerfTest*************');

    let EXETIME = 1000;

    beforeAll(function(){
        console.log('step before all cases.');
    })

    beforeEach(function(){
        console.log('step before every case.');
    })

    afterEach(function(){
        console.log('step after every case.');
    })

    afterAll(function(){
        console.log('step after all cases.');
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0100
    * @tc.name test the performance of getSystemLanguage
    * @tc.desc check the performance of getSystemLanguage
    */
    it('perf_test_0100', 0, function () {
        console.log('perf_test_0100 ' + 'start');
        let startTime = new Date().getTime();
        let lang = 'test';
        for(let i = 0; i < EXETIME; i++){
            lang = I18n.getSystemLanguage();
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0100--' + 'lang: ' + lang + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0200
    * @tc.name test the performance of getSystemRegion
    * @tc.desc check the performance of getSystemRegion
    */
    it('perf_test_0200', 0, function () {
        console.log('perf_test_0200 ' + 'start');
        let startTime = new Date().getTime();
        let region = 'test';
        for(let i = 0; i < EXETIME; i++){
            region = I18n.getSystemRegion();
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0200--' + 'region: ' + region + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0300
    * @tc.name test the performance of getSystemLocale
    * @tc.desc check the performance of getSystemLocale
    */
    it('perf_test_0300', 0, function () {
        console.log('perf_test_0300 ' + 'start');
        let startTime = new Date().getTime();
        let locale = 'test';
        for(let i = 0; i < EXETIME; i++){
            locale = I18n.getSystemLocale();
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0300--' + 'locale: ' + locale + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0400
    * @tc.name test the performance of setSystemLanguage
    * @tc.desc check the performance of setSystemLanguage
    */
    it('perf_test_0400', 0, function () {
        console.log('perf_test_0400 ' + 'start');
        let startTime = new Date().getTime();
        let value = false;
        for(let i = 0; i < EXETIME; i++){
            value = I18n.setSystemLanguage('en');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0400--' + 'value: ' + value + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0500
    * @tc.name test the performance of setSystemRegion
    * @tc.desc check the performance of setSystemRegion
    */
    it('perf_test_0500', 0, function () {
        console.log('perf_test_0500 ' + 'start');
        let startTime = new Date().getTime();
        let value = false;
        for(let i = 0; i < EXETIME; i++){
            value = I18n.setSystemRegion('US');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0500--' + 'value: ' + value + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0600
    * @tc.name test the performance of setSystemLocale
    * @tc.desc check the performance of setSystemLocale
    */
    it('perf_test_0600', 0, function () {
        console.log('perf_test_0600 ' + 'start');
        let startTime = new Date().getTime();
        let value = false;
        for(let i = 0; i < EXETIME; i++){
            value = I18n.setSystemLocale('en-Latn-US');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0600--' + 'value: ' + value + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0700
    * @tc.name test the performance of getSystemLanguages
    * @tc.desc check the performance of getSystemLanguages
    */
    it('perf_test_0700', 0, function () {
        console.log('perf_test_0700 ' + 'start');
        let startTime = new Date().getTime();
        let value = new Array();
        for(let i = 0; i < EXETIME; i++){
            value = I18n.getSystemLanguages();
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0700--' + 'value: ' + value + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0800
    * @tc.name test the performance of getSystemCountries
    * @tc.desc check the performance of getSystemCountries
    */
    it('perf_test_0800', 0, function () {
        console.log('perf_test_0800 ' + 'start');
        let startTime = new Date().getTime();
        let value = new Array();
        for(let i = 0; i < EXETIME; i++){
            value = I18n.getSystemCountries('en');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0800--' + 'value: ' + value + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_0900
    * @tc.name test the performance of isSuggested
    * @tc.desc check the performance of isSuggested
    */
    it('perf_test_0900', 0, function () {
        console.log('perf_test_0900 ' + 'start');
        let startTime = new Date().getTime();
        let value = false;
        for(let i = 0; i < EXETIME; i++){
            value = I18n.isSuggested('en');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_0900--' + 'value: ' + value + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1000
    * @tc.name test the performance of getDisplayCountry
    * @tc.desc check the performance of getDisplayCountry
    */
    it('perf_test_1000', 0, function () {
        console.log('perf_test_1000 ' + 'start');
        let startTime = new Date().getTime();
        let value = 'test';
        for(let i = 0; i < EXETIME; i++){
            value = I18n.getDisplayCountry('zh-Hans-CN', 'en-US', true);
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1000--' + 'value: ' + value + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1100
    * @tc.name test the performance of getDisplayLanguage
    * @tc.desc check the performance of getDisplayLanguage
    */
    it('perf_test_1100', 0, function () {
        console.log('perf_test_1100 ' + 'start');
        let startTime = new Date().getTime();
        let value = 'test';
        for(let i = 0; i < EXETIME; i++){
            value = I18n.getDisplayLanguage('zh-Hans-CN', 'en-US', true);
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1100--' + 'value: ' + value + ' exeTime: ' + exeTime + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1200
    * @tc.name test the performance of PhoneNumberFormat
    * @tc.desc check the performance of PhoneNumberFormat
    */
    it('perf_test_1200', 0, function () {
        console.log('perf_test_1200 ' + 'start');
        let phonenumber = null;
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            phonenumber = new I18n.PhoneNumberFormat('CN');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1200--'
                    + 'phonenumber: ' + phonenumber
                    + ' exeTime: ' + exeTime
                    + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1300
    * @tc.name test the performance of isValidNumber
    * @tc.desc check the performance of isValidNumber
    */
    it('perf_test_1300', 0, function () {
        console.log('perf_test_1300 ' + 'start');
        let phonenumber = new I18n.PhoneNumberFormat('CN');
        let valid = false;
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            valid = phonenumber.isValidNumber('13510574676');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1300--'
        + 'valid: ' + valid
        + ' exeTime: ' + exeTime
        + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1400
    * @tc.name test the performance of format
    * @tc.desc check the performance of format
    */
    it('perf_test_1400', 0, function () {
        console.log('perf_test_1400 ' + 'start');
        let phonenumber = new I18n.PhoneNumberFormat('CN');
        let value = '1234';
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            value = phonenumber.format('13510574676');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1400--'
        + 'value: ' + value
        + ' exeTime: ' + exeTime
        + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1500
    * @tc.name test the performance of getCalendar
    * @tc.desc check the performance of getCalendar
    */
    it('perf_test_1500', 0, function () {
        console.log('perf_test_1500 ' + 'start');
        let calendar = null;
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            calendar = I18n.getCalendar('zh');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1500--'
        + 'calendar: ' + calendar
        + ' exeTime: ' + exeTime
        + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1600
    * @tc.name test the performance of isWeekend
    * @tc.desc check the performance of isWeekend
    */
    it('perf_test_1600', 0, function () {
        console.log('perf_test_1600 ' + 'start');
        let calendar = I18n.getCalendar('zh');
        let value = false;
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            value = calendar.isWeekend(new Date(2021, 10, 1, 10, 0, 0, 0));
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1600--'
        + 'value: ' + value
        + ' exeTime: ' + exeTime
        + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1700
    * @tc.name test the performance of getDisplayName
    * @tc.desc check the performance of getDisplayName
    */
    it('perf_test_1700', 0, function () {
        console.log('perf_test_1700 ' + 'start');
        let calendar = I18n.getCalendar('zh', 'chinese');
        let name = 'test';
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            name = calendar.getDisplayName('zh');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1700--'
        + 'name: ' + name
        + ' exeTime: ' + exeTime
        + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1800
    * @tc.name test the performance of calendar.get
    * @tc.desc check the performance of calendar.get
    */
    it('perf_test_1800', 0, function () {
        console.log('perf_test_1800 ' + 'start');
        let calendar = I18n.getCalendar('zh');
        let value = 0;
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            value = calendar.get('year');
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1800--'
        + 'value: ' + value
        + ' exeTime: ' + exeTime
        + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_1900
    * @tc.name test the performance of calendar.setTime with date param
    * @tc.desc check the performance of calendar.setTime
    */
    it('perf_test_1900', 0, function () {
        console.log('perf_test_1900 ' + 'start');
        let calendar = I18n.getCalendar('zh');
        let date1 = new Date(2021, 8, 8, 8, 8, 8, 8);
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            calendar.setTime(date1);
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_1900--'
        + ' exeTime: ' + exeTime
        + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    /* *
    * @tc.number SUB_GLOBAL_PERF_JS_2000
    * @tc.name test the performance of calendar.setTime with time param
    * @tc.desc check the performance of calendar.setTime
    */
    it('perf_test_2000', 0, function () {
        console.log('perf_test_2000 ' + 'start');
        let calendar = I18n.getCalendar('zh');
        let startTime = new Date().getTime();
        for(let i = 0; i < EXETIME; i++){
            calendar.setTime(10540800000);
        }
        let exeTime = new Date().getTime() - startTime;
        let avgTime = exeTime/EXETIME;
        console.log('perf_test_2000--'
        + ' exeTime: ' + exeTime
        + ' avgTime: ' + avgTime);
        if(avgTime < 10){
            expect(true).assertTrue();
        }
        else{
            expect(false).assertTrue();
        }
    })

    console.log('*************end PerfTest*************');
})