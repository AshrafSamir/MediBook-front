import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-selecteddoctors',
  templateUrl: './selecteddoctors.component.html',
  styleUrls: ['./selecteddoctors.component.scss']
})
export class SelecteddoctorsComponent implements OnInit {

  department:string;
  address:string;
  isLoaded:boolean;
  doctors:string;
  Doctorsinformations=[];
    constructor(private route:ActivatedRoute , private http:HttpClient) { }
  
    ngOnInit(): void {
      
      this.route.queryParams.subscribe(params =>{
        this.department=params['department']?params['department']:null;
  this.address=params['address']?params['address']:null;
  this.doctors=params['doctor']?params['doctor']:null;
  this.postAppointment({doctors:this.doctors,address:this.address,department:this.department});
      })
    }
  
    postAppointment(appointment:{department:string,doctors:string,address:string}){
      this.isLoaded=false;
      this.http.get('http://localhost:3000/alldoctors').pipe(map((res)=>{
        console.log("jjj",res);
        this.Doctorsinformations=[];
        for(const key in res)
        {
          if(key=='allDoctorsData')
          {
            for(const key2 in res[key])
            {
              if(res[key][key2].specification==appointment.department||res[key][key2].clinicAddress
                ==appointment.address)
                {
                  
                  this.Doctorsinformations.push(res[key][key2]);
                }
            }
            break;
          }
          
        }
        return this.Doctorsinformations;
      })).subscribe((res)=>{
        this.isLoaded=true;
            console.log(res);
          });
        }

}

