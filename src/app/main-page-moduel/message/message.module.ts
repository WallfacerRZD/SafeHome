import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageComponent} from './message/message.component';
import {MessageListComponent} from "./message-list/message-list.component";
import {MessageItemComponent} from "./message-item/message-item.component";
import {MatCardModule, MatListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
  ],
  declarations: [
    MessageComponent,
    MessageListComponent,
    MessageItemComponent,
  ],
  exports: [
    MessageComponent
  ]
})
export class MessageModule {
}
