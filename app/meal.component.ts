import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `

  <ul class="mealDisplay">
    <li><h3 class="mealList">{{ meal.food }}</h3></li>
  <ul>

  `
})

export class MealComponent {
  public meal: Meal;
}
