import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { DetailComponent } from './detail/detail.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    {path: "", redirectTo: 'home', pathMatch : "full"},
    {path : "home", component : HomeComponent},
    {path : "about", component : AboutComponent},
    {path : "detail/:id", component : DetailComponent},
    
    {path : "booking/:id", component : BookingComponent},
    {path : "menu", component : MenuComponent},
    {path : "**", component : ErrorComponent}
    
];
