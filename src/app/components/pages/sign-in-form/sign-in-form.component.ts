import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  hide = true;

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
  }

  auth(login, password) {
    this.dataSource.signIn(login, password).subscribe((data: any) => {
      if (data.auth === 'true') {
        document.cookie = `token=${data.token}; path=/`;
        localStorage.setItem('token', data.token);
        this.router.navigate(['/'])
          .catch((error) => alert(error));
      } else {
        alert('Authentication is failed!\n' + data.message);
      }
    });
  }

}
