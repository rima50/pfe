import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from "../../services/auth.service";
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/client', title: 'Client',  icon:'ni-planet text-blue', class: '' },
    { path: '/livreur', title: 'Livreur',  icon:'ni-bullet-list-67 text-red', class: '' },
    
    { path: '/colis', title: 'colis',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/suivre', title: 'suivre colis',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/payment', title: 'paiement',  icon:'ni-circle-08 text-pink', class: '' },
   // { path: '/test', title: 'paiement',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/notification', title: 'notification',  icon:'ni-circle-08 text-pink', class: '' },
  /*
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
   */

   

    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
username  : string;
  public menuItems: any[];
  public isCollapsed = true;
private isLoggedin :boolean;
  constructor(private router: Router,private authservice: AuthServiceService) { }


   isUserInRole(role){
  
    if(this.authservice.isUserAdmin().includes(role)){
      return true;
    }
    return false;
  } 
  ngOnInit() {
    this.isLoggedin =this.authservice.isLoggedIn();
   this.authservice.loginSuject.asObservable().subscribe(()=>{
     this.isLoggedin = this.authservice.isLoggedIn();
     this.username = this.authservice.getUserName();
   })
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
