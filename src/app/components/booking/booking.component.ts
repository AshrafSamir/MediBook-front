import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm:FormGroup;
  isLoaded:boolean;
 dayname:any;
 userinfo:any;
 DoctorsTimeSlot:any;
 DoctorsInfo:any;
 month:any;
    year:any;
  timeId:any;
  constructor(private route:ActivatedRoute , private http:HttpClient,private router:Router ,private auth:AuthService) { }

  ngOnInit(): void {
  

    this.auth.userdata.subscribe((value)=>{
      console.log("jjj",value)
      this.userinfo = value
      this.bookingForm=new FormGroup({
        'email':new FormControl(this.userinfo.email,Validators.required),
        'name':new FormControl(this.userinfo.name,Validators.required),
        'mobile':new FormControl(this.userinfo.mobilePhone,Validators.required),
      });
  })
    this.isLoaded=false;
    this.route.queryParams.subscribe(params =>{
      this.timeId=params['id'];
      this.getTimeSlots();
    });
  }
 
  getTimeSlots(){
    const httpOptions = {
      headers: new HttpHeaders({      
        'auth':localStorage.getItem('token')
      })
    };
    this.http.get(`http://localhost:3000/getTimeSlot/${this.timeId}`,httpOptions).pipe(map((res:any)=>{
      console.log(res);
     
      let {from,to,fullyBooked,bookingPrice,doctorId}=res;
      to=new Date(to);
      from=new Date(from);
      this.dayname=from.toLocaleString('en-US',{weekday:'long'});
      this.month=from.toLocaleString('en-US',{month:'numeric'});
      this.year=from.toLocaleString('en-US',{year:'numeric'});
      let date=`${this.dayname}.${this.month}.${this.year}`;
      from=from.toLocaleTimeString();
      
      to=to.toLocaleTimeString();
      this.DoctorsTimeSlot={date,from,to,fullyBooked,bookingPrice};
      this.getdoctorInfo(doctorId);
      return this.DoctorsTimeSlot;
    })).subscribe((res)=>{
      this.isLoaded=true;
        });
  }

  getdoctorInfo(id)
  {
    const httpOptions = {
      headers: new HttpHeaders({      
        'auth':localStorage.getItem('token')
      })
    };
    this.http.get(`http://localhost:3000/getdoctor/${id}`,httpOptions).pipe(map((res:any)=>{
      console.log(res);
      const {name,specification,clinicAddress,mobilePhone}=res;
    this.DoctorsInfo={name,specification,clinicAddress,mobilePhone};
    })).subscribe((res)=>{
      this.isLoaded=true;
        });
  }

  senddata()
  {
    const httpOptions = {
      headers: new HttpHeaders({      
        'auth':localStorage.getItem('token')
      })
    };

    // this.http.post(`http://localhost:3000/book/${this.timeId}`,httpOptions)
  }

  
}
