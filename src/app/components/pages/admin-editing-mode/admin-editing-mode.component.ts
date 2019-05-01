import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-admin-editing-mode',
  templateUrl: './admin-editing-mode.component.html',
  styleUrls: ['./admin-editing-mode.component.css']
})
export class AdminEditingModeComponent implements OnInit {

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
