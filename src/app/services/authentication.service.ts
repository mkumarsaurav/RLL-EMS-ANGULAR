import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
// public employee=new EmployeeService();
constructor(public restApi: RestApiService,private router: Router) { }
ngOnInit() {
 
}


  
  
  // authenticate(username: string, password: string) {
    
  // //  this.employee.email=email;
  // //  this.employee.password=password;
   
  //   // this.restApi.login(this.employee);

  //   if (username === "managar" && password === "anuj") {

  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem('username')
  //   console.log(!(user === null))
  //   return !(user === null)
  // }

  // logOut() {
  //   sessionStorage.removeItem('username')
  // }

  authenticate(username: string, password: string) {
    if (username === "manager" && password === "manager") {
      
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}