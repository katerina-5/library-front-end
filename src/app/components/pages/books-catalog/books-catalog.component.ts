import { Component, OnInit } from '@angular/core';
import { Book } from './../../../shared/models/book';
import { Serie } from 'src/app/shared/models/serie';
import { Genre } from 'src/app/shared/models/genre';
import { Author } from 'src/app/shared/models/author';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.css']
})
export class BooksCatalogComponent implements OnInit {

  // books: Array<string> = ['Pride and prejudice', 'Emma', 'Sense and sensibility', 'Persuasion', 'Smth'];

  // books: Array<Book> = [
  //   {
  //     idBook: 1,
  //     title: 'Pride and prejudice',
  //     url: '/book/11994/',
  //     image: 'http://readly.ru/public/media/covers/9/9/99bb2fad740e6a68082b87285f406dda_200x0.jpg',
  //     year: 1815,
  //     rating: 8.9,
  //     description: 'Best book # 1',
  //     serie: null,
  //     genres: [{
  //       idGenre: 5,
  //       title: 'classic',
  //       url: 'http://readly.ru/genre/12345',
  //       description: ''
  //     }],
  //     authors: [{
  //       idAuthor: 1,
  //       fullName: 'Jane Austen',
  //       url: 'http://readly.ru/author/12345',
  //       fullNameOriginal: '',
  //       image: ''
  //     }]
  //   },
  //   {
  //     idBook: 2,
  //     title: 'Persuasion',
  //     url: '/book/57798/',
  //     image: 'http://readly.ru/public/media/covers/9/d/9dad80451ea69848bfa727768181f811_200x0.jpg',
  //     year: 1815,
  //     rating: 8.4,
  //     description: 'Best book # 2',
  //     serie: null,
  //     genres: [{
  //       idGenre: 5,
  //       title: 'classic',
  //       url: 'http://readly.ru/genre/180',
  //       description: ''
  //     }],
  //     authors: [{
  //       idAuthor: 1,
  //       fullName: 'Jane Austen',
  //       url: 'http://readly.ru/author/17138/',
  //       fullNameOriginal: '',
  //       image: ''
  //     }]
  //   },
  //   {
  //     idBook: 3,
  //     title: 'Emma',
  //     url: '/book/4211/',
  //     image: 'http://readly.ru/public/media/covers/5/8/582481894fa8e589f27ade3ba69af8af_200x0.jpg',
  //     year: 1815,
  //     rating: 8.5,
  //     description: 'Best book # 3',
  //     serie: null,
  //     genres: [{
  //       idGenre: 5,
  //       title: 'classic',
  //       url: 'http://readly.ru/genre/180',
  //       description: ''
  //     }],
  //     authors: [{
  //       idAuthor: 1,
  //       fullName: 'Jane Austen',
  //       url: 'http://readly.ru/author/17138/',
  //       fullNameOriginal: '',
  //       image: ''
  //     }]
  //   },
  //   {
  //     idBook: 3,
  //     title: 'Emma',
  //     url: '/book/4211/',
  //     image: 'http://readly.ru/public/media/covers/5/8/582481894fa8e589f27ade3ba69af8af_200x0.jpg',
  //     year: 1815,
  //     rating: 8.5,
  //     description: 'Best book # 3',
  //     serie: null,
  //     genres: [{
  //       idGenre: 5,
  //       title: 'classic',
  //       url: 'http://readly.ru/genre/180',
  //       description: ''
  //     }],
  //     authors: [{
  //       idAuthor: 1,
  //       fullName: 'Jane Austen',
  //       url: 'http://readly.ru/author/17138/',
  //       fullNameOriginal: '',
  //       image: ''
  //     }]
  //   },
  //   {
  //     idBook: 3,
  //     title: 'Emma',
  //     url: '/book/4211/',
  //     image: 'http://readly.ru/public/media/covers/5/8/582481894fa8e589f27ade3ba69af8af_200x0.jpg',
  //     year: 1815,
  //     rating: 8.5,
  //     description: 'Best book # 3',
  //     serie: null,
  //     genres: [{
  //       idGenre: 5,
  //       title: 'classic',
  //       url: 'http://readly.ru/genre/180',
  //       description: ''
  //     }],
  //     authors: [{
  //       idAuthor: 1,
  //       fullName: 'Jane Austen',
  //       url: 'http://readly.ru/author/17138/',
  //       fullNameOriginal: '',
  //       image: ''
  //     }]
  //   }
  // ];

  books: any;

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
    this.dataSource.getBooks()
      .subscribe((data: any) => {
        console.log(data);
        this.books = data;
      });
  }

  search(searchRequest) {
    if (searchRequest === '') {
      this.dataSource.getBooks()
        .subscribe((data: any) => {
          console.log(data);
          this.books = data;
        });

      return;
    }
    // let message = '';
    // message += 'Search button was pressed\n';
    // message += 'Search request: ' + searchRequest;
    // alert(message);
    this.dataSource.searchBooks(searchRequest)
      .subscribe((data: any) => {
        console.log(data);
        this.books = data;
      })
  }

  pressEnter(event) {
    // let message = '';
    // if (event.key === 'Enter') {
    //   // this.search(event.target.value);
    //   message += 'Enter button was pressed\n';
    //   message += 'Search request: ' + event.target.value;
    //   alert(message);
    // }
    this.search(event.target.value);
  }

}
