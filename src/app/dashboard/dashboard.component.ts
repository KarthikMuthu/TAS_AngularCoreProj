import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { formatDate } from '@angular/common';
import { NgForm } from '@angular/forms';

declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  userparamvalue : any;
  user_rolevalue : any;
  duedate : any;
  preduedate : any;
  commondate: any;
  isactive : any;
  notifydesc : any;
  notificationcount : any;
  
  constructor(private dashrouter : Router, private dashrouted : ActivatedRoute,
              private dashservice : RecruitprocessService) { 
    this.dashrouted.params.subscribe(userparam =>{
        this.userparamvalue = userparam['uname'];
        this.user_rolevalue = userparam['roletitle'];
       // userparam['uname'] = null;
    });

    this.GetDateCount();
    this.checkNotifications();
    this.getNotificationCount();

    $(document).ready(function(){
      $(".list-group-item").click(function() { 
                  
        // Select all list items 
        var listItems = $(".list-group-item"); 
        
        // Remove 'active' tag for all list items 
        for (let i = 0; i < listItems.length; i++) { 
            listItems[i].classList.remove("active"); 
        } 
          
        // Add 'active' tag for currently selected item 
        this.classList.add("active"); 
    }); 
       
    });
  }

  ngOnInit() {
    if(this.user_rolevalue == "HR Manager" || this.user_rolevalue == "Project Owner")
    {
        $('#createnewreq').hide();
        $('#draftedrequisitions').hide();
    }
    else
    {
      $('#createnewreq').show();
      $('#draftedrequisitions').show();
      this.dashservice.bind_DraftSavedinDash(this.userparamvalue);
    }
  }

  checkNotifications()
  {
    this.dashservice.bindNotificationPopup(this.userparamvalue);
  }

  getNotificationCount()
  {
    this.dashservice.getNotificationCount(this.userparamvalue).subscribe(
      data =>
      {
        this.notificationcount = data;
       // this.notificationcount = 0;      
      }
    );
  }

  clearCount()
  {
    this.notificationcount = 0;
  }

  clickDraftedReq(requistionid : any)
  {
    //this.dashrouter.navigate(['newreq/', this.userparamvalue, this.user_rolevalue, requistionid])  
  }

  CreateNewReq(){
    this.dashrouter.navigate(['newreq/', this.userparamvalue, this.user_rolevalue])
  }

  NavigateTasks()
  {
    this.dashrouter.navigate(['tasks/', this.userparamvalue, this.user_rolevalue])
  }

  goNotifications()
  {
    this.dashrouter.navigate(['notification/', this.userparamvalue, this.user_rolevalue])
  }

  clicktoViewRequisitionList()
  {
    this.dashrouter.navigate(['requisitionlisting/',this.userparamvalue, this.user_rolevalue])
  }

  NavigateCandidates()
  {
    this.dashrouter.navigate(['candidates/', this.userparamvalue, this.user_rolevalue])

  }

  Logout()
  {
   this.dashrouter.navigate(['login']);
  }

  GetDateCount()
  {
    
    this.commondate = new Date();
    const datevalue = formatDate(this.commondate,'yyyy-MM-dd','en-US');

      this.dashservice.getDueDateCount(datevalue).subscribe(
        res => {
          this.duedate = res;
          this.dashservice.getPreDueDateCount(datevalue).subscribe(
            res1 => {
              this.preduedate = res1;
            }
          )
        }
      )
  }

}
