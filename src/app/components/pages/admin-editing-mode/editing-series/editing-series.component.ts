import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-editing-series',
  templateUrl: './editing-series.component.html',
  styleUrls: ['./editing-series.component.css']
})
export class EditingSeriesComponent implements OnInit {

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
  }

  pressEnter(event) {
    let url = '';
    if (event.key === 'Enter') {
      url = event.target.value;
      this.parseSerie(url);
    }
  }

  parseSerie(url) {
    this.dataSource.parseSerie(url)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}
