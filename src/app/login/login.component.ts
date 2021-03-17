import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  
  incorrect:string='';
  logindetails;
  
  constructor(private service:EmployeeService,private router:Router) { }

  ngOnInit() {
    document.body.className="bg-img";
  }

  OnReg()
  {
    //register
    this.router.navigate(['/register'])
  }

  
  onSubmit(f){
    console.log("Email Id "+f.value.email);
    console.log("Email Id "+f.value.password);
    let obj={
      email:f.value.email,
      password:f.value.password
    }
    this.service.loginCheck(obj)   
    .subscribe((response)=>{

      console.log(response);
      //let msg=(<string>response.msg);
      this.logindetails=(<any>response);
      
      if(this.logindetails.msg==="valid user"){

        sessionStorage.setItem("username",this.logindetails.user.username); 
        this.router.navigate(['/home']);

      }else{
        this.incorrect=this.logindetails.msg;
      }

    }) 


  }

}
