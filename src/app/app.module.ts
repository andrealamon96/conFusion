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

@NgModule({
  declarations: [AppComponent, MenuComponent, DishDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
