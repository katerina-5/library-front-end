import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {

  // DON'T USE THIS FOR PRODUCTION!!!
  login = 'admin';
  password = 'admin';

  hide = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  adminAuth(login, password) {
    if (this.login === login) {
      if (this.password === password) {
        // redirect to admin panel
        this.router.navigate(['admin/main_page'])
          .catch((error) => alert(error));
      } else {
        alert('The pair login-password doesn\'t match!');
      }
    } else {
      alert('This admin isn\'t in database!');
    }
  }

}
