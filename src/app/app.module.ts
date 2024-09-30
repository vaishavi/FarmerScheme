import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { FarmerloginComponent } from './farmerlogin/farmerlogin.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { Resetpassword1Component } from './resetpassword1/resetpassword1.component';
import { Forgetpassword1Component } from './forgetpassword1/forgetpassword1.component';
import { FarmersloginComponent } from './farmerslogin/farmerslogin.component';
import { ApplyInsuranceComponent } from './apply-insurance/apply-insurance.component';
import { ClaimInsuranceComponent } from './claim-insurance/claim-insurance.component';
import { ViewInsuranceComponent } from './view-insurance/view-insurance.component';
import { BidderRegComponent } from './bidder-reg/bidder-reg.component';
import { FarmerRegComponent } from './farmer-reg/farmer-reg.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,

    HomeComponent,
      FarmerloginComponent,
      BidderloginComponent,
      AdminloginComponent,
      ForgetpasswordComponent,

      ResetpasswordComponent,
      Resetpassword1Component,
      Forgetpassword1Component,
      FarmersloginComponent,
    

      ApplyInsuranceComponent,
      ClaimInsuranceComponent,
      ViewInsuranceComponent,

      BidderRegComponent,
      FarmerRegComponent,


      
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule,

  
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
    
  ],
  exports:[FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
   BrowserAnimationsModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

