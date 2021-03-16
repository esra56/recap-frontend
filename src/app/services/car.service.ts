import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  getCarsDetails(carId: number) {
    throw new Error('Method not implemented.');
  }

  apiUrl='https://localhost:44339/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl+"cars/getcardetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "cars/carsDetailsByBrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "cars/getbybrandid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
}
