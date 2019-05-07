import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite-authors',
  templateUrl: './favourite-authors.component.html',
  styleUrls: ['./favourite-authors.component.css']
})
export class FavouriteAuthorsComponent implements OnInit {

  favouriteAuthors = [{
    id_author: 1,
    full_name: 'Author 1'
  },
  {
    id_author: 2,
    full_name: 'Author 2'
  },
  {
    id_author: 3,
    full_name: 'Author 3'
  },
  {
    id_author: 4,
    full_name: 'Author 4'
  },
  {
    id_author: 5,
    full_name: 'Author 5'
  }];

  constructor() { }

  ngOnInit() {
  }

}
