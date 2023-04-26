import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { WorkEmployeeComponent } from './work-employee/work-employee.component';

const routes: Routes = [
  {path:'employees', component: EmployeeListComponent},
  {path:'', redirectTo:'employees', pathMatch: 'full'},
  {path:'view-employee/:id', component: ViewEmployeeComponent },
  {path:'work-employee/:id', component: WorkEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
