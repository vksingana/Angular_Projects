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

  constructor(private empService: EmployeeService) {
    this.empService.getEmpList();
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

  deleteEmp(id) {
    if (confirm("Are you Sure you want to delete?")) {
      this.empService.deleteEmp(id).subscribe(res => {
        console.log(res)
        this.empService.getEmpList();
      })
    }
  }
}
