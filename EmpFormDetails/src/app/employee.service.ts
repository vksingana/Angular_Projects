import { Employee } from './employee.interface';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject'
import { debuglog } from 'util';

@Injectable()
export class EmployeeService {
  resn: Observable<Response>;
  employeeData: any;

  baseURL = "http://localhost:3000/Employees";
  constructor(private http: Http) { }

  getEmpList(): Observable<Employee> {
    return this.http.get(this.baseURL).map(res => res.json());
  }

  addEmp(empObj: Employee): Observable<Response> {
    return this.http.post(this.baseURL, empObj).map(res => res.json());
  }

  updateEmp(id, empObj): Observable<Response> {
    return this.http.put(this.baseURL + '/' + id, empObj).map(res => res.json());
  }

  deleteEmp(id) {
    return this.http.delete(this.baseURL + '/' + id).map(res => res.json());
  }

  getEmp(id: number): Observable<any> {
    this.resn = this.http.get(this.baseURL + '/' + id).map(res => res.json());
    return this.resn;
  }
  patchValueData(employeeData) {
    this.employeeData = employeeData;
  }
}
