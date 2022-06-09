import { Component, OnInit } from "@angular/core";
import { Dish } from "src/app/shared/dish";
import { DishService } from './../../services/dish.service';


@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
})
export class MenuComponent implements OnInit {
  public selectedDish: Dish;
  dishes: Dish[];

  constructor(private dishService: DishService) {}
  ngOnInit(): void {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
