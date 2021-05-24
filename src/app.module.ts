import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { ProductService } from './service/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: process.env.DATABASE_HOST || 'mariadb',
    port: parseInt(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USERNAME || 'nextgen',
    password: process.env.DATABASE_PASSWORD || 'UtlimateWuwei999',
    database: process.env.DATABASE_DATABASE || 'contoso',
    entities: [],
  }),],
  controllers: [AppController],
  providers: [ProductService],
})


export class AppModule {}
