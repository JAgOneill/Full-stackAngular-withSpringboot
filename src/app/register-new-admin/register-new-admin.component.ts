import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register-new-admin',
  templateUrl: './register-new-admin.component.html',
  styleUrls: ['./register-new-admin.component.css']
})
export class RegisterNewAdminComponent implements OnInit {

  datasend:String;
  modalRef: BsModalRef;
config = {
  animated: true,
  
  ignoreBackdropClick: true,
  class: "alert alert-dark"
};
register={  
    firstname:'' ,
    lastname:'' ,
    email:'' ,
    username:'',
    password:'',
    phoneno:'' ,
    gender:'',
    address:'',
    city:'',
    createddtm:0
}
  constructor(private employeeservice:EmployeeService,
    private router:Router,
    private toast:ToastrService,
    private modalservice:BsModalService) { }

  ngOnInit() {
  }
  Onterms(popUp:TemplateRef<any>)
  {
    console.log("hi");
this.modalRef=this.modalservice.show(popUp,this.config);

  }

  goLogin()
  {
    this.router.navigate(['/login']);
  }
  AddNewAdmin()
  {
   this.register.createddtm=Date.now();

   //this.employee1.country.cid=this.selectvalue.cid;
   //this.employee1.country.cname=this.selectvalue.cname;
    console.log(this.register.firstname);
    this.employeeservice.addNewReg(this.register).subscribe(data=>{
      console.log("response ");
      console.log(data);
      this.register=(<any>data);
      console.log("data got saved successfully")
      console.log(data);
      this.toast.success('Record Added successfully');
      console.log("go to homepage");
      //this.OnHome();
      

   },
   error=>console.log(error));
  }


}
