import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Hotel } from '../models/hotel';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private api : ApiService){}

  hotelArr : Hotel[] =[]
  ngOnInit(){
    this.api.getAll().subscribe((resp : any ) => {
      console.log(resp)
      this.hotelArr = resp
    })
  }

}
