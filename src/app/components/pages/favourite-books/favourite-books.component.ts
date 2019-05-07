import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.css']
})
export class FavouriteBooksComponent implements OnInit {

  favouriteBooks = [{
    id_book: 1,
    title_book: 'Book 1'
  },
  {
    id_book: 2,
    title_book: 'Book 2'
  },
  {
    id_book: 3,
    title_book: 'Book 3'
  },
  {
    id_book: 4,
    title_book: 'Book 4'
  },
  {
    id_book: 5,
    title_book: 'Book 5'
  }];

  constructor() { }

  ngOnInit() {
  }

}
