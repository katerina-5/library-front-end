import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors-catalog',
  templateUrl: './authors-catalog.component.html',
  styleUrls: ['./authors-catalog.component.css']
})
export class AuthorsCatalogComponent implements OnInit {

  authors: Array<string> = ['Jane Austen', 'Sharlott Bronte', 'Ann Bronte', 'Emily Bronte', 'Elizabeth Gaskell'];

  constructor() { }

  ngOnInit() {
  }

}
