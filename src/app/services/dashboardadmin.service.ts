import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../client';
import { Livreur } from '../livreur';
import { Colis } from '../models/colis';

@Injectable({
  providedIn: 'root'
})
export class DashboardadminService {
  colisUrl: string;
  expUrl: string;

  constructor(private http: HttpClient) { 
    this.colisUrl= 'http://localhost:8080/li';
    this.expUrl= 'http://localhost:8080/cli';
  }
  
  public livreurdesactive(): Observable<Livreur[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Livreur[]>(this.colisUrl+'/listedesactive',options);
   }
   public livreuractive(): Observable<Livreur[]> {    let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
  
  }
    
    
    
    );
let options = { headers: headers };
console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Livreur[]>(this.colisUrl+'/listeactive',options);
   }
   public nblivreuractive(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<number>(this.colisUrl+'/nblivreuractive',options);
   }
   public nblivreurdesactive(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<number>(this.colisUrl+'/nblivreurdesactive',options);
   }

   public expdesactive(): Observable<Client[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Client[]>(this.expUrl+'/expdesactive',options);
   }
   public expactive(): Observable<Client[]> {    let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
  
  }
    
    
    
    );
let options = { headers: headers };
console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Client[]>(this.expUrl+'/expactive',options);
   }
   public nbexpactive(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<number>(this.expUrl+'/nbexpactive',options);
   }
   public nbexpdesactive(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<number>(this.expUrl+'/nbexpdesactive',options);
   }


   public nbenattendeadmin(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<number>('http://localhost:8080/colis/nbenattendeadmin',options);
   }
   public listeenattendeadmin(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Colis[]>('http://localhost:8080/colis/chercheenattendeadmin',options);
   }



}
