import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livreur } from 'src/app/livreur';
import { LivreurServiceService } from 'src/app/livreur-service.service';
@Component({
  selector: 'app-editlivreur',
  templateUrl: './editlivreur.component.html',
  styleUrls: ['./editlivreur.component.css']
})
export class EditlivreurComponent implements OnInit {

//livreur:Livreur;
l1:Livreur;
  L2:Livreur;
id:number;
constructor(private route:ActivatedRoute,private router:Router,private livreurservice:LivreurServiceService) { 
 //this.livreur= new Livreur();
  this.l1= new Livreur();
  this.L2= new Livreur();
}

ngOnInit() {
  
this.id=this.route.snapshot.params.id;
console.log(this.route.snapshot.params.id);
this.livreurservice.cherche(this.id).subscribe(data => {
//this.livreur = data;},
this.L2 = data;},
 err=>{console.log(err);
});
// console.log(this.livreur); 
console.log(this.l1);
}

onSubmitt(){this.livreurservice.update(this.id,this.l1).subscribe(result =>this.router.navigate(['/livreur']),
data =>{this.l1=data});}


}

