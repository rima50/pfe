import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

@Component({
  selector: 'app-colisretourecu',
  templateUrl: './colisretourecu.component.html',
  styleUrls: ['./colisretourecu.component.css']
})
export class ColisretourecuComponent implements OnInit {
  coliers:Colis[];
  constructor(private servicedashboard:ServicedashboarduserService) { }

  ngOnInit(): void {
    this.servicedashboard.colisretourrecu().subscribe(data =>{this.coliers=data;})
  }

}
