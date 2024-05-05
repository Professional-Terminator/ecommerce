import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent {

  categoryForm!: FormGroup;
  isEdit:boolean = false;

  constructor(private fb: FormBuilder, private _http_service: HttpServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      id:[''],
      categoryName: ['', Validators.required],
    });

    const categoryId = this.route.snapshot.paramMap.get('id');
    if (categoryId) {
      console.log("[Category Id] >> ", categoryId)
      this.isEdit = true;
      this.loadCategoryDetails(categoryId);
    }

  }


  loadCategoryDetails(id: string): void {
    this._http_service.getCategoryById(id).subscribe({
      next: (category) => this.categoryForm.setValue({
        id: category.id,
        categoryName: category.categoryName
      }),
      error: (err) => console.error('Error loading category', err)
    });
  }

  onSubmit() {
    // if (this.categoryForm.valid) {
    //   // Ensure there's an ID, generate if necessary
    //   const formData = {
    //     ...this.categoryForm.value,
    //     id: uuidv4()  // Use existing or generate new
    //   };
    //   this._http_service.addCategory(formData).subscribe({
    //     next: (res) => {
    //       console.log('Category added:', res);
    //       this.categoryForm.reset();
    //     },
    //     error: (err) => console.error('Error adding category:', err)
    //   });
    // }

    if (this.categoryForm.valid) {
      const formValue = this.categoryForm.value;
      if (this.isEdit) {
        this._http_service.updateCategory(formValue).subscribe({
          next: () => {
            alert('Category updated successfully!');
            this.router.navigate(['/admin/category']);
          },
          error: (err) => console.error('Error updating category', err)
        });
      } else {
        const formData = {
              ...this.categoryForm.value,
              id: uuidv4()  // Use existing or generate new
            };
        this._http_service.addCategory(formData).subscribe({
          next: () => {
            alert('Category added successfully!');
            this.router.navigate(['/admin/category']);
          },
          error: (err) => console.error('Error adding category', err)
        });
      }
    }
  } 
}
