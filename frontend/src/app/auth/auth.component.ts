import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  http = inject(HttpClient);
  router = inject(Router);
  api = environment.api;

  user = environment.user;
  date = new Date();

  showError: boolean = false; 

  login(form: NgForm) {
    this.http.post(this.api + 'auth', form.value).subscribe((res: any) => {
      if (res == false)
        this.showError = true;
      else if(res == true) {
        sessionStorage.setItem(this.user, this.date.toString());
        this.router.navigateByUrl('admin');
      }
    })
  }
}
