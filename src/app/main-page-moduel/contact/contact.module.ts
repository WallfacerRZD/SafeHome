import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {MatButtonModule, MatCheckboxModule, MatCardModule} from '@angular/material';
import {MatListModule} from "@angular/material";
import {ContactListComponent } from './contact-list/contact-list.component';
import { ContactItemComponent } from './contact-item/contact-item.component';
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
      RouterModule,
  ],
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactItemComponent,
  ],
  exports:[
    ContactComponent
  ]
})

export class ContactModule {
}
export class PizzaPartyAppModule { }
