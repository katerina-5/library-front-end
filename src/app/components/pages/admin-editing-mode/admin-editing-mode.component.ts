import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-editing-mode',
  templateUrl: './admin-editing-mode.component.html',
  styleUrls: ['./admin-editing-mode.component.css']
})
export class AdminEditingModeComponent implements OnInit {

  constructor(private router: Router) { }

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
  }

}
