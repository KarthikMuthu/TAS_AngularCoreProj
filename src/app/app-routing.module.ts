import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './loginpage/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'demo', component: DemoComponent },
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
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
