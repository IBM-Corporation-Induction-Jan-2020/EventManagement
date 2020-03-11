import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';
import { Admin } from '../admin';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  checkEmp:boolean=false;
  admin:Admin=new Admin("","","","","");
  message: any;
  constructor(private empService: EmployeeService,private router: Router) { }
  setLoginCred(){
    console.log("Calling aservice to check for admin existance")
    this.empService.checkforadmin(this.admin).subscribe(
      response => {
  this.message=response;
  console.log(response);
  if(this.message=="Failure")
  { console.log("Failuree")
     this.router.navigateByUrl("/admin-login")
  }else
  {
    this.router.navigateByUrl("/admin")  
    //console.log("After navigating"+this.login_emp_id)
  } 
    });
  
   }

  ngOnInit(): void {
    console.log(this.admin)
  }

}