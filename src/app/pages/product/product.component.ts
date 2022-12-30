import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  id: string | null = "";

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
