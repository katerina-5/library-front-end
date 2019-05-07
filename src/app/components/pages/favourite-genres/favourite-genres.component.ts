import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-genres',
  templateUrl: './favourite-genres.component.html',
  styleUrls: ['./favourite-genres.component.css']
})
export class FavouriteGenresComponent implements OnInit {

  favouriteGenres = [{
    id_genre: 1,
    title_genre: 'Genre 1'
  },
  {
    id_genre: 2,
    title_genre: 'Genre 2'
  },
  {
    id_genre: 3,
    title_genre: 'Genre 3'
  },
  {
    id_genre: 4,
    title_genre: 'Genre 4'
  },
  {
    id_genre: 5,
    title_genre: 'Genre 5'
  }];

  constructor() { }

  ngOnInit() {
  }

}
