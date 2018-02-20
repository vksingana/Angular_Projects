import { Employee } from './employee.interface';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    baseURL = "http://localhost:3000/Employees";
    constructor(private http: Http) { }

    
    
}