import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { LoginComponent } from '../components/auths/login/login.component';
import { RegistrationComponent } from '../components/auths/registration/registration.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { AuthGuard } from '../auth.guard';
import { CartComponent } from '../components/cart/cart.component';
import { CheckOutComponent } from '../components/check-out/check-out.component';
import { OrderComponent } from '../components/order/order.component';

const route : Routes = [
  {
    path : 'login', component : LoginComponent
  },
  {path:'',redirectTo:'login',pathMatch:'full'},
  {
    path : 'registration', component : RegistrationComponent
  },
  {
    path : 'products', component : ProductsComponent, canActivate : [AuthGuard]
  },
  {
    path : 'productDetails/:productId', component : ProductDetailsComponent
  },
  {
    path : 'cart', component : CartComponent
  },
  {
    path : 'checkout', component : CheckOutComponent
  },
  {
    path : 'orderSection', component : OrderComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
