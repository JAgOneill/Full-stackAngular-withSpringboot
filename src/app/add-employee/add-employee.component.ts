import { Country } from './../country';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService  } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
employee:Employee= new Employee();
country1:Country=new Country();
country2:Country[];
selectvalue;
// we have created an object of employee here 
employee1={
  name:'',
  phoneno:'',
  departmentit:'',
    status:'',
    createddtm:0,
    createdby:'',
    updateddtm:0,
     updatedby:'',
     country:{
      cid:0,
       cname:''
     }
       
     }
     
  constructor(private router:Router,private employeeservice:EmployeeService,
    private toast:ToastrService) { }

  ngOnInit() {
    this.getCountries();
  }


  getCountries()
  {
    this.employeeservice.getCountry().subscribe((data:Country[])=>
    {
      console.log(data);
      this.country2=data;

  
    })
  }
  changecountry()
  {
  console.log(this.selectvalue);
  }

  SaveEmployee()
  {
   this.employee1.createddtm=Date.now();
   this.employee1.updateddtm=Date.now();
   this.employee1.createdby=sessionStorage.getItem("username");
   console.log(this.employee1.createdby);
   this.employee1.updatedby=sessionStorage.getItem("username");
   this.employee1.country.cid=this.selectvalue.cid;
   this.employee1.country.cname=this.selectvalue.cname;
    console.log(this.employee1.name);
    this.employeeservice.addEmployee(this.employee1).subscribe(data=>{
      console.log("response ");
      console.log(data);
      this.employee1=(<any>data);
      console.log("data got saved successfully")
      console.log(data);
      this.toast.success('Record Added Successfully!');
      console.log("go to homepage");
      this.OnHome();
      

   },
   error=>console.log(error));
  }

  
  OnHome()
  {
    this.router.navigate(['/home'])
  }
  OnSubmit()
  {
    console.log("we are in submit method");
    console.log(this.employee1);
    this.SaveEmployee();
  }



}
