import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessBookingComponent } from './success-booking.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
SuccessBookingComponent
  ],
  imports: [ 
    CommonModule,
     
    SharedModule,
   
     
  ]
})
export class SuccessBookingModule { }
