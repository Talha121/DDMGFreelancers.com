import { Component, OnInit } from '@angular/core';
import { SignalrService } from 'src/app/_services/signalr.service';

@Component({
  selector: 'app-BuyerAuthHome',
  templateUrl: './BuyerAuthHome.component.html',
  styleUrls: ['./BuyerAuthHome.component.scss']
})
export class BuyerAuthHomeComponent implements OnInit {

  constructor(private signalrservice:SignalrService) { }

  ngOnInit() {
    debugger;

  }

}
