import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productdetails;

  constructor(private prod : ProductService, private active_route : ActivatedRoute) { }

  ngOnInit(): void {

    this.prod.getProducts().subscribe(e =>{

      this.active_route.params.subscribe(pId =>{

        this.productdetails = e.filter( product => {
          return product.id == pId.productId;
        })

        console.log(this.productdetails);
      })
    })
  }

}
