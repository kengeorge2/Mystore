// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProductCategoryService } from '../../services/product-category.service';
// Import Models
import { ProductCategory } from '../../domain/mystore_db/product-category';

// START - USED SERVICES
/**
* ProductCategoryService.create
*	@description CRUD ACTION create
*
* ProductCategoryService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ProductCategoryService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a ProductCategory
 */
@Component({
    selector: 'app-product-category-edit',
    templateUrl: 'product-category-edit.component.html',
    styleUrls: ['product-category-edit.component.css']
})
export class ProductCategoryEditComponent implements OnInit {
    item: ProductCategory;
    
    model: ProductCategory;
    formValid: Boolean;

    constructor(
    private productcategoryService: ProductCategoryService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new ProductCategory();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.productcategoryService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save ProductCategory
     *
     * @param {boolean} formValid Form validity check
     * @param ProductCategory item ProductCategory to save
     */
    save(formValid: boolean, item: ProductCategory): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.productcategoryService.update(item).subscribe(data => this.goBack());
            } else {
                this.productcategoryService.create(item).subscribe(data => this.goBack());
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



