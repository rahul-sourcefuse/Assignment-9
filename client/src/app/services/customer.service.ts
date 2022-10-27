import { CustomerModel } from './../models/customer-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  

  constructor(private http:HttpClient) { }

  getCustomer(){
    return this.http.get<CustomerModel[]>("http://localhost:3000/customers")
    .pipe(map((res:any) => {
      return res;
    }))
  }


  postCustomer(data:CustomerModel){
    return this.http.post<CustomerModel>("http://localhost:3000/customers",data)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  deleteCustomer(id:string){
    return this.http.delete<CustomerModel>("http://localhost:3000/customers/"+id)
    .pipe(map((res:any) => {
      return res;
    }))
  }
  updateCustomer(data:CustomerModel,id:string){
    return this.http.put<CustomerModel>("http://localhost:3000/customers/"+id,data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  
  getSeletedCustomer(id:string){
    return this.http.get<any>("http://localhost:3000/customers/"+id)
    .pipe(map((res:any) => {
      console.log(res);
      return res;
    }))
  }
  






}
