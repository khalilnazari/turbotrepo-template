export class CreateProductRequest {
  name: string;
  price: number;

  constructor(obj: CreateProductRequest) {
    this.name = obj.name;
    this.price = obj.price;
  }
}
