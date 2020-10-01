import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RedirectLoginGuard } from './sdk/custom/guards/redirect.login';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'userlogin',
    loadChildren: () => import('./userlogin/userlogin.module').then( m => m.UserloginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'userlogin',
    canActivate: [RedirectLoginGuard],
    loadChildren: () =>
      import('./userlogin/userlogin.module').then(m => m.UserloginPageModule)
  },
  {
    path: 'register',
    canActivate: [RedirectLoginGuard],
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'forgotpass',
    loadChildren: () => import('./forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'addservice',
    loadChildren: () => import('./addservice/addservice.module').then( m => m.AddservicePageModule)
  },
  {
    path: 'getservice',
    loadChildren: () => import('./getservice/getservice.module').then( m => m.GetservicePageModule)
  },
  {
    path: 'clientregister',
    loadChildren: () => import('./clientregister/clientregister.module').then( m => m.ClientregisterPageModule)
  },
  {
    path: 'clientverify',
    loadChildren: () => import('./clientverify/clientverify.module').then( m => m.ClientverifyPageModule)
  },
  {
    path: 'clientlogin',
    loadChildren: () => import('./clientlogin/clientlogin.module').then( m => m.ClientloginPageModule)
  },
  {
    path: 'searching',
    loadChildren: () => import('./searching/searching.module').then( m => m.SearchingPageModule)
  },
  {
    path: 'viewproperty',
    loadChildren: () => import('./viewproperty/viewproperty.module').then( m => m.ViewpropertyPageModule)
  },
  {
    path: 'select-property',
    loadChildren: () => import('./select-property/select-property.module').then( m => m.SelectPropertyPageModule)
  },
  {
    path: 'gethotel',
    loadChildren: () => import('./gethotel/gethotel.module').then( m => m.GethotelPageModule)
  },
  {
    path: 'addhotel',
    loadChildren: () => import('./addhotel/addhotel.module').then( m => m.AddhotelPageModule)
  },
  {
    path: 'clientcategory',
    loadChildren: () => import('./clientcategory/clientcategory.module').then( m => m.ClientcategoryPageModule)
  },
  {
    path: 'hotelsearch',
    loadChildren: () => import('./hotelsearch/hotelsearch.module').then( m => m.HotelsearchPageModule)
  },
  {
    path: 'viewhotel',
    loadChildren: () => import('./viewhotel/viewhotel.module').then( m => m.ViewhotelPageModule)
  },
  {
    path: 'bookhotel',
    loadChildren: () => import('./bookhotel/bookhotel.module').then( m => m.BookhotelPageModule)
  },
  {
    path: 'addroom',
    loadChildren: () => import('./addroom/addroom.module').then( m => m.AddroomPageModule)
  },
  {
    path: 'bookroom',
    loadChildren: () => import('./bookroom/bookroom.module').then( m => m.BookroomPageModule)
  },
  {
    path: 'addresturant',
    loadChildren: () => import('./addresturant/addresturant.module').then( m => m.AddresturantPageModule)
  },
  {
    path: 'getresturant',
    loadChildren: () => import('./getresturant/getresturant.module').then( m => m.GetresturantPageModule)
  },
  {
    path: 'resturantsearch',
    loadChildren: () => import('./resturantsearch/resturantsearch.module').then( m => m.ResturantsearchPageModule)
  },
  {
    path: 'viewresturant',
    loadChildren: () => import('./viewresturant/viewresturant.module').then( m => m.ViewresturantPageModule)
  },
  {
    path: 'addmenu',
    loadChildren: () => import('./addmenu/addmenu.module').then( m => m.AddmenuPageModule)
  },
  {
    path: 'showmenu',
    loadChildren: () => import('./showmenu/showmenu.module').then( m => m.ShowmenuPageModule)
  },
  {
    path: 'booktable',
    loadChildren: () => import('./booktable/booktable.module').then( m => m.BooktablePageModule)
  },
  {
    path: 'clientforgot',
    loadChildren: () => import('./clientforgot/clientforgot.module').then( m => m.ClientforgotPageModule)
  },
  {
    path: 'paymentprocess',
    loadChildren: () => import('./paymentprocess/paymentprocess.module').then( m => m.PaymentprocessPageModule)
  },
  {
    path: 'paymenttoken',
    loadChildren: () => import('./paymenttoken/paymenttoken.module').then( m => m.PaymenttokenPageModule)
  },
  
  {
    path: 'singleroom',
    loadChildren: () => import('./singleroom/singleroom.module').then( m => m.SingleroomPageModule)
  },
  {
    path: 'reservedroom',
    loadChildren: () => import('./reservedroom/reservedroom.module').then( m => m.ReservedroomPageModule)
  },
  {
    path: 'paymenthotel',
    loadChildren: () => import('./paymenthotel/paymenthotel.module').then( m => m.PaymenthotelPageModule)
  },
  {
    path: 'paymenttokenhotel',
    loadChildren: () => import('./paymenttokenhotel/paymenttokenhotel.module').then( m => m.PaymenttokenhotelPageModule)
  },
  {
    path: 'onlinepay',
    loadChildren: () => import('./onlinepay/onlinepay.module').then( m => m.OnlinepayPageModule)
  },
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
