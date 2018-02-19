import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
  
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavigationComponent } from './navigation/navigation.component';

import { EmployeeService } from './employee.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
