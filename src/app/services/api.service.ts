import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }


  getAll(){
    return this.http.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }
  getById(id:number){
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)

  }

  book(obj : any){

        return this.http.post('https://hotelbooking.stepprojects.ge/api/Booking', obj)

  }


}
