import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-insurance',
  templateUrl: './apply-insurance.component.html',
  styleUrls: ['./apply-insurance.component.css']})

export class ApplyInsuranceComponent implements OnInit {

  ApplyInsuranceForm: FormGroup=new FormGroup({
    applicantName:new FormControl("",[Validators.required,Validators.minLength(2)]),
    cropName:new FormControl("",[Validators.required,Validators.minLength(2)]),
    landArea:new FormControl("",[Validators.required]),
    sumInsured:new FormControl("",[Validators.required])
  });

  get applicantName(){
    return this.ApplyInsuranceForm.get('applicantName');
  }

  get cropName(){
    return this.ApplyInsuranceForm.get('cropName');
  }

  get landArea(){
    return this.ApplyInsuranceForm.get('landArea');
  }

  get sumInsured(){
    return this.ApplyInsuranceForm.get('sumInsured');
  }

  constructor() { }

  Submitdata()
  {
    console.log("Hi")
  }

  ngOnInit(): void {
  }

}
