import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
appointmentForm:FormGroup;
departmentsarray:string[]=["General Medicine","Occupational Therapy","Radiology","Laboratory","Speech Therapy","Infectious Diseases","Physical Therapy","Psychiatry","Oncology","Rheumatology","Hematology","Endocrinology","Pediatrics","Obstetrics and Gynecology","Dermatology","Cardiology","Neurology","Ophthalmology","Pulmonary Medicine","Gastroenterology"]
addressarray:string[]=["Cairo","Alexandria","El Arish","Damanhur","Kafr El Sheikh","Marsa Matruh","Hurghada","Sohag","Asyut","Zagazig","Damietta","Aswan","Tanta","Giza","Shubra El-Kheima","Port Said","Suez","Luxor","Mansoura","El-Mahalla El-Kubra"];

  constructor(private http:HttpClient, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.appointmentForm=new FormGroup({
      'date':new FormControl(null),
      'address':new FormControl(""),
      'department':new FormControl(""),
      'doctor':new FormControl(null)
    });
  }

 

  onBooking():void {
    this.router.navigate(['/booking'],{queryParams:{address:this.appointmentForm.get('address').value,department:this.appointmentForm.get('department').value,doctor:this.appointmentForm.get('doctor').value}});
    

  }

}
