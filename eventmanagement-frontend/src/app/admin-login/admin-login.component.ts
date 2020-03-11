import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  checkEmp:boolean=false;
  employee:Employee=new Employee("","","","","");
  message: any;
  constructor(private empService: EmployeeService,private router: Router) { }
  setLoginCred(){
    this.empService.checkforadmin(this.employee).subscribe(
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
    console.log(this.employee)
  }

}