import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-favourite-genres',
  templateUrl: './favourite-genres.component.html',
  styleUrls: ['./favourite-genres.component.css']
})
export class FavouriteGenresComponent implements OnInit {

  favouriteGenres = [];

  nothing = true;

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/sign_in']);
    }

    this.dataSource.getListOfFavouriteGenres(token)
      .subscribe((data: any) => {
        this.favouriteGenres = data;
        this.checkCountInArray();
      });
  }

  checkCountInArray() {
    if (this.favouriteGenres.length === 0) {
      this.nothing = true;
    } else {
      this.nothing = false;
    }
  }

}
