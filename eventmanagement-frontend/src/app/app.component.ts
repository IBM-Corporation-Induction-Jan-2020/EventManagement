import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectEMS';
 condition=true
  constructor(private httpClient: HttpClient,private router:Router) { 
   
  
  }
  userlogin()
  {  
    console.log("Login called")
    this.router.navigateByUrl("/Login")
    this.condition=false;

  }
  usersignout()
  {
    console.log("signout called")
    localStorage.removeItem("login_id")
    this.condition=true
  this.router.navigateByUrl("/userevents")
    
  }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/imageupload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
       console.log(response)
      }
      );
    //  return this.http.post<Event>('http://localhost:8080/addEvents/',eventForm,{responseType:'text' as 'json'}).subscribe(response => console.log(response));
 

  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

}
