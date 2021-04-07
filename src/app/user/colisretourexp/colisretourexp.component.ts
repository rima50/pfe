import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

@Component({
  selector: 'app-colisretourexp',
  templateUrl: './colisretourexp.component.html',
  styleUrls: ['./colisretourexp.component.css']
})
export class ColisretourexpComponent implements OnInit {

  coliers:Colis[];
  constructor(private servicedashboard:ServicedashboarduserService) { }

  ngOnInit(): void {
    this.servicedashboard.colisretourexp().subscribe(data =>{this.coliers=data;})
  }

}
