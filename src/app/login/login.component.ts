import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerHomeComponent } from '../manager-home/manager-home.component';

import { EmployeeService } from '../services/employee.service';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: any;
  public password: any;
  public user: any = [];
  sessionStorage: any;

  public check: any;
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {

  }

  Login(username: string, password: string) {
    this.restApi.authenticate(this.username, this.password).subscribe((data: {}) => {
      this.user = data;

      if (this.user[0] == "Manager") {
        alert("hii" + this.user[0]);
        alert("email" + this.user[1]);
       sessionStorage.setItem('email', this.user[1]);
       //alert("1st Lenght" + sessionStorage.length);
       sessionStorage.setItem('fname', this.user[2]);
       //alert("2nd length" + sessionStorage.length);
        this.router.navigate(['managerHome']);
      }
      else if (this.user[0] == "Employee") {
        alert("hii" + this.user[0]);
        alert("email" + this.user[1]);
    //    sessionStorage.setItem('email', this.user[1]);
    //    alert("1st Lenght" + sessionStorage.length);
    //    sessionStorage.setItem('fname', this.user[2]);
        this.router.navigate(['employeeHome']);

      } else {


        this.router.navigate(['login']);


      }
    })
  }


}