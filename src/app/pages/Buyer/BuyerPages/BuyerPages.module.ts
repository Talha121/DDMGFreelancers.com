
import { MyrequestsComponent } from './myrequests/myrequests.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerPagesComponent } from './BuyerPages.component';
import { BuyerPageRoutingModule } from './buyerpagesrout.routing';
import { GigsComponent } from './Gigs/Gigs.component';
import { GigDetailComponent } from './GigDetail/GigDetail.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { PostrequestComponent } from './postrequest/postrequest.component';
import * as mat from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../Footer/Footer.component';
import { BuyerModule } from '../Buyer.module';



@NgModule({
  imports: [
    CommonModule,
    BuyerPageRoutingModule,
    NgImageSliderModule,
    mat.MatTabsModule,
    NgxPaginationModule,
    NgbModule,
 
  ],
  declarations: [BuyerPagesComponent,PostrequestComponent,MyrequestsComponent,GigsComponent,GigDetailComponent]
})
export class BuyerPagesModule { }
