import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/models/reclamation';
import { ServicereclamationService } from 'src/app/services/servicereclamation.service';

@Component({
  selector: 'app-reclamationuser',
  templateUrl: './reclamationuser.component.html',
  styleUrls: ['./reclamationuser.component.css']
})
export class ReclamationuserComponent implements OnInit {
rec:Reclamation;
  constructor(private reclamationservice:ServicereclamationService) { 
    this.rec=new Reclamation;
  }

  ngOnInit(): void {
  }
  
  public opened = true;
  public dataSaved = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  public submit() {
      this.dataSaved = true;
      this.close();
  }
  onSubmit(){this.reclamationservice.Save(this.rec).subscribe(result =>{console.log(this.rec)});};

}
