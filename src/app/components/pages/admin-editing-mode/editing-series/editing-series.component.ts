import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editing-series',
  templateUrl: './editing-series.component.html',
  styleUrls: ['./editing-series.component.css']
})
export class EditingSeriesComponent implements OnInit {

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');
    if (token !== null && admin !== 'true') {
      alert('403 Forbidden');
      this.router.navigate(['/admin/sign_in']);
    } else if (token === null) {
      alert('401 Unauthorized');
      this.router.navigate(['/admin/sign_in']);
    }
  }

  pressEnter(event) {
    let url = '';
    if (event.key === 'Enter') {
      url = event.target.value;
      this.parseSerie(url);
    }
  }

  parseSerie(url) {
    this.dataSource.parseSerie(url)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}
