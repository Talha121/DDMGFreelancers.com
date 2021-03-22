import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/_services/Auth.service';
import { OrderService } from 'src/app/_services/Order.service';
import { SellerInfoService } from 'src/app/_services/SellerInfo.service';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
Sellerprofile:any;
myorderslist:any;
name:string;
  validator:boolean=false;
  jwtHelper = new JwtHelperService();
  constructor( private authservce:AuthService,private _service:SellerInfoService,private orderservice:OrderService) { }

  ngOnInit() {
    debugger;
localStorage.setItem('nav',"nav");
    this.name=localStorage.getItem('name');
    this.  myprofile();
    this.myorderes();
    
  }
  myorderes()
  {
    this.orderservice.myorders().subscribe((next:any)=>{
      this.myorderslist=next;
      console.log(this.myorderslist);

          },error=>{
            console.log(error)
          })
  }
  myprofile()
  {
    this._service.Userinfo().subscribe((next:any)=>{
      this.Sellerprofile=next.res;
      console.log(this.Sellerprofile);
      console.log(next)
          },error=>{
            console.log(error)
          })
  }

}
