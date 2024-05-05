import { Component } from '@angular/core';
import { menJeans } from 'src/Data/Men/menJeans';
import { mensShoesPage1 } from 'src/Data/shoes';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { lengha_page1 } from 'src/Data/Women/LenghaCholi';
import { mens_kurta } from 'src/Data/Men/men_kurta';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
menJeans:any;
womenGouns: any;
lehngaCholi: any;
menKurta: any;
shoes:any

ngOnInit(){
  console.log("lengha_page1.slice(0,5) ", lengha_page1.slice(0,5))
  this.menJeans = menJeans.slice(0,5);
  this.womenGouns = gounsPage1.slice(0,5);
  this.lehngaCholi = lengha_page1.slice(0,5);
  this.menKurta = mens_kurta.slice(0,5);
  this.shoes = mensShoesPage1.slice(0,5);
}
}
