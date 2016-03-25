import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-display-detail',
  inputs: ['meal'],
  template: `


  <ul>
    <div class="mealDetails">
      <h3>Detail/Edit Meal:</h3>
      <h5>{{ meal.details }}</h5>
      <h4>{{ meal.calories }}</h4>
    </div>
  </ul>


  `
})

export class MealDetailComponent {
  public meal: Meal;
}
