import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { MealEditComponent } from './meal-edit.component';
import { MealNewComponent } from './meal-new.component';
import { MealDetailComponent } from './meal-detail-view.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, MealEditComponent, MealNewComponent, MealDetailComponent],
  template: `
    <new-meal
    (onSubmitNewMeal)="createMeal($event)">
    </new-meal><br>

    <h2>Your Meal List:</h2>
    <select>
      <option value="all" selected="selected">Show All Foods</option>
      <option value="healthy">Show Healthy Foods</option>
      <option value="unhealthy">Show Unhealthy Foods</option>
    </select>
    <meal-display
    *ngFor="#currentMeal of mealList"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
    </meal-display>

    <meal-display-detail
    *ngIf="selectedMeal"
    [meal]="selectedMeal"
    [class.hidden]="!selectedMeal">
    </meal-display-detail>

    <edit-meal-details
    *ngIf="selectedMeal"
    [meal]="selectedMeal"
    [class.hidden]="!selectedMeal">
    </edit-meal-details>

    <button
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public meal: Meal;
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(values) {
    var meal = new Meal(values[0], values[1], values[2], this.mealList.length);
      console.log(meal);
      if(meal.calories >= 300) {
        meal.healthy = false;
      } else {
        meal.healthy = true;
      }
    this.mealList.push(meal);
  }
}
