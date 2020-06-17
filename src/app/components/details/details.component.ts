import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  product: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.product = res;
    });
  }

  ngOnInit() {}
}
