import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { SocialAuthService, GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { IUserDetails } from '../model/user-details.interface';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faCoffee = faCoffee
  constructor( private socialAuthService: SocialAuthService, private authService: AuthService, private router: Router) { }
  ngOnInit(): void { 
    this.socialAuthService.authState.subscribe((response: any) => {
      if(response) {
        this.authService.setUserDetails(response);
        this.router.navigate(['/']);
      }
      console.log('User loggedin', response)
    })
  }

  loginForm: FormGroup = new FormGroup({
    'username': new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
    'password': new FormControl(null, [Validators.required])
  });

  matcher = new MyErrorStateMatcher();

  login() {
    alert('Please login thorugh your google account')
  }

  loginWithGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
  }
}
