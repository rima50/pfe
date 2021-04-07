import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

@Component({
  selector: 'app-colisencours',
  templateUrl: './colisencours.component.html',
  styleUrls: ['./colisencours.component.css']
})
export class ColisencoursComponent implements OnInit {
  coliers:Colis[];
  constructor(private servicedashboard:ServicedashboarduserService) { }

  ngOnInit(): void {
    this.servicedashboard.colisencours().subscribe(data =>{this.coliers=data;})
  }

}
