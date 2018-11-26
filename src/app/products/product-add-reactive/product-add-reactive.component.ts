import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'product-add-reactive',
    templateUrl: './product-add-reactive.component.html',
})
export class ProductAddReactiveComponent implements OnInit {
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private productsService: ProductsService,
        fb: FormBuilder) {
        this.userForm = fb.group({
            id: fb.control('', [Validators.required]),
            name: fb.control('', [Validators.required, Validators.minLength(3)]),
            price: fb.control('', [Validators.required])
        });
    }

    public userForm: FormGroup;

    ngOnInit(): void {
    }

    public createProduct(): void {
        let product: Product =  this.userForm.value;
        console.log('reactive form was submitted', product);

        this.productsService.addProduct(product);
    }
}
