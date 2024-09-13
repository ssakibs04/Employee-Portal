import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private apiurl =  'https://localhost:7084/api/Employee' 

  constructor() { }
  http=inject(HttpClient)
  getAllEmployee(){
    return this.http.get<Employee[]>(this.apiurl)
  }
  addEmployee(data:any){
    return this.http.post(this.apiurl,data)
  }
}
