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
  getAppoint(id:any){
    return this.http.get(this.url + "/appointment/getByCategory/"+ id,{ })
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
