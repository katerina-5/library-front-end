import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.css']
})
export class FavouriteBooksComponent implements OnInit {

  favouriteBooks = [];

  nothing = true;

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/sign_in']);
    }

    this.dataSource.getListOfFavouriteBooks(token)
      .subscribe((data: any) => {
        this.favouriteBooks = data;
      });
  }

  checkCountInArray() {
    if (this.favouriteBooks.length === 0) {
      this.nothing = true;
    } else {
      this.nothing = false;
    }
  }

}
