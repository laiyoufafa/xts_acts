/**
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

import events_emitter from '@ohos.emitter'

@Entry
@Component
struct OverlayExample {
  @State title: string = 'old title'
  @State x: number = 0
  @State y: number = -15
  @State Alignment: Alignment = Alignment.Bottom

  onPageShow() {
    console.info('[overlay] page show called ');
    var stateChangeEvent = {
      eventId: 83,
      priority: events_emitter.EventPriority.LOW
    }
    events_emitter.on(stateChangeEvent, this.stateChangCallBack);
  }

  private stateChangCallBack = (eventData) => {
    console.info("[stateChangCallBack] stateChangCallBack ");
    if (eventData != null) {
      console.info("[stateChangCallBack] state change called: " + JSON.stringify(eventData));
      if (eventData.data.title != null) {
        this.title = eventData.data.title
      }
      if (eventData.data.x != null) {
        this.x = eventData.data.x
      }
      if (eventData.data.y != null) {
        this.y = eventData.data.y
      }
      if (eventData.data.align != null) {
        this.Alignment = eventData.data.align
      }
    }
  }

  build() {
    Column() {
      Column() {
        Text('floating layer')
          .fontSize(12).fontColor(0xCCCCCC).maxLines(1)
        Column() {
          Image('/images/img.jpeg')
            .width(340).height(240)
            .key('overlay')
            .overlay(this.title,
              { align: this.Alignment, offset: { x: this.x, y: this.y } })
        }.border({ color: Color.Black, width: 2 })
      }.width('100%')
    }.padding({ top: 20 })
  }
}