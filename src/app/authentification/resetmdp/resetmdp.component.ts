import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Emailoublie } from 'src/app/models/emailoublie';
import { AuthServiceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resetmdp',
  templateUrl: './resetmdp.component.html',
  styleUrls: ['./resetmdp.component.css']
})
export class ResetmdpComponent implements OnInit {
  im1:string="assets/login/img/aa.svg";

  reset:Emailoublie;
  constructor(private authServiceService:AuthServiceService,private route:ActivatedRoute,private router:Router) {
    this.reset=new Emailoublie; }

  ngOnInit(): void {
    
  }
  Onreset(){
    
    this.authServiceService.resetpass(this.reset).subscribe(data => {
      console.log(data);
    }, error => {
      throwError(error);
    })
    console.log(this.reset);
  }
  gotolivreurlist(){this.router.navigate(['/reset']);}
}
