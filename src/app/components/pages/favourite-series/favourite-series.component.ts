import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-favourite-series',
  templateUrl: './favourite-series.component.html',
  styleUrls: ['./favourite-series.component.css']
})
export class FavouriteSeriesComponent implements OnInit {

  favouriteSeries = [];

  nothing = true;

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token === null) {
      alert('You are not authorized user!');
      this.router.navigate(['/sign_in']);
    }

    this.dataSource.getListOfFavouriteBooks(token)
      .subscribe((data: any) => {
        this.favouriteSeries = data;
        this.checkCountInArray();
      });
  }

  checkCountInArray() {
    if (this.favouriteSeries.length === 0) {
      this.nothing = true;
    } else {
      this.nothing = false;
    }
  }

}
