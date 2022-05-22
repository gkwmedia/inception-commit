import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableBodyComponent } from './table-body/table-body.component';
import { RowComponent } from './table-body/row/row.component';
import { CommitListComponent } from './commit-list/commit-list.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, TableBodyComponent, RowComponent, CommitListComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
