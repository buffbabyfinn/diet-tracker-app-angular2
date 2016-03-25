import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="new-form form-inline">
      <h4>New Meal</h4>
      <input placeholder="Name" class="col-sm-2" #name>
      <input placeholder="Details" class="col-sm-5" #details>
      <input placeholder="Calories" class="col-sm-2" #calories>
      <button (click)="addMeal(name, details, calories)" class="btn btn-default add-button col-sm-2">Add</button>
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
