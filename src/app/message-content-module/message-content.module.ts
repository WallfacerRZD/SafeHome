import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageContent} from "./message-content/message-content.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MessageContent],
  exports: [MessageContent]
})
export class MessageContentModule {
}
