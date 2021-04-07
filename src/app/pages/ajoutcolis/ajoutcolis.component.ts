import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colis } from 'src/app/models/colis';
import { ColisService } from 'src/app/services/colis.service';

@Component({
  selector: 'app-ajoutcolis',
  templateUrl: './ajoutcolis.component.html',
  styleUrls: ['./ajoutcolis.component.css']
})
export class AjoutcolisComponent implements OnInit {
  l1:Colis;

  constructor(private route:ActivatedRoute,private router:Router,private colisservice:ColisService) { 
    this.l1=new Colis;
  }

  ngOnInit(): void {
  }
  onSubmit(){this.colisservice.Save(this.l1).subscribe(result => this. gotocolislist());}

  gotocolislist(){this.router.navigate(['/colis']);}
}