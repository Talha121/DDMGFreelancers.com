import { OrderService } from './../../../../_services/Order.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataShareService } from 'src/app/_services/DataShare.service';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-GigDetail',
  templateUrl: './GigDetail.component.html',
  styleUrls: ['./GigDetail.component.scss']
})
export class GigDetailComponent implements OnInit {
gigdetail:any={};
subscription: Subscription;
imagebaseurl=environment.imagepath+"GigImageFiles/";
imagebaseurl1=environment.imagepath+"UserProfileImages/";
imageobj:any={};
imageObject:any[]=[];
basicpackageDisplay:boolean=true;
found:boolean=true;
StanderedpackageDisplay:boolean=false;
PrimpackageDisplay:boolean=false;
toggle = true;

Basictoggle = true;
Standrdtoggle = false;
premtoggle = false;
status = 'Enable';
  constructor(private data: DataShareService,private router: Router,private orderservice:OrderService,private modalService: NgbModal) { }
  DisplayBasicpkg()
  {
    this.Standrdtoggle=false
    this.premtoggle=false
    this.Basictoggle = !this.Basictoggle;
    this.status = this.Basictoggle ? 'Enable' : 'Disable';
  this.basicpackageDisplay=true;
  this.StanderedpackageDisplay=false;
  this.PrimpackageDisplay=false;
  }
  DisplayStnrdpkg()
  {
  
    this.Basictoggle=false
    this.premtoggle=false
    this.Standrdtoggle = !this.Standrdtoggle;
    this.status = this.Standrdtoggle ? 'Enable' : 'Disable';
    this.basicpackageDisplay=false;
    this.PrimpackageDisplay=false;
    this.StanderedpackageDisplay=true;
  }
  DisplayPremiumpkg()
  {
    this.Basictoggle=false
    this.Standrdtoggle=false
    this.Standrdtoggle=false
    this.premtoggle = !this.premtoggle;
    this.status = this.premtoggle ? 'Enable' : 'Disable';
    this.PrimpackageDisplay=true;
    this.basicpackageDisplay=false;
    this.StanderedpackageDisplay=false;
  }
  ngOnInit() {
   
    debugger;
    this.subscription = this.data.currentMessage.subscribe(message => this.gigdetail = message)
   
    var data=this.gigdetail;
  
    console.log(this.gigdetail);
    if(this.gigdetail==null){
      this.gigdetail=JSON.parse(localStorage.getItem('gigdetail'));

    }
    if(this.gigdetail==null){
this.found=false
    }
    
    for(let i=0;i<this.gigdetail.gigimages.length;i++){
      this.imageobj={
         image:this.imagebaseurl+this.gigdetail.gigimages[i],
       // image:'https://ddmgfreelancer.conveyor.cloud/Content/GigImageFiles/processed.jpeg',
       thumbImage: this.imagebaseurl+this.gigdetail.gigimages[i],
        
        alt:this.gigdetail.gigimages[i]
      }
      this.imageObject.push(this.imageobj);
    }
 console.log(this.imageObject)
  }
  Checkout(data:any){
    debugger
var token=localStorage.getItem('token');
if(token==null){
  var url=this.router.url;
  console.log(url)
   
    this.data.loginmodal("Loginfirst");
    window.location.reload();
   

}
else{
  debugger;
  localStorage.setItem('UserselectedPkg',data);
  var numb = data.deliveryTime;
  var data1=numb.split(" ");

 var  Offerdata={"GigId":data.gigId,"NumberOfRevision":data.revision,"DeliveryDays":parseInt(data1[0]),"OfferFrom":"Buyer","TotalOfferAmount":data.price}
 var obj={"offer":Offerdata,}
this.orderservice.PostOffer(obj).subscribe((next:any)=>{
  debugger
  Swal.fire('Thank you...', 'Order has been placed Successfully!', 'success')

},error=>{

}
)
}
 

  }
  


  loginsignupmodal(content){
    this.modalService.open(content, { centered: true })
  }




}
