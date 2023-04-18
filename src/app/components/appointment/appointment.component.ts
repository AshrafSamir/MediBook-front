import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
appointmentForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.appointmentForm=new FormGroup({
      'name':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'phone':new FormControl(null,Validators.required),
      'date':new FormControl(null,Validators.required),
      'doctors':new FormControl(null,Validators.required),
      'department':new FormControl(null,Validators.required),
      'message':new FormControl(null)
    });
  }

  onBooking():void {
  }

}
