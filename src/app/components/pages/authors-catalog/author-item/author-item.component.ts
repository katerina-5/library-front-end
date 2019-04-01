import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/app/shared/models/author';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {

  authors: Array<Author> = [
    {
      idAuthor: 1,
      url: '/author/17138/',
      fullName: 'Джейн Остин',
      fullNameOriginal: 'Jane Austen',
      image: 'http://readly.ru/public/media/authors/3/b/3b0801ae8bcdc27730e7385ea572cbf0_180x0.jpg'
    },
    {
      idAuthor: 2,
      url: '/author/2201/',
      fullName: 'Sharlott Bronte',
      fullNameOriginal: '',
      image: 'http://readly.ru/public/media/authors/f/a/fade361ab0f109ca8e3d4d511a63de91_180x0.jpg'
    },
    {
      idAuthor: 3,
      url: '/author/5617/',
      fullName: 'Ann Bronte',
      fullNameOriginal: '',
      image: ''
    },
    {
      idAuthor: 4,
      url: '/author/2847/',
      fullName: 'Emily Bronte',
      fullNameOriginal: '',
      image: ''
    },
    {
      idAuthor: 5,
      url: '/author/5629/',
      fullName: 'Elizabeth Gaskell',
      fullNameOriginal: '',
      image: ''
    }
  ];

  // @Input() authorItem: Author;
  authorItem: Author;
  id: number;

  constructor(private activateRoute: ActivatedRoute) {
    this.id = Number.parseInt(activateRoute.snapshot.params['id'], 5);
    console.log(this.id);
    this.authors.forEach(author => {
      if (author.idAuthor === this.id) {
        this.authorItem = author;
      }
    });
  }

  ngOnInit() {
  }

}
