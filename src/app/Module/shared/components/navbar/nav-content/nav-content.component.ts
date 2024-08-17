import { Component, Input } from '@angular/core';
import { navigation } from 'src/Data/navigation';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent {
category: any;
brands!: any;
@Input() selectedSection: any;


constructor(private http_service: HttpServiceService){

}


ngOnInit(){
  this.category = navigation;
  console.log("Selected Section", this.selectedSection);
  this.loadBrandsByCategories(this.selectedSection);
}
loadBrandsByCategories(categoryId:any){
  this.http_service.getBrandByCategoryId(categoryId).subscribe({
    next: (data) => {
        this.brands = data;
    },
    error: (error) => console.error('Error fetching categories:', error)
  })
}
}
