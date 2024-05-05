import { Component } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { mensPantsPage1 } from 'src/Data/pants/men_page1';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
filterData: any;
singleFilterData:any;
menPants:any;
constructor(private _router:Router ,private _activatedRoute: ActivatedRoute){}
ngOnInit(){

  this.filterData = filters;
  this.singleFilterData=singleFilter;
  this.menPants = mensPantsPage1;
}
handleMultipleSelectFilter(value:string, sectionId:string){
  console.log("value and section id >> ", value,sectionId);
const queryParams = {...this._activatedRoute.snapshot.queryParams}
const filterValue = queryParams[sectionId]?queryParams[sectionId].split(","):[];
const valueIndex = filterValue.indexOf(value);
if(valueIndex!=-1){
  filterValue.splice(valueIndex,1);
}else{
  filterValue.push(value);
}

if(filterValue.length>0){
  queryParams[sectionId] = filterValue.join(",")
}else{
  delete queryParams[sectionId];
}

this._router.navigate([],{queryParams}); 

}
handleSingleSelectFilter(value:string, sectionId:string){
const queryParams = {...this._activatedRoute.snapshot.queryParams}
queryParams[sectionId]=value;
this._router.navigate([],{queryParams});
}


}
