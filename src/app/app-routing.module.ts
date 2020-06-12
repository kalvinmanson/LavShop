import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { CreateProductComponent } from './products/create-product/create-product.component';


const routes: Routes = [
  { path: '', component: ListProductsComponent },
  { path: 'products/create-product', component: CreateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
