import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatCardModule, } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from "@angular/material/icon";
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatIconModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        authLogin: false,
        providers:[ {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('317689148700-g8u5juf1gd8v9opgp1sfc7d7hn96d0cm.apps.googleusercontent.com')
        }],
        onError: (error: any) => {
          console.error('Socaial Login error', error)
        }
      } as SocialAuthServiceConfig
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
