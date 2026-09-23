import { Component } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-catalog-product',
  standalone: false,
  styleUrl: './catalog-product.css',
  templateUrl: './catalog-product.html',
})
export class CatalogProduct {
    categories: any;

  constructor(private catalogService: CatalogService) {
    this.categories = catalogService.getCategories();
  }

}
