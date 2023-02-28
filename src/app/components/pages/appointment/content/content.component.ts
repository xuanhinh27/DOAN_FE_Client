import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';

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
    name: ['', Validators.required],
    email: ['', Validators.required],
    dob: ['', Validators.required],
    phone: ['', Validators.required],
    gender: ['', Validators.required],
    service: ['' ],
    dentist: ['' ],
    date: ['', Validators.required],
    time: ['', Validators.required],
    des: ['', Validators.required],
  });
  name:any
  email:any
  dob:string =''
  sdt:any
  dichVu :any
  nhaSi: any = "";
  timeBooking:any;
  dateBooking:any;
  note:any
  items: any[] = [
    { id: 1, name: 'one' },
    { id: 2, name: 'two' },
    { id: 3, name: 'three' },
    { id: 4, name: 'four' },
    { id: 5, name: 'five' },
    { id: 6, name: 'six' }
  ];
  times: any[] = [
    { value: '08', name: '08:00 Sáng' },
    { value: '09', name: '09:00 Sáng' },
    { value: '10', name: '10:00 Sáng' },
    { value: '11', name: '11:00 Sáng' },
    { value: '12', name: '12:00 Sáng' },
    { value: '14', name: '14:00 Chiều' },
    { value: '15', name: '15:00 Chiều' },
    { value: '16', name: '16:00 Chiều' },
    { value: '17', name: '17:00 Chiều' },
    { value: '18', name: '18:00 Chiều' }
  ];

  ngOnInit(): void {

// this.submit()
  }
  submit(){

    // @ts-ignore
    let data:any = {
      categoryId:this.dichVu.id,
      userId:this.nhaSi.id,
      name: this.name,
      description: this.note,
      email: this.email,
      dob: this.dob,
      phone: this.sdt,
      date: this.dateBooking,
      time: this.timeBooking.value,
    }
    this.apiService.booking(data).subscribe((res:any)=>{
      if(res){


      }
    })
   }

}
