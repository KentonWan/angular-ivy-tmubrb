import { Component, Input } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: [ './categories.component.css' ]
})
export class CategoriesComponent  {
  @Input() category: string;
  @Input() number: number;
}
