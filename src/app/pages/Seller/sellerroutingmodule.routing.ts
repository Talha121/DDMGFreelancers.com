import { MygigsComponent } from './Managegigs/mygigs/mygigs.component';
import { NewgigComponent } from './Managegigs/newgig/newgig.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerHomeComponent } from './SellerHome/SellerHome.component';
import { SellerIntroComponent } from './SellerIntro/SellerIntro.component';
import { SellerIntro1Component } from './SellerIntro1/SellerIntro1.component';
import { Sellerintro2Component } from './Sellerintro2/Sellerintro2.component';

import { DashboardComponent } from './Dashboard/Dashboard.component';


const routes: Routes = [
  { 
    path:'',
    component:SellerHomeComponent,
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full',

      },
      {
        path:'dashboard',
        component:DashboardComponent,
        pathMatch:'full',
      },
      {
        path:'intro',
        component:SellerIntro1Component,
      },
      {
       path:'intro2',
       component:Sellerintro2Component,
     },
     {
       path:'newgig',
       component:NewgigComponent,
     },
     {
       path:'mygigs',
       component:MygigsComponent,
     }
    ]
   }


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { 


}
