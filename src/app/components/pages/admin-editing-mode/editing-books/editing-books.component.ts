import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editing-books',
  templateUrl: './editing-books.component.html',
  styleUrls: ['./editing-books.component.css']
})
export class EditingBooksComponent implements OnInit {

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
      this.parseBook(url);
    }
  }

  parseBook(url) {
    this.dataSource.parseBook(url)
      .subscribe((data: any) => {
        console.log(data);
      });
  }
}
