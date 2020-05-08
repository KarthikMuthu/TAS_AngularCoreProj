import { Component, OnInit} from '@angular/core';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-requisitionlistdetails',
  templateUrl: './requisitionlistdetails.component.html',
  styles: []
})
export class RequisitionlistdetailsComponent implements OnInit {

  userparamvalue : any;
  user_rolevalue : any;
  requisitionpkid: any;
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
  description: any;
  status: any;
  interviewrounds: any;
  recruitreason: any;
  duration: any;
  roletitle : any;
  approver : any;

  constructor(private reqlistdetser : RecruitprocessService,private reqlistdetrouter : Router, 
    private reqlistdetrouted : ActivatedRoute) {
      this.reqlistdetrouted.params.subscribe(userparam =>{
          this.requisitionpkid = userparam['requisitionpkid'];
          this.userparamvalue = userparam['uname'];
          this.user_rolevalue = userparam['roletitle'];
          
        });
        
     }

    BindApprover_ReqListDet()
    {
      this.reqlistdetser.BindApprover();
    }
    NavigateTasks()
    {
      this.reqlistdetrouter.navigate(['tasks', this.userparamvalue, this.user_rolevalue]); 
    }
    NavigateDash()
    {
      this.reqlistdetrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]); 
    }

    NavigateCandidates()
    {
      this.reqlistdetrouter.navigate(['candidates', this.userparamvalue, this.user_rolevalue]); 

    }

  ngOnInit() {

    
    
    this.reqlistdetser.view_RequistionListDetails(this.requisitionpkid, this.user_rolevalue).subscribe(
      response =>{
        console.log(response);
        this.jobtitle = response["jobtitle"];
        this.jobopeningcount = response["jobopeningcount"];
        this.startdate = response["startdate"];
        this.enddate = response["enddate"];
        this.department = response["department"];
        this.overallexp = response["overallexp"];
        this.location = response["location"];
        this.salary = response["salary"];
        this.shift = response["shift"];
        this.travel = response["travel"];
        this.additionalnotes = response["additionalnotes"];
      //  this.description = response["description"];
        this.employeetype = response["employeetype"];
      //  this.status = response["status"];
      //  this.interviewrounds = response["interviewrounds"];
        this.recruitreason = response["recruitreason"];         
        this.joblevel = response["joblevel"];
        this.duration = response["duration"];
        this.roletitle = response["roletitle"];
        this.approver = response["approver"];
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

        
        this.reqlistdetser.BindApprover();
      
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

        // get the interivew levels or rounds list

        var splitinterviewlevels = response["interviewlevel"].split(',');
        $.each(splitinterviewlevels, function(index, value) {
         // var count = 0;
          $("#interviewroundsul").append("<p class='card-text mb-0'>" + 'Round ' + ((index++)+1) + " - " + value + "</p><hr>")
        });

        // get the approvers list

        var splitapprover_role = response["roletitle"].split(',');
        $.each(splitapprover_role, function(index, value1 ) {
          $("#appendapprover")
          .append("<i class='fa fa-user' aria-hidden='true'></i><a class='card-text mb-0'>" + ' ' + value1 + "</a><hr>");
        });

        // get the collaborator list

        var splitcollab_role = response["collaborator"].split(',');
        $.each(splitcollab_role, function(index, value1 ) {
          $("#appendcollaborator")
          .append("<i class='fa fa-user' aria-hidden='true'></i><a class='card-text mb-0'>" + ' ' + value1 + "</a><hr>");
        });
        

        

      }
    )
  }

}
