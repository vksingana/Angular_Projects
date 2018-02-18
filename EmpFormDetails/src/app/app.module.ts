import { EmployeeService } from './employee.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EmpRoutingModule } from './employee-routing.module'

import { Employee } from './employee.interface'
import { Input } from '@angular/core'


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PageNotFoundComponent } from './not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EmployeeFormComponent,
    EmployeelistComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    EmpRoutingModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }