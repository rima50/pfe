import { Component, OnInit } from '@angular/core';
import { Livreur } from 'src/app/livreur';
import { DashboardadminService } from 'src/app/services/dashboardadmin.service';

@Component({
  selector: 'app-listelireurdesactive',
  templateUrl: './listelireurdesactive.component.html',
  styleUrls: ['./listelireurdesactive.component.css']
})
export class ListelireurdesactiveComponent implements OnInit {
  livreurs: Livreur[];
  constructor(private livreurservice:DashboardadminService) { }

  ngOnInit(): void {
   this.livreurservice.livreurdesactive().subscribe(data => {
      this.livreurs = data;})
   
  

}
}