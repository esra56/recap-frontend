import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl='https://localhost:44339/api/colors/getall';

  constructor(private httpClient:HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }

  add(color:Color):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'colors/add';
    return this.httpClient.post<ResponseModel>(apiUrl,color);
  }
  getColor(id:Number):Observable<ItemResponseModel<Color>>{
    let apiUrl = environment.apiUrl +'Colors/getbyid?id='+id;
    return this.httpClient.get<ItemResponseModel<Color>>(apiUrl);
  }
  update(Color:Color):Observable<ResponseModel>{
    let apiUrl = environment.apiUrl +'Colors/update';
    return this.httpClient.post<ResponseModel>(apiUrl,Color)
  }
}
