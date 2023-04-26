import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkEmployeeComponent } from './work-employee.component';

describe('WorkEmployeeComponent', () => {
  let component: WorkEmployeeComponent;
  let fixture: ComponentFixture<WorkEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
