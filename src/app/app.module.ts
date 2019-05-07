import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

// material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatMenuModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';

// component modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BooksCatalogComponent } from './components/pages/books-catalog/books-catalog.component';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { AuthorsCatalogComponent } from './components/pages/authors-catalog/authors-catalog.component';
import { GenresCatalogComponent } from './components/pages/genres-catalog/genres-catalog.component';
import { SignInFormComponent } from './components/pages/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/pages/sign-up-form/sign-up-form.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { AdminNavbarComponent } from './components/shared/admin-navbar/admin-navbar.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksCatalogComponent,
    MainPageComponent,
    AuthorsCatalogComponent,
    GenresCatalogComponent,
    SignInFormComponent,
    SignUpFormComponent,
    UserProfileComponent,
    AdminNavbarComponent,
    AdminSignInComponent,
    AdminMainPageComponent,
    NotFoundComponent,
    AdminEditingModeComponent,
    SeriesCatalogComponent,
    BookItemComponent,
    AuthorItemComponent,
    GenreItemComponent,
    SerieItemComponent,
    EditingBooksComponent,
    EditingAuthorsComponent,
    EditingGenresComponent,
    EditingSeriesComponent,
    AdminProfileComponent,
    FavouriteBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatBadgeModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
