import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  // Here recipes is of type 'Recipe' which we created as model class.
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/16/20/1600x800/landscape-1463418673-delish-panzanella.jpg?resize=980:*'),

    new Recipe('A test recipe', 'This is simply a test',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/26/1600x800/landscape-1498851830-delish-bonfire-cupcakes-1.jpg?resize=980:*')
  ];

  constructor() { }

  ngOnInit() {
  }

}
