import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  login() {
    this.authservice.signIn(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
        this.toastr.success('Welcome back', 'You signed up!');
      },
      (err) => {
        console.log(err);
      }
    );
    this.loginForm.reset();
  }
}
