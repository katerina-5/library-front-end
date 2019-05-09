import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-authors-catalog',
  templateUrl: './authors-catalog.component.html',
  styleUrls: ['./authors-catalog.component.css']
})
export class AuthorsCatalogComponent implements OnInit {

  authors: [];

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
    this.dataSource.getAuthors()
      .subscribe((data: any) => {
        console.log(data);
        this.authors = data;
      });
  }

  search(searchRequest) {
    if (searchRequest === '') {
      this.dataSource.getAuthors()
        .subscribe((data: any) => {
          console.log(data);
          this.authors = data;
        });

      return;
    }

    this.dataSource.searchAuthors(searchRequest)
      .subscribe((data: any) => {
        console.log(data);
        this.authors = data;
      });
  }

  pressEnter(event) {
    if (event.key === 'Enter') {
      this.search(event.target.value);
    }
  }

}
