import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-editing-books',
  templateUrl: './editing-books.component.html',
  styleUrls: ['./editing-books.component.css']
})
export class EditingBooksComponent implements OnInit {

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
  }

  pressEnter(event) {
    let url = '';
    if (event.key === 'Enter') {
      url = event.target.value;
      this.parseBook(url);
    }
  }

  parseBook(url) {
    this.dataSource.parseBook(url)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
