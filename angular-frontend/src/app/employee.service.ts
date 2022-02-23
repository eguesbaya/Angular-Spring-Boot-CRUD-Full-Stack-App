import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8000/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(){
    return this.httpClient.get<Employee[]>(this.baseURL);
  }
}
