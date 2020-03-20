import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Mail, Search, Settings, User, ChevronDown, Bell, Home, Bookmark, Briefcase, Award, Layers, Calendar } from 'angular-feather/icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginpage/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
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
=======
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> ce7b45e4c369d905086dde6b93f92c74d1b1a836

const icons = {
  Camera,
  Heart,
  Github, Mail, Search, Settings, User, ChevronDown, Bell, Home, Bookmark, Briefcase, Award, Layers, Calendar
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
