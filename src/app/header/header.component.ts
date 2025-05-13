import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private vps : ViewportScroller){

  }
  buttonText = 'Log In'


  scrollToFooret(){
    this.vps.scrollToAnchor('footer')
  }

  ngOnInit(){
    localStorage.setItem("token", "123")
  }

  dleetteToken(){
    localStorage.removeItem('token')
  }

  textFromChild! : string
  rameFuction(tex : string){
    this.textFromChild = tex
  }
}
