import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {
userId:any;
bookingInfo:any;
  constructor(private route:ActivatedRoute , private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.userId=params['id'];
      console.log(this.userId);
      this.getuserBookingInfo();
    });
  }


  getuserBookingInfo()
  {
    let lastBooking;
      this.http.get(`http://localhost:3000/userbookings/${this.userId}`).pipe(map((res)=>{
      for(let key in res)
      {
        if(key=='userBookings')
        {
          let length=res[key].length;
          lastBooking=res[key][length-1];
         let {name,mobilePhone ,clinicAddress}=lastBooking.doctor;
        let {fees}=lastBooking.booking;
        let {username}=lastBooking.user;


        let {from,to}=lastBooking.timeSlot;
        to=new Date(to);
        from=new Date(from);
        let dayname=from.toLocaleString('en-US',{weekday:'long'});
        let month=from.toLocaleString('en-US',{month:'numeric'});
        let year=from.toLocaleString('en-US',{year:'numeric'});
        from=from.toLocaleTimeString();
        to=to.toLocaleTimeString();

        let date=`${dayname}.${month}.${year} From ${from} to ${to}`;


         this.bookingInfo={name,fees,username ,mobilePhone,date,clinicAddress};
        }
      }
   return lastBooking; 
    })).subscribe((res)=>{
      console.log("jju",res);
        });
        
  }

}