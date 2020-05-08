import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';
import { User } from '../TAS_Service/recruitprocess-model.service';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { ToastrService} from 'ngx-toastr'; 
import { error } from 'util';
declare const loginvalidation,forgotpassword,showforgotpswd,loginback : any;



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  objloginuser : User;
  @Input() objloginform : User = new User();

  ischecked : any;
  username : any;
  roletitle : any;
  concate_text : any;
 // isactive : any;

  constructor(private loginrouter : Router, private loginservice : RecruitprocessService,
              private logintoast : ToastrService) { }

  ngOnInit() {
  }

  forgotpassword_click(){
    showforgotpswd();
  }

  backtologin_click(){
    loginback();
   // this.loginrouter.navigate(['']);
  }

  CheckValidate(){
    loginvalidation();
  }

  CheckValidatepwd(){
    forgotpassword();
  }

  isrememberchange(values:any){
   // console.log(values.currentTarget.checked);
    this.ischecked = values.currentTarget.checked;
    //alert(this.ischecked);
  }

  Submit(loginform: NgForm){

    this.objloginuser = new User();
    this.objloginuser.UserEmail = loginform.value.UserEmail;
    this.objloginuser.OldPassword = loginform.value.OldPassword;

   // this.logintoast.info('Checking User Info');

    // const loginobserver = {
    //   next: res => {
    //     console.log(res);
    //     console.log('User logged in');
    //     this.logintoast.success('Logged In');
    //   },
    //   error: err => {
    //     console.log(err);
    //     console.log(error);
    //     this.logintoast.warning('Unable to Login');
    //   }
    // };

   // this.loginservice.RecruitmentLogin(this.objloginuser).subscribe(loginobserver);
    
   // this.objloginuser.IsRemember = loginform.value.IsRemember
  //  this.isactive = true;

   // alert(this.objloginuser.IsRemember);

   // console.log(this.objloginuser.UserEmail + " " + this.objloginuser.OldPassword);

 //  console.log(this.objloginuser);

    this.loginservice.RecruitmentLogin(this.objloginuser).subscribe(
     data => {    
    //  console.log(JSON.stringify(data));
    // console.log(data);
      this.username = data["UserName"];
      if(data["RoleFKID"]!=null)
      {
        this.loginservice.GetUserRoles(data["RoleFKID"]).subscribe(
          res => {
         //   console.log(res);
            this.roletitle = res["RoleTitle"];
            this.concate_text = this.username + "/" + this.roletitle;
         this.loginrouter.navigate(['dashboard/', this.username, this.roletitle]);
        // this.loginrouter.navigate(['jobopenings/', this.username, this.roletitle]);
          
          //  this.loginrouter.navigate(['dashboard/'], {queryParams : this.concate_text, skipLocationChange : true});
          }
        )
      }
     
     },
     error =>{
      console.log(error);
     console.error();
      this.logintoast.info("Error","Login Page");
     }
    )

    // if(this.email == "admin@gmail.com" && this.password == "admin")
    // {
    // this.logintoast.warning("Please enter the login credentials", "Login")
    // this.loginrouter.navigate(['dashboard']);
    // }
     
     // this.loginrouter.navigate(['dashboard/', this.username]);
     // this.logintoast.success("Login Successfully", "LOGIN PAGE");
    
  }

}
