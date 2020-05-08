import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { NgModel, NgForm, FormsModule } from '@angular/forms';
//import { HttpClient, HttpRequest, HttpEvent, HttpResponse, HttpEventType, HttpHeaders } from '@angular/common/http';
import { RecruitprocessService } from 'src/app/TAS_Service/recruitprocess.service';
import { formatDate } from '@angular/common';
declare const emailvalid : any;

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styles: []
})
export class EmailComponent implements OnInit {

  //from_email: any;
  to_email:any;
  cc_email : any;
  bcc_email : any;
  attachments : any;
  subject:any;
  body:any;
  maildate:any;

  constructor(private recruitservice : RecruitprocessService) { }

  ngOnInit() {
  }

  Validate_Email(){
    emailvalid();
  }

  SendEmail(){
    emailvalid();
  }

  ResetForm()
  {
   // this.from_email = "";
    this.to_email = "";
    this.cc_email = "";
    this.bcc_email = "";    
    this.subject = "";
    this.attachments = "";
    this.body= "";
  }

  // Submit Email

  SubmitEmail(emailform:NgForm)
  {
    this.maildate = new Date();
    const datevalue = formatDate(this.maildate,'yyyy-MM-dd hh:mm a','en-US');
   // this.ResetForm();
   // alert(datevalue);
    const emailformdata = new FormData();
  //  this.from_email = "connectmuthu28@gmail.com";
   // emailformdata.append('From_mail', this.from_email);
    emailformdata.append('to_Email', this.to_email);
    emailformdata.append('cc_Email', this.cc_email);
    emailformdata.append('bcc_Email', this.bcc_email);
    emailformdata.append('Subject', this.subject);
    emailformdata.append('Body', this.body);
    emailformdata.append('MailingDate', datevalue);

    

        this.recruitservice.SendEmailNotifications(emailformdata).subscribe
        (
          res => {
              console.log("The email sent successfully");
              this.ResetForm();
        });


  }

}
