import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {


  updateCartItem(num:Number){
    console.log("num ", num);
  }

  removeCartItem(){
    console.log("Cart Item Removed")
  }
}
