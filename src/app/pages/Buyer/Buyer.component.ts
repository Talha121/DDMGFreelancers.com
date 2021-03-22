import { Component, OnInit } from '@angular/core';
import { SignalrService } from 'src/app/_services/signalr.service';

@Component({
  selector: 'app-Buyer',
  templateUrl: './Buyer.component.html',
  styleUrls: ['./Buyer.component.scss']
})
export class BuyerComponent implements OnInit {

  constructor(private signalrservice:SignalrService) { }

  ngOnInit() {
    this.signalrservice.startConnection()
  }

}
