import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genres-catalog',
  templateUrl: './genres-catalog.component.html',
  styleUrls: ['./genres-catalog.component.css']
})
export class GenresCatalogComponent implements OnInit {

  genres: Array<string> = ['classic'];

  constructor() { }

  ngOnInit() {
  }

}
