import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';


import { ClientajoutComponent } from 'src/app/pages/clientajout/clientajout.component';
import { ClienteditComponent } from 'src/app/pages/clientedit/clientedit.component';
import { LoginComponent } from 'src/app/authentification/login/login.component';
import { ClientComponent } from 'src/app/pages/client/client.component';
import { PaymentComponent } from 'src/app/pages/payment/payment.component';
import { SwivrecolisComponent } from 'src/app/pages/swivrecolis/swivrecolis.component';
import { ColisComponent } from 'src/app/pages/colis/colis.component';
import { LivreurComponent } from 'src/app/pages/livreur/livreur.component';
import { EditlivreurComponent } from 'src/app/pages/editlivreur/editlivreur.component';
import { AjoutlivreurComponent } from 'src/app/pages/ajoutlivreur/ajoutlivreur.component';
import { AjoutcolisComponent } from 'src/app/pages/ajoutcolis/ajoutcolis.component';
import { EditcolisComponent } from 'src/app/pages/editcolis/editcolis.component';
import { NotificationComponent } from 'src/app/pages/notification/notification.component';
import { ListelivreuractiveComponent } from 'src/app/pages/listelivreuractive/listelivreuractive.component';
import { ListelireurdesactiveComponent } from 'src/app/pages/listelireurdesactive/listelireurdesactive.component';
import { ListeexpdesactiveComponent } from 'src/app/pages/listeexpdesactive/listeexpdesactive.component';
import { ListeexpactiveComponent } from 'src/app/pages/listeexpactive/listeexpactive.component';
import { ColisenattenteadminComponent } from 'src/app/pages/colisenattenteadmin/colisenattenteadmin.component';
import { UserProfilComponent } from 'src/app/pages/user-profil/user-profil.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'login',      component: LoginComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'ajoutlivreur',   component: AjoutlivreurComponent },
    { path: 'editcolis/:id',   component: EditcolisComponent },
    { path: 'livreur',         component: LivreurComponent },
    { path: 'client',           component: ClientComponent },
    { path: 'ajoutcolis',          component: AjoutcolisComponent },
    { path: 'ajoutclient',          component: ClientajoutComponent },
    { path: 'clientedit/:id',          component: ClienteditComponent },
    { path: 'editlivreur/:id',           component: EditlivreurComponent },
  
    { path: 'payment',           component:PaymentComponent},
    { path: 'suivre',           component:SwivrecolisComponent},
    { path: 'colis',           component:ColisComponent},
    { path: 'notification',           component:NotificationComponent},
    { path: 'livreuractive',           component:ListelivreuractiveComponent},
    { path: 'livreurdesactive',           component:ListelireurdesactiveComponent},
    { path: 'expdesactive',           component:ListeexpdesactiveComponent},
    { path: 'expactive',           component:ListeexpactiveComponent},
    { path: 'colisenattenteadmin',           component:ColisenattenteadminComponent},
    { path: 'userprofil',           component:UserProfilComponent},
];
