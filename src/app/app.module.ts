import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './services/rest-api.service';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { LeaveDetailsOfSpecificEmployeeComponent } from './leave-details-of-specific-employee/leave-details-of-specific-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LeaveDetailsComponent,
    ApplyLeaveComponent,
    EmployeeSearchComponent,
    LeaveDetailsOfSpecificEmployeeComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
