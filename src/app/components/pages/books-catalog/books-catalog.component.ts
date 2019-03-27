import { Component, OnInit } from '@angular/core';
import { Book } from './../../../shared/models/book';
import { Serie } from 'src/app/shared/models/serie';
import { Genre } from 'src/app/shared/models/genre';
import { Author } from 'src/app/shared/models/author';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.css']
})
export class BooksCatalogComponent implements OnInit {

  // books: Array<string> = ['Pride and prejudice', 'Emma', 'Sense and sensibility', 'Persuasion', 'Smth'];
  books: Array<Book> = [
    {
      idBook: 1,
      title: 'Pride and prejudice',
      url: '/book/11994/',
      year: 1815,
      rating: 8.9,
      description: 'Best book # 1',
      serie: null,
      genres: [{
        idGenre: 5,
        title: 'classic',
        url: 'http://readly.ru/genre/12345'
      }],
      authors: [{
        idAuthor: 1,
        fullName: 'Jane Austen',
        url: 'http://readly.ru/author/12345'
      }]
    },
    {
      idBook: 2,
      title: 'Persuasion',
      url: '/book/57798/',
      year: 1815,
      rating: 8.4,
      description: 'Best book # 2',
      serie: null,
      genres: [{
        idGenre: 5,
        title: 'classic',
        url: 'http://readly.ru/genre/180'
      }],
      authors: [{
        idAuthor: 1,
        fullName: 'Jane Austen',
        url: 'http://readly.ru/author/17138/'
      }]
    },
    {
      idBook: 3,
      title: 'Emma',
      url: '/book/4211/',
      year: 1815,
      rating: 8.5,
      description: 'Best book # 3',
      serie: null,
      genres: [{
        idGenre: 5,
        title: 'classic',
        url: 'http://readly.ru/genre/180'
      }],
      authors: [{
        idAuthor: 1,
        fullName: 'Jane Austen',
        url: 'http://readly.ru/author/17138/'
      }]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
