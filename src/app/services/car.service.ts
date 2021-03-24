import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})


export class CarService {
  

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl +'cars/getcardetail';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarByBrand(brandId:Number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl +`cars/getbybrand?brandid=${brandId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByColor(colorId:Number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl +`cars/getbycolor?colorid=${colorId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarByBrandAndColor(brandId:Number,colorId:Number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl +`cars/getbybrandandcolor?brandId=${brandId}&colorid=${colorId}`;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

}
