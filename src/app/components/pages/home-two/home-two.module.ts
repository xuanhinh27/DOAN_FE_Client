import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { HomeTwoComponent } from './home-two.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { CounterComponent } from './counter/counter.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TeamComponent } from './team/team.component';
import { ServicesTwoComponent } from './services-two/services-two.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CtaComponent } from './cta/cta.component';
import { QuoteComponent } from './quote/quote.component';
import { BlogsComponent } from './blogs/blogs.component';
 


@NgModule({
  declarations: [
    HomeTwoComponent,
    BannerComponent,
    ServicesComponent,
    CounterComponent,
    WhyUsComponent,
    TeamComponent,
    ServicesTwoComponent,
    TestimonialsComponent,
    CtaComponent,
    QuoteComponent,
    BlogsComponent,
    
  ],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
    ReactiveFormsModule,
    FormsModule,
    RecaptchaModule, 
    RecaptchaFormsModule
  ]
})
export class HomeTwoModule { }
