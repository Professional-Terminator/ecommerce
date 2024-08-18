import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CategoryComponent } from './components/category/category.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CreateBrandComponent } from './components/brands/create-brand/create-brand.component';
import { ListBrandComponent } from './components/brands/list-brand/list-brand.component';
import { ProductListComponent } from './components/create-product/product-list/product-list.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {path:"", component:AdminComponent, canActivate: [authGuard], children:[
    {path:"", component:DashboardComponent},
    {path:"admin/orders", component:OrdersTableComponent},
    {path:"admin/products", component:AdminProductsComponent,
    children: [
      {path: '', component:ProductListComponent},
      { path: 'edit/:id', component: CreateProductComponent },
      { path: 'add', component: CreateProductComponent },
      // { path: '', pathMatch: 'full', redirectTo: 'list' }, // Redirects to list as a default or you can have a list component here
    ]
    },
    {
      path: 'admin/category',
      component: CategoryComponent,
      children: [
        {path: '', component:CategoryListComponent},
        { path: 'edit/:id', component: CategoryFormComponent },
        { path: 'add', component: CategoryFormComponent },
        // { path: '', pathMatch: 'full', redirectTo: 'list' }, // Redirects to list as a default or you can have a list component here
      ]
    },
    

    {path:"admin/brand", component:BrandsComponent,
    children: [
      {path: '', component:ListBrandComponent},
      { path: 'edit/:id', component: CreateBrandComponent },
      { path: 'add', component: CreateBrandComponent },
      // { path: '', pathMatch: 'full', redirectTo: 'list' }, // Redirects to list as a default or you can have a list component here
    ]
    },
    {path:"admin/customers", component:CustomersComponent},
    {path:"admin/products/create", component:CreateProductComponent}, 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
