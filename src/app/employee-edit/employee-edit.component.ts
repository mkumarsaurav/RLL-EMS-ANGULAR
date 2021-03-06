import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  eid = this.actRoute.snapshot.params['eid'];
  employeeData: any = {};
  currentUserId: any;
  currentUserName: any;
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.currentUserId = sessionStorage.getItem('email');
    this.currentUserName = sessionStorage.getItem('fname');
    if (this.currentUserId === null) {
      this.router.navigate(['login']);
    }
    this.restApi.getEmployee(this.eid).subscribe((data: {}) => {
      this.employeeData = data;
    })
  }

  // Update employee data
  updateEmployee() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateEmployee(this.eid, this.employeeData[0]).subscribe((data: any) => {
        this.router.navigate(['/employeeDetails'])
      })
    }
  }

}
