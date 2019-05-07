import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksCatalogComponent } from './components/pages/books-catalog/books-catalog.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { AuthorsCatalogComponent } from './components/pages/authors-catalog/authors-catalog.component';
import { GenresCatalogComponent } from './components/pages/genres-catalog/genres-catalog.component';
import { SignInFormComponent } from './components/pages/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/pages/sign-up-form/sign-up-form.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { AdminSignInComponent } from './components/pages/admin-sign-in/admin-sign-in.component';
import { AdminMainPageComponent } from './components/pages/admin-main-page/admin-main-page.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { AdminEditingModeComponent } from './components/pages/admin-editing-mode/admin-editing-mode.component';
import { SeriesCatalogComponent } from './components/pages/series-catalog/series-catalog.component';
import { BookItemComponent } from './components/pages/books-catalog/book-item/book-item.component';
import { AuthorItemComponent } from './components/pages/authors-catalog/author-item/author-item.component';
import { GenreItemComponent } from './components/pages/genres-catalog/genre-item/genre-item.component';
import { SerieItemComponent } from './components/pages/series-catalog/serie-item/serie-item.component';
import { EditingBooksComponent } from './components/pages/admin-editing-mode/editing-books/editing-books.component';
import { EditingAuthorsComponent } from './components/pages/admin-editing-mode/editing-authors/editing-authors.component';
import { EditingGenresComponent } from './components/pages/admin-editing-mode/editing-genres/editing-genres.component';
import { EditingSeriesComponent } from './components/pages/admin-editing-mode/editing-series/editing-series.component';
import { AdminProfileComponent } from './components/pages/admin-profile/admin-profile.component';
import { FavouriteBooksComponent } from './components/pages/favourite-books/favourite-books.component';
import { FavouriteAuthorsComponent } from './components/pages/favourite-authors/favourite-authors.component';
import { FavouriteGenresComponent } from './components/pages/favourite-genres/favourite-genres.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'books', component: BooksCatalogComponent },
  { path: 'book-details/:id', component: BookItemComponent },
  { path: 'author-details/:id', component: AuthorItemComponent },
  { path: 'genre-details/:id', component: GenreItemComponent },
  { path: 'serie-details/:id', component: SerieItemComponent },
  { path: 'authors', component: AuthorsCatalogComponent },
  { path: 'genres', component: GenresCatalogComponent },
  { path: 'series', component: SeriesCatalogComponent },
  { path: 'sign_in', component: SignInFormComponent },
  { path: 'sign_up', component: SignUpFormComponent },
  { path: 'user/profile', component: UserProfileComponent },
  { path: 'favourite_books', component: FavouriteBooksComponent },
  { path: 'favourite_authors', component: FavouriteAuthorsComponent },
  { path: 'favourite_genres', component: FavouriteGenresComponent },
  { path: 'admin/sign_in', component: AdminSignInComponent },
  { path: 'admin/main_page', component: AdminMainPageComponent },
  { path: 'admin/editing_mode', component: AdminEditingModeComponent },
  { path: 'admin/edit_books', component: EditingBooksComponent },
  { path: 'admin/edit_authors', component: EditingAuthorsComponent },
  { path: 'admin/edit_genres', component: EditingGenresComponent },
  { path: 'admin/edit_series', component: EditingSeriesComponent },
  { path: 'admin/profile', component: AdminProfileComponent },
  { path: 'not_found', component: NotFoundComponent },
  { path: 'admin', redirectTo: 'admin/sign_in', pathMatch: 'full' },
  { path: '**', redirectTo: 'not_found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
