import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/client';
import { ClientService } from 'src/app/client.service';

@Component({
  selector: 'app-clientajout',
  templateUrl: './clientajout.component.html',
  styleUrls: ['./clientajout.component.css']
})
export class ClientajoutComponent implements OnInit {
  client:Client;
  
  constructor(private route:ActivatedRoute,private router:Router,private clientService:ClientService) { 
  this.client=new Client;
 }
  ngOnInit(): void {
  }
  onSubmit(){this.clientService.save(this.client).subscribe(result => this. gotoclientlist());}
  gotoclientlist() {this.router.navigate(['/client']);}

  

}
