import { Component, Input } from "@angular/core";
import { Dish } from "src/app/shared/dish";

@Component({
  selector: "app-dish-detail",
  templateUrl: "./dish-detail.component.html",
})
export class DishDetailComponent {
  @Input() dish: Dish;
}
