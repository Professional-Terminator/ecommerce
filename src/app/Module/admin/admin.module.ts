import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductListComponent } from './components/create-product/product-list/product-list.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryFormComponent } from './components/category/category-form/category-form.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CreateBrandComponent } from './components/brands/create-brand/create-brand.component';
import { ListBrandComponent } from './components/brands/list-brand/list-brand.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
  
    AdminComponent,
       DashboardComponent,
       AdminProductsComponent,
       OrdersTableComponent,
       CustomersComponent,
       CreateProductComponent,
       ProductListComponent,
       CategoryComponent,
       CategoryListComponent,
       CategoryFormComponent,
       BrandsComponent,
       CreateBrandComponent,
       ListBrandComponent,
       

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class AdminModule { }
