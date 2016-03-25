import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';

@Component({
  selector: 'meal-display-detail',
  inputs: ['meal'],
  template: `
    <h5>{{ meal.details }}</h5>
    <h4>{{ meal.calories }}</h4>
  `
})

export class MealDetailComponent {
  public meal: Meal;
}
