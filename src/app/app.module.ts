import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginpage/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Mail, Github, Lock } from 'angular-feather/icons';
import * as Feather from 'feather-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as $ from "jquery";


const icons = {
  Camera,
  Heart,
  Github,Mail,Lock
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
