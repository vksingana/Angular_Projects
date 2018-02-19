import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Employee } from './employee.model';
import { map } from 'rxjs/operator/map';

@Injectable()
export class EmployeeService {
  resp: any;
  _baseURL = "http://localhost:3000/Employees";

  constructor(private http: Http) {
  }

  getEmployeeList(): Observable<any> {
    return this.http.get(this._baseURL).map(res => res.json());
  }

  addEmployee(emp: Employee): Observable<any> {
    return this.http.post(this._baseURL, emp).map(res => res.json());
  }

  getEmployeeById(empID: number): Observable<any> {
    console.log(this._baseURL + "/" + empID);
    return this.http.get(this._baseURL + "/" + empID)
      .map(res => res.json())
  }

  updateEmployeeNew(id, emp): Observable<Response> {
    this.resp = this.http.put(this._baseURL + `/` + id, emp).map(res => res.json());
    return this.resp;
  }

  deleteEmployee(id: any): Observable<any> {
    return this
      .http
      .delete(this._baseURL + `/` + id)
      .map(res => res.json());
  }
}
