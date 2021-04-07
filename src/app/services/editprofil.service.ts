import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editprofil } from '../models/editprofil';
import { Information } from '../models/information';

@Injectable({
  providedIn: 'root'
})
export class EditprofilService {

  constructor(private http:HttpClient) { }
  editProfile(p:Editprofil){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.put("http://localhost:8080/user/editprofil",p,httpOptions);

  }
  info():Observable<Information>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('jwt') !== null ? 'Bearer ' + localStorage.getItem('jwt') : ''
      })
    };
    return this.http.get<Information>("http://localhost:8080/user/user",httpOptions);

  }

}
