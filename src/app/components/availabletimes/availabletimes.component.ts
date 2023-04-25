import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-availabletimes',
  templateUrl: './availabletimes.component.html',
  styleUrls: ['./availabletimes.component.scss']
})
export class AvailabletimesComponent implements OnInit {
  isLoaded:boolean;
 dayname:any;
 month:any;
    year:any;
  doctorId:any;
  DoctorsTimeSlots:any;
  constructor(private route:ActivatedRoute , private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.isLoaded=false;
    this.route.queryParams.subscribe(params =>{
      this.doctorId=params['id'];
      this.getAllTimeSlots();
    });
  }
  getAllTimeSlots(){
    console.log(this.doctorId)
    this.http.get(`http://localhost:3000/doctorTimeSlots/${this.doctorId}`).pipe(map((res)=>{
      this.DoctorsTimeSlots=[];
    for(let key in res)
    {
      let {from,to,fullyBooked,_id}=res[key];
      to=new Date(to);
      from=new Date(from);
      this.dayname=from.toLocaleString('en-US',{weekday:'long'});
      this.month=from.toLocaleString('en-US',{month:'numeric'});
      this.year=from.toLocaleString('en-US',{year:'numeric'});
      let date=`${this.dayname}.${this.month}.${this.year}`;
      from=from.toLocaleTimeString();
      
      to=to.toLocaleTimeString();
      this.DoctorsTimeSlots.push({date,from,to,fullyBooked,_id});
    }
      return this.DoctorsTimeSlots;
    })).subscribe((res)=>{
      this.isLoaded=true;
        });
  }

  book(id:any)
  {
this.router.navigate(['/booking'],{queryParams:{id}});
   
  }
}
