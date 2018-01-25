import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  category$;
  @Input('selectedCategory') selectedCategory;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.category$ = this.categoryService.getCategories();
  }

}
