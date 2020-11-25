import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryListComponent } from './product-category-list.component';
import { ProductCategoryListRoutingModule } from './product-category-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProductCategoryListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProductCategoryListComponent
  ]
})
export class ProductCategoryListModule { }
