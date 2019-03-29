import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/models/author';

@Component({
  selector: 'app-authors-catalog',
  templateUrl: './authors-catalog.component.html',
  styleUrls: ['./authors-catalog.component.css']
})
export class AuthorsCatalogComponent implements OnInit {

  // authors: Array<string> = ['Jane Austen', 'Sharlott Bronte', 'Ann Bronte', 'Emily Bronte', 'Elizabeth Gaskell'];
  authors: Array<Author> = [
    {
      idAuthor: 1,
      url: '/author/17138/',
      fullName: 'Jane Austen'
    },
    {
      idAuthor: 2,
      url: '/author/2201/',
      fullName: 'Sharlott Bronte'
    },
    {
      idAuthor: 3,
      url: '/author/5617/',
      fullName: 'Ann Bronte'
    },
    {
      idAuthor: 4,
      url: '/author/2847/',
      fullName: 'Emily Bronte'
    },
    {
      idAuthor: 5,
      url: '/author/5629/',
      fullName: 'Elizabeth Gaskell'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
