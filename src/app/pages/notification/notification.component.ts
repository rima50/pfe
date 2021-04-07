import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/models/reclamation';
import { NotifService } from 'src/app/services/notif.service';
import { ServicereclamationService } from 'src/app/services/servicereclamation.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  reclamations:Reclamation[];
  constructor(private reclamationservice: ServicereclamationService) {

  
  }
  ngOnInit(): void {
    this.reclamationservice.fin().subscribe(data => {
    this.reclamations = data;console.log(data);});}
  }
 