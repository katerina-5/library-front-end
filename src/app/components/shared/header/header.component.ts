import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  isToken = false;

  constructor(private router: Router) {
    if (localStorage.getItem('token') !== null) {
      this.isToken = true;
      this.signIn = 'Profile';
      this.signUp = 'Sign out';
    }
  }

  ngOnInit() {
  }

  signOut() {
    localStorage.removeItem('token');
    this.isToken = false;
    this.signIn = 'Sign in';
    this.signUp = 'Sign up';
    this.router.navigate(['/sign_in']);
  }

}
