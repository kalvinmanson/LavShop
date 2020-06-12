import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'LavShop';
  logged:boolean = false;
  user:any = {};

  constructor(
    private authService:AuthService,
    private router: Router
  ) {

  }
  ngOnInit() {
    console.log(this.authService.check().subscribe(res=>{
      if(res) {
        this.user = res;
      }
    }))
  }
  login() {
    this.authService.login().then(res=>{
      if(res) {
        this.user = res;
      }
    })
  }
  logout() {
    this.authService.logout().then(res=>{
      console.log(res)
      this.user = {};
    })
  }

}
