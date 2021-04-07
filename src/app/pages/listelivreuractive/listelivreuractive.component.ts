import { Component, OnInit } from '@angular/core';
import { Livreur } from 'src/app/livreur';
import { DashboardadminService } from 'src/app/services/dashboardadmin.service';

@Component({
  selector: 'app-listelivreuractive',
  templateUrl: './listelivreuractive.component.html',
  styleUrls: ['./listelivreuractive.component.css']
})
export class ListelivreuractiveComponent implements OnInit {
  livreurs: Livreur[];
  constructor(private livreurservice:DashboardadminService) { }

  ngOnInit(): void {
   this.livreurservice.livreuractive().subscribe(data => {
      this.livreurs = data;})
   
  
   }
}
