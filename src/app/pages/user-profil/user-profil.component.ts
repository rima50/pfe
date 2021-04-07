import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editprofil } from 'src/app/models/editprofil';
import { Information } from 'src/app/models/information';
import { EditprofilService } from 'src/app/services/editprofil.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  private selectedFile2;
 // imgURL: any;
  private imageUrl2: any;
 
private information:Information
 // retreiveImg :any;
  Img :any;
  private profile :Editprofil;
  constructor(private http:HttpClient,private profileSer :EditprofilService,private router: Router) {
    this.profile = new Editprofil();
  this.information=new Information(); 
  this.imageUrl2=1;}

  ngOnInit(): void {

    this.get();
  }
get(){this.profileSer.info().subscribe(data=>{this.information=data;
console.log(data.email);})}


  public onFileChanged2(event) {
    console.log(event);
    this.selectedFile2 = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imageUrl2 = reader.result;
    };

  }



   editprofile(){
     
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile2, this.selectedFile2.name);


    this.http.post('http://localhost:8080/user/editimage', uploadData, { observe: 'response' })
    .subscribe((response) => {
      console.log(response);

      if (response.status === 200) {
        this.profileSer.editProfile(this.profile).subscribe(
          
          (profile) => {
            console.table(this.profile);
            //this.bookAddedEvent.emit();
            //window.location.reload();
            this.router.navigate(['userprofil']);
          }
        );
        console.log('Image uploaded successfully');
      } else {
        console.log('Image not uploaded successfully');
      }
    }
    );

//  });






 }


   }  