// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProductService } from '../../services/product.service';
// Import Models
import { Product } from '../../domain/mystore_db/product';

// START - USED SERVICES
/**
* ProductService.create
*	@description CRUD ACTION create
*
* ProductService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ProductService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Product
 */
@Component({
    selector: 'app-product-edit',
    templateUrl: 'product-edit.component.html',
    styleUrls: ['product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
    item: Product;
    
    model: Product;
    formValid: Boolean;

    constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Product();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.productService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save Product
     *
     * @param {boolean} formValid Form validity check
     * @param Product item Product to save
     */
    save(formValid: boolean, item: Product): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.productService.update(item).subscribe(data => this.goBack());
            } else {
                this.productService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



