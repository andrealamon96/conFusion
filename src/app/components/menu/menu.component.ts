import { Component } from "@angular/core";
import { Dish } from "src/app/shared/dish";
import { DISHES } from "src/app/shared/dishes";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent {
  dishes: Dish[] = DISHES;
  public selectedDish: Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
