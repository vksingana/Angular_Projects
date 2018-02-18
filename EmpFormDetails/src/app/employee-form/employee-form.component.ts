import { Employee } from './../employee.interface';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  isForm: boolean
  isSubmit:boolean
  isUpdate: boolean
  isClose: boolean
  empForm: FormGroup
  employees: Employee
  empRequest: Employee = <Employee>{}

  constructor(private empService: EmployeeService) {
    this.isSubmit = true;
    this.isForm = true;
    this.isUpdate = false;
    this.isClose = true;
  }

  ngOnInit() {
    this.empForm = new FormGroup({
      empID: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
      jobTitle: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
      empName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      department: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      employeeCode: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    })
  }
  addEmpForm() {
    this.empRequest = <Employee>{};
    this.empRequest.empID = this.empForm.controls['empID'].value;
    this.empRequest.jobTitle = this.empForm.controls['jobTitle'].value;
    this.empRequest.empName = this.empForm.controls['empName'].value;
    this.empRequest.department = this.empForm.controls['department'].value;
    this.empRequest.phone = this.empForm.controls['phone'].value;
    this.empRequest.email = this.empForm.controls['email'].value;
    this.empService.addEmp(this.empRequest).subscribe(res => {
      console.log(res);
      this.isForm = false;
      this.empForm.reset();
      this.getEmpLists();
    });
  }

  getEmpLists() {
    this.empService.getEmpList().subscribe(res => {
      this.employees = res;
    });
  }

  resetEmpForm() {
    this.empForm.reset();
  }

  closeEmpForm() {
    this.isForm = false;
    this.getEmpLists();
  }
}
