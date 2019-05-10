import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  isToken = false;
  isAdmin = false;

  constructor(private router: Router) {
    if (localStorage.getItem('token') !== null) {
      this.isToken = true;
    }
    if (localStorage.getItem('admin') === 'true') {
      this.isAdmin = true;
    }
  }

  ngOnInit() {
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    this.isToken = false;
    this.isAdmin = false;
    this.router.navigate(['/admin/sign_in']);
  }

}
