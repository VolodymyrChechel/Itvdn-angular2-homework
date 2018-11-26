import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
    selector: 'product-add',
    templateUrl: './product-add.component.html',
})
export class ProductAddComponent implements OnInit {
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService) { }

    ngOnInit(): void {
    }
    public createProduct(product: Product): void {
        console.log('form was submitted', product);

        this.productsService.addProduct(product);
    }
}
