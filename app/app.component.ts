import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealListComponent } from './meal-list.component';
import { MealEditComponent } from './meal-edit.component';

@Component ({
  selector: 'my-app',
  directives: [MealListComponent, MealEditComponent],
  template: `
  <div class="container heading">
    <h1>Meal Tracker App</h1>
  </div>
  <div class="container">
    <meal-list [mealList]="meals"
    (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Hamburger", "No cheese, no soda!", 354, 0),
      new Meal("Fries", "Only ate half.", 365, 1)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
