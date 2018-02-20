import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.interface'
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  empForm: any;
  employees: Employee;
  updateEmpid: any;

  constructor(private empService: EmployeeService , private router: Router) {
    this.getEmpLists();
  }

  ngOnInit() {
  }

  editEmp(emp) {
    this.empService.patchValueData(emp);
    this.router.navigate(['addEmp']);
  }

  getEmpLists() {
    this.empService.getEmpList().subscribe(res => {
      this.employees = res;
    });
  }
  deleteEmp(id) {
    if (confirm("Are you Sure you want to delete?")) {
      this.empService.deleteEmp(id).subscribe(res => {
        console.log(res)
        this.getEmpLists();
      })
    }
  }
}
