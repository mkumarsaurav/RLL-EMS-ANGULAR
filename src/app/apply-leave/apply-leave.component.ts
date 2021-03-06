import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  currentUserId: any;
  currentUserName: any;
  public today = new Date();
  public tillDate = new Date(this.today.getTime() + (1000 * 60 * 60 * 240));
  @Input() leaveDetails = { eid: 0, fromDate: '', toDate: '', leaveComment: '', leaveType: '' }
  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
    this.currentUserId = sessionStorage.getItem('email');
    this.currentUserName = sessionStorage.getItem('fname');
    if (this.currentUserId === null) {
      this.router.navigate(['login']);
    }
  }

  addLeave() {
    this.restApi.applyLeave(this.leaveDetails).subscribe((data: {}) => {
      this.router.navigate(['/applyLeave'])
    })
  }
}