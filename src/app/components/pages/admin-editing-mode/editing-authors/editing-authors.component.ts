import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-editing-authors',
  templateUrl: './editing-authors.component.html',
  styleUrls: ['./editing-authors.component.css']
})
export class EditingAuthorsComponent implements OnInit {

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
  }

  pressEnter(event) {
    let url = '';
    if (event.key === 'Enter') {
      url = event.target.value;
      this.parseAuthor(url);
    }
  }

  parseAuthor(url) {
    this.dataSource.parseAuthor(url)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}
