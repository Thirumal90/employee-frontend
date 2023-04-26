import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { WorkEmployeeComponent } from './work-employee/work-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ViewEmployeeComponent,
    WorkEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
