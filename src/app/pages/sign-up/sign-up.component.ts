import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onHandleSignUp(formData: { displayName: string; email: string; password: string; }) {
    const user = await this.authService.signUpWithEmail(
      formData.displayName,
      formData.email,
      formData.password
    );

    if (user) {
      this.router.navigate(['/']);
    }
  }

}

