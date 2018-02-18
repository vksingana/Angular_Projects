import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.interface'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  empForm: any;
  employees: Employee


  constructor(private empService: EmployeeService) {
    this.getEmpLists();
  }

  ngOnInit() {
  }

  editEmp(emp) {
    this.patchValueData(emp);
  }

  patchValueData(employeeData) {
    this.empForm.patchValue({
      'empID': employeeData.empID,
      'jobTitle': employeeData.jobTitle,
      'empName': employeeData.empName,
      'department': employeeData.department,
      'phone': employeeData.phone,
      'email': employeeData.email,
    });
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
