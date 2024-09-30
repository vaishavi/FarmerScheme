import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Bidder  } from "./Bidder";
import { Observable } from 'rxjs';
import { Status } from './model/status';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http:HttpClient) { }

  register(bidder:Bidder):Observable<Status>{
    console.log(bidder.aadharNo);
    
    let url='http://localhost:8585/register';
    return this.http.post<Status>(url,bidder);
  }

//   upload(formData:FormData){
//     let url='http://localhost:9090/pic-upload';
//     return this.http.post(url, formData);
//   }

//   fetchProfile(customerId: number) : Observable<Customer> {
//     let url='http://localhost:9090/profile?customerId='+customerId;
//     return this.http.get<Customer>(url);
//   }
}