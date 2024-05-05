import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

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
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  displayedColumns: string[] = ['imageUrl', 'brand', 'title', 'color', 'category', 'description', 'price', 'quantity', 'actions'];

  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private _http_service: HttpServiceService) {}

  ngOnInit(): void {
    this.loadProducts();
    // Dummy data for the table
    // this.dataSource.data = [
    //   { id:1, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 1', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:2, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 2', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:3, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 3', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:4, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 4', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:5, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 5', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:6, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 6', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:7, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 7', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:8, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 8', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:9, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 9', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:10, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 10', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:11, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 11', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:12, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 12', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:13, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 13', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:14, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 14', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:15, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 15', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:16, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 16', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:17, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 17', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:18, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 18', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:19, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 19', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:20, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 20', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:21, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 21', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   { id:22, imageUrl: 'https://via.placeholder.com/150', brandName: 'Brand A', title: 'Product 22', color: 'Red', category: 'Electronics', description: 'High-quality product', price: 199.99, quantity: 10 },
    //   // More dummy objects as needed...
    // ];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadProducts(): void {
    // this._http_service.getBrands().subscribe({
    //   next: (data) => {
    //     this.dataSource.data = data;
    //   },
    //   error: (error) => console.error('Error fetching brands:', error)
    // });

    this._http_service.getProducts().subscribe(data => {
      console.log("Data", data);
      this.dataSource.data = data;
    });
  }

  deleteProduct(id: number): void {
   
      this._http_service.deleteProduct(id).subscribe({
        next: () => {
          console.log('Product deleted successfully');
          this.loadProducts()
        },
        error: (error) => console.error('Error deleting Brand:', error)
      });
  
  }

  editProduct(id: number): void {
   
      console.log('Edit Product', id);
      // Add logic or navigation to edit product
      this.router.navigate(['/admin/products/edit', id]);
    
  }
}
