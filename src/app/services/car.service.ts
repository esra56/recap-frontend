import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

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

  getCar(id:Number):Observable<ItemResponseModel<Car>>{
    let apiUrl = environment.apiUrl +'cars/getbyid?id='+id;
    return this.httpClient.get<ItemResponseModel<Car>>(apiUrl);
  }


  add(car:CarDto):Observable<ResponseModel>{
    let newPath = environment.apiUrl +`cars/add`;
    return this.httpClient.post<ResponseModel>(newPath,car);
  }
  update(car:Car):Observable<ResponseModel>{
    let newPath = environment.apiUrl +`cars/update`;
    return this.httpClient.post<ResponseModel>(newPath,car);
  }

}
