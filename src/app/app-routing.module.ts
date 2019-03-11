import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksCatalogComponent } from './books-catalog/books-catalog.component';
import { MainPageComponent } from 'src/app/main-page/main-page.component';
import { AuthorsCatalogComponent } from 'src/app/authors-catalog/authors-catalog.component';
import { GenresCatalogComponent } from 'src/app/genres-catalog/genres-catalog.component';
import { SignInFormComponent } from 'src/app/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from 'src/app/sign-up-form/sign-up-form.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'books', component: BooksCatalogComponent },
  { path: 'authors', component: AuthorsCatalogComponent },
  { path: 'genres', component: GenresCatalogComponent },
  { path: 'sign_in', component: SignInFormComponent },
  { path: 'sign_up', component: SignUpFormComponent },
  // { path: 'admin/login', component:  },
  // { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
