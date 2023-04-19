import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DoctorGuard } from './shared/guards/doctor.guard';
import { PatientGuard } from './shared/guards/patient.guard';
<<<<<<< HEAD
import {BookingComponent} from './components/booking/booking.component';
=======
import { AppointmentComponent } from './components/appointment/appointment.component';
>>>>>>> 018d8dee2fae56545eef40d33e27c10c0cecf34d

const routes: Routes = [
  { path: 'home', component :HomeComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'doctor',canActivate:[DoctorGuard], loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'patient',canActivate:[PatientGuard], loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
<<<<<<< HEAD
  {path: 'booking',component:BookingComponent}
=======
  { path: 'appointment',component:AppointmentComponent }
>>>>>>> 018d8dee2fae56545eef40d33e27c10c0cecf34d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
