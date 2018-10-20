import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestNavComponent} from './test-nav/test-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule} from '@angular/material';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';
import { TestTableComponent } from './test-table/test-table.component';
import { TestTreeComponent } from './test-tree/test-tree.component';
import { SidenavComponentComponent } from './sidenav-component/sidenav-component.component';
import { DialogCardComponent } from './dialog-card/dialog-card.component';
import { DialogListComponent } from './dialog-list/dialog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestNavComponent,
    TestDashboardComponent,
    TestTableComponent,
    TestTreeComponent,
    SidenavComponentComponent,
    DialogCardComponent,
    DialogListComponent
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
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
