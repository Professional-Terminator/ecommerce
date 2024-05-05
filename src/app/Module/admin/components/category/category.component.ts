import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {

  isCategoryAdd:boolean= false;

  constructor(private router: Router) {}

  ngOnInit(){
    this.router.navigate(['/admin/category']);
  }

  openAddCategoryForm(): void {
    this.isCategoryAdd = true;
      this.router.navigate(['/admin/category/add']);
  }

  openCategoryList(): void {
    this.isCategoryAdd = false;
      this.router.navigate(['/admin/category']);
  }

}
