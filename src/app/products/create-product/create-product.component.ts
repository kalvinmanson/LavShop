import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductsService} from '../../services/products.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  user:any = {};
  product:any = {
    name: '',
    photo: '',
    description: ''
  };

  constructor(
    private authService:AuthService,
    private productsService:ProductsService,
    private router:Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.authService.check().subscribe(res=>{
      if(res) {
        this.user = res;
      } else {
        this.router.navigate(['']);
      }
    });
  }

  create(){
    let error = 0;
    if(this.product.name.length < 5 || this.product.name.length > 50) {
      this.openSnackBar('El campo nombre del producto debe tener entre 5 y 50 caracteres', 'error');
      error = 1;
    }
    if(this.product.photo.length < 20) {
      this.openSnackBar('La url de la photo no es valida', 'error');
      error = 1;
    }
    if(this.product.description.length < 10 || this.product.description.length > 250) {
      this.openSnackBar('El campo descripcion del producto debe tener entre 5 y 50 caracteres', 'error');
      error = 1;
    }
    if(error == 0) {
      this.product.uid = this.user.uid;
      this.product.uphotoURL = this.user.photoURL;
      this.product.udisplayName = this.user.displayName;
      this.productsService.store(this.product).then(res=>{
        this.openSnackBar('Producto guardado', 'bien');
        this.router.navigate(['']);
      })
    }
    
  }

  openSnackBar(msg, type) {
    this._snackBar.open(msg, type, {
      duration: 2000,
    });
  }

}
