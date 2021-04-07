import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  
clients:Client[];
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<any>;
  public client=new Client;
 public i:number=3;
 disable:boolean=false;
 t:string;
 
 
 
   constructor(private clientService: ClientService ,private router :Router) { 
    
   }

 /*   ONpage(i,event:any){
     console.log(i);
     event.preventDefault();
     this.currentPage=i;
    this.get();
     
   } */
   ngOnInit(): void {
     this.get();
   
   }
   get(){ this.clientService.findAll().subscribe(data => {
     this.clients = data;
     
     /* this.pages= new Array(data['totalPages']);},
     err=>{console.log(err); */
     });

   //console.log(this.currentPage);  console.log(this.clients);
  }
  onChercher(value:any){
    this.clientService.chercherparnom(value.keyword).subscribe(data => {this.clients= data;});
 
    }

}

   
  
  
     
 
    
   
     
   
 