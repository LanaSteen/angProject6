import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hotel } from '../models/hotel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() text : string = ""

  @Input() width: string = ""

  @Output() sendToParent : EventEmitter<string> = new EventEmitter()

  
  buttonWidth = {
    'width' : this.width
  }
  rameText! : string

  send(){
    this.sendToParent.emit(this.rameText)
  }
  hotel : Hotel = new Hotel

}
