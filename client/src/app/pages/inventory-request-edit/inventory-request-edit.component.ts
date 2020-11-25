// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { InventoryRequestService } from '../../services/inventory-request.service';
// Import Models
import { InventoryRequest } from '../../domain/mystore_db/inventory-request';

// START - USED SERVICES
/**
* InventoryRequestService.create
*	@description CRUD ACTION create
*
* InventoryRequestService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* InventoryRequestService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a InventoryRequest
 */
@Component({
    selector: 'app-inventory-request-edit',
    templateUrl: 'inventory-request-edit.component.html',
    styleUrls: ['inventory-request-edit.component.css']
})
export class InventoryRequestEditComponent implements OnInit {
    item: InventoryRequest;
    
    model: InventoryRequest;
    formValid: Boolean;

    constructor(
    private inventoryrequestService: InventoryRequestService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new InventoryRequest();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.inventoryrequestService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save InventoryRequest
     *
     * @param {boolean} formValid Form validity check
     * @param InventoryRequest item InventoryRequest to save
     */
    save(formValid: boolean, item: InventoryRequest): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.inventoryrequestService.update(item).subscribe(data => this.goBack());
            } else {
                this.inventoryrequestService.create(item).subscribe(data => this.goBack());
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



