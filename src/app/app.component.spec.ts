import { MenuComponent } from "./components/menu/menu.component";
import { TestBed, async } from "@angular/core/testing";
import {
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatToolbarModule,
} from "@angular/material";
import { AppComponent } from "./app.component";
import { DishDetailComponent } from "./components/dish-detail/dish-detail.component";
describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MenuComponent, DishDetailComponent],
      imports: [
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatListModule,
      ],
    }).compileComponents();
  }));
  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
