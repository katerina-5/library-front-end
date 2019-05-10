import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editing-authors',
  templateUrl: './editing-authors.component.html',
  styleUrls: ['./editing-authors.component.css']
})
export class EditingAuthorsComponent implements OnInit {

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
      this.parseAuthor(url);
    }
  }

  parseAuthor(url) {
    this.dataSource.parseAuthor(url)
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}
