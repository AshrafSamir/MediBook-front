import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  doctorid:any;
  Doctorsinformations=[];
    constructor(private route:ActivatedRoute , private http:HttpClient,private router:Router) { }
  
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
      // http://localhost:3000/doctorTimeSlots/
      const httpOptions = {
        headers: new HttpHeaders({      
          'auth':localStorage.getItem('token')
        })
      };
      this.http.get('http://localhost:3000/alldoctors',httpOptions).pipe(map((res)=>{
        console.log("jjj");
        this.Doctorsinformations=[];
        for(const key in res)
        {
          if(key=='allDoctorsData')
          {
            for(const key2 in res[key])
            {
              if(res[key][key2].specification==appointment.department||res[key][key2].clinicAddress
                ==appointment.address||this.doctors==res[key][key2].name)
                {
                  
                  this.Doctorsinformations.push(res[key][key2]);
                }
            }
            if(this.Doctorsinformations.length==0)
            {
              this.Doctorsinformations.push(...res[key]);
            }
            break;
          }
          
        }
        return this.Doctorsinformations;
      })).subscribe((res)=>{
        this.isLoaded=true;
          });
        }
    

        showTimeSlots(id:any)
        {
this.doctorid=id;
this.router.navigate(['/Availabletimes'],{queryParams:{id:this.doctorid}});
   
        }

}

