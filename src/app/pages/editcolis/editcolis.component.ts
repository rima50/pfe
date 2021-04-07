import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colis } from 'src/app/models/colis';
import { ColisService } from 'src/app/services/colis.service';

@Component({
  selector: 'app-editcolis',
  templateUrl: './editcolis.component.html',
  styleUrls: ['./editcolis.component.css']
})
export class EditcolisComponent implements OnInit {

//livreur:Livreur;
l1:Colis;
c1:Colis;
id:number;
constructor(private route:ActivatedRoute,private router:Router,private colisservice:ColisService) { 
//this.livreur= new Livreur();
 this.l1= new Colis();
 this.c1=new Colis();
}

ngOnInit() {
 
this.id=this.route.snapshot.params.id;
console.log(this.route.snapshot.params.id);
this.colisservice.chercheparid(this.id).subscribe(data => {

this.l1 = data;},
err=>{console.log(err);
});

console.log(this.l1);
}

oncherche(){this.colisservice.chercheparid(this.id).subscribe(data => {

this.c1 = data;console.log(this.c1);})}




onSubmitt(){this.colisservice.update(this.id,this.l1).subscribe(result =>this.router.navigate(['/colis']),
data =>{this.l1=data});}


}

