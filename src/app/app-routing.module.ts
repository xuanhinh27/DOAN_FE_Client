import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuccessBookingComponent} from "./components/pages/success-booking/success-booking.component";

const routes: Routes = [
  // // Home
  // { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  { path: '', loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule), data: { breadcrumb: "Trang chủ" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-standard/blog-standard.module').then(m => m.BlogStandardModule), data: { breadcrumb: "Blog Standard" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Chi tiết bài viết" } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  // Services
  { path: 'service/cat/:catId', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: "Chi tiết dịch vụ" } },
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: "Dịch vụ" } },
  { path: 'service-details/:id', loadChildren: () => import('./components/pages/service-details/service-details.module').then(m => m.ServiceDetailsModule), data: { breadcrumb: "Chi tiết dịch vụ" } },
  // Faqs
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // Appointment
  { path: 'appointment', loadChildren: () => import('./components/pages/appointment/appointment.module').then(m => m.AppointmentModule), data: { breadcrumb: "Đặt lịch khám" } },
  // Clinics
  { path: 'clinic/cat/:catId', loadChildren: () => import('./components/pages/clinic-grid/clinic-grid.module').then(m => m.ClinicGridModule), data: { breadcrumb: "Clinic Grid" } },
  { path: 'clinic-grid', loadChildren: () => import('./components/pages/clinic-grid/clinic-grid.module').then(m => m.ClinicGridModule), data: { breadcrumb: "Danh sách phòng khám" } },
  { path: 'clinic-list', loadChildren: () => import('./components/pages/clinic-list/clinic-list.module').then(m => m.ClinicListModule), data: { breadcrumb: "Danh sách phòng khám" } },
  { path: 'clinic-details/:id', loadChildren: () => import('./components/pages/clinic-details/clinic-details.module').then(m => m.ClinicDetailsModule), data: { breadcrumb: "Chi tiết phòng khám" } },
  // Doctors
  { path: 'doctor/cat/:catId', loadChildren: () => import('./components/pages/doctor-grid/doctor-grid.module').then(m => m.DoctorGridModule), data: { breadcrumb: "Danh sách nha sĩ" } },
  { path: 'doctor-grid', loadChildren: () => import('./components/pages/doctor-grid/doctor-grid.module').then(m => m.DoctorGridModule), data: { breadcrumb: "Danh sách nha sĩ" } },
  { path: 'doctor-list', loadChildren: () => import('./components/pages/doctor-list/doctor-list.module').then(m => m.DoctorListModule), data: { breadcrumb: "Đội ngũ nha sĩ" } },
  { path: 'doctor-details/:id', loadChildren: () => import('./components/pages/doctor-details/doctor-details.module').then(m => m.DoctorDetailsModule), data: { breadcrumb: "Thông tin nha sĩ" } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Về chúng tôi" } },
  { path: 'succees', loadChildren: () => import('./components/pages/success-booking/success-booking.module').then(m => m.SuccessBookingModule), data: { breadcrumb: "Thanh cong" } },
  // Extra
  // { path: 'error-page', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } },
  // { path: '**', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } },
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
