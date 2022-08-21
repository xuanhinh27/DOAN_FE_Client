import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CountUpModule } from 'ngx-countup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ServicesComponent } from './services/services.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { CounterComponent } from './counter/counter.component';
import { ServicesImageComponent } from './services-image/services-image.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ClientsComponent } from './clients/clients.component';
import { WorkProcessComponent } from './work-process/work-process.component';
import { TeamComponent } from './team/team.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SearchFormComponent,
    ServicesComponent,
    WhyUsComponent,
    CounterComponent,
    ServicesImageComponent,
    NewsletterComponent,
    ClientsComponent,
    WorkProcessComponent,
    TeamComponent,
    BlogsComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgbModule,
    SlickCarouselModule,
    CountUpModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
