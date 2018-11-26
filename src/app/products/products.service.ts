import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductsService {
constructor()
{
    this.products = [
        new Product(1, 'Sausage', 110),
        new Product(2, 'Onion', 43),
        new Product(3, 'Tomato', 30),
    ]
}

    public products: Product[];

    public getProduct(id: number): Product {
        return this.products.filter(product => product.id === id)[0];
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }
}
