import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {

  constructor(private aroute : ActivatedRoute, private router: Router) { }
  currentUserId: any;
  currentUserName: any;
  ngOnInit(): void {
    this.currentUserId = sessionStorage.getItem('email');
    this.currentUserName = sessionStorage.getItem('fname');
    // if (this.currentUserId === null) {
    //   this.router.navigate(['login']);
    // }
  }

  addEmployee(){
    this.router.navigate(['createEmployee'],{relativeTo :this.aroute});
}
getEmployees(){
  this.router.navigate(['employeeDetails'],{relativeTo :this.aroute});
}
getLeave(){
  this.router.navigate(['getLeave'],{relativeTo :this.aroute});
}

}
