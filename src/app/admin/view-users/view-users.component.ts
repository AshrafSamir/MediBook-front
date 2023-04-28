import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { __param } from 'tslib';
import { map } from 'rxjs';
import { Color, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
  selected:string="Users";
usersArray:any[];
types:string[]=['Users','Doctors','Clients','Admins']
filteredData:string=this.selected.toLowerCase()
productSales = [
  {
    "name": "book",
    "value": 5001
  }, {
    "name": "graphic card",
    "value": 7322
  }, {
    "name": "desk",
    "value": 1726
  }, {
    "name": "laptop",
    "value": 2599
  }, {
    "name": "monitor",
    "value": 705
  },
  {
    "name": "moooooob",
    "value": 705
  }
];
view: [number, number] = [500, 300];
cardColor: string = '#232837';
// colorScheme:{domain:any} = {
//   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
// };
colorScheme: Color = { 
  domain: ['#5AA454', '#A10A28', '#C7B42C'], 
  group: ScaleType.Ordinal, 
  selectable: true, 
  name: 'Customer Usage', 
};
gradient: boolean = true;
showLegend: boolean = true;
legendPosition: string = 'below';
showLabels: boolean = true;
isDoughnut: boolean = false;
checkLoader:boolean=false;
users: any[];
counts :{}={};
onSelect(data): void {
  console.log('Item clicked', JSON.parse(JSON.stringify(data)));
}
onActivate(data): void {
  console.log('Activate', JSON.parse(JSON.stringify(data)));
}

onDeactivate(data): void {
  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
}

  constructor(private _adminService:AdminserviceService) {
   }

  ngOnInit (): void {
    this.getFilteredData()
    this._adminService.getUsers(null).subscribe((users)=>{
      console.log(users.users);
      
      users.users.forEach((user) => {
        this.counts[user.type] = (this.counts[user.type] || 0) + 1;
      });
      console.log("counts",this.counts);
      
      this.users = [
        {
          name: 'Admin',
          value: this.counts['admin'],
        },
        {
          name: 'Patient',
          value: this.counts['patient'],
        },
        {
          name: 'Doctor',
          value: this.counts['doctor'],
        },
      ];
    })
  }
  getData(e:any) {
    this.filteredData = e.target.value.toLowerCase()
    this.checkLoader = false 
    this.getFilteredData()
  }
   getFilteredData(){
    console.log('before',this.filteredData)
    this._adminService.getUsers(this.filteredData).subscribe((users) =>{
      if(this.filteredData=='doctors'){
        this.filteredData=this.filteredData.replace('doctors','allDoctorsData')
      this.usersArray= users[this.filteredData]
      }
      this.usersArray= users[this.filteredData]
        this.checkLoader = true 
    }
    
    )
  }
  

}
