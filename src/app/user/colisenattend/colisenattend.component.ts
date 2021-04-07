import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

@Component({
  selector: 'app-colisenattend',
  templateUrl: './colisenattend.component.html',
  styleUrls: ['./colisenattend.component.css']
})
export class ColisenattendComponent implements OnInit {
  coliers:Colis[];
  constructor(private servicedashboard:ServicedashboarduserService) { }

  ngOnInit(): void {
    this.servicedashboard.colisenatt().subscribe(data =>{this.coliers=data;})
  }

}
