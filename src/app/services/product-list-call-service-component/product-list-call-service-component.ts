import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../../classes/IProduct';

@Component({
  selector: 'app-product-list-call-service-component',
  standalone: false,
  styleUrl: './product-list-call-service-component.css',
  templateUrl: './product-list-call-service-component.html',
})
export class ProductListCallServiceComponent {
  min_price:number=0
  max_price:number=10
      products: Product[] = []
      constructor(private ps:ProductService){

      }
      ngOnInit():void{
        this.products=this.ps.getProductsList()
      }
      callFilterProductListByPrice()
      {
        this.products=this.ps.filterProductListByPrice(this.min_price,this.max_price)
        }
}
