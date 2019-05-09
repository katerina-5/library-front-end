import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/models/book';
import { environment } from './../../../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  // books: Array<Book> = [
  //   {
  //     idBook: 1,
  //     title: 'Pride and prejudice',
  //     url: '/book/11994/',
  //     image: 'http://readly.ru/public/media/covers/9/9/99bb2fad740e6a68082b87285f406dda_200x0.jpg',
  //     year: 1815,
  //     rating: 8.9,
  //     description: 'Книга "Гордость и предубеждение" - знаменитое на весь мир произведение, смысл которого в гордости сильной и волевой женщины, бедной, но абсолютно свободной, свободной от всех предрассудков и стереотипов. Гордость женщины, практически нищей и совершенно свободной — в своей бедности, в своей иронии, в силе своего характера... Есть ли нечто равное такой гордости?.. Предубеждение женщины, почти не способной уже, по привычке отвечать ударом на удар, поверить в искренность мужского чувства и перестать об этом думать. Это — «Гордость и предубеждение» Джейн Остен. Книга, без которой сейчас не существовало бы, наверное, ни «психологического» романа, ни «феминистской» литературы, ни — попросту — «элитной» прозы как таковой!',
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

  // @Input() bookItem: Book;
  bookItem: any = {
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
  // bookItem: any;
  id: number;

  authors: [];
  genres: [];
  serie: any = {
    id_serie: null,
    title_serie: 'none'
  };

  favourite = false;

  // beginOfUrl: string = environment.url;

  constructor(private activateRoute: ActivatedRoute, private dataSource: ApiService) {
    // this.id = Number.parseInt(activateRoute.snapshot.params['id'], 5);
    // console.log(this.id);
    // this.books.forEach(book => {
    //   if (book.idBook === this.id) {
    //     this.bookItem = book;
    //   }
    // });

    // this.dataSource.getBookById(this.id)
    //   .subscribe((data: any) => {
    //     console.log(data);
    //     this.bookItem = data[0];
    //   });
  }

  ngOnInit() {
    this.id = Number.parseFloat(this.activateRoute.snapshot.params['id']);
    console.log(this.id);

    this.dataSource.getBookById(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.bookItem = data[0];
        console.log(this.bookItem);

        if (this.bookItem.id_serie != null) {
          this.dataSource.getBookSerie(this.id)
            .subscribe((dataSerie: any) => {
              this.serie = dataSerie[0];
            });
        }
      });

    this.dataSource.getBookAuthors(this.id)
      .subscribe((data: any) => {
        this.authors = data;
      });

    this.dataSource.getBookGenres(this.id)
      .subscribe((data: any) => {
        this.genres = data;
      });

    this.dataSource.checkBookInFavourite(localStorage.getItem('token'), this.id)
      .subscribe((data: any) => {
        if (data === true) {
          this.favourite = true;
        } else {
          this.favourite = false;
        }
      });
  }

  updateFavouriteBooks() {
    if (localStorage.getItem('token') === null) {
      alert('You are not authorized user!');
      return;
    }

    const token = localStorage.getItem('token');

    if (!this.favourite) {
      this.dataSource.addBookToFavourite(token, this.id)
        .subscribe((data: any) => {
          console.log(data);
        });
    } else {
      this.dataSource.deleteBookFromFavourite(token, this.id)
        .subscribe((data: any) => {
          console.log(data);
        });
    }

    this.favourite = !this.favourite;
  }
}
