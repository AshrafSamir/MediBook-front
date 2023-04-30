import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from '../../services/doctorservice.service';

@Component({
  selector: 'app-getslots',
  templateUrl: './getslots.component.html',
  styleUrls: ['./getslots.component.scss']
})
export class GetslotsComponent implements OnInit {

  constructor(private doctorSer: DoctorserviceService) { }
  allSlots:any[]=[]
  checkLoader:boolean=false
  length:number[]=[]

  currentPage: number = 1;
pageSize: number = 15;
totalItems: number;
get pagedItems() {
  const startIndex = (this.currentPage - 1) * this.pageSize;
  return this.allSlots.slice(startIndex, startIndex + this.pageSize);
}
setPage(pageNumber: number) {
  this.currentPage = pageNumber;
}
  ngOnInit(): void {
    this.getAllSlots();
  }
  getAllSlots()
  {
    this.doctorSer.getAllSlots().subscribe((res)=>{
      console.log(res)
      setTimeout(() => {
        this.allSlots = res
        this.allSlots.sort((a, b) => (a.date < b.date) ? 1 : (a.date === b.date) ? ((a.from < b.from) ? 1 : -1) : -1 )
        this.length = Array(Math.ceil(this.allSlots.length/15)).fill(0).map((_, i) => i+1);
      this.checkLoader = true 
      }, 2000);
      
    })
  }
}
