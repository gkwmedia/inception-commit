import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommitListComponent } from './commit-list/commit-list.component';
import { AvatarImgComponent } from './components/avatar-img/avatar-img.component';
import { CodeBtnComponent } from './components/code-btn/code-btn.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CommitListComponent, AvatarImgComponent, CodeBtnComponent],
  imports: [BrowserModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
