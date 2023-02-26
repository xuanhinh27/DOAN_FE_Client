import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ServiceService } from '../../services/service.service';
import {element} from "protractor";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    private formbuild: FormBuilder,
    private apiService: ServiceService,

    private router: Router
  ) { }
  appointmentForm = this.formbuild.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    dob: ['', Validators.required],
    phone: ['', Validators.required],
    gender: ['', Validators.required],
    service: ['', Validators.required],
    dentist: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    des: ['', Validators.required],

  });
  name: any
  email: any
  dob: any
  sdt: any
  dichVu: any
  nhasi:any
  date:any
  dateDestis: any = []
  cateGory: any = []
  listDentis: any = []
  timePick:any
  times: any[] = [
    { value: '08', name: '08:00 AM' },
    { value: '09', name: '09:00 AM' },
    { value: '10', name: '10:00 AM' },
    { value: '11', name: '11:00 AM' },
    { value: '12', name: '12:00 AM' },
    { value: '14', name: '14:00 PM' },
    { value: '15', name: '15:00 PM' },
    { value: '16', name: '16:00 PM' },
    { value: '17', name: '17:00 PM' },
    { value: '18', name: '18:00 PM' }
  ];
  onAppointmentFormSubmit() {

    this.appointmentForm.reset();
  }

  ngOnInit(): void {
    // this.submit()
    this.getCate()
    this.getDentist()
    this.getTime()
  }
  getCate() {
    this.apiService.getCategory().subscribe((res: any) => {
      if (res) {
        this.cateGory = res
      }
    })
  }

  getDentist() {
    this.apiService.getDentist().subscribe((res: any) => {
      if (res) {
        this.listDentis = res
      }
    })
  }
 checkTime(){
   this.dateDestis.forEach((element: any) => {
     this.times.forEach((el: any) => {
       if(el.name === element.time){
         console.log(element,el)
         el.disab = true
       }


     })
   })
 }
  getTime() {

let data:any = this.nhasi
    this.apiService.getTime(data).subscribe((res: any) => {
      if (res) {
        res.forEach((element: any) => {

          if(this.date===element.date){
            this.dateDestis.push(element)
          }
        });


      }
    })
  }
  submit() {

    let data: any = {
      categoryId: "1",
      userId: "3",
      name: "hinh",
      description: "aasdasdasdaaaaaa",
      price: "22222",
      email: "hinh.dxs2k@gmail.com",
      dob: "hinh",
      phone: "aaaaaa",
      date: "2023/12/02",
      time: "20:20 PM"
    }
    this.apiService.booking(data).subscribe((res: any) => {
      if (res) {

      }
    })
  }

}
