import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js';
import { Colis } from 'src/app/models/colis';
import { ServicedashboarduserService } from 'src/app/services/servicedashboarduser.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";



@Component({
  selector: 'app-dashboarduser',
  templateUrl: './dashboarduser.component.html',
  styleUrls: ['./dashboarduser.component.css']
})



export class DashboarduserComponent implements OnInit {
  
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  colis:Colis[];
  x:number;
  depot:number;
  encours:number;livre:number;rtndepot:number;recuretour:number;recudef:number;
  recuexp:number;
  constructor(private route:ActivatedRoute,private router:Router,private dashboardservice:ServicedashboarduserService) { 
    
     
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


    this.dashboardservice.nbcolisenattende().subscribe(data=>{this.x=data;
      console.log(this.x);});



      this.dashboardservice.nbcolisaudepot().subscribe(data=>{this.depot=data;
        console.log(this.depot);});


        this.dashboardservice.nbcolisencours().subscribe(data=>{this.encours=data;
          console.log(this.encours);});


          this.dashboardservice.nbcolislivre().subscribe(data=>{this.livre=data;
            console.log(this.livre);});

            this.dashboardservice.nbcolisrtndepot().subscribe(data=>{this.rtndepot=data;
              console.log(this.rtndepot);});

              this.dashboardservice.nbcolisretourrecu().subscribe(data=>{this.recuretour=data;
                console.log(this.recuretour);});
                this.dashboardservice.nbcolisretourdef().
                subscribe(data=>{this.recudef=data;
                  console.log(this.recudef);});
                  this.dashboardservice.nbcolisretourexp().
                  subscribe(data=>{this.recuexp=data;
                    console.log(this.recuexp);});
          
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

}
