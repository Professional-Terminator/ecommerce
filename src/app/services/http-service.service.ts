import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Module/model/category.model';
import { Brand } from '../Module/model/brand.model';
import { Product } from '../Module/model/product.model';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private apiUrl = 'http://localhost:3000';
  private category = 'category';
  private brands = 'brands';
  private products = 'products';
  private admin = "admin";

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/${this.admin}`).pipe(
      map(users => {
        const user = users.find(u => u.name === username && u.password === password);
        return !!user; // Returns true if user is found, otherwise false
      })
    );
  }

    addCategory(category: Category): Observable<Category> {
      return this.http.post<Category>(`${this.apiUrl}/${this.category}`, category);
    }
    getCategories(): Observable<Category[]> {
      return this.http.get<Category[]>(`${this.apiUrl}/${this.category}`);
    }
    deleteCategory(id: number | string): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${this.category}/${id}`);
    }
    getCategoryById(id: string): Observable<Category> {
      return this.http.get<Category>(`${this.apiUrl}/${this.category}/${id}`);
    }
    
    updateCategory(category: Category): Observable<Category> {
      return this.http.put<Category>(`${this.apiUrl}/${this.category}/${category.id}`, category);
    }

    getBrandsWithCategories(): Observable<any[]> {
      return forkJoin({
        brands: this.http.get<any[]>(`${this.apiUrl}/brands`),
        categories: this.http.get<any[]>(`${this.apiUrl}/category`)
      }).pipe(
        map(({brands, categories}) => 
          brands.map(brand => ({
            ...brand,
            categoryName: categories.find(c => c.id === brand.categoryId)?.categoryName
          }))
        )
      );
    }

    addBrand(category: Brand): Observable<Category> {
      return this.http.post<Category>(`${this.apiUrl}/${this.brands}`, category);
    }
    getBrands(): Observable<Brand[]> {
      return this.http.get<Brand[]>(`${this.apiUrl}/${this.brands}`);
    }
    deleteBrand(id: number | string): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${this.brands}/${id}`);
    }
    getBrandById(id: string): Observable<Brand> {
      return this.http.get<Brand>(`${this.apiUrl}/${this.brands}/${id}`);
    }
    getBrandByCategoryId(categoryId: string): Observable<Brand[]> {
      return this.http.get<Brand[]>(`${this.apiUrl}/${this.brands}`).pipe(
        map(brands => brands.filter(brand => brand.categoryId === categoryId))
      );
    }
    updateBrand(category: Brand): Observable<Brand> {
      return this.http.put<Brand>(`${this.apiUrl}/${this.brands}/${category.id}`, category);
    }


    addProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(`${this.apiUrl}/${this.products}`, product);
    }

    getProducts(): Observable<any[]> {
      return forkJoin({
        products: this.http.get<any[]>(`${this.apiUrl}/products`),
        brands: this.http.get<any[]>(`${this.apiUrl}/brands`),
        categories: this.http.get<any[]>(`${this.apiUrl}/category`)
      }).pipe(
        map(({products, brands, categories}) => 
          products.map(product => ({
            ...product,
            brandName: brands.find(b => b.id === product.brandId)?.brandName,
            categoryName: categories.find(c => c.id === product.categoryId)?.categoryName
          }))
        )
      );
    }

    getProductById(id: string): Observable<Product> {
      return this.http.get<Product>(`${this.apiUrl}/${this.products}/${id}`);
    }
    
    updateProduct(category: Product): Observable<Product> {
      return this.http.put<Product>(`${this.apiUrl}/${this.products}/${category.id}`, category);
    }
    deleteProduct(id: number | string): Observable<any> {
      return this.http.delete(`${this.apiUrl}/${this.products}/${id}`);
    }

    getProductsByBrandId(brandId: string): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.apiUrl}/${this.products}`).pipe(
        map(products => products.filter(product => product.brandId === brandId))
      );
    }

    getProductByCategoryId(categoryId: string): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.apiUrl}/${this.products}`).pipe(
        map(products => products.filter(product => product.categoryId === categoryId))
      );
    }
}
