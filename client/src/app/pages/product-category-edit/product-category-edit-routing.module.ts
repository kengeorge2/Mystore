import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryEditComponent } from './product-category-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductCategoryEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductCategoryEditRoutingModule { }
