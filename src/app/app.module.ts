import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Mail, Search, Settings, User, Lock,Eye,Menu, ChevronDown, 
  Bell, Home, Bookmark, Briefcase, Award, Layers, Calendar, ChevronRight,CheckCircle } from 'angular-feather/icons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginpage/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//import { MatDatepickerModule } from '@angular/material/datepicker';
//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule,MatInputModule,MatNativeDateModule,MatFormFieldModule} from '@angular/material';
import { OAuthModule } from 'angular-oauth2-oidc';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampledemoComponent } from './sampledemo/sampledemo.component';
import { NewrequComponent } from './newrequ/newrequ.component';
import { EmailComponent } from './email/email.component';
import { RecruitprocessService } from './TAS_Service/recruitprocess.service';
import { HttpClientModule } from '@angular/common/http';
import { CandidatesComponent } from './candidates/candidates.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
//import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import {MatRippleModule} from '@angular/material/';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from "@angular/material/badge";
import { TasksComponent } from './tasks/tasks.component';
import { NewRequisitionsdetComponent } from './newrequisitionsdet/newrequisitionsdet.component';
import { CandidatesdetComponent } from './candidatesdet/candidatesdet.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationComponent } from './notification/notification.component';
import { JobopeningsComponent } from './jobopenings/jobopenings.component';
import { RequisitiontemplateComponent } from './requisitiontemplate/requisitiontemplate.component';
import { DemoComponent } from './demo/demo.component';    
//import {PasswordModule,InputTextModule,PanelModule } from 'primeng/primeng';  
//import {TableModule} from 'primeng/table';
import { RequisitionlistingComponent } from './requisitionlisting/requisitionlisting.component';
import { RequisitionlistdetailsComponent } from './requisitionlistdetails/requisitionlistdetails.component';
//import { NewRequisitionDetailsComponent } from './requisitionlisting/requisitionlisting.component';

  
//import {NgSelectModule} from '@ng-select/ng-select';


const icons = {
  Camera,
  Heart,Lock,Eye,Menu,ChevronRight,CheckCircle,
  Github, Mail, Search, Settings, User, ChevronDown, Bell, Home, Bookmark, Briefcase, Award, 
  Layers, Calendar
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SampledemoComponent,
    NewrequComponent,
    EmailComponent,
    CandidatesComponent,
    ResetpasswordComponent,
    TasksComponent,
    NewRequisitionsdetComponent,
    CandidatesdetComponent,
    CalendarComponent,
    NotificationComponent,
    JobopeningsComponent,
    RequisitiontemplateComponent,
    DemoComponent,
    RequisitionlistingComponent,
    RequisitionlistdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FeatherModule.pick(icons),
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    OAuthModule.forRoot(),
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
   // MatAutocompleteModule,
  //  MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatBadgeModule
   // NgSelectModule

  //  BrowserAnimationsModule,
    
  ],
  exports: [
    FeatherModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
   // MatAutocompleteModule,
 //   MatRippleModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatBadgeModule
  //  NgSelectModule
  ],
  providers: [RecruitprocessService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
