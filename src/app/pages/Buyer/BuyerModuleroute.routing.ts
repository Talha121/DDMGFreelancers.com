import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerAuthHomeComponent } from './BuyerAuthHome/BuyerAuthHome.component';
import { HomeBasicComponent } from './HomeBasic/HomeBasic.component';
import { SellerRegisterationComponent } from './SellerRegisteration/SellerRegisteration.component';

const routes: Routes = [
  { 
    path:'',
    component:HomeBasicComponent
   },
   {
     path:'force_buying_nav',
     component:BuyerAuthHomeComponent,
     children:[
       {
         path:'',
         redirectTo:'buying_nav',
         pathMatch:'full'
       },{
        path:'buying_nav',
        
        loadChildren: () => import('./BuyerPages/BuyerPages.module').then(m => m.BuyerPagesModule),
       },
       {
        path:'becomeseller',
      component:SellerRegisterationComponent,
        pathMatch:'full',
    
      },
       
     ]

     
   }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { 


}
