import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTreeModule
} from '@angular/material';
import {MessageModule} from "./message/message.module";
import {SideNavModule} from "./side-nav/side-nav.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {ContactModule} from "./contact/contact.module";
import {ToolBarModule} from "./tool-bar/tool-bar.module";
import {NewsModule} from "./news/news.module";
import {CircleModule} from "./circle/circle.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    SideNavModule,
    ToolBarModule,
    AppRoutingModule,
    MessageModule,
    ContactModule,
    NewsModule,
    CircleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
