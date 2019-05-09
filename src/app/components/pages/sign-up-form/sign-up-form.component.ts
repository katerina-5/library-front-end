import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  hide = true;

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
  }

  register(surname, name, login, password) {
    this.dataSource.signUp(login, password, surname, name)
      .subscribe((data: any) => {
        if (data.auth === 'true') {
          document.cookie = `token=${data.token}; path=/`;
          localStorage.setItem('token', data.token);
          this.router.navigate(['/'])
            .catch((error) => alert(error));
        } else {
          alert('Authentication is failed!\n' + data.message);
        }
      })
  }

}
