import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  Employee: any = [];

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  currentUserId: any;
  currentUserName: any;

  ngOnInit() {
    this.currentUserId = sessionStorage.getItem('email');
    this.currentUserName = sessionStorage.getItem('fname');
    // if (this.currentUserId === null) {
    //   this.router.navigate(['login']);
    // }
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }

  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe((data: any) => {
        this.loadEmployees()
      })
    }
  }

}