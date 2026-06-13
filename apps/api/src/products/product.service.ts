import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import type {
  CreateProductRequest,
  Product,
  UpdateProductRequest,
} from '@repo/types';

@Injectable()
export class ProductService {
  private products: Product[] = [
    {
      id: '121212',
      name: 'Apple 1',
      price: 12,
    },
  ];

  create(createProductDto: CreateProductRequest): Product {
    const product = {
      id: crypto.randomUUID(),
      ...createProductDto,
    };
    this.products.push(product);

    return product;
  }

  findAll(): Product[] {
    return this.products;
  }

  findOne(pid: string): Product | undefined {
    if (this.products.length === 0) {
      return undefined;
    }

    return this.products.find((product) => product.id === pid);
  }

  update(id: number, updateProductDto: UpdateProductRequest) {
    return `This action updates a #${id}, ${JSON.stringify(updateProductDto)} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
