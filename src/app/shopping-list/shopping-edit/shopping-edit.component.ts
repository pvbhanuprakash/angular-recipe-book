import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addClicked = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInputRef: ElementRef;

  onAddClicked(amount: number) {
    // this.addClicked.emit({ name: this.nameInputRef.nativeElement.value, amount });
    this.addClicked.emit(new Ingredient(this.nameInputRef.nativeElement.value, amount));
  };
  constructor() { }

  ngOnInit(): void {
  }

}
