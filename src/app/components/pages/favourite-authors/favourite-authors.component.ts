import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-favourite-authors',
  templateUrl: './favourite-authors.component.html',
  styleUrls: ['./favourite-authors.component.css']
})
export class FavouriteAuthorsComponent implements OnInit {

  favouriteAuthors = [];

  nothing = true;

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token === null) {
      alert('You are not authorized user!');
      this.router.navigate(['/sign_in']);
    }

    this.dataSource.getListOfFavouriteAuthors(token)
      .subscribe((data: any) => {
        this.favouriteAuthors = data;
        this.checkCountInArray();
      });
  }

  checkCountInArray() {
    if (this.favouriteAuthors.length === 0) {
      this.nothing = true;
    } else {
      this.nothing = false;
    }
  }

}
