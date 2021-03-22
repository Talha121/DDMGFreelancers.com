import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Gig } from 'src/app/Models/Gig';
import { AuthService } from 'src/app/_services/Auth.service';
import { ChatServiceService } from 'src/app/_services/ChatService.service';
import { DataShareService } from 'src/app/_services/DataShare.service';
import { GigserviceService } from 'src/app/_services/gigservice.service';
import { SellerInfoService } from 'src/app/_services/SellerInfo.service';
import { SignalrService } from 'src/app/_services/signalr.service';

@Component({
  selector: 'app-chatSellerNav',
  templateUrl: './SellerNav.component.html',
  styleUrls: ['./SellerNav.component.scss']
})
export class SellerNavComponent implements OnInit {

  navbartrancparent:boolean=false;
  loginpage:boolean=true;
  registepager:boolean=false;
  notification:boolean=false;
  mails:boolean=false;
  userdropdown:boolean=false;
  searchgig:string;
  sellerAcivated:any
  gig:Gig[];


  decodedToken:any;
 
  
  jwtHelper = new JwtHelperService();

name:string;
 


subscription: Subscription;



loginmessage:string;
userid:number;
chat:any[]=[];
unreadmessagecount:number=0;
  constructor(private chatservice:ChatServiceService,private signalrservice:SignalrService,private sellerservice:SellerInfoService,private modalService: NgbModal,private authservce:AuthService,private data: DataShareService,private gigservice:GigserviceService,private router: Router) { }
authenticated:any;
  ngOnInit() {
    debugger;
    this.name=localStorage.getItem('name');
    this.notification=false;
    this.authenticated=localStorage.getItem('token');
    if(this.authenticated!=null){
      this.getmessage();
      debugger;
      this.sellerservice.isactivate().subscribe((next:any)=>{
        this.sellerAcivated=next.res
      })
        }
   
    this.signalrservice.startConnection();
    this.signalrservice.hubConnection.on("SendMessage", (someText) => {
   
      
      if(this.authenticated!=null){
        this.getmessage();
          }



  })
    this.userdropdown=false;
    this.mails=false;
    this.authenticated=localStorage.getItem('token');
  }
  navbarshow()
  {
    alert("function ")
    this.navbartrancparent=!this.navbartrancparent;
  }
  loginsignupmodal(content){
    this.modalService.open(content, { centered: true })
  }
  showloginpage()
  {
    this.loginpage=true;
    this.registepager=false;
  }
  showmails()
  {
    this.notification=false;

this.userdropdown=false;
  this.mails=!this.mails;
  }
  shownotifications()
  {
  this.notification=!this.notification;
  }
  Userdropdown()
  {
  this.userdropdown=!this.userdropdown;
  }
  Showregisterpage()
  {
    this.loginpage=false;
    this.registepager=true;
  }
  logout(){
    localStorage.removeItem('token');
   this.router.navigate(['/home'])
  }

  
  search(){
    debugger;
    console.log(this.searchgig);
    this.gigservice.SearchGig(this.searchgig).subscribe((next:any)=>{
      this.gig=next.res;
      this.data.GigList(this.gig);
          console.log(next)
          this.router.navigate(['/home/force_buying_nav/buying_nav/gig']);
          },error=>{
          
          })
    


  }
  getmessage(){
    debugger;
    this.decodedToken = this.jwtHelper.decodeToken(this.authenticated);
    this.userid=this.decodedToken.ID
    this.chatservice.GetUserMessage().subscribe((next:any)=>{
      console.log(next)
      this.chat=next.res;
      
      this.unreadmessagecount=this.chat[0].unreadmessages;
    })
  }
}
