import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private workemployee = "http://localhost:8081/api/work";
  private vacation = "http://localhost:8081/api/take-vacation";
  
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>("http://localhost:8081/api/all-employee");
  }

  getEmployeeWork(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.workemployee}/${id}`);
  }

  getEmployeeVacation(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.vacation}/${id}`);
  }

}
