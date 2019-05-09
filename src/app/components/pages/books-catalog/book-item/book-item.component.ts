import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

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

  id: number;

  authors: [];
  genres: [];
  serie: any = {
    id_serie: null,
    title_serie: 'none'
  };

  favourite = false;

  constructor(private activateRoute: ActivatedRoute, private dataSource: ApiService) { }

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
