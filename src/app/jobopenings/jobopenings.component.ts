import { Component, OnInit} from '@angular/core';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-jobopenings',
  templateUrl: './jobopenings.component.html',
  styles: []
})
export class JobopeningsComponent implements OnInit {
  userparamvalue: any;
  user_rolevalue: any;

  constructor(private jobopeningser : RecruitprocessService,private jobopeningsrouter : Router, 
    private jobopeningsrouted : ActivatedRoute) {  this.jobopeningsrouted.params.subscribe(userparam =>{  
      this.userparamvalue = userparam['uname'];
      this.user_rolevalue = userparam['roletitle'];
    });
    this.BindCurrentOpenings();
  }

  ngOnInit() {
  }

  BindCurrentOpenings()
  {
    this.jobopeningser.AsyncData_CurrentOpenings().then(
      res => {
        console.log(res);
      }
    )
  }

}
