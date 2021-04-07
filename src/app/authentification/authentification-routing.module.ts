import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ChangpasswordComponent } from './changpassword/changpassword.component';
import { LoginComponent } from './login/login.component';
import { ResetmdpComponent } from './resetmdp/resetmdp.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:"llogin",component:LoginComponent}
,{path:"ssignup",component:SignupComponent},
{path:"reeset",component:ResetmdpComponent},
{path:"changepassword",component:ChangpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),BrowserModule,CommonModule],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }
