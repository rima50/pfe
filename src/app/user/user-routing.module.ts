import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ColisaudepotComponent } from './colisaudepot/colisaudepot.component';
import { ColisenattendComponent } from './colisenattend/colisenattend.component';
import { ColisencoursComponent } from './colisencours/colisencours.component';
import { ColislivreComponent } from './colislivre/colislivre.component';
import { ColisretourdefComponent } from './colisretourdef/colisretourdef.component';
import { ColisretourecuComponent } from './colisretourecu/colisretourecu.component';
import { ColisretourexpComponent } from './colisretourexp/colisretourexp.component';
import { ColisrtndepotComponent } from './colisrtndepot/colisrtndepot.component';
import { ColisuserComponent } from './colisuser/colisuser.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';

import { PaiementuserComponent } from './paiementuser/paiementuser.component';
import { PickupComponent } from './pickup/pickup.component';
import { ReclamationuserComponent } from './reclamationuser/reclamationuser.component';
import { SuivrecolisuserComponent } from './suivrecolisuser/suivrecolisuser.component';
import { UserlayoutComponent } from './userlayout/userlayout.component';


const routes: Routes = [
  {
    path:"user",component : UserlayoutComponent
  },
  {
    path:"dashboarduser",component : DashboarduserComponent
  },
  {
    path:"colisuser",component : ColisuserComponent
  },
  {
    path:"paimentuser",component : PaiementuserComponent
  },
  {
    path:"pickup",component : PickupComponent
  },
  {
    path:"suivreuser",component :SuivrecolisuserComponent
  },
  {
  path:"colisenattend",component :ColisenattendComponent
  },
  {
    path:"colisaudepot",component :ColisaudepotComponent
    },
    {
      path:"colisencours",component :ColisencoursComponent
      },
      {
        path:"colisrtndepot",component :ColisrtndepotComponent
        },
        {
          path:"colisretourrecu",component :ColisretourecuComponent
          },
          {
            path:"colisretourdef",component :ColisretourdefComponent
            },
            {
              path:"colisretourexp",component :ColisretourexpComponent
              },
              {
                path:"colislivre",component :ColislivreComponent
                }
                ,
                {
                  path:"reclamation",component :ReclamationuserComponent
                  }
          
        
      
    
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
