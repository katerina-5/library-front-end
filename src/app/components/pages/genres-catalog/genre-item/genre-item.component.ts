import { Component, OnInit, Input } from '@angular/core';
import { Genre } from 'src/app/shared/models/genre';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit {

  @Input() genreItem: Genre;

  constructor() { }

  ngOnInit() {
  }

}
