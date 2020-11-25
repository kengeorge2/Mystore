import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryEditComponent } from './product-category-edit.component';
import { ProductCategoryEditRoutingModule } from './product-category-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProductCategoryEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProductCategoryEditComponent
  ]
})
export class ProductCategoryEditModule { }
