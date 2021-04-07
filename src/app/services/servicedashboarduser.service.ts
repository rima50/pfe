import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colis } from '../models/colis';

@Injectable({
  providedIn: 'root'
})
export class ServicedashboarduserService {
  colisUrl: string;

  constructor(private http: HttpClient) { 
    this.colisUrl= 'http://localhost:8080/colis';
  }

  public colisenatt(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<Colis[]>(this.colisUrl+'/chercheenattende',options);
   }
   public nbcolisenattende(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<number>(this.colisUrl+'/nbenattende',options);
   }

   public colisencours(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<Colis[]>(this.colisUrl+'/chercheencours',options);
   }
   public colisretourdefit(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<Colis[]>(this.colisUrl+'/chercheretourdefi',options);
   }
   public colisretourexp(): Observable<Colis[]> {
     let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
  
  }
    
    
    
    );
let options = { headers: headers };
    return this.http.get<Colis[]>(this.colisUrl+'/chercheretourexp',options);
   }
   public colislivret(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<Colis[]>(this.colisUrl+'/cherchelivre',options);
   }
   public colisendepot(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<Colis[]>(this.colisUrl+'/chercheaudepot',options);
   }
   public colisrtndepot(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<Colis[]>(this.colisUrl+'/cherchertndepot',options);
   }
   public colisretourrecu(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<Colis[]>(this.colisUrl+'/chercheretourrecu',options);
   }
   public nbcolisaudepot(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<number>(this.colisUrl+'/nbaudepot',options);
   }
   public nbcolisencours(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<number>(this.colisUrl+'/nbencours',options);
   }
   public nbcolisrtndepot(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<number>(this.colisUrl+'/nbertndepot',options);
   }
   public nbcolislivre(): Observable<number> { let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
  
  }
    
    
    
    );
let options = { headers: headers };
    return this.http.get<number>(this.colisUrl+'/nblivre',options);
   }
   public nbcolisretourrecu(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<number>(this.colisUrl+'/nbretourrecu',options);
   }
   public nbcolisretourdef(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<number>(this.colisUrl+'/nbretourdefinitif',options);
   }
   public nbcolisretourexp(): Observable<number> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ? "Bearer " + localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<number>(this.colisUrl+'/nbretourexp',options);
   }
}
