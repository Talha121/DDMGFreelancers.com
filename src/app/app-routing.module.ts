import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
   redirectTo:'home',
   pathMatch:'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/Buyer/Buyer.module').then(m => m.BuyerModule),
     
  } 
  ,
  {
    path: 'seller',
    loadChildren: () => import('./Pages/Seller/Seller.module').then(m => m.SellerModule),
     
  },
  {
    path: 'inbox',
    loadChildren: () => import('./Pages/chat/Inbox/Inbox.module').then(m => m.InboxModule),
     
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
