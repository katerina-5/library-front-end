import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
