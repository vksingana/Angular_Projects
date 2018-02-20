import { Employee } from './../employee.interface';
import { Route } from '@angular/router/src/config';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  person: Employee = <Employee>{};
  constructor(private empService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getEmpID(params['id']);
    })
  }

  getEmpID(id) {
    this.empService.getEmp(id).subscribe(res => {
      this.person = res;
    })
  }

  close() {
    this.router.navigate(['']);
  }

  edit(emp) {
    this.empService.patchValueData(emp);
    this.router.navigate(['addEmp']);
  }
}
