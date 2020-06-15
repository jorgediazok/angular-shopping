import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Product | {} = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    private message: MessangerService
  ) {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
    this.message.getMessage().subscribe((data: Product) => {
      if (data) {
        this.product = data;
      } else {
        this.product = {};
      }
      console.log(this.product);
    });
  }
}
