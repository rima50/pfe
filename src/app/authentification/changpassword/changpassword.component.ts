import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Changepassword } from 'src/app/models/changepassword';
import { AuthServiceService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changpassword',
  templateUrl: './changpassword.component.html',
  styleUrls: ['./changpassword.component.css']
})
export class ChangpasswordComponent implements OnInit {
  im1:string="assets/login/img/aa.svg";

  reset:Changepassword;
  constructor(private authServiceService:AuthServiceService,private route:ActivatedRoute,private router:Router) {
    this.reset=new Changepassword; }


  ngOnInit(): void {
  }
  Onchange(){
    
    this.authServiceService.changepass(this.reset).subscribe();
   
    console.log(this.reset);
  }
}
