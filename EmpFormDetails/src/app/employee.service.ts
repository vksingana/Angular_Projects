import { Employee } from './employee.interface';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { Employee } from 'employee';

@Injectable()
export class EmployeeService {

  baseURL = "http://localhost:3000/Employees";
  constructor(private http: Http) { }

  getEmpList(): Observable<any> {
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
}
