import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre';

@Component({
  selector: 'app-genres-catalog',
  templateUrl: './genres-catalog.component.html',
  styleUrls: ['./genres-catalog.component.css']
})
export class GenresCatalogComponent implements OnInit {

  // genres: Array<string> = ['classic'];
  genres: Array<Genre> = [
    {
      idGenre: 1,
      title: 'Классика',
      url: '/genre/180/',
      description: ''
    },
    {
      idGenre: 2,
      title: 'Экранизация',
      url: '/genre/195/',
      description: ''
    },
    {
      idGenre: 3,
      title: 'Романы',
      url: '/genre/242/',
      description: ''
    },
    {
      idGenre: 4,
      title: 'Литература 19 века',
      url: '/genre/52/',
      description: ''
    },
    {
      idGenre: 5,
      title: 'Зарубежная классика',
      url: '/genre/58/',
      description: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
