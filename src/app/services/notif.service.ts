import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor(private http:HttpClient ) {}
    
 
  public Notif() {
    return this.http.post(`http://localhost:8080/api/notif/some-action`,{});
  }

 public connect() {
    let socket = new SockJS(`http://localhost:8080/socket`);

    let stompClient = Stomp.over(socket);

    return stompClient;


}
}



