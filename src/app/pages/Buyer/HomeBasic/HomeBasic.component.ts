import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerService } from 'ngx-spinner';

import { Gig } from 'src/app/Models/Gig';
import { AuthService } from 'src/app/_services/Auth.service';
import { CategoreyserviceService } from 'src/app/_services/categoreyservice.service';
import { ChatServiceService } from 'src/app/_services/ChatService.service';
import { DataShareService } from 'src/app/_services/DataShare.service';
import { GigserviceService } from 'src/app/_services/gigservice.service';
import { SignalrService } from 'src/app/_services/signalr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-HomeBasic',
  templateUrl: './HomeBasic.component.html',
  styleUrls: ['./HomeBasic.component.scss']
})
export class HomeBasicComponent implements OnInit {

  images = [  
    { img: "../../../assets/images/blog-01a.jpg" }, 
    { img: "../../../assets/images/blog-01a.jpg" }, 
    { img: "../../../assets/images/blog-01a.jpg" },  

       { img: "../../../assets/images/blog-01a.jpg" }, 
       { img: "../../../assets/images/blog-01a.jpg" }, 
       { img: "../../../assets/images/blog-01a.jpg" }, 
       { img: "../../../assets/images/blog-01a.jpg" }, 
       { img: "../../../assets/images/blog-01a.jpg" }, 
       { img: "../../../assets/images/blog-01a.jpg" }, 

    
  ];  
  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true,
    "arrows":true  
  }; 
  chat:any[]=[] 
  constructor(private spinner: NgxSpinnerService,private chatservice:ChatServiceService, private signalrservice:SignalrService, private authservce:AuthService,private service:CategoreyserviceService,private data: DataShareService,private gigservice:GigserviceService,private router: Router) { }
popularservice:any[]=[];
searchgig:string;
UserLogin:boolean=false;
categoreyandsubcategorey:any[]=[];
gig:Gig[];
browsinggig:Gig[];

GigsYouMayLike:Gig[];
getgig:Gig[];
gigdetail:any={};
userid:number;
decodedToken:any;
name:string;
  validator:boolean=false;
  jwtHelper = new JwtHelperService();
imagebaseurl2=environment.imagepath+"/GigImageFiles/";
imagebaseurl1=environment.imagepath+"/UserProfileImages/";
imagebaseurl=environment.imagepath+"/CategoryImages/";


  ngOnInit() {
   
    this.spinner.show();
 
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
    
    this.signalrservice.startConnection()
    localStorage.removeItem('nav');
    debugger;
    this.name=localStorage.getItem('name');
    let IsUserRegister=localStorage.getItem('token');
    if(IsUserRegister!=null)
    {
    
      this.UserLogin=true;
      this.gigservice.GetBrowsingGig().subscribe((next:any)=>{
this.browsinggig=next.res;

      },error=>{
        console.log(error)
      })
     
      this.gigservice.Getpopulargigs().subscribe((next:any)=>{
        debugger
        this.getgig=next.res;
      
            },error=>{
            
            })
            this.gigservice.GigsYouMayLike().subscribe((next:any)=>{
this.GigsYouMayLike=next.res;
            },error=>{

            })
    }
    else{
      this.service.GetpopularServices().subscribe((next:any)=>{
        this.popularservice=next;
        console.log(next)
        },error=>{
        
        });
        this.service.Getcatandsubcat().subscribe((next:any)=>{
        this.categoreyandsubcategorey=next;
        console.log(next)
        },error=>{
        
        })
        this.gigservice.Getpopulargigs().subscribe((next:any)=>{
          debugger
          this.getgig=next.res;
        
              },error=>{
              
              })
    }

  }
  getgigdetails(id){
    debugger;
    this.gigservice.getgigdetails(id).subscribe((next:any)=>{
console.log(next);
this.gigdetail=next.res;
  this.data.GigList(this.gigdetail);
      console.log(next)
      this.router.navigate(['/home/force_buying_nav/buying_nav/gigdetail']);
    },error=>{

    })

  }
  getgigs(id){
    this.gigservice.getcatwisegig(id).subscribe((next:any)=>{
  this.gig=next.res.gig;
  this.data.GigList(this.gig);
      console.log(next)
      this.router.navigate(['/home/force_buying_nav/buying_nav/gig']);
      },error=>{
      
      })

  }
  search(){
    debugger;
    console.log(this.searchgig);
    this.gigservice.SearchGig(this.searchgig).subscribe((next:any)=>{
      this.gig=next.res;
      this.data.GigList(this.gig);
      localStorage.setItem("searchedgig",JSON.stringify(this.gig))
          console.log(next)
          this.router.navigate(['/home/force_buying_nav/buying_nav/gig']);
          },error=>{
          
          })
    


  }
}
