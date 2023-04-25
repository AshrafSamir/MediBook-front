import { Component, OnInit } from '@angular/core';
// import { single } from './data';
import { AdminserviceService } from '../services/adminservice.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}
  single: any[];
  view: [number, number] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };
  cardColor: string = '#232837';

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
    console.log(event);
  }
}
