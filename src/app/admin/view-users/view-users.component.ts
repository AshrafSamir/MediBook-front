import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from '../services/adminservice.service';
import { __param } from 'tslib';
import { map } from 'rxjs';
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


  constructor(private _adminService:AdminserviceService) { }

  ngOnInit (): void {
    this.getFilteredData()
  }
  
  getData(e:any) {
    this.filteredData = e.target.value.toLowerCase()
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
    }
    )
  }
  

}
