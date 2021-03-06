import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessageContent} from "./message-content/message-content.component";
import {MessageContentBarComponent} from './message-content-bar/message-content-bar.component';
import {MatToolbarModule} from "@angular/material";
import {MessageContentListComponent} from './message-content-list/message-content-list.component';
import {MessageListItemComponent} from './message-content-list/message-list-item/message-list-item.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        RouterModule
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
