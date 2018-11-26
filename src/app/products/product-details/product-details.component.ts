import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService) { }

    public product: Product;

    ngOnInit(): void {
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params['id'];

            this.product = this.productsService.getProduct(id);
        });
    }
}
