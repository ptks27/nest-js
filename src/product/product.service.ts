import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    {
      name: 'Mango',
      id: 1,
      price: 60,
    },
    {
      name: 'Apple',
      id: 2,
      price: 70,
    },
    {
      name: 'Banana',
      id: 3,
      price: 20,
    },
    {
      name: 'Lemon',
      id: 4,
      price: 40,
    },
  ];
  findAll(): ProductDTO[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((p) => p.id === id);
  }
  //predicate คือ funtion ที่ retuen boolean
  findByCodition(predicate: (product: ProductDTO) => boolean) {
    return this.products.filter((p) => predicate(p));
  }
}
