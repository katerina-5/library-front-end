import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  books: Array<Book> = [
    {
      idBook: 1,
      title: 'Pride and prejudice',
      url: '/book/11994/',
      image: 'http://readly.ru/public/media/covers/9/9/99bb2fad740e6a68082b87285f406dda_200x0.jpg',
      year: 1815,
      rating: 8.9,
      description: 'Best book # 1',
      serie: null,
      genres: [{
        idGenre: 5,
        title: 'classic',
        url: 'http://readly.ru/genre/12345',
        description: ''
      }],
      authors: [{
        idAuthor: 1,
        fullName: 'Jane Austen',
        url: 'http://readly.ru/author/12345',
        fullNameOriginal: '',
        image: ''
      }]
    },
    {
      idBook: 2,
      title: 'Persuasion',
      url: '/book/57798/',
      image: 'http://readly.ru/public/media/covers/9/d/9dad80451ea69848bfa727768181f811_200x0.jpg',
      year: 1815,
      rating: 8.4,
      description: 'Best book # 2',
      serie: null,
      genres: [{
        idGenre: 5,
        title: 'classic',
        url: 'http://readly.ru/genre/180',
        description: ''
      }],
      authors: [{
        idAuthor: 1,
        fullName: 'Jane Austen',
        url: 'http://readly.ru/author/17138/',
        fullNameOriginal: '',
        image: ''
      }]
    },
    {
      idBook: 3,
      title: 'Emma',
      url: '/book/4211/',
      image: 'http://readly.ru/public/media/covers/5/8/582481894fa8e589f27ade3ba69af8af_200x0.jpg',
      year: 1815,
      rating: 8.5,
      description: 'Best book # 3',
      serie: null,
      genres: [{
        idGenre: 5,
        title: 'classic',
        url: 'http://readly.ru/genre/180',
        description: ''
      }],
      authors: [{
        idAuthor: 1,
        fullName: 'Jane Austen',
        url: 'http://readly.ru/author/17138/',
        fullNameOriginal: '',
        image: ''
      }]
    },
    {
      idBook: 3,
      title: 'Emma',
      url: '/book/4211/',
      image: 'http://readly.ru/public/media/covers/5/8/582481894fa8e589f27ade3ba69af8af_200x0.jpg',
      year: 1815,
      rating: 8.5,
      description: 'Best book # 3',
      serie: null,
      genres: [{
        idGenre: 5,
        title: 'classic',
        url: 'http://readly.ru/genre/180',
        description: ''
      }],
      authors: [{
        idAuthor: 1,
        fullName: 'Jane Austen',
        url: 'http://readly.ru/author/17138/',
        fullNameOriginal: '',
        image: ''
      }]
    },
    {
      idBook: 3,
      title: 'Emma',
      url: '/book/4211/',
      image: 'http://readly.ru/public/media/covers/5/8/582481894fa8e589f27ade3ba69af8af_200x0.jpg',
      year: 1815,
      rating: 8.5,
      description: 'Best book # 3',
      serie: null,
      genres: [{
        idGenre: 5,
        title: 'classic',
        url: 'http://readly.ru/genre/180',
        description: ''
      }],
      authors: [{
        idAuthor: 1,
        fullName: 'Jane Austen',
        url: 'http://readly.ru/author/17138/',
        fullNameOriginal: '',
        image: ''
      }]
    }
  ];

  // @Input() bookItem: Book;
  bookItem: Book = {
    idBook: 0,
    title: 'No title',
    authors: null,
    genres: null,
    serie: null,
    url: '',
    rating: 0,
    year: 0,
    description: '',
    image: ''
  };
  id: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = Number.parseInt(activateRoute.snapshot.params['id'], 5);
    console.log(this.id);
    this.books.forEach(book => {
      if (book.idBook === this.id) {
        this.bookItem = book;
      }
    });
  }

  ngOnInit() {
  }
}
