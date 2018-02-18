import { PageNotFoundComponent } from './not-found.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { EmployeeService } from './employee.service';

const empRoutes: Routes = [
    {
        path: 'addEmp',
        component: EmployeeFormComponent
    },
    {
        path: '',
        component: EmployeelistComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
    {
        path: 'emplist',
        component: EmployeelistComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            empRoutes
        )
    ],

    exports: [
        RouterModule
    ],

    providers: [
        EmployeeService
    ]
})

export class EmpRoutingModule { }