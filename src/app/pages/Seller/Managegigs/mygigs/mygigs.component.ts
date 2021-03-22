import { Component, OnInit } from '@angular/core';
import { Gig } from 'src/app/Models/Gig';
import { GigserviceService } from 'src/app/_services/gigservice.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mygigs',
  templateUrl: './mygigs.component.html',
  styleUrls: ['./mygigs.component.scss']
})
export class MygigsComponent implements OnInit {
gig:Gig[]
imagebaseurl=environment.imagepath+"/GigImageFiles/";
imagebaseurl1=environment.imagepath+"/UserProfileImages/";
  constructor(private gigservice:GigserviceService) { }

  ngOnInit() {
    this.gigservice.GetUserGigs().subscribe((next:any)=>{
this.gig=next.res;
console.log(this.gig);
console.log(next)
    },error=>{
      console.log(error)
    })



  }

  

}
