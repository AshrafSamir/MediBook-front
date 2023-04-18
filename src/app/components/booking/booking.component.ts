import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
department:string;
address:string;
doctors:string;
Doctorsinformations=[];
  constructor(private route:ActivatedRoute , private http:HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.department=params['department']?params['department']:null;
this.address=params['address']?params['address']:null;
this.doctors=params['doctor']?params['doctor']:null;
this.postAppointment({doctors:this.doctors,address:this.address,department:this.department});
    })
  }

  postAppointment(appointment:{department:string,doctors:string,address:string}){
    this.http.get('http://localhost:3000/getDoctorsInfo').pipe(map((res)=>{
      for(const key in res)
      {
        if(res[key].specification==appointment.department||res[key].clinicAddress
          ==appointment.address)
          {
            this.Doctorsinformations.push(res[key]);
          }
      }
      return this.Doctorsinformations;
    })).subscribe((res)=>{
          console.log(res);
        });
      }

}
