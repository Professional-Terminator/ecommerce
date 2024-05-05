import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

interface Product {
  id: number;
  imageUrl: string;
  brandName: string;
  title: string;
  color: string;
  category: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent {
  showProductForm = false;  // Initially, show the product list

  constructor(private router: Router){}

  ngOnInit(){
    this.router.navigate(['/admin/products']);

  }
  openCreateProduct(): void {
    this.showProductForm = true;
      this.router.navigate(['/admin/products/add']);
  }

  openProductList(): void {
    this.showProductForm = false;
      this.router.navigate(['/admin/products']);
  }

 
}
