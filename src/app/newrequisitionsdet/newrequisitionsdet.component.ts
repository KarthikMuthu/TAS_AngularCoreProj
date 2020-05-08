import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
declare var $: any;


@Component({
  selector: 'app-newrequisitionsdet',
  templateUrl: './newrequisitionsdet.component.html',
  styles: []
})
export class NewRequisitionsdetComponent implements OnInit {

  reqjobposterid : any;
  jobtitle : any;
  jobopeningcount : any;
  startdate : any;
  enddate : any;
  department : any;
  overallexp : any;
  location : any;
  salary : any;
  joblevel : any;
  additionalnotes : any;
  travel : any;
  shift : any;
  employeetype : any;
  status : any;
  interviewrounds : any;
  description : any;
  recruitreason : any;
  remarks : any;
  userparamvalue : any;
  user_rolevalue : any;
  isapproved : any;
  isrejected : any;
  chkapprovedrejected : any;
  isonhold : any;
  istext : any;
  duration : any;
  
  

  constructor(@Inject(LOCALE_ID) private locale: string,private reqdetservice : RecruitprocessService,private reqdetrouter : Router, 
    private reqdetrouted : ActivatedRoute) { 
      this.reqdetrouted.params.subscribe(userparam =>{
        this.reqjobposterid = userparam['jobposterid'];
        this.userparamvalue = userparam['uname'];
        this.user_rolevalue = userparam['roletitle'];
        // console.log(this.reqjobposterid);
      });
    }

  ngOnInit() {    
    
    this.reqdetservice.view_RequistionDetails(this.reqjobposterid,this.user_rolevalue).subscribe(
      response => {       
        console.log(response);
        if(response["roletitle"] == "Project Owner")
        {          
          $('#approvebyprojowner').show();
          $('#rejectbyprojowner').show();
          $('#leftbuttonsfor_po').show();
          this.jobtitle = response["jobtitle"];
          this.jobopeningcount = response["jobopeningcount"];
          this.startdate = formatDate(response["startdate"], "dd-MM-yyyy", this.locale);
          this.enddate = formatDate(response["enddate"], "dd-MM-yyyy", this.locale);
          this.department = response["department"];
          this.overallexp = response["overallexp"];
          this.location = response["location"];
          this.salary = response["salary"];
          this.shift = response["shift"];
          this.travel = response["travel"];
          this.additionalnotes = response["additionalnotes"];
          this.description = response["description"];
          this.employeetype = response["employeetype"];
          this.status = response["status"];
          this.interviewrounds = response["interviewrounds"];
          this.recruitreason = response["recruitreason"];         
          this.joblevel = response["joblevel"];
          this.duration = response["duration"];
          if(response["duration"] == "Not Specified")
          {
            // alert(0);
            $('#durationshowhide').hide();
          }
          else
          {
           // alert(1);
            $('#durationshowhide').show();
          }

          // get the approvers list

          var splitappover = response["approver"].split(',');
          $.each(splitappover, function(index, value) {
            $("#approverul").append("<li class='list-inline'><i class='fa fa-user' aria-hidden='true'></i>" + '  -  ' + value + "</li>");
          });

          // get the collaborators list

          var splitcollaborator = response["collaborator"].split(',');
          $.each(splitcollaborator, function(index, value) {
            $("#collaboratorul").append("<li class='list-inline'><i class='fa fa-user' aria-hidden='true'></i>" + '  -  ' + value + "</li>");
          });

          // get the mandatory skills list

          var splitmandskills = response["mandskills"].split(',');
          $.each(splitmandskills, function(index, value) {
            $("#mandskillsul").append("<li class='list-inline'><i class='fa fa-language' aria-hidden='true'></i>" + '  -  ' + value + "</li>");
          });

          // get the good skills list

          var splitgoodskills = response["goodskills"].split(',');
          $.each(splitmandskills, function(index, value) {
            $("#goodskillsul").append("<li class='list-inline'><i class='fa fa-language' aria-hidden='true'></i>" + '  -  ' + value + "</li>");
          });


          
         
        }
        else
        {
          $('#approvepublish').show();
          $('#onhold').show();
          $('#rejectbyhr').show();
          $('#leftbuttonsfor_hr').show();
        this.jobtitle = response["jobtitle"];
        this.jobopeningcount = response["jobopeningcount"];
        this.startdate = formatDate(response["startdate"], "dd-MM-yyyy", this.locale);
        this.enddate = formatDate(response["enddate"], "dd-MM-yyyy", this.locale);
        this.department = response["department"];
        this.overallexp = response["overallexp"];
        this.location = response["location"];
        this.salary = response["salary"];
        this.shift = response["shift"];
        this.travel = response["travel"];
        this.additionalnotes = response["additionalnotes"];
        this.description = response["description"];
        this.employeetype = response["employeetype"];
        this.status = response["status"];
        this.interviewrounds = response["interviewrounds"];
        this.recruitreason = response["recruitreason"];
        this.joblevel = response["joblevel"];
        this.duration = response["duration"];
        }
        // this.jobtitle = response["jobtitle"];
        // this.jobopeningcount = response["jobopeningcount"];
        // this.startdate = formatDate(response["startdate"], "dd-MM-yyyy", this.locale);
        // this.enddate = formatDate(response["enddate"], "dd-MM-yyyy", this.locale);
        // this.department = response["department"];
        // this.overallexp = response["overallexp"];
        // this.location = response["location"];
        // this.salary = response["salary"];
        // this.shift = response["shift"];
        // this.travel = response["travel"];
        // this.additionalnotes = response["additionalnotes"];
        // this.description = response["description"];
        // this.employeetype = response["employeetype"];
        // this.status = response["status"];
        // this.interviewrounds = response["interviewrounds"];
        // this.recruitreason = response["recruitreason"];
       
      }
    )
  }

