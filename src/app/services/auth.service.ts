import { HttpClient, HttpErrorResponse, HttpHeaders,HttpRequest } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import {  JwtHelperService} from "@auth0/angular-jwt";

import { map, tap } from 'rxjs/operators';
import { Emailoublie } from '../models/emailoublie';
import { LoginRequestPayload } from '../models/login-request-payload';
import { LoginResponse } from '../models/login-response';
import { Signuprequestpayload } from '../models/signuprequestpayload';
import { Changepassword } from '../models/changepassword';

//import { Emailoublie } from './emailoublie';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();
  @Output() username: EventEmitter<string> = new EventEmitter();
  
  refreshTokenPayload = {
    refreshToken: this.getRefreshToken(),
    username: this.getUserName()
  }


  constructor(private httpClient : HttpClient,private localStorage: LocalStorageService) { 
     
  
  }
  jwtHelper:JwtHelperService = new JwtHelperService();
  loginSuject = new BehaviorSubject<any>(null);  
  resetpass(emailoublie:Emailoublie){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
  let options = { headers: headers };

    return this.httpClient.post<Emailoublie>("http://localhost:8080/api/reset",JSON.stringify(emailoublie),options);
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
  //console.log(this.getUserName);
  let roles: string[] = [];
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/signin',
      loginRequestPayload).pipe(map(data => {
        console.log(data.username);
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);

        console.log(this.localStorage.retrieve('authenticationToken'));
        localStorage.setItem("j","Bearer "+data.authenticationToken);
        localStorage.setItem("jwt",data.authenticationToken);

      //  if (localStorage.getItem('jwt')) {
        // roles = this.jwtHelper.decodeToken(data.authenticationToken).roles;
          //alert(roles);
         // console.log(roles);
        //  console.log(localStorage.getItem('jwt'));
         // return roles.includes('ROLE_ADMIN');
      //  }


        


        return true;
      }));
  }

  isUserAdmin() {
    let roles: string[] = [];
    if (localStorage.getItem('jwt')) {
      roles = this.jwtHelper.decodeToken(localStorage.getItem('jwt')).roles;
    
      console.log(roles);
      return roles;
    }
    return [];

  }

  getJwtToken(){
    return this.localStorage.retrieve('authenticationToken');}
    refreshToken() {
      return this.httpClient.post<LoginResponse>('http://localhost:8080/api/refresh/token',
        this.refreshTokenPayload)
        .pipe(tap(response => {
          this.localStorage.clear('authenticationToken');
          this.localStorage.clear('expiresAt');
  
          this.localStorage.store('authenticationToken',
            response.authenticationToken);
          this.localStorage.store('expiresAt', response.expiresAt);
        }));
    }
    
  logout() {
    this.httpClient.post('http://localhost:8080/api/auth/logout', this.refreshTokenPayload,
      { responseType: 'text' })
      .subscribe(data => {
        console.log(data);
      }, error => {
        throwError(error);
      })
    this.localStorage.clear('authenticationToken');
    this.localStorage.clear('username');
    this.localStorage.clear('refreshToken');
    this.localStorage.clear('expiresAt');
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }
  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  isLoggedIn(): boolean {
    return this.getJwtToken() != null;
  }




  
 changepass(change:Changepassword){
   let headers = new HttpHeaders({
    'Content-Type': 'application/json'});
let options = { headers: headers }; 

  return this.httpClient.post<Changepassword>("http://localhost:8080/api/change",JSON.stringify(Changepassword),options);
}
signup(signupRequestPayload:Signuprequestpayload){
  return this.httpClient.post("http://localhost:8080/api/sign",signupRequestPayload,{responseType:'text'});
}
}
