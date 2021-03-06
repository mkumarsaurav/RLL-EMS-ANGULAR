import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-leave-details',
  templateUrl: './leave-details.component.html',
  styleUrls: ['./leave-details.component.css']
})
export class LeaveDetailsComponent implements OnInit {
  currentUserId: any;
  currentUserName: any;
  leaveData: any = {};
  Leave: any = [];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.currentUserId = sessionStorage.getItem('email');
    this.currentUserName = sessionStorage.getItem('fname');
    if (this.currentUserId === null) {
      this.router.navigate(['login']);
    }
    this.loadLeaves()
  }


  loadLeaves() {
    return this.restApi.getLeaves().subscribe((data: {}) => {
      this.Leave = data;
    })
  }


  rejectLeave(leaveId: any) {
    if (window.confirm('Are you sure, you want to Reject?')) {
      this.restApi.rejectLeave(leaveId).subscribe((data: any) => {
        this.loadLeaves()
      })
    }
  }
  approveLeave(leaveId: any) {
    if (window.confirm('Are you sure, you want to Approve?')) {

      this.restApi.approveLeave(leaveId).subscribe((data: any) => {
        this.loadLeaves()
      })
    }
  }
}

