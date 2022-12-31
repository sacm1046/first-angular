import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  http = inject(HttpClient)

  products: Product[] = []
  ngOnInit() {
    this.http.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe(data => {
        this.products = data
        console.log(data)
      })
  }
}
