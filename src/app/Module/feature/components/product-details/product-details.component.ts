import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lengha_page1 } from 'src/Data/Women/LenghaCholi';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

selectedSize:any;
reviews=[1,1,1];
relatedProducts:any;
product: any;

constructor(private _router: Router,
    private route: ActivatedRoute,
    private httpService: HttpServiceService
){}

ngOnInit(){
  // this.relatedProducts = lengha_page1.splice(0,10);
  this.route.paramMap.subscribe(params => {
    const productId = params.get('id');
    this.loadProductById(productId);
  });
}

loadProductById(productId:any){
  this.httpService.getProductById(productId).subscribe({
    next: (product)=>{
      this.product = product;
      this.loadRelatedProduct(product.categoryId)
          console.table(product);
    },
    error: (error)=>{
      console.error(error)
    }
  })
}
loadRelatedProduct(categoryId:string){
  this.httpService.getProductByCategoryId(categoryId).subscribe({
    next: (products)=>{
      this.relatedProducts = products
      console.log("[Products]=>", products)
    },
    error:(error)=>{
      console.error(error)
    }
  })
}

handleAddToCart(){
  console.log("Selected Size ", this.selectedSize); 

  this._router.navigate(["cart"]);
}


}
