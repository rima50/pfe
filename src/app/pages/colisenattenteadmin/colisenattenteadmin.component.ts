import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { DashboardadminService } from 'src/app/services/dashboardadmin.service';

@Component({
  selector: 'app-colisenattenteadmin',
  templateUrl: './colisenattenteadmin.component.html',
  styleUrls: ['./colisenattenteadmin.component.css']
})
export class ColisenattenteadminComponent implements OnInit {

  coliers:Colis[];
  constructor(private servicedashboard:DashboardadminService) { }

  ngOnInit(): void {
    this.servicedashboard.listeenattendeadmin().subscribe(data =>{this.coliers=data;})
  }


}
