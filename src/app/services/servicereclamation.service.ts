import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamation } from '../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ServicereclamationService {

  private  reclamationUrl:string;
  constructor(private http: HttpClient) {
    this.reclamationUrl= 'http://localhost:8080/reclamation';
   }
   
 
  public fin(): Observable<Reclamation[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Reclamation[]>(this.reclamationUrl+"/all",options);
   }
  
  public Save(recl: Reclamation) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.post<Reclamation>(this.reclamationUrl+'/save',recl,options);
  }
}
