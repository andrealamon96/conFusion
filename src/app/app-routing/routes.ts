import { Routes } from '@angular/router';
import { ContactComponent } from '../components/contact/contact.component';
import { HomeComponent } from '../components/home/home.component';
import { MenuComponent } from '../components/menu/menu.component';


export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'menu',     component: MenuComponent },
  { path: 'contact', component: ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];