import { Component, OnInit } from '@angular/core';
import {ColisService  } from "../../services/colis.service";
import {  Colis} from "../../models/colis";
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth.service';
import { Livreur } from 'src/app/livreur';
import { Affectationlivreur } from 'src/app/models/affectationlivreur';
import { Etat } from 'src/app/models/etat';
import { DomSanitizer } from '@angular/platform-browser';
import { LivreurServiceService } from 'src/app/livreur-service.service';



  
  

@Component({
  selector: 'app-colisuser',
  templateUrl: './colisuser.component.html',
  styleUrls: ['./colisuser.component.css']
})
export class ColisuserComponent implements OnInit {
  coliers: Colis[];
  public size:number=5;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<any>;
  public colis=new Colis;
 public i:number=3;
 disable:boolean=false;
 t:string;
 value:any;
 public livreurs:Colis[];
 public livreur:Livreur;
public affliv:Affectationlivreur;
public code:any;
items = [
"Enattende",

"Audepot",
"Encours",
"Rtndepot",

"Retourrecu",
"Retourdefinitif",
"Retourexpediteur"

]
 etat : Etat ;
 
   constructor(private sanitizer: DomSanitizer,private colisService: ColisService ,private router :Router,private servicelivreur:LivreurServiceService) { 
     this.etat =new Etat();
     this.livreur=new  Livreur();
     this.affliv=new Affectationlivreur();
   }
/*    ONpage(i,event:any){
     console.log(i);
     event.preventDefault();
     this.currentPage=i;
    this.get();
     
   } */
   ngOnInit(): void {
     this.router.routeReuseStrategy.shouldReuseRoute =() =>{return false;};
     //this.get();
      this.get1();
     /* this.colisService.fin().subscribe(data => {
         this.livreurs = data;},
          err=>{console.log(err);
         }); 
         console.log(this.livreurs);*/
   }
/*    get(){ this.colisService.findAll(this.currentPage,this.size).subscribe(data => {
     this.coliers = data["content"];
     console.log(data);
     this.pages= new Array(data['totalPages']);},
     err=>{console.log(err);
     }); */
     get1(){ this.colisService.fin().subscribe(data => {
      this.coliers = data;

      console.table(data);
      });
   console.log(this.currentPage);}
  Qrcode(id:number){this.colisService.QRcode(id).subscribe(data=>{this.code=data;
     console.log(this.Qrcode);
     let objectURL = 'data:code/png;base64,' + data;
     this.code= this.sanitizer.bypassSecurityTrustUrl(objectURL);})
    return this.code;};
   
  changeEtat(id:number,etat:Etat){
  
    console.log(etat);
     this.colisService.changeetat(etat,id).subscribe( result =>{this.router.navigateByUrl('/colis');} );}



     
    choisirlivreur(id:number,id1:number){
  
       this.affliv.codecolis=id;
       this.affliv.idliv=id1;
     console.log(id);
     console.log(id1);
    this.colisService.affectioncolis(this.affliv).subscribe( result =>{this.router.navigateByUrl('/colis');} );}
   
   onChercher(value:any){
     this.colisService.cherche(value.keyword).subscribe(data =>{this.coliers=data;});
     console.log(value);
     console.log(this.pages);
     }
    
      /* onEditColis(colis:Colis){
        this.router.navigateByUrl("/maps/"+colis.id);
        console.log(colis.id);
      } */
   
     
   }
//}

