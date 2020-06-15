import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  productsFromService: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public productService: ProductService,
    public message: MessangerService
  ) {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.message.getMessage().subscribe((data) => {
      console.log(data);
    });
  }
}
