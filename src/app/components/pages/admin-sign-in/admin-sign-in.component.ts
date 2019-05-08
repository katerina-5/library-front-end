import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

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

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
  }

  adminAuth(login, password) {
    this.dataSource.signInAdmin(login, password)
      .subscribe((data: any) => {
        if (data.auth === 'true' && data.admin === 'true') {
          document.cookie = `token=${data.token}; path=/`;
          localStorage.setItem('token', data.token);
          localStorage.setItem('admin', data.admin);
          // redirect to admin panel
          this.router.navigate(['admin/main_page'])
            .catch((error) => alert(error));
        } else {
          alert('Authentication is failed!\n' + data.message);
        }
      })
    // if (this.login === login) {
    //   if (this.password === password) {
    //     // redirect to admin panel
    //     this.router.navigate(['admin/main_page'])
    //       .catch((error) => alert(error));
    //   } else {
    //     alert('The pair login-password doesn\'t match!');
    //   }
    // } else {
    //   alert('This admin isn\'t in database!');
    // }
  }

}
