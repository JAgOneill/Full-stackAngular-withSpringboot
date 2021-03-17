import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthGuard } from './auth.guard';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterNewAdminComponent } from './register-new-admin/register-new-admin.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"register",
    component:RegisterNewAdminComponent,
    
  },
  {
    path:"termsandcondition",
    component:TermsandconditionComponent,
    
  },
  {
    path:"AddEmployee",
    component:AddEmployeeComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"EmployeeDetails/:id",
    component:EmployeeDetailsComponent,
    canActivate:[AuthGuard]
  },

  {
    path:"login",
    component:LoginComponent
  },
  // {
  //   path:"UpdateEmployee/:id",
  //   component:UpdateEmployeeComponent,
    
    
  // },
  
  {
    path:"**",
    component:PageNotFoundComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
