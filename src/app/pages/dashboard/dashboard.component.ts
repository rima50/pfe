import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js';
import { LivreurServiceService } from 'src/app/livreur-service.service';
import { Colis } from 'src/app/models/colis';
import { DashboardadminService } from 'src/app/services/dashboardadmin.service';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  colis:Colis[];
  x:number
  nla:number;
  nld:number
  depot:number;
  nbexpa:number;
  nbexpd:number;
  constructor(private route:ActivatedRoute,private router:Router,private dashboardservice:DashboardadminService
    ,private livreurservice:DashboardadminService) { 
    
     
    }
  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
   
      this.dashboardservice.nbenattendeadmin().subscribe(data=>{this.x=data;
   console.log(this.x);});

    
    this.livreurservice.nblivreuractive().subscribe(data=>{this.nla=data;
      console.log(this.nla);});
      this.livreurservice.nblivreurdesactive().subscribe(data=>{this.nld=data;
        console.log(this.nld);});
        this.livreurservice.nbexpactive().subscribe(data=>{this.nbexpa=data;
          console.log(this.nla);});
          this.livreurservice.nbexpdesactive().subscribe(data=>{this.nbexpd=data;
            console.log(this.nla);});
  }



  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
