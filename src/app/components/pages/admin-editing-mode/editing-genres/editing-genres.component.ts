import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-editing-genres',
  templateUrl: './editing-genres.component.html',
  styleUrls: ['./editing-genres.component.css']
})
export class EditingGenresComponent implements OnInit {

  constructor(private dataSource: ApiService) { }

  ngOnInit() {
  }

  pressEnter(event) {
    let url = '';
    if (event.key === 'Enter') {
      url = event.target.value;
      this.parseGenre(url);
    }
  }

  parseGenre(url) {
    this.dataSource.parseGenre(url)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}
