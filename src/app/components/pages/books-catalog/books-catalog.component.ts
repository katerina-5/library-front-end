import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-books-catalog',
  templateUrl: './books-catalog.component.html',
  styleUrls: ['./books-catalog.component.css']
})
export class BooksCatalogComponent implements OnInit {

  books: [];

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
    this.dataSource.getBooks()
      .subscribe((data: any) => {
        console.log(data);
        this.books = data;
      });
  }

  search(searchRequest) {
    if (searchRequest === '') {
      this.dataSource.getBooks()
        .subscribe((data: any) => {
          console.log(data);
          this.books = data;
        });

      return;
    }

    this.dataSource.searchBooks(searchRequest)
      .subscribe((data: any) => {
        console.log(data);
        this.books = data;
      });
  }

  pressEnter(event) {
    if (event.key === 'Enter') {
      this.search(event.target.value);
    }
  }

}
