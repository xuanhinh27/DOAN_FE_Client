import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(
    private formbuild: FormBuilder,
    private apiService: ServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  appointmentForm = this.formbuild.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    dob: ['', Validators.required],
    phone: ['', Validators.required],
    service: ['' ],
    dentist: ['' ],
    date: [''],
    time: ['' ],
    des: [''],
  });
  name: any;
  email: any;
  dob: string = '';
  sdt: any;
  dichVu: any;
  nhaSi: any = '';
  timeBooking: any;
  dateBooking: any = '';
 
  note: any;
  success: number = 1;
  bookingOk: boolean = false;
  done: boolean = false;
  isLoading: boolean = false;
  check: boolean = false;
  listService: any = [];
  listDoc: any = [];
  timeDoc: any = [];
  timePick: any = [];
  isToDay = new Date();
  detailBooking: any = []
  idDelet: any

  times: any[] = [
    { value: '08', name: '08:00 Sáng', disable: false },
    { value: '09', name: '09:00 Sáng', disable: false },
    { value: '10', name: '10:00 Sáng', disable: false },
    { value: '11', name: '11:00 Sáng', disable: false },
    { value: '12', name: '12:00 Sáng', disable: false },
    { value: '14', name: '14:00 Chiều', disable: false },
    { value: '15', name: '15:00 Chiều', disable: false },
    { value: '16', name: '16:00 Chiều', disable: false },
    { value: '17', name: '17:00 Chiều', disable: false },
    { value: '18', name: '18:00 Chiều', disable: false },
  ];

  ngOnInit(): void {
 
    localStorage.setItem("timePick", JSON.stringify(this.times));
   
    this.route.queryParams.subscribe((params) => {
      if (params && params['id']) {
        this.bookingOk = params['status']
        this.idDelet = params['id']
        this.success = 2;
        let data: any = {
          id: params['id'],
          status: params['status'],
        };
        this.apiService.update(data).subscribe((res: any) => {
          if (res) {
            this.bookingOk = true;
            this.success = 3;
          } else this.bookingOk = false;
        });
        this.getAppointByID()
      }
    });
    this.getCate();
    this.getDoc();
  }
  get f(): any { return this.appointmentForm.controls }
  submit() {
    if(!this.nhaSi || !this.dichVu || !this.timeBooking || !this.dateBooking) return
    this.isLoading = true
    let data: any = {
      categoryId: this.dichVu.id,
      userId: this.nhaSi.id,
      name: this.name,
      description: this.note,
      email: this.email,
      dob: this.dob,
      phone: this.sdt,
      date: this.dateBooking,
      time: this.timeBooking.value,
    };
    this.apiService.booking(data).subscribe((res: any) => {
      if (res) {
        if (res.status) {
          this.success = 3;
          this.done = true
          this.isLoading = false
        }
      }
    });
  }

  getCate() {
    this.apiService.getCategory().subscribe((res: any) => {
      if (res) {
        this.listService = res;
      }
    });
  }
  getDoc() {
    this.apiService.getDoc().subscribe((res: any) => {
      if (res) {
        this.listDoc = res;
      }
    });
  }

  getAppointByID() {
    this.apiService.getAppointByID(this.idDelet).subscribe((res: any) => {
      if (res) {
        this.detailBooking = res
      }
    });
  }
  datLich() {
    this.success = 1
    this.router.navigateByUrl('/appointment');


  }
  delete() {
    this.apiService.delete(this.idDelet).subscribe((res: any) => {
      if (res) {
        location.reload()
      }
    });
  }

  getAppoint() {
    this.apiService.getAppoint(this.nhaSi.id).subscribe((res: any) => {
      if (res) {
        this.timeDoc = res;
        this.calcDate()
      }
    });
  }
  timesc: any = []
  calcDate() {


    this.timePick = [...this.timeDoc.filter((element: any) => element.date.includes(this.dateBooking))];

    this.times= JSON.parse(localStorage.getItem('timePick')!)
     this.timePick.filter((el: any) => this.times.some((s:any) => {
      if (s.value === el.time) {
        s.disable = true
      }
    }

    ));
 
    


  }
}
