import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-series-catalog',
  templateUrl: './series-catalog.component.html',
  styleUrls: ['./series-catalog.component.css']
})
export class SeriesCatalogComponent implements OnInit {

  series: [];

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
