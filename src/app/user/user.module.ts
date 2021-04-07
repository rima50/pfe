import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { ColisuserComponent } from './colisuser/colisuser.component';
import { SidebaruserComponent } from './sidebaruser/sidebaruser.component';
import { PaiementuserComponent } from './paiementuser/paiementuser.component';
import { SuivrecolisuserComponent } from './suivrecolisuser/suivrecolisuser.component';
import { PickupComponent } from './pickup/pickup.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';


import { ColisenattendComponent } from './colisenattend/colisenattend.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClipboardModule } from 'ngx-clipboard';
import { ColisaudepotComponent } from './colisaudepot/colisaudepot.component';
import { ColisencoursComponent } from './colisencours/colisencours.component';
import { ColisrtndepotComponent } from './colisrtndepot/colisrtndepot.component';
import { ColislivreComponent } from './colislivre/colislivre.component';
import { ColisretourecuComponent } from './colisretourecu/colisretourecu.component';
import { ColisretourdefComponent } from './colisretourdef/colisretourdef.component';
import { ColisretourexpComponent } from './colisretourexp/colisretourexp.component';
import { NotificationComponent } from '../pages/notification/notification.component';
import { ReclamationuserComponent } from './reclamationuser/reclamationuser.component';
import { PopupComponent } from './popup/popup.component';
import { WindowtestComponent } from './windowtest/windowtest.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  declarations: [DashboarduserComponent, ColisuserComponent, SidebaruserComponent, PaiementuserComponent, SuivrecolisuserComponent, PickupComponent, UserlayoutComponent,  ColisenattendComponent, ColisaudepotComponent, ColisencoursComponent, ColisrtndepotComponent, ColislivreComponent, ColisretourecuComponent, ColisretourdefComponent, ColisretourexpComponent, ReclamationuserComponent, PopupComponent, WindowtestComponent],
  imports: [
    CommonModule,
    UserRoutingModule
,
    FormsModule,
    //BrowserModule,
  //  BrowserAnimationsModule,
    WindowModule,
    ButtonsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  exports :[
    DashboarduserComponent,ColisuserComponent,
    WindowtestComponent,
    SidebaruserComponent, PaiementuserComponent, SuivrecolisuserComponent, PickupComponent,UserlayoutComponent,ColisenattendComponent,ReclamationuserComponent,PopupComponent
  ]
})
export class UserModule { }
