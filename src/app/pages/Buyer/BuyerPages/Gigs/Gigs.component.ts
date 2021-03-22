import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gig } from 'src/app/Models/Gig';
import { DataShareService } from 'src/app/_services/DataShare.service';
import { GigserviceService } from 'src/app/_services/gigservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Gigs',
  templateUrl: './Gigs.component.html',
  styleUrls: ['./Gigs.component.scss']
})
export class GigsComponent implements OnInit {
  subscription: Subscription;
  getgig:Gig[];
  gig:Gig[];
  p:number=1;
  gigdetail:any={};
  found:boolean=true;
  imagebaseurl=environment.imagepath+"/GigImageFiles/";
  imagebaseurl1=environment.imagepath+"/UserProfileImages/";
  constructor(private data: DataShareService,private gigservice:GigserviceService,private router: Router) { }

  ngOnInit() {
    debugger;
    this.subscription = this.data.currentMessage.subscribe(message => this.gig = message)
    
  this.getgig=this.gig;
  if(this.getgig==null){
   this.getgig=JSON.parse(localStorage.getItem('searchedgig'))
 
  }
  if(this.getgig==null){
    this.found=false;
  }


  }
  getgigdetails(id){
    this.gigservice.getgigdetails(id).subscribe((next:any)=>{
console.log(next);
this.gigdetail=next.res;
localStorage.setItem('gigdetail',JSON.stringify(this.gigdetail))
  this.data.GigList(this.gigdetail);
      console.log(next)
      this.router.navigate(['/home/force_buying_nav/buying_nav/gigdetail']);
    },error=>{

    })

  }
}
