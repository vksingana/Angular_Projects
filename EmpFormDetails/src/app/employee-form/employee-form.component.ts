import { EmployeelistComponent } from './../employeelist/employeelist.component';
import { EmpdetailsComponent } from '../empdetails/empdetails.component'
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from './../employee.interface';
import { EmployeeService } from './../employee.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  isForm: boolean
  isSubmit: boolean
  isUpdate: boolean
  isClose: boolean
  empForm: FormGroup
  employees: Employee
  empRequest: Employee = <Employee>{}
  employeeData: Employee;
  id: number;

  constructor(private empService: EmployeeService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.isSubmit = true;
    this.isForm = true;
    this.isUpdate = false;
    this.isClose = true;
  }

  ngOnInit() {

    this.empForm = this.formBuilder.group({
      empID: new FormControl('', [Validators.required, Validators.minLength(4)]),
      jobTitle: new FormControl('', [Validators.required]),
      empName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      department: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[-][0-9]'), Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
    })

    this.employeeData = this.empService.employeeData
    if (this.employeeData) {
      this.id = this.employeeData.id
      this.isSubmit = false;
      this.isUpdate = true;
      this.isClose = true;
      this.empForm.patchValue({
        'empID': this.employeeData.empID,
        'jobTitle': this.employeeData.jobTitle,
        'empName': this.employeeData.empName,
        'department': this.employeeData.department,
        'phone': this.employeeData.phone,
        'email': this.employeeData.email,
      });
    }
  }

  addEmpForm(empForm) {
    this.empRequest = <Employee>{};
    this.empRequest.empID = this.empForm.controls['empID'].value;
    this.empRequest.jobTitle = this.empForm.controls['jobTitle'].value;
    this.empRequest.empName = this.empForm.controls['empName'].value;
    this.empRequest.department = this.empForm.controls['department'].value;
    this.empRequest.phone = this.empForm.controls['phone'].value;
    this.empRequest.email = this.empForm.controls['email'].value;
    this.empService.addEmp(this.empRequest).subscribe(res => {
      console.log(res);
      this.empForm.reset();
    });
    this.empService.getEmpList();
    this.router.navigate(['']);
  }

  updateEmpForm(empdata) {
    debugger
    this.empRequest.empID = this.empForm.controls['empID'].value;
    this.empRequest.jobTitle = this.empForm.controls['jobTitle'].value;
    this.empRequest.empName = this.empForm.controls['empName'].value;
    this.empRequest.department = this.empForm.controls['department'].value;
    this.empRequest.phone = this.empForm.controls['phone'].value;
    this.empRequest.email = this.empForm.controls['email'].value;
    this.empService.updateEmp(this.id, this.empRequest).subscribe(res => {
      console.log(res);
      this.empService.getEmpList();
      this.empForm.reset();
      this.router.navigate(['']);
    });
  }

  resetEmpForm() {
    this.empForm.reset();
  }

  closeEmpForm() {
    this.empForm.reset();
    this.router.navigate(['']);
  }
}