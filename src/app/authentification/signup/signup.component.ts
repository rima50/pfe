import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Signuprequestpayload } from 'src/app/models/signuprequestpayload';
import { AuthServiceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  im1:string="assets/login/img/aa.svg";
signupForm : FormGroup;
signupRequestPayload:Signuprequestpayload;
authService:AuthServiceService;
ms:string;
  constructor(authServiceService : AuthServiceService, private router:Router,
    private toastr:ToastrService) { 
    this.signupRequestPayload={username:'',
            email: '',
            password:'',
            repassword:''};
this.authService=authServiceService}

  ngOnInit(): void {
    this.signupForm= new FormGroup({
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
      repassword: new FormControl('',Validators.required),
    });
  }
  Onsignup(){
    this.signupRequestPayload.email=this.signupForm.get('email').value;
    this.signupRequestPayload.username=this.signupForm.get('username').value;
    this.signupRequestPayload.password=this.signupForm.get('password').value;
    this.signupRequestPayload.repassword=this.signupForm.get('repassword').value;
    this.authService.signup(this.signupRequestPayload).subscribe(data => {
      this.router.navigate(['/login'],
        { queryParams: { registered: 'true' } });
    }, error => {
      console.log(error);
      this.toastr.error('Registration Failed! Please try again');
    });
}
}
