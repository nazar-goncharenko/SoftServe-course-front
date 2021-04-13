import {Component, Input, OnInit} from '@angular/core';
import {SportCategory} from "../../../../../shared/interfaces/sportCategory";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() predefinedCategory: SportCategory;
  constructor() { }

  ngOnInit(): void {
  }

}
