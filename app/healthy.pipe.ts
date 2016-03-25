import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "healthy",
})


export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy") {
      return input.filter((meal) => {
        return meal.healthy;
      });
    } else if (desiredHealthyState === "unhealthy") {
      return input.filter((meal) => {
        return !meal.healthy;
      });
    } else {
      return input;
    }
  }
}
