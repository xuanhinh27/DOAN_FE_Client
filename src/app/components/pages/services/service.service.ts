import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = environment.apiUrl
  constructor(
    private  http: HttpClient
  ) {}
  booking(data:any): Observable<any> {
    return this.http.post(this.url + "/appointment/add",data,{ headers:new HttpHeaders().set('Content-Type','application/json')})
     
  }
 
  getCategory(){
    return this.http.get(this.url + "/category/get",{ })
     
  }
  getDentist(){
    return this.http.get(this.url + "/user/get",{})
     
  }
  getTime(data:any){
    return this.http.get(this.url + "/appointment/getByCategory/"+data,{})
     
  }
}
 