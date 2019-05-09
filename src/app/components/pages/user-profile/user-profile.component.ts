import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileInformation: any = {
    login: 'login',
    password: 'password',
    nickname: 'nickname',
    last_name: 'Surname',
    first_name: 'Name',
    phone: '000-000-00-00',
    email: 'user@mail.com'
  };

  isEditing = false;

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token === null) {
      this.router.navigate(['/']);
    }

    this.dataSource.getUserInformation(token)
      .subscribe((data: any) => {
        this.profileInformation = data[0];
      });
  }

  editInformation() {
    this.isEditing = !this.isEditing;
  }

  saveInformation(login, password, nickname, firstName, lastName, phone, email) {
    // save profile information to database
    this.profileInformation = {
      login: login,
      password: password,
      nickname: nickname,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email
    }

    this.isEditing = !this.isEditing;
  }

}
