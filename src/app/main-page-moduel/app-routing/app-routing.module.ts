import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoutingBarComponent} from "./routing-bar/routing-bar.component";
import {MatGridListModule} from "@angular/material";
import {RouterModule, Routes} from "@angular/router";
import {MessageComponent} from "../message/message/message.component";
import {ContactComponent} from "../contact/contact/contact.component";
import {NewsComponent} from "../news/news/news.component";
import {CircleComponent} from "../circle/circle/circle.component";
import {RoutingItemComponent} from "./routing-item/routing-item.component";
import {MainPageComponent} from "../main-page/main-page.component";
import {MessageContent} from "../../message-content-module/message-content/message-content.component";
import {InfoComponent} from "../../info/info.component";

const ROUTES: Routes = [
    {
        path: 'main',
        component: MainPageComponent,
        children: [
            {path: 'message', component: MessageComponent},
            {path: 'contact', component: ContactComponent},
            {path: 'news', component: NewsComponent},
            {path: 'circle', component: CircleComponent},
            {path: '', redirectTo: 'message', pathMatch: 'full'}
        ],
        data: {animation: 'mainPage'}
    },
    {
        path: 'message/content/:id',
        component: MessageContent,
        data: {animation: 'contentPage'}
    },
    {
        path: 'info/:id',
        component: InfoComponent
    },
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'main'
    }
];

@NgModule({
    imports: [
        CommonModule,
        MatGridListModule,
        RouterModule.forRoot(ROUTES)
    ],
    declarations: [
        RoutingBarComponent,
        RoutingItemComponent
    ],
    exports: [
        RoutingBarComponent,
        RouterModule
    ]
})
export class AppRoutingModule {
}
