import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Hotel } from '../models/hotel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  constructor(private api : ApiService, private route : ActivatedRoute){
     this.route.params.subscribe(data => {
       console.log(data['id'])
       this.hotelId = data['id']
     })
  }
  hotelId =0
  singleHotel : Hotel = new Hotel
  ngOnInit(){
    this.api.getById(this.hotelId).subscribe((resp : any) => {
      console.log(resp)
      this.singleHotel = resp
    })
  }



  // "roomID": 0,
  // "checkInDate": "2025-05-13T15:45:59.796Z",
  // "checkOutDate": "2025-05-13T15:45:59.796Z",
  // "totalPrice": 0,
  // "isConfirmed": true,
  // "customerName": "string",
  // "customerId": "string",
  // "customerPhone": "string"


}
