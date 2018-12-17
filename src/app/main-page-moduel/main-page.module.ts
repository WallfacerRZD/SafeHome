import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPageComponent} from './main-page/main-page.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LayoutModule} from "@angular/cdk/layout";
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
} from "@angular/material";
import {SideNavModule} from "./side-nav/side-nav.module";
import {ToolBarModule} from "./tool-bar/tool-bar.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {MessageModule} from "./message/message.module";
import {ContactModule} from "./contact/contact.module";
import {NewsModule} from "./news/news.module";
import {CircleModule} from "./circle/circle.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule, BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatCardModule,
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
        RouterModule,
        MessageModule,
        ContactModule,
        NewsModule,
        CircleModule,
    ],
    declarations: [MainPageComponent],
    exports: [MainPageComponent, AppRoutingModule]
})
export class MainPageModule {
}
