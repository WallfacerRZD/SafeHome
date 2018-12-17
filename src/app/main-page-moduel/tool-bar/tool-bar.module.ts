import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolBarComponent} from "./tool-bar/tool-bar.component";
import {MatCardModule, MatInputModule, MatToolbarModule} from "@angular/material";
import {TipsIconComponent} from "./tips-icon/tips-icon.component";
import {UserIconComponent} from './user-icon/user-icon.component';
import {TipsMessageComponent} from './tips-message/tips-message.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
      MatInputModule,
      FormsModule
  ],
  declarations: [
    ToolBarComponent,
    TipsIconComponent,
    UserIconComponent,
    TipsMessageComponent
  ],
  exports: [
    ToolBarComponent
  ]
})
export class ToolBarModule {
}
