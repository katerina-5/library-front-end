import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  profileInformation: any = {
    login: 'login',
    password: 'password',
    nickname: 'nickname',
    last_name: 'Surname',
    first_name: 'Name',
    phone: '000-000-00-00',
    email: 'admin@mail.com'
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
