import { Pipe, PipeTransform } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Observable, map } from 'rxjs';

@Pipe({
  name: 'brnadName'
})
export class BrnadNamePipe implements PipeTransform {

  constructor(private httpService: HttpServiceService) {}

  transform(brandId: string): Observable<string> {
    return this.httpService.getBrandById(brandId).pipe(
      map(brand => brand.brandName)
    );
  }

}
