// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { InventoryRequestEditComponent} from './pages/inventory-request-edit/inventory-request-edit.component';
import { InventoryRequestListComponent} from './pages/inventory-request-list/inventory-request-list.component';
import { ProductCategoryEditComponent} from './pages/product-category-edit/product-category-edit.component';
import { ProductCategoryListComponent} from './pages/product-category-list/product-category-list.component';
import { ProductEditComponent} from './pages/product-edit/product-edit.component';
import { ProductListComponent} from './pages/product-list/product-list.component';
import { UserEditComponent} from './pages/user-edit/user-edit.component';
import { UserListComponent} from './pages/user-list/user-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'inventoryrequests/:id',  loadChildren: './pages/inventory-request-edit/inventory-request-edit.module#InventoryRequestEditModule' , canActivate: [AuthGuard] },
    { path: 'inventoryrequests',  loadChildren: './pages/inventory-request-list/inventory-request-list.module#InventoryRequestListModule' , canActivate: [AuthGuard] },
    { path: 'productcategorys/:id',  loadChildren: './pages/product-category-edit/product-category-edit.module#ProductCategoryEditModule' , canActivate: [AuthGuard] },
    { path: 'productcategorys',  loadChildren: './pages/product-category-list/product-category-list.module#ProductCategoryListModule' , canActivate: [AuthGuard] },
    { path: 'products/:id',  loadChildren: './pages/product-edit/product-edit.module#ProductEditModule' , canActivate: [AuthGuard] },
    { path: 'products',  loadChildren: './pages/product-list/product-list.module#ProductListModule' , canActivate: [AuthGuard] },
    { path: 'users/:id',  loadChildren: './pages/user-edit/user-edit.module#UserEditModule' , canActivate: [AuthGuard] },
    { path: 'users',  loadChildren: './pages/user-list/user-list.module#UserListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
