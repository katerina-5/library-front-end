import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.css']
})
export class BooksCatalogComponent implements OnInit {

  books: Array<string> = ['Pride and prejudice', 'Emma', 'Sense and sensibility', 'Persuasion', 'Smth'];

  constructor() { }

  ngOnInit() {
  }

}
