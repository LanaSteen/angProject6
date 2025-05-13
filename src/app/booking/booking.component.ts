import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  constructor(private route : ActivatedRoute, private api : ApiService){
      this.route.params.subscribe(data => {
          this.roomId = data['id']
      })

  }

  checkInDate : Date = new Date
  checkOutDate : Date = new Date
  customerName : string = ""
  customerId : string = ""
  customerPhone : string = ""

  roomId! : number
 bookRoom(){

     let postObj = {
        roomID: this.roomId,
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate,
        totalPrice: 100,
        isConfirmed: true,
        customerName: this.customerName,
        customerId: this.customerId,
        customerPhone: this.customerPhone
     }

     this.api.book(postObj).subscribe(resp => console.log(resp))


}

}
