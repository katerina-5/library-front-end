import { Component, OnInit, Input } from '@angular/core';
import { Author } from 'src/app/shared/models/author';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.css']
})
export class AuthorItemComponent implements OnInit {

  @Input() authorItem: Author;

  constructor() { }

  ngOnInit() {
  }

}
