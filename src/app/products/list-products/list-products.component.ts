import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  user:any = {};
  products:any = [];

  constructor(
    private productsService:ProductsService,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.authService.check().subscribe(res=>{
      if(res) {
        this.user = res;
      }
    });
    this.getProducts();
  }

  getProducts() {
    this.productsService.list().subscribe(res=>{
      this.products = res;
      console.log(this.products)
    })
  }
  delete(product) {
    if(product.uid == this.user.uid) {
      this.productsService.delete(product).then(res=>{
        console.log(res);
      })
    }
  }

}
