import { Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from 'src/model/product.mode';
import { ProductService } from '../service/product.service';

@Controller("/api")
export class AppController {

  constructor(private readonly productService: ProductService) {

  }

  @Get("products")
  getHello(): string {
    return this.productService.getHello();
  }

  @Get("product/:productId")
  getProduct(@Param('productId') productId: number): Product {
    return this.productService.getProduct(productId);
  }

  @Post("product/:productId")
  createProduct(product: Product): Product {
    return this.productService.createProduct(product);
  }

}
