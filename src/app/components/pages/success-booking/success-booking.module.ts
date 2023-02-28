import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessBookingComponent } from './success-booking.component';
import { SharedModule } from '../../shared/shared.module';
import {AppModule} from "../../../app.module";



@NgModule({
  declarations: [
    SuccessBookingComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    SharedModule,

  ]
})
export class SuccessBookingModule { }
