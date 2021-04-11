import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl='https://localhost:44339/api/brands/';

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
  update(brand:Brand):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'brands/update';
    return this.httpClient.post<ResponseModel>(apiUrl,brand)
  }
  getBrand(id:Number):Observable<ItemResponseModel<Brand>>{
    let apiUrl = environment.apiUrl +'brands/getbyid?id='+id;
    return this.httpClient.get<ItemResponseModel<Brand>>(apiUrl);
  }
}
