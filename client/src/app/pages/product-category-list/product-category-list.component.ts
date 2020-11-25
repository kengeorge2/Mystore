import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProductCategoryService } from '../../services/product-category.service';
// Import Models
import { ProductCategory } from '../../domain/mystore_db/product-category';

// START - USED SERVICES
/**
* ProductCategoryService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ProductCategoryService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of ProductCategory
 * @class ProductCategoryListComponent
 */
@Component({
    selector: 'app-product-category-list',
    templateUrl: './product-category-list.component.html',
    styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {
    list: ProductCategory[];
    search: any = {};
    idSelected: string;
    constructor(
        private productcategoryService: ProductCategoryService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.productcategoryService.list().subscribe(list => this.list = list);
    }

    /**
     * Select ProductCategory to remove
     *
     * @param {string} id Id of the ProductCategory to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected ProductCategory
     */
    deleteItem() {
        this.productcategoryService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
