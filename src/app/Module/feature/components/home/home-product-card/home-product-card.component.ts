import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.scss']
})
export class HomeProductCardComponent {
@Input() product:any
constructor(private _router: Router){}

routeToDetails(id:any){
  console.log("id", id)
  this._router.navigate([`product-details/${id}`])
}
}
