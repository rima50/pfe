import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwivrecolisComponent } from '../../pages/swivrecolis/swivrecolis.component';
import { PaymentComponent } from '../../pages/payment/payment.component';
import { ColisComponent } from 'src/app/pages/colis/colis.component';
import { ClientComponent } from 'src/app/pages/client/client.component';
import { LivreurComponent } from 'src/app/pages/livreur/livreur.component';
import { EditlivreurComponent } from 'src/app/pages/editlivreur/editlivreur.component';
import { AjoutlivreurComponent } from 'src/app/pages/ajoutlivreur/ajoutlivreur.component';
import { AjoutcolisComponent } from 'src/app/pages/ajoutcolis/ajoutcolis.component';
import { EditcolisComponent } from 'src/app/pages/editcolis/editcolis.component';
import { NotificationComponent } from 'src/app/pages/notification/notification.component';
import { NotifService } from 'src/app/services/notif.service';
import { ListelireurdesactiveComponent } from 'src/app/pages/listelireurdesactive/listelireurdesactive.component';
import { ListeexpactiveComponent } from 'src/app/pages/listeexpactive/listeexpactive.component';
import { ListeexpdesactiveComponent } from 'src/app/pages/listeexpdesactive/listeexpdesactive.component';
import { ColisenattenteadminComponent } from 'src/app/pages/colisenattenteadmin/colisenattenteadmin.component';
import { UserProfilComponent } from 'src/app/pages/user-profil/user-profil.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    AjoutlivreurComponent,
   // TablesComponent,

    //IconsComponent,
   
    
    //MapsComponent,
  
    EditlivreurComponent,
    SwivrecolisComponent,
    ClientComponent,
   LivreurComponent,
    AjoutcolisComponent,
    PaymentComponent,ColisComponent,
    AjoutcolisComponent,EditcolisComponent,NotificationComponent,ListeexpactiveComponent,
    ListeexpdesactiveComponent,
    ListelireurdesactiveComponent,ListelireurdesactiveComponent,ColisenattenteadminComponent,UserProfilComponent
  ],
  exports:[NotificationComponent],
})

export class AdminLayoutModule {}
