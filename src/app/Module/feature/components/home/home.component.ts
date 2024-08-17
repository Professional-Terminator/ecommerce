import { Component } from '@angular/core';
import { menJeans } from 'src/Data/Men/menJeans';
import { mensShoesPage1 } from 'src/Data/shoes';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { lengha_page1 } from 'src/Data/Women/LenghaCholi';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { Brand } from 'src/app/Module/model/brand.model';
import { Product } from 'src/app/Module/model/product.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  brandsWithProducts: { brandName: string, products: Product[] }[] = [];

menJeans:any;
womenGouns: any;
lehngaCholi: any;
menKurta: any;
shoes:any

constructor(private httpService: HttpServiceService){}

ngOnInit(){
  this.fetchBrandsWithProducts();
  console.log("lengha_page1.slice(0,5) ", lengha_page1.slice(0,5))
  this.menJeans = menJeans.slice(0,5);
  this.womenGouns = gounsPage1.slice(0,5);
  this.lehngaCholi = lengha_page1.slice(0,5);
  this.menKurta = mens_kurta.slice(0,5);
  this.shoes = mensShoesPage1.slice(0,5);
}
fetchBrandsWithProducts() {
  this.httpService.getBrands().subscribe((brands: Brand[]) => {
    brands.forEach(brand => {
      this.httpService.getProductsByBrandId(brand.id).subscribe((products: Product[]) => {
        // Add brandName to each product object
        const productsWithBrandName = products.slice(0, 5).map(product => ({
          ...product,
          brandName: brand.brandName
        }));

        // Push the brand and its products into the array
        this.brandsWithProducts.push({
          brandName: brand.brandName,
          products: productsWithBrandName
        });
      });
    });
  });
}

}
