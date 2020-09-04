import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // Take input fields values using reference variables.
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // Emit an event outside when a new ingredient has been added.
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Add new Ingredient and emit and event for outside components.
   */
  onAddItem() {
    const nameInputValue = this.nameInputRef.nativeElement.value;
    const amountInputValue = this.amountInputRef.nativeElement.value;
    const ingredientToBeAdded = new Ingredient(nameInputValue, amountInputValue);
    this.ingredientAdded.emit(ingredientToBeAdded);
  }
}