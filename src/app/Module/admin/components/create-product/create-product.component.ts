import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  productForm!: FormGroup;
  categories: any[] = [];
  brands: any[] = [];
  isEdit: boolean =false;

  constructor(private fb: FormBuilder, private _http_service:HttpServiceService,private route:ActivatedRoute ,private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadBrands();
    this.productForm = this.fb.group({
      id:[''],
      imageUrl: ['', Validators.required],
      brandId: ['', Validators.required],
      title: ['', Validators.required],
      color: [''],
      categoryId: [''],
      description: [''],
      price: ['', Validators.required],
      quantity: ['', Validators.required]
    });

    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      console.log("[Category Id] >> ", productId)
      this.isEdit = true;
      this.loadProductDetails(productId);
    }

  }

  loadProductDetails(id: string): void {
    this._http_service.getProductById(id).subscribe({
      next: (product) => this.productForm.setValue({
        id:product.id,
        imageUrl: product.imageUrl,
        brandId: product.brandId,
        title: product.title,
        color: product.color,
        categoryId: product.categoryId,
        description: product.description,
        price: product.price,
        quantity: product.quantity
      }),
      error: (err) => console.error('Error loading category', err)
    });
  }


  loadBrands(): void {
    this._http_service.getBrands().subscribe({
      next: (data) => {
        this.brands= data;
      },
      error: (error) => console.error('Error fetching brands:', error)
    });   
  }

  loadCategories(): void {
    this._http_service.getCategories().subscribe({
      next: (data) => {
        this.categories= data;
      },
      error: (error) => console.error('Error fetching categories:', error)
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      if (this.isEdit) {
        this._http_service.updateProduct(formValue).subscribe({
          next: () => {
            alert('Product updated successfully!');
            this.router.navigate(['/admin/products']);
          },
          error: (err) => console.error('Error updating Brand', err)
        });
      } else {
        const formData = {
              ...this.productForm.value,
              id: uuidv4()  // Use existing or generate new
            };
        this._http_service.addProduct(formData).subscribe({
          next: () => {
            alert('Product added successfully!');
            this.router.navigate(['/admin/products']);
          },
          error: (err) => console.error('Error adding Brand', err)
        });
      }
    }
  }
}
