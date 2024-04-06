import { Component } from '@angular/core';
import { ApiService } from '../Services/api-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public constructor(
    private apiService: ApiService,
    private router: Router
  ) {

    this.loading = false;
  }
  public username!: string;
  public password!: string;
  public loading: boolean;
  public validationError: string[] = [];

  public onSubmit(): void {
    try {
      this.validationError=[];
      if (this.username == null || this.username == '' ||
        this.password == null || this.password == '') {

        this.validationError.push('لطفا نام کاربری و رمز عبور را وارد کنید.');
        return;
      }
      this.loading = true;

      let url = `api/UserAccunting/Authenticate`;
      let body = {
        Username: this.username,
        Password: this.password
      }

      this.apiService.Post(url, body)
        .subscribe(
          result => {

            if (result == null) {
              return;
            }

            localStorage.setItem('token', result.token);
            localStorage.setItem('userFullName', result.userFullName);

            const token = localStorage.getItem("token");
            this.router.navigate(["home"]);
          },
          error => {
            console.log(error);
            this.loading = false;
            this.validationError.push(error.error.title);
            this.validationError.push(error.error.Message);
          },
          () => {
          }
        );
    } catch (error) {

    }
  }
}


