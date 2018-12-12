import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainPageModule} from "./main-page-moduel/main-page.module";
import {MessageContentModule} from "./message-content-module/message-content.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MainPageModule,
    MessageContentModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
