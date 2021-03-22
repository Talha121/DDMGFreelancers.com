import { NewgigComponent } from './Managegigs/newgig/newgig.component';
import { MygigsComponent } from './Managegigs/mygigs/mygigs.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './Seller.component';
import { SellerRoutingModule } from './sellerroutingmodule.routing';
import { Sellerintro2Component } from './Sellerintro2/Sellerintro2.component';
import { SellerIntro1Component } from './SellerIntro1/SellerIntro1.component';
import { SellerIntroComponent } from './SellerIntro/SellerIntro.component';
import * as mat from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerNavComponent } from './SellerNav/SellerNav.component';
import { SellerFooterComponent } from './SellerFooter/SellerFooter.component';
import { SellerHomeComponent } from './SellerHome/SellerHome.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './Dashboard/Dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    SellerRoutingModule,
    mat.MatStepperModule,
    mat.MatTabsModule,
    mat.MatChipsModule,
    mat.MatIconModule,

    FormsModule,
    
    ReactiveFormsModule,
    NgbModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    mat.MatFormFieldModule,




   
  ],
  declarations: [
    SellerComponent,
    Sellerintro2Component,
    SellerIntro1Component,
    SellerIntroComponent,
   
    SellerNavComponent,
    SellerFooterComponent,
    MygigsComponent,
    NewgigComponent,
    SellerHomeComponent,
  DashboardComponent]
})
export class SellerModule { }
