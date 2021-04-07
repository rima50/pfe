
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colis } from '../models/colis';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Etat} from ".././models/etat";
import { Etatcolis } from '../models/etatcolis';
import { Affectationlivreur } from '../models/affectationlivreur';
@Injectable({
  providedIn: 'root'
})
export class ColisService {

private colisUrl:string;
  constructor(private http: HttpClient) {
    this.colisUrl= 'http://localhost:8080/colis';
   }
   
  public findAll(page:number,size:number): Observable<Colis[]> {
    return this.http.get<Colis[]>(this.colisUrl+"/"+page+"/"+size);
  }
  public fin(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
  
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Colis[]>(this.colisUrl+"/colisall",options);
   }




   public finallbyadmin(): Observable<Colis[]> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
  
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Colis[]>(this.colisUrl+"/colisalladmin",options);
   }
   public QRcode(id:number):Observable<any>  {
    let headers = new HttpHeaders({
      'Content-Type': 'image/png'});
  let options = { headers: headers };
    return this.http.get<any>("http://localhost:8080/api/qr-code/"+id,options);
   }
  public find(nom:string): Observable<Colis[]> {
    return this.http.get<Colis[]>(this.colisUrl+"/"+nom);
  }
  public Save(colis: Colis) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.post<Colis>(this.colisUrl+'/save',colis,options);
  }
  public changeetat (etat :Etat, id : number ){ 
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'});
  let options = { headers: headers };
    return this.http.post<Etat>("http://localhost:8080/colis/action/" + id ,JSON.stringify(etat),options);
  }

  public update(id:number,colis:Colis){
    return this.http.post<Colis>(this.colisUrl + "/update/" + id, colis);
  }

  public chercheparid(id:number):Observable<Colis>{
    return this.http.get<Colis>("http://localhost:8080/colis/chercheparid/"+id);}


  public cherche(nom:string):Observable<Colis[]>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": localStorage.getItem('jwt')!== null ?  "Bearer " +  localStorage.getItem('jwt'): ''
    
    }
      
      
      
      );
  let options = { headers: headers };
  console.log("Bearer " +  localStorage.getItem('jwt'));
    return this.http.get<Colis[]>("http://localhost:8080/colis/cherche/"+nom,options);}




     public Suivrecolis(id:number):Observable<Etatcolis[]>{
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post<Etatcolis[]>("http://localhost:8080/colis/suivrecolis",id,options);}


    public affectioncolis(aff:Affectationlivreur):Observable<Affectationlivreur>{
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post<Affectationlivreur>("http://localhost:8080/admin/affectationcolis",aff,options);}
}


