import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Product } from 'src/model/product.mode';
import { ProductService } from '../service/product.service';
import { getManager as mssqlClient} from 'typeorm';

@Controller("/api")
export class AppController {

  constructor(private readonly productService: ProductService) {

  }

  @Get("products")
  getHello(): string {
    return this.productService.getHello();
  }

  @Get("product/:productId")
  async getProduct(@Param('productId') productId: number): Promise<any> {
    let data = {}
    await mssqlClient().query(`exec API_NOCLAIM @param1, @param2, @param3, @param4`)
    .then(res=>{
      data = res
    })
    .catch(err=>{

    })
    
    return data;
  }

  @Get("claim-status")
  async getClaimStatus(
    @Query('chassisNo') chassisNo: string,
    @Query('cc') cc: string,
    @Query('newcar') newcar: string,
    @Query('warrantBook') warrantBook: string,
  ): Promise<any> {
    let data = {}
    console.log("god")
    let sqlParams = [chassisNo, cc, newcar, warrantBook]
    console.log(sqlParams)
    await mssqlClient().query(`exec API_NOCLAIM '${chassisNo}', '${cc}', '${newcar}', '${warrantBook}' `,sqlParams).then(res=>{
      data = res
      console.log(res)
    })
    .catch(err=>{

    })
    
    return data;
  }

  @Post("product/:productId")
  createProduct(product: Product): Product {
    return this.productService.createProduct(product);
  }

}
