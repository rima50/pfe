import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

@Component({
  selector: 'app-colislivre',
  templateUrl: './colislivre.component.html',
  styleUrls: ['./colislivre.component.css']
})
export class ColislivreComponent implements OnInit {
  coliers:Colis[];
  constructor(private servicedashboard:ServicedashboarduserService) { }

  ngOnInit(): void {
    this.servicedashboard.colislivret().subscribe(data =>{this.coliers=data;})
  }

}
