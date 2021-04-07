import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth.service';
declare interface RouteInfo {
path: string;
title: string;
icon: string;
class: string;
}
export const ROUTES: RouteInfo[] = [
{ path: '/dashboarduser', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
{ path: '/colisuser', title: 'colis',  icon:'ni-planet text-blue', class: '' },
{ path: '/suivreuser', title: 'suivrecolis',  icon:'ni-bullet-list-67 text-red', class: '' },

{ path: '/pickup', title: 'pick-up',  icon:'ni-circle-08 text-pink', class: '' },

{ path: '/paimentuser', title: 'paiement',  icon:'ni-circle-08 text-pink', class: '' },

/*
{ path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
{ path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
*/




];
@Component({
  selector: 'app-suivrecolisuser',
  templateUrl: './suivrecolisuser.component.html',
  styleUrls: ['./suivrecolisuser.component.css']
})
export class SuivrecolisuserComponent implements OnInit {
  username  : string;
  public menuItems: any[];
  public isCollapsed = true;
private isLoggedin :boolean;
constructor(private router:Router,private authservice:AuthServiceService) { }

  ngOnInit(): void {
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


