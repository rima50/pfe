import { Component, OnInit } from '@angular/core';
import { Codecoli } from 'src/app/models/codecoli';
import { Etatcolis } from 'src/app/models/etatcolis';
import { ColisService } from 'src/app/services/colis.service';

@Component({
  selector: 'app-swivrecolis',
  templateUrl: './swivrecolis.component.html',
  styleUrls: ['./swivrecolis.component.css']
})
export class SwivrecolisComponent implements OnInit {
code:Codecoli;
tablec:Etatcolis[];
test:boolean;
  constructor(private colisservice:ColisService) {
    this.code=new Codecoli;
    this.test=false;
   }

  ngOnInit(): void {
  }
  onChercher(f:any){
    console.log(f.keyword);
    this.test=true;
    this.colisservice.Suivrecolis(f.keyword).subscribe(data =>{this.tablec=data;} );
  }

}
