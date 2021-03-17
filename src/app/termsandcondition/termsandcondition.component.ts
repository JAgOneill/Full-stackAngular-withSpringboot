import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.css']
})
export class TermsandconditionComponent implements OnInit {
@Input() parentdata;
  constructor(private router:Router) { }

  ngOnInit() {
    console.log("inside terms and condition");
    console.log(this.parentdata);
  }
  OnClose()
  {
    this.router.navigate(['/register'])
  }

}
