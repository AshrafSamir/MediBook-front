import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../../service/patientservice.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.scss']
})
export class PatientdashboardComponent implements OnInit {

  docNums:any[]=[ {
    "name": "ahmed16",
    "value": 25
  }, {
    "name": "7oda",
    "value": 5
  }, {
    "name": "ashraf",
    "value": 7
  }, {
    "name": "fayrouz",
    "value": 9
  }, {
    "name": "mennaa",
    "value": 10
  }]
  depReservations:any[]=[ {
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
  }]
  depEarned: any[]=[{
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
      }, {
        "name": "February",
        "value": 250
      }, {
        "name": "March",
        "value": 133
      }
    ] 
  }
]
checkLoader:boolean = false
//ww:number=700
 cardColor: string = '#deaff0';

  view: [number , number] = [600, 370];

  // options
  legendTitle: string = 'Reservations';
  legendTitleMulti: string = 'Money';
  legendPosition: any = 'below'; // ['right', 'below'] 
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Money Paid';
  xAxisLabel: string = 'Month';
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

  constructor(private _patientSer:PatientserviceService) { Object.assign(this, this.depReservations ); }
  ngOnInit(): void {
   
    /*forkJoin([this._patientSer.getUserDepartmentFrequency(), this._patientSer.getUserDoctorFrequency()]).subscribe((res:any)=>{
      //console.log(res[0].userDeptFrequency)
      this.docNums=res[0].userFrequency
      this.depReservations=res[1].userDeptFrequency
      this.checkLoader=true

    })*/
  this.UserDoctorFrequency();
  this.UserDepartmentFrequency()
  }

  UserDoctorFrequency()
  {
    this._patientSer.getUserDoctorFrequency().subscribe((res)=>{
      console.log(res)
      this.docNums=res.userFrequency
    })
  }
  UserDepartmentFrequency()
  {
    this._patientSer.getUserDepartmentFrequency().subscribe((res)=>{
      console.log(res)
      this.depReservations=res.userDeptFrequency
      this.checkLoader=true
    })
  }

  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
  colorScheme2:any = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
}
