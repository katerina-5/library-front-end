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

  signIn(loginStr, passwordStr): Observable<Object> {
    return this.http.post(
      environment.apiUrl + '/auth',
      {
        login: loginStr,
        password: passwordStr
      }
    );
  }

}
