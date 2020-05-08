import { Component, OnInit} from '@angular/core';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styles: []
})
export class NotificationComponent implements OnInit {
  userparamvalue: any;
  user_rolevalue: any;

  constructor(private notifyservice : RecruitprocessService,private notifyrouter : Router, 
    private notifyrouted : ActivatedRoute) {  this.notifyrouted.params.subscribe(userparam =>{      
      this.userparamvalue = userparam['uname'];
      this.user_rolevalue = userparam['roletitle'];
      
    });
    this.BindNotifications();
    }

    NavigateTasks()
    {
      this.notifyrouter.navigate(['tasks', this.userparamvalue, this.user_rolevalue]); 
    }
    NavigateDash()
    {
      this.notifyrouter.navigate(['dashboard', this.userparamvalue, this.user_rolevalue]); 
    }

    NavigateCandidates()
    {
      this.notifyrouter.navigate(['candidates', this.userparamvalue, this.user_rolevalue]); 
    }

    BindNotifications()
    {
      this.notifyservice.bindNotificationPopup(this.userparamvalue);
    }
    Logout()
    {
      this.notifyrouter.navigate(['']); 
    }

  ngOnInit() {
  }

}
