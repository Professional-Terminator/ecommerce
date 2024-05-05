import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lengha_page1 } from 'src/Data/Women/LenghaCholi';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

selectedSize:any;
reviews=[1,1,1];
relatedProducts:any;

constructor(private _router: Router){}

ngOnInit(){
  this.relatedProducts = lengha_page1.splice(0,10);
}
handleAddToCart(){
  console.log("Selected Size ", this.selectedSize); 

  this._router.navigate(["cart"]);
}


}
