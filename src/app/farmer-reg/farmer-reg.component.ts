import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
import { FarmerService } from "../farmer.service";

@Component({
  selector: 'app-farmer-reg',
  templateUrl: './farmer-reg.component.html',
  styleUrls: ['./farmer-reg.component.css']
})

@Injectable()
export class FarmerRegComponent implements OnInit {

  FarmerRegistrationForm:FormGroup=new FormGroup({
    firstName:new FormControl ('', [Validators.required]),
    lastName:new FormControl ('', [Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    confirmPassword:new FormControl("",[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),
    address:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    state:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    landArea:new FormControl('',[Validators.required]),
    landLocation:new FormControl('',[Validators.required]),
    aadharCard:new FormControl('',[Validators.required,Validators.pattern("^[0-9]{12}$")])
});


farmer=new Farmer();
constructor(private farmerService:FarmerService,private router:Router) { }



ngOnInit(): void {
}

register()
{
  //alert(JSON.stringify(this.customer));
  this.farmerService.register(this.farmer).subscribe(data => {
    //alert(JSON.stringify(data));
    if(data.status == 'SUCCESS') {
      this.router.navigate(['FarmerLogin'])
    }
    else {
      //missing code right now
      alert(data.status);
    }
  })
}
}
