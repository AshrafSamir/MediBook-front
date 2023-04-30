import { Component, OnInit } from '@angular/core';
// import { single } from './data';
import { AdminserviceService } from '../services/adminservice.service';
import { Observable } from 'rxjs/internal/Observable';
import { Color, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {

    this._adminService.getUsersCount().subscribe((res)=>{
      this.usersCount=res;
      // console.log(res);
      // console.log(this.usersCount.numberOfClients);
    })
    this._adminService.getDoctorsMostRated().subscribe((res)=>{
      console.log(res.doctors[0]);
      if(res.doctors){
        for (let i = 0; i < res.doctors.length; i++) {
          let ratesValues = new Array(res.doctors[i].doctorRate)
          res.doctors[i].ratesValues=ratesValues;
          
        }
        this.doctorsMostRated=res.doctors;
      }
      else{

      }
      
    })
    this._adminService.getAllBookings().subscribe((res)=>{
      console.log(res.bookings);
      this.allBookings=res.bookings
    })
    
  }
  usersCount:any;
  doctorsMostRated:any[];
  allBookings:any[]
  single: any[];
  view: [number, number] = [700, 400];
  gradient: boolean = true;
  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };
  colorScheme: Color = { 
    domain: ['#5691e4', '#A10A28', '#5AA454'], 
    group: ScaleType.Ordinal, 
    selectable: true, 
    name: 'Customer Usage', 
  };
  cardColor: string = 'rgba(0, 0, 0,1)';

  constructor(private _adminService: AdminserviceService) {
    _adminService.getUsers('').subscribe((data: any) => {
      const counts = {};
      data.users.forEach((user) => {
        counts[user.type] = (counts[user.type] || 0) + 1;
      });
      this.single = [
        {
          name: 'Admin',
          value: counts['admin'],
        },
        {
          name: 'Patient',
          value: counts['patient'],
        },
        {
          name: 'Doctor',
          value: counts['doctor'],
        },
      ];
    });
  }

  onSelect(event) {
    // console.log(event);
  }
}
