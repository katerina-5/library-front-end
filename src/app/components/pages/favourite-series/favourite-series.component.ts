import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-series',
  templateUrl: './favourite-series.component.html',
  styleUrls: ['./favourite-series.component.css']
})
export class FavouriteSeriesComponent implements OnInit {

  favouriteSeries = [{
    id_serie: 1,
    title_serie: 'Serie 1'
  },
  {
    id_serie: 2,
    title_serie: 'Serie 2'
  },
  {
    id_serie: 3,
    title_serie: 'Serie 3'
  },
  {
    id_serie: 4,
    title_serie: 'Serie 4'
  },
  {
    id_serie: 5,
    title_serie: 'Serie 5'
  }];

  constructor() { }

  ngOnInit() {
  }

}
