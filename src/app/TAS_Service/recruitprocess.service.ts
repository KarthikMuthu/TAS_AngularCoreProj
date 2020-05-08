import { Injectable } from '@angular/core';
import { EmailNotification, User,City, JobTitle, Department, Task, TalentRequest, Notification, Log,
RecruitmentReason, EmploymentType, JobLevel, Shift, Travel, InterviewLevel, Status, State, Skill, TalentRequest_SaveDraft } from './recruitprocess-model.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from 'rxjs/operators';
declare var $: any;
//import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecruitprocessService {
  bind_draftsaved : TalentRequest_SaveDraft[];
  bindtasks : Task[];
  bindstatus : Status[];
  bindduration : Status[];
  bindreqlisting : TalentRequest[];
  bindcurrentopenings : TalentRequest[];
  bindnotification : Notification[];
  bindapprover : User[];
  bindcollaborator : User[];
  bindinterlevel : InterviewLevel[];
  bindtravel : Travel[];
  bindshift : Shift[];
  bindjoblevel : JobLevel[];
  bindemploytype : EmploymentType[];
  bindrecreason : RecruitmentReason[];
  bindcity : City[];
  bindcountry : State[];
  bindregion : Location[];
  bindjobtitle : JobTitle[];
  bindDept : Department[];
  bindMandSkills : Skill[];
  isactive: any;
  //readonly rooturl = 'https://localhost:5001/api';
 // readonly rooturl = 'https://localhost:44327/api';
  readonly rooturl = 'https://tascorewebapp.azurewebsites.net/api';
  checkarrayvalues : Array<any>;
  duedate : any;
  preduedate :any;
  
  constructor(private servicehttp : HttpClient) { }
  SendEmailNotifications(formData)  
  { 
    return this.servicehttp.post<EmailNotification>(this.rooturl+'/EmailNotifications/', formData);
  }

  RecruitmentLogin(recruituser : User)
  {
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };  
    return this.servicehttp.get(this.rooturl+'/callusers/' + recruituser.UserEmail + '/' 
     + recruituser.OldPassword, httpOptions);
  }

  BindRegions()
  {
    return this.servicehttp.get(this.rooturl+'/Call_regions',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindregion = res as Location[]);
  }

  BindCountries()
  {
    return this.servicehttp.get(this.rooturl+'/Call_countries',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindcountry = res as State[]);
  }

  BindCities_States()
  {
    return this.servicehttp.get(this.rooturl+'/Call_states',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindcity = res as City[]);
  }

  BindJobTitles()
  {
    return this.servicehttp.get(this.rooturl+'/Call_jobtitles',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindjobtitle = res as JobTitle[]);
  }

  BindDepartments()
  {
    return this.servicehttp.get(this.rooturl+'/Call_depts',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindDept = res as Department[]);
  }

  BindMandSkills()
  {
    return this.servicehttp.get(this.rooturl+'/Call_mandskills',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindMandSkills = res as Skill[]);
  }


  BindRecruitReasons()
  {
    return this.servicehttp.get(this.rooturl+'/Call_recreasons',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindrecreason = res as RecruitmentReason[]);
  }

  BindEmployType()
  {
    return this.servicehttp.get(this.rooturl+'/Call_employtypes',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindemploytype = res as EmploymentType[]);
  }

  BindJobLevel()
  {
    return this.servicehttp.get(this.rooturl+'/Call_joblevels',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindjoblevel = res as JobLevel[]);
  }

  BindShift()
  {
    return this.servicehttp.get(this.rooturl+'/Call_shifts',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindshift = res as Shift[]);
  }

  BindTravel()
  {
    return this.servicehttp.get(this.rooturl+'/Call_travels',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindtravel = res as Travel[]);
  }

  BindInterviewLevel()
  {
    return this.servicehttp.get(this.rooturl+'/Call_interlevels',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindinterlevel = res as InterviewLevel[]);
  }

  BindApprover()
  {
    return this.servicehttp.get(this.rooturl+'/Call_approver',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindapprover = res as User[]);
  }

  BindCollaborators()
  {
    return this.servicehttp.get(this.rooturl+'/Call_collaborators',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindcollaborator = res as User[]);
  }

  BindStatus()
  {
     return this.servicehttp.get(this.rooturl+'/Call_status',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindstatus = res as Status[]);
  }

  BindGetEmpFromStatusTab()
  {
     return this.servicehttp.get(this.rooturl+'/Call_GetEmploymentType_FromStatus',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindduration = res as Status[]);
  }

  bind_viewRequisitionListing()
  {
     return this.servicehttp.get(this.rooturl+'/Call_viewRequisitionListing',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  bindNotificationPopup(loginuser : any)
  {
    return this.servicehttp.get(this.rooturl+'/Call_viewnotification/' + loginuser,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bindnotification = res as Notification[]);
  }

  getNotificationCount(loginuser : any)
  {
    return this.servicehttp.get(this.rooturl+'/Call_getnotificationcount/' + loginuser,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  postNewRequisition(talentreq : TalentRequest)
  {
    return this.servicehttp.post(this.rooturl+'/call_inserttalentreq/',talentreq,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
  }

  postNewRequisition_SaveasDraft(saveasdraft : TalentRequest_SaveDraft)
  {
    return this.servicehttp.post(this.rooturl+'/call_inserttalentreq_saveasdraft/',saveasdraft,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
  }

  GetUserRoles(rolefkid:any)
  {
    
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };  

    return this.servicehttp.get(this.rooturl+'/calluseroles/' + rolefkid + '/' + true, httpOptions);
  }

  getDueDateCount(currentdate)
  {
    this.duedate = 'duedate';
    return this.servicehttp.get(this.rooturl+'/callduedate/' + currentdate + '/' + true,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  getPreDueDateCount(currentdate)
  {
    this.preduedate = 'preduedate';
    return this.servicehttp.get(this.rooturl+'/callpreduedate/' + currentdate + '/' + true + '/' + this.preduedate,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  getJobTitleCount()
  {
    return this.servicehttp.get(this.rooturl+'/get_jobtitlerecount/',{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  // get_Tasks(userparamvalue : any)
  // {
  //   return this.servicehttp.get(this.rooturl+'/Call_tasks/' + userparamvalue,{ headers: 
  //     {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  // }

  get_Tasks(userparamvalue : any, roleparamvalue : any)
  {
    return this.servicehttp.get(this.rooturl+'/Call_bindgrid/' + userparamvalue + '/' + roleparamvalue,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  view_RequistionDetails(rowid : any, roletitle : any)
  {
    console.log(rowid);
    return this.servicehttp.get(this.rooturl+'/Call_viewrequisitiondet/' + rowid + '/' + roletitle,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  view_RequistionListDetails(requisitionpkid : any, roletitle : any)
  {
   // console.log(rowid);
    return this.servicehttp.get(this.rooturl+'/Call_viewrequisitionlistdetails/' + requisitionpkid + '/' + roletitle,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  // from dashboard to new requisition - edit option

  edit_PopulateRequisition(editreqid : any, roletitle : any)
  {
    console.log(editreqid);
    return this.servicehttp.get(this.rooturl+'/edit_PopulateRequisition/' + editreqid + '/' + roletitle,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  get_TaskPKID(taskpkid : any)
  {
    return this.servicehttp.get(this.rooturl+'/Call_selectrowpkid/' + taskpkid,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  bind_DraftSavedinDash(createdby : any)
  {
    return this.servicehttp.get(this.rooturl+'/Call_binddraftsaved/' + createdby,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
      .toPromise().then(res => this.bind_draftsaved = res as TalentRequest_SaveDraft[]);
  }

  populate_NewRequisition(requistionid : any, user_roletitle : any)
  {
    return this.servicehttp.get(this.rooturl+'/Call_viewrequisitiondet/' + requistionid + '/' + user_roletitle,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }


  approve_RequistionDetails(remarks: any,loginuser: any,roletitle: any,jobposterid : any,isappreject : any,chkapprovereject : any)
  {
   // console.log(remarks + "/" + loginuser + "/" + roletitle + "/" + jobposterid);
    return this.servicehttp.get(this.rooturl+'/call_updataskdetails/' + remarks + '/' + loginuser 
    + '/' + roletitle + '/' + jobposterid + '/' + isappreject + '/' + chkapprovereject,{ headers: 
      {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
  }

  AsyncData_CurrentOpenings()
  {
    var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }) };  
    return this.servicehttp.get(this.rooturl+'/Syncdata_CurrentOpenings', httpOptions)
    .toPromise().then(res => this.bindcurrentopenings = res as TalentRequest[]);
  }

}
