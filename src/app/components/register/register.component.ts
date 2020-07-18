import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  register() {
    this.authservice.signUp(this.user).subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/profile']);
        this.toastr.success('Welcome to SportsShopBA', 'You signed up!');
      },
      (err) => {
        if (err.error === 'The email is already taken') {
          this.toastr.error('Email already taken');
        }
      }
    );
    this.registerForm.reset();
  }
}
