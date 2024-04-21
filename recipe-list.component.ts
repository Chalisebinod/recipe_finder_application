import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<Recipe[]>;
  filteredRecipes: Observable<Recipe[]>;
  searchTerm: string;

  constructor(
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.filteredRecipes = this.recipes;
  }

  gotoDetail(recipe: Recipe): void {
    const link = ['/recipes', recipe.id];
    this.router.navigate(link);
  }

  search(): void {
    this.filteredRecipes = this.recipeService.searchRecipes(this.searchTerm);
  }
}
