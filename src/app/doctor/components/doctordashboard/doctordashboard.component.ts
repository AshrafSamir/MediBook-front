import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DoctorserviceService } from '../../services/doctorservice.service';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.scss']
})
export class DoctordashboardComponent implements OnInit {

  productSales:any[]=[ {
    "name": "General Medicine",
    "value": 3
  }, {
    "name": "Occupational Therapy",
    "value": 5
  }, {
    "name": "Radiology",
    "value": 7
  }, {
    "name": "Laboratory",
    "value": 9
  }, {
    "name": "Speech Therapy",
    "value": 10
  },
  {
    "name": "Speech Therapy",
    "value": 10
  },
  {
    "name": "Speech Therapy",
    "value": 10
  },
  {
    "name": "Speech Therapy",
    "value": 10
  },
  {
    "name": "Speech Therapy",
    "value": 10
  },
  {
    "name": "Speech Therapy",
    "value": 10
  },
  {
    "name": "Speech Therapy",
    "value": 10
  }]
  productSalesMulti: any[]=[{
    "name": "General Medicine",
    "series": [
      {
        "name": "January",
        "value": 125
      }, {
        "name": "February",
        "value": 197
      }, {
        "name": "March",
        "value": 209
      }
    ]
  }, {
    "name": "Occupational Therapy",
    "series": [
      {
        "name": "January",
        "value": 210
      }, {
        "name": "February",
        "value": 255
      }, {
        "name": "March",
        "value": 203
      }
    ]
  }, {
    "name": "Radiology",
    "series": [
      {
        "name": "January",
        "value": 89
      }, {
        "name": "February",
        "value": 105
      }, {
        "name": "March",
        "value": 66
      }
    ]
  }, {
    "name": "Laboratory",
    "series": [
      {
        "name": "January",
        "value": 178
      }, {
        "name": "February",
        "value": 165
      }, {
        "name": "March",
        "value": 144
      }
    ]
  }, {
    "name": "Speech Therapy",
    "series": [
      {
        "name": "January",
        "value": 144
      }
    ]
    
  }
  
]
timeSlots:any=[
  {"name":"25-4",
  series:[
   { "name":"00:00--04:00",
   "value":4
  }
  ]
}, {"name":"26-4",
series:[
 { "name":"00:00--04:00",
 "value":1
}
]
}, {"name":"27-6",
series:[
 { "name":"06:00--09:00",
 "value":2
}
]
}, {"name":"28-4",
series:[
 { "name":"06:00--09:00",
 "value":2
}
]
}, {"name":"29-4",
series:[
 { "name":"00:09--02:00",
 "value":2
}
]
}, {"name":"30-4",
series:[
 { "name":"00:00--04:00",
 "value":2
}
]
}
]
doctorIncomes:any=[
  {name:"25-4",
value:400},
{name:"26-4",
value:600},
{name:"27-4",
value:200},
{name:"28-4",
value:800},
{name:"29-4",
value:0},
{name:"30-4",
value:1200},
]
patientGenders:any=[
  {
    "name":"males",
    "value":10
  },
  {
    "name":"females",
    "value":24
  }
]

//ww:number=700

  view: [number , number] = [600, 370];

  // options
  legendTitle: string = 'TimeSlots';
  legendTitleMulti: string = 'Money';
  legendPosition: any = 'right'; // ['right', 'below']
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Money Earned';
  xAxisLabel: string = 'Day';
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;

  maxXAxisTickLength: number = 30;
  maxYAxisTickLength: number = 30;
  trimXAxisTicks: boolean = false;
  trimYAxisTicks: boolean = false;
  rotateXAxisTicks: boolean = false;

  xAxisTicks: any[] = ['Genre 1', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7']
  yAxisTicks: any[] = [100, 1000, 2000, 5000, 7000, 10000]

  animations: boolean = true; // animations on load

  showGridLines: boolean = true; // grid lines

  showDataLabel: boolean = true; // numbers on bars

  gradient: boolean = false;
  colorScheme:any = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  schemeType: any = 'ordinal'; // 'ordinal' or 'linear'
  activeEntries: any[] = ['book']
  barPadding: number = 5
  tooltipDisabled: boolean = false;
  yScaleMax: number = 9000;
  roundEdges: boolean = false;
  timeline: boolean = true;







  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  constructor(private _doctorService:DoctorserviceService) { Object.assign(this, this.productSales ); }
  ngOnInit(): void {


  this.getTimeSlots()
  this.getDoctorIncomes()
  // this.timeSlots.forEach(obj => console.log("aa",obj))

  }
  
getTimeSlots(){
  this._doctorService.getTimeSlots().subscribe(data=>{
    data.forEach(element => {
      // console.log(element)
      const day=new Date(element.date);
      const fromHour=element.from.slice(11,16);
      const toHour=element.to.slice(11,16);
      // console.log("day:",day.getDate())
      // console.log("from:",element.from.slice(11,16))
      // console.log("to:",element.to.slice(11,16))
      // console.log("reser",element.reservations)

      const timeSlot=`${day.getDay()}-${day.getMonth()}`
      const time=`${fromHour}--${toHour}`
      const reservations=element.reservations
      const obj={
        name: timeSlot,
        series:[
          {name:time,
          value:reservations
        }
        ]
      }
      this.timeSlots.push(obj)
    });
    
  // this.timeSlots.forEach(obj => console.log(obj))
  // this.productSalesMulti.forEach(obj => console.log(obj))

  })
}
getDoctorIncomes(){
  this._doctorService.getDoctorIncomes().subscribe(data=>{
    // console.log(data)
    data.doctorIncomes.forEach(u=>{
      // console.log("date",u.timeSlot.date.slice(0,7))
      // console.log("income",u.income)
      const obj={
        "name":u.timeSlot.date.slice(0,7),
        "value":u.income
      }
      this.doctorIncomes.push(obj)
    })

  })
  console.log("docrt",this.doctorIncomes)
}


  ///////////////////////////
  value: number = 75;
  previousValue: number = 270;
  units: string = 'Reservations';


  /////////////////////////////////
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
