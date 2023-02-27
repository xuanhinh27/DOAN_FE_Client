import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = environment.apiUrl
  constructor(
    private  http: HttpClient
  ) {}
  booking(data:any){
    return this.http.post(this.url + "/appointment/add",data,{ })
     
  }
  getCategory(data:any){
    return this.http.post(this.url + "/category/get",data,{ })
     
  }
  getDoc(data:any){
    return this.http.post(this.url + "/user/get",data,{ })
     
  }
}
