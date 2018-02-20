import { Employee } from './employee.interface';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
  empForm: any;
  
  baseURL = "http://localhost:3000/Employees";
  constructor(private http: Http) { }

  getEmpList(): Observable<Employee> {
    return this.http.get(this.baseURL).map(res => res.json());
  }

  addEmp(empObj: Employee): Observable<Response> {
    // debugger
    return this.http.post(this.baseURL, empObj).map(res => res.json());
  }

  updateEmp(id, empObj): Observable<Response> {
    return this.http.put(this.baseURL + '/' + id, empObj).map(res => res.json());
  }

  deleteEmp(id) {
    return this.http.delete(this.baseURL + '/' + id).map(res => res.json());
  }

  patchValueData(employeeData) {
    debugger
    this.empForm.patchValue({
      'empID': employeeData.empID,
      'jobTitle': employeeData.jobTitle,
      'empName': employeeData.empName,
      'department': employeeData.department,
      'phone': employeeData.phone,
      'email': employeeData.email,
    });
  }
}
