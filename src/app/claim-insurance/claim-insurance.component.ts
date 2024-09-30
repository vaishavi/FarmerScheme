import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-claim-insurance',
  templateUrl: './claim-insurance.component.html',
  styleUrls: ['./claim-insurance.component.css']
})
export class ClaimInsuranceComponent implements OnInit {

  ClaimInsuranceForm:FormGroup=new FormGroup({
    policyId:new FormControl("",[Validators.required]),
    sumInsured:new FormControl,
    insureeName:new FormControl,
    causeOfLoss:new FormControl,
    dateOfLoss:new FormControl
  });
  constructor() { }

  ngOnInit(): void {
  }

}
