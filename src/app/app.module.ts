import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainPageModule} from "./main-page-moduel/main-page.module";
import {MessageContentModule} from "./message-content-module/message-content.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InfoComponent} from './info/info.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        InfoComponent,
    ],
    imports: [
        MainPageModule,
        MessageContentModule,
        BrowserAnimationsModule,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
