import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre';
import { ApiService } from 'src/app/shared/services/api.service';

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

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
    this.dataSource.getGenres()
      .subscribe((data: any) => {
        console.log(data);
        this.genres = data;
      });
  }

  search(searchRequest) {
    let message = '';
    message += 'Search button was pressed\n';
    message += 'Search request: ' + searchRequest;
    alert(message);
  }

  pressEnter(event) {
    let message = '';
    if (event.key === 'Enter') {
      // this.search(event.target.value);
      message += 'Enter button was pressed\n';
      message += 'Search request: ' + event.target.value;
      alert(message);
    }
  }

}
