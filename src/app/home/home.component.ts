import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Hotel } from '../models/hotel';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from "../card/card.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CardComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api : ApiService){}

  hotelArr : Hotel[] =[]
  token : string | null = ""
  ngOnInit(){
      if(this.token!=null){
        this.token = localStorage.getItem('token')
      }

    this.api.getAll().subscribe({
     next: (resp: any) => {
       console.log(resp);
       this.hotelArr = resp;
     },
     error: (err) => {
     console.error(err);
     }
   });
  }

}
