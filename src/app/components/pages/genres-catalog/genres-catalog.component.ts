import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-genres-catalog',
  templateUrl: './genres-catalog.component.html',
  styleUrls: ['./genres-catalog.component.css']
})
export class GenresCatalogComponent implements OnInit {

  genres: [];

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
    this.dataSource.getGenres()
      .subscribe((data: any) => {
        console.log(data);
        this.genres = data;
      });
  }

  search(searchRequest) {
    if (searchRequest === '') {
      this.dataSource.getGenres()
        .subscribe((data: any) => {
          console.log(data);
          this.genres = data;
        });

      return;
    }

    this.dataSource.searchGenres(searchRequest)
      .subscribe((data: any) => {
        console.log(data);
        this.genres = data;
      });
  }

  pressEnter(event) {
    if (event.key === 'Enter') {
      this.search(event.target.value);
    }
  }

}
