import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { EmployeeService } from './employee.service';
import { LeaveService } from './leave.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8005/LeaveManagement';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  getEmployees(): Observable<EmployeeService> {
    return this.http.get<EmployeeService>(this.apiURL + '/allemp')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  login(employee: any): Observable<any> {
    return this.http.get(this.apiURL + '/login', employee);
  }
  getEmployee(eid: any): Observable<EmployeeService> {
    return this.http.get<EmployeeService>(this.apiURL + '/search/' + eid)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  createEmployee(employee: any): Observable<EmployeeService> {
    return this.http.post<EmployeeService>(this.apiURL + '/create', JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  updateEmployee(eid: any, employee: EmployeeService): Observable<EmployeeService> {
    return this.http.put<EmployeeService>(this.apiURL + '/update', JSON.stringify(employee), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  deleteEmployee(eid: any) {
    return this.http.delete<EmployeeService>(this.apiURL + '/delete/' + eid, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  getLeaves(): Observable<LeaveService> {
    return this.http.get<LeaveService>(this.apiURL + '/getLeave')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  approveLeave(leaveId: any): Observable<LeaveService> {
    return this.http.put<LeaveService>(this.apiURL + '/approveLeave/' + leaveId, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  rejectLeave(leaveId: any): Observable<LeaveService> {
    return this.http.put<LeaveService>(this.apiURL + '/rejectLeave/' + leaveId, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  authenticate(username: string, password: string): Observable<EmployeeService>{
    
    return this.http.get<EmployeeService>(this.apiURL + `/login/${username}/${password}`, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  applyLeave(leave: any): Observable<LeaveService> {
    return this.http.post<LeaveService>(this.apiURL + '/applyLeave', JSON.stringify(leave), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
