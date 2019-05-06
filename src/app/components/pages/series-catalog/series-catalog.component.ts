import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/shared/models/serie';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-series-catalog',
  templateUrl: './series-catalog.component.html',
  styleUrls: ['./series-catalog.component.css']
})
export class SeriesCatalogComponent implements OnInit {

  // series: Array<string> = ['Остап Бендер', 'Гарри Поттер'];
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

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
    this.dataSource.getSeries()
      .subscribe((data: any) => {
        console.log(data);
        this.series = data;
      });
  }

  search(searchRequest) {
    if (searchRequest === '') {
      this.dataSource.getSeries()
        .subscribe((data: any) => {
          console.log(data);
          this.series = data;
        });

      return;
    }

    this.dataSource.searchSeries(searchRequest)
      .subscribe((data: any) => {
        console.log(data);
        this.series = data;
      });
  }

  pressEnter(event) {
    if (event.key === 'Enter') {
      this.search(event.target.value);
    }
  }

}
