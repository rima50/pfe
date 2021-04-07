import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

@Component({
  selector: 'app-colisrtndepot',
  templateUrl: './colisrtndepot.component.html',
  styleUrls: ['./colisrtndepot.component.css']
})
export class ColisrtndepotComponent implements OnInit {
  coliers:Colis[];
  constructor(private servicedashboard:ServicedashboarduserService) { }

  ngOnInit(): void {
    this.servicedashboard.colisrtndepot().subscribe(data =>{this.coliers=data;})
  }

}
