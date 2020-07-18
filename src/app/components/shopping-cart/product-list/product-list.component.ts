import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      return (this.productList = products);
    });
  }

  searchProduct(e) {
    this.productList = this.productList.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    if (e.target.value === '') {
      this.productService.getProducts().subscribe((products) => {
        return (this.productList = products);
      });
    }
  }
}
