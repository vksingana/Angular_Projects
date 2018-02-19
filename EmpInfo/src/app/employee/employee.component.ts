import { Component, OnInit } from '@angular/core';
import { Employee } from './../employee.model';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { RouterModule, Routes } from '@angular/router';
import { FormControl, FormGroup, Validators, FormArray, NgForm } from '@angular/forms';
import { debug } from 'util';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  employees: Employee;
  empRequest: Employee = <Employee>{};
  empid: any;
  allEmployeeData: any;
  selectedempId: any;
  newEmpForm: boolean;
  user: any;
  isSubmit: boolean;
  isClose: boolean;
  empForm: FormGroup;
  isValid: boolean;
  updateEmpid: number;
  statusMessage: string;
  selemp: any;
  showForm: boolean;
  empTable: boolean;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private empFormService: EmployeeService) {
    this.showForm = false;
    this.isValid = false;
    this.isClose = false;
    this.isSubmit = true;
    this.empTable = true;
  }
  add() {
    this.empForm.reset();
    this.showForm = true;
    this.isValid = false;
    this.isClose = true;
    this.isSubmit = true;
  }
  ngOnInit(): void {
    this.empForm = new FormGroup({
      empID: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]),
      jobTitleName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(25)]),
      empName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
      department: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      employeeCode: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]+')]),
      emailAddress: new FormControl('', [Validators.pattern(this.emailPattern)])
    })
    this.getEmpLists();
  }

  close() {
    this.isClose = true;
    this.showForm = false;

  }
  onEmpFormSubmit() {
    this.empRequest = <Employee>{};
    this.empRequest.empID = this.empForm.controls['empID'].value;
    this.empRequest.jobTitleName = this.empForm.controls['jobTitleName'].value;
    this.empRequest.empName = this.empForm.controls['empName'].value;
    this.empRequest.department = this.empForm.controls['department'].value;
    this.empRequest.employeeCode = this.empForm.controls['employeeCode'].value;
    this.empRequest.phoneNumber = this.empForm.controls['phoneNumber'].value;
    this.empRequest.emailAddress = this.empForm.controls['emailAddress'].value;
    this.empFormService.addEmployee(this.empRequest).subscribe(res => {
      console.log(res);
      this.getEmpLists();
      this.showForm = false;
      this.empForm.reset();
    });

    if (this.empForm.invalid) {
      return;
    }
  }

  removeObject() {
    this.empForm.reset();
  }
  getEmpLists() {
    this.empFormService.getEmployeeList().subscribe(res => {
      this.employees = res;
    })
  }

  patchValueData(employeeData) {
    this.empForm.patchValue({
      'empID': employeeData.empID,
      'jobTitleName': employeeData.jobTitleName,
      'empName': employeeData.empName,
      'department': employeeData.department,
      'employeeCode': employeeData.employeeCode,
      'phoneNumber': employeeData.phoneNumber,
      'emailAddress': employeeData.emailAddress,
    });
  }

  updateEmployee() {
    this.showForm = false;
    this.empRequest = <Employee>{};
    this.empRequest.empID = this.empForm.controls['empID'].value;
    this.empRequest.jobTitleName = this.empForm.controls['jobTitleName'].value;
    this.empRequest.empName = this.empForm.controls['empName'].value;
    this.empRequest.department = this.empForm.controls['department'].value;
    this.empRequest.employeeCode = this.empForm.controls['employeeCode'].value;
    this.empRequest.phoneNumber = this.empForm.controls['phoneNumber'].value;
    this.empRequest.emailAddress = this.empForm.controls['emailAddress'].value;
    this.empFormService.updateEmployeeNew(this.updateEmpid, this.empRequest).subscribe(res => {
      console.log(res)
      this.getEmpLists();
    })
  }

  empDelete(empid: any) {
    if (confirm("Are you Sure you want to delete?")) {
      this.empFormService.deleteEmployee(empid).subscribe(res => {
        console.log(res)
        this.getEmpLists();
      })
    }
  }

  editEmployee(person) {
    this.isValid = true;
    this.isClose = true;
    this.showForm = true;
    this.isSubmit = false;
    this.patchValueData(person)
    this.updateEmpid = person.id;
  }
}