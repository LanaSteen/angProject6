import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  buttonText = 'Log In'

}
