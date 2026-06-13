import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import type {
  CreateProductRequest,
  Product,
  UpdateProductRequest,
} from '@repo/types';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductRequest): Product {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(): Product[] {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Product | undefined {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductRequest,
  ) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
