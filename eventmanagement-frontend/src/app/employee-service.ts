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
    return this.http.post<String>('http://localhost:8080/adminlogin/', admin, { responseType: 'text' as 'json' });

  }

  addEmployee(employee: Employee) {
    console.log("Add employee")
    return this.http.post<String>('http://localhost:8080/addemployee/', employee, { responseType: 'text' as 'json' });

  }
  checkforUser(employee: Employee) {
    console.log("Calling the service")
    return this.http.post<String>('http://localhost:8080/login/', employee, { responseType: 'text' as 'json' });
  }

  empArray: Employee[] = []
  constructor(public http: HttpClient, private router: Router) { }

  
}
