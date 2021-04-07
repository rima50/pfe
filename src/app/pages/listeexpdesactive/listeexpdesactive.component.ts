import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { DashboardadminService } from 'src/app/services/dashboardadmin.service';

@Component({
  selector: 'app-listeexpdesactive',
  templateUrl: './listeexpdesactive.component.html',
  styleUrls: ['./listeexpdesactive.component.css']
})
export class ListeexpdesactiveComponent implements OnInit {

  clients:Client[];
  constructor(private servicedashboard: DashboardadminService) { }

  ngOnInit(): void {
    this.servicedashboard.expdesactive().subscribe(data => {
      this.clients = data;})
  }
}
