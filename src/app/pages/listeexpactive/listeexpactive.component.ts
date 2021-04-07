import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/client';
import { DashboardadminService } from 'src/app/services/dashboardadmin.service';

@Component({
  selector: 'app-listeexpactive',
  templateUrl: './listeexpactive.component.html',
  styleUrls: ['./listeexpactive.component.css']
})
export class ListeexpactiveComponent implements OnInit {
  clients:Client[];
  constructor(private servicedashboard: DashboardadminService) { }

  ngOnInit(): void {
    this.servicedashboard.expactive().subscribe(data => {
      this.clients = data;})
  }

}
