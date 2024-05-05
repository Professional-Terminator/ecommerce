import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {
  isBrandAdd:boolean= false;

  constructor(private router: Router) {}

  ngOnInit(){
    this.router.navigate(['/admin/brand']);
  }

  openCreateBrand(): void {
    this.isBrandAdd = true;
      this.router.navigate(['/admin/brand/add']);
  }

  openBrandList(): void {
    this.isBrandAdd = false;
      this.router.navigate(['/admin/brand']);
  }

}
