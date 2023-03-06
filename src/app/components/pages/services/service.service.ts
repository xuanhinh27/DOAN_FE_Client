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
  getCategory(){
    return this.http.get(this.url + "/category/get",{ })

  }
  getDoc(){
    return this.http.get(this.url + "/user/get",{ })
  }
  update(data:any){
    return this.http.post(this.url + "/appointment/updateStatus",data,{ })

  }
  getAppoint(id:any){
    return this.http.get(this.url + "/appointment/getByCategory/"+ id,{ })
  }
}
