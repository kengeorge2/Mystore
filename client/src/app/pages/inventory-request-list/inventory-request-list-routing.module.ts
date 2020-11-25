import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryRequestListComponent } from './inventory-request-list.component';

const routes: Routes = [
  {
    path: '',
    component: InventoryRequestListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRequestListRoutingModule { }
