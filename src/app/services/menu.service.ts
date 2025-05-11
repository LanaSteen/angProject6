import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }


}
