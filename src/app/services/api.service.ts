import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Inject, Injectable } from "@angular/core";
import { GoogleLoginProvider, SocialAuthService } from "@abacritt/angularx-social-login";

@Injectable({
    providedIn: 'root'
})
export class APIService {
    constructor(private http: HttpClient, private authService: AuthService, private googleAuthService: SocialAuthService) {}

    getCalenderData() {
        // const newToken =  this.googleAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID);
        const token = this.authService.isAuthorized();
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', `Bearer ${token}`);
        return this.http.get('https://www.googleapis.com/calendar/v3/calendars/primary/events', { headers})
    }

    // getCalenderDataAPI() {
    //     // const newToken =  this.googleAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID);
    //     const token = this.authService.isAuthorized();
    //     let headers = new HttpHeaders();
    //     headers = headers.append('Authorization', `Bearer ${token}`);
    //     return this.http.get('https://www.googleapis.com/calendar/v3/users/me/calendarList', { headers})
    // }
}