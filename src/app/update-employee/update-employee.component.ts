import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../country';
import { ToastrService  } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  @Input() parentdata={
    id:0,
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
  };
  issubmitDissabled:boolean=true;
  country2:Country[];
  selectvalue;
id:number;
employee:Employee= new Employee();
employee1={id:0,
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
    private route:ActivatedRoute,
    private toast:ToastrService) { }

  ngOnInit() {
   this.getCountries();

  //  this.route.queryParamMap
  //  .subscribe(query =>
  //   {
  //     console.log(this.parentdata);
  //     console.log("the id is "+this.parentdata.id);
  //     this.employee1.id= this.parentdata.id;
  //     console.log("new id is " + this.employee1.id);
  //     this.employee1.name= this.parentdata.name;
  //     this.employee1.phoneno= this.parentdata.phoneno;
  //     this.employee1.departmentit= this.parentdata.departmentit;
  //     this.employee1.status= this.parentdata.status;
  //     this.employee1.createddtm= this.parentdata.createddtm;
  //     this.employee1.createdby= this.parentdata.createdby;
  //     this.employee1.updateddtm= this.parentdata.updateddtm;
  //     this.employee1.updatedby= this.parentdata.updatedby;
  //     this.employee1.country=this.parentdata.country;
      
  //   })
 
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
  OnSubmit()
  {
    this.update();
  }
  update()
  {
    // let obj = {
    //   empId:this.parentdata.id,
    //   empName:this.parentdata.name,
    //   empPhone:this.parentdata.phoneno,
    //   empDepartment:this.parentdata.departmentit,
    //   empStatus:this.parentdata.status,
    //   createdby:this.parentdata.createdby,
    //   updatedby:this.parentdata.updatedby,
    //   country: {
    //   cid:this.parentdata.country.cid,
    //   cname:this.parentdata.country.cname
    //          }     
    // }
    
    //this.parentdata.createddtm=Date.now();
    this.parentdata.updateddtm=Date.now();
    this.parentdata.country.cid=this.selectvalue.cid;
      this.parentdata.country.cname=this.selectvalue.cname;
    this.employeeservice.updateEmployee(this.parentdata).subscribe(data=>
      {
        this.issubmitDissabled=false;
        console.log("this is what is updating ");
        console.log(data);
        //this.employee1=(<any>data);
        console.log("data got updated successfully")
        console.log(data);
        console.log("go to homepage");
        this.OnHome();
        this.toast.success('Record updated successfully');
      })
  }
  OnHome()
  {
    this.router.navigate(['/home']);
  }


}
