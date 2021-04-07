import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { LoginRequestPayload } from 'src/app/models/login-request-payload';
import { AuthServiceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  im1:string="assets/login/img/aa.svg";
  registerSuccessMessage: string;
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  
  isError: boolean;
    constructor(private authServiceService : AuthServiceService,private activatedRoute: ActivatedRoute,
      private router: Router, private toastr: ToastrService,) {
        this.loginRequestPayload = {
          usernameOrEmail: '',
          password: ''
        };
       }
  
    ngOnInit(): void {
  
      this.loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      });
  
      this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.registered !== undefined && params.registered === 'true') {
          this.toastr.success('Signup SuccessfulPlease Check your inbox for activation email '
          + 'activate your account before you Login!');
          this.registerSuccessMessage = 'Please Check your inbox for activation email '
            + 'activate your account before you Login!';
        }
      });
  }

  login() {
    this.loginRequestPayload.usernameOrEmail = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;
  
    this.authServiceService.login(this.loginRequestPayload)
    .subscribe(data => {
     // alert(data);
      this.isError = false;
   //  alert(this.authServiceService.isUserAdmin());
        //this.router.navigateByUrl('dashboard');

        if(this.authServiceService.isUserAdmin().includes('ROLE_ADMIN')){
          this.toastr.success('Login Successful');
          
        this.router.navigate(['dashboard']);
        }


else {
        this.toastr.success('Login Successful');
        this.router.navigate(['dashboarduser']);
}
      }, error => {
        this.isError = true;
        throwError(error);
      });
    }
  }