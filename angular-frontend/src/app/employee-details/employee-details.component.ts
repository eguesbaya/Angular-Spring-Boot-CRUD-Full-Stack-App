import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  id: number;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  employeeExists(): boolean {
    if (this.employee.id == null) {
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }
}
