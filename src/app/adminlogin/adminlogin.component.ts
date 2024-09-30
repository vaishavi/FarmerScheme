import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  AdminLoginForm:FormGroup=new FormGroup({
    emailid:new FormControl("",[Validators.required,Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]),
    password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
  });
 
  constructor() { }

  ngOnInit(): void {
  }
  get emailid()
  {
    return this.AdminLoginForm.get('emailid');
  }
  get password()
  {
    return this.AdminLoginForm.get('password');
  }
  Submitdata()
  {
    console.log("Hi")
  }

}
