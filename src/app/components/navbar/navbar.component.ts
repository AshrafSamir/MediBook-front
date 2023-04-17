import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private auth:AuthService ) { }
  type!:string
  ngOnInit(): void {
    this.auth.userType.subscribe((value)=>{
        console.log(value)
        this.type = value
    })
  }
  logout()
  {
    this.auth.logOut();
  }

}
