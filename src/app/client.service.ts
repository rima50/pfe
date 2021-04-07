
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

 
 
private clientUrl:string;
  constructor(private http: HttpClient) {
    this.clientUrl = 'http://localhost:8080/cli/client';
   }
   public findAll(): Observable<Client[]> {
     let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Client[]>("http://localhost:8080/cli/clients",options);
  }
  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientUrl);
  }

  public save(client: Client){    let headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
  
  }
    
    
    
    );
let options = { headers: headers };
console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.post<Client>(this.clientUrl+"/save", client,options);
  }
 
  public update(id:number,value:Client){return this.http.post(this.clientUrl+"/"+id,value);}
 
  public deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.clientUrl}/client/delete/${clientId}`);
  }
  public cherche(id:any):Observable<Client>{
    return this.http.get<Client>("http://localhost:8080/cli/client/"+id);}

    public chercherparnom(nom:any):Observable<Client[]>{    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
      return this.http.get<Client[]>("http://localhost:8080/cli/cherchebyid/"+nom,options);}
  
}

