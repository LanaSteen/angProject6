import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Hotel } from '../models/hotel';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterModule],
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
}
