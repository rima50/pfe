import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livreur } from '../../livreur';
import { LivreurServiceService } from '../../livreur-service.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.css']
})
export class LivreurComponent implements OnInit {
  livreurs: Livreur[];
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<any>;
  public livreur=new Livreur;
 public i:number=3;
 disable:boolean=false;
 t:string;
 
   constructor(private livreurService: LivreurServiceService ,private router :Router) { }
  /*  ONpage(i,event:any){
     console.log(i);
     event.preventDefault();
     this.currentPage=i;
    this.get();
     
   } */
   ngOnInit(): void {
     this.get();
      
     /* this.livreurService.fin().subscribe(data => {
         this.livreurs = data;},
          err=>{console.log(err);
         }); */
   }
   get(){ this.livreurService.fin().subscribe(data => {
     this.livreurs = data;
     
   /*   this.pages= new Array(data['totalPages']);},
     err=>{console.log(err); */
     });
   //console.log(this.currentPage);
  }
  
  
   onChercher(value:any){
     this.livreurService.find(value.keyword).subscribe(data =>{this.livreurs=data;});
     console.log(value);
     console.log(this.pages);
     }
    Onactive(livreur:Livreur, row,liv){
      this.livreurService.active(livreur)
      .subscribe((result) =>{
       console.log(row);
        console.log(result);
        console.log();
        if(row.target.classList.contains('fas fa-toggle-on')){
         row.target.classList.remove('fas fa-toggle-on');
         row.target.classList.add('fad fa-toggle-off')
        }else {
         row.target.classList.remove('fas fa-toggle-off')
         row.target.classList.add('fas fa-toggle-on');
        }
       livreur=result;
       
      });}
     
     
 
      onEditLivreur(livreur:Livreur){
        this.router.navigateByUrl("/editlivreur/"+livreur.id);
        console.log(livreur.id);
      }
   
     
   }
 
 
   


   
 
 /* Onactive(livreur:Livreur){this.livreurService.active(livreur).subscribe(result => this. go(this.disable),data=>{this.disable=data.disponibilite;});}
 
 go(disable){console.log(this.disable);
 if(disable==true){
 disable=false;}
 console.log(this.disable);
 } 
   */ 
   
 
 
 
  
