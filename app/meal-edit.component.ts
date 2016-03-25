import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealNewComponent } from './meal-new.component';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  directives: [MealComponent, MealNewComponent],
  template: `
    <div class="edit-form form-inline">
      <h5>Edit Your Meal:</h5>
      <input [(ngModel)]="meal.name" class =" meal-name-form"/>
      <input [(ngModel)]="meal.details" class =" meal-details-form"/>
      <input [(ngModel)]="meal.calories" class =" meal-calories-form"/>
    </div>
  `
})

export class MealEditComponent {
  public meal: Meal;
}
