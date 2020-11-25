import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { InventoryRequestService } from '../../services/inventory-request.service';
// Import Models
import { InventoryRequest } from '../../domain/mystore_db/inventory-request';

// START - USED SERVICES
/**
* InventoryRequestService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* InventoryRequestService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of InventoryRequest
 * @class InventoryRequestListComponent
 */
@Component({
    selector: 'app-inventory-request-list',
    templateUrl: './inventory-request-list.component.html',
    styleUrls: ['./inventory-request-list.component.css']
})
export class InventoryRequestListComponent implements OnInit {
    list: InventoryRequest[];
    search: any = {};
    idSelected: string;
    constructor(
        private inventoryrequestService: InventoryRequestService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.inventoryrequestService.list().subscribe(list => this.list = list);
    }

    /**
     * Select InventoryRequest to remove
     *
     * @param {string} id Id of the InventoryRequest to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected InventoryRequest
     */
    deleteItem() {
        this.inventoryrequestService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
