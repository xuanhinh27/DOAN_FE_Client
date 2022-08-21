import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Home
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule), data: { breadcrumb: "Homepage" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog', loadChildren: () => import('./components/pages/blog/blog.module').then(m => m.BlogModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-standard', loadChildren: () => import('./components/pages/blog-standard/blog-standard.module').then(m => m.BlogStandardModule), data: { breadcrumb: "Blog Standard" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Blog Details" } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  // Services
  { path: 'service/cat/:catId', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: "Services" } },
  { path: 'services', loadChildren: () => import('./components/pages/services/services.module').then(m => m.ServicesModule), data: { breadcrumb: "Services" } },
  { path: 'service-details/:id', loadChildren: () => import('./components/pages/service-details/service-details.module').then(m => m.ServiceDetailsModule), data: { breadcrumb: "Service Details" } },
  // Faqs
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // Appointment
  { path: 'appointment', loadChildren: () => import('./components/pages/appointment/appointment.module').then(m => m.AppointmentModule), data: { breadcrumb: "Appointment" } },
  // Clinics
  { path: 'clinic/cat/:catId', loadChildren: () => import('./components/pages/clinic-grid/clinic-grid.module').then(m => m.ClinicGridModule), data: { breadcrumb: "Clinic Grid" } },
  { path: 'clinic-grid', loadChildren: () => import('./components/pages/clinic-grid/clinic-grid.module').then(m => m.ClinicGridModule), data: { breadcrumb: "Clinic Grid" } },
  { path: 'clinic-list', loadChildren: () => import('./components/pages/clinic-list/clinic-list.module').then(m => m.ClinicListModule), data: { breadcrumb: "Clinic List" } },
  { path: 'clinic-details/:id', loadChildren: () => import('./components/pages/clinic-details/clinic-details.module').then(m => m.ClinicDetailsModule), data: { breadcrumb: "Clinic Details" } },
  // Doctors
  { path: 'doctor/cat/:catId', loadChildren: () => import('./components/pages/doctor-grid/doctor-grid.module').then(m => m.DoctorGridModule), data: { breadcrumb: "Doctor Grid" } },
  { path: 'doctor-grid', loadChildren: () => import('./components/pages/doctor-grid/doctor-grid.module').then(m => m.DoctorGridModule), data: { breadcrumb: "Doctor Grid" } },
  { path: 'doctor-list', loadChildren: () => import('./components/pages/doctor-list/doctor-list.module').then(m => m.DoctorListModule), data: { breadcrumb: "Doctor List" } },
  { path: 'doctor-details/:id', loadChildren: () => import('./components/pages/doctor-details/doctor-details.module').then(m => m.DoctorDetailsModule), data: { breadcrumb: "Doctor Details" } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Contact Us" } },
  // Extra
  { path: 'error-page', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } },
  { path: '**', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
