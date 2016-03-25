import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="new-form form-inline">
      <h2>New Meal</h2>
      <input placeholder="Name" #name>
      <input placeholder="Details" #details>
      <input placeholder="Calories" #calories><br>
      <button (click)="addMeal(name, details, calories)" class="btn btn-default add-button">Add Food</button>
    </div>
  `
})

export class MealNewComponent {
  public onSubmitNewMeal: EventEmitter<Object[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(name: HTMLInputElement, details: HTMLInputElement, calories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([name.value, details.value, parseFloat(calories.value)]);
    name.value = "";
    details.value = "";
    calories.value = "";
  }
}
