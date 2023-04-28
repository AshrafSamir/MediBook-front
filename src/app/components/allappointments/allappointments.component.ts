import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swiper from 'swiper';
@Component({
  selector: 'app-allappointments',
  templateUrl: './allappointments.component.html',
  styleUrls: ['./allappointments.component.scss']
})
export class AllappointmentsComponent implements OnInit ,AfterViewInit {

  userId:any;
  bookingInfo:any=[];
    constructor(private route:ActivatedRoute , private http:HttpClient,private router:Router,private auth:AuthService) { }
  
    ngOnInit(): void {
      this.auth.userdata.subscribe((value:any)=>{
        this.userId = value._id;
    })
        this.getuserBookingsInfo();
    }
  
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
     loop:true,
     slidesPerView:3,
     spaceBetween:30,
     centeredSlides:true
    });

  }
    getuserBookingsInfo()
    {
      let bookingItem;
        this.http.get(`http://localhost:3000/userbookings/${this.userId}`).pipe(map((res)=>{
        for(let key in res)
        {
          if(key=='userBookings')
          {
            for(let key2 in res[key])
            {
              bookingItem=res[key][key2]; 
              let {name,mobilePhone ,clinicAddress,specification}=bookingItem.doctor;
              let {fees}=bookingItem.booking;
              let {username}=bookingItem.user;
              let {from,to}=bookingItem.timeSlot;
          to=new Date(to);
          from=new Date(from);
          let dayname=from.toLocaleString('en-US',{weekday:'long'});
          let month=from.toLocaleString('en-US',{month:'numeric'});
          let year=from.toLocaleString('en-US',{year:'numeric'});
          from=from.toLocaleTimeString();
          to=to.toLocaleTimeString();
          let date=`${dayname}.${month}.${year} From ${from} to ${to}`; 
          this.bookingInfo.push({name,fees ,mobilePhone,date,clinicAddress,specification});
            }
          
          }
        }
     return res; 
      })).subscribe((res)=>{
        console.log("kkk",res);
          });
          
    }

}
