import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright = '© Copyright: Katerina Shevchenko Inc., 2019. All right reserved.';

  constructor() { }

  ngOnInit() {
  }

}
