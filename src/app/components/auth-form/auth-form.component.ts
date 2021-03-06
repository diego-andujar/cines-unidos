import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  authForm!: FormGroup;
  @Output() sendFormEvent = new EventEmitter();
  @Input() isRegister: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.fb.group({
      displayName: '' ,
      email: '',
      password: '',
    });
  }

  async googleLogin() {
    const user = await this.authService.loginWithGoogle();
    if (user) {
      this.router.navigate(['/']);
    }
  }

  async emailLogin() {
    const formValues = {
      email: this.authForm.get('email').value,
      password: this.authForm.get('password').value,
    };
    const user = await this.authService.signInWithEmail(formValues.email, formValues.password);
    if (user) {
      this.router.navigate(['/']);
    } else {
      alert("error esos datos no existen")
    }
  }

  async onSubmit() {
    const formValues = {
      displayName: this.authForm.get('displayName').value,
      email: this.authForm.get('email').value,
      password: this.authForm.get('password').value,
    };
    this.sendFormEvent.emit(formValues);
  }

}
