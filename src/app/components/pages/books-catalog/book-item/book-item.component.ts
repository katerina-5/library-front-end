import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookItem: Book;

  constructor() { }

  ngOnInit() {
  }

}
