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
  ngOnInit(): void {
    this.getAllSlots();
  }
  getAllSlots()
  {
    this.doctorSer.getAllSlots().subscribe((res)=>{
      console.log(res)
      setTimeout(() => {
        this.allSlots = res
      this.checkLoader = true 
      }, 2000);
      
    })
  }


}
