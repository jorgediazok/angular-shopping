import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
