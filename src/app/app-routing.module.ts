import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './loginpage/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampledemoComponent } from './sampledemo/sampledemo.component';
import { NewrequComponent } from './newrequ/newrequ.component';
import { EmailComponent } from './email/email.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewRequisitionsdetComponent } from './newrequisitionsdet/newrequisitionsdet.component';
import { RequisitionlistingComponent } from './requisitionlisting/requisitionlisting.component';
import { RequisitionlistdetailsComponent } from './requisitionlistdetails/requisitionlistdetails.component';
import { NotificationComponent } from './notification/notification.component';
import { JobopeningsComponent } from './jobopenings/jobopenings.component';

const routes: Routes = [ 
   { path: '', component: LoginComponent},
   { path: 'jobopenings/:uname/:roletitle', component: JobopeningsComponent},
   { path: 'dashboard/:uname/:roletitle', component: DashboardComponent },
  //  { path: 'login', component: LoginComponent },
    //{ path: 'dashboard', component: DashboardComponent },
   { path: 'tasks/:uname/:roletitle', component: TasksComponent },
   { path: 'requisitionlisting/:uname/:roletitle', component: RequisitionlistingComponent },
   { path: 'requisitionlistdetails/:uname/:roletitle/:requisitionpkid', component: RequisitionlistdetailsComponent },
   { path: 'requisitionsdet/:uname/:roletitle/:jobposterid', component: NewRequisitionsdetComponent },
   { path: 'notification/:uname/:roletitle', component: NotificationComponent},
   { path: 'candidates/:uname/:roletitle', component: CandidatesComponent },
   { path: 'newreq/:uname/:roletitle', component: NewrequComponent },
    //{ path: 'newreq/:uname/:roletitle/:requisitionid', component: NewrequComponent },
   { path: '**', redirectTo: ''}
   // { path: 'calendar', component: LoginComponent }
  // { path: 'careerpage', component: CareerpageComponent },
  //  { path: 'careerpage/:uname', component: CareerpageComponent },
  //  { path: 'applicationform', component: ApplicationformComponent},
  //  { path: 'admin-page', component: AdminPageComponent},
  //  { path: 'displaycareerdet', component: DisplaycareerdetComponent},
  //  { path: 'fileupload', component: FileuploadComponent},
  //{ path: 'applicationform/:uname', component: ApplicationformComponent},
  // { path: '', component: LoginpageComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
