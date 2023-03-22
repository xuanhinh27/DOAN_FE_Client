import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
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
  delete(id:any){
    return this.http.post(this.url + "/appointment/delete/"+ id,{ })

  }
  getAppoint(id:any){
    return this.http.get(this.url + "/appointment/getByCategory/"+ id,{ })
  }
  getAppointByID(id:any){
    return this.http.get(this.url + "/appointment/getById/"+ id,{ })
  }
  chat(mess: any) {
    let SECRET_KEY = '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'
    let messages: any = [{ role: "user", content: mess }]
    let param: any = {
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 0.5
    }
    return this.http.post<any>('https://api.openai.com/v1/chat/completions', param, {headers:new HttpHeaders().set('Authorization', `Bearer ${SECRET_KEY}`)}) ;
}
}
