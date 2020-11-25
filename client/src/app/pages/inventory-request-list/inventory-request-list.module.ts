import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRequestListComponent } from './inventory-request-list.component';
import { InventoryRequestListRoutingModule } from './inventory-request-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InventoryRequestListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    InventoryRequestListComponent
  ]
})
export class InventoryRequestListModule { }
