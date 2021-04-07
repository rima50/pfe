import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

@Component({
  selector: 'app-colisretourdef',
  templateUrl: './colisretourdef.component.html',
  styleUrls: ['./colisretourdef.component.css']
})
export class ColisretourdefComponent implements OnInit {

  coliers:Colis[];
  constructor(private servicedashboard:ServicedashboarduserService) { }

  ngOnInit(): void {
    this.servicedashboard.colisretourdefit().subscribe(data =>{this.coliers=data;})
  }

}
