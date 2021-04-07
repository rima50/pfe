import { Routes } from '@angular/router';

//import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';

import { LoginComponent } from "../../authentification/login/login.component";
import {  SignupComponent} from "../../authentification/signup/signup.component";
import {  ResetmdpComponent} from "../../authentification/resetmdp/resetmdp.component";
export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent },
    { path: 'register',       component: SignupComponent },
    { path: 'reset',       component: ResetmdpComponent },  
];
