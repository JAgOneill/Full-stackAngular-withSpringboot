import { EmployeeService } from './../employee.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Component, OnInit, TemplateRef } from '@angular/core';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  modalRef: BsModalRef;
config = {
  animated: true,
  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};
  empobj=
  {id:0,
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
      

  constructor(private route:ActivatedRoute,private service:EmployeeService,private modalservice:BsModalService) { }

  ngOnInit() {
  this.getEmployeeDetails();
  }

  getEmployeeDetails()
  {
    this.route.paramMap.subscribe((param)=>
    {
      this.empobj.id=+param.get("id");
      this.getEmployeebyid1(this.empobj.id);
      
    })

  }

  getEmployeebyid1(id:number)
  {
    this.service.getemployeebyid(id).subscribe((response)=>
    {
      this.empobj=(<any>response);
    })

  }


  OnUpdate(popUp:TemplateRef<any>)
  {
    console.log(this.empobj);
    this.modalRef = this.modalservice.show(        
      popUp, this.config); 
  }

}
