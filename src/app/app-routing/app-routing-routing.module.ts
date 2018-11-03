import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessageComponent} from "../message/message/message.component";

const routes: Routes = [
  {path: 'message', component: MessageComponent},
  {path: '', redirectTo: '/message', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule {
}
