import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageContent} from "./message-content/message-content.component";
import {MessageContentBarComponent} from './message-content-bar/message-content-bar.component';
import {MatToolbarModule} from "@angular/material";
import { MessageContentListComponent } from './message-content-list/message-content-list.component';
import { MessageListItemComponent } from './message-content-list/message-list-item/message-list-item.component';
import {MessageListComponent} from "../main-page-moduel/message/message-list/message-list.component";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [
    MessageContent,
    MessageContentBarComponent,
    MessageContentListComponent,
    MessageListItemComponent,
  ],
  exports: [MessageContent]
})
export class MessageContentModule {
}
