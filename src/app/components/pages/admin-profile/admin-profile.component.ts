import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

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
    const admin = localStorage.getItem('admin');
    if (token !== null && admin !== 'true') {
      alert('403 Forbidden');
      this.router.navigate(['/admin/sign_in']);
    } else if (token === null) {
      alert('401 Unauthorized');
      this.router.navigate(['/admin/sign_in']);
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
