import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.scss']
})
export class DoctordashboardComponent implements OnInit {

  productSales:any[]
  productSalesMulti: any[]=[{
    "name": "book",
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
    "name": "graphic card",
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
    "name": "desk",
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
    "name": "laptop",
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
    "name": "monitor",
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

  yAxisLabel: string = 'Reservations';
  xAxisLabel: string = 'Money';
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
  
  }
}
