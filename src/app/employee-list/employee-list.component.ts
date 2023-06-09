import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) {
    this.employees=[]
   }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees()  {
    this.employeeService.getEmployeeList().subscribe(data  => {
      this.employees = data;
    });
  }

  workEmployee(id: number){
    this.router.navigate(['work-employee', id]);
  }

  viewEmployee(id: number){
    console.log(id);
    this.router.navigate(['view-employee', id]);
  }
}
