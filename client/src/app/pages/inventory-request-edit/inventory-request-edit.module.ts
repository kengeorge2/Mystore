import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryRequestEditComponent } from './inventory-request-edit.component';
import { InventoryRequestEditRoutingModule } from './inventory-request-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    InventoryRequestEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    InventoryRequestEditComponent
  ]
})
export class InventoryRequestEditModule { }
