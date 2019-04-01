import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/shared/models/serie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.css']
})
export class SerieItemComponent implements OnInit {

  series: Array<Serie> = [
    {
      idSerie: 1,
      title: 'Властелин колец',
      url: '/serie/368/',
      description: ''
    },
    {
      idSerie: 2,
      title: 'Гарри Поттер',
      url: '/serie/220/',
      description: ''
    },
    {
      idSerie: 3,
      title: 'Остап Бендер',
      url: '/serie/1378/',
      description: 'Остросатирическая серия о приключениях гениального мошенника и авантюриста Остапа Бендера.'
    }
  ];

  // @Input() serieItem: Serie;
  serieItem: Serie;
  id: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = Number.parseInt(activateRoute.snapshot.params['id'], 5);
    console.log(this.id);
    this.series.forEach(serie => {
      if (serie.idSerie === this.id) {
        this.serieItem = serie;
      }
    });
  }

  ngOnInit() {
  }

}
