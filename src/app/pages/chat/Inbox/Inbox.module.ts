import { InboxRoutingModule } from './inboxrouting.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './Inbox.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuyerModule } from '../../Buyer/Buyer.module';

import { SellerNavComponent } from './SellerNav/SellerNav.component';
import { NavComponent } from './Nav/Nav.component';



@NgModule({
  imports: [
    CommonModule,
    InboxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    NgbModule,
    BuyerModule
  ],
  declarations: [InboxComponent,SellerNavComponent,NavComponent
  ]
})
export class InboxModule { }
