import { Component, OnInit } from '@angular/core';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

@Component({
  selector: 'app-colisaudepot',
  templateUrl: './colisaudepot.component.html',
  styleUrls: ['./colisaudepot.component.css']
})
export class ColisaudepotComponent implements OnInit {
  coliers:Colis[];
  constructor(private servicedashboard:ServicedashboarduserService) { }

  ngOnInit(): void {
    this.servicedashboard.colisendepot().subscribe(data =>{this.coliers=data;})
  }

}
