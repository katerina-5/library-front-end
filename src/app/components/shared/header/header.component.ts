import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  motivation = 'Read them all!';
  // motivation = 'Читай їх всіх!';
  booksCatalog = 'Catalog of books';
  // booksCatalog = 'Каталог книг';
  authorsCatalog = 'Catalog of authors';
  // authorsCatalog = 'Каталог авторів';
  genresCatalog = 'Catalog of genres';
  // genresCatalog = 'Каталог жанрів';
  seriesCatalog = 'Catalog of book series';
  // seriesCatalog = 'Каталог книжних серій';
  signIn = 'Sign in';
  // signIn = 'Ввійти';
  signUp = 'Sign up';
  // signUp = 'Зареєструватися';

  constructor() { }

  ngOnInit() {
  }

}
