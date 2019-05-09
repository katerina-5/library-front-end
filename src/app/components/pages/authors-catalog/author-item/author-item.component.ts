import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {

  authorItem: Author;
  id: number;
  genres: [];
  books: [];
  series: [];

  favourite = false;

  constructor(private activateRoute: ActivatedRoute, private dataSource: ApiService) { }

  ngOnInit() {
    this.id = Number.parseFloat(this.activateRoute.snapshot.params['id']);
    console.log(this.id);

    this.dataSource.getAuthorById(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.authorItem = data[0];
        console.log(this.authorItem);
      });

    this.dataSource.getAuthorBooks(this.id)
      .subscribe((data: any) => {
        this.books = data;
      });

    this.dataSource.getAuthorGenres(this.id)
      .subscribe((data: any) => {
        this.genres = data;
      });

    this.dataSource.getAuthorSeries(this.id)
      .subscribe((data: any) => {
        this.series = data;
      });

    this.dataSource.checkAuthorInFavourite(localStorage.getItem('token'), this.id)
      .subscribe((data: any) => {
        if (data === true) {
          this.favourite = true;
        } else {
          this.favourite = false;
        }
      });
  }

  updateFavouriteAuthors() {
    if (localStorage.getItem('token') === null) {
      alert('You are not authorized user!');
      return;
    }

    const token = localStorage.getItem('token');

    if (!this.favourite) {
      this.dataSource.addAuthorToFavourite(token, this.id)
        .subscribe((data: any) => {
          console.log(data);
        });
    } else {
      this.dataSource.deleteAuthorFromFavourite(token, this.id)
        .subscribe((data: any) => {
          console.log(data);
        });
    }

    this.favourite = !this.favourite;
  }

}
