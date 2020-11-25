import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryRequestEditComponent } from './inventory-request-edit.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryRequestEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRequestEditRoutingModule { }
