import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  UserModule} from "./user/user.module";
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ClientComponent } from './pages/client/client.component';
import { ClienteditComponent } from './pages/clientedit/clientedit.component';
import { ClientajoutComponent } from './pages/clientajout/clientajout.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { ResetmdpComponent } from './authentification/resetmdp/resetmdp.component';
import { LoginComponent } from './authentification/login/login.component';

import { AuthentificationModule } from './authentification/authentification.module';
import { ColisComponent } from './pages/colis/colis.component';
import { LivreurComponent } from './pages/livreur/livreur.component';
import { AjoutlivreurComponent } from './pages/ajoutlivreur/ajoutlivreur.component';
import { EditlivreurComponent } from './pages/editlivreur/editlivreur.component';
import { AjoutcolisComponent } from './pages/ajoutcolis/ajoutcolis.component';
import { EditcolisComponent } from './pages/editcolis/editcolis.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { ListelivreuractiveComponent } from './pages/listelivreuractive/listelivreuractive.component';
import { ListelireurdesactiveComponent } from './pages/listelireurdesactive/listelireurdesactive.component';
import { ListeexpactiveComponent } from './pages/listeexpactive/listeexpactive.component';
import { ListeexpdesactiveComponent } from './pages/listeexpdesactive/listeexpdesactive.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ColisenattenteadminComponent } from './pages/colisenattenteadmin/colisenattenteadmin.component';
import { UserProfilComponent } from './pages/user-profil/user-profil.component';


//import { ChangepasswordComponent } from './models/changepassword/changepassword.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    UserModule,
    AuthentificationModule,
    DialogsModule
  ],
  declarations: [
    AppComponent,
     AdminLayoutComponent,
    AuthLayoutComponent,
    UserProfilComponent,
  /*  ClientComponent,
    ClienteditComponent,
    ClientajoutComponent,
    ColisComponent,
    LivreurComponent,
   AjoutlivreurComponent,
    EditlivreurComponent,
    AjoutcolisComponent,
    EditcolisComponent,
    NotificationComponent,
    ListelivreuractiveComponent,
    ListelireurdesactiveComponent,
    ListeexpactiveComponent,
    ListeexpdesactiveComponent,
    ColisenattenteadminComponent,
 */

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
