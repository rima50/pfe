import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livreur } from 'src/app/livreur';
import { LivreurServiceService } from 'src/app/livreur-service.service';

@Component({
  selector: 'app-ajoutlivreur',
  templateUrl: './ajoutlivreur.component.html',
  styleUrls: ['./ajoutlivreur.component.css']
})
export class AjoutlivreurComponent implements OnInit {

  livreur:Livreur;

  constructor(private route:ActivatedRoute,private router:Router,private livreurService:LivreurServiceService) { 
    this.livreur=new Livreur;
  }

  ngOnInit(): void {
  }
  onSubmit(){this.livreurService.Save(this.livreur).subscribe(result => this. gotolivreurlist());}

  gotolivreurlist(){this.router.navigate(['/livreur']);}
}