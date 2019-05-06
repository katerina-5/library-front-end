import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit {

  genres: Array<Genre> = [
    {
      idGenre: 1,
      title: 'Классика',
      url: '/genre/180/',
      description: 'Мировая классическая литература является общепризнанным эталоном литературного искусства. Такие произведения часто задевают судьбу не одного человека или какой-то отдельной семьи. Эти творения освещают события, что касаются всего общества, страны, планеты. Герои этих книг не просто проживают жизнь внутри своей личности, какого-то вакуума. Действующие лица борются с внутренними противоречиями, решают какие-либо задачи именно как часть социума. Терзаемые долгими размышлениями, духовно развиваясь, персонажи вырастают внутренне, становясь настоящими Личностями. Толстой, Пушкин, Гоголь, Гете, Шекспир – у этих гениев слова есть чему поучиться. Классика мировой литературы включает те книги, что актуальны всегда, важны для каждого. Всепобеждающая справедливость, нравственная чистота, преодоление собственных пороков и поиск истины – все это содержат в себе классические книги. Никакая другая литература не даст своему читателю столько духовной пищи. Данный раздел собрал самые качественные и самые известные классические произведения.'
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

  // @Input() genreItem: Genre;
  genreItem: Genre;
  id: number;
  authors: [];
  books: [];

  constructor(private activateRoute: ActivatedRoute, private dataSource: ApiService) {
    // this.id = Number.parseInt(activateRoute.snapshot.params['id'], 5);
    // console.log(this.id);
    // this.genres.forEach(genre => {
    //   if (genre.idGenre === this.id) {
    //     this.genreItem = genre;
    //   }
    // });
  }

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
  }

}
