import { Injectable } from '@angular/core';
import { Recipie } from './recipie.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {

  private recipies: Recipie[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://toriavey.com/images/2011/02/TOA20_06-500x500.jpg',
      ingredients: ['French Fries', 'Chicken', 'Salad']
    },
    {
      id: 'r2',
      title: 'Speghetti',
      imageUrl: 'https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___One-pot-chicken-spaghetti-4.jpg',
      ingredients: ['Nudles', 'Chicken', 'Salad']
    },
    {
      id: 'r3',
      title: 'Ceasar Salad',
      imageUrl: 'https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Low-carb-Caesar-salad-4.jpg',
      ingredients: ['Egg', 'Born less Chicken', 'Salad', 'Souse']
    }
  ];

  constructor() { }

  getAllRecipies() {
    return [...this.recipies];
  }

  getRecipie(recipie_id: string) {
    return {
      ...this.recipies.find(recipie => {
        return recipie.id === recipie_id;
      })
    };
  }
}
