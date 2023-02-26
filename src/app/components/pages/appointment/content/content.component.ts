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
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    dateofbirth: ['', Validators.required],
    phoneno: ['', Validators.required],
    gender: ['', Validators.required],
    hospital: ['', Validators.required],
    service: ['', Validators.required],
    date: ['', Validators.required],
    doctor: ['', Validators.required],
    remarks: ['', Validators.required],
    cardName: ['', Validators.required],
    cardNumber: ['', Validators.required],
    expDate: ['', Validators.required],
    cardCvv: ['', Validators.required],
    condition: ['', Validators.required],
  });
  name:any
  email:any
  dob:any
  sdt:any
  dichVu:any

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
  onAppointmentFormSubmit() {
    console.warn(this.appointmentForm.value);
    this.appointmentForm.reset();
  }
  ok(){
     this.appointmentForm.get('fullname')?.value
  }
  ngOnInit(): void {
this.submit()
  }
  submit(){
 
    let data:any = {
      categoryId: "1",
      userId:"3",
      name: "hinh",
      description: "aasdasdasdaaaaaa",
      price: "22222",
      email: "hinh.dxs2k@gmail.com",
      dob: "hinh",
      phone: "aaaaaa",
      date: "2023/12/02",
      time: "20:20 PM"
    }
    this.apiService.booking(data).subscribe((res:any)=>{
      if(res){
 
this.router.navigate(['/dashboard']);
      }
    })
   }

}
