import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { ProductService } from './service/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:  'mssql',
      host: process.env.DATABASE_HOST || 'mariadb',
      port: parseInt(process.env.DATABASE_PORT) || 30082,
      username: process.env.DATABASE_USERNAME || 'nextgen',
      password: process.env.DATABASE_PASSWORD || 'UtlimateWuwei999',
      database: process.env.DATABASE_NAME || 'contoso',
      options: {
        encrypt: false
      }
    }),
  ],
  controllers: [AppController],
  providers: [ProductService],
})

export class AppModule { }
