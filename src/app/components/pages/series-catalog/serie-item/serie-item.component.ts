import { Component, OnInit, Input } from '@angular/core';
import { Serie } from 'src/app/shared/models/serie';

@Component({
  selector: 'app-serie-item',
  templateUrl: './serie-item.component.html',
  styleUrls: ['./serie-item.component.css']
})
export class SerieItemComponent implements OnInit {

  @Input() serieItem: Serie;

  constructor() { }

  ngOnInit() {
  }

}
