import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Category } from 'src/app/Module/model/category.model';
import { Router } from '@angular/router';
// interface Category {
//   id: number;
//   name: string;

// }

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  displayedColumns: string[] = ['name','actions'];

  dataSource = new MatTableDataSource<Category>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _http_service: HttpServiceService,private router: Router){}

  ngOnInit(): void {
    this.loadCategories();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadCategories(): void {
    this._http_service.getCategories().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (error) => console.error('Error fetching categories:', error)
    });
  }

  deleteCategory(id: number | string): void {
    this._http_service.deleteCategory(id).subscribe({
      next: () => {
        console.log('Category deleted successfully');
        this.loadCategories()
      },
      error: (error) => console.error('Error deleting category:', error)
    });
  }

  editCategory(id: string): void {
    console.log('Edit product', id);
    // Add logic or navigation to edit product
    this.router.navigate(['/admin/category/edit', id]);
  }
}
