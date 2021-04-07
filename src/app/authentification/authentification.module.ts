import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetmdpComponent } from './resetmdp/resetmdp.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthServiceService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';

import { JwtHelperService } from "@auth0/angular-jwt";
import { ChangpasswordComponent } from './changpassword/changpassword.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ResetmdpComponent, ChangpasswordComponent],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,BrowserModule,
   // AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  exports : [
    LoginComponent ,SignupComponent, ResetmdpComponent,ChangpasswordComponent
  ], 
  providers: [AuthServiceService,AuthGuard],
})
export class AuthentificationModule { }
