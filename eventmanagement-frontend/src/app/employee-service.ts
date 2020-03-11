import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  checkforadmin(admin: Admin) {
    console.log("Calling the service")
    return this.http.post<String>('http://localhost:8080/adminlogin/',admin,{responseType:'text' as 'json'});
     
  }
  
  addEmployee(employee: Employee) {
    console.log("Add employee")
    return  this.http.post<String>('http://localhost:8080/addemployee/',employee,{responseType:'text' as 'json'});
 
  }
  checkforUser(employee:Employee){
    console.log("Calling the service")
 return this.http.post<String>('http://localhost:8080/login/',employee,{responseType:'text' as 'json'});
  
 

    // let empFound = false;
    // this.empArray = this.staticEmployees();
    // this.empArray.forEach(element => {
    //   if (element.empEmail == userCred.username && element.empPassword == userCred.password) {
    //     empFound = true;
    //   }
    // });
   
  }

  empArray: Employee[] = []
  constructor(public http:HttpClient,private router: Router) { }

  staticEmployees(): Employee[] {
    this.empArray = []
    // this.empArray.push(new Employee(1, "sahith@gmail.com", "sah123", "Sahith", "8762696575", "Bangalore"))
    // this.empArray.push(new Employee(2, "biswajith@gmail.com", "bisu123", "Biswajit", "5648536898", "Bangalore"))
    // this.empArray.push(new Employee(3, "sushma@gmail.com", "sus123", "Sushma", "9845862413", "Bangalore"))
    // this.empArray.push(new Employee(4, "sneha@gmail.com", "sneh123", "Sneha", "6723064578", "Bangalore"))
    // this.empArray.push(new Employee(5, "kushboo@gmail.com", "kus123", "Kushboo", "3487459867", "Bangalore"))

    return this.empArray
  }
}
