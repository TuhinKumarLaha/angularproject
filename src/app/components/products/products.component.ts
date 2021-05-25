import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productvalue;
  constructor(private prod : ProductService) { }

  ngOnInit(): void {
    this.prod.getProducts().subscribe( e => {
      console.log(e);
      this.productvalue = e;
    })
  }

}
