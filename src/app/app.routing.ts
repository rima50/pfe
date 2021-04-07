import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from "./authentification/login/login.component";
import {  AuthentificationModule} from "./authentification/authentification.module";
import { AuthGuard } from "./guards/auth.guard";
import { DashboarduserComponent } from './user/dashboarduser/dashboarduser.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserlayoutComponent } from './user/userlayout/userlayout.component';




const routes: Routes =[

  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  
  
  {
    path: 'login',
    component:LoginComponent ,
    children: [
      {
        path: 'auth',
        loadChildren: './authentification/authentification.module#AuthentificationModule'
      }
    ],
    
  },
  {
    path: '',
    component:UserlayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './user/user.module#UserModule'
      }
    ]
  },



  {
    path: '',
    component: AdminLayoutComponent,
    //canActivate:[AuthGuard],

    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ],
    
  }, {
    path: 'lay',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'hj',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      },


     
    ]
  }, 


];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true,onSameUrlNavigation:'reload'
    },)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
