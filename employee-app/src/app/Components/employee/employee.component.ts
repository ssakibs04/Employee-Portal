import { Component, ElementRef, inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  @ViewChild('myModal')model :ElementRef | undefined;
employeeList :Employee[] = [];
empService = inject(EmployeeService);
  employeeForm: FormGroup = new FormGroup({});

  constructor(private fb :FormBuilder) { }
ngOnInit(): void {
this.setformState();
this.getEmployees();

}
  openModal(){
    const empModel=document.getElementById('myModal');
    if(empModel!=null){
      empModel.style.display='block';
    }
  }

  closeModal(){
  if(this.model!=null){
    this.model.nativeElement.style.display='none';
  }
  }
  getEmployees(){
    this.empService.getAllEmployee().subscribe((data)=>
      {
        this.employeeList=data;

      });
  }
  setformState(){
this.employeeForm= this.fb.group({
  id:[0],
  name:['',[Validators.required]],
  email:['',[Validators.required]],
  mobile:['',[Validators.required]],
  age:['',[Validators.required]],
  salary:['',[Validators.required]],
  status:[false,[Validators.required]]


});

  }
formValue:any
  onSubmit(){
    console.log(this.employeeForm.value);

    if(this.employeeForm.invalid)
      {
        alert("Invalid Data");
        return;
      }
      this.formValue=this.employeeForm.value;
      this.empService.addEmployee(this.formValue).subscribe((data)=>{
alert("Employee Added Successfully");
this.getEmployees();
this.employeeForm.reset();
this.closeModal();
});
  }
}
