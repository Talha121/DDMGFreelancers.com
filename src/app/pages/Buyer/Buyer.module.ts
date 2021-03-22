import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './Buyer.component';
import { NavComponent } from './Nav/Nav.component';
import { FooterComponent } from './Footer/Footer.component';
import { HomeBasicComponent } from './HomeBasic/HomeBasic.component';
import { BuyerRoutingModule } from './BuyerModuleroute.routing';
import { BuyerAuthHomeComponent } from './BuyerAuthHome/BuyerAuthHome.component';
import { BuyerPagesModule } from './BuyerPages/BuyerPages.module';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';  
import * as mat from '@angular/material'
import { SellerRegisterationComponent } from './SellerRegisteration/SellerRegisteration.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  imports: [
    CommonModule,
    BuyerRoutingModule,
    BuyerPagesModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    mat.MatSnackBarModule,
    mat.MatStepperModule,
    mat.MatTabsModule,
    mat.MatChipsModule,
    mat.MatIconModule,
    mat.MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    mat.MatFormFieldModule,
  ],
  declarations: [BuyerComponent,NavComponent,FooterComponent,HomeBasicComponent,BuyerAuthHomeComponent,SellerRegisterationComponent]
})
export class BuyerModule { }
