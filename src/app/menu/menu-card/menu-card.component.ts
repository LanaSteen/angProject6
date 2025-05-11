import { Component, Input } from '@angular/core';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent {

  @Input() singleProduct? : Menu

  

 

}
