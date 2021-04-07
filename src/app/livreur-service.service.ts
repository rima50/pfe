
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livreur } from './livreur';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreurServiceService {
  getLivreur(l1: Livreur) {
    throw new Error('Method not implemented.');
  }
private livreurUrl:string;
  constructor(private http: HttpClient) {
    this.livreurUrl = 'http://localhost:8080/li/livreur';
   }
   
  public findAll(): Observable<Livreur[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
    return this.http.get<Livreur[]>("http://localhost:8080/li/livreurs",options);
  }
  public fin(): Observable<Livreur[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Livreur[]>('http://localhost:8080/li/livreurs',options);
   }
  public find(nom:string): Observable<Livreur[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Livreur[]>(this.livreurUrl+"/"+nom,options);
  }
  public Save(livreur: Livreur) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.post<Livreur>(this.livreurUrl, livreur,options);
  }
  public active(livreur: Livreur){
    return this.http.post<Livreur>("http://localhost:8080/li/active",livreur);
  }
  public update(id:number,value:any){return this.http.post(this.livreurUrl+"/"+id,value);}
  public cherche(id:number):Observable<Livreur>{
    return this.http.get<Livreur>("http://localhost:8080/li/chercherbyid/"+id);}
}


