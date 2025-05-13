import { Component, Input } from '@angular/core';
import { Hotel } from '../models/hotel';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() hotel : Hotel = new Hotel
  @Input()  tok! : string | null


 
}
