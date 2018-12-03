import { Service } from './../services/Service';
import { app_routing } from './app.routes';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FilterComponent } from './filter/filter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MemberListComponent } from './members-list/members-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegisterComponent,
    UsersListComponent,
    FilterComponent,
    NavbarComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
