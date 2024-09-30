import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-bidderlogin',
  templateUrl: './bidderlogin.component.html',
  styleUrls: ['./bidderlogin.component.css']
})
export class BidderloginComponent implements OnInit {
  login: Login = new Login();
  message: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
 
  Submitdata()
  {
    //console.log("Hi")
    alert(JSON.stringify(this.login));
    this.loginService.login(this.login).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        let bidderId = data.bidderId;
        let bidderFirstName = data.bidderFirstName;
        //let obj = {id : customerId, name : customerName};
        sessionStorage.setItem('bidderId', String(bidderId));
        
        //sessionStorage.getItem('customerId');
        sessionStorage.setItem('bidderFirstName', bidderFirstName);
        this.router.navigate(['Home']);
      }
      else {
        this.message = data.message;
      }
    })

  }



}
