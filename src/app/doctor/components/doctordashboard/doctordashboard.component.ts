import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
//ww:number=700

  view: [number , number] = [600, 370];

  // options
  legendTitle: string = 'Reservations';
  legendTitleMulti: string = 'Money';
  legendPosition: any = 'below'; // ['right', 'below']
  legend: boolean = true;

  xAxis: boolean = true;
  yAxis: boolean = true;

  yAxisLabel: string = 'Money Earned';
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

  constructor() { Object.assign(this, this.productSales ); }
  ngOnInit(): void {
    console.log(this.productSales)
  
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
}
