import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Brand } from 'src/app/Module/model/brand.model';

@Component({
  selector: 'app-list-brand',
  templateUrl: './list-brand.component.html',
  styleUrls: ['./list-brand.component.scss']
})
export class ListBrandComponent {

  displayedColumns: string[] = ['brandName','categoryName','actions'];

  dataSource = new MatTableDataSource<Brand>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _http_service: HttpServiceService,private router: Router){}

  ngOnInit(): void {
    // Dummy data for the table
    // this.dataSource.data = [
    //   { id:1, name:'Lays'},
    //   { id:2, name:'Kurkary'},
    //   { id:3, name:'Dolite'},
    //   { id:4, name:'NutKhut'},
    
    //   // More dummy objects as needed...
    // ];
    this.loadBrands();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadBrands(): void {
    // this._http_service.getBrands().subscribe({
    //   next: (data) => {
    //     this.dataSource.data = data;
    //   },
    //   error: (error) => console.error('Error fetching brands:', error)
    // });

    this._http_service.getBrandsWithCategories().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  deleteBrand(id: number | string): void {
    this._http_service.deleteBrand(id).subscribe({
      next: () => {
        console.log('Brand deleted successfully');
        this.loadBrands()
      },
      error: (error) => console.error('Error deleting Brand:', error)
    });
  }

  editBrand(id: string): void {
    console.log('Edit Brand', id);
    // Add logic or navigation to edit product
    this.router.navigate(['/admin/brand/edit', id]);
  }
}
