import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-work-employee',
  templateUrl: './work-employee.component.html',
  styleUrls: ['./work-employee.component.css']
})
export class WorkEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id: number = 0;
  constructor(private employeeService: EmployeeService, private router: Router,
    private route: ActivatedRoute) { }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeWork(this.id).subscribe(data =>{
      this.employee = data;
    });
  }

}
