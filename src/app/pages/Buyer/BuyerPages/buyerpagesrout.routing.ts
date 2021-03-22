
import { MyrequestsComponent } from './myrequests/myrequests.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerPagesComponent } from './BuyerPages.component';
import { GigDetailComponent } from './GigDetail/GigDetail.component';
import { GigsComponent } from './Gigs/Gigs.component';
import { PostrequestComponent } from './postrequest/postrequest.component';

const routes: Routes = [
  {
    path:'',
    component:BuyerPagesComponent
    },
    {
      path:'gig',
      component:GigsComponent
    },
    {
      path:'gigdetail',
      component:GigDetailComponent
    },
    {
      path:'postrequest',
      component:PostrequestComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerPageRoutingModule { }
