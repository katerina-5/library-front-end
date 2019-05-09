import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Object> {
    return this.http.get(
      environment.apiUrl + '/books',
    );
  }

  getBookById(id): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/books/${id}`,
    );
  }

  getAuthors(): Observable<Object> {
    return this.http.get(
      environment.apiUrl + '/authors',
    );
  }

  getAuthorById(id): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/authors/${id}`,
    );
  }

  getGenres(): Observable<Object> {
    return this.http.get(
      environment.apiUrl + '/genres',
    );
  }

  getGenreById(id): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/genres/${id}`,
    );
  }

  getSeries(): Observable<Object> {
    return this.http.get(
      environment.apiUrl + '/series',
    );
  }

  getSerieById(id): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/series/${id}`,
    );
  }

  getBookAuthors(id_book): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/books/authors/${id_book}`,
    );
  }

  getBookGenres(id_book): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/books/genres/${id_book}`,
    );
  }

  getBookSerie(id_book): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/books/serie/${id_book}`,
    );
  }

  getSerieAuthors(id_serie): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/series/authors/${id_serie}`,
    );
  }

  getSerieBooks(id_serie): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/series/books/${id_serie}`,
    );
  }

  getAuthorBooks(id_author): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/authors/books/${id_author}`,
    );
  }

  getAuthorGenres(id_author): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/authors/genres/${id_author}`,
    );
  }

  getAuthorSeries(id_author): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/authors/series/${id_author}`,
    );
  }

  getGenreBooks(id_genre): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/genres/books/${id_genre}`,
    );
  }

  getGenreAuthors(id_genre): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/genres/authors/${id_genre}`,
    );
  }

  searchBooks(searchRequest): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/search/books',
      {
        search_request: searchRequest
      }
    );
  }

  searchAuthors(searchRequest): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/search/authors',
      {
        search_request: searchRequest
      }
    );
  }

  searchGenres(searchRequest): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/search/genres',
      {
        search_request: searchRequest
      }
    );
  }

  searchSeries(searchRequest): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/search/series',
      {
        search_request: searchRequest
      }
    );
  }

  parseBook(url): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/parser/book',
      {
        url: url
      });
  }

  parseAuthor(url): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/parser/author',
      {
        url: url
      });
  }

  parseGenre(url): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/parser/genre',
      {
        url: url
      });
  }

  parseSerie(url): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/parser/serie',
      {
        url: url
      });
  }

  signIn(loginStr, passwordStr): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/auth',
      {
        login: loginStr,
        password: passwordStr
      }
    );
  }

  signUp(loginStr, passwordStr, surnameStr, nameStr): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/sign-up',
      {
        login: loginStr,
        password: passwordStr,
        surname: surnameStr,
        name: nameStr
      }
    );
  }

  signInAdmin(loginStr, passwordStr): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/admin/sign-in',
      {
        login: loginStr,
        password: passwordStr
      }
    );
  }

  addBookToFavourite(token, id_book): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_books/',
      {
        token: token,
        id_book: id_book
      }
    );
  }

  deleteBookFromFavourite(token, id_book): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_books/delete',
      {
        token: token,
        id_book: id_book
      }
    );
  }

  checkBookInFavourite(token, id_book): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_books/check',
      {
        token: token,
        id_book: id_book
      }
    );
  }

  addAuthorToFavourite(token, id_author): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_authors/',
      {
        token: token,
        id_author: id_author
      }
    );
  }

  deleteAuthorFromFavourite(token, id_author): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_authors/delete',
      {
        token: token,
        id_author: id_author
      }
    );
  }

  checkAuthorInFavourite(token, id_author): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_authors/check',
      {
        token: token,
        id_author: id_author
      }
    );
  }

  addGenreToFavourite(token, id_genre): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_genres/',
      {
        token: token,
        id_genre: id_genre
      }
    );
  }

  deleteGenreFromFavourite(token, id_genre): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_genres/delete',
      {
        token: token,
        id_genre: id_genre
      }
    );
  }

  checkGenreInFavourite(token, id_genre): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_genres/check',
      {
        token: token,
        id_genre: id_genre
      }
    );
  }

  addSerieToFavourite(token, id_serie): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_series/',
      {
        token: token,
        id_serie: id_serie
      }
    );
  }

  deleteSerieFromFavourite(token, id_serie): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_series/delete',
      {
        token: token,
        id_serie: id_serie
      }
    );
  }

  checkSerieInFavourite(token, id_serie): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/favourite_series/check',
      {
        token: token,
        id_serie: id_serie
      }
    );
  }

  getListOfFavouriteBooks(token): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/favourite_books/${token}`
    );
  }

  getListOfFavouriteAuthors(token): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/favourite_authors/${token}`
    );
  }

  getListOfFavouriteGenres(token): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/favourite_genres/${token}`
    );
  }

  getListOfFavouriteSeries(token): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/favourite_series/${token}`
    );
  }

  getUserInformation(token): Observable<Object> {
    return this.http.get(
      environment.apiUrl + `/users/${token}`
    );
  }

}
