import { Component } from '@angular/core';
import { Get } from 'src/app/decorators/httpRequest.decorator';
import { HttpClient } from '@angular/common/http'
import { inject } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';

/* @Request */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  http = inject(HttpClient)

  @Get({
    url: "www.prueba.cl"
  }) products!: Product[]

  ngOnInit() {
    // console.log(this.products)
  }

}



