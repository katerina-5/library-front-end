import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/shared/models/serie';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.css']
})
export class SerieItemComponent implements OnInit {

  serieItem: Serie;
  id: number;
  authors: [];
  books: [];

  favourite = false;

  constructor(private activateRoute: ActivatedRoute, private dataSource: ApiService) { }

  ngOnInit() {
    this.id = Number.parseFloat(this.activateRoute.snapshot.params['id']);
    console.log(this.id);

    this.dataSource.getSerieById(this.id)
      .subscribe((data: any) => {
        console.log(data);
        this.serieItem = data[0];
        console.log(this.serieItem);
      });

    this.dataSource.getSerieAuthors(this.id)
      .subscribe((data: any) => {
        this.authors = data;
      });

    this.dataSource.getSerieBooks(this.id)
      .subscribe((data: any) => {
        this.books = data;
      });

    this.dataSource.checkSerieInFavourite(localStorage.getItem('token'), this.id)
      .subscribe((data: any) => {
        if (data === true) {
          this.favourite = true;
        } else {
          this.favourite = false;
        }
      });
  }

  updateFavouriteSeries() {
    if (localStorage.getItem('token') === null) {
      alert('You are not authorized user!');
      return;
    }

    const token = localStorage.getItem('token');

    if (!this.favourite) {
      this.dataSource.addSerieToFavourite(token, this.id)
        .subscribe((data: any) => {
          console.log(data);
        });
    } else {
      this.dataSource.deleteSerieFromFavourite(token, this.id)
        .subscribe((data: any) => {
          console.log(data);
        });
    }

    this.favourite = !this.favourite;
  }

}
