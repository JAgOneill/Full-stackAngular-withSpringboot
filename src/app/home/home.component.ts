import { UpdateEmployeeComponent } from './../update-employee/update-employee.component';
import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DialogService } from '../shared/dialog.service';
import { ToastrService  } from 'ngx-toastr';


//import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// lets create a property which will hold a repsonse of REST API.
private updateurl='http://localhost:8081/api/updateemployee';
employee:Employee[];
item2:any;
myid:number;
suspendresponse;
searchText:string='';
status1:String='';
modalRef: BsModalRef;
config = {
  animated: true,
  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};
RadioSelect=null;
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
  incorrect1: any;
    
    
// we need to inject Employee service class here 

  constructor(private router:Router,private employeeservice:EmployeeService,
    private route:ActivatedRoute,private modalservice:BsModalService,
    private http:HttpClient,
    private dialogservice:DialogService,
    private toast:ToastrService) { }

  ngOnInit() 
    {
    
    this.getAllemployee();
  
    }
  // getAllEmployee gets all data using fat arrow function

getAllemployee()
{
  this.employeeservice.getEmployee().subscribe((data:Employee[])=>
  {
    console.log(data);
    this.employee=data;

  })
}

  

  OnAddEmployee()
  {
    this.router.navigate(['/AddEmployee'])
  }

  onRadioClick(item1)
  {
    this.myid=item1.id;
    this.RadioSelect=item1.name;
  console.log(item1);
  this.employee1=item1;

  }
  radioValidation(){
    if(this.RadioSelect!=null){
      return true;
    }
    return false;
  }

  onUpdateEmployee(popUp:TemplateRef<any>)
  {
    if(this.radioValidation()){
      
      console.log(this.myid);
     // this.onRadioClick(this.item2);
     //this.router.navigate(['/UpdateEmployee',this.myid]);
     this.modalRef = this.modalservice.show(        
      popUp, this.config); 
      console.log("onupdatesuccessfull");
      this.toast.success('Record updated successfully');
    }
  else{
    this.toast.info('Please Select a Record First!');

  }
}
  
  OnDeleteEmployee(id)
  {
    if(this.radioValidation()){
   // this.onRadioClick(this.item2);
   console.log(3);
   this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
   .afterClosed()
      .subscribe(res=>{
        console.log(res);
        if(res){
          //here call the delete the service
            //in delete service subscribe method you have to call toastr
            this.employeeservice.deleteEmployee(this.myid).subscribe
              (data=>{
                console.log(data);
                this.getAllemployee();
                this.toast.warning('Record Deleted Successfully!');
                
              })
             console.log("deleted successfully"); 
          
        }
      })
   
  //   
  }

else{
  this.toast.info('Please Select a Record First!');
}
  }

  onChangeStatus(id)
  {
    if(this.radioValidation()){

    console.log(this.myid);
    this.dialogservice.OpenConfirmDialog('Are you sure to Suspend this Employee?')
.afterClosed()
      .subscribe(res=>{
        console.log(res);
        if(res){
          this.employeeservice.updateStatus(this.myid,this.employee1).subscribe(data=>
              {
                this.employee1=(<any>data);
                //this.employee1.id=data.id;
                //this.employee1.name=(<string>data.name);
                console.log(data);
                console.log(this.employee1);
                this.getAllemployee();
                
              }
              )
          //here call the delete the service
            //in delete service subscribe method you have to call toastr
            
          
        }
      })

    // 
    
  }
  else{
    this.toast.info('Please Select a Record First!');
  }
  

}



onNewStatus(id)
{
  {
    if(this.radioValidation()){

    console.log(this.myid);
    this.dialogservice.OpenConfirmDialog('Are you sure to change status of this Employee?')
.afterClosed()
      .subscribe(res=>{
        console.log(res);
        if(res){
          this.employeeservice.NewStatus(this.employee1).subscribe(data=>
              {
                this.employee1=(<any>data);
                this.suspendresponse=(<any>data);
                console.log(data);
                if(data==="Suspended Employee Cannot be Activated"){

                  this.toast.error('Suspended Employee Cannot be Activated');
          
                }else{
                  this.incorrect1=this.suspendresponse.msg;
                }
                console.log(this.employee1);
                this.getAllemployee();
                
              }
              )
          //here call the delete the service
            //in delete service subscribe method you have to call toastr
            
          
        }
      })

    // 
    
  }
  else{
    this.toast.info('Please Select a Record First!');
  }
  

}

}

onLogout()
{
  this.router.navigate(['/login'])
}





}
