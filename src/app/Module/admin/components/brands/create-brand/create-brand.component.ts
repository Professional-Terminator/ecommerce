import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent {
  brandForm!: FormGroup;
  isEdit:boolean = false;
  categories: any[] = [];

  constructor(private fb: FormBuilder, private _http_service: HttpServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCategories()
    this.brandForm = this.fb.group({
      id:[''],
      brandName: ['', Validators.required],
      categoryId: ['', Validators.required]
    });

    const brandId = this.route.snapshot.paramMap.get('id');
    if (brandId) {
      console.log("[Category Id] >> ", brandId)
      this.isEdit = true;
      this.loadBrandDetails(brandId);
    }
  }

  loadCategories(): void {
    this._http_service.getCategories().subscribe({
      next: (data) => {
        this.categories= data;
      },
      error: (error) => console.error('Error fetching categories:', error)
    });
  }

  loadBrandDetails(id: string): void {
    this._http_service.getBrandById(id).subscribe({
      next: (brand) => this.brandForm.setValue({
        id: brand.id,
        brandName: brand.brandName,
        categoryId: brand.categoryId
      }),
      error: (err) => console.error('Error loading category', err)
    });
  }

  onSubmit() {
    console.log(this.brandForm.value);
    if (this.brandForm.valid) {
      const formValue = this.brandForm.value;
      if (this.isEdit) {
        this._http_service.updateBrand(formValue).subscribe({
          next: () => {
            alert('Brand updated successfully!');
            this.router.navigate(['/admin/brand']);
          },
          error: (err) => console.error('Error updating Brand', err)
        });
      } else {
        const formData = {
              ...this.brandForm.value,
              id: uuidv4()  // Use existing or generate new
            };
        this._http_service.addBrand(formData).subscribe({
          next: () => {
            alert('Brand added successfully!');
            this.router.navigate(['/admin/brand']);
          },
          error: (err) => console.error('Error adding Brand', err)
        });
      }
    }
  }

}
