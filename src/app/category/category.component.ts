import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  ngOnInit(): void {
    // this.categoryService.getCategories().subscribe(data => {
    //   this.categories = data;
    // });
  }

  categories: Category[];
  categoryRepository: CategoryRepository;
  selectedCategory: Category = null;

  constructor(private categoryService: CategoryService) { 
    this.categoryRepository = new CategoryRepository();
    this.categories = this.categoryRepository.getCategories();
  }

  displayAll = true;

  selectCategory(item?: Category) {
    if(item) {
      this.selectedCategory = item;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
    
  }

}
