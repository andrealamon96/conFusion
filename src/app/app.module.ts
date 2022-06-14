import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
} from "@angular/material";
import { DishDetailComponent } from "./components/dish-detail/dish-detail.component";
import { DishService } from "./services/dish.service";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

@NgModule({
  declarations: [AppComponent, MenuComponent, DishDetailComponent, HeaderComponent, FooterComponent, ContactComponent, HomeComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  providers: [DishService],
  bootstrap: [AppComponent],
})
export class AppModule {}