  clickApprove()
  {
    this.isapproved = true;
    this.chkapprovedrejected = "Approved";
    this.reqdetservice.approve_RequistionDetails(this.remarks,this.userparamvalue,this.user_rolevalue,
      this.reqjobposterid, this.isapproved,this.chkapprovedrejected).subscribe(
      res =>{
        this.reqdetrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
      }
    )
  }

  Logout()
  {
    this.reqdetrouter.navigate(['']);
  }

  NavigateTasks()
  {
    this.reqdetrouter.navigate(['tasks', this.userparamvalue, this.user_rolevalue]); 
  }

  NavigateDash()
  {
    this.reqdetrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]); 
  }

  NavigateCandidates()
  {
      this.reqdetrouter.navigate(['candidates', this.userparamvalue, this.user_rolevalue]); 
  }

  clickApprovePublish()
  {
    this.chkapprovedrejected = "ApprovePublish";
    this.isapproved = true;
    this.reqdetservice.approve_RequistionDetails(this.remarks,this.userparamvalue,this.user_rolevalue,
      this.reqjobposterid, this.isapproved,this.chkapprovedrejected).subscribe(
      res =>{
        this.reqdetrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
      }
    )
  }
  clickOnhold()
  {
    this.chkapprovedrejected = "OnHold";
    this.isonhold = true;
    this.reqdetservice.approve_RequistionDetails(this.remarks,this.userparamvalue,
      this.user_rolevalue,this.reqjobposterid,
      this.isonhold,this.chkapprovedrejected).subscribe(
      res =>{
        this.reqdetrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
      }
    )
  }

  clickHrReject()
  {
    this.chkapprovedrejected = "HrReject";
    this.isrejected = true;
    this.reqdetservice.approve_RequistionDetails(this.remarks,this.userparamvalue,
      this.user_rolevalue,this.reqjobposterid,
      this.isrejected,this.chkapprovedrejected).subscribe(
      res =>{
        this.reqdetrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
      }
    )
  }

  clickReject()
  {
    this.chkapprovedrejected = "Rejected";
    this.isrejected = true;
    this.reqdetservice.approve_RequistionDetails(this.remarks,this.userparamvalue,
      this.user_rolevalue,this.reqjobposterid,
      this.isrejected,this.chkapprovedrejected).subscribe(
      res =>{
        this.reqdetrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]);
      }
    )
  }


}
