import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-clientedit',
  templateUrl: './clientedit.component.html',
  styleUrls: ['./clientedit.component.css']
})
export class ClienteditComponent implements OnInit {

 //livreur:Livreur;
 l1:Client;
  c1:Client;
 id:number;
 constructor(private route:ActivatedRoute,private router:Router,private clientservice:ClientService) { 
  //this.livreur= new Livreur();
   this.l1= new Client();
   this.c1=new Client();
 }

 ngOnInit() {
   
this.id=this.route.snapshot.params.id;
console.log(this.route.snapshot.params.id);
this.clientservice.cherche(this.id).subscribe(data => {
 
 this.l1 = data;},
  err=>{console.log(err);
 });

 console.log(this.l1);
 }

 oncherche(){this.clientservice.cherche(this.id).subscribe(data => {
 
  this.c1 = data;console.log(this.c1);})}




 onSubmitt(){this.clientservice.update(this.id,this.l1).subscribe(result =>this.router.navigate(['/client']),
 data =>{this.l1=data});}
 

}
