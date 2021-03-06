import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  constructor(public router: Router) { }

  currentUserId: any;
  currentUserName: any;

  ngOnInit(): void {
    this.currentUserId = sessionStorage.getItem('email');
    this.currentUserName = sessionStorage.getItem('fname');
    if (this.currentUserId === null) {
      this.router.navigate(['login']);
    }
  }

}
