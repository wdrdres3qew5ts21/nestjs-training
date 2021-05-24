import { Injectable } from '@nestjs/common';
import { Product } from 'src/model/product.mode';

@Injectable()
export class ProductService {
  createProduct(product: Product): Product {
    throw new Error('Method not implemented.');
  }
  
  getProduct(productId: number): Product {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }

}
