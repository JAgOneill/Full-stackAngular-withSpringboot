import { Country } from './country';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8081/api/getallemployee';
  private addempurl ='http://localhost:8081/api/addemployee';
  private addnewRegurl='http://localhost:8081/api/addnewreg';
  private getempidurl='http://localhost:8081/api/getemployeebyid/';
  private updateurl='http://localhost:8081/api/updateemployee';
  private updatestatusurl='http://localhost:8081/api/suspendemployee/';
  private changestatusurl='http://localhost:8081/api/changestatus';
  private deleteurl='http://localhost:8081/api/deletemployeebyid/';
  private loginurl='http://localhost:8081/api/';
  private getcountryurl='http://localhost:8081/api/getallcountry';

  constructor(private http:HttpClient) { }
  country1:Country = new Country();




  //get data 
  getEmployee(): Observable<Employee[]> {  
     
    return this.http.get<Employee[]>(this.baseUrl); 
  }  

getCountry():Observable<Country[]>{
  return this.http.get<Country[]>(this.getcountryurl);
}

  //add employee method
  addEmployee(employee)
  {
    console.log("we are in add method");
    console.log(employee);
    console.log("reading data");
  return this.http.post(`${this.addempurl}`,employee,{responseType:'text'}); 
    
  }



  addNewReg(register)
  {
    console.log("we are in add method");
    console.log(register);
    console.log("reading data");
  return this.http.post(`${this.addnewRegurl}`,register,{responseType:'text'}); 
    
  }
  // get employee by id 
  getemployeebyid(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.getempidurl}+${id}`);
  }
   updateStatus(id:number,employee){
    return this.http.put(`${this.updatestatusurl}+${id}`,employee,{responseType:'text'});
  }


  NewStatus(employee){
    return this.http.put(`${this.changestatusurl}`,employee,{responseType:'text'});
  }

  updateEmployee(employee)
  {
    return this.http.put(this.updateurl,employee,{responseType:'text'});
  }
  deleteEmployee(id:number){
    return this.http.delete(`${this.deleteurl}+${id}`,{responseType:'text'});
  }
  loginCheck(obj){
    return ( this.http.post(this.loginurl+"logincheck",obj));
   }
 
}
