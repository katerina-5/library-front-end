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
    login: '',
    password: '',
    nickname: '',
    last_name: '',
    first_name: '',
    phone: '',
    email: ''
  };

  isEditing = false;
  isChanging = false;

  constructor(private router: Router, private dataSource: ApiService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token === null) {
      alert('You are not authorized user!');
      this.router.navigate(['/sign_in']);
    }

    this.dataSource.getUserInformation(token)
      .subscribe((data: any) => {
        this.profileInformation = data[0];
      });
  }

  editInformation() {
    this.isEditing = !this.isEditing;
  }

  saveInformation(nickname, firstName, lastName, phone, email) {
    this.profileInformation = {
      nickname: nickname,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email
    }

    // save profile information to database

    const token = localStorage.getItem('token');
    this.dataSource.updateUserInformation(token, nickname, firstName, lastName, phone, email)
      .subscribe((data: any) => {
        // this.profileInformation = data[0];
      });

    this.isEditing = !this.isEditing;
  }

  changePassword(oldPassword, newPassword) {
    if (this.isChanging) {
      if (oldPassword === '' || newPassword === '') {
        alert('The fields \'Old password\' and \'New password\' can\'t be empty!');
        this.isChanging = !this.isChanging;
        return;
      }

      // update password in database
      const token = localStorage.getItem('token');
      this.dataSource.changePassword(token, oldPassword, newPassword)
        .subscribe((data: any) => {
          if (data.message !== undefined) {
            alert(data.message);
          }
        });
    }

    this.isChanging = !this.isChanging;
  }

}
