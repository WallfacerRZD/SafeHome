import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {ToolBarModule} from "../tool-bar/tool-bar.module";

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ContactComponent]
})
export class ContactModule {
}
