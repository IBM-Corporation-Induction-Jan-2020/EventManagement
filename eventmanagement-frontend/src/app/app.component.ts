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
  condition = true
  constructor(private httpClient: HttpClient, private router: Router) {


  }
  userlogin() {
    console.log("Login called")
    this.router.navigateByUrl("/Login")
    this.condition = false;

  }
  usersignout() {
    console.log("signout called")
    localStorage.removeItem("login_id")
    this.condition = true
    this.router.navigateByUrl("/userevents")

  }



}
