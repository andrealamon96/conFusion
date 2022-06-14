import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/services/dish.service';
import { PromotionService } from 'src/app/services/promotion.service';
import { Dish } from 'src/app/shared/dish';
import { Promotion } from 'src/app/shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}