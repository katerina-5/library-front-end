import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-catalog',
  templateUrl: './series-catalog.component.html',
  styleUrls: ['./series-catalog.component.css']
})
export class SeriesCatalogComponent implements OnInit {

  series: Array<string> = ['Остап Бендер', 'Гарри Поттер'];

  constructor() { }

  ngOnInit() {
  }

}
