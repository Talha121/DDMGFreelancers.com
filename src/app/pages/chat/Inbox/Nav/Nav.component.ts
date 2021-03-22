
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
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
  selector: 'app-chattNav',
  templateUrl: './Nav.component.html',
  styleUrls: ['./Nav.component.scss']
})
export class NavComponent implements OnInit {

navbartrancparent:boolean=false;
loginpage:boolean=true;
registepager:boolean=false;
notification:boolean=false;
subscription: Subscription;
mails:boolean=false;
userdropdown:boolean=false;
searchgig:string;
sellerAcivated:any
gig:Gig[];
loginmessage:string;
userid:number;
chat:any[]=[];
unreadmessagecount:number=0;

@ViewChild('loginclick',{static:false}) private Loginclick: ElementRef;
decodedToken:any;
  name:string;
  validator:boolean=false;
  jwtHelper = new JwtHelperService();
  durationInSeconds = 5;



Registrationform:FormGroup=new FormGroup({
 
  User_Name: new FormControl(""),
  Email: new FormControl(""),
  
  Password: new FormControl(""),


 });
 LoginForm:FormGroup=new FormGroup({
  Email: new FormControl(""),
  Password: new FormControl(""),

 });

  constructor(private chatservice:ChatServiceService ,private _snackBar: MatSnackBar,private modalService: NgbModal,private authservce:AuthService,private signalrservice:SignalrService, private data: DataShareService,private sellerservice:SellerInfoService,private gigservice:GigserviceService,private router: Router) { }
authenticated:any;
  ngOnInit() {
 
    this.name=localStorage.getItem('name');
    this.notification=false;

    this.userdropdown=false;
    this.mails=false;
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
    window.location.reload();
  }
  Register(){
this.authservce.Register(this.Registrationform.value).subscribe((next:any)=>{
console.log(next);
this._snackBar.open("Register Seccessfully","X", {
  duration: 2000,
  verticalPosition: 'bottom',
  horizontalPosition: 'end', 
  panelClass: ['mat-toolbar', 'mat-primary']
});
this.Registrationform.reset();
this.modalService.dismissAll();
window.location.reload();
},error=>{
  console.log(error.error);
  
}
)
  }
  Login(){
    this.authservce.login(this.LoginForm.value).subscribe((next:any)=>{
      console.log(next);
      this._snackBar.open("Loged In Seccessfully","X", {
        duration: 2000,
        verticalPosition: 'bottom',
        horizontalPosition: 'end', 
        panelClass: ['mat-toolbar', 'mat-primary']
      });
      this.LoginForm.reset();
      this.modalService.dismissAll();
    
      window.location.reload();
      },error=>{
        console.log(error.error);

        this._snackBar.open("Username Or Password is Incorrect","X", {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'end', 
          panelClass: ['mat-toolbar', 'mat-danger']
        });
        
      }
      )
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
  ngAfterViewInit() {
    
   
   
    if(this.router.url=="/home/force_buying_nav/buying_nav/gigdetail"&&(localStorage.getItem('token')==null)){
this.Loginclick.nativeElement.click();
    }
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
