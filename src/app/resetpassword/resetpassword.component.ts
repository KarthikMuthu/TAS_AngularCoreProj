import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruitprocessService } from '../TAS_Service/recruitprocess.service';
import { ToastrService } from 'ngx-toastr';
declare const resetpassword,backtologin :any;

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styles: []
})
export class ResetpasswordComponent implements OnInit {

  constructor(private resetrouter : Router, private resetservice : RecruitprocessService,
    private resetoast : ToastrService) { }

  ngOnInit() {
  }

  ValidateResetPswd()
  {
    resetpassword();
  }

  BacktoLogin(){
     this.resetrouter.navigate(['login']);
  }

}
