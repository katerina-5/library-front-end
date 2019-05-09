import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit {

  genreItem: Genre;
  id: number;
  authors: [];
  books: [];

  favourite = false;

  constructor(private activateRoute: ActivatedRoute, private dataSource: ApiService) { }

  ngOnInit() {
    this.id = Number.parseFloat(this.activateRoute.snapshot.params['id']);
    console.log(this.id);

    this.dataSource.getGenreById(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.genreItem = data[0];
        console.log(this.genreItem);
      });

    this.dataSource.getGenreAuthors(this.id)
      .subscribe((data: any) => {
        this.authors = data;
      });

    this.dataSource.getGenreBooks(this.id)
      .subscribe((data: any) => {
        this.books = data;
      });

    this.dataSource.checkGenreInFavourite(localStorage.getItem('token'), this.id)
      .subscribe((data: any) => {
        if (data === true) {
          this.favourite = true;
        } else {
          this.favourite = false;
        }
      });
  }

  updateFavouriteGenres() {
    if (localStorage.getItem('token') === null) {
      alert('You are not authorized user!');
      return;
    }

    const token = localStorage.getItem('token');

    if (!this.favourite) {
      this.dataSource.addGenreToFavourite(token, this.id)
        .subscribe((data: any) => {
          console.log(data);
        });
    } else {
      this.dataSource.deleteGenreFromFavourite(token, this.id)
        .subscribe((data: any) => {
          console.log(data);
        });
    }

    this.favourite = !this.favourite;
  }

}
