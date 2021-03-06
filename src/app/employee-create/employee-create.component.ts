import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  // currentUserId: any;
  // currentUserName: any;

  @Input() employeeDetails = { eid: '', fname: '', lname: '', age: '', gender: 'F', email: '', username: '', password: '', role: '', phoneNumber: '', address: '' }
  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
    // this.currentUserId = sessionStorage.getItem('email');
    // this.currentUserName = sessionStorage.getItem('fname');
    // if (this.currentUserId === null) {
    //   this.router.navigate(['login']);
    // }
  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employeeDetails'])
    })
  }
}